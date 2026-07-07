const isLive = false;

export default function LiveStatus() {
  return (
    <section className="bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/40 via-zinc-950 to-black p-6 shadow-2xl shadow-red-600/10 md:flex-row">
        <div>
          <p className="text-sm font-bold tracking-[0.4em] text-red-500">
            STREAM STATUS
          </p>

          <h2 className="mt-2 text-3xl font-black">
            <span
              className={`mr-2 inline-block h-3 w-3 rounded-full ${
                isLive ? "animate-pulse bg-red-500" : "bg-zinc-500"
              }`}
            ></span>
            {isLive ? "LIVE RIGHT NOW" : "CURRENTLY OFFLINE"}
          </h2>

          <p className="mt-2 text-zinc-400">
            {isLive
              ? "Greek God Berry is live on Kick. Come watch the action."
              : "Catch the latest VODs, clips, bonus buys, and stream highlights."}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://kick.com/greekgodberry"
            target="_blank"
            className="rounded-xl bg-red-600 px-8 py-4 text-center font-bold text-white hover:bg-red-500"
          >
            {isLive ? "WATCH LIVE" : "WATCH KICK"}
          </a>

          <a
            href="https://discord.gg/BdZXUAGwzA"
            target="_blank"
            className="rounded-xl border border-red-500 px-8 py-4 text-center font-bold text-red-400 hover:bg-red-600 hover:text-white"
          >
            JOIN DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}