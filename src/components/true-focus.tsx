"use client";

import { motion } from "motion/react";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import "./true-focus.css";

type TrueFocusProps = {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
};

type FocusRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "hsl(var(--accent))",
  glowColor = "rgb(218 156 45 / 0.62)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className
}: TrueFocusProps) {
  const words = useMemo(() => sentence.split(separator), [sentence, separator]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (manualMode) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => window.clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    const activeWord = wordRefs.current[currentIndex];
    const container = containerRef.current;
    if (!activeWord || !container) return;

    const parentRect = container.getBoundingClientRect();
    const activeRect = activeWord.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  function handleMouseEnter(index: number) {
    if (!manualMode) return;
    setLastActiveIndex(index);
    setCurrentIndex(index);
  }

  function handleMouseLeave() {
    if (!manualMode || lastActiveIndex === null) return;
    setCurrentIndex(lastActiveIndex);
  }

  return (
    <div className={`focus-container ${className ?? ""}`} ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={`${word}-${index}`}
            ref={(element) => {
              wordRefs.current[index] = element;
            }}
            className={`focus-word ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""}`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease, color ${animationDuration}s ease`
            } as CSSProperties}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor
          } as CSSProperties
        }
      >
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </motion.div>
    </div>
  );
}
