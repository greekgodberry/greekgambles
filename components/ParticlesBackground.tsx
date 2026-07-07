export default function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          key={i}
          className="ember-particle"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i * 0.35) % 8}s`,
            animationDuration: `${7 + (i % 8)}s`,
          }}
        />
      ))}
    </div>
  );
}