export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black px-6 py-10 text-center text-zinc-500">
      <h3 className="text-2xl font-black text-white">
        GREEK<span className="lava-text">GAMBLES</span>
      </h3>

      <p className="mt-3 text-sm">
        Every Spin. Every Reaction. Every Win.
      </p>

      <p className="mt-6 text-xs">
        Gamble responsibly. 18+ / 21+ depending on your jurisdiction.
      </p>

      <p className="mt-3 text-xs">
        © {new Date().getFullYear()} GreekGambles. All rights reserved.
      </p>
    </footer>
  );
}