"use client";

import { useEffect, useState } from "react";

const ROTATE_INTERVAL_MS = 2500;

type HeroHighlightWordProps = {
  words: readonly string[];
  intervalMs?: number;
};

/**
 * Cycles through highlight words with a fade-up animation. Minimal re-renders:
 * only the word span updates; interval is cleared on unmount.
 */
export function HeroHighlightWord({
  words,
  intervalMs = ROTATE_INTERVAL_MS,
}: HeroHighlightWordProps) {
  const [index, setIndex] = useState(0);
  const word = words[index % words.length];

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      key={word}
      className="hero-highlight-word inline-block text-accent"
      aria-live="polite"
      aria-atomic="true"
    >
      {word}
    </span>
  );
}
