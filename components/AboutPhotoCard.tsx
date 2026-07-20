"use client";

import { useEffect, useRef, useState } from "react";

const SOURCES = [
  "/assets/amar-dehokhan.mp3",
  "/assets/amar-dehokhan.ogg",
  "/assets/amar-dehokhan.m4a",
  "/assets/amar-dehokhan.wav",
];

export default function AboutPhotoCard() {
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);
  playingRef.current = playing;

  useEffect(() => {
    let idx = 0;
    const audio = new Audio(SOURCES[0]);
    audio.loop = true;
    audioRef.current = audio;

    const onError = () => {
      idx++;
      if (idx < SOURCES.length) {
        audio.src = SOURCES[idx];
        audio.load();
        if (playingRef.current) audio.play().catch(() => {});
      } else {
        setMissing(true);
        setPlaying(false);
      }
    };
    const onMeta = () => {
      try {
        const p = parseFloat(localStorage.getItem("raju_song_pos") || "");
        if (p > 0 && p < audio.duration - 2) audio.currentTime = p;
      } catch {}
    };
    const onTime = () => {
      if (!audio.paused) {
        try {
          localStorage.setItem("raju_song_pos", String(audio.currentTime));
        } catch {}
      }
    };
    audio.addEventListener("error", onError);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("timeupdate", onTime);

    return () => {
      try {
        localStorage.setItem("raju_song_pos", String(audio.currentTime));
      } catch {}
      audio.pause();
      audio.removeEventListener("error", onError);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("timeupdate", onTime);
      audioRef.current = null;
    };
  }, []);

  const toggleSong = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setMissing(false);
        })
        .catch(() => setMissing(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const songLabel = missing ? "Add audio file to play" : playing ? "Now playing" : "Tap to play";

  return (
    <div data-reveal="1" className="relative w-full max-w-[400px] justify-self-center">
      <div className="rotate-2 rounded-[22px] bg-card p-3.5 pb-[50px] shadow-[0_24px_60px_rgba(52,55,92,.14)] transition-transform duration-500 ease-swift hover:rotate-0 hover:scale-[1.02]">
        <div className="aspect-[4/5] overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/raju.jpg"
            alt="Rifat Sarker"
            className="block h-full w-full object-cover"
          />
        </div>
        <span className="absolute inset-x-0 bottom-4 text-center font-mono text-[10.5px] uppercase tracking-[.2em] text-muted">
          Music + code = me
        </span>
      </div>
      <button
        onClick={toggleSong}
        aria-label="Play Amar Dehokhan"
        className="absolute -right-4 bottom-[30px] z-[3] h-[72px] w-[72px] cursor-pointer rounded-full border-none bg-transparent p-0 transition-transform duration-300 hover:scale-[1.08]"
      >
        <span
          className="relative block h-full w-full overflow-hidden rounded-full shadow-[0_14px_34px_rgba(52,55,92,.35)] [animation:spinSlow_3.5s_linear_infinite]"
          style={{ animationPlayState: playing ? "running" : "paused" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/album-art.jpg"
            alt=""
            className="block h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-[rgba(30,32,60,.44)]">
            {playing ? (
              <span className="flex h-4 items-end gap-[2.5px]">
                <span className="h-4 w-[3px] origin-bottom bg-white [animation:eqBar_.9s_ease-in-out_infinite]" />
                <span className="h-4 w-[3px] origin-bottom bg-white [animation:eqBar_.9s_ease-in-out_.2s_infinite]" />
                <span className="h-4 w-[3px] origin-bottom bg-white [animation:eqBar_.9s_ease-in-out_.4s_infinite]" />
              </span>
            ) : (
              <span className="ml-[3px] h-0 w-0 border-y-[7px] border-l-[12px] border-r-0 border-solid border-y-transparent border-l-white" />
            )}
          </span>
        </span>
      </button>
      <div className="mt-5 flex items-center justify-center gap-[9px] font-mono text-[10.5px] uppercase tracking-[.16em] opacity-70">
        <span className="text-[13px]">♪</span>
        {songLabel} — <span className="text-ink">Amar Dehokhan</span>
      </div>
    </div>
  );
}
