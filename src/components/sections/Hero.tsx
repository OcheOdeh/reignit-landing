import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  onScrollDown?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // WebGL animation (simplified for stability/performance or reused)
  // For now, retaining the existing efficient WebGL boilerplate but adjusting colors if needed or keeping the dark vibe.
  // We'll keep the existing animation logic but arguably might want to tweak colors. 
  // Since the user asked for "Cyberpunk Professional" (Dark, Neon Green/Purple), the existing shader had purple/cyan.
  // Let's modify the shader colors in the existing code or just rely on CSS overlay.
  // For this rewrite, I'll use a cleaner specific implementation or keep the noise effect which fits cyberpunk.

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      // Simplex noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        
        // Cyberpunk colors: Dark background with noise
        vec3 color1 = vec3(0.05, 0.05, 0.05); // Dark Gray
        vec3 color2 = vec3(0.0, 0.0, 0.0); // Black
        
        vec3 color = mix(color1, color2, uv.y);
        
        // Add animated noise with green/purple tint possibility
        float noise = snoise(uv * 3.0 + time * 0.1) * 0.05;
        color += noise;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader!, vertexShaderSource);
    gl.compileShader(vertexShader!);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader!, fragmentShaderSource);
    gl.compileShader(fragmentShader!);

    const program = gl.createProgram();
    gl.attachShader(program!, vertexShader!);
    gl.attachShader(program!, fragmentShader!);
    gl.linkProgram(program!);
    gl.useProgram(program!);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program!, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program!, 'time');
    const resolutionLocation = gl.getUniformLocation(program!, 'resolution');

    let startTime = Date.now();
    const animate = () => {
      const time = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter text-white mb-4 leading-tight uppercase"
          >
            Relevance is <span className="text-neon-green">Currency</span>. <br />
            Stop <span className="text-neon-purple">Hiding</span>.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The AI era has no silent billionaires. We build your influence—whether you show your face or not.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/agency" className="cta-primary w-full sm:w-auto text-center border-2 border-transparent hover:border-neon-green">
            Start My Agency Plan
          </Link>
          <Link href="/toolkit" className="cta-secondary w-full sm:w-auto text-center hover:text-neon-purple hover:border-neon-purple">
            Explore the Toolkit
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
