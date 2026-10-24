import { CivGame } from '../types/wonder';

export const CIV6_ICONS: Record<string, string> = {
  gold: 'https://static.wikia.nocookie.net/civilization/images/b/bc/Civ6Gold.png',
  science: 'https://static.wikia.nocookie.net/civilization/images/7/79/Civ6Science.png',
  culture: 'https://static.wikia.nocookie.net/civilization/images/2/2a/Civ6Culture.png',
  faith: 'https://static.wikia.nocookie.net/civilization/images/8/82/Civ6Faith.png',
  production: 'https://static.wikia.nocookie.net/civilization/images/7/74/Civ6Production.png',
  food: 'https://static.wikia.nocookie.net/civilization/images/6/65/Civ6Food.png',
  housing: 'https://static.wikia.nocookie.net/civilization/images/a/ae/Housing6.png',
  amenity: 'https://static.wikia.nocookie.net/civilization/images/6/65/Amenities6.png',
  amenities: 'https://static.wikia.nocookie.net/civilization/images/6/65/Amenities6.png',
  happiness: 'https://static.wikia.nocookie.net/civilization/images/6/65/Amenities6.png',
  tourism: 'https://static.wikia.nocookie.net/civilization/images/5/5b/Tourism6.png',
  diplomacy: 'https://static.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png',
  diplomatic_favor: 'https://static.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png',
  great_person: 'https://static.wikia.nocookie.net/civilization/images/9/9a/GreatPerson6.png',
  greatPersonPoints: 'https://static.wikia.nocookie.net/civilization/images/9/9a/GreatPerson6.png',
  trade_route: 'https://static.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png',
  envoy: 'https://static.wikia.nocookie.net/civilization/images/2/24/Envoy6.png',
  strength: 'https://static.wikia.nocookie.net/civilization/images/b/b6/Civ6StrengthIcon.png',
  district: 'https://static.wikia.nocookie.net/civilization/images/9/9b/District_%28Civ6%29.png',
  citizen: 'https://static.wikia.nocookie.net/civilization/images/f/f8/Citizen6.png',
  power: 'https://static.wikia.nocookie.net/civilization/images/5/59/Power_%28Civ6%29.png',
  governor: 'https://static.wikia.nocookie.net/civilization/images/8/8e/Governor_%28Civ6%29.png',
  governor_title: 'https://static.wikia.nocookie.net/civilization/images/8/8e/Governor_%28Civ6%29.png',
  appeal: '/assets/aistudio/appeal_28979be3.svg'
};

export const CIV5_ICONS: Record<string, string> = {
  gold: 'https://static.wikia.nocookie.net/civilization/images/c/c9/20xGold5.png',
  production: 'https://static.wikia.nocookie.net/civilization/images/3/37/20xProduction5.png',
  science: 'https://static.wikia.nocookie.net/civilization/images/1/1c/20xScience5.png',
  culture: 'https://static.wikia.nocookie.net/civilization/images/9/9e/20xCulture5.png',
  faith: 'https://static.wikia.nocookie.net/civilization/images/a/a3/20xFaith5.png',
  tourism: 'https://static.wikia.nocookie.net/civilization/images/a/a4/20xTourism5.png',
  happiness: 'https://static.wikia.nocookie.net/civilization/images/f/f9/20xHappiness5.png',
  capital: 'https://static.wikia.nocookie.net/civilization/images/d/d5/Capital5.png',
  engineer: 'https://static.wikia.nocookie.net/civilization/images/1/1d/Engineer_%28Civ5%29.png',
  great_person: 'https://static.wikia.nocookie.net/civilization/images/1/1d/Engineer_%28Civ5%29.png',
  greatPersonPoints: 'https://static.wikia.nocookie.net/civilization/images/1/1d/Engineer_%28Civ5%29.png',
  movement: 'https://static.wikia.nocookie.net/civilization/images/9/96/20xMovement5.png',
  food: 'https://static.wikia.nocookie.net/civilization/images/f/f9/20xFood5.png',
  population: 'https://static.wikia.nocookie.net/civilization/images/0/08/20xPopulation5.png',
  citizen: 'https://static.wikia.nocookie.net/civilization/images/0/08/20xPopulation5.png',
  unhappiness: 'https://static.wikia.nocookie.net/civilization/images/c/c6/Unhappiness_%28Civ5%29.png',
  unemployed: 'https://static.wikia.nocookie.net/civilization/images/3/3f/Unemployed_%28Civ5%29.png'
};

/**
 * Returns the proper game-specific CDN icon URL for a yield or mechanic.
 */
export function getYieldIconUrl(key: string, game: CivGame = 'civ5'): string | undefined {
  if (game === 'civ6') {
    return CIV6_ICONS[key] || CIV5_ICONS[key];
  }
  return CIV5_ICONS[key] || CIV6_ICONS[key];
}
