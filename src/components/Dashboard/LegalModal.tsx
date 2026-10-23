import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, ExternalLink, BookOpen, Globe } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--ks-lacquer-deep)]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--ks-raised-lacquer)] rounded-xs shadow-2xl border border-[var(--ks-rule-strong)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xs bg-[var(--ks-graphite)] border border-[var(--ks-rule-strong)] flex items-center justify-center text-[var(--ks-kinpaku)]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-headline text-lg sm:text-xl font-light text-[var(--ks-champagne)]">
                Legal & Source References
              </h2>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--ks-text-muted)]">
                Attribution, Trademarks & Licensing Disclosures
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto clean-scrollbar p-5 space-y-4 text-xs sm:text-sm text-[var(--ks-text-warm)] font-body leading-relaxed">
          {/* Section 1: Trademark & Publisher Attribution */}
          <div className="p-3.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
            <div className="flex items-center gap-2 text-[var(--ks-kinpaku)] font-medium text-xs font-mono tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Trademark & Publisher Notice</span>
            </div>
            <p className="text-xs text-[var(--ks-text-muted)] leading-normal">
              <strong>Sid Meier&apos;s Civilization</strong>, <strong>Civilization V</strong>,{' '}
              <strong>Civilization VI</strong>, <strong>Civ</strong>, and all associated names, logos,
              wonder renderings, audio narrations, and character imagery are registered trademarks or
              copyrights of <strong>Take-Two Interactive Software, Inc.</strong>,{' '}
              <strong>2K Games</strong>, and <strong>Firaxis Games</strong>.
            </p>
            <p className="text-xs text-[var(--ks-text-faint)] leading-normal">
              This web application is an independent, non-commercial fan-created interactive atlas and
              educational resource. It is not produced, endorsed, supported, or affiliated with Firaxis Games,
              2K Games, or Take-Two Interactive Software.
            </p>
          </div>

          {/* Section 2: Fandom Civilization Community Wiki Attribution */}
          <div className="p-3.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
            <div className="flex items-center gap-2 text-[var(--ks-patina)] font-medium text-xs font-mono tracking-wider uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Community Wiki & Content Attribution</span>
            </div>
            <p className="text-xs text-[var(--ks-text-muted)] leading-normal">
              Wonder specifications, game yield formulas, tech/civic trees, and Civilopedia historical
              excerpts are compiled with reference to the community at the{' '}
              <a
                href="https://civilization.fandom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ks-champagne)] underline hover:text-[var(--ks-kinpaku)] inline-flex items-center gap-1"
              >
                Civilization Wiki on Fandom
                <ExternalLink className="w-3 h-3 inline" />
              </a>
              .
            </p>
            <p className="text-xs text-[var(--ks-text-faint)] leading-normal">
              Content from the Civilization Wiki is released and attributed under the{' '}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ks-champagne)] underline hover:text-[var(--ks-kinpaku)]"
              >
                Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0)
              </a>
              .
            </p>
          </div>

          {/* Section 3: Cartography & Geography */}
          <div className="p-3.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] space-y-2">
            <div className="flex items-center gap-2 text-[var(--ks-champagne)] font-medium text-xs font-mono tracking-wider uppercase">
              <Globe className="w-4 h-4" />
              <span>Cartography & Geographic Data</span>
            </div>
            <ul className="text-xs text-[var(--ks-text-muted)] space-y-1.5 list-disc list-inside">
              <li>
                Map tiles and geographic coordinates &copy;{' '}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ks-champagne)] underline hover:text-[var(--ks-kinpaku)]"
                >
                  OpenStreetMap contributors
                </a>
                .
              </li>
              <li>
                Cartographic base tiles styled and hosted via CARTO basemaps &amp; Humanitarian OpenStreetMap Team (HOT).
              </li>
              <li>
                Elevation contour data powered by OpenTopoMap (CC-BY-SA).
              </li>
            </ul>
          </div>

          {/* Section 4: Fair Use Policy */}
          <div className="text-[11px] text-[var(--ks-text-faint)] px-1 leading-normal">
            This project is distributed strictly free of charge for non-commercial educational, scholarly,
            and geographic appreciation under fair use provisions of international copyright laws.
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] flex items-center justify-between">
          <span className="font-mono text-[10px] text-[var(--ks-text-faint)]">
            Civilization Atlas · Archival Edition
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xs bg-[var(--ks-graphite)] hover:bg-[var(--ks-graphite-2)] text-[var(--ks-champagne)] border border-[var(--ks-rule)] text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
