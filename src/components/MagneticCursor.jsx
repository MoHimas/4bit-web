// components/MagneticCursor.jsx
import React, { useEffect, useRef } from "react";

const MagneticCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Magnetic effect on hoverable elements
    const hoverables = document.querySelectorAll("a, button, .hoverable");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const rect = el.getBoundingClientRect();

        const handleMagnetic = (e) => {
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`; // element moves
          cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(2)`; // cursor grows
        };

        const resetMagnetic = () => {
          el.style.transform = "translate(0px, 0px)";
          cursor.style.transform = "scale(1)";
          el.removeEventListener("mousemove", handleMagnetic);
        };

        el.addEventListener("mousemove", handleMagnetic);
        el.addEventListener("mouseleave", resetMagnetic, { once: true });
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-purple-500 mix-blend-difference pointer-events-none z-[9999] transition-transform duration-200 ease-out"
    ></div>
  );
};

export default MagneticCursor;
