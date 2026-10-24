import React from 'react';
import { WonderYields, CivGame } from '../../types/wonder';
import { getYieldIconUrl } from '../../data/yieldIcons';

interface YieldBadgeProps {
  yields: WonderYields;
  game?: CivGame;
  compact?: boolean;
}

export const YieldBadge: React.FC<YieldBadgeProps> = ({ yields, game = 'civ5', compact = false }) => {
  const yieldEntries = [
    { key: 'science', label: 'Science', value: yields.science, color: 'text-sky-600 dark:text-sky-300 border-sky-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🧪' },
    { key: 'culture', label: 'Culture', value: yields.culture, color: 'text-purple-600 dark:text-purple-300 border-purple-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🎭' },
    { key: 'faith', label: 'Faith', value: yields.faith, color: 'text-indigo-600 dark:text-indigo-300 border-indigo-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🕊️' },
    { key: 'gold', label: 'Gold', value: yields.gold, color: 'text-[var(--ks-kinpaku)] border-[var(--ks-rule-strong)] bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🪙' },
    { key: 'happiness', label: 'Happiness', value: yields.happiness, color: 'text-amber-600 dark:text-amber-300 border-amber-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '☀️' },
    { key: 'amenity', label: 'Amenities', value: yields.amenity, color: 'text-amber-500 dark:text-amber-300 border-amber-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '✨' },
    { key: 'production', label: 'Production', value: yields.production, color: 'text-orange-600 dark:text-orange-300 border-orange-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '⚒️' },
    { key: 'food', label: 'Food', value: yields.food, color: 'text-emerald-600 dark:text-emerald-300 border-emerald-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🌾' },
    { key: 'housing', label: 'Housing', value: yields.housing, color: 'text-cyan-600 dark:text-cyan-300 border-cyan-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🏘️' },
    { key: 'appeal', label: 'Appeal', value: yields.appeal, color: 'text-teal-600 dark:text-teal-300 border-teal-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🤍' },
    { key: 'diplomacy', label: 'Diplomatic Favor', value: yields.diplomacy, color: 'text-blue-600 dark:text-blue-300 border-blue-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🕊️' },
    { key: 'tourism', label: 'Tourism', value: yields.tourism, color: 'text-rose-600 dark:text-rose-300 border-rose-500/30 bg-[var(--ks-lacquer-deep)]', fallbackIcon: '🧳' }
  ].filter((item) => item.value !== undefined && item.value > 0);

  // Determine contextual icon & label for special points (Governor Titles, Envoys, Trade Routes, Engineer, Great Person)
  let specialPointsIcon = getYieldIconUrl('great_person', game);
  let specialPointsLabel = 'Great Person';

  if (yields.greatPersonPoints) {
    const lower = yields.greatPersonPoints.toLowerCase();
    if (lower.includes('governor')) {
      specialPointsIcon = getYieldIconUrl('governor', 'civ6');
      specialPointsLabel = 'Governor Title';
    } else if (lower.includes('envoy')) {
      specialPointsIcon = getYieldIconUrl('envoy', 'civ6');
      specialPointsLabel = 'Envoy';
    } else if (lower.includes('trade route')) {
      specialPointsIcon = getYieldIconUrl('trade_route', 'civ6');
      specialPointsLabel = 'Trade Route';
    } else if (lower.includes('engineer')) {
      specialPointsIcon = getYieldIconUrl('engineer', game);
      specialPointsLabel = 'Great Engineer';
    }
  }

  if (yieldEntries.length === 0 && !yields.greatPersonPoints) {
    return null;
  }

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        {yieldEntries.map((item) => {
          const iconUrl = getYieldIconUrl(item.key, game);
          return (
            <span
              key={item.key}
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs border text-[10px] font-mono tabular-nums ${item.color}`}
              title={`+${item.value} ${item.label}`}
            >
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-3.5 h-3.5 object-contain shrink-0 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <span>{item.fallbackIcon}</span>
              )}
              <span>+{item.value}</span>
            </span>
          );
        })}
        {yields.greatPersonPoints && (
          <span
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs border border-[var(--ks-rule-strong)] bg-[var(--ks-lacquer-deep)] text-[10px] font-mono text-[var(--ks-kinpaku)]"
            title={`${specialPointsLabel}: ${yields.greatPersonPoints}`}
          >
            {specialPointsIcon ? (
              <img
                src={specialPointsIcon}
                alt=""
                referrerPolicy="no-referrer"
                className="w-3.5 h-3.5 object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <span>⭐</span>
            )}
            <span className="truncate max-w-[140px]">{yields.greatPersonPoints}</span>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {yieldEntries.map((item) => {
        const iconUrl = getYieldIconUrl(item.key, game);
        return (
          <div
            key={item.key}
            className={`flex items-center justify-between p-2 rounded-xs border ${item.color}`}
          >
            <div className="flex items-center gap-2 min-w-0">
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-4 h-4 object-contain shrink-0 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <span className="text-xs">{item.fallbackIcon}</span>
              )}
              <span className="text-xs text-[var(--ks-text-warm)] font-medium truncate">{item.label}</span>
            </div>
            <span className="text-xs font-mono font-bold tabular-nums shrink-0 ml-1">+{item.value}</span>
          </div>
        );
      })}
      {yields.greatPersonPoints && (
        <div className="col-span-2 sm:col-span-3 flex items-center justify-between p-2 rounded-xs border border-[var(--ks-rule-strong)] bg-[var(--ks-lacquer-deep)] text-[var(--ks-kinpaku)]">
          <div className="flex items-center gap-2">
            {specialPointsIcon ? (
              <img
                src={specialPointsIcon}
                alt=""
                referrerPolicy="no-referrer"
                className="w-4 h-4 object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <span className="text-xs">⭐</span>
            )}
            <span className="text-xs text-[var(--ks-text-warm)] font-medium">{specialPointsLabel}</span>
          </div>
          <span className="text-xs font-mono font-medium">{yields.greatPersonPoints}</span>
        </div>
      )}
    </div>
  );
};

