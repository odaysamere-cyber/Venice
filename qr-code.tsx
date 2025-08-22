import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  darkColor?: string;
  lightColor?: string;
}

export function QRCode({ 
  value, 
  size = 200, 
  className = "", 
  darkColor = "#000000",
  lightColor = "#ffffff"
}: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current || !value) return;
      
      await QRCodeLib.toCanvas(canvasRef.current, value, {
        width: size,
        margin: 2,
        color: {
          dark: darkColor,
          light: lightColor,
        },
      });
    };

    generateQR();
  }, [value, size, darkColor, lightColor]);

  return (
    <div className={`inline-block ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="rounded-lg border-2 border-primary/30"
        data-testid="qr-code-canvas"
      />
    </div>
  );
}