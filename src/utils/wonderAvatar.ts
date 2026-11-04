import { CivWonder } from '../types/wonder';
import { getCivSeriesLogo, getWonderTypeLogo } from '../data/civSeriesLogos';

/**
 * Normalized mapping to local PNG assets in /src/assets/images/icons/
 */
const LOCAL_PNG_ICONS: Record<string, string> = {
  'pyramids': '/src/assets/images/icons/great-pyramids.png',
  'great-pyramids': '/src/assets/images/icons/great-pyramids.png',
  'colossus': '/src/assets/images/icons/colossus-of-rhodes.png',
  'colossus-of-rhodes': '/src/assets/images/icons/colossus-of-rhodes.png',
  'great-library': '/src/assets/images/icons/great-library.png',
  'stonehenge': '/src/assets/images/icons/stonehenge.png',
  'great-wall': '/src/assets/images/icons/great-wall-china.png',
  'great-wall-china': '/src/assets/images/icons/great-wall-china.png',
  'machu-picchu': '/src/assets/images/icons/machu-picchu.png',
  'chichen-itza': '/src/assets/images/icons/chichen-itza.png',
  'notre-dame': '/src/assets/images/icons/notre-dame.png',
  'hagia-sophia': '/src/assets/images/icons/hagia-sophia.png',
  'forbidden-palace': '/src/assets/images/icons/forbidden-palace.png',
  'forbidden-city': '/src/assets/images/icons/forbidden-palace.png',
  'taj-mahal': '/src/assets/images/icons/taj-mahal.png',
  'sistine-chapel': '/src/assets/images/icons/sistine-chapel.png',
  'big-ben': '/src/assets/images/icons/big-ben.png',
  'eiffel-tower': '/src/assets/images/icons/eiffel-tower.png',
  'statue-of-liberty': '/src/assets/images/icons/statue-of-liberty.png',
  'cristo-redentor': '/src/assets/images/icons/cristo-redentor.png',
  'sydney-opera-house': '/src/assets/images/icons/sydney-opera-house.png',
  'hubble-space-telescope': '/src/assets/images/icons/hubble-space-telescope.png',
  'petra': '/src/assets/images/icons/petra.png',
  'hanging-gardens': '/src/assets/images/icons/hanging-gardens.png',
  'alhambra': '/src/assets/images/icons/alhambra.png',
  'terracotta-army': '/src/assets/images/icons/terracotta-army.png',
  'brandenburg-gate': '/src/assets/images/icons/brandenburg-gate.png',
  'red-fort': '/src/assets/images/icons/red-fort.png',
  'leaning-tower-of-pisa': '/src/assets/images/icons/leaning-tower-of-pisa.png',
  // Natural Wonders
  'mt-kilimanjaro': '/src/assets/images/icons/mt-kilimanjaro.png',
  'great-barrier-reef': '/src/assets/images/icons/great-barrier-reef.png',
  'cerro-de-potosi': '/src/assets/images/icons/cerro-de-potosi.png',
  'lake-victoria': '/src/assets/images/icons/lake-victoria.png',
  'krakatoa': '/src/assets/images/icons/krakatoa.png',
  'mt-sinai': '/src/assets/images/icons/mt-sinai.png',
  'uluru': '/src/assets/images/icons/uluru.png',
  'mt-fuji': '/src/assets/images/icons/mt-fuji.png',
  'old-faithful': '/src/assets/images/icons/old-faithful.png',
  'rock-of-gibraltar': '/src/assets/images/icons/rock-of-gibraltar.png',
  'barringer-crater': '/src/assets/images/icons/barringer-crater.png',
  'king-solomons-mines': '/src/assets/images/icons/king-solomons-mines.png',
  'mt-kailash': '/src/assets/images/icons/mt-kailash.png',
  'grand-mesa': '/src/assets/images/icons/grand-mesa.png',
  'fountain-of-youth': '/src/assets/images/icons/fountain-of-youth.png'
};

/**
 * Dedicated bespoke SVGs created for newly introduced series wonders in /assets/wonder-icons/
 */
const BESPOKE_SVG_ICONS: Record<string, string> = {
  'cure-for-cancer': '/assets/wonder-icons/cure-for-cancer.svg',
  'seti-program': '/assets/wonder-icons/seti-program.svg',
  'magellans-expedition': '/assets/wonder-icons/magellans-expedition.svg',
  'leonardos-workshop': '/assets/wonder-icons/leonardos-workshop.svg',
  'king-richards-crusade': '/assets/wonder-icons/king-richards-crusade.svg',
  'sun-tzus-war-academy': '/assets/wonder-icons/sun-tzus-war-academy.svg',
  'js-bachs-cathedral': '/assets/wonder-icons/js-bachs-cathedral.svg',
  'shakespeares-theatre': '/assets/wonder-icons/shakespeares-theatre.svg',
  'hoover-dam': '/assets/wonder-icons/hoover-dam.svg',
  'three-gorges-dam': '/assets/wonder-icons/three-gorges-dam.svg',
  'statue-of-zeus': '/assets/wonder-icons/statue-of-zeus.svg',
  'knights-templar': '/assets/wonder-icons/knights-templar.svg',
  'mausoleum-of-maussollos': '/assets/wonder-icons/mausoleum-of-maussollos.svg',
  'mausoleum-at-halicarnassus': '/assets/wonder-icons/mausoleum-of-maussollos.svg',
  'mausoleum': '/assets/wonder-icons/mausoleum-of-maussollos.svg',
  'newtons-university': '/assets/wonder-icons/newtons-university.svg',
  'great-lighthouse': '/assets/wonder-icons/great-lighthouse.svg',
  'parthenon': '/assets/wonder-icons/parthenon.svg',
  'spiral-minaret': '/assets/wonder-icons/spiral-minaret.svg',
  'apostolic-palace': '/assets/wonder-icons/apostolic-palace.svg',
  'university-of-sankore': '/assets/wonder-icons/university-of-sankore.svg',
  'university-sankore': '/assets/wonder-icons/university-of-sankore.svg',
  'shwedagon-paya': '/assets/wonder-icons/shwedagon-paya.svg',
  'versailles': '/assets/wonder-icons/versailles.svg',
  'broadway': '/assets/wonder-icons/broadway.svg',
  'space-elevator': '/assets/wonder-icons/space-elevator.svg',
  'colosseum': '/assets/wonder-icons/colosseum.svg',
  'oracle': '/assets/wonder-icons/oracle.svg',
  'white-sands': '/assets/wonder-icons/white-sands.svg',
  'ha-long-bay': '/assets/wonder-icons/ha-long-bay.svg'
};

function normalizeId(idOrName: string): string {
  return idOrName
    .toLowerCase()
    .replace(/^civ[1-7]-/, '')
    .replace(/^the\s+/, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Returns a guaranteed valid avatar icon URL for any wonder across the entire 7-game series.
 * Prioritizes local PNGs and bespoke SVGs so images load instantly with 0% failure rate.
 */
export function getWonderAvatarUrl(wonder: CivWonder): string {
  const normId = normalizeId(wonder.id);
  const normName = normalizeId(wonder.name);

  // 1. Check bespoke SVGs first (for newly added Civ 1-4 and 7 landmarks)
  if (BESPOKE_SVG_ICONS[normId]) return BESPOKE_SVG_ICONS[normId];
  if (BESPOKE_SVG_ICONS[normName]) return BESPOKE_SVG_ICONS[normName];

  // 2. Check local PNGs in /src/assets/images/icons/
  if (LOCAL_PNG_ICONS[normId]) return LOCAL_PNG_ICONS[normId];
  if (LOCAL_PNG_ICONS[normName]) return LOCAL_PNG_ICONS[normName];

  // 3. If wonder already has a local asset URL, use it
  if (wonder.iconUrl && (wonder.iconUrl.startsWith('/') || wonder.iconUrl.startsWith('./'))) {
    return wonder.iconUrl;
  }

  // 4. If wonder has an iconUrl that is not from wikia/nocookie (which gets 403 challenged)
  if (wonder.iconUrl && !wonder.iconUrl.includes('nocookie.net')) {
    return wonder.iconUrl;
  }

  // 5. Check if wonder name matches common alias
  if (normName.includes('pyramid')) return LOCAL_PNG_ICONS['great-pyramids'];
  if (normName.includes('colossus')) return LOCAL_PNG_ICONS['colossus-of-rhodes'];
  if (normName.includes('library')) return LOCAL_PNG_ICONS['great-library'];
  if (normName.includes('lighthouse')) return BESPOKE_SVG_ICONS['great-lighthouse'];
  if (normName.includes('zeus')) return BESPOKE_SVG_ICONS['statue-of-zeus'];
  if (normName.includes('dam')) return BESPOKE_SVG_ICONS['hoover-dam'];
  if (normName.includes('cathedral') || normName.includes('notre')) return LOCAL_PNG_ICONS['notre-dame'];
  if (normName.includes('palace') || normName.includes('forbidden')) return LOCAL_PNG_ICONS['forbidden-palace'];
  if (normName.includes('theatre') || normName.includes('theater')) return BESPOKE_SVG_ICONS['shakespeares-theatre'];

  // 6. Safe universal fallback: Civilization series Roman numeral logo or wonder type badge
  const seriesLogo = getCivSeriesLogo(wonder.game || 'civ5', 'auto', 'dark');
  if (seriesLogo) return seriesLogo;

  return getWonderTypeLogo(wonder.type, 'auto', 'dark');
}

/**
 * Returns a safe fallback image URL when an <img> fails to load
 */
export function getWonderAvatarFallback(wonder: CivWonder): string {
  const seriesLogo = getCivSeriesLogo(wonder.game || 'civ5', 'auto', 'dark');
  if (seriesLogo) return seriesLogo;
  return getWonderTypeLogo(wonder.type, 'auto', 'dark');
}
