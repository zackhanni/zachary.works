"use client";

import React, { useState, useEffect } from "react";

export default function SectionHeader({ title }: { title: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById(title);
      if (header) {
        const rect = header.getBoundingClientRect();
        setIsVisible(rect.top <= 100); // Adjust pixels from top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <div className="w-fit flex items-center justify-center z-20 sticky top-0 h-[90px]">
      <h2
        id={title}
        className={`text-2xl font-semibold transition-opacity duration-500 ${
          isVisible ? "text-black opacity-100" : "opacity-0"
        }`}
      >
        {title}
      </h2>{" "}
    </div>
  );
}
