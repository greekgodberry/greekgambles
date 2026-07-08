const schedule = [
  ["Monday - Thursday", "7 PM EST"],
  ["Friday", "7 PM EST - Late"],
  ["Saturday", "Afternoon / Night"],
  ["Sunday", "Community + Clips"],
];

export default function StreamSchedule() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black tracking-[0.4em] text-red-500">
          WHEN TO WATCH
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          STREAM SCHEDULE
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {schedule.map(([day, time]) => (
            <div
              key={day}
              className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-6 transition hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/10"
            >
              <p className="text-xl font-black">{day}</p>
              <p className="mt-3 text-red-400">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}