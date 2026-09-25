"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export default function StatsCounter({ value, suffix = "", decimals = 0, label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const duration = 1800; // ms

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * value;
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={containerRef} className="flex flex-col space-y-1 p-4 md:p-6 group">
      <div className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-container tracking-tight leading-none">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        <span className="text-[#8d4f00] ml-0.5">{suffix}</span>
      </div>
      <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
