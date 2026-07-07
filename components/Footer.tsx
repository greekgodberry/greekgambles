export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 text-center text-zinc-500">
      <h3 className="text-2xl font-black text-white">
        GREEK<span className="text-red-500">GAMBLES</span>
      </h3>

      <p className="mt-3">
        Every Spin. Every Reaction. Every Win.
      </p>

      <p className="mt-6 text-sm">
        © {new Date().getFullYear()} GreekGambles
      </p>
    </footer>
  );
}