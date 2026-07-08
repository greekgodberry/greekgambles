export default function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[7] overflow-hidden">
      {Array.from({ length: 65 }).map((_, i) => (
        <span
          key={i}
          className="ember-particle"
          style={{
            left: `${(i * 41) % 100}%`,
            animationDelay: `${(i * 0.38) % 9}s`,
            animationDuration: `${8 + (i % 7)}s`,
          }}
        />
      ))}
    </div>
  );
}