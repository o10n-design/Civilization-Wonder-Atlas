import { CivWonder, CivGame } from '../types/wonder';

const GAME_ORDER: CivGame[] = ['civ1', 'civ2', 'civ3', 'civ4', 'civ5', 'civ6', 'civ7'];

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
    .replace(/\bthe\s+temple\s+of\s+artemis\b/, 'templeofartemis')
    .replace(/\bstatue\s+of\s+zeus\b/, 'statueofzeus')
    .replace(/[^a-z0-9]/g, '');
}

export interface WonderCounterparts {
  editions: CivWonder[];
  editionsByGame: Partial<Record<CivGame, CivWonder>>;
  hasMultiple: boolean;
  games: CivGame[];
  // Backwards compatibility properties
  civ5Wonder: CivWonder | null;
  civ6Wonder: CivWonder | null;
  hasBoth: boolean;
}

/**
 * Finds all edition counterparts of a wonder across the 7 Civilization games
 */
export function getWonderCounterparts(
  currentWonder: CivWonder,
  allWonders: CivWonder[]
): WonderCounterparts {
  const currentNorm = normalizeWonderName(currentWonder.name);
  const currentGame = currentWonder.game || 'civ5';

  const editionsByGame: Partial<Record<CivGame, CivWonder>> = {
    [currentGame]: currentWonder
  };

  for (const candidate of allWonders) {
    if (candidate.id === currentWonder.id) continue;
    const candidateGame = candidate.game || 'civ5';

    // Must be of the same broad category (world wonder vs natural wonder)
    if (candidate.type !== currentWonder.type) continue;

    // Strict name matching based on normalized naming or alias
    const candidateNorm = normalizeWonderName(candidate.name);
    if (candidateNorm === currentNorm) {
      if (!editionsByGame[candidateGame]) {
        editionsByGame[candidateGame] = candidate;
      }
    }
  }

  // Sort editions chronologically by game release
  const editions: CivWonder[] = [];
  const games: CivGame[] = [];
  for (const g of GAME_ORDER) {
    const item = editionsByGame[g];
    if (item) {
      editions.push(item);
      games.push(g);
    }
  }

  const civ5Wonder = editionsByGame.civ5 || null;
  const civ6Wonder = editionsByGame.civ6 || null;

  return {
    editions,
    editionsByGame,
    hasMultiple: editions.length > 1,
    games,
    civ5Wonder,
    civ6Wonder,
    hasBoth: Boolean(civ5Wonder && civ6Wonder)
  };
}
