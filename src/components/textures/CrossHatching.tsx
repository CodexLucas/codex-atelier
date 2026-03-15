export default function CrossHatching() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 680 240"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g opacity="0.1" stroke="#9E9A95" fill="none" strokeLinecap="round">
        {/* First direction — leaning right */}
        <line x1="420" y1="0" x2="435" y2="240" strokeWidth="0.5" />
        <line x1="428" y1="0" x2="443" y2="240" strokeWidth="0.5" />
        <line x1="436" y1="0" x2="451" y2="240" strokeWidth="0.5" />
        <line x1="444" y1="0" x2="459" y2="240" strokeWidth="0.5" />
        <line x1="452" y1="0" x2="467" y2="240" strokeWidth="0.5" />
        <line x1="460" y1="0" x2="475" y2="240" strokeWidth="0.5" />
        <line x1="468" y1="0" x2="483" y2="240" strokeWidth="0.5" />
        <line x1="476" y1="0" x2="491" y2="240" strokeWidth="0.5" />
        <line x1="484" y1="0" x2="499" y2="240" strokeWidth="0.5" />
        <line x1="492" y1="0" x2="507" y2="240" strokeWidth="0.5" />
        <line x1="500" y1="0" x2="515" y2="240" strokeWidth="0.5" />
        <line x1="508" y1="0" x2="523" y2="240" strokeWidth="0.5" />
        <line x1="516" y1="0" x2="531" y2="240" strokeWidth="0.5" />
        <line x1="524" y1="0" x2="539" y2="240" strokeWidth="0.5" />
        <line x1="532" y1="0" x2="547" y2="240" strokeWidth="0.5" />
        <line x1="540" y1="0" x2="555" y2="240" strokeWidth="0.5" />
        <line x1="548" y1="0" x2="563" y2="240" strokeWidth="0.5" />
        <line x1="556" y1="0" x2="571" y2="240" strokeWidth="0.5" />
        <line x1="564" y1="0" x2="579" y2="240" strokeWidth="0.5" />
        <line x1="572" y1="0" x2="587" y2="240" strokeWidth="0.5" />
        <line x1="580" y1="0" x2="595" y2="240" strokeWidth="0.5" />
        <line x1="588" y1="0" x2="603" y2="240" strokeWidth="0.5" />
        <line x1="596" y1="0" x2="611" y2="240" strokeWidth="0.5" />
        <line x1="604" y1="0" x2="619" y2="240" strokeWidth="0.5" />
        {/* Second direction — crossing */}
        <line x1="410" y1="240" x2="570" y2="0" strokeWidth="0.45" />
        <line x1="418" y1="240" x2="578" y2="0" strokeWidth="0.45" />
        <line x1="426" y1="240" x2="586" y2="0" strokeWidth="0.45" />
        <line x1="434" y1="240" x2="594" y2="0" strokeWidth="0.45" />
        <line x1="442" y1="240" x2="602" y2="0" strokeWidth="0.45" />
        <line x1="450" y1="240" x2="610" y2="0" strokeWidth="0.45" />
        <line x1="458" y1="240" x2="618" y2="0" strokeWidth="0.45" />
        <line x1="466" y1="240" x2="626" y2="0" strokeWidth="0.45" />
        <line x1="474" y1="240" x2="634" y2="0" strokeWidth="0.45" />
        <line x1="482" y1="240" x2="642" y2="0" strokeWidth="0.45" />
        <line x1="490" y1="240" x2="650" y2="0" strokeWidth="0.45" />
        <line x1="498" y1="240" x2="658" y2="0" strokeWidth="0.45" />
      </g>
    </svg>
  );
}
