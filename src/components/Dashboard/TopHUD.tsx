import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  Volume2,
  VolumeX,
  Layers,
  ListFilter,
  SlidersHorizontal,
  Check,
  ChevronDown,
  Maximize,
  Minimize
} from 'lucide-react';
import { MapTileStyle, AppTheme, GameFilter } from '../../types/wonder';

interface TopHUDProps {
  totalCount: number;
  worldWondersCount: number;
  naturalWondersCount: number;
  gameFilter: GameFilter;
  onSelectGameFilter: (filter: GameFilter) => void;
  civ5Count: number;
  civ6Count: number;
  mapStyle: MapTileStyle;
  onSelectMapStyle: (style: MapTileStyle) => void;
  showWorldWonders: boolean;
  onToggleWorldWonders: () => void;
  showNaturalWonders: boolean;
  onToggleNaturalWonders: () => void;
  isTourActive?: boolean;
  onToggleTour?: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onResetView: () => void;
  onOpenRandom: () => void;
  isLeftOpen: boolean;
  onToggleLeft: () => void;
  isRightOpen?: boolean;
  onToggleRight?: () => void;
  hasSelectedWonder?: boolean;
  isZenMode: boolean;
  onToggleZenMode: () => void;
  theme?: AppTheme;
  onToggleTheme?: () => void;
}

export const TopHUD: React.FC<TopHUDProps> = ({
  worldWondersCount,
  naturalWondersCount,
  gameFilter,
  onSelectGameFilter,
  civ5Count,
  civ6Count,
  mapStyle,
  onSelectMapStyle,
  showWorldWonders,
  onToggleWorldWonders,
  showNaturalWonders,
  onToggleNaturalWonders,
  isMuted,
  onToggleMute,
  onOpenRandom,
  isLeftOpen,
  onToggleLeft,
  isZenMode,
  onToggleZenMode,
  theme = 'dark'
}) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (filterMenuRef.current && !filterMenuRef.current.contains(target)) {
        setIsFilterMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mapStyleLabels: Record<MapTileStyle, { name: string; desc: string }> = {
    lacquer: {
      name: 'Neo Kinpaku',
      desc: theme === 'dark' ? 'Dark warm mineral lacquer' : 'Archival warm porcelain'
    },
    standard: { name: 'OSM Standard', desc: 'High-contrast community tiles' },
    humanitarian: { name: 'Humanitarian', desc: 'Detailed physical geography' },
    topographic: { name: 'OpenTopoMap', desc: 'Contour lines & relief elevations' },
    parchment: { name: 'Warm Archival', desc: 'Subtle antique paper texture' }
  };

  // Compute a concise summary label for the merged filter button
  let filterSummaryLabel = 'All Wonders';
  if (gameFilter === 'civ6') {
    filterSummaryLabel = 'Civ VI';
  } else if (gameFilter === 'civ5') {
    filterSummaryLabel = 'Civ V';
  }

  if (showWorldWonders && !showNaturalWonders) {
    filterSummaryLabel += ' · World';
  } else if (!showWorldWonders && showNaturalWonders) {
    filterSummaryLabel += ' · Natural';
  } else if (!showWorldWonders && !showNaturalWonders) {
    filterSummaryLabel += ' · None';
  } else if (gameFilter === 'all') {
    filterSummaryLabel = 'All Wonders';
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-[var(--ks-lacquer-deep)] border-b border-[var(--ks-rule)] px-3 sm:px-5 flex items-center justify-between gap-3 shadow-md transition-colors">
      {/* Zone 1: Impeccable Brand Lockup */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="relative w-8 h-8 rounded-xs bg-[var(--ks-kinpaku)] flex items-center justify-center overflow-hidden shadow-xs shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ks-kinpaku-glint)] via-[var(--ks-kinpaku)] to-[var(--ks-kinpaku-rich)]" />
          {/* Diagonal Slash for Carved-Tile Glyph */}
          <div className="absolute w-[140%] h-[2px] bg-[var(--ks-lacquer-deep)] -rotate-45" />
        </div>
        <div className="flex flex-col">
          <span className="font-wordmark text-[1.05rem] sm:text-[1.125rem] text-[var(--ks-champagne)] font-normal tracking-[0.14em] leading-tight whitespace-nowrap">
            {gameFilter === 'civ6'
              ? 'CIVILIZATION VI ATLAS'
              : gameFilter === 'civ5'
              ? 'CIVILIZATION V ATLAS'
              : 'CIVILIZATION ATLAS'}
          </span>
          <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] tracking-[0.18em] leading-none">
            {gameFilter === 'civ6'
              ? 'Civ VI World & Natural Wonders'
              : gameFilter === 'civ5'
              ? 'Civ V Wonders & Natural Relics'
              : 'Civ V & Civ VI World Wonders'}
          </span>
        </div>
      </div>

      {/* Zone 2: Navigation & Streamlined Dropdown Filters */}
      <nav className="hidden lg:flex items-center gap-2">
        {/* 1. Unified Filter Dropdown (Civ VI/V Series + World/Natural Category) */}
        <div className="relative" ref={filterMenuRef}>
          <button
            onClick={() => {
              setIsFilterMenuOpen(!isFilterMenuOpen);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-medium transition-colors whitespace-nowrap border ${
              isFilterMenuOpen
                ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-champagne)] border-[var(--ks-rule-strong)] shadow-xs'
                : 'text-[var(--ks-text-warm)] hover:text-[var(--ks-champagne)] bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] border-[var(--ks-rule)]'
            }`}
            title="Filter wonders by Civilization edition and type"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
            <span className="tracking-wide">{filterSummaryLabel}</span>
            <ChevronDown
              className={`w-3 h-3 text-[var(--ks-text-muted)] transition-transform duration-200 ${
                isFilterMenuOpen ? 'rotate-180 text-[var(--ks-champagne)]' : ''
              }`}
            />
          </button>

          {isFilterMenuOpen && (
            <div className="absolute left-0 mt-1.5 w-68 rounded-xs bg-[var(--ks-raised-lacquer)] border border-[var(--ks-rule-strong)] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100 space-y-2.5">
              {/* Section A: Game Edition */}
              <div>
                <div className="px-2 py-1 text-[9px] font-mono-eyebrow text-[var(--ks-text-muted)] uppercase tracking-wider">
                  Civilization Edition
                </div>
                <div className="space-y-0.5 mt-1">
                  <button
                    onClick={() => {
                      onSelectGameFilter('all');
                      setIsFilterMenuOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between ${
                      gameFilter === 'all'
                        ? 'bg-[var(--ks-graphite)] text-[var(--ks-champagne)] font-medium border-l-2 border-[var(--ks-kinpaku)]'
                        : 'text-[var(--ks-text-warm)] hover:bg-[var(--ks-graphite)] hover:text-[var(--ks-champagne)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--ks-champagne)]" />
                      <span>All Series</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">
                        ({civ5Count + civ6Count})
                      </span>
                      {gameFilter === 'all' && <Check className="w-3.5 h-3.5 text-[var(--ks-kinpaku)] shrink-0" />}
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      onSelectGameFilter('civ6');
                      setIsFilterMenuOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between ${
                      gameFilter === 'civ6'
                        ? 'bg-[var(--ks-graphite)] text-[var(--ks-champagne)] font-medium border-l-2 border-amber-500'
                        : 'text-[var(--ks-text-warm)] hover:bg-[var(--ks-graphite)] hover:text-[var(--ks-champagne)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Civilization VI</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">({civ6Count})</span>
                      {gameFilter === 'civ6' && <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      onSelectGameFilter('civ5');
                      setIsFilterMenuOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between ${
                      gameFilter === 'civ5'
                        ? 'bg-[var(--ks-graphite)] text-[var(--ks-champagne)] font-medium border-l-2 border-[var(--ks-kinpaku)]'
                        : 'text-[var(--ks-text-warm)] hover:bg-[var(--ks-graphite)] hover:text-[var(--ks-champagne)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--ks-kinpaku)]" />
                      <span>Civilization V</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">({civ5Count})</span>
                      {gameFilter === 'civ5' && <Check className="w-3.5 h-3.5 text-[var(--ks-kinpaku)] shrink-0" />}
                    </div>
                  </button>
                </div>
              </div>

              <div className="h-px bg-[var(--ks-rule)]" />

              {/* Section B: Wonder Category / Type */}
              <div>
                <div className="px-2 py-1 text-[9px] font-mono-eyebrow text-[var(--ks-text-muted)] uppercase tracking-wider">
                  Wonder Category
                </div>
                <div className="space-y-1 mt-1">
                  <button
                    onClick={onToggleWorldWonders}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between border ${
                      showWorldWonders
                        ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-kinpaku)] border-[var(--ks-rule-strong)] font-medium'
                        : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] border-transparent hover:bg-[var(--ks-graphite)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-[var(--ks-kinpaku)] shrink-0 shadow-xs" />
                      <span>World Wonders</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">
                        ({worldWondersCount})
                      </span>
                      {showWorldWonders && <Check className="w-3.5 h-3.5 text-[var(--ks-kinpaku)] shrink-0" />}
                    </div>
                  </button>

                  <button
                    onClick={onToggleNaturalWonders}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between border ${
                      showNaturalWonders
                        ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-patina)] border-[var(--ks-rule-patina)] font-medium'
                        : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] border-transparent hover:bg-[var(--ks-graphite)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-[var(--ks-patina)] shrink-0 shadow-xs" />
                      <span>Natural Wonders</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">
                        ({naturalWondersCount})
                      </span>
                      {showNaturalWonders && <Check className="w-3.5 h-3.5 text-[var(--ks-patina)] shrink-0" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Zone 3: Streamlined Actions (Cleaned Up & De-cluttered) */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Toggle Catalog */}
        <button
          onClick={onToggleLeft}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs text-xs font-medium transition-colors border ${
            isLeftOpen
              ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-kinpaku)] border-[var(--ks-rule-strong)]'
              : 'text-[var(--ks-text-warm)] hover:text-[var(--ks-champagne)] border-[var(--ks-rule)] hover:bg-[var(--ks-graphite)] bg-transparent'
          }`}
          title={isLeftOpen ? 'Collapse Catalog' : 'Open Catalog'}
        >
          <ListFilter className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Catalog</span>
        </button>

        {/* Random Wonder Discovery Button (Replaced Grand Tour) */}
        <button
          onClick={onOpenRandom}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap bg-[var(--ks-kinpaku)] text-[var(--ks-dark-ink)] border border-[var(--ks-kinpaku)] hover:bg-[var(--ks-kinpaku-pale)] shadow-xs cursor-pointer"
          title="Explore a random world or natural wonder (Space or Click)"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Random</span>
        </button>

        {/* Full Map Zen Mode */}
        <button
          onClick={onToggleZenMode}
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs text-xs font-medium transition-colors border ${
            isZenMode
              ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-patina)] border-[var(--ks-rule-patina)]'
              : 'text-[var(--ks-text-warm)] hover:text-[var(--ks-champagne)] border-[var(--ks-rule)] hover:bg-[var(--ks-graphite)] bg-transparent'
          }`}
          title={isZenMode ? 'Restore side panels (Z)' : 'Full map view (hide panels) (Z)'}
        >
          {isZenMode ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
          <span>{isZenMode ? 'Panels' : 'Full Map'}</span>
        </button>

        {/* Mute Audio / Narration */}
        <button
          onClick={onToggleMute}
          className={`p-1.5 rounded-xs border transition-colors ${
            isMuted
              ? 'text-[var(--ks-text-mute-deep)] border-[var(--ks-rule)] hover:text-[var(--ks-text-muted)] bg-transparent'
              : 'text-[var(--ks-kinpaku)] border-[var(--ks-rule-strong)] bg-[var(--ks-graphite)]'
          }`}
          title={isMuted ? 'Unmute narration & sound effects (M)' : 'Mute audio (M)'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
