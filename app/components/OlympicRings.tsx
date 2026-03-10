export function OlympicRings({ compact = false }: { compact?: boolean }) {
  const size = compact ? 72 : 260;

  return (
    <svg
      aria-label="Anneaux olympiques stylisés"
      viewBox="0 0 280 130"
      width={size}
      height={(size * 130) / 280}
      role="img"
    >
      <circle cx="60" cy="42" r="28" fill="none" stroke="#0081C8" strokeWidth="9" />
      <circle cx="140" cy="42" r="28" fill="none" stroke="#1a1a2e" strokeWidth="9" />
      <circle cx="220" cy="42" r="28" fill="none" stroke="#EE334E" strokeWidth="9" />
      <circle cx="100" cy="82" r="28" fill="none" stroke="#FCB131" strokeWidth="9" />
      <circle cx="180" cy="82" r="28" fill="none" stroke="#2D8B57" strokeWidth="9" />
    </svg>
  );
}
