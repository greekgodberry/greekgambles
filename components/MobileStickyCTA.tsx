export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full gap-2 border-t border-red-500/20 bg-black/85 p-3 backdrop-blur-xl md:hidden">
      <a
        href="https://kick.com/greekgodberry"
        target="_blank"
        className="flex-1 rounded-xl bg-red-600 py-3 text-center text-sm font-black text-white"
      >
        🔴 WATCH
      </a>

      <a
        href="https://lockly.io/r/greek33"
        target="_blank"
        className="flex-1 rounded-xl border border-red-500 py-3 text-center text-sm font-black text-red-400"
      >
        🎰 BONUS
      </a>
    </div>
  );
}