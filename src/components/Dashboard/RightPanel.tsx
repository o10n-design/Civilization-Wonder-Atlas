import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Play,
  Square,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Compass,
  Scroll,
  Maximize2,
  Hammer,
  GraduationCap
} from 'lucide-react';
import { CivWonder } from '../../types/wonder';
import { YieldBadge } from '../Common/YieldBadge';
import { civAudio } from '../../utils/audio';
import { getYieldIconUrl } from '../../data/yieldIcons';
import { getCountryFlag } from '../../utils/countryFlags';
import { getWonderCounterparts } from '../../utils/wonderCounterparts';

interface RightPanelProps {
  wonder: CivWonder | null;
  allWonders?: CivWonder[];
  onSelectWonder?: (wonder: CivWonder) => void;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onRecenter: () => void;
  onOpenCompletionArt?: () => void;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  wonder,
  allWonders = [],
  onSelectWonder,
  onClose,
  onNext,
  onPrev,
  onRecenter,
  onOpenCompletionArt
}) => {
  const [activeTab, setActiveTab] = useState<'gameplay' | 'history'>('gameplay');
  const [isNarrating, setIsNarrating] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  // Stop narration when wonder changes
  useEffect(() => {
    setIsNarrating(false);
    civAudio.stopNarration();
  }, [wonder?.id]);

  const counterparts = useMemo(() => {
    if (!wonder) return { civ5Wonder: null, civ6Wonder: null, hasBoth: false };
    return getWonderCounterparts(wonder, allWonders);
  }, [wonder, allWonders]);

  if (!wonder) return null;

  const isWorld = wonder.type === 'world_wonder';
  const isCiv6 = wonder.game === 'civ6';
  const artworkSrc = wonder.visualUrl || wonder.imageUrl;

  const handleToggleNarration = () => {
    if (isNarrating) {
      civAudio.stopNarration();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      const textToRead = `${wonder.quote} ... as quoted from ${wonder.quoteAuthor}.`;
      civAudio.narrateQuote(textToRead, () => {
        setIsNarrating(false);
      });
    }
  };

  const handleCopyCoords = () => {
    const coords = `${wonder.location.lat.toFixed(4)}, ${wonder.location.lng.toFixed(4)}`;
    navigator.clipboard.writeText(coords);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <aside className="fixed right-3 sm:right-5 top-16 bottom-4 z-30 w-84 sm:w-92 md:w-[420px] max-w-[calc(100vw-24px)] pointer-events-auto flex flex-col animate-in fade-in slide-in-from-right-4 duration-200">
      <div className="w-full h-full bg-[var(--ks-raised-lacquer)] rounded-xs flex flex-col overflow-hidden shadow-2xl border border-[var(--ks-rule)]">
        {/* Panel Header */}
        <div className="px-4 py-3 border-b border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.14em] font-bold px-2 py-0.5 rounded-xs border shrink-0 ${
                isWorld
                  ? 'bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-500/40'
                  : 'bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-500/40'
              }`}
            >
              {isWorld ? 'World Wonder' : 'Natural Wonder'}
            </span>
            <span
              className={`font-mono text-[8.5px] font-bold px-2 py-0.5 rounded-xs border uppercase tracking-wider shrink-0 ${
                isCiv6
                  ? 'bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-500/40'
                  : 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-950/70 dark:text-blue-200 dark:border-blue-500/40'
              }`}
            >
              {isCiv6 ? 'Civilization VI' : 'Civilization V'}
            </span>
            {wonder.era && wonder.era !== 'Timeless' && (
              <span className="font-mono text-[10px] text-[var(--ks-text-muted)] font-medium truncate">
                · {wonder.era}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={onPrev}
              className="p-1 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
              title="Previous Wonder"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-1 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
              title="Next Wonder"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors ml-1"
              title="Close Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Edition Switcher Row Directly Below Header */}
        <div className="px-4 py-2 border-b border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)]/90 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles className="w-3.5 h-3.5 text-[var(--ks-kinpaku)] shrink-0" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--ks-text-muted)] font-medium truncate">
              {counterparts.hasBoth ? 'Available in both games' : 'Game Edition'}
            </span>
          </div>

          {counterparts.hasBoth ? (
            <div className="flex items-center gap-1 bg-[var(--ks-graphite)] p-0.5 rounded-xs border border-[var(--ks-rule)] shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (isCiv6 && counterparts.civ5Wonder && onSelectWonder) {
                    civAudio.playSwitchSound();
                    onSelectWonder(counterparts.civ5Wonder);
                  }
                }}
                className={`px-2.5 py-0.5 rounded-xs font-mono text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                  !isCiv6
                    ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-blue-100 shadow-xs border border-blue-500'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
                title="Switch Codex view to Civilization V"
              >
                Civ V
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!isCiv6 && counterparts.civ6Wonder && onSelectWonder) {
                    civAudio.playSwitchSound();
                    onSelectWonder(counterparts.civ6Wonder);
                  }
                }}
                className={`px-2.5 py-0.5 rounded-xs font-mono text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                  isCiv6
                    ? 'bg-orange-600 text-white dark:bg-orange-600 dark:text-orange-100 shadow-xs border border-orange-500'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
                title="Switch Codex view to Civilization VI"
              >
                Civ VI
              </button>
            </div>
          ) : (
            <span
              className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${
                isCiv6
                  ? 'bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-500/40'
                  : 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-950/70 dark:text-blue-200 dark:border-blue-500/40'
              }`}
            >
              {isCiv6 ? 'Civ VI Exclusive' : 'Civ V Exclusive'}
            </span>
          )}
        </div>

        {/* Title, Icon & Coordinates Ribbon */}
        <div className="px-4 pt-3.5 pb-3 border-b border-[var(--ks-rule)] bg-[var(--ks-raised-lacquer)] shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              {wonder.iconUrl && (
                <img
                  src={wonder.iconUrl}
                  alt={wonder.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full border border-[var(--ks-rule)] p-0.5 bg-[var(--ks-lacquer-deep)] object-cover shrink-0 mt-0.5"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              )}
              <div className="min-w-0">
                <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-[var(--ks-champagne)] leading-tight">
                  {wonder.name}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[var(--ks-text-muted)] mt-1 font-body">
                  <span className="shrink-0 text-sm leading-none" title={wonder.location.modernCountry}>
                    {getCountryFlag(wonder.location.modernCountry)}
                  </span>
                  <span className="truncate">
                    {wonder.location.modernRegion}, {wonder.location.modernCountry}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Segmented Tab Switcher */}
          <div className="mt-3.5 grid grid-cols-2 gap-1 bg-[var(--ks-graphite)] p-0.5 rounded-xs border border-[var(--ks-rule)]">
            <button
              onClick={() => {
                if (activeTab !== 'gameplay') {
                  setActiveTab('gameplay');
                  civAudio.playSwitchSound();
                }
              }}
              className={`py-1.5 text-xs font-medium rounded-xs transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'gameplay'
                  ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-champagne)] shadow-xs'
                  : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span>Gameplay & Yields</span>
            </button>
            <button
              onClick={() => {
                if (activeTab !== 'history') {
                  setActiveTab('history');
                  civAudio.playSwitchSound();
                }
              }}
              className={`py-1.5 text-xs font-medium rounded-xs transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'history'
                  ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-champagne)] shadow-xs'
                  : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
              <span>History & Lore</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto clean-scrollbar p-4 space-y-4">
          {activeTab === 'gameplay' ? (
            <>
              {/* Wonder Artwork Banner */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-medium text-[var(--ks-text-muted)]">
                  <span className="font-mono-eyebrow text-[9px] text-[var(--ks-kinpaku)] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[var(--ks-kinpaku)]" />
                    <span>
                      {isCiv6
                        ? isWorld
                          ? 'Civ VI Wonder View'
                          : 'Civ VI Natural Wonder'
                        : isWorld
                        ? 'Civ V Completion Art'
                        : 'Civ V Discovery Visual'}
                    </span>
                  </span>
                  {onOpenCompletionArt && (
                    <button
                      onClick={onOpenCompletionArt}
                      className="text-[var(--ks-kinpaku)] hover:text-[var(--ks-kinpaku-pale)] flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase hover:underline"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Full Artwork</span>
                    </button>
                  )}
                </div>

                <div
                  onClick={onOpenCompletionArt}
                  className="relative rounded-xs overflow-hidden border border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] aspect-[16/10] group cursor-pointer"
                  title="Click to view full completion artwork"
                >
                  {artworkSrc ? (
                    <img
                      src={artworkSrc}
                      alt={wonder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        if (wonder.imageUrl && !target.src.endsWith(wonder.imageUrl)) {
                          target.src = wonder.imageUrl;
                        } else {
                          target.style.display = 'none';
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full relative flex flex-col items-center justify-center p-4 bg-[var(--ks-lacquer-deep)] text-center">
                      <div className="w-12 h-12 rounded-full border border-[var(--ks-rule)] flex items-center justify-center bg-[var(--ks-graphite)] text-[var(--ks-kinpaku)] mb-1.5">
                        {isWorld ? (
                          <Sparkles className="w-6 h-6 text-[var(--ks-kinpaku)]" />
                        ) : (
                          <Compass className="w-6 h-6 text-[var(--ks-patina)]" />
                        )}
                      </div>
                      <h4 className="font-headline text-lg font-light text-[var(--ks-champagne)]">{wonder.name}</h4>
                      <p className="font-mono text-[10px] text-[var(--ks-text-muted)] mt-0.5">{wonder.yearApprox}</p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ks-lacquer-deep)] via-transparent to-transparent pointer-events-none" />

                  {/* Hover expansion prompt */}
                  <div className="absolute inset-0 bg-[var(--ks-lacquer-deep)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-xs bg-[var(--ks-raised-lacquer)] text-[var(--ks-champagne)] border border-[var(--ks-rule-strong)] text-xs font-medium flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-[var(--ks-kinpaku)]" />
                      <span>View Artwork</span>
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-[var(--ks-champagne)] pointer-events-none">
                    <span className="font-mono text-[10px] bg-[var(--ks-lacquer-deep)]/85 px-2 py-0.5 rounded-xs border border-[var(--ks-rule)]">
                      {wonder.yearApprox}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyCoords();
                      }}
                      className="pointer-events-auto flex items-center gap-1 text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] bg-[var(--ks-lacquer-deep)]/85 px-2 py-0.5 rounded-xs border border-[var(--ks-rule)] transition-colors text-[10px]"
                    >
                      {copiedCoords ? <Check className="w-3 h-3 text-[var(--ks-patina)]" /> : <Copy className="w-3 h-3" />}
                      <span className="font-mono">
                        {wonder.location.lat.toFixed(1)}°, {wonder.location.lng.toFixed(1)}°
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Empire Yields */}
              <div className="space-y-1.5">
                <h4 className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[var(--ks-kinpaku)]" />
                  <span>Strategic Empire Yields</span>
                </h4>
                <YieldBadge yields={wonder.yields} game={isCiv6 ? 'civ6' : 'civ5'} compact={false} />
              </div>

              {/* In-Game Bonuses */}
              <div className="space-y-1.5">
                <h4 className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5">
                  <Scroll className="w-3 h-3 text-[var(--ks-kinpaku)]" />
                  <span>{isCiv6 ? 'Civilization VI In-Game Effects' : 'Civilization V In-Game Effects'}</span>
                </h4>
                <div className="space-y-1.5">
                  {wonder.bonuses.map((bonus, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] text-xs text-[var(--ks-text-warm)] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--ks-kinpaku)] text-sm leading-none mt-0.5">•</span>
                      <span>{bonus}</span>
                    </div>
                  ))}
                  {wonder.discoveryBonus && (
                    <div className="p-2.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule-patina)] text-xs text-[var(--ks-patina)] leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--ks-patina)] text-sm leading-none mt-0.5">★</span>
                      <div>
                        <span className="font-semibold text-[var(--ks-patina)]">Discovery Reward: </span>
                        <span>{wonder.discoveryBonus}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Spoken Quote Card with Audio Player */}
              <div className="p-3.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
                <p className="font-body italic text-xs sm:text-sm text-[var(--ks-text-warm)] leading-relaxed">
                  “{wonder.quote}”
                </p>
                <div className="pt-2 border-t border-[var(--ks-rule)] flex items-center justify-between">
                  <div className="text-[11px] text-[var(--ks-champagne)] font-medium truncate mr-2">
                    — {wonder.quoteAuthor}
                    {wonder.quoteWork && <span className="text-[var(--ks-text-muted)]">, {wonder.quoteWork}</span>}
                  </div>
                  <button
                    onClick={handleToggleNarration}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] transition-colors shrink-0 font-medium border ${
                      isNarrating
                        ? 'bg-[var(--ks-kinpaku)] text-[var(--ks-dark-ink)] border-[var(--ks-kinpaku)] shadow-xs'
                        : 'bg-transparent hover:bg-[var(--ks-graphite)] text-[var(--ks-kinpaku)] border-[var(--ks-rule-strong)]'
                    }`}
                    title={isNarrating ? 'Halt voice' : 'Listen to Civilopedia quote'}
                  >
                    {isNarrating ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                    <span>{isNarrating ? 'Halt' : 'Narrate'}</span>
                  </button>
                </div>
              </div>

              {/* Production Cost & Tech / Civic Prerequisites */}
              {(wonder.techRequirement ||
                wonder.civicRequirement ||
                wonder.productionCost ||
                wonder.placementRequirement ||
                wonder.terrainRequirement) && (
                <div className="p-3 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] grid grid-cols-2 gap-2 text-xs">
                  {wonder.techRequirement && (
                    <div>
                      <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5">
                        <img
                          src={getYieldIconUrl('science', isCiv6 ? 'civ6' : 'civ5')}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-3.5 h-3.5 object-contain shrink-0"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <span>Required Tech</span>
                      </span>
                      <span className="font-medium text-[var(--ks-champagne)]">{wonder.techRequirement}</span>
                    </div>
                  )}
                  {wonder.civicRequirement && (
                    <div>
                      <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5">
                        <img
                          src={getYieldIconUrl('culture', isCiv6 ? 'civ6' : 'civ5')}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-3.5 h-3.5 object-contain shrink-0"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <span>Required Civic</span>
                      </span>
                      <span className="font-medium text-[var(--ks-champagne)]">{wonder.civicRequirement}</span>
                    </div>
                  )}
                  {wonder.productionCost && (
                    <div>
                      <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5">
                        <img
                          src={getYieldIconUrl('production', isCiv6 ? 'civ6' : 'civ5')}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-3.5 h-3.5 object-contain shrink-0"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <span>Production Cost</span>
                      </span>
                      <span className="font-mono text-[var(--ks-kinpaku)] font-medium">
                        {wonder.productionCost} Hammers / Prod
                      </span>
                    </div>
                  )}
                  {(wonder.placementRequirement || wonder.terrainRequirement) && (
                    <div className="col-span-2 pt-1 border-t border-[var(--ks-rule)]">
                      <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] flex items-center gap-1.5 mb-1">
                        {isCiv6 && getYieldIconUrl('district', 'civ6') && (
                          <img
                            src={getYieldIconUrl('district', 'civ6')}
                            alt=""
                            referrerPolicy="no-referrer"
                            className="w-3.5 h-3.5 object-contain shrink-0"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        )}
                        <span>Placement & District Requirements</span>
                      </span>
                      <span className="text-[var(--ks-text-warm)] leading-relaxed">
                        {wonder.placementRequirement || wonder.terrainRequirement}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Historical Tab */
            <div className="space-y-4">
              <div className="p-4 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] text-xs text-[var(--ks-text-warm)] leading-relaxed space-y-3 font-body">
                <div className="font-mono-eyebrow text-[9px] text-[var(--ks-kinpaku)] font-semibold flex items-center gap-1">
                  <span>Civilopedia Historical Archive</span>
                </div>
                <p className="text-[var(--ks-champagne)] leading-relaxed">{wonder.civilopediaExcerpt}</p>
                <div className="pt-3 border-t border-[var(--ks-rule)]">
                  <h5 className="font-title text-sm font-medium text-[var(--ks-champagne)] mb-1">
                    Historical Context & Significance
                  </h5>
                  <p className="font-body text-[11px] text-[var(--ks-text-muted)] leading-relaxed">
                    {wonder.historicalContext}
                  </p>
                </div>
              </div>

              {/* Geographic Coordinates & Location Details */}
              <div className="p-3.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2 text-xs">
                <div className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)]">Geographic Location</div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-[var(--ks-text-muted)] block">Modern Country</span>
                    <span className="text-[var(--ks-champagne)] font-medium">{wonder.location.modernCountry}</span>
                  </div>
                  <div>
                    <span className="text-[var(--ks-text-muted)] block">Region</span>
                    <span className="text-[var(--ks-champagne)] font-medium">{wonder.location.modernRegion}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-between pt-1 border-t border-[var(--ks-rule)]">
                    <span className="text-[var(--ks-text-muted)]">Coordinates</span>
                    <span className="font-mono text-[var(--ks-kinpaku)] font-medium">
                      {wonder.location.lat.toFixed(4)}°, {wonder.location.lng.toFixed(4)}°
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Traversal Footer */}
        <div className="p-3 border-t border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] flex items-center justify-between shrink-0">
          <button
            onClick={onPrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-xs text-[var(--ks-champagne)] font-medium transition-colors border border-[var(--ks-rule)]"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>
          <button
            onClick={onRecenter}
            className="px-3 py-1.5 rounded-xs bg-transparent hover:bg-[var(--ks-graphite)] text-[var(--ks-kinpaku)] border border-[var(--ks-rule-strong)] text-xs font-medium transition-colors"
          >
            Center Map
          </button>
          <button
            onClick={onNext}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-xs text-[var(--ks-champagne)] font-medium transition-colors border border-[var(--ks-rule)]"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
