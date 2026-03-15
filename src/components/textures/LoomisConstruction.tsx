export default function LoomisConstruction() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 680 260"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g opacity="0.15" stroke="#1A1917" fill="none" strokeLinecap="round">
        {/* Main head — cranium ball */}
        <circle cx="520" cy="98" r="58" strokeWidth="0.7" />
        {/* Center axis */}
        <line x1="520" y1="30" x2="520" y2="212" strokeWidth="0.5" strokeDasharray="3 5" />
        {/* Brow line at equator */}
        <line x1="455" y1="98" x2="585" y2="98" strokeWidth="0.5" />
        {/* Eye line — halfway of total head height */}
        <line x1="455" y1="120" x2="585" y2="120" strokeWidth="0.4" strokeDasharray="2 4" />
        {/* Nose line — bottom of ball */}
        <line x1="455" y1="156" x2="585" y2="156" strokeWidth="0.5" />
        {/* Chin line */}
        <line x1="475" y1="200" x2="565" y2="200" strokeWidth="0.5" />
        {/* Jaw arc from nose to chin */}
        <path d="M475 156Q475 200 520 200Q565 200 565 156" strokeWidth="0.6" />
        {/* Temporal planes */}
        <line x1="488" y1="40" x2="488" y2="156" strokeWidth="0.4" strokeDasharray="2 3" />
        <line x1="552" y1="40" x2="552" y2="156" strokeWidth="0.4" strokeDasharray="2 3" />
        {/* Eye placement marks */}
        <line x1="500" y1="120" x2="508" y2="120" strokeWidth="0.4" />
        <line x1="532" y1="120" x2="540" y2="120" strokeWidth="0.4" />
        {/* Nose width */}
        <line x1="512" y1="152" x2="528" y2="152" strokeWidth="0.3" />
        {/* Mouth placement */}
        <line x1="506" y1="170" x2="534" y2="170" strokeWidth="0.3" />
        {/* Proportion stick — face thirds */}
        <line x1="450" y1="62" x2="455" y2="62" strokeWidth="0.4" />
        <line x1="450" y1="98" x2="455" y2="98" strokeWidth="0.4" />
        <line x1="450" y1="156" x2="455" y2="156" strokeWidth="0.4" />
        <line x1="450" y1="200" x2="455" y2="200" strokeWidth="0.4" />
        <line x1="452" y1="62" x2="452" y2="200" strokeWidth="0.3" />

        {/* Smaller second head */}
        <circle cx="645" cy="120" r="40" strokeWidth="0.6" />
        <line x1="645" y1="74" x2="645" y2="188" strokeWidth="0.4" strokeDasharray="3 5" />
        <line x1="600" y1="120" x2="690" y2="120" strokeWidth="0.4" />
        <line x1="617" y1="74" x2="617" y2="160" strokeWidth="0.3" strokeDasharray="2 3" />
        <line x1="673" y1="74" x2="673" y2="160" strokeWidth="0.3" strokeDasharray="2 3" />
        <line x1="600" y1="135" x2="690" y2="135" strokeWidth="0.3" strokeDasharray="2 4" />
        <line x1="600" y1="160" x2="690" y2="160" strokeWidth="0.4" />
        <path d="M622 160Q622 188 645 188Q668 188 668 160" strokeWidth="0.5" />

        {/* Side proportion stick with equal-third ticks */}
        <line x1="410" y1="55" x2="410" y2="210" strokeWidth="0.4" strokeDasharray="2 5" />
        <line x1="398" y1="55" x2="422" y2="55" strokeWidth="0.4" />
        <line x1="398" y1="107" x2="422" y2="107" strokeWidth="0.4" />
        <line x1="398" y1="158" x2="422" y2="158" strokeWidth="0.4" />
        <line x1="398" y1="210" x2="422" y2="210" strokeWidth="0.4" />
        <circle cx="410" cy="55" r="1.5" strokeWidth="0.5" />
        <circle cx="410" cy="107" r="1.5" strokeWidth="0.5" />
        <circle cx="410" cy="158" r="1.5" strokeWidth="0.5" />
        <circle cx="410" cy="210" r="1.5" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
