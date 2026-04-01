import { useEffect, useRef } from "react";

const LABELS = ["PERSON", "VEHICLE", "DRONE", "ROVER", "UNKNOWN", "FORKLIFT"];

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

export default function PerceptionCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const boxes = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const buildBoxes = () => {
      boxes.length = 0;
      const count = Math.max(5, Math.floor(width / 130));
      for (let index = 0; index < count; index += 1) {
        const boxWidth = randomRange(78, 132);
        const boxHeight = randomRange(68, 148);

        boxes.push({
          x: randomRange(36, Math.max(42, width - boxWidth - 36)),
          y: randomRange(68, Math.max(76, height - boxHeight - 82)),
          width: boxWidth,
          height: boxHeight,
          vx: randomRange(-0.24, 0.24),
          vy: randomRange(-0.18, 0.18),
          label: LABELS[index % LABELS.length],
          confidence: `${Math.round(randomRange(87, 99))}%`,
        });
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(320, Math.floor(bounds.width));
      height = Math.max(360, Math.floor(bounds.height));

      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      buildBoxes();
    };

    const drawPointCloud = (time) => {
      const dotCount = Math.floor(width / 18);
      for (let index = 0; index < dotCount; index += 1) {
        const x = (index * 19 + (time * 0.04) % 40) % (width + 40) - 20;
        const y =
          height * 0.22 +
          Math.sin(index * 0.5 + time * 0.0016) * 24 +
          ((index % 7) * height) / 12;
        const alpha = 0.08 + ((index % 4) + 1) * 0.03;
        const size = 1 + (index % 3) * 0.75;

        context.beginPath();
        context.fillStyle = `rgba(83, 215, 255, ${alpha})`;
        context.arc(x, y % height, size, 0, Math.PI * 2);
        context.fill();
      }
    };

    const drawCrosshair = (time) => {
      const cx = width * (0.35 + 0.22 * Math.sin(time * 0.0007));
      const cy = height * (0.5 + 0.18 * Math.cos(time * 0.0006));
      const radius = 26 + 5 * Math.sin(time * 0.0024);

      context.save();
      context.strokeStyle = "rgba(28, 108, 255, 0.55)";
      context.lineWidth = 1;
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.stroke();

      context.beginPath();
      context.moveTo(cx - radius - 8, cy);
      context.lineTo(cx + radius + 8, cy);
      context.moveTo(cx, cy - radius - 8);
      context.lineTo(cx, cy + radius + 8);
      context.strokeStyle = "rgba(83, 215, 255, 0.45)";
      context.stroke();
      context.restore();
    };

    const render = (time) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(3, 7, 12, 0.16)";
      context.fillRect(0, 0, width, height);

      drawPointCloud(time);

      boxes.forEach((box) => {
        box.x += box.vx;
        box.y += box.vy;

        if (box.x < 18 || box.x + box.width > width - 18) box.vx *= -1;
        if (box.y < 48 || box.y + box.height > height - 58) box.vy *= -1;

        context.save();
        context.strokeStyle = "rgba(83, 215, 255, 0.88)";
        context.lineWidth = 1.5;
        context.shadowColor = "rgba(83, 215, 255, 0.25)";
        context.shadowBlur = 10;
        context.strokeRect(box.x, box.y, box.width, box.height);

        context.fillStyle = "rgba(5, 10, 16, 0.86)";
        context.fillRect(box.x, box.y - 24, Math.min(118, box.width), 20);
        context.fillStyle = "#dff7ff";
        context.font = '12px "IBM Plex Mono", monospace';
        context.fillText(`${box.label} / ${box.confidence}`, box.x + 8, box.y - 10);

        context.setLineDash([5, 7]);
        context.beginPath();
        context.moveTo(box.x + box.width / 2, box.y + box.height);
        context.lineTo(box.x + box.width / 2, height - 28);
        context.strokeStyle = "rgba(83, 215, 255, 0.26)";
        context.stroke();
        context.restore();
      });

      drawCrosshair(time);
      frame = window.requestAnimationFrame(render);
    };

    resize();
    frame = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="perception-canvas" aria-hidden="true" />;
}
