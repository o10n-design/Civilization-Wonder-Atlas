import { CivWonder } from '../types/wonder';

/**
 * Normalizes wonder name for edition matching
 */
function normalizeWonderName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^the\s+/, '')
    .replace(/\bmt\.?\b/, 'mount')
    .replace(/\bpalace\b/, 'city') // Forbidden Palace <-> Forbidden City
    .replace(/\bof rhodes\b/, '')  // Colossus of Rhodes <-> Colossus
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Calculates geographic distance in kilometers (approximate Haversine)
 */
function getGeoDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371 * c;
}

export interface WonderCounterparts {
  civ5Wonder: CivWonder | null;
  civ6Wonder: CivWonder | null;
  hasBoth: boolean;
}

/**
 * Finds if a wonder exists in both Civilization V and Civilization VI
 */
export function getWonderCounterparts(
  currentWonder: CivWonder,
  allWonders: CivWonder[]
): WonderCounterparts {
  const currentNorm = normalizeWonderName(currentWonder.name);
  const currentGame = currentWonder.game || 'civ5';

  let civ5Wonder: CivWonder | null = currentGame === 'civ5' ? currentWonder : null;
  let civ6Wonder: CivWonder | null = currentGame === 'civ6' ? currentWonder : null;

  for (const candidate of allWonders) {
    if (candidate.id === currentWonder.id) continue;
    const candidateGame = candidate.game || 'civ5';

    // Same name check or geographic proximity (within 35 km) with same wonder type
    const candidateNorm = normalizeWonderName(candidate.name);
    const isNameMatch =
      candidateNorm === currentNorm ||
      candidateNorm.includes(currentNorm) ||
      currentNorm.includes(candidateNorm);

    const isDistMatch =
      candidate.type === currentWonder.type &&
      getGeoDistanceKm(
        candidate.location.lat,
        candidate.location.lng,
        currentWonder.location.lat,
        currentWonder.location.lng
      ) < 35;

    if (isNameMatch || isDistMatch) {
      if (candidateGame === 'civ5' && !civ5Wonder) {
        civ5Wonder = candidate;
      } else if (candidateGame === 'civ6' && !civ6Wonder) {
        civ6Wonder = candidate;
      }
    }
  }

  return {
    civ5Wonder,
    civ6Wonder,
    hasBoth: Boolean(civ5Wonder && civ6Wonder)
  };
}
