export type WonderType = 'world_wonder' | 'natural_wonder';

export type CivEra =
  | 'Ancient'
  | 'Classical'
  | 'Medieval'
  | 'Renaissance'
  | 'Industrial'
  | 'Modern'
  | 'Atomic'
  | 'Information'
  | 'Timeless';

export type YieldType =
  | 'science'
  | 'culture'
  | 'faith'
  | 'gold'
  | 'happiness'
  | 'production'
  | 'food'
  | 'tourism'
  | 'great_person'
  | 'amenity'
  | 'housing'
  | 'appeal'
  | 'diplomacy';

export interface WonderYields {
  science?: number;
  culture?: number;
  faith?: number;
  gold?: number;
  happiness?: number;
  production?: number;
  food?: number;
  tourism?: number;
  amenity?: number;
  housing?: number;
  appeal?: number;
  diplomacy?: number;
  greatPersonPoints?: string;
}

export type CivGame = 'civ5' | 'civ6';
export type GameFilter = 'all' | 'civ5' | 'civ6';

export interface CivWonder {
  id: string;
  name: string;
  game?: CivGame; // Defaults to 'civ5' if omitted
  type: WonderType;
  era: CivEra;
  yearApprox: string;
  location: {
    lat: number;
    lng: number;
    modernCountry: string;
    modernRegion: string;
  };
  techRequirement?: string | null;
  civicRequirement?: string | null; // In Civ VI, wonders can require Civics
  productionCost?: number | null; // Production / Hammers cost
  placementRequirement?: string | null; // Specific placement rules (e.g. adjacent to Industrial Zone, along river)
  yields: WonderYields;
  bonuses: string[];
  quote: string;
  quoteAuthor: string;
  quoteWork?: string | null;
  civilopediaExcerpt: string;
  historicalContext: string;
  terrainRequirement?: string | null;
  imageUrl?: string | null;
  iconUrl?: string | null;
  visualUrl?: string | null;
  discoveryBonus?: string | null; // For Natural Wonders (e.g. +1 Happiness, Era Score, permanent promotions)
  hexColor?: string | null;
}

export type MapTileStyle = 'lacquer' | 'standard' | 'humanitarian' | 'topographic' | 'parchment';

export type AppTheme = 'dark' | 'light';

