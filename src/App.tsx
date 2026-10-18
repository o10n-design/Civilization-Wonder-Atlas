/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { CIV5_WONDERS } from './data/civWonders';
import { CIV6_WONDERS } from './data/civ6Wonders';
import { CivWonder, MapTileStyle, AppTheme, GameFilter } from './types/wonder';
import { WorldMap } from './components/Map/WorldMap';
import { TopHUD } from './components/Dashboard/TopHUD';
import { LeftPanel } from './components/Dashboard/LeftPanel';
import { RightPanel } from './components/Dashboard/RightPanel';
import { CompletionArtModal } from './components/Dashboard/CompletionArtModal';
import { civAudio } from './utils/audio';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const allWonders = useMemo<CivWonder[]>(() => [...CIV5_WONDERS, ...CIV6_WONDERS], []);

  // Game filter: 'all' | 'civ6' | 'civ5' (Default: 'all' series)
  const [gameFilter, setGameFilter] = useState<GameFilter>('all');

  const wonders = useMemo(() => {
    if (gameFilter === 'all') return allWonders;
    return allWonders.filter((w) => (w.game || 'civ5') === gameFilter);
  }, [allWonders, gameFilter]);

  const [selectedWonder, setSelectedWonder] = useState<CivWonder | null>(() => allWonders[0] || null);
  const [isLeftOpen, setIsLeftOpen] = useState<boolean>(true);
  const [isRightOpen, setIsRightOpen] = useState<boolean>(true);
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [isCompletionArtOpen, setIsCompletionArtOpen] = useState<boolean>(false);
  const [mapStyle, setMapStyle] = useState<MapTileStyle>('lacquer');
  const [showWorldWonders, setShowWorldWonders] = useState<boolean>(true);
  const [showNaturalWonders, setShowNaturalWonders] = useState<boolean>(true);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [, setCameraTrigger] = useState<number>(0);

  // Theme option (dark: Neo Kinpaku lacquer, light: luminous clean archival porcelain)
  const [theme, setTheme] = useState<AppTheme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('civ5_atlas_theme');
        if (saved === 'light' || saved === 'dark') return saved;
      } catch {
        // Fallback to dark
      }
    }
    return 'dark';
  });

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    try {
      localStorage.setItem('civ5_atlas_theme', theme);
    } catch {
      // Ignore
    }
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme: AppTheme = prev === 'dark' ? 'light' : 'dark';
      // Harmonize default cartography with theme
      if (nextTheme === 'light' && mapStyle === 'lacquer') {
        setMapStyle('humanitarian');
      } else if (nextTheme === 'dark' && (mapStyle === 'humanitarian' || mapStyle === 'standard')) {
        setMapStyle('lacquer');
      }
      return nextTheme;
    });
  }, [mapStyle]);

  const tourTimerRef = useRef<NodeJS.Timeout | null>(null);

  const worldWondersCount = wonders.filter((w) => w.type === 'world_wonder').length;
  const naturalWondersCount = wonders.filter((w) => w.type === 'natural_wonder').length;
  const civ5Count = CIV5_WONDERS.length;
  const civ6Count = CIV6_WONDERS.length;

  const handleSelectWonder = useCallback((wonder: CivWonder) => {
    setSelectedWonder(wonder);
    setIsRightOpen(true);
    civAudio.playGameSelect();

    // On moderate viewports, collapse left catalog so the map & right codex have plenty of breathing room
    if (typeof window !== 'undefined' && window.innerWidth < 1280) {
      setIsLeftOpen(false);
    }
  }, []);

  const handleSelectGameFilter = useCallback((filter: GameFilter) => {
    setGameFilter(filter);
    civAudio.playSwitchSound();
  }, []);

  const handleNextWonder = useCallback(() => {
    if (wonders.length === 0) return;
    if (!selectedWonder) {
      handleSelectWonder(wonders[0]);
      return;
    }
    const currentIndex = wonders.findIndex((w) => w.id === selectedWonder.id);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % wonders.length;
    handleSelectWonder(wonders[nextIndex]);
  }, [wonders, selectedWonder, handleSelectWonder]);

  const handlePrevWonder = useCallback(() => {
    if (wonders.length === 0) return;
    if (!selectedWonder) {
      handleSelectWonder(wonders[wonders.length - 1]);
      return;
    }
    const currentIndex = wonders.findIndex((w) => w.id === selectedWonder.id);
    const prevIndex = currentIndex === -1 ? 0 : (currentIndex - 1 + wonders.length) % wonders.length;
    handleSelectWonder(wonders[prevIndex]);
  }, [wonders, selectedWonder, handleSelectWonder]);

  const handleRandomWonder = useCallback(() => {
    if (wonders.length === 0) return;
    const randomIndex = Math.floor(Math.random() * wonders.length);
    handleSelectWonder(wonders[randomIndex]);
  }, [wonders, handleSelectWonder]);

  const handleResetView = useCallback(() => {
    setSelectedWonder(null);
    civAudio.playMapSelect();
  }, []);

  const handleToggleMute = useCallback(() => {
    civAudio.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (!isMuted) {
      civAudio.stopNarration();
    }
  }, [isMuted]);

  const handleToggleZenMode = useCallback(() => {
    setIsZenMode((prev) => {
      const next = !prev;
      if (next) {
        setIsLeftOpen(false);
        setIsRightOpen(false);
      } else {
        setIsLeftOpen(true);
        if (selectedWonder) setIsRightOpen(true);
      }
      return next;
    });
  }, [selectedWonder]);

  // Grand Tour automatic advancement
  useEffect(() => {
    if (!isTourActive) {
      if (tourTimerRef.current) {
        clearInterval(tourTimerRef.current);
        tourTimerRef.current = null;
      }
      return;
    }

    tourTimerRef.current = setInterval(() => {
      handleNextWonder();
    }, 6500);

    return () => {
      if (tourTimerRef.current) {
        clearInterval(tourTimerRef.current);
      }
    };
  }, [isTourActive, handleNextWonder]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextWonder();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevWonder();
      } else if (e.key === 'Escape') {
        if (isCompletionArtOpen) {
          setIsCompletionArtOpen(false);
        } else {
          setIsRightOpen(false);
        }
      } else if (e.key.toLowerCase() === 'm') {
        handleToggleMute();
      } else if (e.key.toLowerCase() === 'z') {
        handleToggleZenMode();
      } else if (e.key.toLowerCase() === 't') {
        handleToggleTheme();
      } else if (e.key.toLowerCase() === 'g') {
        civAudio.playSwitchSound();
        setGameFilter((prev) => {
          if (prev === 'all') return 'civ6';
          if (prev === 'civ6') return 'civ5';
          return 'all';
        });
      } else if (e.key === ' ') {
        e.preventDefault();
        handleRandomWonder();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextWonder, handlePrevWonder, handleRandomWonder, handleToggleMute, handleToggleZenMode, handleToggleTheme, isCompletionArtOpen]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--ks-lacquer)] select-none text-[var(--ks-text-warm)] font-body transition-colors">
      {/* 1. Header Navigation Bar with Theme & Game Switcher */}
      <TopHUD
        totalCount={wonders.length}
        worldWondersCount={worldWondersCount}
        naturalWondersCount={naturalWondersCount}
        gameFilter={gameFilter}
        onSelectGameFilter={handleSelectGameFilter}
        civ5Count={civ5Count}
        civ6Count={civ6Count}
        mapStyle={mapStyle}
        onSelectMapStyle={(style) => {
          civAudio.playSwitchSound();
          setMapStyle(style);
        }}
        showWorldWonders={showWorldWonders}
        onToggleWorldWonders={() => {
          civAudio.playSwitchSound();
          setShowWorldWonders(!showWorldWonders);
        }}
        showNaturalWonders={showNaturalWonders}
        onToggleNaturalWonders={() => {
          civAudio.playSwitchSound();
          setShowNaturalWonders(!showNaturalWonders);
        }}
        isTourActive={isTourActive}
        onToggleTour={() => setIsTourActive(!isTourActive)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onResetView={handleResetView}
        onOpenRandom={handleRandomWonder}
        isLeftOpen={isLeftOpen}
        onToggleLeft={() => {
          setIsLeftOpen(!isLeftOpen);
          if (isZenMode) setIsZenMode(false);
        }}
        isRightOpen={isRightOpen}
        onToggleRight={() => {
          setIsRightOpen(!isRightOpen);
          if (isZenMode) setIsZenMode(false);
        }}
        hasSelectedWonder={!!selectedWonder}
        isZenMode={isZenMode}
        onToggleZenMode={handleToggleZenMode}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Full Bleed World Map */}
      <main className="absolute inset-0 pt-14 z-0">
        <WorldMap
          wonders={wonders}
          selectedWonder={selectedWonder}
          onSelectWonder={handleSelectWonder}
          mapStyle={mapStyle}
          showWorldWonders={showWorldWonders}
          showNaturalWonders={showNaturalWonders}
          isLeftPanelOpen={isLeftOpen && !isZenMode}
          isRightPanelOpen={isRightOpen && !isZenMode && !!selectedWonder}
        />
      </main>

      {/* 3. Floating Left Panel: Civilopedia Wonder Catalog */}
      {!isZenMode && (
        <LeftPanel
          wonders={allWonders}
          selectedWonder={selectedWonder}
          onSelectWonder={handleSelectWonder}
          isOpen={isLeftOpen}
          onToggleOpen={() => setIsLeftOpen(!isLeftOpen)}
          gameFilter={gameFilter}
          onSelectGameFilter={handleSelectGameFilter}
        />
      )}

      {/* 4. Floating Right Panel: Civilopedia Wonder Codex Spotlight */}
      {!isZenMode && isRightOpen && selectedWonder && (
        <RightPanel
          wonder={selectedWonder}
          onClose={() => setIsRightOpen(false)}
          onNext={handleNextWonder}
          onPrev={handlePrevWonder}
          onRecenter={() => setCameraTrigger((prev) => prev + 1)}
          onOpenCompletionArt={() => {
            civAudio.playWonderFanfare();
            setIsCompletionArtOpen(true);
          }}
        />
      )}

      {/* 5. Completion Art / Wonder Visual Full-Screen Modal */}
      <CompletionArtModal
        wonder={selectedWonder}
        isOpen={isCompletionArtOpen}
        onClose={() => setIsCompletionArtOpen(false)}
        onNext={handleNextWonder}
        onPrev={handlePrevWonder}
      />

      {/* 6. Neo Kinpaku Minimal Footer Bar with Interactive Theme Switcher */}
      <footer className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex items-center gap-2.5 bg-[var(--ks-raised-lacquer)]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-[var(--ks-rule)] text-[11px] text-[var(--ks-text-muted)] shadow-2xl transition-colors max-w-[calc(100vw-24px)] overflow-x-auto clean-scrollbar">
        {/* Interactive Theme Switcher Button (Relocated from header) */}
        <button
          onClick={handleToggleTheme}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border border-[var(--ks-rule)] transition-all cursor-pointer font-medium shadow-xs shrink-0"
          title={theme === 'dark' ? 'Switch to Porcelain Light Mode (T)' : 'Switch to Mineral Dark Mode (T)'}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span className="font-mono text-[10px] font-semibold tracking-wide">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span className="font-mono text-[10px] font-semibold tracking-wide">Dark Mode</span>
            </>
          )}
        </button>

        <span className="text-[var(--ks-rule)]">|</span>

        {/* Legend Indicators */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-xs bg-[var(--ks-kinpaku)] inline-block shadow-xs" />
          <span className="text-[var(--ks-champagne)] font-medium">World Wonders</span>
        </div>
        <span className="text-[var(--ks-rule)]">|</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-xs bg-[var(--ks-patina)] inline-block shadow-xs" />
          <span className="text-[var(--ks-champagne)] font-medium">Natural Wonders</span>
        </div>

        <span className="text-[var(--ks-rule)] hidden lg:inline">|</span>

        {/* Quick Keyboard Reference */}
        <div className="text-[var(--ks-text-muted)] font-mono text-[10px] hidden lg:flex items-center gap-2 shrink-0">
          <span>
            <kbd className="px-1 py-0.5 rounded-xs bg-[var(--ks-graphite)] text-[var(--ks-champagne)] border border-[var(--ks-rule)]">
              G
            </kbd>{' '}
            Filter
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded-xs bg-[var(--ks-graphite)] text-[var(--ks-champagne)] border border-[var(--ks-rule)]">
              T
            </kbd>{' '}
            Theme
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded-xs bg-[var(--ks-graphite)] text-[var(--ks-champagne)] border border-[var(--ks-rule)]">
              Space
            </kbd>{' '}
            Random
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded-xs bg-[var(--ks-graphite)] text-[var(--ks-champagne)] border border-[var(--ks-rule)]">
              Z
            </kbd>{' '}
            Zen
          </span>
        </div>
      </footer>
    </div>
  );
}
