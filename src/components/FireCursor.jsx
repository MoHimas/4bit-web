// components/FireCursor.jsx
import React, { useEffect, useRef } from "react";

const FireCursor = () => {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const aura = auraRef.current;

    let lastX = 0,
      lastY = 0;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      aura.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;

      // calculate speed for glow intensity
      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      aura.style.boxShadow = `
        0 0 ${10 + speed * 0.5}px 4px rgba(255, 100, 0, 0.6),
        0 0 ${30 + speed * 0.8}px 8px rgba(255, 50, 0, 0.4),
        0 0 ${50 + speed}px 12px rgba(255, 0, 0, 0.2)
      `;

      lastX = x;
      lastY = y;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* small core */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-orange-500 pointer-events-none z-[9999] mix-blend-difference"
      ></div>

      {/* glowing aura */}
      <div
        ref={auraRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-orange-400 opacity-50 pointer-events-none z-[9998] blur-2xl transition-all duration-75 ease-out"
      ></div>
    </>
  );
};

export default FireCursor;
