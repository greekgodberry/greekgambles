const schedule = [
  ["Monday - Thursday", "7 PM EST"],
  ["Friday", "7 PM EST - Late"],
  ["Saturday", "Afternoon / Night"],
  ["Sunday", "Community + Clips"],
];

export default function StreamSchedule() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold tracking-[0.4em] text-red-500">
          WHEN TO WATCH
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          STREAM SCHEDULE
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {schedule.map(([day, time]) => (
            <div
              key={day}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <p className="text-xl font-black">{day}</p>
              <p className="mt-2 text-red-400">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}