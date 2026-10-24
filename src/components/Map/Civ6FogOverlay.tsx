import React from 'react';

interface Civ6FogOverlayProps {
  theme: 'dark' | 'light';
}

export const Civ6FogOverlay: React.FC<Civ6FogOverlayProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Weathered authentic iron-gall & antique woodcut palette sampled directly from the uploaded parchment texture
  const inkColor = isDark ? '#d6b885' : '#4d341b';
  const faintInk = isDark ? 'rgba(214, 184, 133, 0.22)' : 'rgba(77, 52, 27, 0.18)';
  const mediumInk = isDark ? 'rgba(214, 184, 133, 0.45)' : 'rgba(77, 52, 27, 0.42)';
  const strongInk = isDark ? 'rgba(228, 204, 160, 0.85)' : 'rgba(64, 41, 19, 0.85)';

  return (
    <div className="absolute inset-0 pointer-events-none z-[15] overflow-hidden select-none">
      {/* 1. Real Weathered Antique Papyrus / Parchment Texture Layer (Based on uploaded asset) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/aistudio/parchement_90548154.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: isDark ? 'soft-light' : 'multiply',
          opacity: isDark ? 0.55 : 0.72
        }}
      />

      {/* 1b. Weathered Burnt Edge & Corner Staining Vignette (matching papyrus border) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(26, 18, 12, 0.5) 80%, rgba(14, 9, 6, 0.85) 100%)'
            : 'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(120, 80, 40, 0.25) 82%, rgba(70, 42, 18, 0.55) 100%)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* 2. SVG Decorative Cartography (Hex Grid, Nautical Rhumb Lines, Compass Rose & Sea Motifs) */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: isDark ? 0.9 : 0.95 }}
      >
        <defs>
          {/* Subtle Civilization VI Hexagonal Grid Watermark */}
          <pattern
            id="civ6-hex-pattern"
            width="56"
            height="96.99"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            {/* Hexagon shape outline */}
            <path
              d="M28,0 L56,16.16 L56,48.49 L28,64.66 L0,48.49 L0,16.16 Z M28,64.66 L56,80.82 L56,113.15 L28,129.32 L0,113.15 L0,80.82 Z"
              fill="none"
              stroke={faintInk}
              strokeWidth="0.65"
              strokeDasharray="2 3"
            />
          </pattern>

          {/* Antique Wave / Ocean Stipple Hatching Pattern */}
          <pattern
            id="civ6-wave-hatch"
            width="32"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,8 Q8,4 16,8 T32,8"
              fill="none"
              stroke={faintInk}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        {/* Faint Global Hex Grid Layer */}
        <rect width="100%" height="100%" fill="url(#civ6-hex-pattern)" opacity={isDark ? 0.65 : 0.55} />

        {/* 3. Nautical Rhumb Lines (Loxodromes radiating across the world oceans) */}
        {/* Node 1: Atlantic Navigation Center (approx 30% x, 50% y) */}
        <g opacity={isDark ? 0.65 : 0.6}>
          <circle cx="30%" cy="48%" r="4" fill="none" stroke={mediumInk} strokeWidth="1" />
          <circle cx="30%" cy="48%" r="20" fill="none" stroke={faintInk} strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="30%" y1="48%" x2="-10%" y2="10%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="70%" y2="20%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="50%" y2="110%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="10%" y2="105%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="-15%" y2="70%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="80%" y2="85%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="30%" y1="48%" x2="30%" y2="-20%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="30%" y1="48%" x2="30%" y2="120%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="-20%" y1="48%" x2="120%" y2="48%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="4 4" />
        </g>

        {/* Node 2: Pacific Navigation Center (approx 82% x, 55% y) */}
        <g opacity={isDark ? 0.6 : 0.55}>
          <circle cx="82%" cy="56%" r="4" fill="none" stroke={mediumInk} strokeWidth="1" />
          <circle cx="82%" cy="56%" r="24" fill="none" stroke={faintInk} strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="82%" y1="56%" x2="40%" y2="10%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="82%" y1="56%" x2="120%" y2="20%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="82%" y1="56%" x2="60%" y2="115%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="82%" y1="56%" x2="115%" y2="90%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="82%" y1="56%" x2="20%" y2="65%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
        </g>

        {/* Node 3: Indian Ocean Navigation Center (approx 62% x, 62% y) */}
        <g opacity={isDark ? 0.6 : 0.55}>
          <circle cx="62%" cy="62%" r="3.5" fill="none" stroke={mediumInk} strokeWidth="1" />
          <circle cx="62%" cy="62%" r="18" fill="none" stroke={faintInk} strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="62%" y1="62%" x2="15%" y2="25%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="62%" y1="62%" x2="105%" y2="45%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="62%" y1="62%" x2="45%" y2="105%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="62%" y1="62%" x2="85%" y2="110%" stroke={mediumInk} strokeWidth="0.8" strokeDasharray="6 4" />
        </g>
      </svg>

      {/* 4. Renaissance 16th-Century Sailing Galleon Engraving (South Atlantic / Ocean) */}
      <div
        className="absolute bottom-20 left-16 sm:left-24 hidden md:block opacity-65 hover:opacity-100 transition-opacity"
        style={{ color: inkColor }}
        title="16th-Century Exploration Galleon"
      >
        <svg width="74" height="68" viewBox="0 0 100 90" fill="none" stroke="currentColor">
          {/* Galleon Hull */}
          <path
            d="M15,62 C30,68 65,70 85,60 C87,54 83,48 76,48 L18,48 C14,54 12,58 15,62 Z"
            strokeWidth="1.5"
            fill={faintInk}
          />
          {/* Hull strakes */}
          <path d="M16,54 C35,60 65,60 82,53" strokeWidth="0.8" />
          <path d="M18,58 C35,64 62,64 78,57" strokeWidth="0.8" />
          {/* Rudder & Sterncastle */}
          <path d="M18,48 L14,38 L25,38 L25,48" strokeWidth="1.2" />
          <path d="M72,48 L80,42 L86,45 L80,48" strokeWidth="1.2" />
          {/* Fore Mast & Sails */}
          <line x1="32" y1="48" x2="32" y2="18" strokeWidth="1.2" />
          <path d="M22,24 Q32,20 42,24 Q34,36 22,36 Z" strokeWidth="1" fill={faintInk} />
          <path d="M24,37 Q32,34 40,37 Q34,46 24,46 Z" strokeWidth="1" fill={faintInk} />
          {/* Main Mast & Big Sails */}
          <line x1="52" y1="48" x2="52" y2="8" strokeWidth="1.4" />
          <path d="M40,14 Q52,10 64,14 Q54,26 40,26 Z" strokeWidth="1" fill={faintInk} />
          <path d="M38,28 Q52,24 66,28 Q54,42 38,42 Z" strokeWidth="1.2" fill={faintInk} />
          {/* Mizzen Mast (Lateen triangular sail) */}
          <line x1="70" y1="48" x2="70" y2="22" strokeWidth="1.2" />
          <path d="M64,44 L78,24 L74,44 Z" strokeWidth="1" fill={faintInk} />
          {/* Flags / Pennants */}
          <path d="M52,8 L60,11 L52,14 Z" fill={inkColor} />
          <path d="M32,18 L38,20 L32,22 Z" fill={inkColor} />
          {/* Bowsprit */}
          <line x1="80" y1="48" x2="94" y2="36" strokeWidth="1.2" />
          {/* Ocean Waves Beneath */}
          <path d="M8,68 Q18,63 28,68 T48,68 T68,68 T88,68 T98,68" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
        <span className="block font-mono text-[8px] tracking-[0.2em] uppercase text-center mt-0.5" style={{ color: strongInk }}>
          Navis Exploratoris
        </span>
      </div>

      {/* 5. Mythological Sea Serpent Engraving (South Atlantic / Southern Ocean) */}
      <div
        className="absolute bottom-28 right-24 sm:right-48 hidden lg:block opacity-55 hover:opacity-90 transition-opacity"
        style={{ color: inkColor }}
        title="Antique Cartographic Sea Serpent"
      >
        <svg width="84" height="48" viewBox="0 0 110 60" fill="none" stroke="currentColor">
          {/* Coiling Serpent Body */}
          <path
            d="M10,42 C18,22 28,22 36,42 C44,20 54,20 62,42 C70,26 80,26 86,38 C90,32 96,28 102,32 C106,34 105,42 98,42"
            strokeWidth="1.4"
          />
          {/* Serpent Belly Scales */}
          <path
            d="M12,44 C20,28 26,28 34,44 C42,26 52,26 60,44 C68,32 78,32 84,40"
            strokeWidth="0.8"
            strokeDasharray="1.5 2"
          />
          {/* Serpent Dragon Head & Horns */}
          <path d="M98,42 C104,38 107,26 100,24 C94,22 92,30 96,35" strokeWidth="1.2" />
          <path d="M100,24 L106,18 M98,22 L101,16" strokeWidth="1" />
          {/* Dorsal Fin Spines */}
          <path d="M22,26 L24,20 M26,25 L29,21 M48,24 L50,18 M52,24 L55,19 M74,28 L76,22" strokeWidth="1" />
          {/* Water Splashes */}
          <path d="M4,46 Q14,42 24,46 T44,46 T64,46 T84,46 T104,46" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
        <span className="block font-mono text-[7px] tracking-[0.25em] uppercase text-center mt-0.5" style={{ color: strongInk }}>
          Hic Sunt Dracones
        </span>
      </div>

      {/* 6. Authentic Age of Discovery 16-Point Compass Rose (Positioned above controls) */}
      <div
        className="absolute bottom-28 left-4 sm:left-6 hidden sm:block opacity-90 hover:opacity-100 transition-opacity"
        style={{ color: inkColor }}
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          <svg viewBox="0 0 140 140" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Outer Astrolabe Degree Ring */}
            <circle cx="70" cy="70" r="62" strokeWidth="1.5" stroke={strongInk} />
            <circle cx="70" cy="70" r="58" strokeWidth="0.8" stroke={mediumInk} />
            <circle cx="70" cy="70" r="54" strokeWidth="0.8" strokeDasharray="1.5 3" stroke={mediumInk} />
            <circle cx="70" cy="70" r="26" strokeWidth="0.8" stroke={mediumInk} />
            <circle cx="70" cy="70" r="4" fill={inkColor} />

            {/* 36-Degree Compass Degree Ticks */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="70"
                y1="8"
                x2="70"
                y2="14"
                transform={`rotate(${deg} 70 70)`}
                strokeWidth="1"
                stroke={strongInk}
              />
            ))}

            {/* 4 Primary Compass Points (North, East, South, West) */}
            {/* North Point (Highlighted with Fleur-de-lis) */}
            <polygon points="70,12 65,65 70,70" fill={inkColor} />
            <polygon points="70,12 75,65 70,70" fill={faintInk} stroke={strongInk} strokeWidth="0.5" />

            {/* South Point */}
            <polygon points="70,128 65,75 70,70" fill={inkColor} />
            <polygon points="70,128 75,75 70,70" fill={faintInk} stroke={strongInk} strokeWidth="0.5" />

            {/* East Point */}
            <polygon points="128,70 75,65 70,70" fill={inkColor} />
            <polygon points="128,70 75,75 70,70" fill={faintInk} stroke={strongInk} strokeWidth="0.5" />

            {/* West Point */}
            <polygon points="12,70 65,65 70,70" fill={inkColor} />
            <polygon points="12,70 65,75 70,70" fill={faintInk} stroke={strongInk} strokeWidth="0.5" />

            {/* 4 Secondary Compass Points (NE, SE, SW, NW) */}
            <polygon points="111,29 74,66 70,70" fill={mediumInk} />
            <polygon points="111,29 70,70 66,74" fill={faintInk} stroke={mediumInk} strokeWidth="0.5" />

            <polygon points="111,111 74,74 70,70" fill={mediumInk} />
            <polygon points="111,111 70,70 66,74" fill={faintInk} stroke={mediumInk} strokeWidth="0.5" />

            <polygon points="29,111 66,74 70,70" fill={mediumInk} />
            <polygon points="29,111 70,70 74,66" fill={faintInk} stroke={mediumInk} strokeWidth="0.5" />

            <polygon points="29,29 66,66 70,70" fill={mediumInk} />
            <polygon points="29,29 70,70 74,66" fill={faintInk} stroke={mediumInk} strokeWidth="0.5" />

            {/* Fleur-de-lis Top Crown on North */}
            <path
              d="M70,4 C68,8 65,10 65,13 C67,13 69,11 70,14 C71,11 73,13 75,13 C75,10 72,8 70,4 Z"
              fill={inkColor}
            />

            {/* Cardinal Letters in Classical Roman Serif */}
            <text x="70" y="3" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="serif" fill={inkColor}>
              N
            </text>
            <text x="135" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="serif" fill={inkColor}>
              E
            </text>
            <text x="70" y="138" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="serif" fill={inkColor}>
              S
            </text>
            <text x="5" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="serif" fill={inkColor}>
              W
            </text>
          </svg>
        </div>
      </div>

      {/* 7. Antique "Terra Incognita" Cartouche Banner in Ocean (North Pacific / Arctic) */}
      <div
        className="absolute top-18 right-8 sm:right-16 hidden sm:block opacity-75 pointer-events-none"
        style={{ color: inkColor }}
      >
        <div
          className="px-3.5 py-1.5 rounded-xs border flex flex-col items-center shadow-md"
          style={{
            borderColor: strongInk,
            backgroundColor: isDark ? 'rgba(28, 20, 14, 0.88)' : 'rgba(235, 222, 198, 0.88)',
            backdropFilter: 'blur(3px)'
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: inkColor }} />
            <span
              className="font-serif tracking-[0.28em] text-[10px] font-bold uppercase"
              style={{ color: inkColor }}
            >
              Terra Incognita
            </span>
            <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: inkColor }} />
          </div>
          <span
            className="font-mono text-[8px] tracking-[0.2em] uppercase mt-0.5"
            style={{ color: strongInk }}
          >
            Civ VI Exploratoris · 1570
          </span>
        </div>
      </div>

      {/* 8. Antique Measurement Double-Border with Latitude/Longitude Graticule Lines */}
      <div
        className="absolute inset-0 pointer-events-none border-4"
        style={{
          borderColor: isDark ? 'rgba(214, 184, 133, 0.35)' : 'rgba(77, 52, 27, 0.35)',
          boxShadow: isDark
            ? 'inset 0 0 35px rgba(0,0,0,0.85), 0 0 10px rgba(0,0,0,0.5)'
            : 'inset 0 0 35px rgba(77,52,27,0.25), 0 0 10px rgba(77,52,27,0.15)'
        }}
      />
    </div>
  );
};
