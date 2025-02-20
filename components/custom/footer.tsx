"use client";

import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Her 2 saniyede bir kalp animasyonunu tetikle
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="z-10 border-t bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
        Created with{" "}
        <Heart
          className={`h-4 w-4 text-red-500 transition-transform ${
            isAnimating ? "scale-125" : "scale-100"
          }`}
        />{" "}
        by{" "}
        <a
          href="https://github.com/burakboduroglu"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline"
        >
          Burak Boduroğlu
        </a>
      </div>
    </footer>
  );
}
