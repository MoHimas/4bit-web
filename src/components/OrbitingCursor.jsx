// components/OrbitingCursor.jsx
import React, { useEffect, useRef } from "react";

const OrbitingCursor = () => {
  const cursorRef = useRef(null);
  const satellitesRef = useRef([]);
  const angleRef = useRef(0);
  const orbitRadius = useRef(25);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    // animate orbit
    const animate = () => {
      angleRef.current += 0.05;

      satellitesRef.current.forEach((satellite, i) => {
        const radius = orbitRadius.current + i * 12;
        const angle =
          angleRef.current + (i * (Math.PI * 2)) / satellitesRef.current.length;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        satellite.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };
    animate();

    // hover effect: scatter satellites
    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        orbitRadius.current = 60; // satellites fly outward
        cursor.style.transform += " scale(1.8)"; // cursor grows
      });
      el.addEventListener("mouseleave", () => {
        orbitRadius.current = 25; // reset
        cursor.style.transform = cursor.style.transform.replace(
          " scale(1.8)",
          ""
        );
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const colors = ["#9333EA", "#3B82F6", "#F59E0B", "#EF4444", "#10B981"]; // neon set

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[9999] shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-transform duration-200"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (satellitesRef.current[i] = el)}
          className="absolute top-0 left-0 w-2 h-2 rounded-full"
          style={{
            background: colors[i % colors.length],
            boxShadow: `0 0 10px ${colors[i % colors.length]}`,
            opacity: 0.9,
          }}
        ></div>
      ))}
    </div>
  );
};

export default OrbitingCursor;
