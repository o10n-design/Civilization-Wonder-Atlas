import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, X, SlidersHorizontal } from 'lucide-react';
import { CivWonder, CivEra, GameFilter } from '../../types/wonder';
import { YieldBadge } from '../Common/YieldBadge';
import { getCountryFlag } from '../../utils/countryFlags';

interface LeftPanelProps {
  wonders: CivWonder[];
  selectedWonder: CivWonder | null;
  onSelectWonder: (wonder: CivWonder) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
  gameFilter: GameFilter;
  onSelectGameFilter: (filter: GameFilter) => void;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  wonders,
  selectedWonder,
  onSelectWonder,
  isOpen,
  onToggleOpen,
  gameFilter,
  onSelectGameFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'world_wonder' | 'natural_wonder'>('all');
  const [eraFilter, setEraFilter] = useState<string>('all');
  const [yieldFilter, setYieldFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Available Eras
  const eras: CivEra[] = [
    'Ancient',
    'Classical',
    'Medieval',
    'Renaissance',
    'Industrial',
    'Modern',
    'Atomic',
    'Information'
  ];

  // Filtered wonders
  const filteredWonders = useMemo(() => {
    return wonders.filter((w) => {
      // Game filter
      if (gameFilter !== 'all') {
        const itemGame = w.game || 'civ5';
        if (itemGame !== gameFilter) return false;
      }

      // Category filter
      if (categoryFilter !== 'all' && w.type !== categoryFilter) {
        return false;
      }

      // Era filter
      if (eraFilter !== 'all' && w.era !== eraFilter) {
        return false;
      }

      // Yield filter
      if (yieldFilter !== 'all') {
        const y = w.yields;
        if (yieldFilter === 'science' && (!y.science || y.science <= 0)) return false;
        if (yieldFilter === 'culture' && (!y.culture || y.culture <= 0)) return false;
        if (yieldFilter === 'faith' && (!y.faith || y.faith <= 0)) return false;
        if (yieldFilter === 'gold' && (!y.gold || y.gold <= 0)) return false;
        if (yieldFilter === 'happiness' && (!y.happiness || y.happiness <= 0)) return false;
        if (yieldFilter === 'amenity' && (!y.amenity || y.amenity <= 0)) return false;
        if (yieldFilter === 'housing' && (!y.housing || y.housing <= 0)) return false;
        if (yieldFilter === 'appeal' && (!y.appeal || y.appeal <= 0)) return false;
        if (yieldFilter === 'diplomacy' && (!y.diplomacy || y.diplomacy <= 0)) return false;
        if (yieldFilter === 'production' && (!y.production || y.production <= 0)) return false;
        if (yieldFilter === 'food' && (!y.food || y.food <= 0)) return false;
        if (yieldFilter === 'tourism' && (!y.tourism || y.tourism <= 0)) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const clean = (s: string) =>
          s
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[-_]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        const query = clean(searchQuery);
        const queryAlt = query.replace(/fyord/g, 'fjord');

        const testMatch = (target?: string | null) => {
          if (!target) return false;
          const cleaned = clean(target);
          return (
            cleaned.includes(query) ||
            cleaned.includes(queryAlt) ||
            cleaned.replace(/fyord/g, 'fjord').includes(query) ||
            cleaned.replace(/fjord/g, 'fyord').includes(query)
          );
        };

        const matchesName = testMatch(w.name) || w.id.toLowerCase().includes(query.replace(/\s+/g, '-'));
        const matchesCountry = testMatch(w.location.modernCountry);
        const matchesRegion = testMatch(w.location.modernRegion);
        const matchesTech = testMatch(w.techRequirement);
        const matchesCivic = testMatch(w.civicRequirement);
        const matchesPlacement = testMatch(w.placementRequirement);
        const matchesBonus = w.bonuses.some((b) => testMatch(b));
        const matchesAuthor = testMatch(w.quoteAuthor);
        return (
          matchesName ||
          matchesCountry ||
          matchesRegion ||
          matchesTech ||
          matchesCivic ||
          matchesPlacement ||
          matchesBonus ||
          matchesAuthor
        );
      }

      return true;
    });
  }, [wonders, gameFilter, categoryFilter, eraFilter, yieldFilter, searchQuery]);

  // Counts for the current game filter context
  const currentTotal = wonders.filter((w) => gameFilter === 'all' || (w.game || 'civ5') === gameFilter).length;
  const worldCount = wonders.filter(
    (w) => w.type === 'world_wonder' && (gameFilter === 'all' || (w.game || 'civ5') === gameFilter)
  ).length;
  const naturalCount = wonders.filter(
    (w) => w.type === 'natural_wonder' && (gameFilter === 'all' || (w.game || 'civ5') === gameFilter)
  ).length;

  return (
    <>
      <aside
        className={`fixed left-3 sm:left-5 top-16 bottom-4 z-30 flex transition-all duration-300 ease-in-out pointer-events-auto ${
          isOpen ? 'w-80 sm:w-88 translate-x-0 opacity-100' : 'w-0 -translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative w-full h-full bg-[var(--ks-raised-lacquer)] rounded-xs flex flex-col overflow-hidden shadow-2xl border border-[var(--ks-rule)]">
          {/* Panel Header */}
          <div className="px-4 py-3 border-b border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/aistudio/civ-atlas_e8ca6186.png"
                  alt=""
                  className="w-5 h-5 object-contain shrink-0"
                />
                <span className="font-display text-lg text-[var(--ks-champagne)] font-light tracking-wide uppercase">
                  Civilopedia Catalog
                </span>
                <span className="font-mono text-[10px] text-[var(--ks-text-muted)] font-medium">
                  [{filteredWonders.length}/{currentTotal}]
                </span>
              </div>
              <button
                onClick={onToggleOpen}
                className="p-1 rounded-xs text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)] hover:bg-[var(--ks-graphite)] transition-colors"
                title="Collapse Catalog"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Game Filter Switcher Inside Catalog */}
            <div className="mt-2.5 grid grid-cols-3 gap-1 bg-[var(--ks-graphite)] p-0.5 rounded-xs border border-[var(--ks-rule)] text-xs">
              <button
                onClick={() => onSelectGameFilter('all')}
                className={`py-1 text-[11px] font-medium rounded-xs transition-all ${
                  gameFilter === 'all'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-champagne)] shadow-xs font-semibold'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                All Series
              </button>
              <button
                onClick={() => onSelectGameFilter('civ6')}
                className={`py-1 text-[11px] font-medium rounded-xs transition-all ${
                  gameFilter === 'civ6'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-kinpaku)] shadow-xs font-semibold'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                Civ VI
              </button>
              <button
                onClick={() => onSelectGameFilter('civ5')}
                className={`py-1 text-[11px] font-medium rounded-xs transition-all ${
                  gameFilter === 'civ5'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-kinpaku)] shadow-xs font-semibold'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                Civ V
              </button>
            </div>

            {/* Impeccable Input Field */}
            <div className="mt-2 relative">
              <Search className="w-3.5 h-3.5 text-[var(--ks-text-faint)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog, civics, techs, era..."
                className="w-full bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] rounded-xs pl-8 pr-7 py-1.5 text-xs text-[var(--ks-champagne)] placeholder-[var(--ks-text-faint)] focus:outline-none focus:border-[var(--ks-kinpaku)] transition-all font-body"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category Switcher */}
            <div className="mt-2 grid grid-cols-3 gap-1 bg-[var(--ks-graphite)] p-0.5 rounded-xs border border-[var(--ks-rule)]">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`py-1 text-xs font-medium rounded-xs transition-all whitespace-nowrap ${
                  categoryFilter === 'all'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-champagne)] shadow-xs'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                All ({currentTotal})
              </button>
              <button
                onClick={() => setCategoryFilter('world_wonder')}
                className={`py-1 text-xs font-medium rounded-xs transition-all whitespace-nowrap ${
                  categoryFilter === 'world_wonder'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-kinpaku)] shadow-xs font-semibold'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                World ({worldCount})
              </button>
              <button
                onClick={() => setCategoryFilter('natural_wonder')}
                className={`py-1 text-xs font-medium rounded-xs transition-all whitespace-nowrap ${
                  categoryFilter === 'natural_wonder'
                    ? 'bg-[var(--ks-graphite-pill)] text-[var(--ks-patina)] shadow-xs font-semibold'
                    : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-champagne)]'
                }`}
              >
                Natural ({naturalCount})
              </button>
            </div>

            {/* Filter Toggle and Reset */}
            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 text-[11px] text-[var(--ks-kinpaku)] hover:text-[var(--ks-kinpaku-pale)] font-medium transition-colors"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span className="font-mono-eyebrow text-[9px]">
                  {showFilters ? 'Hide Filters' : 'Filter Era & Yield'}
                </span>
              </button>
              {(eraFilter !== 'all' || yieldFilter !== 'all') && (
                <button
                  onClick={() => {
                    setEraFilter('all');
                    setYieldFilter('all');
                  }}
                  className="font-mono text-[9px] uppercase tracking-wider text-[var(--ks-text-muted)] hover:text-[var(--ks-kinpaku)] transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {showFilters && (
              <div className="mt-2.5 pt-2 border-t border-[var(--ks-rule)] space-y-2 text-xs animate-in fade-in duration-100">
                <div>
                  <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] block mb-1">
                    Historical Era
                  </span>
                  <select
                    value={eraFilter}
                    onChange={(e) => setEraFilter(e.target.value)}
                    className="w-full bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] rounded-xs px-2.5 py-1.5 text-xs text-[var(--ks-champagne)] focus:outline-none focus:border-[var(--ks-kinpaku)]"
                  >
                    <option value="all">All Eras (Ancient to Information)</option>
                    {eras.map((era) => (
                      <option key={era} value={era}>
                        {era} Era
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="font-mono-eyebrow text-[9px] text-[var(--ks-text-muted)] block mb-1">
                    Yield Focus
                  </span>
                  <select
                    value={yieldFilter}
                    onChange={(e) => setYieldFilter(e.target.value)}
                    className="w-full bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] rounded-xs px-2.5 py-1.5 text-xs text-[var(--ks-champagne)] focus:outline-none focus:border-[var(--ks-kinpaku)]"
                  >
                    <option value="all">All Strategic Yields</option>
                    <option value="science">Science</option>
                    <option value="culture">Culture</option>
                    <option value="faith">Faith</option>
                    <option value="gold">Gold</option>
                    <option value="amenity">Amenities (Civ VI)</option>
                    <option value="housing">Housing (Civ VI)</option>
                    <option value="production">Production</option>
                    <option value="food">Food</option>
                    <option value="tourism">Tourism</option>
                    <option value="diplomacy">Diplomatic Favor (Civ VI)</option>
                    <option value="appeal">Appeal (Civ VI)</option>
                    <option value="happiness">Happiness (Civ V)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Wonder Cards List */}
          <div className="flex-1 overflow-y-auto clean-scrollbar p-2.5 space-y-2">
            {filteredWonders.length === 0 ? (
              <div className="p-8 text-center text-[var(--ks-text-muted)]">
                <p className="font-display text-lg text-[var(--ks-champagne)] font-light">No Wonders Found</p>
                <p className="text-xs text-[var(--ks-text-faint)] mt-1">Try clearing search terms or era filters.</p>
              </div>
            ) : (
              filteredWonders.map((wonder) => {
                const isSelected = selectedWonder?.id === wonder.id;
                const isWorld = wonder.type === 'world_wonder';
                const isCiv6 = wonder.game === 'civ6';

                return (
                  <div
                    key={wonder.id}
                    onClick={() => onSelectWonder(wonder)}
                    className={`p-2.5 rounded-xs border cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? isWorld
                          ? 'bg-[var(--ks-graphite)] border-[var(--ks-rule-strong)] shadow-sm'
                          : 'bg-[var(--ks-graphite)] border-[var(--ks-rule-patina)] shadow-sm'
                        : 'bg-[var(--ks-lacquer)] border-[var(--ks-rule)] hover:border-[var(--ks-rule-strong)] hover:bg-[var(--ks-graphite)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`font-mono text-[8.5px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-xs border ${
                              isWorld
                                ? 'bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-500/40'
                                : 'bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-500/40'
                            }`}
                          >
                            {isWorld ? 'WORLD' : 'NATURAL'}
                          </span>
                          <span
                            className={`font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded-xs border uppercase tracking-wider ${
                              isCiv6
                                ? 'bg-orange-100 text-orange-950 border-orange-300 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-500/40'
                                : 'bg-blue-100 text-blue-950 border-blue-300 dark:bg-blue-950/70 dark:text-blue-200 dark:border-blue-500/40'
                            }`}
                          >
                            {isCiv6 ? 'Civ VI' : 'Civ V'}
                          </span>
                          {wonder.era && wonder.era !== 'Timeless' && (
                            <>
                              <span className="text-[var(--ks-rule)]">·</span>
                              <span className="font-mono text-[9.5px] text-[var(--ks-text-muted)] font-medium truncate">
                                {wonder.era}
                              </span>
                            </>
                          )}
                        </div>
                        <h3
                          className={`font-display text-[21px] leading-snug truncate mt-0.5 ${
                            isSelected
                              ? 'text-[var(--ks-champagne)] font-semibold'
                              : 'text-[var(--ks-text-warm)] font-semibold group-hover:text-[var(--ks-champagne)]'
                          }`}
                        >
                          {wonder.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-[var(--ks-text-muted)] mt-0.5 font-body">
                          <span className="shrink-0 text-xs leading-none" title={wonder.location.modernCountry}>
                            {getCountryFlag(wonder.location.modernCountry)}
                          </span>
                          <span className="truncate">{wonder.location.modernCountry}</span>
                        </div>
                        {(wonder.civicRequirement || wonder.techRequirement) && (
                          <div className="mt-1 font-mono text-[9px] text-[var(--ks-text-faint)] truncate">
                            {wonder.civicRequirement ? `Civic: ${wonder.civicRequirement}` : `Tech: ${wonder.techRequirement}`}
                          </div>
                        )}
                      </div>

                      {/* Wonder Icon Thumbnail */}
                      {wonder.iconUrl ? (
                        <div className="relative w-8 h-8 shrink-0">
                          <img
                            src={wonder.iconUrl}
                            alt={wonder.name}
                            referrerPolicy="no-referrer"
                            className="w-8 h-8 rounded-full object-cover border border-[var(--ks-rule)] bg-[var(--ks-lacquer-deep)] p-0.5"
                            onError={(e) => {
                              const target = e.target as HTMLElement;
                              target.onerror = null;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 border ${
                            isWorld
                              ? 'bg-[var(--ks-lacquer-deep)] border-[var(--ks-rule-strong)] text-[var(--ks-kinpaku)]'
                              : 'bg-[var(--ks-lacquer-deep)] border-[var(--ks-rule-patina)] text-[var(--ks-patina)]'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold">{isWorld ? 'W' : 'N'}</span>
                        </div>
                      )}
                    </div>

                    {/* Quick Yield Badges preview */}
                    <div className="mt-2 pt-1.5 border-t border-[var(--ks-rule)]">
                      <YieldBadge yields={wonder.yields} game={isCiv6 ? 'civ6' : 'civ5'} compact={true} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
