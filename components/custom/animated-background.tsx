"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Point {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.speed = 0.1;
      }

      update() {
        this.y =
          this.baseY + Math.sin(Date.now() * 0.001 + this.baseX * 0.5) * 15;
      }
    }

    const points: Point[] = [];
    const spacing = 50;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        points.push(new Point(x * spacing, y * spacing));
      }
    }

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.update();

        if (i % cols !== cols - 1) {
          const nextPoint = points[i + 1];
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        }

        if (i < points.length - cols) {
          const bottomPoint = points[i + cols];
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(bottomPoint.x, bottomPoint.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
