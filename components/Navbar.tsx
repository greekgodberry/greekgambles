export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-6 py-4 backdrop-blur-md">

        <a
          href="#home"
className="text-xl font-black tracking-tight md:text-2xl"
        >
          <span className="text-white">GREEK</span>
          <span className="text-red-500">GAMBLES</span>
        </a>

      <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider lg:flex">
          <a href="#home" className="transition hover:text-red-400">Home</a>
          <a href="#stream" className="transition hover:text-red-400">Stream</a>
          <a href="#offers" className="transition hover:text-red-400">Bonuses</a>
          <a href="#socials" className="transition hover:text-red-400">Community</a>
        </div>

      <a
  href="https://kick.com/greekgodberry"
  target="_blank"
  className="rounded-full border border-red-500 px-5 py-2 text-sm font-bold text-red-400 transition hover:bg-red-600 hover:text-white"
>
  <span className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
    LIVE
  </span>
</a>

      </div>
    </nav>
  );
}