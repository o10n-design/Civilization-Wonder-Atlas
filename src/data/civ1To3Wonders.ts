import { CivWonder } from '../types/wonder';

export const CIV1_TO_3_WONDERS: CivWonder[] = [
  // ===================== CIVILIZATION I CLASSICS (1991) =====================
  {
    id: 'civ1-pyramids',
    name: 'Pyramids',
    game: 'civ1',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 2560 BCE',
    location: {
      lat: 29.9792,
      lng: 31.1342,
      modernCountry: 'Egypt',
      modernRegion: 'Giza Governorate'
    },
    yields: {
      production: 2,
      culture: 4
    },
    techRequirement: 'Masonry',
    productionCost: 300,
    bonuses: [
      'Allows your civilization to change government form at any time to Monarchy, Republic, or Democracy without Anarchy!',
      'Eliminates the dreaded multi-turn government transition period in original Civilization (1991)'
    ],
    quote: 'From the heights of these pyramids, forty centuries look down upon us.',
    quoteAuthor: 'Napoleon Bonaparte',
    quoteWork: 'Sid Meier’s Civilization (1991) Civilopedia',
    civilopediaExcerpt: 'In the original 1991 masterpiece designed by Sid Meier, the Pyramids granted the player the revolutionary ability to adopt any government form whenever desired, bypassing the perilous turns of Anarchy that paralyzed competing empires.',
    historicalContext: 'Erected on the Giza Plateau for Pharaoh Khufu, the Great Pyramid was the tallest man-made structure on Earth for over 3,800 years.',
    iconUrl: '/src/assets/images/icons/great-pyramids.png',
    visualUrl: '/src/assets/images/pyramids_giza_civ_1792262637264.jpg'
  },
  {
    id: 'civ1-colossus',
    name: 'Colossus',
    game: 'civ1',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 280 BCE',
    location: {
      lat: 36.4511,
      lng: 28.2278,
      modernCountry: 'Greece',
      modernRegion: 'Rhodes, Dodecanese'
    },
    yields: {
      gold: 4,
      culture: 3
    },
    techRequirement: 'Bronze Working',
    productionCost: 200,
    bonuses: [
      'Adds +1 Trade arrow to every worked tile in the city that already produces at least one arrow',
      'Turns maritime harbor cities into staggering scientific and tax powerhouses'
    ],
    quote: 'To you, O Sun, the people of Dorian Rhodes set up this bronze statue reaching even to Olympus.',
    quoteAuthor: 'Dedication Inscription',
    quoteWork: 'Greek Anthology',
    civilopediaExcerpt: 'Constructed at the harbor of Rhodes, the Colossus in Civ I boosted every trade-producing tile in its home city by +1 Trade, sparking an economic and technological explosion for the civilization that founded it.',
    historicalContext: 'A gigantic bronze statue of the sun-god Helios erected to celebrate Rhodes’ victorious defense against Demetrius Poliorcetes in 305 BCE.',
    iconUrl: '/src/assets/images/icons/colossus-of-rhodes.png',
    visualUrl: '/src/assets/images/wonders/colossus-of-rhodes.png'
  },
  {
    id: 'civ1-great-library',
    name: 'Great Library',
    game: 'civ1',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 283 BCE',
    location: {
      lat: 31.2089,
      lng: 29.9092,
      modernCountry: 'Egypt',
      modernRegion: 'Alexandria'
    },
    yields: {
      science: 6,
      culture: 4
    },
    techRequirement: 'Literacy',
    productionCost: 300,
    bonuses: [
      'Instantly grants your civilization any technology that has been discovered by any two other competing civilizations!',
      'Remains active until the discovery of Electricity by any civilization'
    ],
    quote: 'Let books be your friends and bookshelves your garden.',
    quoteAuthor: 'Judah ibn Tibbon',
    quoteWork: 'Sid Meier’s Civilization (1991)',
    civilopediaExcerpt: 'The Great Library in Civilization I was the ultimate technological catch-up wonder. By freely acquiring every breakthrough discovered by at least two other empires, players could focus domestic production on military and infrastructure while letting rivals subsidize their scientific progress.',
    historicalContext: 'Part of the larger research institute known as the Mouseion of Alexandria, holding hundreds of thousands of papyrus scrolls gathering the wisdom of the ancient Mediterranean.',
    iconUrl: '/src/assets/images/icons/great-library.png',
    visualUrl: '/src/assets/images/wonders/great-library.png'
  },
  {
    id: 'civ1-magellans-expedition',
    name: "Magellan's Expedition",
    game: 'civ1',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1519–1522 CE',
    location: {
      lat: -52.5386,
      lng: -70.0469,
      modernCountry: 'Chile / Global Waters',
      modernRegion: 'Strait of Magellan, Patagonia'
    },
    yields: {
      gold: 3,
      culture: 2
    },
    techRequirement: 'Navigation',
    productionCost: 400,
    bonuses: [
      'Permanently increases the movement rate of ALL naval vessels in your empire by +1 movement point',
      'Bestows unconditional maritime dominance across oceans and trade corridors'
    ],
    quote: 'The church says the earth is flat; but I have seen its shadow on the moon, and I have more confidence even in a shadow than in the church.',
    quoteAuthor: 'Ferdinand Magellan',
    quoteWork: 'Circumnavigation Records',
    civilopediaExcerpt: 'In Civilization I, naval speed was paramount for island colonization and sudden amphibious landings. Magellan’s Expedition gave all naval ships +1 movement point, shrinking global sea lanes and ensuring the builder’s armada could intercept any enemy armada.',
    historicalContext: 'Ferdinand Magellan set sail with five ships in 1519. Although Magellan died in the Philippines, Juan Sebastián Elcano guided the Victoria back to Spain in 1522, achieving humanity’s first circumnavigation.',
    iconUrl: '/assets/wonder-icons/magellans-expedition.svg',
    visualUrl: '/src/assets/images/great_barrier_reef_1792264354012.jpg'
  },
  {
    id: 'civ1-cure-for-cancer',
    name: 'Cure for Cancer',
    game: 'civ1',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '20th–21st Century Vision',
    location: {
      lat: 38.9982,
      lng: -77.0988,
      modernCountry: 'United States',
      modernRegion: 'Bethesda, Maryland (NIH Campus)'
    },
    yields: {
      happiness: 6,
      science: 4
    },
    techRequirement: 'Genetic Engineering',
    productionCost: 600,
    bonuses: [
      'Automatically makes one unhappy citizen content in EVERY city across your entire empire (+1 Happy Citizen worldwide)',
      'Provides massive domestic stability during wartime and hyper-industrialization'
    ],
    quote: 'The ultimate victory of medical science over mankind’s most insidious cellular affliction.',
    quoteAuthor: 'Sid Meier',
    quoteWork: 'Civilization (1991) Civilopedia',
    civilopediaExcerpt: 'A signature late-game World Wonder in original Civilization, Cure for Cancer represented humanity’s triumph over biological decay. Its empire-wide happiness bonus permanently quelled civil unrest in large metropolitan populations.',
    historicalContext: 'The global quest for oncological therapies revolutionized biotechnology, molecular genetics, mRNA vaccines, and targeted immunotherapies across the late 20th and 21st centuries.',
    iconUrl: '/assets/wonder-icons/cure-for-cancer.svg',
    visualUrl: '/src/assets/images/wonders/hubble-space-telescope.png'
  },
  {
    id: 'civ1-seti-program',
    name: 'SETI Program',
    game: 'civ1',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1960–1984 CE',
    location: {
      lat: 18.3464,
      lng: -66.7528,
      modernCountry: 'Puerto Rico',
      modernRegion: 'Arecibo Observatory'
    },
    yields: {
      science: 10,
      production: 2
    },
    techRequirement: 'Computers',
    productionCost: 600,
    bonuses: [
      'Increases total Science research beaker production by +50% in the host city',
      'Acts as a Research Lab in every city across the civilization in subsequent games'
    ],
    quote: 'Somewhere, something incredible is waiting to be known.',
    quoteAuthor: 'Carl Sagan',
    quoteWork: 'Cosmos',
    civilopediaExcerpt: 'The Search for Extraterrestrial Intelligence (SETI) wonder allowed late-game empires to hyper-accelerate their Space Race research. Building SETI frequently enabled players to unlock the Alpha Centauri spaceship modules turns ahead of rival superpowers.',
    historicalContext: 'Pioneered by astronomers Frank Drake and Carl Sagan, SETI used giant radio telescopes like Arecibo to scan the cosmos for narrow-band electromagnetic transmissions from alien civilizations.',
    iconUrl: '/assets/wonder-icons/seti-program.svg',
    visualUrl: '/src/assets/images/wonders/hubble-space-telescope.png'
  },

  // ===================== CIVILIZATION II MASTERPIECES (1996) =====================
  {
    id: 'civ2-leonardos-workshop',
    name: "Leonardo's Workshop",
    game: 'civ2',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: 'c. 1482–1519 CE',
    location: {
      lat: 43.7696,
      lng: 11.2558,
      modernCountry: 'Italy',
      modernRegion: 'Florence, Tuscany'
    },
    yields: {
      production: 4,
      science: 3
    },
    techRequirement: 'Invention',
    productionCost: 400,
    bonuses: [
      'Automatically upgrades ALL obsolete military units in your entire empire to their modern equivalents for FREE!',
      'Upgrades 1 unit per turn in Civ II or instantaneously whenever a new military technology is unlocked',
      'Saves tens of thousands of gold in modernization costs'
    ],
    quote: 'Simplicity is the ultimate sophistication.',
    quoteAuthor: 'Leonardo da Vinci',
    quoteWork: 'Codex Atlanticus',
    civilopediaExcerpt: 'Legendary among Civilization II veterans, Leonardo’s Workshop is widely considered one of the most cost-effective wonders ever conceived in the franchise. It modernized obsolete units across every corner of the empire without spending a single coin of treasury gold.',
    historicalContext: 'Leonardo da Vinci’s sketchbooks contained visionary engineering blueprints for helicopters, armored tanks, automated crossbows, and hydraulic pumps centuries ahead of their industrial realization.',
    iconUrl: '/assets/wonder-icons/leonardos-workshop.svg',
    visualUrl: '/src/assets/images/wonders/leaning-tower-of-pisa.png'
  },
  {
    id: 'civ2-king-richards-crusade',
    name: "King Richard's Crusade",
    game: 'civ2',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '1189–1192 CE',
    location: {
      lat: 31.7683,
      lng: 35.2137,
      modernCountry: 'Israel / Palestine',
      modernRegion: 'Jerusalem / Acre'
    },
    yields: {
      production: 5,
      faith: 2
    },
    techRequirement: 'Engineering',
    productionCost: 300,
    bonuses: [
      'Adds +1 Shield (Production) to every worked tile in the host city that produces at least one shield',
      'Transforms the host city into the most formidable industrial and military recruitment center on Earth'
    ],
    quote: 'To the victor goes the spoils; to the faithful, eternal remembrance.',
    quoteAuthor: 'Richard I the Lionheart',
    quoteWork: 'Third Crusade Chronicles',
    civilopediaExcerpt: 'In Civilization II, King Richard’s Crusade gave the city that built it an extraordinary production boost by augmenting every shield-bearing tile. Players placed it in high-resource mountain or river valleys to pump out crusaders and wonder projects in record turns.',
    historicalContext: 'Richard I of England led the Third Crusade alongside Philip II of France, capturing the strategic fortress of Acre and defeating Saladin at the Battle of Arsuf.',
    iconUrl: '/assets/wonder-icons/king-richards-crusade.svg',
    visualUrl: '/src/assets/images/wonders/notre-dame.png'
  },
  {
    id: 'civ2-sun-tzus-war-academy',
    name: "Sun Tzu's War Academy",
    game: 'civ2',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 5th Century BCE',
    location: {
      lat: 31.2989,
      lng: 120.5853,
      modernCountry: 'China',
      modernRegion: 'Suzhou, Jiangsu (State of Wu)'
    },
    yields: {
      culture: 3,
      production: 2
    },
    techRequirement: 'Feudalism',
    productionCost: 300,
    bonuses: [
      'All newly built land combat units immediately gain Veteran status (+50% combat strength in attack and defense)!',
      'Acts as a free Barracks in every single city across your entire empire, immune to upkeep costs'
    ],
    quote: 'The supreme art of war is to subdue the enemy without fighting.',
    quoteAuthor: 'Sun Tzu',
    quoteWork: 'The Art of War (孫子兵法)',
    civilopediaExcerpt: 'Sun Tzu’s War Academy in Civ II was the premier military milestone. By bestowing instant Veteran status and eliminating barracks upkeep across every city, it enabled massive, unstoppable conqueror campaigns.',
    historicalContext: 'Sun Tzu was a general and military strategist in ancient China during the Spring and Autumn period, whose 13-chapter treatise remains the world’s definitive military classic.',
    iconUrl: '/assets/wonder-icons/sun-tzus-war-academy.svg',
    visualUrl: '/src/assets/images/wonders/terracotta-army.png'
  },
  {
    id: 'civ2-js-bachs-cathedral',
    name: "J.S. Bach's Cathedral",
    game: 'civ2',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1723–1750 CE',
    location: {
      lat: 51.3396,
      lng: 12.3731,
      modernCountry: 'Germany',
      modernRegion: 'Leipzig, Saxony (St. Thomas Church)'
    },
    yields: {
      culture: 5,
      faith: 3,
      happiness: 4
    },
    techRequirement: 'Theology',
    productionCost: 400,
    bonuses: [
      'Reduces unhappy citizens by 2 in EVERY city on the same continent as the cathedral!',
      'Crucial for sustaining Republic and Democracy governments without triggering revolt or senate gridlock'
    ],
    quote: 'There is nothing remarkable about it. All one has to do is hit the right keys at the right time and the instrument plays itself.',
    quoteAuthor: 'Johann Sebastian Bach',
    quoteWork: 'Musical Maxims',
    civilopediaExcerpt: 'Bach’s Cathedral was the savior of liberal democracies in Civilization II and III. By soothing two unhappy citizens in every continental city, it allowed high-tax and high-science democratic societies to expand without plunging into anarchy.',
    historicalContext: 'Johann Sebastian Bach served as Thomaskantor in Leipzig from 1723 until his death, composing the Brandenburg Concertos, the Mass in B minor, and the St. Matthew Passion.',
    iconUrl: '/assets/wonder-icons/js-bachs-cathedral.svg',
    visualUrl: '/src/assets/images/wonders/notre-dame.png'
  },
  {
    id: 'civ2-shakespeares-theatre',
    name: "Shakespeare's Theatre",
    game: 'civ2',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1599 CE',
    location: {
      lat: 51.5081,
      lng: -0.0972,
      modernCountry: 'United Kingdom',
      modernRegion: 'Southwark, London, England'
    },
    yields: {
      culture: 6,
      happiness: 5
    },
    techRequirement: 'Medicine',
    productionCost: 300,
    bonuses: [
      'Converts ALL unhappy citizens in the host city into content citizens, completely eradicating disorder!',
      'Allows the city to grow without population cap penalties or civil unrest'
    ],
    quote: 'All the world’s a stage, and all the men and women merely players.',
    quoteAuthor: 'William Shakespeare',
    quoteWork: 'As You Like It',
    civilopediaExcerpt: 'Constructing Shakespeare’s Theatre in Civilization II transformed a single metropolis into an unrest-proof supercity. Even under massive war weariness or famine, the populace remained delighted and productive.',
    historicalContext: 'Built in 1599 by Shakespeare’s playing company, the Lord Chamberlain’s Men, on the south bank of the River Thames, hosting original productions of Hamlet, Othello, and King Lear.',
    iconUrl: '/assets/wonder-icons/shakespeares-theatre.svg',
    visualUrl: '/src/assets/images/wonders/sydney-opera-house.png'
  },
  {
    id: 'civ2-hoover-dam',
    name: 'Hoover Dam',
    game: 'civ2',
    type: 'world_wonder',
    era: 'Industrial',
    yearApprox: '1931–1936 CE',
    location: {
      lat: 36.016,
      lng: -114.7377,
      modernCountry: 'United States',
      modernRegion: 'Black Canyon, Nevada / Arizona Border'
    },
    yields: {
      production: 8
    },
    techRequirement: 'Electronics',
    productionCost: 600,
    bonuses: [
      'Automatically provides a clean, zero-pollution Hydro Plant in EVERY city on the continent!',
      'Boosts factory production by +50% across the continent with zero environmental pollution'
    ],
    quote: 'This morning I came, I saw and I was conquered by your achievement with the words: I came, I saw, and you conquered the drought.',
    quoteAuthor: 'Franklin D. Roosevelt',
    quoteWork: 'Dedication of Hoover Dam (1935)',
    civilopediaExcerpt: 'The undisputed industrial titan of mid-to-late Civilization II and III. Hoover Dam delivered clean electrical power to every factory across an entire landmass, sparking unprecedented production surges without risking global warming.',
    historicalContext: 'A concrete arch-gravity dam on the Colorado River that impounded Lake Mead, generating 2,000 megawatts of clean hydropower and controlling seasonal desert flooding.',
    iconUrl: '/assets/wonder-icons/hoover-dam.svg',
    visualUrl: '/src/assets/images/wonders/big-ben.png'
  },

  // ===================== CIVILIZATION III CONQUESTS (2001–2003) =====================
  {
    id: 'civ3-statue-of-zeus',
    name: 'Statue of Zeus',
    game: 'civ3',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 435 BCE',
    location: {
      lat: 37.6384,
      lng: 21.63,
      modernCountry: 'Greece',
      modernRegion: 'Olympia, Peloponnese'
    },
    yields: {
      culture: 4,
      faith: 2
    },
    techRequirement: 'Mathematics',
    productionCost: 200,
    bonuses: [
      'Spawns a veteran Ancient Cavalry unit (3/2/2 with +1 extra HP) every 5 turns for FREE!',
      'Requires Ivory within city borders to construct',
      '+4 Culture per turn and causes tourist revenue in the Modern Age'
    ],
    quote: 'Zeus, the father of gods and men, whose nod shakes the foundations of the world.',
    quoteAuthor: 'Homer',
    quoteWork: 'The Iliad',
    civilopediaExcerpt: 'Introduced in Civilization III: Conquests, the Statue of Zeus was the terror of the Classical age. Every five turns, a free elite Ancient Cavalry rode forth from the city, enabling unstoppable early-game expansion.',
    historicalContext: 'Crafted by the renowned Athenian sculptor Phidias inside the Temple of Zeus at Olympia, the chryselephantine (gold and ivory) colossus was honored as one of the Seven Wonders of the Ancient World.',
    iconUrl: '/assets/wonder-icons/statue-of-zeus.svg',
    visualUrl: '/src/assets/images/wonders/colossus-of-rhodes.png'
  },
  {
    id: 'civ3-knights-templar',
    name: 'Knights Templar',
    game: 'civ3',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '1119–1312 CE',
    location: {
      lat: 31.7781,
      lng: 35.236,
      modernCountry: 'Israel / Palestine',
      modernRegion: 'Temple Mount, Jerusalem'
    },
    yields: {
      culture: 2,
      faith: 4,
      production: 2
    },
    techRequirement: 'Chivalry',
    productionCost: 300,
    bonuses: [
      'Spawns a powerful Crusader unit (5/3/1 assault infantry) every 5 turns without consuming population or shields!',
      'Provides +2 Culture per turn and religious prestige'
    ],
    quote: 'Non nobis, Domine, non nobis, sed nomini tuo da gloriam. (Not unto us, O Lord, but to thy name give the glory.)',
    quoteAuthor: 'Templar Motto',
    quoteWork: 'Psalm 115',
    civilopediaExcerpt: 'The Knights Templar in Civ III Conquests served as an autonomous crusade headquarters. Producing high-powered Crusaders automatically every five turns, it allowed builders to sustain relentless holy wars without slowing economic infrastructure.',
    historicalContext: 'A Catholic military order founded in Jerusalem in 1119 to protect Christian pilgrims traveling along Mediterranean roadways, becoming one of the most powerful financial and military bodies in Christendom.',
    iconUrl: '/assets/wonder-icons/knights-templar.svg',
    visualUrl: '/src/assets/images/wonders/notre-dame.png'
  },
  {
    id: 'civ3-mausoleum-of-maussollos',
    name: 'Mausoleum of Mausolos',
    game: 'civ3',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 350 BCE',
    location: {
      lat: 37.0379,
      lng: 27.4241,
      modernCountry: 'Turkey',
      modernRegion: 'Bodrum, Muğla (Halicarnassus)'
    },
    yields: {
      culture: 2,
      happiness: 3
    },
    techRequirement: 'Philosophy',
    productionCost: 200,
    bonuses: [
      'Makes 3 unhappy citizens content in the city where it is built (+3 Happy Faces)',
      '+2 Culture per turn and tourist income in modern eras'
    ],
    quote: 'I lie here, Maussollos of Caria, in a tomb that will endure as a wonder of human art for all ages.',
    quoteAuthor: 'Lucian of Samosata',
    quoteWork: 'Dialogues of the Dead',
    civilopediaExcerpt: 'Constructed at Halicarnassus, the Mausoleum of Mausolos was introduced to the series in Civ III. Its profound happiness bonus (+3 content citizens) permitted early cities to grow beyond initial population limits before acquiring luxuries.',
    historicalContext: 'Built for Mausolos, ruler of Caria, and his sister-wife Artemisia II. Its architectural brilliance was so celebrated that the word mausoleum came to designate any grand sepulchral monument.',
    iconUrl: '/assets/wonder-icons/mausoleum-of-maussollos.svg',
    visualUrl: '/src/assets/images/wonders/great-pyramids.png'
  },
  {
    id: 'civ3-newtons-university',
    name: "Newton's University",
    game: 'civ3',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1661–1696 CE',
    location: {
      lat: 52.2057,
      lng: 0.1166,
      modernCountry: 'United Kingdom',
      modernRegion: 'Trinity College, Cambridge, England'
    },
    yields: {
      science: 8,
      culture: 6
    },
    techRequirement: 'Theory of Gravity',
    productionCost: 400,
    bonuses: [
      'Doubles total scientific research output (+100% Science) in the city where it is built!',
      'Stacks multiplicatively with Copernicus’ Observatory for an astronomical science super-center',
      '+6 Culture per turn'
    ],
    quote: 'If I have seen further it is by standing on the shoulders of Giants.',
    quoteAuthor: 'Sir Isaac Newton',
    quoteWork: 'Letter to Robert Hooke (1675)',
    civilopediaExcerpt: 'The quintessential scientific wonder of Civilization II and III. Placed in a high-trade capital with Copernicus’ Observatory, Newton’s University created a scientific powerhouse capable of discovering high-tier technologies every 4 turns.',
    historicalContext: 'Sir Isaac Newton formulated the laws of motion and universal gravitation at Trinity College, Cambridge, publishing Philosophiæ Naturalis Principia Mathematica in 1687.',
    iconUrl: '/assets/wonder-icons/newtons-university.svg',
    visualUrl: '/src/assets/images/wonders/great-library.png'
  }
];
