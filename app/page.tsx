"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas'ı ekran boyutuna ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Grid noktaları için class
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
        // Noktaları dalgalı hareket ettir
        this.y =
          this.baseY + Math.sin(Date.now() * 0.001 + this.baseX * 0.5) * 15;
      }
    }

    // Grid oluştur
    const points: Point[] = [];
    const spacing = 50;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        points.push(new Point(x * spacing, y * spacing));
      }
    }

    // Animasyon
    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid çizgileri
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.update();

        // Yatay çizgiler
        if (i % cols !== cols - 1) {
          const nextPoint = points[i + 1];
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        }

        // Dikey çizgiler
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

  return (
    <main className="relative min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl">
            Kodexen
          </h1>
          <p className="mb-12 text-lg text-white/70 sm:text-xl">
            Mühendisler için Sosyal Platform
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            size="lg"
            className="min-w-[160px] bg-white text-black hover:bg-white/90"
          >
            <Link href="/feed">Keşfet</Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="min-w-[160px] bg-white text-black hover:bg-white/90"
          >
            <Link href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}>
              Giriş Yap
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="min-w-[160px] bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href={process.env.NEXT_PUBLIC_REGISTER_PATH as string}>
              Kayıt Ol
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
