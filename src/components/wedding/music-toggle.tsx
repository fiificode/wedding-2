"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fixed music button. The source autoplays at 0.7 volume and loops; browsers block
 * autoplay with sound, so we also start on the first user interaction.
 */
export function MusicToggle() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audio.current;
    if (!el) return;
    el.volume = 0.7;
    const start = () => el.play().catch(() => {});
    start();
    const onFirst = () => {
      start();
      window.removeEventListener("pointerdown", onFirst);
    };
    window.addEventListener("pointerdown", onFirst);
    return () => window.removeEventListener("pointerdown", onFirst);
  }, []);

  return (
    <>
      <audio
        ref={audio}
        src="/media/gratitude.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        aria-label={playing ? "Pause music" : "Play music"}
        onClick={() => {
          const el = audio.current;
          if (!el) return;
          if (el.paused) el.play().catch(() => {});
          else el.pause();
        }}
        className="frost fixed bottom-[calc(env(safe-area-inset-bottom)+14px)] right-4 z-50 flex size-11 items-center justify-center rounded-full text-gold"
      >
        <span aria-hidden="true" className="text-base">
          {playing ? "🔊" : "🔇"}
        </span>
      </button>
    </>
  );
}
