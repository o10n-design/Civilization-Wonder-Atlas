import { CivWonder } from '../types/wonder';

export const CIV7_WONDERS: CivWonder[] = [
  // ===================== CIV VII ANTIQUITY AGE =====================
  {
    id: 'civ7-pyramids',
    name: 'Pyramids',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Antiquity',
    yearApprox: 'c. 2560 BCE',
    location: {
      lat: 29.9792,
      lng: 31.1342,
      modernCountry: 'Egypt',
      modernRegion: 'Giza Governorate'
    },
    yields: {
      culture: 3,
      production: 2
    },
    placementRequirement: 'Must be constructed on a flat Desert tile adjacent to a navigable River.',
    bonuses: [
      'Grants additional workforce and accelerates monument building across all cities in the Antiquity Age',
      'Provides unique legacy points when transitioning from the Antiquity Age to the Exploration Age'
    ],
    quote: 'From the heights of these pyramids, forty centuries look down on us.',
    quoteAuthor: 'Napoleon Bonaparte',
    quoteWork: 'Speech to the Army of the Orient (1798)',
    civilopediaExcerpt: 'The Great Pyramid of Giza is the oldest and only surviving Wonder of the Ancient World. In Civilization VII, constructed during the Antiquity Age, the Pyramids anchor early riverine empires and provide enduring cultural mastery across age transitions.',
    historicalContext: 'Built as a tomb for Fourth Dynasty pharaoh Khufu over a roughly 27-year period, standing as the tallest human-made structure in the world for over 3,800 years.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/e/e3/Pyramids_%28Civ6%29.png/revision/latest?cb=20161117163821',
    visualUrl: '/src/assets/images/pyramids_giza_civ_1792262637264.jpg'
  },
  {
    id: 'civ7-hanging-gardens',
    name: 'Hanging Gardens',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Antiquity',
    yearApprox: 'c. 600 BCE',
    location: {
      lat: 32.5422,
      lng: 44.421,
      modernCountry: 'Iraq',
      modernRegion: 'Babil Governorate (Ancient Babylon)'
    },
    yields: {
      food: 4,
      culture: 2
    },
    placementRequirement: 'Must be built on fertile river plains adjacent to fresh water or an aqueduct.',
    bonuses: [
      'Massive food surge accelerating population growth throughout all core settlement quarters',
      'Unlocks special botanical landscaping narrative opportunities during age shifts'
    ],
    quote: 'The approach to the Garden sloped like a hillside and the several parts of the structure rose from one another tier on tier...',
    quoteAuthor: 'Diodorus Siculus',
    quoteWork: 'Bibliotheca Historica (1st Century BCE)',
    civilopediaExcerpt: 'Ascending tiered gardens containing a vast variety of trees, shrubs, and vines, resembling a large green mountain constructed of mud brick. In Civilization VII, it turns ancient river capitals into flourishing demographic metropolises.',
    historicalContext: 'Supposedly built by King Nebuchadnezzar II for his Median wife, Queen Amytis, who missed the verdant green hills of her homeland.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/5/5a/Hanging_Gardens_%28Civ6%29.png/revision/latest?cb=20161117163836',
    visualUrl: '/src/assets/images/wonders/hanging-gardens.png'
  },
  {
    id: 'civ7-colosseum',
    name: 'Colosseum',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Antiquity',
    yearApprox: '70–80 CE',
    location: {
      lat: 41.8902,
      lng: 12.4922,
      modernCountry: 'Italy',
      modernRegion: 'Rome, Lazio'
    },
    yields: {
      culture: 3,
      amenity: 4
    },
    placementRequirement: 'Must be constructed adjacent to an Entertainment complex quarter on flat terrain.',
    bonuses: [
      'Extends massive public happiness and cultural celebration across all settlements within a regional radius',
      'Generates military legacy points during martial triumphs in the Antiquity Age'
    ],
    quote: 'While stands the Colosseum, Rome shall stand; when falls the Colosseum, Rome shall fall; and when Rome falls, the world.',
    quoteAuthor: 'Lord Byron',
    quoteWork: 'Childe Harold’s Pilgrimage (1812)',
    civilopediaExcerpt: 'The largest ancient amphitheatre ever built, constructed of travertine limestone and tuff. In Civilization VII, the Colosseum satisfies popular unrest and binds multi-cultural provinces into a cohesive imperial citizenry.',
    historicalContext: 'Inaugurated under Emperor Titus in 80 CE with one hundred days of public games, capable of holding an estimated 50,000 to 80,000 spectators.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/2/22/Colosseum_%28Civ6%29.png/revision/latest?cb=20161117163829',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/2/23/Colosseum_%28Civ6%29_splash.jpg/revision/latest?cb=20211029191054'
  },
  {
    id: 'civ7-great-library',
    name: 'Great Library',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Antiquity',
    yearApprox: 'c. 283 BCE',
    location: {
      lat: 31.2001,
      lng: 29.9092,
      modernCountry: 'Egypt',
      modernRegion: 'Alexandria'
    },
    yields: {
      science: 4,
      culture: 2
    },
    placementRequirement: 'Must be placed adjacent to a Campus or Academy quarter and adjacent to a coastal or harbor tile.',
    bonuses: [
      'Automatically grants scientific breakthroughs whenever friendly or rival civilizations unlock new technologies',
      'Stores rare scrolls and codices that carry over scholars into future historical eras'
    ],
    quote: 'The library is the temple of the mind, where the great thinkers of all times speak to us without voice.',
    quoteAuthor: 'Athenaeus',
    quoteWork: 'Deipnosophistae',
    civilopediaExcerpt: 'One of the largest and most significant libraries of the ancient world, dedicated to the Muses. In Civilization VII, it preserves the foundational philosophy and science of antiquity across the ages.',
    historicalContext: 'Part of a larger research institution called the Mouseion at Alexandria, functioning as a global scholarly repository until tragic destructions across Roman civil conflicts.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/8/87/Great_Library_%28Civ6%29.png/revision/latest?cb=20180210080645',
    visualUrl: '/src/assets/images/wonders/great-library.png'
  },
  {
    id: 'civ7-oracle',
    name: 'Oracle',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Antiquity',
    yearApprox: 'c. 800 BCE',
    location: {
      lat: 38.4824,
      lng: 22.5012,
      modernCountry: 'Greece',
      modernRegion: 'Delphi, Phocis'
    },
    yields: {
      faith: 3,
      culture: 2
    },
    placementRequirement: 'Must be constructed on a steep Hill or Mountain foothill.',
    bonuses: [
      'Drastically discounts the cost of recruiting illustrious Great Leaders and visionary scholars',
      'Provides prophetic insights on neighboring civilization intentions during diplomatic congresses'
    ],
    quote: 'Know thyself, and nothing in excess.',
    quoteAuthor: 'Delphic Maxim',
    quoteWork: 'Inscriptions on the Temple of Apollo at Delphi',
    civilopediaExcerpt: 'The Pythia, commonly known as the Oracle of Delphi, served as the prestigious priestess of the Temple of Apollo. In Civilization VII, consulting the Oracle elevates statecraft, foresight, and spiritual guidance.',
    historicalContext: 'Established along the slopes of Mount Parnassus, consulting the Oracle was mandatory for Greek city-states before founding colonies or waging war.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/d/df/Oracle_%28Civ6%29.png/revision/latest?cb=20161117163842',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/7/7b/Oracle_%28Civ6%29_splash.jpg/revision/latest?cb=20211029191058'
  },

  // ===================== CIV VII EXPLORATION AGE =====================
  {
    id: 'civ7-chichen-itza',
    name: 'Chichen Itza',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Exploration',
    yearApprox: 'c. 600–900 CE',
    location: {
      lat: 20.6843,
      lng: -88.5678,
      modernCountry: 'Mexico',
      modernRegion: 'Tinum Municipality, Yucatán'
    },
    yields: {
      culture: 3,
      production: 2
    },
    placementRequirement: 'Must be constructed inside or adjacent to dense Rainforest / Jungle tiles.',
    bonuses: [
      'Empowers all surrounding rainforest tiles with bonus production and celestial calendar culture',
      'Protects tropical settlements from seasonal environmental crises in the Exploration Age'
    ],
    quote: 'The shadows of the serpent descend the stones, marking the precision of the heavens and the majesty of our ancestors.',
    quoteAuthor: 'Mayan Chronicle',
    quoteWork: 'Chilam Balam',
    civilopediaExcerpt: 'A major focal point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic periods. In Civilization VII, Chichen Itza harnesses astronomical tracking and jungle mastery.',
    historicalContext: 'Dominated by the Temple of Kukulcan (El Castillo), where spring and autumn equinoxes cast shadows creating the illusion of a feathered serpent crawling down the pyramid balustrade.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/5/54/Chichen_Itza_%28Civ6%29.png/revision/latest?cb=20161117163826',
    visualUrl: '/src/assets/images/wonders/chichen-itza.png'
  },
  {
    id: 'civ7-machu-picchu',
    name: 'Machu Picchu',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Exploration',
    yearApprox: 'c. 1450 CE',
    location: {
      lat: -13.1631,
      lng: -72.545,
      modernCountry: 'Peru',
      modernRegion: 'Urubamba Province, Cusco'
    },
    yields: {
      gold: 4,
      culture: 3
    },
    placementRequirement: 'Must be constructed on a steep Mountain peak adjacent to high altitude settlement districts.',
    bonuses: [
      'Grants commercial and economic adjacency bonuses to all mountain-flanked quarters throughout the empire',
      'Enables high-altitude road transit and terrace agriculture resilience'
    ],
    quote: 'Few romances can ever surpass that of the granite citadel perched atop the dizzy heights between two Andean peaks.',
    quoteAuthor: 'Hiram Bingham',
    quoteWork: 'Inca Land (1922)',
    civilopediaExcerpt: 'A 15th-century Inca citadel situated on an Andean mountain ridge 2,430 meters above sea level. In Civilization VII, Machu Picchu masters vertical highland geography and trans-continental trading.',
    historicalContext: 'Constructed under emperor Pachacuti as a royal estate and religious sanctuary, built using dry-stone ashlar walls that withstand fierce seismic earthquakes.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/a/a2/Machu_Picchu_%28Civ6%29.png/revision/latest?cb=20190226065431',
    visualUrl: '/src/assets/images/machu_picchu_civ_1792262637384.jpg'
  },
  {
    id: 'civ7-taj-mahal',
    name: 'Taj Mahal',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Exploration',
    yearApprox: '1632–1653 CE',
    location: {
      lat: 27.1751,
      lng: 78.0421,
      modernCountry: 'India',
      modernRegion: 'Agra, Uttar Pradesh'
    },
    yields: {
      culture: 5,
      faith: 2
    },
    placementRequirement: 'Must be constructed along the bank of a River on flat terrain.',
    bonuses: [
      'Accelerates monumental era score, preventing dark ages and cementing enduring Golden Ages',
      'Provides tourism and diplomatic reverence when welcoming foreign delegations'
    ],
    quote: 'Not a piece of architecture, as other buildings are, but a proud passions helping shape into living stone.',
    quoteAuthor: 'Edwin Arnold',
    quoteWork: 'India Revisited (1886)',
    civilopediaExcerpt: 'An ivory-white marble mausoleum on the right bank of the Yamuna River in Agra, commissioned by Mughal emperor Shah Jahan. In Civilization VII, the Taj Mahal stands as the ultimate triumph of artistic devotion and statecraft.',
    historicalContext: 'Built to house the tomb of Mumtaz Mahal, it employed thousands of artisans, stonecutters, and calligraphers from across Central Asia, India, and Persia.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/2/23/Taj_Mahal_%28Civ6%29.png/revision/latest?cb=20180210080649',
    visualUrl: '/src/assets/images/wonders/taj-mahal.png'
  },
  {
    id: 'civ7-notre-dame',
    name: 'Notre-Dame',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Exploration',
    yearApprox: '1163–1345 CE',
    location: {
      lat: 48.853,
      lng: 2.3499,
      modernCountry: 'France',
      modernRegion: 'Île de la Cité, Paris'
    },
    yields: {
      culture: 4,
      faith: 3,
      happiness: 3
    },
    placementRequirement: 'Must be built on an Island tile or Riverbank in the heart of an urban core.',
    bonuses: [
      'Radiates civic unity, happiness, and artistic prestige to all neighboring urban districts',
      'Elevates cathedral acoustic music and gothic scholastic learning'
    ],
    quote: 'Great buildings, like great mountains, are the work of centuries.',
    quoteAuthor: 'Victor Hugo',
    quoteWork: 'The Hunchback of Notre-Dame (1831)',
    civilopediaExcerpt: 'A medieval Catholic cathedral on the Île de la Cité, Notre-Dame de Paris is one of the finest examples of French Gothic architecture. In Civilization VII, it unites medieval provinces with unmatched spiritual grandeur.',
    historicalContext: 'Distinguished by pioneering rib vaults, flying buttresses, enormous colorful rose windows, and rich sculptural ornamentation.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/7/7b/Notre_Dame_%28Civ5%29.png/revision/latest?cb=20120921021430',
    visualUrl: '/src/assets/images/wonders/notre-dame.png'
  },

  // ===================== CIV VII MODERN AGE =====================
  {
    id: 'civ7-eiffel-tower',
    name: 'Eiffel Tower',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1889 CE',
    location: {
      lat: 48.8584,
      lng: 2.2945,
      modernCountry: 'France',
      modernRegion: 'Champ de Mars, Paris'
    },
    yields: {
      culture: 4,
      appeal: 2
    },
    placementRequirement: 'Must be built on flat terrain adjacent to an urban city center.',
    bonuses: [
      'Vastly boosts the aesthetic appeal of every tile across your civilization',
      'Broadcasts modern industrial prestige, boosting international tourism and radio media power'
    ],
    quote: 'I ought to be jealous of the tower. She is more famous than I am.',
    quoteAuthor: 'Gustave Eiffel',
    quoteWork: 'Interview (1890)',
    civilopediaExcerpt: 'A wrought-iron lattice tower named after engineer Gustave Eiffel, whose company designed and built it as the entrance to the 1889 World’s Fair. In Civilization VII, it symbolizes the soaring heights of modern engineering.',
    historicalContext: 'Standing 330 meters tall, it was the tallest man-made structure in the world until the completion of the Chrysler Building in New York in 1930.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/d/d3/Eiffel_Tower_%28Civ6%29.png/revision/latest?cb=20161117163833',
    visualUrl: '/src/assets/images/wonders/eiffel-tower.png'
  },
  {
    id: 'civ7-statue-of-liberty',
    name: 'Statue of Liberty',
    game: 'civ7',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1886 CE',
    location: {
      lat: 40.6892,
      lng: -74.0445,
      modernCountry: 'United States',
      modernRegion: 'New York Harbor, New York'
    },
    yields: {
      diplomacy: 4,
      culture: 3
    },
    placementRequirement: 'Must be built on a coastal water tile adjacent to a Harbor quarter.',
    bonuses: [
      'Guarantees total loyalty and civic stability across distant overseas colonies and frontier settlements',
      'Provides crucial diplomatic victory points during World Congress summits'
    ],
    quote: 'Give me your tired, your poor, your huddled masses yearning to breathe free.',
    quoteAuthor: 'Emma Lazarus',
    quoteWork: 'The New Colossus (1883)',
    civilopediaExcerpt: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor, designed by French sculptor Frédéric-Auguste Bartholdi. In Civilization VII, Lady Liberty stands as an enduring beacon of democracy and alliance leadership.',
    historicalContext: 'A gift from the people of France to the United States to celebrate the centennial of the Declaration of Independence and Franco-American friendship.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/f/f7/Statue_of_Liberty_%28Civ6%29.png/revision/latest?cb=20180210080648',
    visualUrl: '/src/assets/images/wonders/statue-of-liberty.png'
  },

  // ===================== CIV VII NATURAL WONDERS =====================
  {
    id: 'civ7-white-sands',
    name: 'White Sands',
    game: 'civ7',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Pleistocene (~10,000 ya)',
    location: {
      lat: 32.7872,
      lng: -106.3257,
      modernCountry: 'United States',
      modernRegion: 'Tularosa Basin, New Mexico'
    },
    yields: {
      science: 3,
      culture: 2
    },
    bonuses: [
      'Provides pristine gypsum desert tiles that grant science and rocket testing technology bonuses in modern eras',
      'Inspires explorers with vast visual serenity, granting permanent era prestige'
    ],
    discoveryBonus: '+1 Permanent Happiness and unique scientific research expedition unlocks',
    quote: 'A shimmering white sea of gypsum sand dunes stretching toward purple mountain horizons.',
    quoteAuthor: 'National Park Service Annals',
    quoteWork: 'Desert Survey Records',
    civilopediaExcerpt: 'The world’s largest gypsum dunefield, spanning 275 square miles of white sand in the Chihuahuan Desert. In Civilization VII, this extraordinary desert basin nurtures scientific experimentation and natural wonder preservation.',
    historicalContext: 'Formed from gypsum dissolved from surrounding mountains and deposited into ancient Lake Otero, which dried into wind-swept brilliant white crystals.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/b/b3/Natural_Wonder_%28Civ6%29.png/revision/latest?cb=20161117164214',
    visualUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civ7-ha-long-bay',
    name: 'Ha Long Bay',
    game: 'civ7',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Karst development (~500M ya)',
    location: {
      lat: 20.9101,
      lng: 107.1839,
      modernCountry: 'Vietnam',
      modernRegion: 'Quảng Ninh Province'
    },
    yields: {
      food: 3,
      culture: 3,
      gold: 2
    },
    bonuses: [
      'Two-tile coastal natural wonder granting immense defensive shelter for naval fleets',
      'Provides rich aquatic yields, tourist prestige, and pearl diving commerce'
    ],
    discoveryBonus: '+1 Permanent Happiness to the discovering civilization',
    quote: 'Where the dragon descends into emerald waters amidst thousands of towering limestone monoliths.',
    quoteAuthor: 'Vietnamese Legend',
    quoteWork: 'Lore of the Descending Dragon',
    civilopediaExcerpt: 'A UNESCO World Heritage Site featuring thousands of limestone karsts and isles in various shapes and sizes rising sheer from emerald waters. In Civilization VII, Ha Long Bay provides naval dominance and cultural tourism.',
    historicalContext: 'Carved over 500 million years of geological formation and 20 million years of tropical karst evolution.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/3/36/Ha_Long_Bay_%28Civ6%29.png/revision/latest?cb=20171024194042',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/0/05/Natural_Wonder_Ha_Long_Bay_%28Civ6%29.jpg/revision/latest?cb=20171020211110'
  }
];
