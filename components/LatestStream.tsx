export default function LatestStream() {
  return (
    <section id="stream" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-black tracking-[0.4em] text-red-500">
          WATCH THE ACTION
        </p>

        <h2 className="mt-4 text-center text-4xl font-black md:text-6xl">
          LATEST STREAM
        </h2>

        <div className="mt-10 grid gap-8 rounded-3xl border border-red-500/25 bg-gradient-to-br from-zinc-950 via-black to-red-950/20 p-6 shadow-2xl shadow-red-600/10 md:grid-cols-2 md:p-10">
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-black">
            <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 rounded-full border border-red-500 bg-black/60 px-6 py-3 font-black text-red-400">
              ▶ WATCH VOD
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black tracking-[0.3em] text-red-500">
              GREEKGAMBLES LIVE
            </p>

            <h3 className="mt-4 text-4xl font-black">
              Catch the newest stream on Kick
            </h3>

            <p className="mt-4 text-zinc-400">
              Watch the latest sessions, big hits, reactions, bonus buys, and stream highlights.
            </p>

            <a
              href="https://kick.com/greekgodberry/videos"
              target="_blank"
              className="mt-8 w-fit rounded-xl bg-red-600 px-8 py-4 font-black text-white transition hover:scale-105 hover:bg-red-500"
            >
              WATCH VODS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}