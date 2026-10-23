import { CivWonder } from '../types/wonder';
import { FANDOM_ASSETS } from './fandomAssets';

const BASE_CIV5_WONDERS: CivWonder[] = [
  // ===================== NATURAL WONDERS =====================
  {
    id: 'mt-kilimanjaro',
    name: 'Mount Kilimanjaro',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Geological formation (~1-2M ya)',
    location: {
      lat: -3.0674,
      lng: 37.3556,
      modernCountry: 'Tanzania',
      modernRegion: 'Kilimanjaro Region, East Africa'
    },
    yields: {
      faith: 3,
      culture: 2,
      food: 0
    },
    bonuses: [
      'Grants "Altitude Training" promotion to military units moving next to it (units fight 10% better on Hills and move at double speed on Hills)',
      'Provides permanent +1 Happiness upon initial discovery by your civilization'
    ],
    discoveryBonus: '+1 Permanent Happiness to discovering Civilization',
    quote: 'Kilimanjaro is a snow-covered mountain 19,710 feet high, and is said to be the highest mountain in Africa. Its western summit is called the Masai "Ngaje Ngai," the House of God.',
    quoteAuthor: 'Ernest Hemingway',
    quoteWork: 'The Snows of Kilimanjaro',
    civilopediaExcerpt: 'A dormant stratovolcano in Tanzania, Mount Kilimanjaro is the highest peak in Africa at 5,895 meters above sea level. It rises in solitary grandeur from the flat savanna plains. In Civilization V: Brave New World, it bestows the formidable Altitude Training promotion to any passing explorer or army, transforming troops into unstoppable highland skirmishers.',
    historicalContext: 'Composed of three distinct volcanic cones: Kibo, Mawenzi, and Shira. First summited in modern recorded times by Hans Meyer and Ludwig Purtscheller in 1889.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/8/8e/Mount_Kilimanjaro_%28Civ6%29.png/revision/latest?cb=20170327210503',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/b/bb/Natural_Wonder_Mount_Kilimanjaro_%28Civ6%29.jpg/revision/latest?cb=20161117164215',
    imageUrl: 'https://static.wikia.nocookie.net/civilization/images/b/bb/Natural_Wonder_Mount_Kilimanjaro_%28Civ6%29.jpg/revision/latest?cb=20161117164215'
  },
  {
    id: 'great-barrier-reef',
    name: 'Great Barrier Reef',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Holocene (~20,000 ya)',
    location: {
      lat: -18.2871,
      lng: 147.6992,
      modernCountry: 'Australia',
      modernRegion: 'Coral Sea, Queensland'
    },
    yields: {
      science: 4,
      food: 2,
      production: 2,
      gold: 2
    },
    bonuses: [
      'Occupies two contiguous water tiles on the map, each yielding +2 Science, +1 Food, +1 Production, and +1 Gold',
      'Spain doubles this yield with "Seven Cities of Gold" unique ability'
    ],
    discoveryBonus: '+1 Permanent Happiness; doubled if played as Spain',
    quote: 'The mind of man cannot conceive anything more wonderful than these banks of coral, and the beautiful fish of all sizes and hues which sport among them.',
    quoteAuthor: 'Captain James Cook',
    quoteWork: 'Journals of First Voyage',
    civilopediaExcerpt: 'The Great Barrier Reef is the worlds largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres. It is one of the premier wonder tiles in Civilization V due to its balanced composite yield.',
    historicalContext: 'Located off the coast of Queensland in north-eastern Australia. Visible from space and the worlds biggest single structure made by living organisms.',
    terrainRequirement: 'Coastal Water'
  },
  {
    id: 'cerro-de-potosi',
    name: 'Cerro de Potosí',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Discovered by Spanish in 1545',
    location: {
      lat: -19.6192,
      lng: -65.7497,
      modernCountry: 'Bolivia',
      modernRegion: 'Potosí Department, Andes'
    },
    yields: {
      gold: 10
    },
    bonuses: [
      'Massive +10 Gold base yield per worked turn',
      'The highest pure gold generating natural wonder tile in Civilization V'
    ],
    discoveryBonus: '+1 Permanent Happiness; grants 500 Gold if discovered first (100 Gold if second)',
    quote: 'I am rich Potosi, the treasure of the world, the king of mountains, and the envy of kings.',
    quoteAuthor: 'Coat of Arms of the Imperial City of Potosí',
    quoteWork: 'Civic Motto granted by Charles V',
    civilopediaExcerpt: 'Known as the "Rich Mountain" (Cerro Rico), Potosí provided the Spanish Empire with immense silver wealth that fueled the global economy for centuries. In Civ V, discovering and purchasing this tile provides an instant economic boom.',
    historicalContext: 'Over 40,000 metric tons of silver were extracted from Potosí during the Spanish colonial period, funding imperial wars across Europe and global trade fleets.'
  },
  {
    id: 'lake-victoria',
    name: 'Lake Victoria',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Geological (~400,000 ya)',
    location: {
      lat: -1.0435,
      lng: 33.0037,
      modernCountry: 'Uganda / Tanzania / Kenya',
      modernRegion: 'African Great Lakes'
    },
    yields: {
      food: 6
    },
    bonuses: [
      'Yields an astounding +6 Food per turn to whatever city works the tile',
      'Supercharges early population growth and science generation'
    ],
    discoveryBonus: '+1 Permanent Happiness; immense population engine',
    quote: 'I have seen the Nile in its infancy, and it is a glorious sight.',
    quoteAuthor: 'John Hanning Speke',
    quoteWork: 'Discovery of the Source of the Nile (1858)',
    civilopediaExcerpt: 'With a surface area of approximately 59,947 square kilometers, Lake Victoria is Africas largest lake by area, the worlds largest tropical lake, and the worlds second largest fresh water lake by surface area. In Civilization V, working this single tile allows a nascent settlement to grow into a metropolis with rapid speed.',
    historicalContext: 'Named after Queen Victoria by British explorer John Hanning Speke, who was the first recorded European to visit it while searching for the source of the Nile River.'
  },
  {
    id: 'krakatoa',
    name: 'Krakatoa',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Caldera eruption (1883 CE)',
    location: {
      lat: -6.1021,
      lng: 105.423,
      modernCountry: 'Indonesia',
      modernRegion: 'Sunda Strait'
    },
    yields: {
      science: 5
    },
    bonuses: [
      '+5 Science yield per worked turn',
      'Spawns in ocean waters, making city border reach crucial'
    ],
    discoveryBonus: '+1 Permanent Happiness to the discoverer',
    quote: 'The island had split into two, leaving a yawning crater in the ocean floor from which black fumes poured day and night.',
    quoteAuthor: 'Civilization V Narrator',
    quoteWork: 'Civilopedia Natural Wonders',
    civilopediaExcerpt: 'Krakatoa is a caldera in the Sunda Strait between the islands of Java and Sumatra in Indonesia. Its 1883 eruption was one of the deadliest and most destructive volcanic events in recorded history, heard nearly 3,000 miles away.',
    historicalContext: 'The catastrophic explosion in August 1883 produced shock waves that circled the globe seven times and lowered global summer temperatures by over 1 degree Celsius.'
  },
  {
    id: 'mt-sinai',
    name: 'Mount Sinai',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Ancient Biblical era',
    location: {
      lat: 28.5394,
      lng: 33.9753,
      modernCountry: 'Egypt',
      modernRegion: 'South Sinai Governorate'
    },
    yields: {
      faith: 8
    },
    bonuses: [
      '+8 Faith per turn — guarantees founding the worlds first Religion in Civilization V Gods & Kings',
      '+1 Happiness upon discovery'
    ],
    discoveryBonus: '+1 Permanent Happiness; dominant Faith fountainhead',
    quote: 'And Moses went up into the mount, and a cloud covered the mount. And the sight of the glory of the Lord was like devouring fire on the top of the mount in the eyes of the children of Israel.',
    quoteAuthor: 'The Book of Exodus',
    quoteWork: 'Exodus 24:15,17',
    civilopediaExcerpt: 'Rising dramatically in the southern Sinai Peninsula of Egypt, Mount Sinai is revered in Judaism, Christianity, and Islam as the sacred mountain where Moses received the Ten Commandments. In Civ V, settling near Mount Sinai virtually guarantees early religious supremacy and first pick of pantheon beliefs.',
    historicalContext: 'Located next to Saint Catherines Monastery, one of the oldest continuously functioning Christian monasteries in the world, founded in the 6th century by Emperor Justinian.'
  },
  {
    id: 'uluru',
    name: 'Uluru',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Neoproterozoic formation',
    location: {
      lat: -25.3444,
      lng: 131.0369,
      modernCountry: 'Australia',
      modernRegion: 'Red Centre, Northern Territory'
    },
    yields: {
      faith: 6,
      food: 2
    },
    bonuses: [
      '+6 Faith and +2 Food yield per turn',
      'Provides sustained population support while generating immense early faith'
    ],
    discoveryBonus: '+1 Permanent Happiness',
    quote: 'The rock is alive. It was created at the beginning of time by the ancestral beings of the Tjukurpa.',
    quoteAuthor: 'Anangu Oral Tradition',
    quoteWork: 'Tjukurpa Creation Law',
    civilopediaExcerpt: 'Uluru, also known as Ayers Rock, is a massive sandstone monolith in the heart of the northern Territorys arid "Red Centre". Sacred to indigenous Anangu people, the monolith glows brilliant orange and violet in dawn and dusk sunlight.',
    historicalContext: 'Composed of coarse-grained arkose sandstone that rises 348 meters above the desert plain, with the vast majority of its bulk extending kilometers deep into the subterranean crust.'
  },
  {
    id: 'mt-fuji',
    name: 'Mount Fuji',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Quaternary stratovolcano',
    location: {
      lat: 35.3606,
      lng: 138.7274,
      modernCountry: 'Japan',
      modernRegion: 'Shizuoka / Yamanashi'
    },
    yields: {
      culture: 3,
      faith: 3,
      gold: 2
    },
    bonuses: [
      'Balanced spiritual and aesthetic tile (+3 Culture, +3 Faith, +2 Gold)',
      'Inspires rapid border expansion and social policy acquisition'
    ],
    discoveryBonus: '+1 Permanent Happiness',
    quote: 'There is no mountain like Fuji in all the world; its symmetry is that of an opened fan inverted to the heavens.',
    quoteAuthor: 'Matsuo Bashō',
    quoteWork: 'Haiku Masterworks',
    civilopediaExcerpt: 'An iconic active stratovolcano southwest of Tokyo, Mount Fuji has inspired Japanese painters, poets, and pilgrims for millennia. In Civ V, working Fujisan fosters both early culture adoption and religious piety.',
    historicalContext: 'Recognized as a UNESCO World Heritage cultural site in 2013, immortalized in Katsushika Hokusai’s Thirty-Six Views of Mount Fuji print series.'
  },
  {
    id: 'old-faithful',
    name: 'Old Faithful',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Discovered 1870 by Washburn Expedition',
    location: {
      lat: 44.4605,
      lng: -110.8281,
      modernCountry: 'United States',
      modernRegion: 'Yellowstone, Wyoming'
    },
    yields: {
      science: 3,
      happiness: 2
    },
    bonuses: [
      '+3 Science and +2 Happiness when worked',
      'Direct local happiness injection into empire economy'
    ],
    discoveryBonus: '+1 Permanent Happiness on first sight',
    quote: 'It hurled with great force a stream of water ninety feet into the air, with a sound like that of a steam engine discharging its exhaust.',
    quoteAuthor: 'Nathaniel P. Langford',
    quoteWork: 'Washburn-Langford-Doane Expedition (1870)',
    civilopediaExcerpt: 'Old Faithful is a cone geyser located in Yellowstone National Park in Wyoming. It erupts every 44 to 125 minutes, shooting thousands of gallons of boiling hydrothermal water up to 180 feet into the air.',
    historicalContext: 'Named in 1870 by the Washburn Expedition, becoming the world’s most recognizable and studied geothermal feature.'
  },
  {
    id: 'rock-of-gibraltar',
    name: 'Rock of Gibraltar',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Jurassic limestone',
    location: {
      lat: 36.1408,
      lng: -5.3536,
      modernCountry: 'Gibraltar (British Overseas Territory)',
      modernRegion: 'Strait of Gibraltar'
    },
    yields: {
      food: 2,
      gold: 5
    },
    bonuses: [
      '+2 Food and +5 Gold; straddles maritime straits for strategic chokepoint defense',
      'Guarantees coastal city trade revenue'
    ],
    discoveryBonus: '+1 Permanent Happiness',
    quote: 'Beyond the Pillars of Hercules there lies an island larger than Libya and Asia together.',
    quoteAuthor: 'Plato',
    quoteWork: 'Timaeus',
    civilopediaExcerpt: 'Known in classical antiquity as Calpe, one of the two Pillars of Hercules that flanked the entrance to the Mediterranean Sea. In Civilization V, its coastal orientation makes it a coveted prize for naval empires looking to command maritime commerce.',
    historicalContext: 'A monolithic limestone promontory rising 426 meters above sea level, guarding the narrow maritime passage between the Atlantic Ocean and the Mediterranean Sea.'
  },
  {
    id: 'barringer-crater',
    name: 'Barringer Crater',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: '~50,000 years ago',
    location: {
      lat: 35.0276,
      lng: -111.0228,
      modernCountry: 'United States',
      modernRegion: 'Coconino County, Arizona'
    },
    yields: {
      gold: 3,
      science: 2
    },
    bonuses: [
      '+3 Gold and +2 Science per turn',
      'Valuable scientific curiosity in desert terrain'
    ],
    discoveryBonus: '+1 Permanent Happiness',
    quote: 'The bowl is circular, and its bottom lies deep below the plain. A monument of celestial fire buried in stone.',
    quoteAuthor: 'Daniel Barringer',
    quoteWork: 'Geological Investigations (1905)',
    civilopediaExcerpt: 'Barringer Crater (Meteor Crater) was formed when an iron-nickel meteorite approximately 50 meters wide slammed into the Colorado Plateau at an estimated speed of 12 kilometers per second, releasing energy equivalent to 10 megatons of TNT.',
    historicalContext: 'First proven impact crater on Earth, providing critical planetary science data regarding meteorite bombardment and lunar craters.'
  },
  {
    id: 'king-solomons-mines',
    name: "King Solomon's Mines",
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Biblical copper mines (~10th Century BCE)',
    location: {
      lat: 29.7891,
      lng: 34.9922,
      modernCountry: 'Israel / Jordan',
      modernRegion: 'Timna Valley, Arabah'
    },
    yields: {
      production: 6
    },
    bonuses: [
      '+6 Production per turn — unmatched early-game production hammer engine',
      'Allows a city to rapidly build World Wonders and train armies in record turns'
    ],
    discoveryBonus: '+1 Permanent Happiness; supreme military and building engine',
    quote: 'And all King Solomons drinking vessels were of gold, and all the vessels of the house of the forest of Lebanon were of pure gold; none were of silver: it was nothing accounted of in the days of Solomon.',
    quoteAuthor: 'First Book of Kings',
    quoteWork: '1 Kings 10:21',
    civilopediaExcerpt: 'The fabled mines of King Solomon, celebrated in Biblical lore and Victorian adventure fiction, represent the supreme industrial bounty in Civilization V. Working this tile provides +6 Production hammers, effectively doubling the industrial output of an early city.',
    historicalContext: 'Archaeological discoveries in the Timna Valley confirm extensive copper smelting operations dating precisely to the 10th century BCE, the era traditionally ascribed to King Solomon.'
  },

  // ===================== WORLD WONDERS =====================
  {
    id: 'great-pyramids',
    name: 'Pyramids',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 2560 BCE',
    location: {
      lat: 29.9792,
      lng: 31.1342,
      modernCountry: 'Egypt',
      modernRegion: 'Giza Plateau, Cairo'
    },
    techRequirement: 'Masonry',
    productionCost: 185,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      'Tile improvement construction speed is increased by 25%',
      '2 Workers immediately appear near the city where the wonder was constructed'
    ],
    quote: 'From the heights of these pyramids, forty centuries look down upon us.',
    quoteAuthor: 'Napoleon Bonaparte',
    quoteWork: 'Speech to the French Army before the Battle of the Pyramids (1798)',
    civilopediaExcerpt: 'The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
    historicalContext: 'Built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu over a 27-year period, consisting of approximately 2.3 million large stone blocks weighing an average of 2.5 tons each.',
    imageUrl: '/src/assets/images/pyramids_giza_civ_1792262637264.jpg'
  },
  {
    id: 'great-library',
    name: 'Great Library',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 280 BCE',
    location: {
      lat: 31.2089,
      lng: 29.9092,
      modernCountry: 'Egypt',
      modernRegion: 'Alexandria'
    },
    techRequirement: 'Writing',
    productionCost: 185,
    yields: {
      science: 3,
      culture: 1,
      greatPersonPoints: '+1 Great Scientist point'
    },
    bonuses: [
      'Provides a Free Technology immediately upon completion',
      'Provides a Free Library in the city where it is built',
      'Contains 2 Great Work of Writing slots'
    ],
    quote: 'A library is the delivery room for the birth of ideas, a place where history comes to life.',
    quoteAuthor: 'Norman Cousins',
    quoteWork: 'The Creative Process',
    civilopediaExcerpt: 'The Great Library of Alexandria was one of the largest and most significant libraries of the ancient world. Dedicated to the Muses, the nine goddesses of the arts, the library flourished under the patronage of the Ptolemaic dynasty and functioned as a major center of scholarship.',
    historicalContext: 'Founded by Ptolemy I Soter or his son Ptolemy II Philadelphus, it aimed to house scrolls from every civilization known to man. Its destruction remains one of antiquity’s most mourned intellectual catastrophes.'
  },
  {
    id: 'stonehenge',
    name: 'Stonehenge',
    type: 'world_wonder',
    era: 'Ancient',
    yearApprox: 'c. 3000–2000 BCE',
    location: {
      lat: 51.1789,
      lng: -1.8262,
      modernCountry: 'United Kingdom',
      modernRegion: 'Wiltshire, England'
    },
    techRequirement: 'Calendar',
    productionCost: 185,
    yields: {
      faith: 5,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      '+5 Faith per turn — guarantees founding a Pantheon and early Religion',
      'Generates Great Engineer points to rush subsequent wonders'
    ],
    quote: 'Can you stand on Stonehenge and understand its power? No, but you can feel it.',
    quoteAuthor: 'Civilization V Narrator',
    quoteWork: 'Civilopedia Ancient Wonders',
    civilopediaExcerpt: 'Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet high and seven feet wide, topped by connecting horizontal lintel stones.',
    historicalContext: 'Archaeologists believe it was constructed between 3000 BCE and 2000 BCE, aligned along the sunrise of the summer solstice and sunset of the winter solstice.'
  },
  {
    id: 'colossus-of-rhodes',
    name: 'Colossus',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: '280 BCE',
    location: {
      lat: 36.4511,
      lng: 28.2278,
      modernCountry: 'Greece',
      modernRegion: 'Rhodes Harbour, Dodecanese'
    },
    techRequirement: 'Iron Working',
    productionCost: 185,
    yields: {
      gold: 5,
      greatPersonPoints: '+1 Great Merchant point'
    },
    bonuses: [
      '+1 additional Trade Route slot and a free Cargo Ship unit',
      'Trade routes sent to this city generate +2 Gold for the owner, and trade routes sent by other civilizations generate +1 Gold for them and +2 Gold for you'
    ],
    terrainRequirement: 'Must be built on a coastal tile',
    quote: 'To you, O Sun, the people of Dorian Rhodes set up this bronze statue reaching to Olympus.',
    quoteAuthor: 'Ancient Dedication Epigram',
    quoteWork: 'Greek Anthology',
    civilopediaExcerpt: 'The Colossus of Rhodes was a statue of the Greek sun-god Helios, erected in the city of Rhodes by Chares of Lindos in 280 BCE. Constructed to celebrate the successful defense of Rhodes city against a siege by Demetrius Poliorcetes.',
    historicalContext: 'Stood approximately 33 meters high, about the height of the Statue of Liberty from feet to crown, before being toppled by an earthquake in 226 BCE.'
  },
  {
    id: 'great-wall-china',
    name: 'Great Wall',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: '7th c. BCE – 16th c. CE',
    location: {
      lat: 40.4319,
      lng: 116.5704,
      modernCountry: 'China',
      modernRegion: 'Mutianyu / Badaling, Beijing'
    },
    techRequirement: 'Engineering',
    productionCost: 250,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      'Enemy land units must spend 1 extra movement point per tile within your territory',
      'Provides a Free Walls in the city where it is built',
      'Effect obsolete upon researching Dynamite'
    ],
    quote: 'Now the wall is finished, but where is the empire it was built to protect?',
    quoteAuthor: 'Franz Kafka',
    quoteWork: 'The Great Wall of China',
    civilopediaExcerpt: 'The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.',
    historicalContext: 'Extending over 21,196 kilometers in its entirety across mountain ridges, deserts, and valleys, with major stone construction by the Ming Dynasty.'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: 'c. 1450 CE',
    location: {
      lat: -13.1631,
      lng: -72.545,
      modernCountry: 'Peru',
      modernRegion: 'Cusco Region, Urubamba Valley'
    },
    techRequirement: 'Guilds',
    productionCost: 300,
    yields: {
      gold: 5,
      faith: 2,
      greatPersonPoints: '+1 Great Merchant point'
    },
    bonuses: [
      '+25% Gold from City Connections throughout your entire empire',
      'Provides +5 Gold and +2 Faith directly in the host city'
    ],
    terrainRequirement: 'Must be built in a city within 2 tiles of a Mountain',
    quote: 'Machu Picchu: the city above the clouds, carved of Andean granite by the children of the Sun.',
    quoteAuthor: 'Hiram Bingham',
    quoteWork: 'Inca Land (1922)',
    civilopediaExcerpt: 'Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 meters above sea level in the Eastern Cordillera of southern Peru. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti.',
    historicalContext: 'Built without mortar using dry-stone walls ("ashlar"), engineered with sophisticated agricultural drainage terraces and celestial alignments.',
    iconUrl: 'https://static.wikia.nocookie.net/civilization/images/b/be/Machu_Picchu_%28Civ6%29.png/revision/latest?cb=20201202202551',
    visualUrl: 'https://static.wikia.nocookie.net/civilization/images/8/87/Wonder_Machu_Picchu_%28Civ6%29.png/revision/latest?cb=20190214234709',
    imageUrl: 'https://static.wikia.nocookie.net/civilization/images/8/87/Wonder_Machu_Picchu_%28Civ6%29.png/revision/latest?cb=20190214234709'
  },
  {
    id: 'chichen-itza',
    name: 'Chichen Itza',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: 'c. 600–900 CE',
    location: {
      lat: 20.6843,
      lng: -88.5678,
      modernCountry: 'Mexico',
      modernRegion: 'Yucatán Peninsula'
    },
    techRequirement: 'Civil Service',
    productionCost: 300,
    yields: {
      happiness: 4,
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      'Length of Golden Ages is increased by 50% across your entire civilization',
      'Provides +4 Happiness directly to support imperial expansion'
    ],
    quote: 'The rays of the sun create an undulating serpent descending the northern staircase at the equinox.',
    quoteAuthor: 'Alfred Maudslay',
    quoteWork: 'Biologia Centrali-Americana: Archaeology',
    civilopediaExcerpt: 'Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The centerpiece is El Castillo (the Temple of Kukulcan), a step pyramid displaying the Mayas extraordinary mastery of astronomy and mathematics.',
    historicalContext: 'During the spring and autumn equinoxes, the late afternoon sun casts a shadow across the balustrade resembling a feathered serpent slithering down to join the serpent head at the base.'
  },
  {
    id: 'notre-dame',
    name: 'Notre Dame',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '1163–1345 CE',
    location: {
      lat: 48.853,
      lng: 2.3499,
      modernCountry: 'France',
      modernRegion: 'Île de la Cité, Paris'
    },
    techRequirement: 'Physics',
    productionCost: 400,
    yields: {
      happiness: 10,
      faith: 4,
      greatPersonPoints: '+1 Great Merchant point'
    },
    bonuses: [
      'Provides a massive +10 Happiness — the single biggest flat happiness wonder in Civ V',
      '+4 Faith generation per turn'
    ],
    quote: 'Architecture has recorded the great ideas of the human race. Not only every religious symbol, but every human thought has its page in that vast book.',
    quoteAuthor: 'Victor Hugo',
    quoteWork: 'The Hunchback of Notre-Dame (1831)',
    civilopediaExcerpt: 'Notre-Dame de Paris is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. Dedicated to the Virgin Mary, it is considered one of the finest examples of French Gothic architecture.',
    historicalContext: 'Pioneered the innovative use of the rib vault and flying buttress, enabling enormous stained glass rose windows that fill the nave with radiant polychrome light.'
  },
  {
    id: 'hagia-sophia',
    name: 'Hagia Sophia',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '537 CE',
    location: {
      lat: 41.0086,
      lng: 28.9802,
      modernCountry: 'Turkey',
      modernRegion: 'Fatih, Istanbul'
    },
    techRequirement: 'Theology',
    productionCost: 300,
    yields: {
      faith: 3,
      greatPersonPoints: '+1 Great Prophet point'
    },
    bonuses: [
      'A Great Prophet appears near the city',
      'Provides a Free Temple in the city where it is built'
    ],
    quote: 'Solomon, I have surpassed thee!',
    quoteAuthor: 'Emperor Justinian I',
    quoteWork: 'Recorded upon the dedication of Hagia Sophia (537 CE)',
    civilopediaExcerpt: 'Built in Constantinople by the Byzantine Emperor Justinian I, Hagia Sophia (Holy Wisdom) served as the imperial cathedral of the Byzantine Empire and later as an imperial mosque following the Ottoman conquest.',
    historicalContext: 'Its revolutionary pendentive dome seemed to contemporaries to hang by a golden chain suspended directly from heaven, remaining the worlds largest cathedral for nearly a millennium.'
  },
  {
    id: 'forbidden-palace',
    name: 'Forbidden Palace',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1406–1420 CE',
    location: {
      lat: 39.9163,
      lng: 116.3972,
      modernCountry: 'China',
      modernRegion: 'Dongcheng, Beijing'
    },
    techRequirement: 'Banking',
    productionCost: 500,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Merchant point'
    },
    bonuses: [
      '-10% Unhappiness from Citizens in non-occupied cities',
      'Grants +2 additional Delegates in the World Congress',
      'Prerequisite: Must adopt Patronage social policy tree'
    ],
    quote: 'The palace was forbidden to commoners; behind its vermilion walls the Son of Heaven governed the Middle Kingdom in celestial seclusion.',
    quoteAuthor: 'Civilization V Narrator',
    quoteWork: 'Civilopedia Renaissance Wonders',
    civilopediaExcerpt: 'The Forbidden City was the Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty to the end of the Qing dynasty. For almost 500 years, it served as the home of Chinese emperors and their households.',
    historicalContext: 'Spanning 72 hectares with 980 surviving buildings and reported 9,999 rooms, designed around strict axial symmetry reflecting traditional Chinese philosophical cosmologies.'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1632–1653 CE',
    location: {
      lat: 27.1751,
      lng: 78.0421,
      modernCountry: 'India',
      modernRegion: 'Agra, Uttar Pradesh'
    },
    techRequirement: 'Architecture',
    productionCost: 500,
    yields: {
      happiness: 4,
      culture: 1,
      greatPersonPoints: '+1 Great Merchant point'
    },
    bonuses: [
      'Triggers an immediate Golden Age upon completion',
      'Provides +4 Happiness and +1 Culture'
    ],
    quote: 'A tear on the cheek of time.',
    quoteAuthor: 'Rabindranath Tagore',
    quoteWork: 'Lover’s Gift and Crossing',
    civilopediaExcerpt: 'An ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. It is regarded by many as the finest example of Mughal architecture.',
    historicalContext: 'Employing thousands of artisans from Persia, Europe, and the Ottoman Empire, the central white marble dome is flanked by four minarets tilted slightly outward to protect the central shrine in case of collapse.'
  },
  {
    id: 'sistine-chapel',
    name: 'Sistine Chapel',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1473–1512 CE',
    location: {
      lat: 41.9029,
      lng: 12.4545,
      modernCountry: 'Vatican City',
      modernRegion: 'Apostolic Palace'
    },
    techRequirement: 'Acoustics',
    productionCost: 500,
    yields: {
      culture: 1,
      greatPersonPoints: '+2 Great Artist points'
    },
    bonuses: [
      '+25% Culture in all cities across your entire civilization',
      'Contains 2 Great Work of Art slots'
    ],
    quote: 'Without having seen the Sistine Chapel, one can form no appreciable idea of what one man is capable of achieving.',
    quoteAuthor: 'Johann Wolfgang von Goethe',
    quoteWork: 'Italian Journey (1787)',
    civilopediaExcerpt: 'A chapel in the Apostolic Palace, the official residence of the Pope in Vatican City. Famous for its Renaissance frescoes painted by Michelangelo, including the Creation of Adam on the ceiling and The Last Judgment on the altar wall.',
    historicalContext: 'Michelangelo spent four grueling years (1508–1512) painting the ceiling while standing upright on custom wooden scaffolding, permanently cementing high Renaissance humanism.'
  },
  {
    id: 'big-ben',
    name: 'Big Ben',
    type: 'world_wonder',
    era: 'Industrial',
    yearApprox: '1859 CE',
    location: {
      lat: 51.5007,
      lng: -0.1246,
      modernCountry: 'United Kingdom',
      modernRegion: 'Palace of Westminster, London'
    },
    techRequirement: 'Industrialization',
    productionCost: 750,
    yields: {
      gold: 4,
      culture: 1,
      greatPersonPoints: '+2 Great Merchant points'
    },
    bonuses: [
      'Cost of purchasing items in cities with Gold is reduced by 15%',
      'Stacks with Mercantilism commerce policy for 40% discount on all gold purchases',
      'Prerequisite: Must adopt Commerce social policy tree'
    ],
    quote: 'The Great Bell chimed, its resonant boom carrying across the Thames as a testament to British punctuality and commerce.',
    quoteAuthor: 'Charles Dickens',
    quoteWork: 'Sketches of London',
    civilopediaExcerpt: 'Big Ben is the nickname for the Great Bell of the Great Clock of Westminster at the north end of the Houses of Parliament in London. In Civ V, Big Ben is the cornerstone of economic purchase power, allowing wealthy empires to buy armies and infrastructure instantaneously.',
    historicalContext: 'Designed by Augustus Pugin in a neo-Gothic style, the four-faced chiming clock was the largest and most accurate four-faced chiming clock in the world when inaugurated in 1859.'
  },
  {
    id: 'eiffel-tower',
    name: 'Eiffel Tower',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1889 CE',
    location: {
      lat: 48.8584,
      lng: 2.2945,
      modernCountry: 'France',
      modernRegion: 'Champ de Mars, Paris'
    },
    techRequirement: 'Radio',
    productionCost: 1060,
    yields: {
      happiness: 5,
      tourism: 12,
      culture: 1,
      greatPersonPoints: '+2 Great Merchant points'
    },
    bonuses: [
      'Provides a massive +12 Tourism and +5 Happiness',
      'Crucial lynchpin for cultural victory in Brave New World'
    ],
    quote: 'I ought to be jealous of the tower. She is more famous than I am.',
    quoteAuthor: 'Gustave Eiffel',
    quoteWork: 'Memoirs on the Universal Exposition',
    civilopediaExcerpt: 'Constructed from 1887 to 1889 as the entrance arch to the 1889 Worlds Fair, the Eiffel Tower was initially criticized by some of Frances leading artists and intellectuals, but it has become a global cultural icon of France and one of the most recognizable structures in the world.',
    historicalContext: 'At 330 meters tall, it was the tallest man-made structure in the world for 41 years until the Chrysler Building in New York was finished in 1930.'
  },
  {
    id: 'statue-of-liberty',
    name: 'Statue of Liberty',
    type: 'world_wonder',
    era: 'Industrial',
    yearApprox: '1886 CE',
    location: {
      lat: 40.6892,
      lng: -74.0445,
      modernCountry: 'United States',
      modernRegion: 'Liberty Island, New York'
    },
    techRequirement: 'Replaceable Parts',
    productionCost: 1060,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      '+1 Production for all Specialists in every city across your empire',
      'Grants 1 Free Social Policy upon construction',
      'Prerequisite: Must adopt Freedom Ideology'
    ],
    quote: 'Give me your tired, your poor, Your huddled masses yearning to breathe free, The wretched refuse of your teeming shore.',
    quoteAuthor: 'Emma Lazarus',
    quoteWork: 'The New Colossus (1883)',
    civilopediaExcerpt: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.',
    historicalContext: 'Dedicated on October 28, 1886, Liberty holds a torch above her head and a tabula ansata inscribed July 4, 1776, with a broken shackle and chain lying at her feet.'
  },
  {
    id: 'cristo-redentor',
    name: 'Cristo Redentor',
    type: 'world_wonder',
    era: 'Modern',
    yearApprox: '1931 CE',
    location: {
      lat: -22.9519,
      lng: -43.2105,
      modernCountry: 'Brazil',
      modernRegion: 'Corcovado, Rio de Janeiro'
    },
    techRequirement: 'Plastics',
    productionCost: 1250,
    yields: {
      culture: 4,
      greatPersonPoints: '+1 Great Artist point'
    },
    bonuses: [
      'Culture cost of adopting new Social Policies is reduced by 10% across your empire',
      '+4 Culture and Great Artist points'
    ],
    quote: 'High on the mount of Corcovado, Christ the Redeemer opens his arms to embrace the city and the world.',
    quoteAuthor: 'Heitor da Silva Costa',
    quoteWork: 'Inaugural Address (1931)',
    civilopediaExcerpt: 'An Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa in collaboration with French engineer Albert Caquot. Located at the peak of the 700-meter Corcovado mountain.',
    historicalContext: 'Standing 30 meters tall with an arm span of 28 meters, constructed from reinforced concrete faced with thousands of triangular soapstone tiles.'
  },
  {
    id: 'sydney-opera-house',
    name: 'Sydney Opera House',
    type: 'world_wonder',
    era: 'Atomic',
    yearApprox: '1973 CE',
    location: {
      lat: -33.8568,
      lng: 151.2153,
      modernCountry: 'Australia',
      modernRegion: 'Bennelong Point, Sydney'
    },
    techRequirement: 'Telecom',
    productionCost: 1250,
    yields: {
      culture: 2,
      greatPersonPoints: '+2 Great Musician points'
    },
    bonuses: [
      '+50% Culture in the city where it is built',
      'Provides 1 Free Social Policy',
      'Contains 2 Great Work of Music slots'
    ],
    terrainRequirement: 'Must be built on a coastal tile',
    quote: 'The human spirit must prevail over technology. It was an exercise in geometry that created beauty out of the sea.',
    quoteAuthor: 'Jørn Utzon',
    quoteWork: 'Architectural Reflections',
    civilopediaExcerpt: 'A multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. Designed by Danish architect Jørn Utzon, the building was formally opened on 20 October 1973 after Utzons design was selected in 1957 as the winner of an international design competition.',
    historicalContext: 'Its precast concrete interlocking vault shells evoke billowing sails drifting over Sydney Harbour, recognized as a masterpiece of late modern architecture.'
  },
  {
    id: 'mt-kailash',
    name: 'Mount Kailash',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Himalayan orogeny',
    location: {
      lat: 31.0669,
      lng: 81.3119,
      modernCountry: 'Tibet / China',
      modernRegion: 'Ngari Prefecture, Transhimalaya'
    },
    yields: {
      faith: 6,
      happiness: 2
    },
    bonuses: [
      '+6 Faith and +2 Happiness per turn',
      'Sacred peak venerated across four world religions (Hinduism, Buddhism, Jainism, Bön)'
    ],
    discoveryBonus: '+1 Permanent Happiness to empire',
    quote: 'No mortal man shall ever ascend the peak of Kailash, for it is the abode of the gods, and where holy silence reigns.',
    quoteAuthor: 'Ancient Tibetan Manuscript',
    quoteWork: 'Lamaist Chronicles',
    civilopediaExcerpt: 'A sacred peak rising 6,638 meters in the Kailash Range of the Transhimalaya. It is deemed so sacred that it has never been climbed in modern recorded history. In Civilization V, its extraordinary Faith and Happiness output turns any desert mountain settlement into a beacon of spiritual civilization.',
    historicalContext: 'Located near the sources of four of Asias most vital rivers: the Indus, the Sutlej, the Brahmaputra, and the Karnali.'
  },
  {
    id: 'grand-mesa',
    name: 'Grand Mesa',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Cenozoic basalt cap',
    location: {
      lat: 39.0433,
      lng: -108.0673,
      modernCountry: 'United States',
      modernRegion: 'Mesa County, Colorado'
    },
    yields: {
      production: 2,
      gold: 3
    },
    bonuses: [
      '+2 Production and +3 Gold yield',
      'The worlds largest flat-topped mountain provides versatile early-game economy'
    ],
    discoveryBonus: '+1 Permanent Happiness',
    quote: 'The great tabletop rose sheer from the valley floor, capped with basalt and crowned by over three hundred pristine lakes.',
    quoteAuthor: 'Civilization V Narrator',
    quoteWork: 'Civilopedia Natural Wonders',
    civilopediaExcerpt: 'The Grand Mesa is a large mesa in western Colorado in the United States. It is the largest flat-topped mountain in the world, encompassing an area of about 500 square miles and rising over 11,000 feet in elevation.',
    historicalContext: 'Protected by a hard basalt cap that resisted erosion while the surrounding softer shale valleys were carved away by rivers over millions of years.'
  },
  {
    id: 'fountain-of-youth',
    name: 'Fountain of Youth',
    type: 'natural_wonder',
    era: 'Timeless',
    yearApprox: 'Legendary (~1513 CE expedition)',
    location: {
      lat: 25.7289,
      lng: -79.2975,
      modernCountry: 'Bahamas / Florida Straits',
      modernRegion: 'South Bimini'
    },
    yields: {
      happiness: 10
    },
    bonuses: [
      'Astounding +10 Happiness per turn — the rarest and most legendary natural wonder in Civilization V',
      'Military units that stop adjacent to it gain "Rejuvenation" (doubles unit healing rate forever)'
    ],
    discoveryBonus: '+1 Permanent Happiness; unit healing rate doubled for life',
    quote: 'They say there exists a spring whose waters restore youth to the aged and vigour to the sick.',
    quoteAuthor: 'Peter Martyr d’Anghiera',
    quoteWork: 'De Orbe Novo (1511)',
    civilopediaExcerpt: 'A mythical spring that allegedly restores the youth of anyone who drinks or bathes in its waters. In Civilization V, finding the Fountain of Youth is a legendary stroke of fortune, giving +10 Happiness and conferring the permanent Rejuvenation combat promotion.',
    historicalContext: 'Popularized by Spanish conquistador Juan Ponce de León during his voyage to Florida and the Bahamas in 1513.'
  },
  {
    id: 'petra',
    name: 'Petra',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 312 BCE',
    location: {
      lat: 30.3285,
      lng: 35.4444,
      modernCountry: 'Jordan',
      modernRegion: 'Ma\'an Governorate, Arabah'
    },
    techRequirement: 'Currency',
    productionCost: 250,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      '+1 Food and +1 Production on all non-flood plains Desert tiles worked by this city',
      '+1 extra Trade Route slot and a free Caravan unit',
      'Provides +6 Culture after Archaeology is researched',
      'Prerequisite: City must be built on or adjacent to Desert'
    ],
    terrainRequirement: 'Must be built in or adjacent to Desert',
    quote: 'A rose-red city half as old as time.',
    quoteWork: 'Petra (Newdigate Prize Poem, 1845)',
    quoteAuthor: 'John William Burgon',
    civilopediaExcerpt: 'Petra is a historic and archaeological city in southern Jordan. Famous for its rock-cut architecture and water conduit system, Petra is also called the "Rose City" due to the color of the sandstone from which it is carved.',
    historicalContext: 'Capital of the Nabataean Kingdom, Petra flourished due to its proximity to frankincense, myrrh, and spice trade routes connecting southern Arabia to the Mediterranean.'
  },
  {
    id: 'hanging-gardens',
    name: 'Hanging Gardens',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: 'c. 600 BCE',
    location: {
      lat: 32.5355,
      lng: 44.4275,
      modernCountry: 'Iraq',
      modernRegion: 'Babylon, Hillah'
    },
    techRequirement: 'Mathematics',
    productionCost: 250,
    yields: {
      food: 6,
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      '+6 Food in the city where it is built',
      'Provides a Free Garden in the host city, increasing Great Person generation rate by 25%'
    ],
    quote: 'The approach to the Garden sloped like a hillside and the several parts of the structure rose from one another tier on tier.',
    quoteAuthor: 'Diodorus Siculus',
    quoteWork: 'Bibliotheca Historica',
    civilopediaExcerpt: 'The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. Described as a remarkable feat of engineering with an ascending series of tiered gardens containing a wide variety of trees, shrubs, and vines, resembling a large green mountain constructed of mud bricks.',
    historicalContext: 'Said to have been built by King Nebuchadnezzar II for his Median wife, Queen Amytis, who missed the verdant green hills of her homeland.'
  },
  {
    id: 'alhambra',
    name: 'Alhambra',
    type: 'world_wonder',
    era: 'Medieval',
    yearApprox: '1238–1358 CE',
    location: {
      lat: 37.1773,
      lng: -3.5881,
      modernCountry: 'Spain',
      modernRegion: 'Granada, Andalusia'
    },
    techRequirement: 'Chivalry',
    productionCost: 400,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Artist point'
    },
    bonuses: [
      'All newly-trained melee units in this city receive the Drill I promotion (+15% combat strength in rough terrain)',
      'Provides a Free Castle in the city',
      '+20% Culture in the city where it is built'
    ],
    quote: 'Give him alms, maiden, for there is nothing in this life as sad as to be blind in Granada.',
    quoteAuthor: 'Francisco A. de Icaza',
    quoteWork: 'Inscription at the Alhambra',
    civilopediaExcerpt: 'The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. Originally constructed as a small fortress in AD 889, it was renovated and rebuilt in the mid-13th century by the Nasrid emir Mohammed ben Al-Ahmar of the Emirate of Granada.',
    historicalContext: 'Known for its exquisite Islamic decorative tilework, intricate arabesque stucco work, and courtyard water gardens including the famous Court of the Lions.'
  },
  {
    id: 'terracotta-army',
    name: 'Terracotta Army',
    type: 'world_wonder',
    era: 'Classical',
    yearApprox: '210–209 BCE',
    location: {
      lat: 34.3841,
      lng: 109.2785,
      modernCountry: 'China',
      modernRegion: 'Lintong District, Xi\'an, Shaanxi'
    },
    techRequirement: 'Construction',
    productionCost: 250,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      'Immediately creates a copy of each land military unit type in your empire outside the city where it is built',
      'Instant military mobilization multiplier for defensive or offensive warfare'
    ],
    quote: 'The tomb was filled with models of palaces, pavilions of various officials, as well as fine vessels, precious stones and rarities.',
    quoteAuthor: 'Sima Qian',
    quoteWork: 'Records of the Grand Historian (Shiji)',
    civilopediaExcerpt: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting the emperor in his afterlife.',
    historicalContext: 'Discovered in 1974 by local farmers digging a well, the pits contain an estimated 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses, each figure crafted with unique individualized facial features.'
  },
  {
    id: 'brandenburg-gate',
    name: 'Brandenburg Gate',
    type: 'world_wonder',
    era: 'Industrial',
    yearApprox: '1788–1791 CE',
    location: {
      lat: 52.5163,
      lng: 13.3777,
      modernCountry: 'Germany',
      modernRegion: 'Mitte, Berlin'
    },
    techRequirement: 'Military Science',
    productionCost: 750,
    yields: {
      culture: 1,
      greatPersonPoints: '+2 Great Scientist points'
    },
    bonuses: [
      'A Great General appears near the city',
      'All newly-trained military units in this city receive +15 Experience points (XP)'
    ],
    quote: 'General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe... come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!',
    quoteAuthor: 'Ronald Reagan',
    quoteWork: 'Speech at the Brandenburg Gate (1987)',
    civilopediaExcerpt: 'An 18th-century neoclassical monument in Berlin, commissioned by Prussian King Frederick William II. Throughout its existence, the Brandenburg Gate was often a site for major historical events and is today considered a national symbol of German and European unity.',
    historicalContext: 'Crowned by the Quadriga, a chariot drawn by four horses driven by Victoria, the Roman goddess of victory.'
  },
  {
    id: 'red-fort',
    name: 'Red Fort',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1638–1648 CE',
    location: {
      lat: 28.6562,
      lng: 77.241,
      modernCountry: 'India',
      modernRegion: 'Old Delhi'
    },
    techRequirement: 'Metallurgy',
    productionCost: 625,
    yields: {
      culture: 1,
      greatPersonPoints: '+2 Great Scientist points'
    },
    bonuses: [
      'Defensive buildings (Walls, Castle, Arsenal, Military Base) provide +25% Defensive Strength in all cities',
      'Provides a Free Castle in the host city'
    ],
    quote: 'If there be a paradise on earth, it is here, it is here, it is here.',
    quoteAuthor: 'Amir Khusrow',
    quoteWork: 'Inscription on the Diwan-i-Khas, Red Fort',
    civilopediaExcerpt: 'The Red Fort (Lal Qila) is a historic fort in the Old Delhi neighborhood of Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort in 1638, when he decided to shift his capital from Agra to Delhi.',
    historicalContext: 'Enclosed by massive octagonal red sandstone walls rising 33 meters high, blending Persian palace architecture with Indian traditions.'
  },
  {
    id: 'leaning-tower-of-pisa',
    name: 'Leaning Tower of Pisa',
    type: 'world_wonder',
    era: 'Renaissance',
    yearApprox: '1173–1372 CE',
    location: {
      lat: 43.723,
      lng: 10.3966,
      modernCountry: 'Italy',
      modernRegion: 'Piazza dei Miracoli, Pisa, Tuscany'
    },
    techRequirement: 'Printing Press',
    productionCost: 500,
    yields: {
      culture: 1,
      greatPersonPoints: '+1 Great Engineer point'
    },
    bonuses: [
      '+25% Great Person generation in all cities throughout your empire',
      'A Free Great Person of your choice appears near the city'
    ],
    quote: 'Galileo Galilei dropped two cannonballs of different masses from the leaning campanile to demonstrate that their speed of descent was independent of their mass.',
    quoteAuthor: 'Vincenzo Viviani',
    quoteWork: 'Historical Account of Galileo (1654)',
    civilopediaExcerpt: 'The campanile of Pisa Cathedral is famous worldwide for its unintended tilt. Built on an unstable foundation of sand and clay, the tower began leaning during construction in the 12th century.',
    historicalContext: 'Standing 56 meters tall with eight tiers of white marble arcades, stabilized by modern geotechnical counterweights.'
  },
  {
    id: 'hubble-space-telescope',
    name: 'Hubble Space Telescope',
    type: 'world_wonder',
    era: 'Information',
    yearApprox: '1990 CE',
    location: {
      lat: 28.5729,
      lng: -80.649,
      modernCountry: 'United States / Low Earth Orbit',
      modernRegion: 'Kennedy Space Center (Launch Site)'
    },
    techRequirement: 'Satellites',
    productionCost: 1250,
    yields: {
      greatPersonPoints: '+1 Great Scientist point'
    },
    bonuses: [
      '2 Great Scientists appear near the city',
      'Provides a Free Spaceship Factory in the host city',
      '+25% Science from all future Spaceship part production'
    ],
    quote: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
    quoteAuthor: 'Edwin Powell Hubble',
    quoteWork: 'The Realm of the Nebulae (1936)',
    civilopediaExcerpt: 'A space telescope that was launched into low Earth orbit in 1990 and remains in operation. Although not the first space telescope, Hubble is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.',
    historicalContext: 'Hubbles deep field images revealed thousands of distant galaxies in what appeared to be empty patches of space, accurately dating the age of the universe to ~13.8 billion years.'
  }
];

export const CIV5_WONDERS: CivWonder[] = BASE_CIV5_WONDERS.map((w) => {
  const fandom = FANDOM_ASSETS[w.id];
  return {
    ...w,
    game: 'civ5',
    iconUrl: w.iconUrl || fandom?.iconUrl || undefined,
    visualUrl: w.visualUrl || fandom?.visualUrl || w.imageUrl,
    imageUrl: w.imageUrl || fandom?.visualUrl || w.visualUrl
  };
});

