export default function FinalCTA() {
  return (
    <section className="bg-black px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/40 via-zinc-950 to-black p-10 shadow-2xl shadow-red-600/20">
        <p className="text-sm font-black tracking-[0.4em] text-red-500">
          READY TO JOIN?
        </p>

        <h2 className="lava-text mt-4 text-5xl font-black md:text-7xl">
          ENTER THE 333
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
          Watch live, join the Discord, claim the bonus, and become part of the GreekGambles community.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://kick.com/greekgodberry"
            target="_blank"
            className="main-cta rounded-xl bg-red-600 px-10 py-4 font-black text-white transition hover:scale-105 hover:bg-red-500"
          >
            WATCH LIVE
          </a>

          <a
            href="https://discord.gg/BdZXUAGwzA"
            target="_blank"
            className="rounded-xl border border-red-500 px-10 py-4 font-black text-red-400 transition hover:scale-105 hover:bg-red-600 hover:text-white"
          >
            JOIN DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}