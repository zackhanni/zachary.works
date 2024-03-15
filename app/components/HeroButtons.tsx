"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function HeroButtons() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      {isVisible && (
        <div className="flex fixed top-1/2 pt-8 left-1/2 -translate-x-1/2">
          <Button name="Experience" password={false} link="#experience" />
          <Button name="Projects" password={false} link="#projects" />
          <Button name="Contact" password={false} link="#contact" />
        </div>
      )}
    </div>
  );
}
