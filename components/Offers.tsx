export default function Offers() {
  return (
    <section id="offers" className="bg-black px-6 py-24 text-center text-white">
      <p className="text-sm font-black tracking-[0.4em] text-red-500">
        FEATURED BONUS
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        CLAIM YOUR LOCKLY OFFER
      </h2>

      <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/40 via-zinc-950 to-black p-8 shadow-2xl shadow-red-600/20">
        <p className="text-2xl font-black">LOCKLY</p>

        <p className="mt-4 text-4xl font-black text-red-500 md:text-6xl">
          100% DEPOSIT MATCH
        </p>

        <p className="mt-4 text-zinc-300">
          Up to $200 or 50 Free Spins using code
        </p>

        <p className="lava-text mt-6 text-5xl font-black tracking-widest md:text-7xl">
          GREEK33
        </p>

        <a
          href="https://lockly.io/r/greek33"
          target="_blank"
          className="main-cta mt-8 inline-block rounded-xl bg-red-600 px-10 py-4 font-black text-white transition hover:scale-105 hover:bg-red-500"
        >
          CLAIM BONUS
        </a>
      </div>
    </section>
  );
}