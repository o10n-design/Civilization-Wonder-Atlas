/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CivSeriesGame = 'civ1' | 'civ2' | 'civ3' | 'civ4' | 'civ5' | 'civ6' | 'civ7';

export interface CivSeriesLogoInfo {
  id: CivSeriesGame;
  title: string;
  romanNumeral: string;
  lightSvgUrl: string;
  darkSvgUrl: string;
  illustrationPngUrl: string;
}

export const CIV_SERIES_LOGOS: Record<CivSeriesGame, CivSeriesLogoInfo> = {
  civ1: {
    id: 'civ1',
    title: 'Civilization I',
    romanNumeral: 'I',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ1_c36f0431.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ1_6215cec3.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ1_3044a6ca.png',
  },
  civ2: {
    id: 'civ2',
    title: 'Civilization II',
    romanNumeral: 'II',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ2_78f7cbc6.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ2_26a6bb3c.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ2_a8fff0ff.png',
  },
  civ3: {
    id: 'civ3',
    title: 'Civilization III',
    romanNumeral: 'III',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ3_39f88eaa.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ3_4ff968e6.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ3_431cdcd5.png',
  },
  civ4: {
    id: 'civ4',
    title: 'Civilization IV',
    romanNumeral: 'IV',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ4_246cef8c.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ4_0d723e51.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ4_9daa5834.png',
  },
  civ5: {
    id: 'civ5',
    title: 'Civilization V',
    romanNumeral: 'V',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ5_806e8e1c.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ5_1ce4e589.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ5_78889cc5.png',
  },
  civ6: {
    id: 'civ6',
    title: 'Civilization VI',
    romanNumeral: 'VI',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ6_1d7a67f7.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ6_d7dd889d.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ6_a7dd272f.png',
  },
  civ7: {
    id: 'civ7',
    title: 'Civilization VII',
    romanNumeral: 'VII',
    lightSvgUrl: '/assets/aistudio/AtlasCivLogoLight_Civ7_0906af52.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_Civ7_6d724c3c.svg',
    illustrationPngUrl: '/assets/aistudio/AtlasCivLogoIllustration_Civ7_a2e818ab.png',
  },
};

export const WONDER_TYPE_LOGOS = {
  world_wonder: {
    title: 'World Wonder',
    abbr: 'WW',
    lightSvgUrl: '/assets/civ-logos/light/world_wonder.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_WorldWonder_04f5cbb7.svg',
  },
  natural_wonder: {
    title: 'Natural Wonder',
    abbr: 'NW',
    lightSvgUrl: '/assets/civ-logos/light/natural_wonder.svg',
    darkSvgUrl: '/assets/aistudio/AtlasCivLogoDark_NaturalWonder_3abbf751.svg',
  },
};

export type CivLogoVariant = 'light' | 'dark' | 'illustration' | 'auto';

/**
 * Returns the logo URL for a Civilization series game.
 * Supports keys like 'civ5', 'civ6', 'civ7', '1', '6', etc.
 * When variant is 'auto', it uses theme ('dark' | 'light') to pick the appropriate SVG.
 */
export function getCivSeriesLogo(
  game: string | number | undefined,
  variant: CivLogoVariant = 'illustration',
  theme: 'dark' | 'light' = 'dark'
): string | undefined {
  if (!game) return undefined;
  const key = String(game).toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedKey: CivSeriesGame | undefined = key.startsWith('civ')
    ? (key as CivSeriesGame)
    : (`civ${key}` as CivSeriesGame);

  const info = CIV_SERIES_LOGOS[normalizedKey];
  if (!info) return undefined;

  if (variant === 'illustration') return info.illustrationPngUrl;
  if (variant === 'light') return info.lightSvgUrl;
  if (variant === 'dark') return info.darkSvgUrl;
  // 'auto' picks based on app theme
  return theme === 'dark' ? info.darkSvgUrl : info.lightSvgUrl;
}

/**
 * Returns the wonder category badge icon URL (World Wonder vs Natural Wonder).
 * Supports light and dark plain versions based on variant/theme.
 */
export function getWonderTypeLogo(
  type: 'world_wonder' | 'natural_wonder',
  variant: 'light' | 'dark' | 'auto' = 'auto',
  theme: 'dark' | 'light' = 'dark'
): string {
  const info = WONDER_TYPE_LOGOS[type];
  if (!info) return '';
  if (variant === 'light') return info.lightSvgUrl;
  if (variant === 'dark') return info.darkSvgUrl;
  return theme === 'dark' ? info.darkSvgUrl : info.lightSvgUrl;
}
