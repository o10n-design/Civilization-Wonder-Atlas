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
    .replace(/\bmount\b/, '')
    .replace(/\bpalace\b/, 'city') // Forbidden Palace <-> Forbidden City
    .replace(/\bof rhodes\b/, '')  // Colossus of Rhodes <-> Colossus
    .replace(/\bmuseum\b/, '')     // Hermitage Museum <-> Hermitage
    .replace(/\bgeyser\b/, '')     // Old Faithful Geyser <-> Old Faithful
    .replace(/[^a-z0-9]/g, '');
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

    // Must be of the same category (world wonder vs natural wonder)
    if (candidate.type !== currentWonder.type) continue;

    // Strict name matching based on normalized naming or alias
    const candidateNorm = normalizeWonderName(candidate.name);
    const isNameMatch = candidateNorm === currentNorm;

    if (isNameMatch) {
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
