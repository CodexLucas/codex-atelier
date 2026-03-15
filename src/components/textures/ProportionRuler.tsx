export default function ProportionRuler() {
  return (
    <svg
      className="w-full h-[30px] pointer-events-none"
      viewBox="0 0 680 60"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g opacity="0.18" stroke="#1A1917" fill="none" strokeLinecap="round">
        {/* Baseline */}
        <line x1="40" y1="30" x2="640" y2="30" strokeWidth="0.5" />
        {/* Major ticks — every 4th */}
        <line x1="40" y1="18" x2="40" y2="42" strokeWidth="0.8" />
        <line x1="160" y1="18" x2="160" y2="42" strokeWidth="0.8" />
        <line x1="280" y1="18" x2="280" y2="42" strokeWidth="0.8" />
        <line x1="400" y1="18" x2="400" y2="42" strokeWidth="0.8" />
        <line x1="520" y1="18" x2="520" y2="42" strokeWidth="0.8" />
        <line x1="640" y1="18" x2="640" y2="42" strokeWidth="0.8" />
        {/* Minor ticks */}
        <line x1="70" y1="24" x2="70" y2="36" strokeWidth="0.5" />
        <line x1="100" y1="24" x2="100" y2="36" strokeWidth="0.5" />
        <line x1="130" y1="24" x2="130" y2="36" strokeWidth="0.5" />
        <line x1="190" y1="24" x2="190" y2="36" strokeWidth="0.5" />
        <line x1="220" y1="24" x2="220" y2="36" strokeWidth="0.5" />
        <line x1="250" y1="24" x2="250" y2="36" strokeWidth="0.5" />
        <line x1="310" y1="24" x2="310" y2="36" strokeWidth="0.5" />
        <line x1="340" y1="24" x2="340" y2="36" strokeWidth="0.5" />
        <line x1="370" y1="24" x2="370" y2="36" strokeWidth="0.5" />
        <line x1="430" y1="24" x2="430" y2="36" strokeWidth="0.5" />
        <line x1="460" y1="24" x2="460" y2="36" strokeWidth="0.5" />
        <line x1="490" y1="24" x2="490" y2="36" strokeWidth="0.5" />
        <line x1="550" y1="24" x2="550" y2="36" strokeWidth="0.5" />
        <line x1="580" y1="24" x2="580" y2="36" strokeWidth="0.5" />
        <line x1="610" y1="24" x2="610" y2="36" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
