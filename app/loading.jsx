"use client";
import React, { useState, useEffect } from "react";

const loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return "";
        }
        return prevDots + ".";
      });
    }, 500); // Adjust speed of animation here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <p className="text-4xl text-white">Loading{dots}</p>
      </div>
    </div>
  );
};

export default loading;
