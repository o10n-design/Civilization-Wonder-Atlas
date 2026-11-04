import { CivWonder } from '../types/wonder';

export const CIV4_WONDERS: CivWonder[] = [
  // ===================== CIV IV ANCIENT & CLASSICAL =====================
  {
    id: 'civ4-pyramids',
    name: 'Pyramids',
    game: 'civ4',
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
      culture: 6,
      greatPersonPoints: '+2 Great Engineer Points'
    },
    techRequirement: 'Masonry',
    productionCost: 500,
    bonuses: [
      'Enables ALL Government Civics immediately (Representation, Police State, Universal Suffrage) millennia before their required technologies!',
      '+2 Great Engineer Points per turn'
    ],
    quote: 'The man who moved a mountain began by carrying away small stones.',
    quoteAuthor: 'Confucius',
    quoteWork: 'Civilization IV Wonder Quote (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'The Pyramids are one of the most powerful and influential World Wonders in Civilization IV. Constructing them unlocks every government civic in the game regardless of your technology tree progress, allowing an early transition into Representation for massive specialist research or Police State for total wartime production.',
    historicalContext: 'Built as monumental royal tombs during Egypt’s Old Kingdom, the Pyramids of Giza showcase astonishing geometric precision and architectural ambition.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/e/e3/Pyramids_%28Civ6%29.png/revision/latest?cb=20161117163821',
    visualUrl: '/src/assets/images/pyramids_giza_civ_1792262637264.jpg'
  },
  {
    id: 'civ4-stonehenge',
    name: 'Stonehenge',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 3000–2000 BCE',
    location: {
      lat: 51.1789,
      lng: -1.8262,
      modernCountry: 'United Kingdom',
      modernRegion: 'Wiltshire, England'
    },
    yields: {
      culture: 8,
      greatPersonPoints: '+2 Great Prophet Points'
    },
    techRequirement: 'Mysticism',
    productionCost: 120,
    bonuses: [
      'Automatically provides a Monument (+1 Culture) in EVERY city across your entire empire!',
      'Centers the world map for the builder; +2 Great Prophet Points per turn'
    ],
    quote: 'How came these huge stones here, each balanced like a dream on another?',
    quoteAuthor: 'Anonymous',
    quoteWork: 'Civilization IV Wonder Quote (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'In Civilization IV, Stonehenge is the definitive early-game empire expander. By granting a free Monument in every existing and newly founded settlement, your borders rapidly push outwards across neighboring lands without requiring individual cultural investments.',
    historicalContext: 'A ring of standing stones set within earthworks on Salisbury Plain, aligned towards the sunrise of the summer solstice.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/6/66/Stonehenge_%28Civ6%29.png/revision/latest?cb=20161117163854',
    visualUrl: '/src/assets/images/wonders/stonehenge.png'
  },
  {
    id: 'civ4-great-lighthouse',
    name: 'Great Lighthouse',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 280 BCE',
    location: {
      lat: 31.214,
      lng: 29.885,
      modernCountry: 'Egypt',
      modernRegion: 'Pharos Island, Alexandria'
    },
    yields: {
      culture: 6,
      greatPersonPoints: '+2 Great Merchant Points'
    },
    techRequirement: 'Sailing',
    productionCost: 200,
    placementRequirement: 'Must be built in a Coastal city.',
    bonuses: [
      '+2 Trade Routes in EVERY coastal city across your empire!',
      '+2 Great Merchant Points per turn; fuels astronomical economic supremacy on archipelago and island maps'
    ],
    quote: 'The beacon was made to shine out to all sailors, so they might know where the harbor lay.',
    quoteAuthor: 'Strabo',
    quoteWork: 'Geographica',
    civilopediaExcerpt: 'The Great Lighthouse of Alexandria in Civilization IV is an economic juggernaut. Granting two extra trade routes to all coastal cities creates an unstoppable seafaring commercial empire that easily finances research and expansion.',
    historicalContext: 'Constructed by the Ptolemaic Kingdom on the island of Pharos, estimated to have been between 100 and 130 meters tall, guiding ships for over a millennium.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/2/29/Great_Lighthouse_%28Civ5%29.png/revision/latest?cb=20120921021422',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/7/7f/Great_Lighthouse_splash_%28Civ5%29.jpg/revision/latest?cb=20130928092823'
  },
  {
    id: 'civ4-statue-of-zeus',
    name: 'Statue of Zeus',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 435 BCE',
    location: {
      lat: 37.6379,
      lng: 21.63,
      modernCountry: 'Greece',
      modernRegion: 'Olympia, Peloponnese'
    },
    yields: {
      culture: 10,
      greatPersonPoints: '+2 Great Artist Points'
    },
    techRequirement: 'Aesthetics',
    productionCost: 300,
    bonuses: [
      '+100% War Weariness to all enemy civilizations fighting against you!',
      'Paralyzes warmongering rivals with immense public revolt in their home cities during protracted conflicts'
    ],
    quote: 'He spoke, and with his dark brows the son of Kronos nodded; and the ambrosial locks flowed down from the king’s immortal head.',
    quoteAuthor: 'Homer',
    quoteWork: 'The Iliad (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'Introduced in Civilization IV: Beyond the Sword, the Statue of Zeus is the ultimate psychological and defensive deterrent. Any nation foolish enough to declare war on its owner suffers double war weariness, quickly plunging their empire into strikes, famine, and civil unrest.',
    historicalContext: 'A giant chryselephantine (ivory plates and gold panels) sculpture created by the master Greek sculptor Phidias in the Temple of Zeus at Olympia.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/5/5a/Statue_of_Zeus_%28Civ6%29.png/revision/latest?cb=20210130070116',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/9/9f/Statue_of_Zeus_%28Civ6%29_splash.jpg/revision/latest?cb=20211029191104'
  },
  {
    id: 'civ4-parthenon',
    name: 'Parthenon',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: '447–432 BCE',
    location: {
      lat: 37.9715,
      lng: 23.7266,
      modernCountry: 'Greece',
      modernRegion: 'Acropolis of Athens'
    },
    yields: {
      culture: 10,
      greatPersonPoints: '+2 Great Artist Points'
    },
    techRequirement: 'Polytheism',
    productionCost: 400,
    bonuses: [
      '+50% Great People birth rate in ALL cities across your empire!',
      'Essential foundational wonder for Cultural Victory and Specialist Economy strategies'
    ],
    quote: 'Earth proudly wears the Parthenon as the best gem upon her zone.',
    quoteAuthor: 'Ralph Waldo Emerson',
    quoteWork: 'The Problem (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'The Parthenon in Civ IV is the crown jewel of any civilization pursuing a Specialist Economy or Cultural Victory. Boosting the birth rate of Great People by 50% across the board sparks a relentless cascade of Great Scientists, Artists, and Engineers.',
    historicalContext: 'Dedicated to the goddess Athena Parthenos, built under the political leadership of Pericles, standing as the zenith of the Doric order of architecture.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/6/68/Parthenon_%28Civ5%29.png/revision/latest?cb=20130704043232',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/3/36/Parthenon_splash_%28Civ5%29.jpg/revision/latest?cb=20130928092837'
  },
  {
    id: 'civ4-mausoleum',
    name: 'Mausoleum of Maussollos',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 350 BCE',
    location: {
      lat: 37.0379,
      lng: 27.4241,
      modernCountry: 'Turkey',
      modernRegion: 'Halicarnassus (Modern Bodrum)'
    },
    yields: {
      culture: 10,
      greatPersonPoints: '+2 Great Artist Points'
    },
    techRequirement: 'Calendar',
    productionCost: 450,
    bonuses: [
      '+50% Golden Age duration for all future Golden Ages across your entire history!',
      'Combines with the Taj Mahal to produce near-continuous eras of imperial prosperity'
    ],
    quote: 'I have a tomb at Halicarnassus, not only exceedingly magnificent, but also adorned with horses and men of the most exquisite marble.',
    quoteAuthor: 'Lucian of Samosata',
    quoteWork: 'Dialogues of the Dead (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'In Civilization IV: Beyond the Sword, the Mausoleum of Maussollos extends all Golden Ages by 50%. In the hands of a skilled player chaining Great People, it keeps your empire in a permanent, shimmering Golden Age of boosted commerce and production.',
    historicalContext: 'Built for Mausolus, a satrap of the Achaemenid Empire. The beauty and scale of the tomb were so celebrated that Antipater of Sidon identified it as one of the Seven Wonders of the Ancient World.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/1/1a/Mausoleum_at_Halicarnassus_%28Civ6%29.png/revision/latest?cb=20180210080646',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/6/64/Mausoleum_at_Halicarnassus_%28Civ6%29_splash.jpg/revision/latest?cb=20211029191056'
  },

  // ===================== CIV IV MEDIEVAL & RENAISSANCE =====================
  {
    id: 'civ4-spiral-minaret',
    name: 'Spiral Minaret',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '848–851 CE',
    location: {
      lat: 34.2062,
      lng: 43.8797,
      modernCountry: 'Iraq',
      modernRegion: 'Samarra, Saladin Governorate'
    },
    yields: {
      culture: 8,
      greatPersonPoints: '+2 Great Prophet Points'
    },
    techRequirement: 'Divine Right',
    productionCost: 550,
    bonuses: [
      '+2 Gold from EVERY religious building (Temples, Monasteries, Cathedrals) of the State Religion in all cities!',
      'Synergizes with University of Sankore and the Apostolic Palace to turn piety into unstoppable technological and economic wealth'
    ],
    quote: 'The minaret was like a tower of Babel, rising in helical coils toward the blue dome of heaven.',
    quoteAuthor: 'Ibn Battuta',
    quoteWork: 'The Rihla (Travels)',
    civilopediaExcerpt: 'The Malwiya or Spiral Minaret of the Great Mosque of Samarra in Civilization IV is a premier economic engine for spiritual empires. Every single temple and cathedral of your state religion generates +2 Gold per turn, completely underwriting imperial expansion.',
    historicalContext: 'A 52-meter high sandstone minaret with ascending spiral conical ramp, built under Abbasid caliph Al-Mutawakkil.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civ4-apostolic-palace',
    name: 'Apostolic Palace',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: 'c. 1100 CE',
    location: {
      lat: 41.9038,
      lng: 12.4542,
      modernCountry: 'Vatican City / Italy',
      modernRegion: 'Rome, Vatican Hill'
    },
    yields: {
      culture: 4,
      greatPersonPoints: '+2 Great Prophet Points'
    },
    techRequirement: 'Theology',
    productionCost: 400,
    bonuses: [
      'Establishes the Holy Council, enabling Diplomatic Religious Victory through global votes centuries before the United Nations!',
      '+2 Production from EVERY building of the Apostolic Palace faith across the entire world'
    ],
    quote: 'The sovereign pontiff is the only human whose feet are kissed by all princes.',
    quoteAuthor: 'Pope Gregory VII',
    quoteWork: 'Dictatus Papae (1075)',
    civilopediaExcerpt: 'Introduced in Civ IV: Beyond the Sword, the Apostolic Palace brings religious global diplomacy into the medieval age. The builder can pass international resolutions—enforcing trade embargoes, mandating open borders, assigning holy wars, or securing an early Religious Diplomatic Victory.',
    historicalContext: 'The papal palace complex in Vatican City containing the Papal Apartments, the Catholic Church government offices, and the Sistine Chapel.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civ4-university-sankore',
    name: 'University of Sankore',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: 'c. 1300 CE',
    location: {
      lat: 16.7758,
      lng: -3.0075,
      modernCountry: 'Mali',
      modernRegion: 'Timbuktu, Tombouctou Region'
    },
    yields: {
      culture: 8,
      greatPersonPoints: '+2 Great Scientist Points'
    },
    techRequirement: 'Paper',
    productionCost: 550,
    bonuses: [
      '+2 Science from EVERY religious building (Temples, Monasteries, Cathedrals) of your State Religion in every city!',
      'Forms the legendary "Holy Trinity" with the Spiral Minaret and Apostolic Palace'
    ],
    quote: 'Salt comes from the north, gold from the south, but the word of God and the treasures of wisdom come only from Timbuktu.',
    quoteAuthor: 'Sudanese Proverb',
    quoteWork: 'Civilization IV Wonder Quote (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'One of three ancient centers of learning located in Timbuktu, Mali. In Civilization IV, the University of Sankore turns piety directly into intellectual breakthrough, converting each religious sanctuary into a research laboratory.',
    historicalContext: 'Reached its peak of prosperity under the reign of Mansa Musa and the Songhai Empire, housing over 25,000 students and one of the largest manuscript libraries in the medieval world.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/1/1a/University_of_Sankore_%28Civ6%29.png/revision/latest?cb=20190226065434',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/2/29/University_of_Sankore_%28Civ6%29_splash.jpg/revision/latest?cb=20211029191107'
  },
  {
    id: 'civ4-shwedagon-paya',
    name: 'Shwedagon Paya',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 6th–10th Century CE',
    location: {
      lat: 16.7983,
      lng: 96.1497,
      modernCountry: 'Myanmar (Burma)',
      modernRegion: 'Yangon (Rangoon)'
    },
    yields: {
      culture: 6,
      greatPersonPoints: '+2 Great Prophet Points'
    },
    techRequirement: 'Meditation',
    productionCost: 450,
    bonuses: [
      'Unlocks ALL Religious Civics immediately (Organized Religion, Theocracy, Pacifism, Free Religion)!',
      'Permits adoption of Free Religion or Pacifism millennia ahead of the Renaissance and Enlightenment eras'
    ],
    quote: 'A golden mystery upheaved itself on the horizon, a beautiful winking wonder that blazed in the sun.',
    quoteAuthor: 'Rudyard Kipling',
    quoteWork: 'Letters of Marque (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'The Great Dagon Pagoda of Yangon is the most sacred Buddhist pagoda in Myanmar. In Civilization IV: Beyond the Sword, building Shwedagon Paya mirrors the Pyramids for religion: it unlocks all Religious Civics from the dawn of history.',
    historicalContext: 'A 112-meter gilded stupa encrusted with thousands of diamonds and rubies, enshrining relics of the four previous Buddhas of the present kalpa.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civ4-versailles',
    name: 'Versailles',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1661–1715 CE',
    location: {
      lat: 48.8049,
      lng: 2.1204,
      modernCountry: 'France',
      modernRegion: 'Versailles, Île-de-France'
    },
    yields: {
      culture: 10,
      greatPersonPoints: '+2 Great Artist Points'
    },
    techRequirement: 'Divine Right',
    productionCost: 800,
    bonuses: [
      'Acts as a SECOND PALACE (reduces city maintenance from distance for all nearby cities)!',
      'Enables massive colonial expansion onto distant foreign continents without crippling treasury costs'
    ],
    quote: 'I would rather produce fine flowers and fruits than construct huge stone palaces.',
    quoteAuthor: 'Jean-Baptiste de La Quintinie',
    quoteWork: 'Instruction pour les jardins fruitiers (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'Constructing Versailles in a distant conquered province or far-flung colony serves as a second imperial palace. In Civ IV, distance-to-capital maintenance can bankrupt an empire; Versailles cuts costs in half across entire overseas continents.',
    historicalContext: 'The principal royal residence of France from 1682 under Louis XIV until the French Revolution in 1789, designed by Louis Le Vau and Jules Hardouin-Mansart.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'
  },

  // ===================== CIV IV INDUSTRIAL & MODERN =====================
  {
    id: 'civ4-three-gorges-dam',
    name: 'Three Gorges Dam',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1994–2006 CE',
    location: {
      lat: 30.8267,
      lng: 111.0078,
      modernCountry: 'China',
      modernRegion: 'Yiling District, Yichang, Hubei'
    },
    yields: {
      greatPersonPoints: '+2 Great Engineer Points'
    },
    techRequirement: 'Plastics',
    productionCost: 1750,
    placementRequirement: 'Must be built in a city along a River.',
    bonuses: [
      'Provides clean, pollution-free POWER to EVERY SINGLE CITY on the same continent!',
      'Eliminates the need for coal and oil power plants, eliminating industrial unhealthiness across entire landmasses'
    ],
    quote: 'Walls of stone will stand against water, holding back the clouds and rain until a smooth lake rises in the narrow gorges.',
    quoteAuthor: 'Mao Zedong',
    quoteWork: 'Swimming (1956 Poem, Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'A hydroelectric gravity dam that spans the Yangtze River. In Civilization IV, the Three Gorges Dam is the ultimate industrial wonder, supercharging the manufacturing output of every city on your continent with clean electricity.',
    historicalContext: 'The world’s largest power station by installed capacity (22,500 MW), controlling catastrophic historic Yangtze floods and generating massive green power.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civ4-broadway',
    name: 'Broadway',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: 'c. 1890–1920 CE',
    location: {
      lat: 40.759,
      lng: -73.9845,
      modernCountry: 'United States',
      modernRegion: 'Manhattan, New York'
    },
    yields: {
      culture: 10,
      greatPersonPoints: '+2 Great Artist Points'
    },
    techRequirement: 'Mass Media',
    productionCost: 800,
    bonuses: [
      '+50% Culture in building city; provides 5 Hit Musicals luxury resources!',
      'Hit Musicals can be traded to foreign leaders for massive gold per turn or distributed for empire happiness'
    ],
    quote: 'There’s no business like show business, like no business I know.',
    quoteAuthor: 'Irving Berlin',
    quoteWork: 'Annie Get Your Gun (1946)',
    civilopediaExcerpt: 'Broadway represents the pinnacle of commercial musical theatre. In Civ IV, Broadway manufactures five tradeable Hit Musical commodities that bring happiness to your population or immense gold revenues from international diplomacy.',
    historicalContext: 'The famous theater district surrounding Times Square in Midtown Manhattan, where theatrical entertainment evolved into a multi-billion dollar cultural titan.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/b/b5/Broadway_%28Civ5%29.png/revision/latest?cb=20130704043217',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/d/df/Broadway_splash_%28Civ5%29.jpg/revision/latest?cb=20130928092807'
  },
  {
    id: 'civ4-space-elevator',
    name: 'Space Elevator',
    game: 'civ4',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: 'Futuristic Theoretical (~2050 CE)',
    location: {
      lat: -0.1807,
      lng: -78.4678,
      modernCountry: 'Ecuador',
      modernRegion: 'Equatorial Andes, Pichincha'
    },
    yields: {
      greatPersonPoints: '+2 Great Scientist Points'
    },
    techRequirement: 'Robotics',
    productionCost: 2000,
    placementRequirement: 'Must be built in a city located within 30 degrees latitude of the Equator.',
    bonuses: [
      '+100% Production towards all Space Race spaceship components in ALL cities!',
      'Virtually guarantees winning the Space Race victory in the late game'
    ],
    quote: 'The space elevator will be built about 50 years after everyone stops laughing.',
    quoteAuthor: 'Arthur C. Clarke',
    quoteWork: 'Speech at the International Astronautical Congress (Narrated by Leonard Nimoy)',
    civilopediaExcerpt: 'A proposed type of planet-to-space transportation system consisting of a cable anchored to the equator and extending into space. In Civilization IV, constructing this technological titan doubles spaceship construction speed across your entire empire.',
    historicalContext: 'First proposed by Russian scientist Konstantin Tsiolkovsky in 1895 inspired by the Eiffel Tower, requiring carbon nanotube materials with extraordinary tensile strength.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/0/07/CivilizationIV_Icon.png/revision/latest?cb=20161117163820',
    visualUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  }
];
