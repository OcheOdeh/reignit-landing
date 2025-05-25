import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import AuditWizard from '../forms/AuditWizard';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAuditWizardOpen, setIsAuditWizardOpen] = useState<boolean>(false);

  // WebGL animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Simple shader for gradient background with animated noise
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
        
        // Gradient colors
        vec3 color1 = vec3(0.5, 0.0, 1.0); // Purple
        vec3 color2 = vec3(0.0, 0.9, 1.0); // Cyan
        
        // Base gradient
        vec3 color = mix(color1, color2, uv.y);
        
        // Add animated noise
        float noise = snoise(uv * 3.0 + time * 0.2) * 0.15;
        color += noise;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader!, vertexShaderSource);
    gl.compileShader(vertexShader!);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader!, fragmentShaderSource);
    gl.compileShader(fragmentShader!);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program!, vertexShader!);
    gl.attachShader(program!, fragmentShader!);
    gl.linkProgram(program!);
    gl.useProgram(program!);

    // Set up buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program!, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Set up uniforms
    const timeLocation = gl.getUniformLocation(program!, 'time');
    const resolutionLocation = gl.getUniformLocation(program!, 'resolution');

    // Animation loop
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

  const handleOpenAuditWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAuditWizardOpen(true);
  };

  const handleCloseAuditWizard = () => {
    setIsAuditWizardOpen(false);
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* WebGL Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full -z-10"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 -z-5"></div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-white mb-4 md:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Business{' '}
            <span className="text-accent block sm:inline">With AI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-neutral-smoke max-w-3xl mx-auto mb-8 md:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Custom AI solutions that deliver real ROI. From customer experience 
            to workflow automation, we build AI that works for you.
          </motion.p>

          <motion.div
            className="flex justify-center px-4 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#audit" 
              className="cta-primary w-full text-center" 
              onClick={handleOpenAuditWizard}
            >
              Book Free AI Audit
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDownIcon className="h-8 w-8 text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Audit Wizard Modal */}
      <AuditWizard 
        isOpen={isAuditWizardOpen} 
        onClose={handleCloseAuditWizard} 
        embedded={false}
      />
    </>
  );
};

export default Hero;
