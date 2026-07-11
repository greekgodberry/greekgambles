"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

const prizes = [
  { rank: 1, prize: "$100" },
  { rank: 2, prize: "$50" },
  { rank: 3, prize: "$30" },
  { rank: 4, prize: "$20" },
  { rank: 5, prize: "$15" },
  { rank: 6, prize: "$10" },
  { rank: 7, prize: "$10" },
  { rank: 8, prize: "$5" },
  { rank: 9, prize: "$5" },
  { rank: 10, prize: "$5" },
];

const leaderboard = [
  { rank: 1, player: "GreekFan99", wagered: "$18,425", prize: "$100" },
  { rank: 2, player: "LuckyAce", wagered: "$17,844", prize: "$50" },
  { rank: 3, player: "ShadowSpin", wagered: "$16,982", prize: "$30" },
  { rank: 4, player: "BigBonus", wagered: "$15,731", prize: "$20" },
  { rank: 5, player: "SlotKing", wagered: "$14,005", prize: "$15" },
  { rank: 6, player: "KenoGod", wagered: "$13,220", prize: "$10" },
  { rank: 7, player: "LavaSpin", wagered: "$12,981", prize: "$10" },
  { rank: 8, player: "JackpotJoe", wagered: "$12,110", prize: "$5" },
  { rank: 9, player: "Cherry777", wagered: "$11,845", prize: "$5" },
  { rank: 10, player: "BerryFan", wagered: "$11,430", prize: "$5" },
];

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  label: string;
  started: boolean;
};

function getTimeZoneParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(date);
  const values: Record<string, number> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = Number(part.value);
    }
  }

  return {
    year: values.year,
    month: values.month,
    day: values.day,
    hour: values.hour,
    minute: values.minute,
    second: values.second,
  };
}

function easternTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0,
) {
  const targetUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  let result = targetUtc;

  for (let i = 0; i < 3; i += 1) {
    const parts = getTimeZoneParts(new Date(result));

    const representedUtc = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second,
    );

    result -= representedUtc - targetUtc;
  }

  return result;
}

function getCountdown(): Countdown {
  const now = new Date();
  const nowTime = now.getTime();

  const launchTime = easternTimeToUtc(2026, 8, 1);

  let targetTime: number;
  let label: string;
  let started: boolean;

  if (nowTime < launchTime) {
    targetTime = launchTime;
    label = "LEADERBOARD STARTS IN";
    started = false;
  } else {
    const easternNow = getTimeZoneParts(now);

    let nextMonth = easternNow.month + 1;
    let nextYear = easternNow.year;

    if (nextMonth === 13) {
      nextMonth = 1;
      nextYear += 1;
    }

    targetTime = easternTimeToUtc(nextYear, nextMonth, 1);
    label = "MONTHLY RESET IN";
    started = true;
  }

  const difference = Math.max(0, targetTime - nowTime);

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    label,
    started,
  };
}

function rankIcon(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return rank.toString();
}

function rankStyle(rank: number) {
  if (rank === 1) {
    return "border-yellow-400/70 bg-yellow-950/20 shadow-[0_0_30px_rgba(250,204,21,0.18)]";
  }

  if (rank === 2) {
    return "border-zinc-300/40 bg-zinc-800/20";
  }

  if (rank === 3) {
    return "border-orange-700/50 bg-orange-950/15";
  }

  return "border-zinc-800 bg-black/30";
}

export default function Leaderboard() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    setCountdown(getCountdown());

    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="leaderboard"
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6"
    >
      <ParticlesBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,138,4,0.12),transparent_48%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black tracking-[0.42em] text-yellow-400">
            MONTHLY COMPETITION
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            🏆 <span className="text-white">$250 MONTHLY</span>{" "}
            <span className="text-yellow-400">LEADERBOARD</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
            Climb the rankings. The top 10 players at the end of each month
            split the $250 prize pool.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-yellow-400/50 bg-gradient-to-r from-yellow-950/45 via-zinc-950 to-yellow-950/30 p-8 text-center shadow-[0_0_55px_rgba(250,204,21,0.14)]">
          <p className="text-sm font-black tracking-[0.32em] text-yellow-300">
            TOTAL MONTHLY PRIZE POOL
          </p>

          <p className="mt-3 text-6xl font-black text-yellow-400 md:text-8xl">
            $250
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Leaderboard resets on the first of every month at 12:00 AM Eastern
            Time.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-5">
          {prizes.map((item) => (
            <div
              key={item.rank}
              className={`rounded-2xl border p-5 text-center ${
                item.rank === 1
                  ? "border-yellow-400/60 bg-yellow-950/25"
                  : item.rank === 2
                    ? "border-zinc-300/40 bg-zinc-900"
                    : item.rank === 3
                      ? "border-orange-700/50 bg-orange-950/20"
                      : "border-zinc-800 bg-zinc-950"
              }`}
            >
              <p className="text-sm font-black tracking-[0.2em] text-zinc-500">
                {item.rank === 1
                  ? "🥇 1ST"
                  : item.rank === 2
                    ? "🥈 2ND"
                    : item.rank === 3
                      ? "🥉 3RD"
                      : `${item.rank}TH`}
              </p>

              <p
                className={`mt-2 text-3xl font-black ${
                  item.rank === 1 ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.prize}
              </p>
            </div>
          ))}
        </div>

        {countdown && (
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="text-center text-xs font-black tracking-[0.32em] text-red-400">
              {countdown.label}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["DAYS", countdown.days],
                ["HOURS", countdown.hours],
                ["MINUTES", countdown.minutes],
                ["SECONDS", countdown.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-red-500/25 bg-zinc-950/90 p-5 text-center"
                >
                  <p className="text-3xl font-black text-red-500 md:text-4xl">
                    {String(value).padStart(2, "0")}
                  </p>

                  <p className="mt-2 text-[10px] font-black tracking-[0.25em] text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-sm font-bold text-zinc-500">
              {countdown.started
                ? "The August leaderboard is now active."
                : "Competition begins August 1, 2026."}
            </p>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-6xl overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950/85 p-3 sm:p-5">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[90px_1fr_170px_120px] px-5 py-4 text-xs font-black tracking-[0.2em] text-zinc-500">
              <span>RANK</span>
              <span>PLAYER</span>
              <span className="text-right">WAGERED</span>
              <span className="text-right">PRIZE</span>
            </div>

            <div className="space-y-3">
              {leaderboard.map((player) => (
                <div
                  key={`${player.rank}-${player.player}`}
                  className={`grid grid-cols-[90px_1fr_170px_120px] items-center rounded-2xl border px-5 py-5 transition hover:-translate-y-0.5 ${rankStyle(
                    player.rank,
                  )}`}
                >
                  <span className="text-2xl font-black">
                    {rankIcon(player.rank)}
                  </span>

                  <span className="font-black text-zinc-100">
                    {player.player}
                  </span>

                  <span className="text-right font-black text-white">
                    {player.wagered}
                  </span>

                  <span
                    className={`text-right font-black ${
                      player.rank === 1
                        ? "text-yellow-400"
                        : player.rank <= 3
                          ? "text-zinc-200"
                          : "text-red-400"
                    }`}
                  >
                    {player.prize}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-red-500/25 bg-red-950/15 p-7">
          <h3 className="text-xl font-black text-white">
            Leaderboard Rules
          </h3>

          <div className="mt-5 grid gap-3 text-sm text-zinc-400 md:grid-cols-2">
            <p>• Must be registered using code GREEK33.</p>
            <p>• Qualifying wagers are tracked automatically.</p>
            <p>• Minimum eligibility requirements may apply.</p>
            <p>• The top 10 players receive prizes.</p>
            <p>• Competition ends on the final day of each month.</p>
            <p>• Winners are announced live on Kick and Discord.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://lockly.io/r/greek33"
            target="_blank"
            rel="noreferrer"
            className="main-cta inline-block rounded-xl bg-red-600 px-10 py-4 text-lg font-black transition hover:scale-105 hover:bg-red-500"
          >
            START CLIMBING →
          </a>

          <p className="mx-auto mt-5 max-w-3xl text-xs leading-5 text-zinc-600">
            Sample rankings are currently displayed for design purposes. Final
            tracking, eligibility, tie-breaking, payout and verification rules
            should be confirmed before the competition begins. Gamble
            responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}