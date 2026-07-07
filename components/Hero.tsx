"use client";

import { useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / 40,
      y: (e.clientY - rect.top - rect.height / 2) / 40,
    });
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden px-6 text-white"
    >
      <img
        src="/hero-wide.png"
        alt="GreekGambles hero"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.08)`,
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
      />

      <ParticlesBackground />

      <div className="absolute inset-0 z-[6] bg-black/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl pt-24">
        <div className="max-w-3xl">
          <p className="hero-animate hero-delay-1 text-sm font-bold tracking-[0.5em] text-red-500">
            WELCOME TO
          </p>

          <h1 className="hero-animate hero-delay-2 lava-glow mt-4 text-6xl font-black leading-none md:text-8xl">
            GREEK<span className="text-red-500">GAMBLES</span>
          </h1>

          <p className="hero-animate hero-delay-3 mt-6 max-w-xl text-xl text-zinc-200">
            The home of massive wins, insane reactions, bonus buys, and the #1 gambling community on Kick.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <a
              href="https://kick.com/greekgodberry"
              target="_blank"
              className="animate-pulse rounded-xl bg-red-600 px-10 py-4 text-center text-lg font-bold shadow-[0_0_35px_rgba(239,68,68,.45)] transition hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,.8)]"
            >
              🔴 WATCH LIVE
            </a>

            <a
              href="https://lockly.io/r/greek33"
              target="_blank"
              className="rounded-xl border-2 border-red-500 px-10 py-4 text-center text-lg font-bold transition hover:scale-105 hover:bg-red-600"
            >
              🎰 CLAIM BONUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}