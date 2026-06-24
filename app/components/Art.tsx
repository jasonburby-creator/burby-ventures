export function Scene() {
  return (
    <svg className="scene" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <ellipse cx="1060" cy="190" rx="150" ry="150" fill="#1A4A42" />
      <circle cx="1060" cy="180" r="64" fill="#B0823A" />
      <circle cx="1060" cy="180" r="78" fill="none" stroke="#B0823A" strokeOpacity={0.35} strokeWidth={2} />
      <path d="M0,360 L120,300 L240,344 L380,252 L520,332 L660,272 L820,332 L980,242 L1140,322 L1280,284 L1440,332 L1440,560 L0,560 Z" fill="#3E7C70" />
      <path d="M0,422 L160,372 L300,412 L460,342 L620,402 L780,352 L940,412 L1100,360 L1260,412 L1440,382 L1440,560 L0,560 Z" fill="#2C6358" />
      <path d="M0,472 L180,442 L360,476 L540,432 L700,480 L880,442 L1060,482 L1240,442 L1440,476 L1440,560 L0,560 Z" fill="#1B473E" />
      <path d="M714,392 C702,442 662,474 598,520 L556,560 L902,560 L862,520 C800,474 762,442 750,392 Z" fill="#C9E5DC" fillOpacity={0.92} />
      <path d="M724,420 C720,432 708,440 700,448" stroke="#8FBFB3" strokeWidth={2} fill="none" strokeOpacity={0.6} />
      <path d="M742,470 C736,478 724,486 712,494" stroke="#8FBFB3" strokeWidth={2} fill="none" strokeOpacity={0.5} />
      <path d="M780,520 C770,528 752,536 736,544" stroke="#8FBFB3" strokeWidth={2} fill="none" strokeOpacity={0.45} />
    </svg>
  );
}

export function Ridge({ height = 90 }: { height?: number }) {
  return (
    <svg className="ridgeline" style={{ height }} viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0,80 L180,52 L360,86 L540,44 L700,90 L880,50 L1060,92 L1240,50 L1440,86 L1440,120 L0,120 Z" fill="var(--paper)" />
    </svg>
  );
}

export function RidgeDark() {
  return (
    <svg className="miniridge" style={{ height: 80 }} viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0,84 L160,58 L340,92 L520,52 L700,94 L880,56 L1060,94 L1240,56 L1440,90 L1440,120 L0,120 Z" fill="#0C2D28" />
    </svg>
  );
}
