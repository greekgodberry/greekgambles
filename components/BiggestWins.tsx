const wins = [
  { place: "🥇", amount: "$1,200", label: "Biggest Keno Hit" },
  { place: "🥈", amount: "$850", label: "Bonus Buy Heater" },
  { place: "🥉", amount: "$620", label: "Last Spin Save" },
  { place: "4", amount: "$410", label: "Crazy Comeback" },
];

export default function BiggestWins() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-black tracking-[0.4em] text-red-500">
          HALL OF WINS
        </p>

        <h2 className="mt-4 text-center text-4xl font-black md:text-6xl">
          BIGGEST WINS
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {wins.map((win) => (
            <div
              key={win.label}
              className="group rounded-3xl border border-red-500/20 bg-gradient-to-br from-zinc-950 to-black p-6 text-center transition hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/20"
            >
              <div className="text-4xl transition group-hover:scale-110">
                {win.place}
              </div>

              <div className="mt-4 text-4xl font-black text-red-500">
                {win.amount}
              </div>

              <p className="mt-3 text-zinc-400">{win.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}