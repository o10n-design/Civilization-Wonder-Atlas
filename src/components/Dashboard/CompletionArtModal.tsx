import React, { useState, useEffect } from 'react';
import { X, Play, Square, ChevronLeft, ChevronRight, Sparkles, Compass } from 'lucide-react';
import { CivWonder } from '../../types/wonder';
import { YieldBadge } from '../Common/YieldBadge';
import { civAudio } from '../../utils/audio';
import { getCountryFlag } from '../../utils/countryFlags';

interface CompletionArtModalProps {
  wonder: CivWonder | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const CompletionArtModal: React.FC<CompletionArtModalProps> = ({
  wonder,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  const [isNarrating, setIsNarrating] = useState(false);

  useEffect(() => {
    setIsNarrating(false);
    civAudio.stopNarration();
  }, [wonder?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !wonder) return null;

  const isWorld = wonder.type === 'world_wonder';
  const artworkSrc = wonder.visualUrl || wonder.imageUrl;

  const handleToggleNarration = () => {
    if (isNarrating) {
      civAudio.stopNarration();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      const textToRead = `${wonder.quote} ... as written by ${wonder.quoteAuthor}.`;
      civAudio.narrateQuote(textToRead, () => {
        setIsNarrating(false);
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--ks-lacquer-deep)]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[var(--ks-raised-lacquer)] rounded-xs shadow-2xl border border-[var(--ks-rule-strong)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)]">
          <div className="flex items-center gap-2.5">
            {wonder.iconUrl && (
              <img
                src={wonder.iconUrl}
                alt={wonder.name}
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full border border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] p-0.5 object-cover"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.16em] font-bold px-2 py-0.5 rounded-xs border ${
                    isWorld
                      ? 'bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-500/40'
                      : 'bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-500/40'
                  }`}
                >
                  {wonder.game === 'civ6'
                    ? isWorld
                      ? 'Civ VI Wonder View'
                      : 'Civ VI Natural Wonder'
                    : isWorld
                    ? 'Civ V Wonder Completion Art'
                    : 'Civ V Natural Wonder Discovery'}
                </span>
                {wonder.era && wonder.era !== 'Timeless' && (
                  <span className="font-mono text-[10px] text-[var(--ks-text-muted)] font-medium">
                    · {wonder.era} Era
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              className="p-1.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
              title="Previous Wonder (←)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-1.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
              title="Next Wonder (→)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors ml-1"
              title="Close modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto clean-scrollbar p-5 space-y-4">
          {/* Main Completion Artwork Painting */}
          <div className="relative w-full rounded-xs overflow-hidden bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] aspect-[16/9] sm:aspect-[2/1] group flex items-center justify-center">
            {artworkSrc ? (
              <img
                src={artworkSrc}
                alt={`${wonder.name} Completion Art`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover sm:object-contain bg-[var(--ks-lacquer-deep)]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  if (wonder.imageUrl && !target.src.endsWith(wonder.imageUrl)) {
                    target.src = wonder.imageUrl;
                  }
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[var(--ks-text-muted)] p-8 text-center">
                <Sparkles className="w-12 h-12 text-[var(--ks-kinpaku)] mb-2" />
                <h3 className="font-headline text-xl font-light text-[var(--ks-champagne)]">{wonder.name}</h3>
                <p className="font-mono text-xs text-[var(--ks-text-faint)] mt-1">{wonder.yearApprox}</p>
              </div>
            )}

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[var(--ks-champagne)]">
              <span className="font-mono text-[10px] bg-[var(--ks-lacquer-deep)]/90 px-2.5 py-1 rounded-xs border border-[var(--ks-rule)]">
                {wonder.yearApprox}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] bg-[var(--ks-lacquer-deep)]/90 px-2.5 py-1 rounded-xs border border-[var(--ks-rule)]">
                <span className="text-xs leading-none" title={wonder.location.modernCountry}>
                  {getCountryFlag(wonder.location.modernCountry)}
                </span>
                <span>{wonder.location.modernRegion}, {wonder.location.modernCountry}</span>
              </span>
            </div>
          </div>

          {/* Wonder Title & Voice Quote Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl font-light text-[var(--ks-champagne)] tracking-wide">
                {wonder.name}
              </h2>
              <p className="font-body text-xs text-[var(--ks-text-muted)] mt-0.5 flex items-center gap-1.5">
                <span className="text-xs leading-none" title={wonder.location.modernCountry}>
                  {getCountryFlag(wonder.location.modernCountry)}
                </span>
                <span>{wonder.location.modernCountry} · {wonder.location.lat.toFixed(4)}°, {wonder.location.lng.toFixed(4)}°</span>
              </p>
            </div>

            <button
              onClick={handleToggleNarration}
              className={`flex items-center gap-2 px-4 py-2 rounded-xs text-xs font-medium uppercase tracking-wider transition-all border shrink-0 ${
                isNarrating
                  ? 'bg-[var(--ks-kinpaku-rich)] text-[var(--ks-dark-ink)] border-[var(--ks-kinpaku-rich)] animate-pulse'
                  : 'bg-[var(--ks-kinpaku)] text-[var(--ks-dark-ink)] border-[var(--ks-kinpaku)] hover:bg-[var(--ks-kinpaku-pale)]'
              }`}
            >
              {isNarrating ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isNarrating ? 'Stop Voice' : 'Civ V Voice Narration'}</span>
            </button>
          </div>

          {/* Authentic In-Game Quote */}
          <div className="p-4 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] text-[var(--ks-text-warm)] space-y-2">
            <p className="font-body italic text-sm sm:text-base leading-relaxed text-[var(--ks-champagne)]">
              “{wonder.quote}”
            </p>
            <div className="flex items-center justify-between text-xs text-[var(--ks-kinpaku)] font-medium pt-2 border-t border-[var(--ks-rule)]">
              <span>— {wonder.quoteAuthor}</span>
              {wonder.quoteWork && <span className="font-body italic text-[var(--ks-text-muted)] font-normal">{wonder.quoteWork}</span>}
            </div>
          </div>

          {/* Yields and In-Game Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
              <h4 className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] font-semibold">
                Strategic Empire Yields
              </h4>
              <YieldBadge yields={wonder.yields} game={wonder.game || 'civ5'} compact={false} />
            </div>

            <div className="p-4 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
              <h4 className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] font-semibold">
                {wonder.game === 'civ6' ? 'Civilization VI' : 'Civilization V'} In-Game Effects
              </h4>
              <ul className="space-y-1.5 text-xs text-[var(--ks-text-warm)] font-body">
                {wonder.bonuses.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[var(--ks-kinpaku)] font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
                {wonder.discoveryBonus && (
                  <li className="flex items-start gap-1.5 text-[var(--ks-patina)] font-medium">
                    <span className="text-[var(--ks-patina)] font-bold">★</span>
                    <span>Discovery: {wonder.discoveryBonus}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Civilopedia Excerpt */}
          <div className="p-4 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] text-xs text-[var(--ks-text-warm)] leading-relaxed font-body space-y-2">
            <div className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] font-semibold">
              Civilopedia Historical Lore
            </div>
            <p className="text-[var(--ks-champagne)] text-[13px] leading-relaxed">
              {wonder.civilopediaExcerpt}
            </p>
            <p className="text-[11px] text-[var(--ks-text-muted)] pt-2 border-t border-[var(--ks-rule)]">
              {wonder.historicalContext}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] flex items-center justify-between text-xs text-[var(--ks-text-muted)] font-medium">
          <div className="flex items-center gap-1 font-mono text-[10px]">
            <kbd className="px-1.5 py-0.5 rounded-xs bg-[var(--ks-graphite)] border border-[var(--ks-rule)] text-[var(--ks-champagne)]">←</kbd>
            <kbd className="px-1.5 py-0.5 rounded-xs bg-[var(--ks-graphite)] border border-[var(--ks-rule)] text-[var(--ks-champagne)]">→</kbd>
            <span className="ml-1 text-[var(--ks-text-faint)]">Navigate Wonders</span>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border border-[var(--ks-rule)] font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
