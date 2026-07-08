export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-4 shadow-2xl shadow-red-900/20 backdrop-blur-xl">
        <a href="#home" className="text-xl font-black tracking-tight md:text-2xl">
          <span className="text-white">GREEK</span>
          <span className="lava-text">GAMBLES</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-wider lg:flex">
          <a href="#home" className="transition hover:text-red-400">Home</a>
          <a href="#stream" className="transition hover:text-red-400">Stream</a>
          <a href="#offers" className="transition hover:text-red-400">Bonuses</a>
          <a href="#socials" className="transition hover:text-red-400">Community</a>
        </div>

        <a
          href="https://kick.com/greekgodberry"
          target="_blank"
          className="rounded-full border border-red-500 px-5 py-2 text-sm font-black text-red-400 transition hover:bg-red-600 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            LIVE
          </span>
        </a>
      </div>
    </nav>
  );
}