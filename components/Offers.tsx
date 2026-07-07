export default function Offers() {
  return (
    <section id="offers" className="bg-[#050505] px-6 py-24 text-center text-white">
      <p className="text-sm font-bold tracking-[0.4em] text-red-500">
        FEATURED BONUS
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        CLAIM YOUR LOCKLY OFFER
      </h2>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-red-500/40 bg-zinc-950/80 p-8 shadow-2xl shadow-red-600/20">
        <p className="text-2xl font-black">LOCKLY</p>

        <p className="mt-4 text-4xl font-black text-red-500">
          100% DEPOSIT MATCH
        </p>

        <p className="mt-3 text-zinc-300">
          Up to $200 or 50 Free Spins using code
        </p>

        <p className="mt-5 text-5xl font-black tracking-widest">
          GREEK33
        </p>

        <a
          href="https://lockly.io/r/greek33"
          target="_blank"
          className="mt-8 inline-block rounded-xl bg-red-600 px-10 py-4 font-bold text-white hover:bg-red-500"
        >
          CLAIM BONUS
        </a>
      </div>
    </section>
  );
}