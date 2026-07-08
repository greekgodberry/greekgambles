const socials = [
  ["Kick", "https://kick.com/greekgodberry"],
  ["Twitch", "https://www.twitch.tv/greekgodberry"],
  ["Discord", "https://discord.gg/BdZXUAGwzA"],
  ["Instagram", "https://www.instagram.com/greekgodberry/"],
  ["X", "https://x.com/greekgodberryx"],
  ["YouTube", "https://www.youtube.com/@greekgodberry"],
];

export default function Socials() {
  return (
    <section id="socials" className="bg-[#050505] px-6 py-24 text-center text-white">
      <p className="text-sm font-black tracking-[0.4em] text-red-500">
        JOIN THE COMMUNITY
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        FOLLOW GREEKGAMBLES
      </h2>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
        {socials.map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-8 text-2xl font-black transition hover:-translate-y-1 hover:border-red-500 hover:text-red-400 hover:shadow-2xl hover:shadow-red-600/10"
          >
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}