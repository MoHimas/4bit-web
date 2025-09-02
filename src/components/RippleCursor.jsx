// components/RippleCursor.jsx
import React, { useEffect, useRef } from "react";

const RippleCursor = () => {
  const canvasRef = useRef(null);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 120; // how far ripple spreads
        this.opacity = 0.6;
      }

      update() {
        this.radius += 3; // expansion speed
        this.opacity -= 0.02; // fade
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 51, 234, ${this.opacity})`; // purple ripple
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    }

    const handleClick = (e) => {
      ripples.current.push(new Ripple(e.clientX, e.clientY));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((r, index) => {
        r.update();
        r.draw();
        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("click", handleClick);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default RippleCursor;
