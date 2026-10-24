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
import { LegalModal } from './components/Dashboard/LegalModal';
import { civAudio } from './utils/audio';
import { Sun, Moon, Layers, ChevronDown, Check, Scale, X, Eye, EyeOff } from 'lucide-react';

export default function App() {
  const allWonders = useMemo<CivWonder[]>(() => [...CIV5_WONDERS, ...CIV6_WONDERS], []);

  // Game filter: 'all' | 'civ6' | 'civ5' (Default: 'all' series)
  const [gameFilter, setGameFilter] = useState<GameFilter>('all');

  const wonders = useMemo(() => {
    if (gameFilter === 'all') return allWonders;
    return allWonders.filter((w) => (w.game || 'civ5') === gameFilter);
  }, [allWonders, gameFilter]);

  const [selectedWonder, setSelectedWonder] = useState<CivWonder | null>(null);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState<boolean>(true);
  const [isLeftOpen, setIsLeftOpen] = useState<boolean>(true);
  const [isRightOpen, setIsRightOpen] = useState<boolean>(false);
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [isCompletionArtOpen, setIsCompletionArtOpen] = useState<boolean>(false);
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(false);
  const [mapStyle, setMapStyle] = useState<MapTileStyle>('civ6fog');
  const [isFooterStyleOpen, setIsFooterStyleOpen] = useState<boolean>(false);
  const footerStyleRef = useRef<HTMLDivElement>(null);
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
      // Harmonize default cartography with theme if user was on lacquer/humanitarian
      if (nextTheme === 'light' && mapStyle === 'lacquer') {
        setMapStyle('humanitarian');
      } else if (nextTheme === 'dark' && mapStyle === 'humanitarian') {
        setMapStyle('lacquer');
      }
      return nextTheme;
    });
  }, [mapStyle]);

  // Handle outside click for footer map layer dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (footerStyleRef.current && !footerStyleRef.current.contains(target)) {
        setIsFooterStyleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mapStyleLabels: Record<MapTileStyle, { name: string; desc: string }> = useMemo(
    () => ({
      civ6fog: {
        name: 'Civ VI Fog of War',
        desc: 'Age of Discovery antique parchment & nautical linework'
      },
      lacquer: {
        name: 'Neo Kinpaku',
        desc: theme === 'dark' ? 'Dark mineral lacquer' : 'Archival porcelain'
      },
      parchment: { name: 'Warm Archival', desc: 'Antique paper texture' },
      humanitarian: { name: 'Humanitarian', desc: 'Detailed physical geography' },
      topographic: { name: 'OpenTopoMap', desc: 'Contour lines & relief elevations' },
      standard: { name: 'OSM Standard', desc: 'Community standard tiles' }
    }),
    [theme]
  );

  const tourTimerRef = useRef<NodeJS.Timeout | null>(null);

  const worldWondersCount = wonders.filter((w) => w.type === 'world_wonder').length;
  const naturalWondersCount = wonders.filter((w) => w.type === 'natural_wonder').length;
  const civ5Count = CIV5_WONDERS.length;
  const civ6Count = CIV6_WONDERS.length;

  const handleSelectWonder = useCallback((wonder: CivWonder) => {
    setSelectedWonder(wonder);
    setShowWelcomeBanner(false);
    setIsRightOpen(true);
    civAudio.playGameSelect();

    // If selected landmark's marker category is currently toggled off, re-enable it so its map marker is visible
    if (wonder.type === 'world_wonder') {
      setShowWorldWonders(true);
    } else if (wonder.type === 'natural_wonder') {
      setShowNaturalWonders(true);
    }

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
        if (showWelcomeBanner) {
          setShowWelcomeBanner(false);
        } else if (isCompletionArtOpen) {
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
      } else if (e.key === '1') {
        civAudio.playSwitchSound();
        setShowWorldWonders((prev) => !prev);
      } else if (e.key === '2') {
        civAudio.playSwitchSound();
        setShowNaturalWonders((prev) => !prev);
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
          theme={theme}
        />
      </main>

      {/* 2. Floating Center Welcome Banner (No background overlay, height <= 128px) */}
      {showWelcomeBanner && !selectedWonder && !isZenMode && (
        <aside
          role="region"
          aria-label="Welcome to Civilization Atlas"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto w-[calc(100vw-32px)] max-w-xl max-h-[128px] overflow-hidden rounded-xs bg-[var(--ks-raised-lacquer)]/95 backdrop-blur-md border border-[var(--ks-rule-strong)] shadow-[0_20px_50px_rgba(0,0,0,0.65)] px-3.5 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 transition-all"
        >
          {/* Logo & Name styled like the header */}
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            <img
              src="/assets/aistudio/civ-atlas_e8ca6186.png"
              alt="Civilization Atlas Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md shrink-0 transition-transform hover:scale-105"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-wordmark text-[1.05rem] sm:text-[1.2rem] text-[var(--ks-champagne)] font-semibold tracking-[0.08em] leading-tight whitespace-nowrap">
                {gameFilter === 'civ6'
                  ? 'CIVILIZATION VI ATLAS'
                  : gameFilter === 'civ5'
                  ? 'CIVILIZATION V ATLAS'
                  : 'CIVILIZATION ATLAS'}
              </span>
              <p className="font-body text-xs text-[var(--ks-text-muted)] mt-0.5 line-clamp-2 leading-snug">
                Explore on your own — select any landmark on the globe or catalog to uncover historical lore and strategic yields.
              </p>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => {
              civAudio.playSwitchSound();
              setShowWelcomeBanner(false);
            }}
            className="p-1.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors cursor-pointer shrink-0 self-center"
            title="Dismiss banner"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

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
          theme={theme}
        />
      )}

      {/* 4. Floating Right Panel: Civilopedia Wonder Codex Spotlight */}
      {!isZenMode && isRightOpen && selectedWonder && (
        <RightPanel
          wonder={selectedWonder}
          allWonders={allWonders}
          onSelectWonder={handleSelectWonder}
          onClose={() => setIsRightOpen(false)}
          onNext={handleNextWonder}
          onPrev={handlePrevWonder}
          onRecenter={() => setCameraTrigger((prev) => prev + 1)}
          onOpenCompletionArt={() => {
            civAudio.playWonderFanfare();
            setIsCompletionArtOpen(true);
          }}
          theme={theme}
        />
      )}

      {/* 5. Completion Art / Wonder Visual Full-Screen Modal */}
      <CompletionArtModal
        wonder={selectedWonder}
        isOpen={isCompletionArtOpen}
        onClose={() => setIsCompletionArtOpen(false)}
        onNext={handleNextWonder}
        onPrev={handlePrevWonder}
        theme={theme}
      />

      {/* 6. Legal Attribution & Disclaimers Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />

      {/* 7. Neo Kinpaku Minimal Footer Bar with Map Layer, Interactive Marker Toggles & Theme Switcher */}
      <footer className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center gap-1.5 sm:gap-2 bg-[var(--ks-raised-lacquer)]/95 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-xs border border-[var(--ks-rule)] text-[11px] text-[var(--ks-text-muted)] shadow-2xl transition-colors max-w-[calc(100vw-24px)] overflow-x-auto sm:overflow-visible no-scrollbar">
        {/* Interactive Theme Switcher Button (Text: Light / Dark) */}
        <button
          onClick={handleToggleTheme}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border border-[var(--ks-rule)] transition-all cursor-pointer font-medium shadow-xs shrink-0"
          title={theme === 'dark' ? 'Switch to Light (T)' : 'Switch to Dark (T)'}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span className="font-mono text-[10px] font-semibold tracking-wide">Light</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span className="font-mono text-[10px] font-semibold tracking-wide">Dark</span>
            </>
          )}
        </button>

        {/* Map Layer Dropdown in Footer (Directly next to mode button) */}
        <div className="relative shrink-0" ref={footerStyleRef}>
          <button
            onClick={() => setIsFooterStyleOpen(!isFooterStyleOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border border-[var(--ks-rule)] transition-all cursor-pointer font-medium shadow-xs"
            title="Choose cartographic map style"
          >
            <Layers className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
            <span className="font-mono text-[10px] font-semibold tracking-wide">
              {mapStyleLabels[mapStyle]?.name || 'Cartography'}
            </span>
            <ChevronDown
              className={`w-3 h-3 text-[var(--ks-text-muted)] transition-transform duration-200 ${
                isFooterStyleOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isFooterStyleOpen && (
            <div className="absolute bottom-full mb-2.5 left-0 w-60 rounded-xs bg-[var(--ks-raised-lacquer)] border border-[var(--ks-rule-strong)] shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-1 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-2.5 py-1 text-[9px] font-mono-eyebrow text-[var(--ks-text-muted)] border-b border-[var(--ks-rule)]">
                Cartographic Layer
              </div>
              {(Object.keys(mapStyleLabels) as MapTileStyle[]).map((style) => (
                <button
                  key={style}
                  onClick={() => {
                    setMapStyle(style);
                    setIsFooterStyleOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs transition-colors flex items-center justify-between ${
                    mapStyle === style
                      ? 'bg-[var(--ks-graphite)] text-[var(--ks-kinpaku)] font-medium border-l-2 border-[var(--ks-kinpaku)]'
                      : 'text-[var(--ks-text-warm)] hover:bg-[var(--ks-graphite)] hover:text-[var(--ks-champagne)]'
                  }`}
                >
                  <div>
                    <div className="font-medium tracking-wide text-[11px]">{mapStyleLabels[style].name}</div>
                    <div className="text-[9px] text-[var(--ks-text-muted)]">{mapStyleLabels[style].desc}</div>
                  </div>
                  {mapStyle === style && <Check className="w-3.5 h-3.5 text-[var(--ks-kinpaku)] shrink-0 ml-1.5" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <span className="text-[var(--ks-rule)]">|</span>

        {/* Interactive Legend Items: Toggle World & Natural Wonder Markers */}
        <div className="flex items-center gap-1.5 shrink-0" role="group" aria-label="Toggle marker layers">
          {/* World Wonders Toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={showWorldWonders}
            onClick={() => {
              civAudio.playSwitchSound();
              setShowWorldWonders((prev) => !prev);
            }}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-xs transition-all cursor-pointer font-medium border select-none ${
              showWorldWonders
                ? 'bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border-[var(--ks-kinpaku)]/40 shadow-xs'
                : 'bg-transparent hover:bg-[var(--ks-graphite)]/50 text-[var(--ks-text-muted)] border-dashed border-[var(--ks-rule)] opacity-60 hover:opacity-100'
            }`}
            title={
              showWorldWonders
                ? 'World Wonders visible on map · Click to hide markers (1)'
                : 'World Wonders hidden from map · Click to show markers (1)'
            }
            aria-label={showWorldWonders ? 'Hide World Wonder markers' : 'Show World Wonder markers'}
          >
            <span
              className={`w-2.5 h-2.5 rounded-xs transition-all shrink-0 ${
                showWorldWonders
                  ? 'bg-[var(--ks-kinpaku)] shadow-[0_0_8px_rgba(245,190,44,0.45)] scale-100'
                  : 'bg-transparent border border-[var(--ks-rule-strong)] scale-90'
              }`}
            />
            <span className={showWorldWonders ? 'text-[var(--ks-champagne)]' : 'line-through text-[var(--ks-text-muted)]'}>
              World
            </span>
            <span className="font-mono text-[10px] text-[var(--ks-text-muted)] font-normal">
              ({worldWondersCount})
            </span>
            {showWorldWonders ? (
              <Eye className="w-3 h-3 text-[var(--ks-kinpaku)]/80 ml-0.5 shrink-0" />
            ) : (
              <EyeOff className="w-3 h-3 text-[var(--ks-text-faint)] ml-0.5 shrink-0" />
            )}
          </button>

          <span className="text-[var(--ks-rule)]">|</span>

          {/* Natural Wonders Toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={showNaturalWonders}
            onClick={() => {
              civAudio.playSwitchSound();
              setShowNaturalWonders((prev) => !prev);
            }}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-xs transition-all cursor-pointer font-medium border select-none ${
              showNaturalWonders
                ? 'bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border-[var(--ks-patina)]/40 shadow-xs'
                : 'bg-transparent hover:bg-[var(--ks-graphite)]/50 text-[var(--ks-text-muted)] border-dashed border-[var(--ks-rule)] opacity-60 hover:opacity-100'
            }`}
            title={
              showNaturalWonders
                ? 'Natural Wonders visible on map · Click to hide markers (2)'
                : 'Natural Wonders hidden from map · Click to show markers (2)'
            }
            aria-label={showNaturalWonders ? 'Hide Natural Wonder markers' : 'Show Natural Wonder markers'}
          >
            <span
              className={`w-2.5 h-2.5 rounded-xs transition-all shrink-0 ${
                showNaturalWonders
                  ? 'bg-[var(--ks-patina)] shadow-[0_0_8px_rgba(70,210,188,0.45)] scale-100'
                  : 'bg-transparent border border-[var(--ks-rule-patina)] scale-90'
              }`}
            />
            <span className={showNaturalWonders ? 'text-[var(--ks-champagne)]' : 'line-through text-[var(--ks-text-muted)]'}>
              Natural
            </span>
            <span className="font-mono text-[10px] text-[var(--ks-text-muted)] font-normal">
              ({naturalWondersCount})
            </span>
            {showNaturalWonders ? (
              <Eye className="w-3 h-3 text-[var(--ks-patina)]/80 ml-0.5 shrink-0" />
            ) : (
              <EyeOff className="w-3 h-3 text-[var(--ks-text-faint)] ml-0.5 shrink-0" />
            )}
          </button>
        </div>

        <span className="text-[var(--ks-rule)]">|</span>

        {/* Legal & Sources Button */}
        <button
          onClick={() => setIsLegalOpen(true)}
          className="flex items-center gap-1 px-2 py-0.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors text-[10px] font-mono tracking-wider cursor-pointer shrink-0"
          title="View Legal Disclosures, Fandom CC-BY-SA, and Trademarks"
        >
          <Scale className="w-3 h-3 text-[var(--ks-kinpaku)]" />
          <span className="hidden sm:inline">Legal &amp; Sources</span>
          <span className="sm:hidden">Legal</span>
        </button>

        <span className="text-[var(--ks-rule)] hidden lg:inline">|</span>

        {/* Quick Keyboard Reference */}
        <div className="text-[var(--ks-text-muted)] font-mono text-[10px] hidden lg:flex items-center gap-2 shrink-0">
          <span className="hidden xl:inline">
            <kbd className="px-1 py-0.5 rounded-xs bg-[var(--ks-graphite)] text-[var(--ks-champagne)] border border-[var(--ks-rule)]">
              1/2
            </kbd>{' '}
            Toggles
          </span>
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
