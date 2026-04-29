import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── Lightning WebGL component ────────────────────────────────────────────────
interface LightningProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

const Lightning: React.FC<LightningProps> = ({
  hue = 211,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertSrc = `
      attribute vec2 aPosition;
      void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }
    `;
    const fragSrc = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }
      float hash11(float p) { p=fract(p*.1031); p*=p+33.33; p*=p+p; return fract(p); }
      float hash12(vec2 p) {
        vec3 p3=fract(vec3(p.xyx)*.1031); p3+=dot(p3,p3.yzx+33.33);
        return fract((p3.x+p3.y)*p3.z);
      }
      mat2 rotate2d(float theta) { float c=cos(theta),s=sin(theta); return mat2(c,-s,s,c); }
      float noise(vec2 p) {
        vec2 ip=floor(p),fp=fract(p);
        float a=hash12(ip),b=hash12(ip+vec2(1,0)),c=hash12(ip+vec2(0,1)),d=hash12(ip+1.);
        vec2 t=smoothstep(0.0,1.0,fp);
        return mix(mix(a,b,t.x),mix(c,d,t.x),t.y);
      }
      float fbm(vec2 p) {
        float value=0.0,amplitude=0.5;
        for(int i=0;i<OCTAVE_COUNT;++i){value+=amplitude*noise(p);p*=rotate2d(0.45);p*=2.0;amplitude*=0.5;}
        return value;
      }
      void main() {
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv=2.0*uv-1.0;
        uv.x*=iResolution.x/iResolution.y;
        uv.x+=uXOffset;
        uv+=2.0*fbm(uv*uSize+0.8*iTime*uSpeed)-1.0;
        float dist=abs(uv.x);
        vec3 baseColor=hsv2rgb(vec3(uHue/360.0,0.7,0.8));
        vec3 col=baseColor*pow(mix(0.0,0.07,hash11(iTime*uSpeed))/dist,1.0)*uIntensity;
        gl_FragColor=vec4(col,1.0);
      }
    `;

    const compileShader = (src: string, type: number) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vs = compileShader(vertSrc, gl.VERTEX_SHADER);
    const fs = compileShader(fragSrc, gl.FRAGMENT_SHADER);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'iResolution');
    const uTime = gl.getUniformLocation(prog, 'iTime');
    const uHueLoc = gl.getUniformLocation(prog, 'uHue');
    const uXOff = gl.getUniformLocation(prog, 'uXOffset');
    const uSpd = gl.getUniformLocation(prog, 'uSpeed');
    const uInt = gl.getUniformLocation(prog, 'uIntensity');
    const uSz = gl.getUniformLocation(prog, 'uSize');

    const t0 = performance.now();
    let raf: number;
    const render = () => {
      resizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.uniform1f(uHueLoc, hue);
      gl.uniform1f(uXOff, xOffset);
      gl.uniform1f(uSpd, speed);
      gl.uniform1f(uInt, intensity);
      gl.uniform1f(uSz, size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(raf);
      gl.deleteProgram(prog);
    };
  }, [hue, xOffset, speed, intensity, size]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

// ─── Floating stat badges ─────────────────────────────────────────────────────
interface StatBadgeProps {
  label: string;
  value: string;
  position: string;
}

const StatBadge: React.FC<StatBadgeProps> = ({ label, value, position }) => (
  <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="text-white relative">
        <div className="font-semibold text-sm">{value}</div>
        <div className="text-white/60 text-xs">{label}</div>
        <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    </div>
  </div>
);

// ─── Main hero ────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface HeroOdysseyProps {
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export const HeroOdyssey: React.FC<HeroOdysseyProps> = ({ onPrimary, onSecondary }) => (
  <div className="relative w-full bg-black text-white overflow-hidden min-h-screen">

    {/* ── Background layer ── */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/80" />

      {/* Blue glow behind sphere */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 blur-3xl" />

      {/* Lightning beam */}
      <div className="absolute inset-0 top-0 left-1/2 w-full -translate-x-1/2 h-full">
        <Lightning hue={211} xOffset={0} speed={1.4} intensity={0.55} size={2} />
      </div>

      {/* Planet sphere */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[620px] md:h-[620px] rounded-full backdrop-blur-3xl bg-[radial-gradient(circle_at_25%_90%,_#1a3a6b_15%,_#000000de_70%,_#000000ed_100%)]" />
    </div>

    {/* ── Content layer ── */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center min-h-screen pt-28 pb-12">

      {/* Floating stat badges */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full relative h-32 mb-4"
      >
        <motion.div variants={item}>
          <StatBadge value="50+" label="tiendas creadas" position="left-0 sm:left-8 top-8" />
        </motion.div>
        <motion.div variants={item}>
          <StatBadge value="+38%" label="más conversión" position="left-1/4 top-0" />
        </motion.div>
        <motion.div variants={item}>
          <StatBadge value="24/7" label="Agente IA activo" position="right-1/4 top-0" />
        </motion.div>
        <motion.div variants={item}>
          <StatBadge value="Sin" label="permanencia mínima" position="right-0 sm:right-8 top-8" />
        </motion.div>
      </motion.div>

      {/* Hero copy */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 backdrop-blur-md border border-blue-300/25 rounded-full text-sm mb-8"
        >
          <span className="text-blue-300">✦</span>
          <span className="text-white/80">Especialistas en E-commerce — Tienda + Portal exclusivo + Agente IA</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-light tracking-tight mb-2"
        >
          Landing Pages que
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-light pb-3 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent"
        >
          venden de verdad.
        </motion.h2>

        <motion.p
          variants={item}
          className="text-white/60 max-w-xl mt-2 mb-10 text-lg leading-relaxed"
        >
          Construimos tiendas de alto rendimiento con tu propio portal de control y un agente de IA que trabaja por ti 24/7.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrimary}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-500/30"
          >
            Ver planes y precios
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSecondary}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
          >
            Solicita una demo gratuita
          </motion.button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 hover:opacity-80 transition-opacity duration-500"
        >
          {['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo', 'TikTok Ads'].map((t) => (
            <span key={t} className="text-sm font-bold text-white tracking-widest uppercase">{t}</span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
);
