/**
 * Helper to map modern countries to their respective national flag emojis.
 */

const COUNTRY_FLAG_MAP: Record<string, string> = {
  "Antarctica": "🇦🇶",
  "Atlantic Ocean": "🌊",
  "Australia": "🇦🇺",
  "Azerbaijan": "🇦🇿",
  "Bahamas / Florida Straits": "🇧🇸",
  "The Bahamas": "🇧🇸",
  "Bolivia": "🇧🇴",
  "Brazil": "🇧🇷",
  "Brazil, Bolivia & Paraguay": "🇧🇷",
  "Cambodia": "🇰🇭",
  "Canada": "🇨🇦",
  "Chile": "🇨🇱",
  "China": "🇨🇳",
  "Tibet / China": "🇨🇳",
  "Ecuador": "🇪🇨",
  "Egypt": "🇪🇬",
  "France": "🇫🇷",
  "Germany": "🇩🇪",
  "Gibraltar (British Overseas Territory)": "🇬🇮",
  "Greece": "🇬🇷",
  "Iceland": "🇮🇸",
  "India": "🇮🇳",
  "Indonesia": "🇮🇩",
  "Iran": "🇮🇷",
  "Iraq": "🇮🇶",
  "Israel / Jordan": "🇮🇱",
  "Jordan & Israel": "🇯🇴",
  "Jordan": "🇯🇴",
  "Italy": "🇮🇹",
  "Japan": "🇯🇵",
  "Madagascar": "🇲🇬",
  "Mali": "🇲🇱",
  "Mauritania": "🇲🇷",
  "Mexico": "🇲🇽",
  "Mongolia & Russia": "🇲🇳",
  "Nepal & China": "🇳🇵",
  "New Zealand": "🇳🇿",
  "Norway": "🇳🇴",
  "Pakistan": "🇵🇰",
  "Panama": "🇵🇦",
  "Peru": "🇵🇪",
  "Philippines": "🇵🇭",
  "Portugal": "🇵🇹",
  "Russia": "🇷🇺",
  "South Africa": "🇿🇦",
  "Spain": "🇪🇸",
  "Sudan": "🇸🇩",
  "Switzerland & Italy": "🇨🇭",
  "Tanzania": "🇹🇿",
  "Turkey": "🇹🇷",
  "Uganda / Tanzania / Kenya": "🇺🇬",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
  "United States / Low Earth Orbit": "🇺🇸",
  "Vatican City": "🇻🇦",
  "Venezuela, Brazil & Guyana": "🇻🇪",
  "Vietnam": "🇻🇳",
  "Zimbabwe": "🇿🇼"
};

/**
 * Returns national flag emoji for given country name with fallback
 */
export function getCountryFlag(country?: string | null): string {
  if (!country) return '🌐';

  // Direct exact match
  if (COUNTRY_FLAG_MAP[country]) {
    return COUNTRY_FLAG_MAP[country];
  }

  // Keyword-based matching
  const lower = country.toLowerCase();
  if (lower.includes('egypt')) return '🇪🇬';
  if (lower.includes('peru')) return '🇵🇪';
  if (lower.includes('france')) return '🇫🇷';
  if (lower.includes('italy')) return '🇮🇹';
  if (lower.includes('china')) return '🇨🇳';
  if (lower.includes('greece')) return '🇬🇷';
  if (lower.includes('united states') || lower.includes('usa')) return '🇺🇸';
  if (lower.includes('united kingdom') || lower.includes('britain') || lower.includes('england')) return '🇬🇧';
  if (lower.includes('germany')) return '🇩🇪';
  if (lower.includes('india')) return '🇮🇳';
  if (lower.includes('japan')) return '🇯🇵';
  if (lower.includes('jordan')) return '🇯🇴';
  if (lower.includes('brazil')) return '🇧🇷';
  if (lower.includes('mexico')) return '🇲🇽';
  if (lower.includes('spain')) return '🇪🇸';
  if (lower.includes('russia')) return '🇷🇺';
  if (lower.includes('turkey')) return '🇹🇷';
  if (lower.includes('australia')) return '🇦🇺';
  if (lower.includes('norway')) return '🇳🇴';
  if (lower.includes('vietnam')) return '🇻🇳';
  if (lower.includes('south africa')) return '🇿🇦';
  if (lower.includes('tanzania')) return '🇹🇿';
  if (lower.includes('chile')) return '🇨🇱';
  if (lower.includes('cambodia')) return '🇰🇭';
  if (lower.includes('canada')) return '🇨🇦';
  if (lower.includes('iceland')) return '🇮🇸';
  if (lower.includes('indonesia')) return '🇮🇩';
  if (lower.includes('iran')) return '🇮🇷';
  if (lower.includes('iraq')) return '🇮🇶';
  if (lower.includes('portugal')) return '🇵🇹';
  if (lower.includes('bolivia')) return '🇧🇴';
  if (lower.includes('panama')) return '🇵🇦';
  if (lower.includes('philippines')) return '🇵🇭';
  if (lower.includes('new zealand')) return '🇳🇿';
  if (lower.includes('antarctica')) return '🇦🇶';
  if (lower.includes('vatican')) return '🇻🇦';
  if (lower.includes('mali')) return '🇲🇱';
  if (lower.includes('madagascar')) return '🇲🇬';
  if (lower.includes('zimbabwe')) return '🇿🇼';

  return '🌐';
}
