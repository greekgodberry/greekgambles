"use client";

import { useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / 55,
      y: (e.clientY - rect.top - rect.height / 2) / 55,
    });
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden px-6 text-white"
    >
      <img
        src="/hero-wide.png"
        alt="GreekGambles"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.08)`,
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
      />

      <ParticlesBackground />

      <div className="absolute inset-0 z-[6] bg-gradient-to-r from-black/80 via-black/35 to-black/5" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center pt-24">
        <div className="max-w-3xl">
          <p className="hero-animate text-sm font-black tracking-[0.55em] text-red-500">
            WELCOME TO
          </p>

          <h1 className="hero-animate hero-delay-1 mt-5 text-6xl font-black leading-none md:text-8xl">
            GREEK<span className="lava-text">GAMBLES</span>
          </h1>

          <p className="hero-animate hero-delay-2 mt-6 max-w-xl text-lg text-zinc-200 md:text-xl">
            The home of massive wins, insane reactions, bonus buys, and the #1 gambling community on Kick.
          </p>

          <div className="hero-animate hero-delay-3 mt-10 flex flex-col gap-5 sm:flex-row">
            <a
              href="https://kick.com/greekgodberry"
              target="_blank"
              className="rounded-xl bg-red-600 px-10 py-4 text-center text-lg font-black shadow-[0_0_45px_rgba(239,68,68,.45)] transition hover:scale-105 hover:bg-red-500"
            >
              🔴 WATCH LIVE
            </a>

            <a
              href="https://lockly.io/r/greek33"
              target="_blank"
              className="rounded-xl border-2 border-red-500 bg-black/30 px-10 py-4 text-center text-lg font-black backdrop-blur transition hover:scale-105 hover:bg-red-600"
            >
              🎰 CLAIM BONUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}