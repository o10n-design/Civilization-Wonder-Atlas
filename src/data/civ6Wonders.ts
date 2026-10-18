import { CivWonder } from '../types/wonder';

export const CIV6_WONDERS: CivWonder[] = [
  {
    "id": "civ6-alhambra",
    "name": "Alhambra",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1238 CE",
    "location": {
        "lat": 37.1773,
        "lng": -3.5986,
        "modernCountry": "Spain",
        "modernRegion": "Granada, Andalusia"
    },
    "placementRequirement": "Must be built on Hills adjacent to an Encampment district.",
    "yields": {
        "amenity": 2,
        "greatPersonPoints": "+2 Great General points"
    },
    "bonuses": [
        "+1 Military policy slot",
        "Provides the amenities of 2 Entertainment Complex districts",
        "All units defend as if fortified behind a Fort"
    ],
    "quote": "Everything has a limit, and every beginning has an end. The morning must always follow the night.",
    "quoteAuthor": "Ibn Zamrak",
    "quoteWork": "Inscriptions on the Alhambra Walls",
    "civilopediaExcerpt": "A fortress and palace complex in Granada, Spain, constructed by the Nasrid dynasty. A peak of Islamic architecture in Al-Andalus featuring the Court of the Lions and intricate arabesque stucco work.",
    "historicalContext": "Declared a UNESCO World Heritage site and preserved as one of the finest surviving medieval palaces in Europe.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/7/71/Alhambra_%28Civ6%29.png/revision/latest?cb=20201202201322",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/10/Alhambra_in-game_%28Civ6%29.png/revision/latest?cb=20210202013403",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/10/Alhambra_in-game_%28Civ6%29.png/revision/latest?cb=20210202013403",
    "techRequirement": "Castles",
    "productionCost": 710
},
  {
    "id": "civ6-amundsen-scott-research-station",
    "name": "Amundsen-Scott Research Station",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Atomic",
    "yearApprox": "1956 CE",
    "location": {
        "lat": -90.0,
        "lng": 0.0,
        "modernCountry": "Antarctica",
        "modernRegion": "Geographic South Pole"
    },
    "placementRequirement": "Must be built on Snow or Tundra tile adjacent to a Campus with a Research Lab.",
    "yields": {
        "science": 5,
        "greatPersonPoints": "+5 Great Scientist points"
    },
    "bonuses": [
        "+20% Science and +10% Production in all cities with at least 5 Snow or Tundra tiles",
        "Doubled bonuses if city has 5 Snow tiles"
    ],
    "quote": "The conditions were beyond human endurance. Yet here we are.",
    "quoteAuthor": "Roald Amundsen",
    "quoteWork": "The South Pole Expedition (1911)",
    "civilopediaExcerpt": "The southernmost inhabited scientific station on Earth, continuously staffed since 1956 to monitor atmospheric science, astrophysics, and climate history.",
    "historicalContext": "Named in honor of pioneers Roald Amundsen and Robert F. Scott, whose historic race to the South Pole completed in 1911-1912.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/4/4d/Amundsen-Scott_Research_Station_%28Civ6%29.png/revision/latest?cb=20201202202842",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/f/f3/Amundsen-Scott_Research_Station_in-game_%28Civ6%29.png/revision/latest?cb=20180416143920",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/f/f3/Amundsen-Scott_Research_Station_in-game_%28Civ6%29.png/revision/latest?cb=20180416143920",
    "techRequirement": "Cold War",
    "productionCost": 1620
},
  {
    "id": "civ6-angkor-wat",
    "name": "Angkor Wat",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1150 CE",
    "location": {
        "lat": 13.4125,
        "lng": 103.867,
        "modernCountry": "Cambodia",
        "modernRegion": "Siem Reap"
    },
    "placementRequirement": "Must be built adjacent to an Aqueduct district.",
    "yields": {
        "faith": 2,
        "food": 1
    },
    "bonuses": [
        "+1 Population in all current cities",
        "+1 Housing in all cities empire-wide"
    ],
    "quote": "The city was so vast that thousands of men were needed to keep the jungle from reclaiming the stone terraces.",
    "quoteAuthor": "Ant\u00f3nio da Madalena",
    "quoteWork": "Account of Angkor (1586)",
    "civilopediaExcerpt": "The largest religious monument in the world by land area, originally built as a Hindu temple for the god Vishnu before gradually converting to a Buddhist temple.",
    "historicalContext": "Built by King Suryavarman II at the heart of the Khmer Empire, symbolizing Mount Meru, home of the devas in Hindu mythology.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2c/Angkor_Wat_%28Civ6%29.png/revision/latest?cb=20201202204517",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/35/Angkor_Wat_in-game_%28Civ6%29.jpg/revision/latest?cb=20171027042116",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/35/Angkor_Wat_in-game_%28Civ6%29.jpg/revision/latest?cb=20171027042116",
    "techRequirement": "Medieval Faires",
    "productionCost": 710
},
  {
    "id": "civ6-apadana",
    "name": "Apadana",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "515 BCE",
    "location": {
        "lat": 29.9354,
        "lng": 52.8914,
        "modernCountry": "Iran",
        "modernRegion": "Fars Province (Persepolis)"
    },
    "placementRequirement": "Must be built adjacent to your Capital city center.",
    "yields": {
        "greatPersonPoints": "+2 Great Works slots"
    },
    "bonuses": [
        "+2 Envoys when constructed",
        "Constructing any other wonder in this city awards +2 Envoys",
        "2 Great Work slots of any type"
    ],
    "quote": "A great god is Ahuramazda, who created this earth, who created yonder sky, who created man.",
    "quoteAuthor": "Darius the Great",
    "quoteWork": "Susa Inscription",
    "civilopediaExcerpt": "The grand hypostyle reception hall of the palace at Persepolis, built by Darius I and Xerxes I. Supported by 72 monumental columns with double-bull capitals.",
    "historicalContext": "Depicted delegations from all 23 satrapies of the Achaemenid Persian Empire offering gifts during the New Year Nowruz festival.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/9/97/Apadana_%28Civ6%29.png/revision/latest?cb=20201202204539",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/b/b7/Apadana_in-game_%28Civ6%29.png/revision/latest?cb=20180416013507",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/b/b7/Apadana_in-game_%28Civ6%29.png/revision/latest?cb=20180416013507",
    "techRequirement": "Political Philosophy",
    "productionCost": 400
},
  {
    "id": "civ6-big-ben",
    "name": "Big Ben",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1859 CE",
    "location": {
        "lat": 51.5007,
        "lng": -0.1246,
        "modernCountry": "United Kingdom",
        "modernRegion": "London, Westminster"
    },
    "placementRequirement": "Must be built along a River adjacent to a Commercial Hub district with a Bank.",
    "yields": {
        "gold": 6,
        "greatPersonPoints": "+3 Great Merchant points"
    },
    "bonuses": [
        "+1 Economic policy slot",
        "+50% Gold stored in the treasury at moment of completion",
        "Provides +6 Gold per turn"
    ],
    "quote": "Time is what we want most, but what we use worst.",
    "quoteAuthor": "William Penn",
    "quoteWork": "Some Fruits of Solitude",
    "civilopediaExcerpt": "The Great Bell of the Great Clock of Westminster, at the north end of the Houses of Parliament. Famous for its precision chimes and Victorian neo-Gothic majesty.",
    "historicalContext": "Designed by Augustus Pugin and Charles Barry, surviving the London Blitz as a worldwide symbol of British parliamentary resilience.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/7/77/Big_Ben_%28Civ6%29.png/revision/latest?cb=20201202201352",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/db/Big_Ben_in-game_%28Civ6%29.png/revision/latest?cb=20180416155649",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/db/Big_Ben_in-game_%28Civ6%29.png/revision/latest?cb=20180416155649",
    "techRequirement": "Economics",
    "productionCost": 1450
},
  {
    "id": "civ6-biosph-re",
    "name": "Biosph\u00e8re",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Information",
    "yearApprox": "1967 CE",
    "location": {
        "lat": 45.5141,
        "lng": -73.5315,
        "modernCountry": "Canada",
        "modernRegion": "Montreal, Saint Helen's Island"
    },
    "placementRequirement": "Must be built on flat land adjacent to a River and an Industrial Zone.",
    "yields": {
        "science": 8,
        "tourism": 200
    },
    "bonuses": [
        "+200% Tourism from Offshore Wind Farms, Solar Farms, Wind Farms, and Geothermal Plants",
        "+1 Power per power improvement"
    ],
    "quote": "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
    "quoteAuthor": "Buckminster Fuller",
    "quoteWork": "Critical Path (1981)",
    "civilopediaExcerpt": "The iconic geodesic dome designed by Buckminster Fuller for Expo 67 in Montreal, now an environmental museum dedicated to ecology and sustainable architecture.",
    "historicalContext": "Constructed with steel tubes and acrylic cells, Fuller's dome pioneered tensile geodesic engineering worldwide.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/7/75/Biosph%C3%A8re_%28Civ6%29.png/revision/latest?cb=20200924185639",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/d1/Biosphere_in-game_%28Civ6%29.jpg",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/d1/Biosphere_in-game_%28Civ6%29.jpg",
    "techRequirement": "Synthetic Materials",
    "productionCost": 1740
},
  {
    "id": "civ6-bolshoi-theatre",
    "name": "Bolshoi Theatre",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1825 CE",
    "location": {
        "lat": 55.7601,
        "lng": 37.6186,
        "modernCountry": "Russia",
        "modernRegion": "Moscow"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Theater Square district.",
    "yields": {
        "culture": 2,
        "greatPersonPoints": "+2 Great Writer, +2 Great Musician"
    },
    "bonuses": [
        "Awards 2 free random Civics from your current or prior eras",
        "1 Great Writing slot and 1 Great Music slot"
    ],
    "quote": "Ballet is not just dance, it is poetry made flesh.",
    "quoteAuthor": "Maya Plisetskaya",
    "quoteWork": "I, Maya Plisetskaya",
    "civilopediaExcerpt": "The historic home of Russia's ballet and opera companies in Moscow. Designed by Joseph Bov\u00e9 with a neoclassical facade crowned by Apollo's chariot.",
    "historicalContext": "Premiered Tchaikovsky's Swan Lake in 1877 and remains the preeminent center of classical Russian performing arts.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/7/79/Bolshoi_Theatre_%28Civ6%29.png/revision/latest?cb=20201202201411",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/a/a4/Bolshoi_Theatre_in-game.png/revision/latest?cb=20210202014543",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/a/a4/Bolshoi_Theatre_in-game.png/revision/latest?cb=20210202014543",
    "techRequirement": "Opera and Ballet",
    "productionCost": 1450
},
  {
    "id": "civ6-broadway",
    "name": "Broadway",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Modern",
    "yearApprox": "1920 CE",
    "location": {
        "lat": 40.759,
        "lng": -73.9845,
        "modernCountry": "United States",
        "modernRegion": "New York City, Manhattan"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Theater Square district.",
    "yields": {
        "culture": 3,
        "greatPersonPoints": "+3 Great Writer, +3 Great Musician"
    },
    "bonuses": [
        "1 free random Atomic Era Civic boost",
        "1 Great Writing slot and 2 Great Music slots",
        "+20% Tourism from Great Works in this city"
    ],
    "quote": "There is no business like show business, like no business I know.",
    "quoteAuthor": "Irving Berlin",
    "quoteWork": "Annie Get Your Gun (1946)",
    "civilopediaExcerpt": "The world-famous theatrical heart of Manhattan, representing American commercial theater, musicals, and the Great White Way.",
    "historicalContext": "Stretches through Times Square, defining twentieth-century musical theater, dance, and dramatic arts globally.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/05/Broadway_%28Civ6%29.png/revision/latest?cb=20201202201431",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/8d/Broadway_in-game_%28Civ6%29.png/revision/latest?cb=20210202014726",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/8d/Broadway_in-game_%28Civ6%29.png/revision/latest?cb=20210202014726",
    "techRequirement": "Mass Media",
    "productionCost": 1620
},
  {
    "id": "civ6-casa-de-contrataci-n",
    "name": "Casa de Contrataci\u00f3n",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1503 CE",
    "location": {
        "lat": 37.3837,
        "lng": -5.9922,
        "modernCountry": "Spain",
        "modernRegion": "Seville, Andalusia"
    },
    "placementRequirement": "Must be built adjacent to a Government Plaza.",
    "yields": {
        "greatPersonPoints": "+3 Governor Titles"
    },
    "bonuses": [
        "+3 Governor Titles",
        "All your cities on continents other than your capital gain +15% Production, +15% Faith, and +15% Gold if they have an established Governor"
    ],
    "quote": "Let no vessel depart for the Indies without license from our House of Trade.",
    "quoteAuthor": "Queen Isabella I of Castile",
    "quoteWork": "Royal Decree of 1503",
    "civilopediaExcerpt": "The Crown agency of the Spanish Empire that controlled all commercial exploration, taxation, and immigration to the New World from the port of Seville.",
    "historicalContext": "Housed the Padron Real, the official secret master navigation map of the Americas updated by pilots including Amerigo Vespucci.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2a/Casa_de_Contrataci%C3%B3n_%28Civ6%29.png/revision/latest?cb=20201202202911",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/f/f2/Casa_de_Contrataci%C3%B3n_in-game_%28Civ6%29.png/revision/latest?cb=20180416150555",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/f/f2/Casa_de_Contrataci%C3%B3n_in-game_%28Civ6%29.png/revision/latest?cb=20180416150555",
    "techRequirement": "Cartography",
    "productionCost": 920
},
  {
    "id": "civ6-chichen-itza",
    "name": "Chichen Itza",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "600 CE",
    "location": {
        "lat": 20.6843,
        "lng": -88.5678,
        "modernCountry": "Mexico",
        "modernRegion": "Yucatan Peninsula"
    },
    "placementRequirement": "Must be built on Rainforest.",
    "yields": {
        "culture": 2,
        "production": 1
    },
    "bonuses": [
        "+2 Culture and +1 Production to all Rainforest tiles in this city"
    ],
    "quote": "The temple rises above the emerald canopy like a feathered serpent descending to earth at each equinox.",
    "quoteAuthor": "John Lloyd Stephens",
    "quoteWork": "Incidents of Travel in Yucatan (1843)",
    "civilopediaExcerpt": "A major pre-Columbian city built by the Maya civilization. The central temple-pyramid of El Castillo casts the shadow of Kukulkan descending its balustrades on the spring and autumn equinoxes.",
    "historicalContext": "One of the largest Maya cities with an advanced astronomical calendar, ball courts, and the sacred cenote.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/5/51/Chichen_Itza_%28Civ6%29.png/revision/latest?cb=20201202201449",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/7/70/Chichen_Itza_in-game_%28Civ6%29.png/revision/latest?cb=20210202014924",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/7/70/Chichen_Itza_in-game_%28Civ6%29.png/revision/latest?cb=20210202014924",
    "techRequirement": "Guilds",
    "productionCost": 710
},
  {
    "id": "civ6-colosseum",
    "name": "Colosseum",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "80 CE",
    "location": {
        "lat": 41.8902,
        "lng": 12.4922,
        "modernCountry": "Italy",
        "modernRegion": "Rome, Lazio"
    },
    "placementRequirement": "Must be built on flat land adjacent to an Entertainment Complex.",
    "yields": {
        "culture": 2,
        "amenity": 2
    },
    "bonuses": [
        "+2 Amenities and +2 Culture to all city centers within 6 tiles"
    ],
    "quote": "While stands the Coliseum, Rome shall stand; When falls the Coliseum, Rome shall fall; And when Rome falls\u2014the World.",
    "quoteAuthor": "Venerable Bede",
    "quoteWork": "Collectanea",
    "civilopediaExcerpt": "The Flavian Amphitheatre in the center of Rome, the largest amphitheater ever built in antiquity. Held over 50,000 spectators for gladiatorial contests and public spectacles.",
    "historicalContext": "Commissioned by Emperor Vespasian and inaugurated by Titus, engineered with travertine stone, tuff, and Roman vaulted concrete.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/6/62/Colosseum_%28Civ6%29.png/revision/latest?cb=20201202201505",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/6/69/Colosseum_in-game_%28Civ6%29.png/revision/latest?cb=20180416015713",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/6/69/Colosseum_in-game_%28Civ6%29.png/revision/latest?cb=20180416015713",
    "techRequirement": "Games and Recreation",
    "productionCost": 400
},
  {
    "id": "civ6-colossus",
    "name": "Colossus",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "280 BCE",
    "location": {
        "lat": 36.4511,
        "lng": 28.2278,
        "modernCountry": "Greece",
        "modernRegion": "Rhodes, Aegean Sea"
    },
    "placementRequirement": "Must be built on Coast adjacent to a Harbor district.",
    "yields": {
        "gold": 3,
        "greatPersonPoints": "+1 Great Admiral, +1 Trade Route"
    },
    "bonuses": [
        "+1 Trade Route capacity and grants a free Trader unit",
        "+3 Gold per turn"
    ],
    "quote": "To thee, O Sun, the people of Dorian Rhodes raised this bronze statue reaching to Olympus.",
    "quoteAuthor": "Chares of Lindos",
    "quoteWork": "Colossus Dedication Inscription",
    "civilopediaExcerpt": "A bronze statue of the Greek sun-god Helios, erected in the city of Rhodes by Chares of Lindos to celebrate Rhodes' victory over Demetrius Poliorcetes.",
    "historicalContext": "Stood approximately 33 meters high before being toppled by the 226 BCE Rhodes earthquake.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/f8/Colossus_%28Civ6%29.png/revision/latest?cb=20201202201523",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c8/Colossus_%28Civ6%29_Launch_Trailer.png/revision/latest?cb=20251127133023",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c8/Colossus_%28Civ6%29_Launch_Trailer.png/revision/latest?cb=20251127133023",
    "techRequirement": "Shipbuilding",
    "productionCost": 400
},
  {
    "id": "civ6-cristo-redentor",
    "name": "Cristo Redentor",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Modern",
    "yearApprox": "1931 CE",
    "location": {
        "lat": -22.9519,
        "lng": -43.2105,
        "modernCountry": "Brazil",
        "modernRegion": "Rio de Janeiro, Mount Corcovado"
    },
    "placementRequirement": "Must be built on Hills.",
    "yields": {
        "culture": 4,
        "faith": 4
    },
    "bonuses": [
        "Tourism output from Relics and Holy Sites is not diminished by other civilizations with the Enlightenment civic",
        "Doubles Tourism from Seaside Resorts across your civilization"
    ],
    "quote": "His open arms welcome all mankind over the green mountains and sapphire waters of Guanabara.",
    "quoteAuthor": "Heitor da Silva Costa",
    "quoteWork": "Project Memorial of Christ the Redeemer",
    "civilopediaExcerpt": "An Art Deco statue of Jesus Christ atop Mount Corcovado overlooking Rio de Janeiro, Brazil. Created by French sculptor Paul Landowski and built by engineer Heitor da Silva Costa.",
    "historicalContext": "Made of reinforced concrete and clad in six million soapstone tiles, standing 30 meters tall with arms stretching 28 meters wide.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/b/bc/Cristo_Redentor_%28Civ6%29.png/revision/latest?cb=20201202201537",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c8/Cristo_Redentor_in-game_%28Civ6%29.png/revision/latest?cb=20210202015522",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c8/Cristo_Redentor_in-game_%28Civ6%29.png/revision/latest?cb=20210202015522",
    "techRequirement": "Mass Media",
    "productionCost": 1620
},
  {
    "id": "civ6-eiffel-tower",
    "name": "Eiffel Tower",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Modern",
    "yearApprox": "1889 CE",
    "location": {
        "lat": 48.8584,
        "lng": 2.2945,
        "modernCountry": "France",
        "modernRegion": "Paris, Champ de Mars"
    },
    "placementRequirement": "Must be built on flat land adjacent to your City Center.",
    "yields": {
        "appeal": 2
    },
    "bonuses": [
        "+2 Appeal to all tiles across your entire civilization",
        "Dramatically enhances National Parks and Seaside Resorts"
    ],
    "quote": "I ought to be jealous of the tower. She is more famous than I am.",
    "quoteAuthor": "Gustave Eiffel",
    "quoteWork": "Reflections on the 1889 Exposition",
    "civilopediaExcerpt": "A wrought-iron lattice tower on the Champ de Mars in Paris, constructed as the entrance arch to the 1889 World's Fair.",
    "historicalContext": "Surpassed the Washington Monument to become the tallest human-made structure in the world, holding the record for 41 years.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/fa/Eiffel_Tower_%28Civ6%29.png/revision/latest?cb=20201202201554",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c4/Eiffel_Tower_in-game_%28Civ6%29.png/revision/latest?cb=20180416155050",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c4/Eiffel_Tower_in-game_%28Civ6%29.png/revision/latest?cb=20180416155050",
    "techRequirement": "Steel",
    "productionCost": 1620
},
  {
    "id": "civ6-est-dio-do-maracan",
    "name": "Est\u00e1dio do Maracan\u00e3",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Atomic",
    "yearApprox": "1950 CE",
    "location": {
        "lat": -22.9122,
        "lng": -43.2302,
        "modernCountry": "Brazil",
        "modernRegion": "Rio de Janeiro"
    },
    "placementRequirement": "Must be built on flat land adjacent to an Entertainment Complex with a Stadium.",
    "yields": {
        "culture": 6,
        "amenity": 2
    },
    "bonuses": [
        "+2 Amenities to every single city in your entire empire",
        "+6 Culture per turn"
    ],
    "quote": "The roar of two hundred thousand voices shakes the concrete bowl like thunder across the bay.",
    "quoteAuthor": "Nelson Rodrigues",
    "quoteWork": "The Drama of Maracan\u00e3",
    "civilopediaExcerpt": "The monumental stadium in Rio de Janeiro, built for the 1950 FIFA World Cup. Known for holding record crowds approaching 200,000 spectators.",
    "historicalContext": "The spiritual temple of Brazilian football and site of two World Cup finals (1950, 2014) and the 2016 Summer Olympics.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/e/ec/Est%C3%A1dio_do_Maracan%C3%A3_%28Civ6%29.png/revision/latest?cb=20201202201614",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/cf/Est%C3%A1dio_do_Maracan%C3%A3_in-game_%28Civ6%29.png/revision/latest?cb=20210202020219",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/cf/Est%C3%A1dio_do_Maracan%C3%A3_in-game_%28Civ6%29.png/revision/latest?cb=20210202020219",
    "techRequirement": "Professional Sports",
    "productionCost": 1740
},
  {
    "id": "civ6-etemenanki",
    "name": "Etemenanki",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "600 BCE",
    "location": {
        "lat": 32.5364,
        "lng": 44.4208,
        "modernCountry": "Iraq",
        "modernRegion": "Babylon, Mesopotamia"
    },
    "placementRequirement": "Must be built on Marsh or Floodplains.",
    "yields": {
        "science": 2,
        "production": 1
    },
    "bonuses": [
        "+2 Science and +1 Production to all Marsh tiles in your empire",
        "+1 Science and +1 Production on all Floodplains in this city"
    ],
    "quote": "To raise the top of E-temen-anki so that it could contend with heaven, I set my hand.",
    "quoteAuthor": "Nebuchadnezzar II",
    "quoteWork": "Babylonian Inscription",
    "civilopediaExcerpt": "The great ziggurat dedicated to Marduk in the city of Babylon. Meaning 'temple of the foundation of heaven and earth,' it inspired the biblical account of the Tower of Babel.",
    "historicalContext": "Reached an estimated height of 91 meters, built with millions of baked mud-brick coated in gleaming bitumen.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/1/1f/Etemenanki_%28Civ6%29.png/revision/latest?cb=20210325194246",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/41/Etemenanki_completed_%28Civ6%29.png/revision/latest?cb=20210425010103",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/41/Etemenanki_completed_%28Civ6%29.png/revision/latest?cb=20210425010103",
    "techRequirement": "Writing",
    "productionCost": 220
},
  {
    "id": "civ6-forbidden-city",
    "name": "Forbidden City",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1420 CE",
    "location": {
        "lat": 39.9163,
        "lng": 116.3972,
        "modernCountry": "China",
        "modernRegion": "Beijing"
    },
    "placementRequirement": "Must be built on flat land adjacent to your City Center.",
    "yields": {
        "culture": 5,
        "greatPersonPoints": "+1 Wildcard Policy Slot"
    },
    "bonuses": [
        "+1 Wildcard policy slot in your government",
        "+5 Culture per turn"
    ],
    "quote": "The halls of the dragon throne were planned with mathematical celestial alignment, where earthly governance reflects the stars.",
    "quoteAuthor": "Yongle Emperor",
    "quoteWork": "Ming Imperial Records",
    "civilopediaExcerpt": "The Chinese imperial palace complex from the Ming dynasty to the end of the Qing dynasty. Consists of 980 buildings over 72 hectares.",
    "historicalContext": "Constructed from 1406 to 1420 by over one million workers, featuring timber from Phoebe zhennan trees and golden Suzhou bricks.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/d7/Forbidden_City_%28Civ6%29.png/revision/latest?cb=20201202201707",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/4a/Forbidden_City_in-game_%28Civ6%29.png/revision/latest?cb=20180416153439",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/4a/Forbidden_City_in-game_%28Civ6%29.png/revision/latest?cb=20180416153439",
    "techRequirement": "Printing",
    "productionCost": 920
},
  {
    "id": "civ6-golden-gate-bridge",
    "name": "Golden Gate Bridge",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Modern",
    "yearApprox": "1937 CE",
    "location": {
        "lat": 37.8199,
        "lng": -122.4783,
        "modernCountry": "United States",
        "modernRegion": "San Francisco, California"
    },
    "placementRequirement": "Must be built on Coast between two land tiles opposite each other.",
    "yields": {
        "tourism": 100,
        "appeal": 4
    },
    "bonuses": [
        "Acts as a bridge connecting land tiles over water",
        "+4 Appeal to all tiles in this city",
        "+100% Tourism from all National Parks and Seaside Resorts in this city"
    ],
    "quote": "The bridge that could not be built stands spanned in International Orange over the Pacific surge.",
    "quoteAuthor": "Joseph Strauss",
    "quoteWork": "The Mighty Task is Done",
    "civilopediaExcerpt": "The suspension bridge spanning the Golden Gate strait between San Francisco and Marin County. One of the internationally recognized symbols of American civil engineering.",
    "historicalContext": "Designed by Joseph Strauss and Irving Morrow, celebrated for its twin Art Deco towers and distinctive rust-resistant paint.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/3/31/Golden_Gate_Bridge_%28Civ6%29.png/revision/latest?cb=20201202202504",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/5/54/Golden_Gate_Bridge_in-game_%28Civ6%29.png/revision/latest?cb=20210128143723",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/5/54/Golden_Gate_Bridge_in-game_%28Civ6%29.png/revision/latest?cb=20210128143723",
    "techRequirement": "Combustion",
    "productionCost": 1620
},
  {
    "id": "civ6-great-bath",
    "name": "Great Bath",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "2500 BCE",
    "location": {
        "lat": 27.3292,
        "lng": 68.1389,
        "modernCountry": "Pakistan",
        "modernRegion": "Mohenjo-daro, Sindh"
    },
    "placementRequirement": "Must be built on Floodplains.",
    "yields": {
        "housing": 3,
        "amenity": 1
    },
    "bonuses": [
        "Floodplains in this city are immune to flood damage, while still gaining fertility",
        "+1 Faith to every tile in this city that experiences mitigated flooding"
    ],
    "quote": "The waters were drawn from deep brick wells, coated with natural bitumen to seal against leakage.",
    "quoteAuthor": "Sir John Marshall",
    "quoteWork": "Mohenjo-daro and the Indus Civilization",
    "civilopediaExcerpt": "One of the earliest public water tanks in the ancient world, located at Mohenjo-daro in Sindh, Pakistan. Built by the Indus Valley Civilization.",
    "historicalContext": "Features finely fitted gypsum plaster and waterproofing bitumen, serving ceremonial purification and urban sanitation.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/de/Great_Bath_%28Civ6%29.png/revision/latest?cb=20201202202534",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/cb/Great_Bath_in-game_%28Civ6%29.png/revision/latest?cb=20210202013916",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/cb/Great_Bath_in-game_%28Civ6%29.png/revision/latest?cb=20210202013916",
    "techRequirement": "Pottery",
    "productionCost": 180
},
  {
    "id": "civ6-great-library",
    "name": "Great Library",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "283 BCE",
    "location": {
        "lat": 31.2089,
        "lng": 29.9092,
        "modernCountry": "Egypt",
        "modernRegion": "Alexandria"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Campus with a Library.",
    "yields": {
        "science": 2,
        "greatPersonPoints": "+1 Great Scientist, +1 Great Writer"
    },
    "bonuses": [
        "Boosts all Ancient and Classical Era Technologies",
        "Automatically grants an Eureka boost whenever another player earns a Great Scientist",
        "2 Great Work of Writing slots"
    ],
    "quote": "He who would inspect all the books of the earth must journey to Alexandria.",
    "quoteAuthor": "Demetrius of Phalerum",
    "quoteWork": "Epistle to Ptolemy I",
    "civilopediaExcerpt": "The Royal Library of Alexandria in Ptolemaic Egypt was one of the largest and most significant libraries of the ancient world, dedicated to the Muses.",
    "historicalContext": "Contained hundreds of thousands of scrolls collecting the scientific, philosophical, and literary knowledge of the Mediterranean and Near East.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/5/57/Great_Library_%28Civ6%29.png/revision/latest?cb=20200824181823",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/46/Great_Library_in-game_%28Civ6%29.png/revision/latest?cb=20210202020817",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/46/Great_Library_in-game_%28Civ6%29.png/revision/latest?cb=20210202020817",
    "techRequirement": "Recorded History",
    "productionCost": 400
},
  {
    "id": "civ6-great-lighthouse",
    "name": "Great Lighthouse",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "280 BCE",
    "location": {
        "lat": 31.214,
        "lng": 29.885,
        "modernCountry": "Egypt",
        "modernRegion": "Alexandria, Pharos Island"
    },
    "placementRequirement": "Must be built on Coast adjacent to a Harbor district with a Lighthouse.",
    "yields": {
        "gold": 3,
        "greatPersonPoints": "+1 Great Admiral"
    },
    "bonuses": [
        "+1 Movement to all naval units empire-wide",
        "+3 Gold per turn"
    ],
    "quote": "A beacon by day of smoke, and by night of fire, guiding mariners past the reefs into safe haven.",
    "quoteAuthor": "Strabo",
    "quoteWork": "Geographica",
    "civilopediaExcerpt": "The Lighthouse of Alexandria, built by the Ptolemaic Kingdom on the island of Pharos. One of the Seven Wonders of the Ancient World.",
    "historicalContext": "Stood over 100 meters tall with a furnace mirror reflecting fire out to sea over 50 kilometers, damaged by earthquakes in the 14th century.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/dc/Great_Lighthouse_%28Civ6%29.png/revision/latest?cb=20201202201733",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/38/Great_Lighthouse_in-game_%28Civ6%29.png/revision/latest?cb=20210202020539",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/38/Great_Lighthouse_in-game_%28Civ6%29.png/revision/latest?cb=20210202020539",
    "techRequirement": "Celestial Navigation",
    "productionCost": 290
},
  {
    "id": "civ6-great-zimbabwe",
    "name": "Great Zimbabwe",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1100 CE",
    "location": {
        "lat": -20.2711,
        "lng": 30.9338,
        "modernCountry": "Zimbabwe",
        "modernRegion": "Masvingo Province"
    },
    "placementRequirement": "Must be built adjacent to Cattle and a Commercial Hub with a Market.",
    "yields": {
        "gold": 5,
        "greatPersonPoints": "+2 Great Merchant, +1 Trade Route"
    },
    "bonuses": [
        "+1 Trade Route capacity",
        "Trade Routes originating in this city gain +2 Gold for every bonus resource in this city's territory"
    ],
    "quote": "Among the gold mines of the inland plains stand great walled fortresses constructed of granite blocks without mortar.",
    "quoteAuthor": "Jo\u00e3o de Barros",
    "quoteWork": "D\u00e9cadas da \u00c1sia (1552)",
    "civilopediaExcerpt": "A medieval city in the southeastern hills of Zimbabwe that was the capital of the Kingdom of Zimbabwe during the Late Iron Age.",
    "historicalContext": "Renowned for its dry-stone granite walls up to 11 meters high built entirely without mortar, trading gold and ivory to Kilwa Kisiwani.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/f2/Great_Zimbabwe_%28Civ6%29.png/revision/latest?cb=20201202201749",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/07/Great_Zimbabwe_in-game_%28Civ6%29.png/revision/latest?cb=20210202021019",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/07/Great_Zimbabwe_in-game_%28Civ6%29.png/revision/latest?cb=20210202021019",
    "techRequirement": "Bank",
    "productionCost": 920
},
  {
    "id": "civ6-hagia-sophia",
    "name": "Hagia Sophia",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "537 CE",
    "location": {
        "lat": 41.0086,
        "lng": 28.9802,
        "modernCountry": "Turkey",
        "modernRegion": "Istanbul (Constantinople)"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Holy Site.",
    "yields": {
        "faith": 4,
        "greatPersonPoints": "+2 Great Prophet"
    },
    "bonuses": [
        "Missionaries and Apostles can spread Religion 1 extra time",
        "+4 Faith per turn"
    ],
    "quote": "Solomon, I have surpassed thee!",
    "quoteAuthor": "Emperor Justinian I",
    "quoteWork": "Dedication of Hagia Sophia (537 CE)",
    "civilopediaExcerpt": "The Cathedral of Holy Wisdom in Constantinople, the grandest monument of Byzantine architecture with a massive floating dome resting on pendentives.",
    "historicalContext": "Converted into an imperial mosque in 1453 by Mehmed the Conqueror, blending Christian golden mosaics with monumental Ottoman minarets.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/b/be/Hagia_Sophia_%28Civ6%29.png/revision/latest?cb=20201202201807",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/34/Hagia_Sophia_in-game_%28Civ6%29.png/revision/latest?cb=20180416152331",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/34/Hagia_Sophia_in-game_%28Civ6%29.png/revision/latest?cb=20180416152331",
    "techRequirement": "Buttress",
    "productionCost": 710
},
  {
    "id": "civ6-hanging-gardens",
    "name": "Hanging Gardens",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "600 BCE",
    "location": {
        "lat": 32.5422,
        "lng": 44.421,
        "modernCountry": "Iraq",
        "modernRegion": "Al-Hillah, Babil"
    },
    "placementRequirement": "Must be built adjacent to a River.",
    "yields": {
        "housing": 2
    },
    "bonuses": [
        "Increases growth rate by +15% in all cities across your civilization",
        "+2 Housing in host city"
    ],
    "quote": "The approach to the Garden sloped like a hillside and the several parts of the structure rose from one tier to another tier on tier.",
    "quoteAuthor": "Diodorus Siculus",
    "quoteWork": "Bibliotheca Historica",
    "civilopediaExcerpt": "One of the Seven Wonders of the Ancient World, built by King Nebuchadnezzar II for his wife Amytis of Media, who missed the verdant hills of her homeland.",
    "historicalContext": "A masterwork of ancient hydraulic engineering that pumped Euphrates water to terraced mountain gardens.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/6/68/Hanging_Gardens_%28Civ6%29.png/revision/latest?cb=20201202201826",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/7/7a/Hanging_Gardens_in-game_%28Civ6%29.png/revision/latest?cb=20210202021237",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/7/7a/Hanging_Gardens_in-game_%28Civ6%29.png/revision/latest?cb=20210202021237",
    "techRequirement": "Irrigation",
    "productionCost": 180
},
  {
    "id": "civ6-hermitage",
    "name": "Hermitage",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1764 CE",
    "location": {
        "lat": 59.9398,
        "lng": 30.3146,
        "modernCountry": "Russia",
        "modernRegion": "St. Petersburg, Palace Embankment"
    },
    "placementRequirement": "Must be built along a River.",
    "yields": {
        "culture": 3,
        "greatPersonPoints": "+3 Great Artist"
    },
    "bonuses": [
        "Provides 4 Great Work of Art slots",
        "+3 Great Artist points per turn"
    ],
    "quote": "Only the mice and I can contemplate all these treasures.",
    "quoteAuthor": "Catherine the Great",
    "quoteWork": "Letter to Baron Melchior Grimm",
    "civilopediaExcerpt": "The Winter Palace and museum founded by Empress Catherine the Great in Saint Petersburg, housing one of the largest art collections in the world.",
    "historicalContext": "Survives with over three million works of art spanning Leonardo da Vinci, Rembrandt, and Russian imperial court treasures.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/b/ba/Hermitage_%28Civ6%29.png/revision/latest?cb=20201202201843",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/4d/Hermitage_in-game_%28Civ6%29.png/revision/latest?cb=20210320174512",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/4d/Hermitage_in-game_%28Civ6%29.png/revision/latest?cb=20210320174512",
    "techRequirement": "Natural History",
    "productionCost": 1450
},
  {
    "id": "civ6-huey-teocalli",
    "name": "Huey Teocalli",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1325 CE",
    "location": {
        "lat": 19.435,
        "lng": -99.1314,
        "modernCountry": "Mexico",
        "modernRegion": "Mexico City (Tenochtitlan)"
    },
    "placementRequirement": "Must be built on Lake adjacent to land.",
    "yields": {
        "food": 1,
        "production": 1
    },
    "bonuses": [
        "+1 Amenity from entertainment for each Lake tile within 1 tile of Huey Teocalli",
        "+1 Food and +1 Production to each Lake tile in your empire"
    ],
    "quote": "And when we saw all those cities and villages built in the water, and other great towns on dry land, we were amazed.",
    "quoteAuthor": "Bernal D\u00edaz del Castillo",
    "quoteWork": "The Conquest of New Spain",
    "civilopediaExcerpt": "The Templo Mayor was the main temple of the Mexica peoples in their capital city of Tenochtitlan, dedicated to Huitzilopochtli, god of war, and Tlaloc, god of rain.",
    "historicalContext": "Stood over 60 meters high atop an island in Lake Texcoco, crowned by twin shrines.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/9/95/Huey_Teocalli_%28Civ6%29.png/revision/latest?cb=20201202201857",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/19/Huey_Teocalli_in-game_%28Civ6%29.jpg/revision/latest?cb=20161020015654",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/19/Huey_Teocalli_in-game_%28Civ6%29.jpg/revision/latest?cb=20161020015654",
    "techRequirement": "Military Training",
    "productionCost": 710
},
  {
    "id": "civ6-jebel-barkal",
    "name": "Jebel Barkal",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "1450 BCE",
    "location": {
        "lat": 18.5356,
        "lng": 31.8286,
        "modernCountry": "Sudan",
        "modernRegion": "Karima, Northern State"
    },
    "placementRequirement": "Must be built on Desert Hills.",
    "yields": {
        "faith": 4
    },
    "bonuses": [
        "Awards 2 free Iron resources",
        "Provides +4 Faith to all city centers within 6 tiles"
    ],
    "quote": "I made the mountain of the pure peak to be his dwelling, established forever.",
    "quoteAuthor": "King Piye",
    "quoteWork": "Victory Stele of Jebel Barkal",
    "civilopediaExcerpt": "A small mountain located about 400 km north of Khartoum, in Karima town in Sudan, on a large bend of the Nile River in Nubia.",
    "historicalContext": "Regarded as the southern residence of Amun-Ra, center of the Kingdom of Kush and the 25th Dynasty of pharaohs.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/1/1d/Jebel_Barkal_%28Civ6%29.png/revision/latest?cb=20200824182033",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/a/a0/Jebel_Barkal_in-game_%28Civ6%29.jpg/revision/latest?cb=20210320174723",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/a/a0/Jebel_Barkal_in-game_%28Civ6%29.jpg/revision/latest?cb=20210320174723",
    "techRequirement": "Iron Working",
    "productionCost": 400
},
  {
    "id": "civ6-kilwa-kisiwani",
    "name": "Kilwa Kisiwani",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1100 CE",
    "location": {
        "lat": -8.9581,
        "lng": 39.5158,
        "modernCountry": "Tanzania",
        "modernRegion": "Kilwa Island, Lindi Region"
    },
    "placementRequirement": "Must be built on flat land adjacent to Coast.",
    "yields": {
        "greatPersonPoints": "+3 Envoys"
    },
    "bonuses": [
        "Grants 3 Envoys when completed",
        "Being Suzerain of a city-state grants +15% of that type's yield in this city; 2 or more of same type grants +15% empire-wide"
    ],
    "quote": "Kilwa is one of the most beautiful and well-constructed towns in the world.",
    "quoteAuthor": "Ibn Battuta",
    "quoteWork": "The Rihla (1331)",
    "civilopediaExcerpt": "The historic sultanate and island port city off modern Tanzania that was the jewel of the medieval Swahili Coast maritime trade.",
    "historicalContext": "Controlled gold shipments from Great Zimbabwe to Arabia, Persia, and India, issuing its own copper coinage.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/5/51/Kilwa_Kisiwani_%28Civ6%29.png/revision/latest?cb=20201202203026",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/6/68/Kilwa_Kisiwani_in-game_%28Civ6%29.jpg/revision/latest?cb=20210320174957",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/6/68/Kilwa_Kisiwani_in-game_%28Civ6%29.jpg/revision/latest?cb=20210320174957",
    "techRequirement": "Machinery",
    "productionCost": 710
},
  {
    "id": "civ6-kotoku-in",
    "name": "Kotoku-in",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1252 CE",
    "location": {
        "lat": 35.3168,
        "lng": 139.5357,
        "modernCountry": "Japan",
        "modernRegion": "Kamakura, Kanagawa"
    },
    "placementRequirement": "Must be built adjacent to a Holy Site with a Temple.",
    "yields": {
        "faith": 2
    },
    "bonuses": [
        "Grants 4 Warrior Monks to your empire",
        "+20% Faith in this city"
    ],
    "quote": "A statue of bronze eleven meters high, sitting in peaceful meditation while the ocean winds pass through the valley.",
    "quoteAuthor": "Lafcadio Hearn",
    "quoteWork": "Glimpses of Unfamiliar Japan (1894)",
    "civilopediaExcerpt": "A Buddhist temple of the Jodo-shu sect in Kamakura, Japan, world-renowned for the monumental Great Buddha (Daibutsu) of Kamakura.",
    "historicalContext": "Survives in the open air after the wooden temple hall housing it was destroyed by a tsunami in 1498.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/6/6e/Kotoku-in_%28Civ6%29.png/revision/latest?cb=20201202203054",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/b/bf/Kotoku-in_in-game_%28Civ6%29.png/revision/latest?cb=20180416151817",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/b/bf/Kotoku-in_in-game_%28Civ6%29.png/revision/latest?cb=20180416151817",
    "techRequirement": "Divine Right",
    "productionCost": 710
},
  {
    "id": "civ6-mahabodhi-temple",
    "name": "Mahabodhi Temple",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "250 BCE",
    "location": {
        "lat": 24.696,
        "lng": 84.9913,
        "modernCountry": "India",
        "modernRegion": "Bodh Gaya, Bihar"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Holy Site and a Forest.",
    "yields": {
        "faith": 4,
        "greatPersonPoints": "+1 Great Prophet"
    },
    "bonuses": [
        "Awards 2 free Apostles",
        "+4 Faith per turn"
    ],
    "quote": "Here the Buddha attained Supreme Enlightenment under the Bodhi tree.",
    "quoteAuthor": "Ashoka the Great",
    "quoteWork": "Major Rock Edicts",
    "civilopediaExcerpt": "An ancient Buddhist temple in Bodh Gaya, marking the location where the Buddha is said to have attained enlightenment under the Bodhi tree.",
    "historicalContext": "Originally founded by Emperor Ashoka in the 3rd century BCE, reconstructed in pyramidal brick architecture during the Gupta era.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/89/Mahabodhi_Temple_%28Civ6%29.png/revision/latest?cb=20201202201911",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/8a/Mahabodhi_Temple_in-game_%28Civ6%29.png/revision/latest?cb=20180416151953",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/8a/Mahabodhi_Temple_in-game_%28Civ6%29.png/revision/latest?cb=20180416151953",
    "techRequirement": "Theology",
    "productionCost": 400
},
  {
    "id": "civ6-mausoleum-at-halicarnassus",
    "name": "Mausoleum at Halicarnassus",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "350 BCE",
    "location": {
        "lat": 37.0379,
        "lng": 27.4241,
        "modernCountry": "Turkey",
        "modernRegion": "Bodrum (Halicarnassus)"
    },
    "placementRequirement": "Must be built adjacent to a Harbor district.",
    "yields": {
        "science": 1,
        "faith": 1,
        "culture": 1
    },
    "bonuses": [
        "Great Admirals and Great Engineers gain +1 additional charge",
        "+1 Science, +1 Faith, and +1 Culture on all Coast tiles in this city"
    ],
    "quote": "It is not of mere size that we speak, but of the marble sculptured horses and gods made by the hands of Scopas and Bryaxis.",
    "quoteAuthor": "Pliny the Elder",
    "quoteWork": "Natural History",
    "civilopediaExcerpt": "A tomb built between 353 and 350 BCE at Halicarnassus for Mausolus, a satrap of the Achaemenid Empire. Its architectural beauty originated the word mausoleum.",
    "historicalContext": "Stood 45 meters high with relief friezes on all four sides, destroyed by successive earthquakes between the 12th and 15th centuries.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/80/Mausoleum_at_Halicarnassus_%28Civ6%29.png/revision/latest?cb=20201202204643",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/a/ad/Mausoleum_at_Halicarnassusin-game_%28Civ6%29.png/revision/latest?cb=20180416014008",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/a/ad/Mausoleum_at_Halicarnassusin-game_%28Civ6%29.png/revision/latest?cb=20180416014008",
    "techRequirement": "Defensive Tactics",
    "productionCost": 400
},
  {
    "id": "civ6-meenakshi-temple",
    "name": "Meenakshi Temple",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1623 CE",
    "location": {
        "lat": 9.9195,
        "lng": 78.1193,
        "modernCountry": "India",
        "modernRegion": "Madurai, Tamil Nadu"
    },
    "placementRequirement": "Must be built adjacent to a Holy Site.",
    "yields": {
        "faith": 3
    },
    "bonuses": [
        "Awards 2 free Gurus",
        "Gurus in your empire are 30% cheaper to purchase and religious units adjacent to Gurus receive +5 Religious Strength and +0.5 Movement"
    ],
    "quote": "Fourteen towering gopuram gates reach toward the sky, covered in thousands of painted stone figures of deities and mythical beasts.",
    "quoteAuthor": "Tirumala Nayaka",
    "quoteWork": "Chronicles of Madurai",
    "civilopediaExcerpt": "A historic Hindu temple complex on the southern bank of the Vaigai River in Madurai, Tamil Nadu, dedicated to goddess Meenakshi and Lord Sundareswarar.",
    "historicalContext": "The heart of Tamil architecture with 14 gopuram gateway towers, the tallest reaching over 52 meters.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/dd/Meenakshi_Temple_%28Civ6%29.png/revision/latest?cb=20201202202608",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/9/94/Meenakshi_Temple_in-game_%28Civ6%29.png/revision/latest?cb=20210202014310",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/9/94/Meenakshi_Temple_in-game_%28Civ6%29.png/revision/latest?cb=20210202014310",
    "techRequirement": "Civil Service",
    "productionCost": 710
},
  {
    "id": "civ6-mont-saint-michel",
    "name": "Mont Saint-Michel",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1000 CE",
    "location": {
        "lat": 48.636,
        "lng": -1.5115,
        "modernCountry": "France",
        "modernRegion": "Normandy / Brittany Coast"
    },
    "placementRequirement": "Must be built on Marsh or Floodplains.",
    "yields": {
        "faith": 2,
        "greatPersonPoints": "+2 Relic slots"
    },
    "bonuses": [
        "All Apostles you train gain the 'Martyr' promotion (creates a Relic if killed in religious combat)",
        "Provides 2 Relic slots"
    ],
    "quote": "Church on the rock, castle in the sea, sanctuary against all tides.",
    "quoteAuthor": "Victor Hugo",
    "quoteWork": "Ninety-Three (1874)",
    "civilopediaExcerpt": "A tidal island and abbey in Normandy, France. At high tide, the sea sweeps in across the bay at the speed of a galloping horse, turning the mount into an impregnable fortress.",
    "historicalContext": "Dedicated to the Archangel Michael, a focal point of medieval pilgrimage and French resistance during the Hundred Years' War.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2b/Mont_St._Michel_%28Civ6%29.png/revision/latest?cb=20201202201926",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/1a/Wonder_Mont_St_Michel_%28Civ6%29.jpg/revision/latest?cb=20161201184908",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/1a/Wonder_Mont_St_Michel_%28Civ6%29.jpg/revision/latest?cb=20161201184908",
    "techRequirement": "Divine Right",
    "productionCost": 710
},
  {
    "id": "civ6-oracle",
    "name": "Oracle",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "800 BCE",
    "location": {
        "lat": 38.4824,
        "lng": 22.501,
        "modernCountry": "Greece",
        "modernRegion": "Delphi, Phocis"
    },
    "placementRequirement": "Must be built on Hills.",
    "yields": {
        "culture": 1,
        "faith": 1
    },
    "bonuses": [
        "Patronage of Great People costs 25% less Faith",
        "Districts in this city provide +2 Great Person points of their type"
    ],
    "quote": "Know thyself, and nothing in excess.",
    "quoteAuthor": "Pythia / Delphic Maxim",
    "quoteWork": "Temple of Apollo at Delphi",
    "civilopediaExcerpt": "The sanctuary of Apollo at Delphi, where the priestess Pythia delivered enigmatic prophecies that guided kings, legislators, and generals throughout the classical Greek world.",
    "historicalContext": "Located on the slopes of Mount Parnassus overlooking the Gulf of Corinth, celebrated as the center of the world marked by the omphalos stone.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/1/13/Oracle_%28Civ6%29.png/revision/latest?cb=20201202201944",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/44/Oracle_wonder_movie_%28Civ6%29.jpg/revision/latest?cb=20210320175623",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/44/Oracle_wonder_movie_%28Civ6%29.jpg/revision/latest?cb=20210320175623",
    "techRequirement": "Mysticism",
    "productionCost": 290
},
  {
    "id": "civ6-oxford-university",
    "name": "Oxford University",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1096 CE",
    "location": {
        "lat": 51.7548,
        "lng": -1.2544,
        "modernCountry": "United Kingdom",
        "modernRegion": "Oxford, Oxfordshire"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Campus with a University.",
    "yields": {
        "science": 3,
        "greatPersonPoints": "+3 Great Scientist"
    },
    "bonuses": [
        "Awards 2 free random Technologies from your current or prior eras",
        "+20% Science in this city",
        "2 Great Work of Writing slots"
    ],
    "quote": "The university is a sanctuary where the flame of knowledge is passed across the centuries.",
    "quoteAuthor": "Thomas Aquinas",
    "quoteWork": "Disputations",
    "civilopediaExcerpt": "The oldest university in the English-speaking world, with teaching existing in some form since 1096. Grew rapidly from 1167 when Henry II banned English students from attending Paris.",
    "historicalContext": "Produced 30 British prime ministers, 73 Nobel laureates, and centuries of foundational scientific discoveries.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/3/30/Oxford_University_%28Civ6%29.png/revision/latest?cb=20201202202001",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/8b/Oxford_University_in-game_%28Civ6%29.png/revision/latest?cb=20210320175809",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/8b/Oxford_University_in-game_%28Civ6%29.png/revision/latest?cb=20210320175809",
    "techRequirement": "Scientific Theory",
    "productionCost": 1450
},
  {
    "id": "civ6-panama-canal",
    "name": "Panama Canal",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1914 CE",
    "location": {
        "lat": 9.08,
        "lng": -79.68,
        "modernCountry": "Panama",
        "modernRegion": "Isthmus of Panama"
    },
    "placementRequirement": "Must be built on a flat land tile connecting two water bodies.",
    "yields": {
        "gold": 10
    },
    "bonuses": [
        "Creates a navigable water passage between two bodies of water",
        "Trade routes passing through the canal gain +150% Gold"
    ],
    "quote": "A man, a plan, a canal: Panama.",
    "quoteAuthor": "Leigh Mercer",
    "quoteWork": "Palindrome (1948)",
    "civilopediaExcerpt": "An artificial 82 km waterway in Panama that connects the Atlantic Ocean with the Pacific Ocean, cutting through the Isthmus of Panama.",
    "historicalContext": "One of the greatest and most difficult engineering projects ever undertaken, saving ships a perilous 15,000 km voyage around Cape Horn.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2c/Panama_Canal_%28Civ6%29.png/revision/latest?cb=20201202202652",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/2/2b/Panama_Canal_in-game_%28Civ6%29.png/revision/latest?cb=20210128145226",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/2/2b/Panama_Canal_in-game_%28Civ6%29.png/revision/latest?cb=20210128145226",
    "techRequirement": "Steam Power",
    "productionCost": 1450
},
  {
    "id": "civ6-petra",
    "name": "Petra",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "312 BCE",
    "location": {
        "lat": 30.3285,
        "lng": 35.4444,
        "modernCountry": "Jordan",
        "modernRegion": "Ma'an Governorate"
    },
    "placementRequirement": "Must be built on Desert or Floodplains.",
    "yields": {
        "food": 2,
        "gold": 2,
        "production": 1
    },
    "bonuses": [
        "+2 Food, +2 Gold, and +1 Production on all Desert tiles in this city (excluding Floodplains)"
    ],
    "quote": "Match me such marvel save in Eastern clime, A rose-red city half as old as time.",
    "quoteAuthor": "John William Burgon",
    "quoteWork": "Petra (1845)",
    "civilopediaExcerpt": "The rose-red city of the Nabataeans, carved directly into vibrant sandstone canyon cliffs. Controlled caravan spice routes linking Arabia, Egypt, and Syria.",
    "historicalContext": "Engineered with sophisticated rock-cut cisterns, channels, and ceramic pipes that harvested flash floods into an oasis.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/8d/Petra_%28Civ6%29.png/revision/latest?cb=20200824181603",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/4a/Petra_wonder.png/revision/latest?cb=20161020021712",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/4a/Petra_wonder.png/revision/latest?cb=20161020021712",
    "techRequirement": "Mathematics",
    "productionCost": 400
},
  {
    "id": "civ6-potala-palace",
    "name": "Potala Palace",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1649 CE",
    "location": {
        "lat": 29.6555,
        "lng": 91.1186,
        "modernCountry": "Tibet / China",
        "modernRegion": "Lhasa Valley"
    },
    "placementRequirement": "Must be built on Hills adjacent to a Mountain.",
    "yields": {
        "culture": 2,
        "faith": 3
    },
    "bonuses": [
        "+1 Diplomatic policy slot in your government",
        "+2 Culture and +3 Faith per turn"
    ],
    "quote": "The red and white halls stand perched between heaven and earth atop the Red Hill of Lhasa.",
    "quoteAuthor": "5th Dalai Lama",
    "quoteWork": "Autobiography (1681)",
    "civilopediaExcerpt": "The winter palace of the Dalai Lamas from 1649 to 1959, located in Lhasa, Tibet. Stands atop Marpo Ri (the Red Hill) at 3,700 meters above sea level.",
    "historicalContext": "Thirteen stories high with over 1,000 rooms and 10,000 shrines, housing sacred stupas adorned in solid gold and jewels.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/86/Potala_Palace_%28Civ6%29.png/revision/latest?cb=20201202202020",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/7/7b/Potala_Palace_in-game_%28Civ6%29.png/revision/latest?cb=20210320180027",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/7/7b/Potala_Palace_in-game_%28Civ6%29.png/revision/latest?cb=20210320180027",
    "techRequirement": "Astronomy",
    "productionCost": 1060
},
  {
    "id": "civ6-pyramids",
    "name": "Pyramids",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "2560 BCE",
    "location": {
        "lat": 29.9792,
        "lng": 31.1342,
        "modernCountry": "Egypt",
        "modernRegion": "Giza, Cairo"
    },
    "placementRequirement": "Must be built on Desert or Floodplains without Hills.",
    "yields": {
        "culture": 2
    },
    "bonuses": [
        "Grants a free Builder unit upon completion",
        "All Builders can build 1 extra improvement throughout the rest of the game"
    ],
    "quote": "Man fears Time, but Time fears the Pyramids.",
    "quoteAuthor": "Arab Proverb",
    "quoteWork": "Oral Tradition",
    "civilopediaExcerpt": "The Great Pyramid of Giza, built for Pharaoh Khufu of the Fourth Dynasty. The oldest of the Seven Wonders of the Ancient World and the only one to remain largely intact.",
    "historicalContext": "Built with over 2.3 million blocks of limestone and granite, remaining the tallest human-made structure in the world for over 3,800 years.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/7/72/Pyramids_%28Civ6%29.png/revision/latest?cb=20201202202037",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/da/Pyramids_in-game_%28Civ6%29.png/revision/latest?cb=20210320180155",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/da/Pyramids_in-game_%28Civ6%29.png/revision/latest?cb=20210320180155",
    "techRequirement": "Masonry",
    "productionCost": 220
},
  {
    "id": "civ6-ruhr-valley",
    "name": "Ruhr Valley",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1850 CE",
    "location": {
        "lat": 51.4556,
        "lng": 7.0116,
        "modernCountry": "Germany",
        "modernRegion": "North Rhine-Westphalia"
    },
    "placementRequirement": "Must be built along a River adjacent to an Industrial Zone with a Factory.",
    "yields": {
        "production": 1
    },
    "bonuses": [
        "+20% Production in this city",
        "+1 Production for each Mine and Quarry in this city"
    ],
    "quote": "The industrial heart of Germany practically stopped beating. Hardly anyone worked; hardly anything ran.",
    "quoteAuthor": "Adam Fergusson",
    "quoteWork": "When Money Dies",
    "civilopediaExcerpt": "The polycentric industrial powerhouse of North Rhine-Westphalia in western Germany, defined by coal mining, steel mills, and heavy engineering.",
    "historicalContext": "Fueled Germany's nineteenth-century industrial revolution and technological rise along the Ruhr and Rhine rivers.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/5/51/Ruhr_Valley_%28Civ6%29.png/revision/latest?cb=20201202202052",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c4/Ruhr_Valley_wonder_movie_%28Civ6%29.jpg/revision/latest?cb=20161126223410",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c4/Ruhr_Valley_wonder_movie_%28Civ6%29.jpg/revision/latest?cb=20161126223410",
    "techRequirement": "Industrialization",
    "productionCost": 1240
},
  {
    "id": "civ6-st-basil-s-cathedral",
    "name": "St. Basil's Cathedral",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1561 CE",
    "location": {
        "lat": 55.7525,
        "lng": 37.6231,
        "modernCountry": "Russia",
        "modernRegion": "Moscow, Red Square"
    },
    "placementRequirement": "Must be built adjacent to your City Center.",
    "yields": {
        "culture": 1,
        "faith": 1,
        "tourism": 100
    },
    "bonuses": [
        "+100% Religious Tourism from this city",
        "+1 Culture, +1 Faith, and +1 Production on all Tundra tiles in this city",
        "Provides 3 Relic slots"
    ],
    "quote": "Rising like the flames of a bonfire climbing into the Russian sky.",
    "quoteAuthor": "Ivan the Terrible",
    "quoteWork": "Dedication of the Intercession",
    "civilopediaExcerpt": "The Cathedral of the Intercession of the Most Holy Theotokos on the Moat, commonly known as Saint Basil's Cathedral on Red Square in Moscow.",
    "historicalContext": "Commissioned by Ivan IV to commemorate the capture of Kazan and Astrakhan, renowned for its colorful pattern onion domes.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/f4/St._Basil%27s_Cathedral_%28Civ6%29.png/revision/latest?cb=20201202203111",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/b/bd/St._Basil%27s_Cathedral_in-game_%28Civ6%29.png/revision/latest?cb=20180416151303",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/b/bd/St._Basil%27s_Cathedral_in-game_%28Civ6%29.png/revision/latest?cb=20180416151303",
    "techRequirement": "Reformed Church",
    "productionCost": 920
},
  {
    "id": "civ6-statue-of-liberty",
    "name": "Statue of Liberty",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Industrial",
    "yearApprox": "1886 CE",
    "location": {
        "lat": 40.6892,
        "lng": -74.0445,
        "modernCountry": "United States",
        "modernRegion": "New York Harbor"
    },
    "placementRequirement": "Must be built on Coast adjacent to a Harbor district.",
    "yields": {
        "diplomacy": 4
    },
    "bonuses": [
        "Awards 4 Diplomatic Victory Points",
        "All cities within 6 tiles are always 100% loyal to your civilization"
    ],
    "quote": "Give me your tired, your poor, Your huddled masses yearning to breathe free.",
    "quoteAuthor": "Emma Lazarus",
    "quoteWork": "The New Colossus (1883)",
    "civilopediaExcerpt": "A colossal neoclassical copper sculpture on Liberty Island in New York Harbor, designed by Fr\u00e9d\u00e9ric Auguste Bartholdi and engineered by Gustave Eiffel.",
    "historicalContext": "A gift from the people of France to the United States, welcoming millions of immigrants arriving by sea.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/b/b2/Statue_of_Liberty_%28Civ6%29.png/revision/latest?cb=20201202203132",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/1f/Statue_of_Liberty_%28Civ6%29_Rise_and_Fall_Announcement_Trailer.png/revision/latest?cb=20260915131103",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/1f/Statue_of_Liberty_%28Civ6%29_Rise_and_Fall_Announcement_Trailer.png/revision/latest?cb=20260915131103",
    "techRequirement": "Civil Engineering",
    "productionCost": 1450
},
  {
    "id": "civ6-statue-of-zeus",
    "name": "Statue of Zeus",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "435 BCE",
    "location": {
        "lat": 37.6379,
        "lng": 21.63,
        "modernCountry": "Greece",
        "modernRegion": "Olympia, Peloponnese"
    },
    "placementRequirement": "Must be built on flat land adjacent to an Encampment district with a Barracks.",
    "yields": {
        "gold": 3
    },
    "bonuses": [
        "Awards 3 Spearmen, 3 Archers, and 1 Battering Ram to your empire",
        "+50% Production toward anti-cavalry units"
    ],
    "quote": "He spoke, and the dark brows of Cronion bent; the ambrosial locks of the king shook upon his immortal head, and Olympus trembled.",
    "quoteAuthor": "Homer",
    "quoteWork": "The Iliad",
    "civilopediaExcerpt": "A giant chryselephantine sculpture of the king of the Greek gods, sculpted by Phidias inside the Temple of Zeus at Olympia.",
    "historicalContext": "Stood 12.4 meters high, depicting Zeus seated on an ivory throne adorned with cedarwood, ebony, and gold.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/a/af/Statue_of_Zeus_%28Civ6%29.png/revision/latest?cb=20200924185639",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/3a/Statue_of_Zeus_in-game_%28Civ6%29.jpg/revision/latest?cb=20200925004942",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/3a/Statue_of_Zeus_in-game_%28Civ6%29.jpg/revision/latest?cb=20200925004942",
    "techRequirement": "Military Training",
    "productionCost": 400
},
  {
    "id": "civ6-stonehenge",
    "name": "Stonehenge",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "2500 BCE",
    "location": {
        "lat": 51.1789,
        "lng": -1.8262,
        "modernCountry": "United Kingdom",
        "modernRegion": "Wiltshire, England"
    },
    "placementRequirement": "Must be built on flat land adjacent to Stone.",
    "yields": {
        "faith": 2,
        "greatPersonPoints": "+1 Free Great Prophet"
    },
    "bonuses": [
        "Grants a free Great Prophet (can found a Religion without a Holy Site)",
        "+2 Faith per turn"
    ],
    "quote": "Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?",
    "quoteAuthor": "Book of Job",
    "quoteWork": "Hebrew Bible (Job 38:31)",
    "civilopediaExcerpt": "A prehistoric megalithic monument on Salisbury Plain in Wiltshire, England. Consists of an outer ring of vertical sarsen standing stones topped by horizontal lintels.",
    "historicalContext": "Constructed in several stages from 3000 to 2000 BCE, aligned toward the sunrise on the summer solstice.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/86/Stonehenge_%28Civ6%29.png/revision/latest?cb=20201202202109",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/b/b6/Stonehenge_in-game_%28Civ6%29.png/revision/latest?cb=20180416020515",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/b/b6/Stonehenge_in-game_%28Civ6%29.png/revision/latest?cb=20180416020515",
    "techRequirement": "Astrology",
    "productionCost": 180
},
  {
    "id": "civ6-sydney-opera-house",
    "name": "Sydney Opera House",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Atomic",
    "yearApprox": "1973 CE",
    "location": {
        "lat": -33.8568,
        "lng": 151.2153,
        "modernCountry": "Australia",
        "modernRegion": "Sydney Harbor, Bennelong Point"
    },
    "placementRequirement": "Must be built on Coast adjacent to a Harbor district.",
    "yields": {
        "culture": 8,
        "greatPersonPoints": "+5 Great Musician"
    },
    "bonuses": [
        "3 Great Work of Music slots",
        "+8 Culture per turn",
        "+50% Music Tourism in this city"
    ],
    "quote": "The sun did not know how beautiful its light was, until it fell upon this building.",
    "quoteAuthor": "Louis Kahn",
    "quoteWork": "On Utzon's Opera House",
    "civilopediaExcerpt": "A multi-venue performing arts centre at Sydney Harbour. Designed by Danish architect J\u00f8rn Utzon, featuring distinctive precast concrete interlocking roof shells.",
    "historicalContext": "One of the 20th century's most famous and distinctive buildings, inaugurated by Queen Elizabeth II in 1973.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/07/Sydney_Opera_House_%28Civ6%29.png/revision/latest?cb=20201202202126",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/5/50/Sydney_Opera_House_in-game_%28Civ6%29.png/revision/latest?cb=20180416154429",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/5/50/Sydney_Opera_House_in-game_%28Civ6%29.png/revision/latest?cb=20180416154429",
    "techRequirement": "Cultural Heritage",
    "productionCost": 1620
},
  {
    "id": "civ6-taj-mahal",
    "name": "Taj Mahal",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1653 CE",
    "location": {
        "lat": 27.1751,
        "lng": 78.0421,
        "modernCountry": "India",
        "modernRegion": "Agra, Uttar Pradesh"
    },
    "placementRequirement": "Must be built along a River.",
    "yields": {},
    "bonuses": [
        "Historic Moments that would grant 2 or more Era Score grant an additional +1 Era Score",
        "Ensures easy entry into Golden and Heroic Eras"
    ],
    "quote": "Not a piece of architecture, as other buildings are, but a proud emperor's love wrought in living stones.",
    "quoteAuthor": "Sir Edwin Arnold",
    "quoteWork": "India Revisited",
    "civilopediaExcerpt": "An ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    "historicalContext": "The pinnacle of Mughal architecture, employing thousands of artisans and inlaid with semiprecious lapis lazuli and jade.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/a/a8/Taj_Mahal_%28Civ6%29.png/revision/latest?cb=20201202203148",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/01/Taj_Mahal_in-game_%28Civ6%29.png/revision/latest?cb=20180416153808",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/01/Taj_Mahal_in-game_%28Civ6%29.png/revision/latest?cb=20180416153808",
    "techRequirement": "Humanism",
    "productionCost": 920
},
  {
    "id": "civ6-temple-of-artemis",
    "name": "Temple of Artemis",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Ancient",
    "yearApprox": "550 BCE",
    "location": {
        "lat": 37.9497,
        "lng": 27.3639,
        "modernCountry": "Turkey",
        "modernRegion": "Ephesus, Izmir Province"
    },
    "placementRequirement": "Must be built on flat land adjacent to a Camp.",
    "yields": {
        "housing": 3,
        "amenity": 1
    },
    "bonuses": [
        "+1 Amenity from entertainment for every Camp, Pasture, and Plantation improvement within 4 tiles",
        "+3 Housing in host city"
    ],
    "quote": "When I saw the sacred house of Artemis that towers to the clouds, the others were placed in the shade.",
    "quoteAuthor": "Antipater of Sidon",
    "quoteWork": "Greek Anthology",
    "civilopediaExcerpt": "A Greek temple dedicated to an ancient local form of the goddess Artemis at Ephesus. One of the Seven Wonders of the Ancient World.",
    "historicalContext": "Funded by King Croesus of Lydia and engineered by Chersiphron with 127 ionic marble columns.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/0f/Temple_of_Artemis_%28Civ6%29.png/revision/latest?cb=20201202203207",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/0c/Temple_of_Artemis_in-game_%28Civ6%29.png/revision/latest?cb=20180416162100",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/0c/Temple_of_Artemis_in-game_%28Civ6%29.png/revision/latest?cb=20180416162100",
    "techRequirement": "Archery",
    "productionCost": 180
},
  {
    "id": "civ6-terracotta-army",
    "name": "Terracotta Army",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Classical",
    "yearApprox": "210 BCE",
    "location": {
        "lat": 34.3841,
        "lng": 109.2785,
        "modernCountry": "China",
        "modernRegion": "Xi'an, Shaanxi"
    },
    "placementRequirement": "Must be built on flat land adjacent to an Encampment district with a Barracks or Stable.",
    "yields": {
        "greatPersonPoints": "+1 Great General"
    },
    "bonuses": [
        "All current land military units gain 1 free promotion level",
        "Archaeologists can enter foreign territory without Open Borders"
    ],
    "quote": "Eight thousand clay soldiers stood in battle formation, guarding the first sovereign emperor on his subterranean march into eternity.",
    "quoteAuthor": "Sima Qian",
    "quoteWork": "Records of the Grand Historian",
    "civilopediaExcerpt": "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China, buried with him to protect him in the afterlife.",
    "historicalContext": "Discovered by farmers in 1974, each soldier possesses unique facial features, armor, hairstyles, and weaponry.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/9/9a/Terracotta_Army_%28Civ6%29.png/revision/latest?cb=20201202202144",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c7/Terracotta_Army_in-game_%28Civ6%29.png/revision/latest?cb=20210320180340",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c7/Terracotta_Army_in-game_%28Civ6%29.png/revision/latest?cb=20210320180340",
    "techRequirement": "Construction",
    "productionCost": 400
},
  {
    "id": "civ6-torre-de-bel-m",
    "name": "Torre de Bel\u00e9m",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1519 CE",
    "location": {
        "lat": 38.6916,
        "lng": -9.216,
        "modernCountry": "Portugal",
        "modernRegion": "Lisbon, Tagus River"
    },
    "placementRequirement": "Must be built on Coast adjacent to a Harbor district.",
    "yields": {
        "gold": 5,
        "greatPersonPoints": "+1 Great Admiral"
    },
    "bonuses": [
        "International Trade Routes from this city gain +2 Gold for every luxury resource at destination",
        "Cities on foreign continents receive the cheapest building they can currently construct upon founding"
    ],
    "quote": "Standing guard over the Tagus, she bade farewell to the caravels sailing past the edge of the known earth.",
    "quoteAuthor": "Lu\u00eds de Cam\u00f5es",
    "quoteWork": "Os Lus\u00edadas",
    "civilopediaExcerpt": "The Tower of Saint Vincent, a 16th-century fortification on the northern bank of the Tagus River in Lisbon. A prominent example of the Portuguese Manueline style.",
    "historicalContext": "Served as a ceremonial gateway and defensive redoubt for Portuguese explorers embarking on the maritime route to India and Brazil.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/1/18/Torre_de_Bel%C3%A9m_%28Civ6%29.png/revision/latest?cb=20210325194325",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/b/b2/Torre_de_Bel%C3%A9m_in-game_%28Civ6%29.png/revision/latest?cb=20210415055340",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/b/b2/Torre_de_Bel%C3%A9m_in-game_%28Civ6%29.png/revision/latest?cb=20210415055340",
    "techRequirement": "Mercantilism",
    "productionCost": 920
},
  {
    "id": "civ6-university-of-sankore",
    "name": "University of Sankore",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Medieval",
    "yearApprox": "1327 CE",
    "location": {
        "lat": 16.7758,
        "lng": -3.0075,
        "modernCountry": "Mali",
        "modernRegion": "Timbuktu"
    },
    "placementRequirement": "Must be built on Desert or Desert Hills adjacent to a Campus with a University.",
    "yields": {
        "science": 3,
        "faith": 1,
        "greatPersonPoints": "+2 Great Scientist"
    },
    "bonuses": [
        "+2 Science and +1 Gold to all domestic trade routes to this city",
        "Foreign trade routes to this city yield +2 Science for the sender and +2 Gold for you"
    ],
    "quote": "Salt comes from the north, gold from the south, but the word of God and the treasures of wisdom are only to be found in Timbuktu.",
    "quoteAuthor": "Sudanese Proverb",
    "quoteWork": "West African Oral History",
    "civilopediaExcerpt": "The Sankore Madrasah in Timbuktu, Mali, was one of three ancient centers of learning in the city, capable of housing 25,000 scholars during the Mali and Songhai Empires.",
    "historicalContext": "Financed by Mansa Musa and local merchants, amassing thousands of scientific and theological manuscripts in West Africa.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/d5/University_of_Sankore_%28Civ6%29.png/revision/latest?cb=20201202202716",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/88/University_of_Sankore_in-game_%28Civ6%29.png/revision/latest?cb=20210201203716",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/88/University_of_Sankore_in-game_%28Civ6%29.png/revision/latest?cb=20210201203716",
    "techRequirement": "Education",
    "productionCost": 710
},
  {
    "id": "civ6-venetian-arsenal",
    "name": "Venetian Arsenal",
    "game": "civ6",
    "type": "world_wonder",
    "era": "Renaissance",
    "yearApprox": "1104 CE",
    "location": {
        "lat": 45.4347,
        "lng": 12.3524,
        "modernCountry": "Italy",
        "modernRegion": "Venice, Veneto"
    },
    "placementRequirement": "Must be built on Coast adjacent to an Industrial Zone.",
    "yields": {
        "greatPersonPoints": "+2 Great Engineer"
    },
    "bonuses": [
        "Receive a second naval unit every time you train a naval combat unit in your empire"
    ],
    "quote": "As in the Arsenal of the Venetians boils in the winter the tenacious pitch to smear their unsound vessels.",
    "quoteAuthor": "Dante Alighieri",
    "quoteWork": "Inferno (Canto XXI)",
    "civilopediaExcerpt": "A complex of state-owned shipyards and armories in Venice that was responsible for the naval power of the Venetian Republic throughout the Middle Ages and Renaissance.",
    "historicalContext": "Pioneered mass assembly-line production centuries before the Industrial Revolution, assembling a full war galley in a single day.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/f3/Venetian_Arsenal_%28Civ6%29.png/revision/latest?cb=20201202202202",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/13/Venetian_Arsenal_in-game_%28Civ6%29.png/revision/latest?cb=20180416150050",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/13/Venetian_Arsenal_in-game_%28Civ6%29.png/revision/latest?cb=20180416150050",
    "techRequirement": "Mass Production",
    "productionCost": 920
},
  {
    "id": "civ6-bermuda-triangle",
    "name": "Bermuda Triangle",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 25.0,
        "lng": -71.0,
        "modernCountry": "Atlantic Ocean",
        "modernRegion": "North Atlantic"
    },
    "yields": {
        "science": 5
    },
    "bonuses": [
        "3-tile passable ocean natural wonder",
        "+5 Science to adjacent tiles",
        "Naval units entering it gain the 'Mysterious Currents' promotion (+1 Movement) and teleport to an Ocean tile on the other side of the globe"
    ],
    "quote": "There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath.",
    "quoteAuthor": "Herman Melville",
    "quoteWork": "Moby-Dick (1851)",
    "civilopediaExcerpt": "A loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances.",
    "historicalContext": "In Civ VI, passing through its magnetic storms flings ships across the planet while blessing them with extraordinary maritime speed.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/28/Bermuda_Triangle_%28Civ6%29.png/revision/latest?cb=20200522062852",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/81/Natural_Wonder_Bermuda_Triangle_%28Civ6%29.png/revision/latest?cb=20200523151459",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/81/Natural_Wonder_Bermuda_Triangle_%28Civ6%29.png/revision/latest?cb=20200523151459"
},
  {
    "id": "civ6-chocolate-hills",
    "name": "Chocolate Hills",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 9.9167,
        "lng": 124.1667,
        "modernCountry": "Philippines",
        "modernRegion": "Bohol Province"
    },
    "yields": {
        "food": 1,
        "production": 2,
        "science": 1
    },
    "bonuses": [
        "4-tile impassable natural wonder",
        "Provides +1 Food, +2 Production, and +1 Science to adjacent tiles",
        "Provides fresh water to adjacent tiles"
    ],
    "quote": "Hundreds of conical green mounds that turn cocoa brown in the dry heat of the Philippine sun.",
    "quoteAuthor": "Antonio Pigafetta",
    "quoteWork": "First Voyage Around the World",
    "civilopediaExcerpt": "A geological formation in the Bohol province of the Philippines, consisting of at least 1,260 individual limestone cone karst mounds covered in grass that browns during the dry season.",
    "historicalContext": "Formed from marine limestone uplifted by tectonic forces and sculpted by millennia of tropical rainwater erosion.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/27/Chocolate_Hills_%28Civ6%29.png/revision/latest?cb=20190214224306",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/f/fc/Chocolate_Hills_discovery_%28Civ6%29.png/revision/latest?cb=20200307061556",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/f/fc/Chocolate_Hills_discovery_%28Civ6%29.png/revision/latest?cb=20200307061556"
},
  {
    "id": "civ6-cliffs-of-dover",
    "name": "Cliffs of Dover",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 51.1378,
        "lng": 1.3488,
        "modernCountry": "United Kingdom",
        "modernRegion": "Dover, Kent, English Channel"
    },
    "yields": {
        "culture": 3,
        "gold": 3,
        "food": 2
    },
    "bonuses": [
        "2-tile natural wonder",
        "Provides +3 Culture, +3 Gold, and +2 Food on the wonder tiles",
        "+4 Appeal to adjacent tiles"
    ],
    "quote": "There'll be bluebirds over the white cliffs of Dover, tomorrow, just you wait and see.",
    "quoteAuthor": "Nat Burton",
    "quoteWork": "The White Cliffs of Dover (1941)",
    "civilopediaExcerpt": "The iconic white chalk cliffs facing the Strait of Dover and France, marking the narrowest part of the English Channel.",
    "historicalContext": "Composed of pure white calcium carbonate coccoliths deposited during the Cretaceous period over 70 million years ago.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/c/c2/Cliffs_of_Dover_%28Civ6%29.png/revision/latest?cb=20170327210445",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/d5/Natural_Wonder_Cliffs_of_Dover_%28Civ6%29.jpg/revision/latest?cb=20161117165517",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/d5/Natural_Wonder_Cliffs_of_Dover_%28Civ6%29.jpg/revision/latest?cb=20161117165517"
},
  {
    "id": "civ6-crater-lake",
    "name": "Crater Lake",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 42.9446,
        "lng": -122.109,
        "modernCountry": "United States",
        "modernRegion": "Cascade Range, Oregon"
    },
    "yields": {
        "science": 1,
        "faith": 5
    },
    "bonuses": [
        "1-tile natural wonder lake",
        "Provides +1 Science and +5 Faith on its tile",
        "Provides fresh water to adjacent tiles and +4 Appeal"
    ],
    "quote": "Never was water so blue, resting in a rim of volcanic stone like a jewel fallen from the sky.",
    "quoteAuthor": "Joaquin Miller",
    "quoteWork": "Songs of the Sierras",
    "civilopediaExcerpt": "A volcanic crater lake in south-central Oregon, filling the caldera formed around 7,700 years ago by the collapse of Mount Mazama.",
    "historicalContext": "The deepest lake in the United States (594 m), celebrated for its deep indigo purity fed entirely by snowfall and rain.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/f6/Crater_Lake_%28Civ6%29.png/revision/latest?cb=20170327210448",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/5/5b/Natural_Wonder_Crater_Lake_%28Civ6%29.png/revision/latest?cb=20200715185615",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/5/5b/Natural_Wonder_Crater_Lake_%28Civ6%29.png/revision/latest?cb=20200715185615"
},
  {
    "id": "civ6-dead-sea",
    "name": "Dead Sea",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 31.559,
        "lng": 35.4732,
        "modernCountry": "Jordan & Israel",
        "modernRegion": "Jordan Rift Valley"
    },
    "yields": {
        "faith": 2,
        "culture": 2
    },
    "bonuses": [
        "2-tile lake natural wonder",
        "Provides +2 Faith, +2 Culture, and fresh water to adjacent tiles",
        "Units healing adjacent to Dead Sea heal completely in 1 turn"
    ],
    "quote": "The waters are so dense that no swimmer may sink, and the salt gleams like crystal across the barren shores.",
    "quoteAuthor": "Flavius Josephus",
    "quoteWork": "The Jewish War",
    "civilopediaExcerpt": "A hypersaline lake in the Jordan Rift Valley, 430 meters below sea level, marking the lowest land elevation on Earth.",
    "historicalContext": "Nearly ten times saltier than the ocean, attracting travelers since antiquity for its healing mineral-rich waters.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/e/e4/Dead_Sea_%28Civ6%29.png/revision/latest?cb=20170327210449",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/0e/Natural_Wonder_Dead_Sea_%28Civ6%29.png/revision/latest?cb=20200718171123",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/0e/Natural_Wonder_Dead_Sea_%28Civ6%29.png/revision/latest?cb=20200718171123"
},
  {
    "id": "civ6-delicate-arch",
    "name": "Delicate Arch",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 38.7436,
        "lng": -109.4993,
        "modernCountry": "United States",
        "modernRegion": "Arches National Park, Utah"
    },
    "yields": {
        "faith": 2,
        "gold": 1
    },
    "bonuses": [
        "1-tile impassable natural wonder",
        "Provides +2 Faith and +1 Gold to adjacent tiles",
        "+4 Appeal to adjacent tiles"
    ],
    "quote": "A fragile circle of sandstone sculpted by wind and ice, framing the snowcapped peaks beyond.",
    "quoteAuthor": "Edward Abbey",
    "quoteWork": "Desert Solitaire (1968)",
    "civilopediaExcerpt": "A 16-meter-tall freestanding natural arch in Arches National Park near Moab, Utah. Carved out of Entrada Sandstone over millions of years.",
    "historicalContext": "One of the most famous and photographed natural geological arches on Earth, featured on Utah state license plates.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/a/aa/Delicate_Arch_%28Civ6%29.png/revision/latest?cb=20200523225232",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/d2/Delicate_Arch_discovery_%28Civ6%29.png/revision/latest?cb=20180213044725",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/d2/Delicate_Arch_discovery_%28Civ6%29.png/revision/latest?cb=20180213044725"
},
  {
    "id": "civ6-eye-of-the-sahara",
    "name": "Eye of the Sahara",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 21.1269,
        "lng": -11.4016,
        "modernCountry": "Mauritania",
        "modernRegion": "Ouadane, Adrar Plateau"
    },
    "yields": {
        "science": 1,
        "production": 1,
        "gold": 3
    },
    "bonuses": [
        "3-tile natural wonder",
        "Provides +1 Science, +1 Production, and +3 Gold to adjacent tiles",
        "Provides +2 Science, +2 Production, and +3 Gold during the Atomic Era and beyond"
    ],
    "quote": "A bulls-eye in the desert sand, visible to astronauts drifting across the dark curve of Africa.",
    "quoteAuthor": "Gemini 4 Mission Logs",
    "quoteWork": "NASA Archives (1965)",
    "civilopediaExcerpt": "The Richat Structure is a deeply eroded, 40-kilometer circular geological dome in the Sahara desert near Ouadane in west-central Mauritania.",
    "historicalContext": "Concentric rings of resistant quartzite and igneous rock, long used as a prominent visual landmark by orbital space crews.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/e/e5/Eye_of_the_Sahara_%28Civ6%29.png/revision/latest?cb=20180411161340",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/9/9c/Eye_of_the_Sahara_discovery_%28Civ6%29.png/revision/latest?cb=20180214041013",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/9/9c/Eye_of_the_Sahara_discovery_%28Civ6%29.png/revision/latest?cb=20180214041013"
},
  {
    "id": "civ6-eyjafjallaj-kull",
    "name": "Eyjafjallaj\u00f6kull",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 63.6333,
        "lng": -19.6,
        "modernCountry": "Iceland",
        "modernRegion": "Su\u00f0urland, Southern Iceland"
    },
    "yields": {
        "culture": 2,
        "food": 1
    },
    "bonuses": [
        "2-tile volcanic mountain natural wonder",
        "+2 Culture and +1 Food to adjacent tiles",
        "Volcanic eruptions provide high soil fertility"
    ],
    "quote": "Fire sleeping beneath three hundred meters of glacial ice.",
    "quoteAuthor": "Icelandic Saga Tradition",
    "quoteWork": "Landnamabok",
    "civilopediaExcerpt": "An ice-capped stratovolcano in southern Iceland, reaching 1,651 meters. Famous for its dramatic 2010 eruptions that disrupted transatlantic air travel.",
    "historicalContext": "The ice cap covers an area of about 100 square kilometers, feeding multiple meltwater glacier tongues.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/e/e5/Eyjafjallaj%C3%B6kull_%28Civ6%29.png/revision/latest?cb=20180411161443",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/5/52/Natural_Wonder_Eyjafjallaj%C3%B6kull_%28Civ6%29.png/revision/latest?cb=20210126141059",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/5/52/Natural_Wonder_Eyjafjallaj%C3%B6kull_%28Civ6%29.png/revision/latest?cb=20210126141059"
},
  {
    "id": "civ6-fountain-of-youth",
    "name": "Fountain of Youth",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 25.72,
        "lng": -79.28,
        "modernCountry": "The Bahamas",
        "modernRegion": "Bimini Islands"
    },
    "yields": {
        "science": 4,
        "faith": 4
    },
    "bonuses": [
        "1-tile natural wonder",
        "Provides +4 Science and +4 Faith on its tile, and acts as fresh water",
        "Units moving adjacent to it gain the 'Water of Life' ability (heals +10 HP per turn in all territory)"
    ],
    "quote": "A spring whose miraculous waters restore youthful vigor to any who bathe in its depths.",
    "quoteAuthor": "Juan Ponce de Le\u00f3n",
    "quoteWork": "Voyage to Florida (1513)",
    "civilopediaExcerpt": "A legendary spring that reputedly restores the youth of anyone who drinks or bathes in its waters, pursued by Spanish explorers throughout the Caribbean.",
    "historicalContext": "In Civ VI, unlocks the mystical 'Water of Life' regeneration promotion for any passing unit.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/5/57/Fountain_of_Youth_%28Civ6%29.png/revision/latest?cb=20200522063000",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/df/Natural_Wonder_Fountain_of_Youth_%28Civ6%29.png/revision/latest?cb=20200523145344",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/df/Natural_Wonder_Fountain_of_Youth_%28Civ6%29.png/revision/latest?cb=20200523145344"
},
  {
    "id": "civ6-gal-pagos-islands",
    "name": "Gal\u00e1pagos Islands",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -0.9538,
        "lng": -90.9656,
        "modernCountry": "Ecuador",
        "modernRegion": "Gal\u00e1pagos Province, Pacific Ocean"
    },
    "yields": {
        "science": 2
    },
    "bonuses": [
        "2-tile natural wonder",
        "Provides +2 Science to adjacent ocean tiles"
    ],
    "quote": "Hence, both in space and time, we seem to be brought somewhat near to that great fact\u2014that mystery of mysteries\u2014the first appearance of new beings on this earth.",
    "quoteAuthor": "Charles Darwin",
    "quoteWork": "The Voyage of the Beagle (1839)",
    "civilopediaExcerpt": "A volcanic archipelago in the Pacific Ocean around the equator, 906 km west of continental Ecuador. Famed for its endemic species that inspired Darwin's theory of evolution.",
    "historicalContext": "Isolated for millions of years at the junction of three tectonic plates and three major ocean currents.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/a/ae/Gal%C3%A1pagos_Islands_%28Civ6%29.png/revision/latest?cb=20170327210453",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/39/Natural_Wonder_Gal%C3%A1pagos_Islands_%28Civ6%29.png/revision/latest?cb=20200715195356",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/39/Natural_Wonder_Gal%C3%A1pagos_Islands_%28Civ6%29.png/revision/latest?cb=20200715195356"
},
  {
    "id": "civ6-giant-s-causeway",
    "name": "Giant's Causeway",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 55.2408,
        "lng": -6.5116,
        "modernCountry": "United Kingdom",
        "modernRegion": "County Antrim, Northern Ireland"
    },
    "yields": {
        "culture": 1,
        "science": 2
    },
    "bonuses": [
        "2-tile natural wonder",
        "Provides +1 Culture and +2 Science to adjacent tiles",
        "Military units passing adjacent gain the 'Spear of Fionn' ability (+5 Combat Strength)"
    ],
    "quote": "Stepping stones paved by the giant Finn McCool across the stormy North Channel to Scotland.",
    "quoteAuthor": "Irish Folk Legend",
    "quoteWork": "Ulster Cycle",
    "civilopediaExcerpt": "An area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption in County Antrim, Northern Ireland.",
    "historicalContext": "The tops of the hexagonal pillars form stepping stones leading from the cliff foot into the North Sea.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2c/Giant%27s_Causeway_%28Civ6%29.png/revision/latest?cb=20180411161530",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/48/Natural_Wonder_Giant%27s_Causeway_%28Civ6%29.png/revision/latest?cb=20180430162715",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/48/Natural_Wonder_Giant%27s_Causeway_%28Civ6%29.png/revision/latest?cb=20180430162715"
},
  {
    "id": "civ6-gobustan",
    "name": "Gobustan",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 40.1167,
        "lng": 49.3833,
        "modernCountry": "Azerbaijan",
        "modernRegion": "Baku, Caspian Sea"
    },
    "yields": {
        "culture": 3,
        "production": 1
    },
    "bonuses": [
        "3-tile impassable natural wonder",
        "Provides +3 Culture and +1 Production to adjacent tiles"
    ],
    "quote": "Thousands of prehistoric petroglyphs carved into limestone boulders beside bubbling mud volcanoes.",
    "quoteAuthor": "Thor Heyerdahl",
    "quoteWork": "Scandinavian-Azeri Studies",
    "civilopediaExcerpt": "Gobustan National Park in Azerbaijan, famous for its over 6,000 rock carvings depicting hunting, dances, and prehistoric reeds boats dating back 40,000 years.",
    "historicalContext": "Features active mud volcanoes and ancient rock art overlooking the shores of the Caspian Sea.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/c/c5/Gobustan_%28Civ6%29.png/revision/latest?cb=20190214223450",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/12/Gobustan_discovery_%28Civ6%29.jpg/revision/latest?cb=20200307060300",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/12/Gobustan_discovery_%28Civ6%29.jpg/revision/latest?cb=20200307060300"
},
  {
    "id": "civ6-ha-long-bay",
    "name": "Ha Long Bay",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 20.9101,
        "lng": 107.1839,
        "modernCountry": "Vietnam",
        "modernRegion": "Quang Ninh Province, Gulf of Tonkin"
    },
    "yields": {
        "food": 3,
        "culture": 1,
        "production": 1
    },
    "bonuses": [
        "2-tile water natural wonder",
        "Provides +3 Food, +1 Culture, and +1 Production on wonder tiles",
        "+1 Defense Strength to naval units on these tiles"
    ],
    "quote": "Where the dragon descended into the emerald bay, spitting jewels that turned into thousands of jade islands.",
    "quoteAuthor": "Vietnamese Legend",
    "quoteWork": "Mythology of the Descending Dragon",
    "civilopediaExcerpt": "A UNESCO World Heritage Site in northeast Vietnam, renowned for its emerald waters and thousands of towering limestone islands topped by rainforests.",
    "historicalContext": "Formed through 500 million years of limestone karst evolution and tropical climate weathering.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/e/e7/H%E1%BA%A1_Long_Bay_%28Civ6%29.png/revision/latest?cb=20180411162129",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/2/28/Natural_Wonder_Ha_Long_Bay_closeup_%28Civ6%29.png/revision/latest?cb=20171027013203",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/2/28/Natural_Wonder_Ha_Long_Bay_closeup_%28Civ6%29.png/revision/latest?cb=20171027013203"
},
  {
    "id": "civ6-ik-kil",
    "name": "Ik-Kil",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 20.6608,
        "lng": -88.5503,
        "modernCountry": "Mexico",
        "modernRegion": "Yucatan Peninsula (near Chichen Itza)"
    },
    "yields": {
        "science": 1,
        "faith": 2
    },
    "bonuses": [
        "1-tile natural wonder",
        "Provides +50% Production toward Wonders and Districts built in adjacent tiles",
        "Provides fresh water"
    ],
    "quote": "A sacred subterranean well open to the sky, where turquoise waters plunge twenty-six meters below the jungle floor.",
    "quoteAuthor": "Maya Oral Tradition",
    "quoteWork": "Sacred Cenotes of Yucatan",
    "civilopediaExcerpt": "A deep natural sinkhole cenote near Chichen Itza in the Yucatan. The water level is 26 meters below ground level, surrounded by hanging tropical vines.",
    "historicalContext": "Sacred to the Maya civilization, dedicated to the rain god Chaac for religious rites.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/b/b2/Ik-Kil_%28Civ6%29.png/revision/latest?cb=20190214222447",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/37/Natural_Wonder_Ik-Kil_%28Civ6%29.png/revision/latest?cb=20200718170633",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/37/Natural_Wonder_Ik-Kil_%28Civ6%29.png/revision/latest?cb=20200718170633"
},
  {
    "id": "civ6-lysefjorden",
    "name": "Lysefjorden",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 58.9872,
        "lng": 6.1364,
        "modernCountry": "Norway",
        "modernRegion": "Rogaland, Southwestern Norway"
    },
    "yields": {
        "production": 1,
        "gold": 3
    },
    "bonuses": [
        "1-tile coastal natural wonder",
        "+1 Production and +3 Gold to adjacent water tiles",
        "Naval units passing adjacent gain +1 Movement"
    ],
    "quote": "The light fjord cuts between vertical granite cliffs rising a thousand meters sheer from the dark sea.",
    "quoteAuthor": "Norwegian Royal Travelogue",
    "quoteWork": "Explorations of Rogaland",
    "civilopediaExcerpt": "A 42-kilometer fjord in Rogaland, Norway. Meaning 'light fjord,' it is renowned for Preikestolen (Pulpit Rock) towering 604 meters sheer above the water.",
    "historicalContext": "Carved by massive Quaternary glaciers during successive ice ages in Scandinavian bedrock.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/f/fa/Lysefjord_%28Civ6%29.png/revision/latest?cb=20180411160606",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/6/66/Natural_Wonder_Lysefjord_closeup_%28Civ6%29.png/revision/latest?cb=20200715194451",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/6/66/Natural_Wonder_Lysefjord_closeup_%28Civ6%29.png/revision/latest?cb=20200715194451"
},
  {
    "id": "civ6-mato-tipila",
    "name": "Mato Tipila",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 44.5902,
        "lng": -104.7146,
        "modernCountry": "United States",
        "modernRegion": "Crook County, Wyoming"
    },
    "yields": {
        "faith": 1,
        "production": 2
    },
    "bonuses": [
        "1-tile impassable natural wonder",
        "Provides +1 Faith and +2 Production to adjacent tiles",
        "+4 Appeal to adjacent tiles"
    ],
    "quote": "The great bear clawed the volcanic rock, carving vertical furrows as the children were carried into the sky.",
    "quoteAuthor": "Lakota & Kiowa Sacred Tradition",
    "quoteWork": "Legend of Mato Tipila (Devils Tower)",
    "civilopediaExcerpt": "Devils Tower, sacred as Bear's Lodge (Mato Tipila) to Northern Plains tribes. A solitary igneous rock intrusion of phonolite porphyry rising 386 meters above the Belle Fourche River.",
    "historicalContext": "Designated the first United States National Monument by President Theodore Roosevelt in 1906.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/3/30/Mato_Tipila_%28Civ6%29.png/revision/latest?cb=20190214221920",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/2/21/Natural_Wonder_Mato_Tipila_%28Civ6%29.png/revision/latest?cb=20200523223227",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/2/21/Natural_Wonder_Mato_Tipila_%28Civ6%29.png/revision/latest?cb=20200523223227"
},
  {
    "id": "civ6-matterhorn",
    "name": "Matterhorn",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 45.9765,
        "lng": 7.6585,
        "modernCountry": "Switzerland & Italy",
        "modernRegion": "Pennine Alps, Zermatt"
    },
    "yields": {
        "culture": 2
    },
    "bonuses": [
        "1-tile impassable mountain natural wonder",
        "Provides +2 Culture to adjacent tiles",
        "Land units passing adjacent gain the 'Alpine Training' promotion (moves over Hills as if flat terrain, +3 Combat on Hills)"
    ],
    "quote": "A monumental pyramid of ice and gneiss standing solitary above the high valleys of the Alps.",
    "quoteAuthor": "Edward Whymper",
    "quoteWork": "Scrambles Amongst the Alps (1871)",
    "civilopediaExcerpt": "A mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. Its near-symmetric pyramidal peak reaches 4,478 meters.",
    "historicalContext": "One of the deadliest peaks in the Alps, first climbed in 1865 by Edward Whymper's expedition.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/4/4b/Matterhorn_%28Civ6%29.png/revision/latest?cb=20180411162211",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/8/8e/Natural_Wonder_Matterhorn_%28Civ6%29.png/revision/latest?cb=20200523224114",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/8/8e/Natural_Wonder_Matterhorn_%28Civ6%29.png/revision/latest?cb=20200523224114"
},
  {
    "id": "civ6-mount-everest",
    "name": "Mount Everest",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 27.9881,
        "lng": 86.925,
        "modernCountry": "Nepal & China",
        "modernRegion": "Himalayas, Mahalangur Himal"
    },
    "yields": {
        "faith": 3
    },
    "bonuses": [
        "3-tile impassable mountain natural wonder",
        "+3 Faith to adjacent tiles",
        "Religious units moving adjacent gain the 'Altitude Sickness' immune movement ability"
    ],
    "quote": "Because it's there.",
    "quoteAuthor": "George Mallory",
    "quoteWork": "New York Times Interview (1923)",
    "civilopediaExcerpt": "Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. Reaches 8,848.86 meters.",
    "historicalContext": "Known in Nepali as Sagarmatha and in Tibetan as Chomolungma ('Goddess Mother of the World').",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/0b/Mount_Everest_%28Civ6%29.png/revision/latest?cb=20170327210501",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/4c/Natural_Wonder_Mount_Everest_%28Civ6%29.png/revision/latest?cb=20200715214411",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/4c/Natural_Wonder_Mount_Everest_%28Civ6%29.png/revision/latest?cb=20200715214411"
},
  {
    "id": "civ6-mount-roraima",
    "name": "Mount Roraima",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 5.1433,
        "lng": -60.7625,
        "modernCountry": "Venezuela, Brazil & Guyana",
        "modernRegion": "Guiana Highlands, Canaima"
    },
    "yields": {
        "faith": 1,
        "science": 1
    },
    "bonuses": [
        "4-tile impassable mountain natural wonder",
        "Provides +1 Faith and +1 Science to adjacent tiles",
        "Provides +4 Appeal to adjacent tiles"
    ],
    "quote": "An island floating in the clouds, where unique life has lived cut off from the forest floor for hundreds of millions of years.",
    "quoteAuthor": "Sir Arthur Conan Doyle",
    "quoteWork": "The Lost World (1912)",
    "civilopediaExcerpt": "The highest of the Pakaraima chain of tepui plateaus in South America, its 31-square-kilometer summit area bounded on all sides by 400-meter cliffs.",
    "historicalContext": "Among the oldest geological formations on Earth, dating back two billion years to the Precambrian.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/9/91/Mount_Roraima_%28Civ6%29.png/revision/latest?cb=20180411162239",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/4/46/Natural_Wonder_Mount_Roraima_%28Civ6%29.png/revision/latest?cb=20200523225534",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/4/46/Natural_Wonder_Mount_Roraima_%28Civ6%29.png/revision/latest?cb=20200523225534"
},
  {
    "id": "civ6-paititi",
    "name": "Paititi",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -12.5,
        "lng": -71.0,
        "modernCountry": "Peru",
        "modernRegion": "Madre de Dios, Amazon Rainforest"
    },
    "yields": {
        "gold": 3,
        "culture": 2
    },
    "bonuses": [
        "3-tile natural wonder",
        "Provides +3 Gold and +2 Culture to adjacent tiles",
        "Provides +4 Gold and +3 Culture to adjacent tiles during the Industrial Era and beyond"
    ],
    "quote": "A lost golden realm hidden deep in the eastern jungle beyond the Andes mountains.",
    "quoteAuthor": "Andean Legend",
    "quoteWork": "Chronicles of the Incan Empire",
    "civilopediaExcerpt": "A legendary Inca lost city or utopian rich state said to lie east of the Andes, hidden within the remote rainforests of southeast Peru.",
    "historicalContext": "In Civ VI, an extraordinary source of early Culture and Gold, inspiring explorations into the deep Amazon.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/4/44/Pa%C3%AFtiti_%28Civ6%29.png/revision/latest?cb=20200522063037",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/3/3c/Natural_Wonder_Paititi_%28Civ6%29.png/revision/latest?cb=20210126142510",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/3/3c/Natural_Wonder_Paititi_%28Civ6%29.png/revision/latest?cb=20210126142510"
},
  {
    "id": "civ6-pamukkale",
    "name": "Pamukkale",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 37.925,
        "lng": 29.1219,
        "modernCountry": "Turkey",
        "modernRegion": "Denizli Province, Aegean Turkey"
    },
    "yields": {
        "culture": 2,
        "gold": 1
    },
    "bonuses": [
        "2-tile natural wonder",
        "Provides +2 Culture and +1 Gold to adjacent tiles, and acts as fresh water",
        "Major adjacency bonus to Theater Square, Campus, and Commercial Hub districts (+2 each)"
    ],
    "quote": "Terraces of pure white travertine holding thermal turquoise waters, glowing under the Anatolian sky.",
    "quoteAuthor": "Hierapolis Inscriptions",
    "quoteWork": "Graeco-Roman Records",
    "civilopediaExcerpt": "Meaning 'cotton castle' in Turkish, a natural site in Denizli in southwestern Turkey. Famous for its gleaming white travertine terraces formed by mineral-rich thermal waters.",
    "historicalContext": "Site of the ancient Greco-Roman spa city of Hierapolis, inhabited since the 2nd century BCE.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/3/38/Pamukkale_%28Civ6%29.png/revision/latest?cb=20190214225939",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/7/7e/Natural_Wonder_Pamukkale_%28Civ6%29.png/revision/latest?cb=20200715191216",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/7/7e/Natural_Wonder_Pamukkale_%28Civ6%29.png/revision/latest?cb=20200715191216"
},
  {
    "id": "civ6-pantanal",
    "name": "Pantanal",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -16.98,
        "lng": -56.63,
        "modernCountry": "Brazil, Bolivia & Paraguay",
        "modernRegion": "Mato Grosso do Sul"
    },
    "yields": {
        "food": 2,
        "culture": 2
    },
    "bonuses": [
        "4-tile marsh natural wonder",
        "Provides +2 Food and +2 Culture on the wonder tiles",
        "Provides fresh water to adjacent tiles"
    ],
    "quote": "The largest tropical wetland on the planet, pulsing with life as the seasonal floodwaters rise and recede.",
    "quoteAuthor": "Candido Rondon",
    "quoteWork": "Expeditions into the Mato Grosso",
    "civilopediaExcerpt": "A natural region encompassing the world's largest tropical wetland area, sprawling over 140,000 square kilometers across Brazil, Bolivia, and Paraguay.",
    "historicalContext": "Home to thousands of species including jaguars, giant river otters, capybaras, and the hyacinth macaw.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/2/2c/Pantanal_%28Civ6%29.png/revision/latest?cb=20170327210509",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/05/Natural_Wonder_Pantanal_%28Civ6%29.jpg/revision/latest?cb=20161117163859",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/05/Natural_Wonder_Pantanal_%28Civ6%29.jpg/revision/latest?cb=20161117163859"
},
  {
    "id": "civ6-piopiotahi",
    "name": "Piopiotahi",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -44.6716,
        "lng": 167.9256,
        "modernCountry": "New Zealand",
        "modernRegion": "Fiordland, South Island"
    },
    "yields": {
        "culture": 1,
        "gold": 2
    },
    "bonuses": [
        "3-tile coastal natural wonder",
        "Provides +1 Culture and +2 Gold to adjacent tiles",
        "Naval and land units on adjacent tiles gain +1 Movement"
    ],
    "quote": "Standing beneath Mitre Peak as waterfalls cascade a thousand meters through mist into dark glacial fjords.",
    "quoteAuthor": "Rudyard Kipling",
    "quoteWork": "Letters of Travel (1891)",
    "civilopediaExcerpt": "Milford Sound (Piopiotahi in M\u0101ori) is a fjord in the south west of New Zealand's South Island. Acclaimed by Rudyard Kipling as the eighth Wonder of the World.",
    "historicalContext": "Carved by ancient glaciers, featuring vertical rock walls rising 1,200 meters directly out of the Tasman Sea.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/d/d2/Piopiotahi_%28Civ6%29.png/revision/latest?cb=20170327210511",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/1/13/Natural_Wonder_Piopiotahi_%28Civ6%29.png/revision/latest?cb=20200718172049",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/1/13/Natural_Wonder_Piopiotahi_%28Civ6%29.png/revision/latest?cb=20200718172049"
},
  {
    "id": "civ6-sahara-el-beyda",
    "name": "Sahara el Beyda",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 27.0583,
        "lng": 27.9711,
        "modernCountry": "Egypt",
        "modernRegion": "Farafra Depression, Western Desert"
    },
    "yields": {
        "culture": 1,
        "science": 1,
        "gold": 4
    },
    "bonuses": [
        "4-tile desert natural wonder",
        "Provides +1 Culture, +1 Science, and +4 Gold on the wonder tiles"
    ],
    "quote": "Surreal chalk sculptures rising out of the sand dunes like frozen ghosts in a sea of gold.",
    "quoteAuthor": "Ahmed Fakhry",
    "quoteWork": "The Oases of Egypt",
    "civilopediaExcerpt": "The White Desert National Park in Egypt, located 45 km north of Farafra oasis. Renowned for its massive white chalk rock formations sculpted by sandstorms.",
    "historicalContext": "Former seabed of chalk rock, shaped by wind into mushroom, camel, and conical natural monuments.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/04/Sahara_el_Beyda_%28Civ6%29.png/revision/latest?cb=20190214225314",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/db/Natural_Wonder_Sahara_el_Beyda_%28Civ6%29.png/revision/latest?cb=20210126141320",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/db/Natural_Wonder_Sahara_el_Beyda_%28Civ6%29.png/revision/latest?cb=20210126141320"
},
  {
    "id": "civ6-torres-del-paine",
    "name": "Torres del Paine",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -51.2532,
        "lng": -72.9818,
        "modernCountry": "Chile",
        "modernRegion": "Patagonia, Magallanes"
    },
    "yields": {},
    "bonuses": [
        "2-tile mountain natural wonder",
        "Doubles all tile yields on adjacent tiles"
    ],
    "quote": "Three blue granite horns piercing the fierce winds of Patagonia above turquoise glacial lakes.",
    "quoteAuthor": "Lady Florence Dixie",
    "quoteWork": "Across Patagonia (1880)",
    "civilopediaExcerpt": "A national park encompassing mountains, glaciers, lakes, and rivers in southern Chilean Patagonia. The Cordillera del Paine is the centerpiece of the park.",
    "historicalContext": "The granite towers rise up to 2,500 meters above the Patagonian steppe, carved by Pleistocene glaciers.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/a/a7/Torres_del_Paine_%28Civ6%29.png/revision/latest?cb=20170327210517",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/e/e0/Natural_Wonder_Torres_del_Paine_%28Civ6%29.png/revision/latest?cb=20200523223937",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/e/e0/Natural_Wonder_Torres_del_Paine_%28Civ6%29.png/revision/latest?cb=20200523223937"
},
  {
    "id": "civ6-tsingy-de-bemaraha",
    "name": "Tsingy de Bemaraha",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -18.6667,
        "lng": 44.75,
        "modernCountry": "Madagascar",
        "modernRegion": "Melaky Region, Western Madagascar"
    },
    "yields": {
        "culture": 1,
        "science": 1
    },
    "bonuses": [
        "4-tile natural wonder",
        "Provides +1 Culture and +1 Science to adjacent tiles",
        "Enemy units in adjacent tiles suffer -5 Combat Strength"
    ],
    "quote": "A stone forest of needle-sharp limestone pinnacles, where lemurs leap across the razor spires.",
    "quoteAuthor": "Jean-No\u00ebl Labat",
    "quoteWork": "Madagascar Flora and Landscapes",
    "civilopediaExcerpt": "A national park located in western Madagascar, characterized by needle-shaped limestone karst formations known as tsingy ('where one cannot walk barefoot').",
    "historicalContext": "A fortress of biodiversity harboring endemic chameleons, sifakas, and rare birds isolated within limestone crevices.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/6/62/Tsingy_de_Bemaraha_%28Civ6%29.png/revision/latest?cb=20170327210518",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/c/c9/Natural_Wonder_Tsingy_de_Bemaraha_%28Civ6%29.png/revision/latest?cb=20200718171623",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/c/c9/Natural_Wonder_Tsingy_de_Bemaraha_%28Civ6%29.png/revision/latest?cb=20200718171623"
},
  {
    "id": "civ6-ubsunur-hollow",
    "name": "Ubsunur Hollow",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 50.3167,
        "lng": 92.75,
        "modernCountry": "Mongolia & Russia",
        "modernRegion": "Uvs Province & Tuva Republic"
    },
    "yields": {
        "faith": 1,
        "production": 1,
        "food": 2
    },
    "bonuses": [
        "4-tile natural wonder",
        "Provides +1 Faith, +1 Production, and +2 Food on the wonder tiles"
    ],
    "quote": "An enclosed basin where Siberian taiga, alpine tundra, and Central Asian sand deserts meet in harmony.",
    "quoteAuthor": "UNESCO World Heritage Inscription",
    "quoteWork": "Ecosystem Assessment",
    "civilopediaExcerpt": "The northernmost enclosed drainage basin in Central Asia, shared by Tuva in Russia and Uvs Province in Mongolia. Encompasses Lake Uvs, a large shallow saltwater lake.",
    "historicalContext": "One of the best-preserved natural steppe ecosystems on the Eurasian continent.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/4/45/Ubsunur_Hollow_%28Civ6%29.png/revision/latest?cb=20180411162259",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/0/07/Natural_Wonder_Ubsunur_Hollow_%28Civ6%29.png/revision/latest?cb=20200522054443",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/0/07/Natural_Wonder_Ubsunur_Hollow_%28Civ6%29.png/revision/latest?cb=20200522054443"
},
  {
    "id": "civ6-uluru",
    "name": "Uluru",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -25.3444,
        "lng": 131.0369,
        "modernCountry": "Australia",
        "modernRegion": "Northern Territory, Red Centre"
    },
    "yields": {
        "faith": 2,
        "culture": 2
    },
    "bonuses": [
        "1-tile natural wonder",
        "Provides +2 Faith and +2 Culture to adjacent tiles",
        "Provides +4 Appeal to adjacent tiles"
    ],
    "quote": "The ancient red heart of the continent, glowing ruby at sunset with the songs of the Tjukurpa ancestors.",
    "quoteAuthor": "Anangu Sacred Tradition",
    "quoteWork": "Tjukurpa Law and Creation",
    "civilopediaExcerpt": "A massive sandstone inselberg in the southern part of the Northern Territory in central Australia, sacred to the Pitjantjatjara Anangu.",
    "historicalContext": "Stands 348 meters high, changing color dramatically from ochre to fiery crimson at sunrise and sunset.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/8/8b/Uluru_%28Civ6%29.png/revision/latest?cb=20171027210128",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/d/d9/Natural_Wonder_Uluru_%28Civ6%29.png/revision/latest?cb=20180430163831",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/d/d9/Natural_Wonder_Uluru_%28Civ6%29.png/revision/latest?cb=20180430163831"
},
  {
    "id": "civ6-vredefort-dome",
    "name": "Vredefort Dome",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": -27.0,
        "lng": 27.5,
        "modernCountry": "South Africa",
        "modernRegion": "Free State & North West"
    },
    "yields": {
        "science": 1,
        "production": 2
    },
    "bonuses": [
        "3-tile natural wonder",
        "Provides +1 Science and +2 Production to adjacent tiles"
    ],
    "quote": "The scar of the largest known asteroid impact on Earth, shaking the Precambrian crust two billion years ago.",
    "quoteAuthor": "Geological Society of South Africa",
    "quoteWork": "Vredefort Crater Studies",
    "civilopediaExcerpt": "The largest verified impact crater on Earth, with an estimated original diameter of 300 km. Located in the Free State of South Africa.",
    "historicalContext": "Formed over two billion years ago when an asteroid 10 to 15 km in diameter struck Earth during the Paleoproterozoic.",
    "iconUrl": "/src/assets/images/vredefort_dome_icon_1792354205237.jpg",
    "visualUrl": "/src/assets/images/vredefort_dome_civ6_1792354188469.jpg",
    "imageUrl": "/src/assets/images/vredefort_dome_civ6_1792354188469.jpg"
},
  {
    "id": "civ6-yosemite",
    "name": "Yosemite",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 37.8651,
        "lng": -119.5383,
        "modernCountry": "United States",
        "modernRegion": "Sierra Nevada, California"
    },
    "yields": {
        "science": 1,
        "gold": 1
    },
    "bonuses": [
        "2-tile mountain natural wonder",
        "Provides +1 Science and +1 Gold to adjacent tiles",
        "+4 Appeal to adjacent tiles"
    ],
    "quote": "It is by far the grandest of all the special temples of Nature I was ever permitted to enter.",
    "quoteAuthor": "John Muir",
    "quoteWork": "The Yosemite (1912)",
    "civilopediaExcerpt": "A national park in California's Sierra Nevada mountains, famed for its giant ancient sequoias, the granite cliffs of El Capitan and Half Dome, and bridal veil waterfalls.",
    "historicalContext": "Carved by glaciers through solid granite, inspiring the creation of the United States National Park Service.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/0/0c/Yosemite_%28Civ6%29.png/revision/latest?cb=20170327210620",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/f/ff/Natural_Wonder_Yosemite_%28Civ6%29.jpg/revision/latest?cb=20161117163529",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/f/ff/Natural_Wonder_Yosemite_%28Civ6%29.jpg/revision/latest?cb=20161117163529"
},
  {
    "id": "civ6-zhangye-danxia",
    "name": "Zhangye Danxia",
    "game": "civ6",
    "type": "natural_wonder",
    "era": "Timeless",
    "yearApprox": "Natural Geological Formation",
    "location": {
        "lat": 38.9056,
        "lng": 100.1444,
        "modernCountry": "China",
        "modernRegion": "Gansu Province, Qilian Mountains"
    },
    "yields": {
        "greatPersonPoints": "+2 Great General, +2 Great Merchant"
    },
    "bonuses": [
        "3-tile natural wonder",
        "Provides +2 Great General points and +2 Great Merchant points per turn to the controlling city"
    ],
    "quote": "Stripes of magenta, lemon, and lapis lazuli painted across the rolling foothills of the Silk Road.",
    "quoteAuthor": "Silk Road Chronicles",
    "quoteWork": "Hexi Corridor Travelogue",
    "civilopediaExcerpt": "The Rainbow Mountains of Zhangye Danxia National Geological Park in Gansu, China, known for the colorful sandstone and mineral layers deposited over 24 million years.",
    "historicalContext": "Folded by Himalayan tectonic forces and sculpted by erosion along the historic Hexi Corridor.",
    "iconUrl": "https://static.wikia.nocookie.net/civilization/images/3/38/Zhangye_Danxia_%28Civ6%29.png/revision/latest?cb=20180411162322",
    "visualUrl": "https://static.wikia.nocookie.net/civilization/images/f/fe/Natural_Wonder_Zhangye_Danxia_%28Civ6%29.png/revision/latest?cb=20180430163211",
    "imageUrl": "https://static.wikia.nocookie.net/civilization/images/f/fe/Natural_Wonder_Zhangye_Danxia_%28Civ6%29.png/revision/latest?cb=20180430163211"
},
];
