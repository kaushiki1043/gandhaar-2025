import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise"; // Import the createNoise3D function
import "../style/CanvasComponent.css";


const WaveCanvas = () => {
  const canvasRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const noise3D = useRef(createNoise3D(Math.random)); // Create the 3D noise generator


  // Canvas resize logic
  const resizeCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(2, 2); // Handle high-DPI screens
    return ctx;
  };


  // Wave object class
  class Wave {
    constructor(color) {
      this.color = color;
      this.vectors = [];
    }


    draw(ctx, t) {
      ctx.save();
      ctx.translate(window.innerWidth / 2, window.innerHeight / 2);


      const base = 200;
      const scale = 50;
      this.vectors = [];


      for (let degree = 0; degree < 180; degree++) {
        const radius = (degree / 90) * Math.PI;
        const length =
          base + noise3D.current(Math.cos(radius), Math.sin(radius), t) * scale;


        this.vectors.push({
          x: length * Math.cos(radius),
          y: length * Math.sin(radius),
        });
      }


      this.drawLine(ctx);
      ctx.restore();
    }


    drawLine(ctx) {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;


      for (let i = 0; i < this.vectors.length; i++) {
        ctx.beginPath();
        const { x, y } = this.vectors[i];
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = resizeCanvas(canvas);
    const wave = new Wave("#FE1735");
    let tick = 0;


    const animate = () => {
      if (playing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wave.draw(ctx, tick);
        tick += 0.05;
        requestAnimationFrame(animate);
      }
    };


    animate();


    // Resize handling
    const handleResize = () => {
      resizeCanvas(canvas);
    };
    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [playing]);


  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};


export default WaveCanvas;
