import urllib.request, json, re, time

with open('src/data/civ6_asset_urls.json') as f:
    assets = json.load(f)

icons = assets.get('icons', {})
images = assets.get('images', {})
nat_images = assets.get('natural_images', {})

def get_asset_url(name, is_icon=False, is_nat=False):
    clean = re.sub(r'[^a-z0-9]', '', name.lower())
    if is_icon:
        for k, v in icons.items():
            k_clean = re.sub(r'[^a-z0-9]', '', k.lower().replace('file:', '').replace('(civ6)', ''))
            if clean == k_clean:
                return v
        for k, v in icons.items():
            k_clean = re.sub(r'[^a-z0-9]', '', k.lower().replace('file:', '').replace('(civ6)', ''))
            if clean in k_clean or k_clean in clean:
                return v
        return None
    else:
        coll = nat_images if is_nat else images
        other = images if is_nat else nat_images
        for k, v in coll.items():
            k_clean = re.sub(r'[^a-z0-9]', '', k.lower().replace('file:', '').replace('(civ6)', '').replace('wonder', '').replace('ingame', '').replace('completed', '').replace('discovery', ''))
            if clean == k_clean or clean in k_clean:
                return v
        for k, v in other.items():
            k_clean = re.sub(r'[^a-z0-9]', '', k.lower().replace('file:', '').replace('(civ6)', '').replace('wonder', '').replace('ingame', '').replace('completed', '').replace('discovery', ''))
            if clean == k_clean or clean in k_clean:
                return v
        return None

# Known metadata & geographic coordinates for all Civ 6 World Wonders
CIV6_WORLD_METADATA = {
    "Alhambra": {
        "era": "Medieval", "year": "1238 CE", "lat": 37.1773, "lng": -3.5986, "country": "Spain", "region": "Granada, Andalusia",
        "tech": "Castles", "cost": 710, "placement": "Must be built on Hills adjacent to an Encampment district.",
        "yields": {"amenity": 2, "greatPersonPoints": "+2 Great General points"},
        "bonuses": ["+1 Military policy slot", "Provides the amenities of 2 Entertainment Complex districts", "All units defend as if fortified behind a Fort"],
        "quote": "Everything has a limit, and every beginning has an end. The morning must always follow the night.",
        "author": "Ibn Zamrak", "work": "Inscriptions on the Alhambra Walls",
        "civilopedia": "A fortress and palace complex in Granada, Spain, constructed by the Nasrid dynasty. A peak of Islamic architecture in Al-Andalus featuring the Court of the Lions and intricate arabesque stucco work.",
        "context": "Declared a UNESCO World Heritage site and preserved as one of the finest surviving medieval palaces in Europe."
    },
    "Amundsen-Scott Research Station": {
        "era": "Atomic", "year": "1956 CE", "lat": -90.0, "lng": 0.0, "country": "Antarctica", "region": "Geographic South Pole",
        "tech": "Cold War", "cost": 1620, "placement": "Must be built on Snow or Tundra tile adjacent to a Campus with a Research Lab.",
        "yields": {"science": 5, "greatPersonPoints": "+5 Great Scientist points"},
        "bonuses": ["+20% Science and +10% Production in all cities with at least 5 Snow or Tundra tiles", "Doubled bonuses if city has 5 Snow tiles"],
        "quote": "The conditions were beyond human endurance. Yet here we are.",
        "author": "Roald Amundsen", "work": "The South Pole Expedition (1911)",
        "civilopedia": "The southernmost inhabited scientific station on Earth, continuously staffed since 1956 to monitor atmospheric science, astrophysics, and climate history.",
        "context": "Named in honor of pioneers Roald Amundsen and Robert F. Scott, whose historic race to the South Pole completed in 1911-1912."
    },
    "Angkor Wat": {
        "era": "Medieval", "year": "1150 CE", "lat": 13.4125, "lng": 103.8670, "country": "Cambodia", "region": "Siem Reap",
        "tech": "Medieval Faires", "cost": 710, "placement": "Must be built adjacent to an Aqueduct district.",
        "yields": {"faith": 2, "food": 1},
        "bonuses": ["+1 Population in all current cities", "+1 Housing in all cities empire-wide"],
        "quote": "The city was so vast that thousands of men were needed to keep the jungle from reclaiming the stone terraces.",
        "author": "António da Madalena", "work": "Account of Angkor (1586)",
        "civilopedia": "The largest religious monument in the world by land area, originally built as a Hindu temple for the god Vishnu before gradually converting to a Buddhist temple.",
        "context": "Built by King Suryavarman II at the heart of the Khmer Empire, symbolizing Mount Meru, home of the devas in Hindu mythology."
    },
    "Apadana": {
        "era": "Classical", "year": "515 BCE", "lat": 29.9354, "lng": 52.8914, "country": "Iran", "region": "Fars Province (Persepolis)",
        "tech": "Political Philosophy", "cost": 400, "placement": "Must be built adjacent to your Capital city center.",
        "yields": {"greatPersonPoints": "+2 Great Works slots"},
        "bonuses": ["+2 Envoys when constructed", "Constructing any other wonder in this city awards +2 Envoys", "2 Great Work slots of any type"],
        "quote": "A great god is Ahuramazda, who created this earth, who created yonder sky, who created man.",
        "author": "Darius the Great", "work": "Susa Inscription",
        "civilopedia": "The grand hypostyle reception hall of the palace at Persepolis, built by Darius I and Xerxes I. Supported by 72 monumental columns with double-bull capitals.",
        "context": "Depicted delegations from all 23 satrapies of the Achaemenid Persian Empire offering gifts during the New Year Nowruz festival."
    },
    "Big Ben": {
        "era": "Industrial", "year": "1859 CE", "lat": 51.5007, "lng": -0.1246, "country": "United Kingdom", "region": "London, Westminster",
        "tech": "Economics", "cost": 1450, "placement": "Must be built along a River adjacent to a Commercial Hub district with a Bank.",
        "yields": {"gold": 6, "greatPersonPoints": "+3 Great Merchant points"},
        "bonuses": ["+1 Economic policy slot", "+50% Gold stored in the treasury at moment of completion", "Provides +6 Gold per turn"],
        "quote": "Time is what we want most, but what we use worst.",
        "author": "William Penn", "work": "Some Fruits of Solitude",
        "civilopedia": "The Great Bell of the Great Clock of Westminster, at the north end of the Houses of Parliament. Famous for its precision chimes and Victorian neo-Gothic majesty.",
        "context": "Designed by Augustus Pugin and Charles Barry, surviving the London Blitz as a worldwide symbol of British parliamentary resilience."
    },
    "Biosphère": {
        "era": "Information", "year": "1967 CE", "lat": 45.5141, "lng": -73.5315, "country": "Canada", "region": "Montreal, Saint Helen's Island",
        "tech": "Synthetic Materials", "cost": 1740, "placement": "Must be built on flat land adjacent to a River and an Industrial Zone.",
        "yields": {"science": 8, "tourism": 200},
        "bonuses": ["+200% Tourism from Offshore Wind Farms, Solar Farms, Wind Farms, and Geothermal Plants", "+1 Power per power improvement"],
        "quote": "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
        "author": "Buckminster Fuller", "work": "Critical Path (1981)",
        "civilopedia": "The iconic geodesic dome designed by Buckminster Fuller for Expo 67 in Montreal, now an environmental museum dedicated to ecology and sustainable architecture.",
        "context": "Constructed with steel tubes and acrylic cells, Fuller's dome pioneered tensile geodesic engineering worldwide."
    },
    "Bolshoi Theatre": {
        "era": "Industrial", "year": "1825 CE", "lat": 55.7601, "lng": 37.6186, "country": "Russia", "region": "Moscow",
        "tech": "Opera and Ballet", "cost": 1450, "placement": "Must be built on flat land adjacent to a Theater Square district.",
        "yields": {"culture": 2, "greatPersonPoints": "+2 Great Writer, +2 Great Musician"},
        "bonuses": ["Awards 2 free random Civics from your current or prior eras", "1 Great Writing slot and 1 Great Music slot"],
        "quote": "Ballet is not just dance, it is poetry made flesh.",
        "author": "Maya Plisetskaya", "work": "I, Maya Plisetskaya",
        "civilopedia": "The historic home of Russia's ballet and opera companies in Moscow. Designed by Joseph Bové with a neoclassical facade crowned by Apollo's chariot.",
        "context": "Premiered Tchaikovsky's Swan Lake in 1877 and remains the preeminent center of classical Russian performing arts."
    },
    "Broadway": {
        "era": "Modern", "year": "1920 CE", "lat": 40.7590, "lng": -73.9845, "country": "United States", "region": "New York City, Manhattan",
        "tech": "Mass Media", "cost": 1620, "placement": "Must be built on flat land adjacent to a Theater Square district.",
        "yields": {"culture": 3, "greatPersonPoints": "+3 Great Writer, +3 Great Musician"},
        "bonuses": ["1 free random Atomic Era Civic boost", "1 Great Writing slot and 2 Great Music slots", "+20% Tourism from Great Works in this city"],
        "quote": "There is no business like show business, like no business I know.",
        "author": "Irving Berlin", "work": "Annie Get Your Gun (1946)",
        "civilopedia": "The world-famous theatrical heart of Manhattan, representing American commercial theater, musicals, and the Great White Way.",
        "context": "Stretches through Times Square, defining twentieth-century musical theater, dance, and dramatic arts globally."
    },
    "Casa de Contratación": {
        "era": "Renaissance", "year": "1503 CE", "lat": 37.3837, "lng": -5.9922, "country": "Spain", "region": "Seville, Andalusia",
        "tech": "Cartography", "cost": 920, "placement": "Must be built adjacent to a Government Plaza.",
        "yields": {"greatPersonPoints": "+3 Governor Titles"},
        "bonuses": ["+3 Governor Titles", "All your cities on continents other than your capital gain +15% Production, +15% Faith, and +15% Gold if they have an established Governor"],
        "quote": "Let no vessel depart for the Indies without license from our House of Trade.",
        "author": "Queen Isabella I of Castile", "work": "Royal Decree of 1503",
        "civilopedia": "The Crown agency of the Spanish Empire that controlled all commercial exploration, taxation, and immigration to the New World from the port of Seville.",
        "context": "Housed the Padron Real, the official secret master navigation map of the Americas updated by pilots including Amerigo Vespucci."
    },
    "Chichen Itza": {
        "era": "Medieval", "year": "600 CE", "lat": 20.6843, "lng": -88.5678, "country": "Mexico", "region": "Yucatan Peninsula",
        "tech": "Guilds", "cost": 710, "placement": "Must be built on Rainforest.",
        "yields": {"culture": 2, "production": 1},
        "bonuses": ["+2 Culture and +1 Production to all Rainforest tiles in this city"],
        "quote": "The temple rises above the emerald canopy like a feathered serpent descending to earth at each equinox.",
        "author": "John Lloyd Stephens", "work": "Incidents of Travel in Yucatan (1843)",
        "civilopedia": "A major pre-Columbian city built by the Maya civilization. The central temple-pyramid of El Castillo casts the shadow of Kukulkan descending its balustrades on the spring and autumn equinoxes.",
        "context": "One of the largest Maya cities with an advanced astronomical calendar, ball courts, and the sacred cenote."
    },
    "Colosseum": {
        "era": "Classical", "year": "80 CE", "lat": 41.8902, "lng": 12.4922, "country": "Italy", "region": "Rome, Lazio",
        "tech": "Games and Recreation", "cost": 400, "placement": "Must be built on flat land adjacent to an Entertainment Complex.",
        "yields": {"culture": 2, "amenity": 2},
        "bonuses": ["+2 Amenities and +2 Culture to all city centers within 6 tiles"],
        "quote": "While stands the Coliseum, Rome shall stand; When falls the Coliseum, Rome shall fall; And when Rome falls—the World.",
        "author": "Venerable Bede", "work": "Collectanea",
        "civilopedia": "The Flavian Amphitheatre in the center of Rome, the largest amphitheater ever built in antiquity. Held over 50,000 spectators for gladiatorial contests and public spectacles.",
        "context": "Commissioned by Emperor Vespasian and inaugurated by Titus, engineered with travertine stone, tuff, and Roman vaulted concrete."
    },
    "Colossus": {
        "era": "Classical", "year": "280 BCE", "lat": 36.4511, "lng": 28.2278, "country": "Greece", "region": "Rhodes, Aegean Sea",
        "tech": "Shipbuilding", "cost": 400, "placement": "Must be built on Coast adjacent to a Harbor district.",
        "yields": {"gold": 3, "greatPersonPoints": "+1 Great Admiral, +1 Trade Route"},
        "bonuses": ["+1 Trade Route capacity and grants a free Trader unit", "+3 Gold per turn"],
        "quote": "To thee, O Sun, the people of Dorian Rhodes raised this bronze statue reaching to Olympus.",
        "author": "Chares of Lindos", "work": "Colossus Dedication Inscription",
        "civilopedia": "A bronze statue of the Greek sun-god Helios, erected in the city of Rhodes by Chares of Lindos to celebrate Rhodes' victory over Demetrius Poliorcetes.",
        "context": "Stood approximately 33 meters high before being toppled by the 226 BCE Rhodes earthquake."
    },
    "Cristo Redentor": {
        "era": "Modern", "year": "1931 CE", "lat": -22.9519, "lng": -43.2105, "country": "Brazil", "region": "Rio de Janeiro, Mount Corcovado",
        "tech": "Mass Media", "cost": 1620, "placement": "Must be built on Hills.",
        "yields": {"culture": 4, "faith": 4},
        "bonuses": ["Tourism output from Relics and Holy Sites is not diminished by other civilizations with the Enlightenment civic", "Doubles Tourism from Seaside Resorts across your civilization"],
        "quote": "His open arms welcome all mankind over the green mountains and sapphire waters of Guanabara.",
        "author": "Heitor da Silva Costa", "work": "Project Memorial of Christ the Redeemer",
        "civilopedia": "An Art Deco statue of Jesus Christ atop Mount Corcovado overlooking Rio de Janeiro, Brazil. Created by French sculptor Paul Landowski and built by engineer Heitor da Silva Costa.",
        "context": "Made of reinforced concrete and clad in six million soapstone tiles, standing 30 meters tall with arms stretching 28 meters wide."
    },
    "Eiffel Tower": {
        "era": "Modern", "year": "1889 CE", "lat": 48.8584, "lng": 2.2945, "country": "France", "region": "Paris, Champ de Mars",
        "tech": "Steel", "cost": 1620, "placement": "Must be built on flat land adjacent to your City Center.",
        "yields": {"appeal": 2},
        "bonuses": ["+2 Appeal to all tiles across your entire civilization", "Dramatically enhances National Parks and Seaside Resorts"],
        "quote": "I ought to be jealous of the tower. She is more famous than I am.",
        "author": "Gustave Eiffel", "work": "Reflections on the 1889 Exposition",
        "civilopedia": "A wrought-iron lattice tower on the Champ de Mars in Paris, constructed as the entrance arch to the 1889 World's Fair.",
        "context": "Surpassed the Washington Monument to become the tallest human-made structure in the world, holding the record for 41 years."
    },
    "Estádio do Maracanã": {
        "era": "Atomic", "year": "1950 CE", "lat": -22.9122, "lng": -43.2302, "country": "Brazil", "region": "Rio de Janeiro",
        "tech": "Professional Sports", "cost": 1740, "placement": "Must be built on flat land adjacent to an Entertainment Complex with a Stadium.",
        "yields": {"culture": 6, "amenity": 2},
        "bonuses": ["+2 Amenities to every single city in your entire empire", "+6 Culture per turn"],
        "quote": "The roar of two hundred thousand voices shakes the concrete bowl like thunder across the bay.",
        "author": "Nelson Rodrigues", "work": "The Drama of Maracanã",
        "civilopedia": "The monumental stadium in Rio de Janeiro, built for the 1950 FIFA World Cup. Known for holding record crowds approaching 200,000 spectators.",
        "context": "The spiritual temple of Brazilian football and site of two World Cup finals (1950, 2014) and the 2016 Summer Olympics."
    },
    "Etemenanki": {
        "era": "Ancient", "year": "600 BCE", "lat": 32.5364, "lng": 44.4208, "country": "Iraq", "region": "Babylon, Mesopotamia",
        "tech": "Writing", "cost": 220, "placement": "Must be built on Marsh or Floodplains.",
        "yields": {"science": 2, "production": 1},
        "bonuses": ["+2 Science and +1 Production to all Marsh tiles in your empire", "+1 Science and +1 Production on all Floodplains in this city"],
        "quote": "To raise the top of E-temen-anki so that it could contend with heaven, I set my hand.",
        "author": "Nebuchadnezzar II", "work": "Babylonian Inscription",
        "civilopedia": "The great ziggurat dedicated to Marduk in the city of Babylon. Meaning 'temple of the foundation of heaven and earth,' it inspired the biblical account of the Tower of Babel.",
        "context": "Reached an estimated height of 91 meters, built with millions of baked mud-brick coated in gleaming bitumen."
    },
    "Forbidden City": {
        "era": "Renaissance", "year": "1420 CE", "lat": 39.9163, "lng": 116.3972, "country": "China", "region": "Beijing",
        "tech": "Printing", "cost": 920, "placement": "Must be built on flat land adjacent to your City Center.",
        "yields": {"culture": 5, "greatPersonPoints": "+1 Wildcard Policy Slot"},
        "bonuses": ["+1 Wildcard policy slot in your government", "+5 Culture per turn"],
        "quote": "The halls of the dragon throne were planned with mathematical celestial alignment, where earthly governance reflects the stars.",
        "author": "Yongle Emperor", "work": "Ming Imperial Records",
        "civilopedia": "The Chinese imperial palace complex from the Ming dynasty to the end of the Qing dynasty. Consists of 980 buildings over 72 hectares.",
        "context": "Constructed from 1406 to 1420 by over one million workers, featuring timber from Phoebe zhennan trees and golden Suzhou bricks."
    },
    "Golden Gate Bridge": {
        "era": "Modern", "year": "1937 CE", "lat": 37.8199, "lng": -122.4783, "country": "United States", "region": "San Francisco, California",
        "tech": "Combustion", "cost": 1620, "placement": "Must be built on Coast between two land tiles opposite each other.",
        "yields": {"tourism": 100, "appeal": 4},
        "bonuses": ["Acts as a bridge connecting land tiles over water", "+4 Appeal to all tiles in this city", "+100% Tourism from all National Parks and Seaside Resorts in this city"],
        "quote": "The bridge that could not be built stands spanned in International Orange over the Pacific surge.",
        "author": "Joseph Strauss", "work": "The Mighty Task is Done",
        "civilopedia": "The suspension bridge spanning the Golden Gate strait between San Francisco and Marin County. One of the internationally recognized symbols of American civil engineering.",
        "context": "Designed by Joseph Strauss and Irving Morrow, celebrated for its twin Art Deco towers and distinctive rust-resistant paint."
    },
    "Great Bath": {
        "era": "Ancient", "year": "2500 BCE", "lat": 27.3292, "lng": 68.1389, "country": "Pakistan", "region": "Mohenjo-daro, Sindh",
        "tech": "Pottery", "cost": 180, "placement": "Must be built on Floodplains.",
        "yields": {"housing": 3, "amenity": 1},
        "bonuses": ["Floodplains in this city are immune to flood damage, while still gaining fertility", "+1 Faith to every tile in this city that experiences mitigated flooding"],
        "quote": "The waters were drawn from deep brick wells, coated with natural bitumen to seal against leakage.",
        "author": "Sir John Marshall", "work": "Mohenjo-daro and the Indus Civilization",
        "civilopedia": "One of the earliest public water tanks in the ancient world, located at Mohenjo-daro in Sindh, Pakistan. Built by the Indus Valley Civilization.",
        "context": "Features finely fitted gypsum plaster and waterproofing bitumen, serving ceremonial purification and urban sanitation."
    },
    "Great Library": {
        "era": "Classical", "year": "283 BCE", "lat": 31.2089, "lng": 29.9092, "country": "Egypt", "region": "Alexandria",
        "tech": "Recorded History", "cost": 400, "placement": "Must be built on flat land adjacent to a Campus with a Library.",
        "yields": {"science": 2, "greatPersonPoints": "+1 Great Scientist, +1 Great Writer"},
        "bonuses": ["Boosts all Ancient and Classical Era Technologies", "Automatically grants an Eureka boost whenever another player earns a Great Scientist", "2 Great Work of Writing slots"],
        "quote": "He who would inspect all the books of the earth must journey to Alexandria.",
        "author": "Demetrius of Phalerum", "work": "Epistle to Ptolemy I",
        "civilopedia": "The Royal Library of Alexandria in Ptolemaic Egypt was one of the largest and most significant libraries of the ancient world, dedicated to the Muses.",
        "context": "Contained hundreds of thousands of scrolls collecting the scientific, philosophical, and literary knowledge of the Mediterranean and Near East."
    },
    "Great Lighthouse": {
        "era": "Classical", "year": "280 BCE", "lat": 31.2140, "lng": 29.8850, "country": "Egypt", "region": "Alexandria, Pharos Island",
        "tech": "Celestial Navigation", "cost": 290, "placement": "Must be built on Coast adjacent to a Harbor district with a Lighthouse.",
        "yields": {"gold": 3, "greatPersonPoints": "+1 Great Admiral"},
        "bonuses": ["+1 Movement to all naval units empire-wide", "+3 Gold per turn"],
        "quote": "A beacon by day of smoke, and by night of fire, guiding mariners past the reefs into safe haven.",
        "author": "Strabo", "work": "Geographica",
        "civilopedia": "The Lighthouse of Alexandria, built by the Ptolemaic Kingdom on the island of Pharos. One of the Seven Wonders of the Ancient World.",
        "context": "Stood over 100 meters tall with a furnace mirror reflecting fire out to sea over 50 kilometers, damaged by earthquakes in the 14th century."
    },
    "Great Zimbabwe": {
        "era": "Renaissance", "year": "1100 CE", "lat": -20.2711, "lng": 30.9338, "country": "Zimbabwe", "region": "Masvingo Province",
        "tech": "Bank", "cost": 920, "placement": "Must be built adjacent to Cattle and a Commercial Hub with a Market.",
        "yields": {"gold": 5, "greatPersonPoints": "+2 Great Merchant, +1 Trade Route"},
        "bonuses": ["+1 Trade Route capacity", "Trade Routes originating in this city gain +2 Gold for every bonus resource in this city's territory"],
        "quote": "Among the gold mines of the inland plains stand great walled fortresses constructed of granite blocks without mortar.",
        "author": "João de Barros", "work": "Décadas da Ásia (1552)",
        "civilopedia": "A medieval city in the southeastern hills of Zimbabwe that was the capital of the Kingdom of Zimbabwe during the Late Iron Age.",
        "context": "Renowned for its dry-stone granite walls up to 11 meters high built entirely without mortar, trading gold and ivory to Kilwa Kisiwani."
    },
    "Hagia Sophia": {
        "era": "Medieval", "year": "537 CE", "lat": 41.0086, "lng": 28.9802, "country": "Turkey", "region": "Istanbul (Constantinople)",
        "tech": "Buttress", "cost": 710, "placement": "Must be built on flat land adjacent to a Holy Site.",
        "yields": {"faith": 4, "greatPersonPoints": "+2 Great Prophet"},
        "bonuses": ["Missionaries and Apostles can spread Religion 1 extra time", "+4 Faith per turn"],
        "quote": "Solomon, I have surpassed thee!",
        "author": "Emperor Justinian I", "work": "Dedication of Hagia Sophia (537 CE)",
        "civilopedia": "The Cathedral of Holy Wisdom in Constantinople, the grandest monument of Byzantine architecture with a massive floating dome resting on pendentives.",
        "context": "Converted into an imperial mosque in 1453 by Mehmed the Conqueror, blending Christian golden mosaics with monumental Ottoman minarets."
    },
    "Hanging Gardens": {
        "era": "Ancient", "year": "600 BCE", "lat": 32.5422, "lng": 44.4210, "country": "Iraq", "region": "Al-Hillah, Babil",
        "tech": "Irrigation", "cost": 180, "placement": "Must be built adjacent to a River.",
        "yields": {"housing": 2},
        "bonuses": ["Increases growth rate by +15% in all cities across your civilization", "+2 Housing in host city"],
        "quote": "The approach to the Garden sloped like a hillside and the several parts of the structure rose from one tier to another tier on tier.",
        "author": "Diodorus Siculus", "work": "Bibliotheca Historica",
        "civilopedia": "One of the Seven Wonders of the Ancient World, built by King Nebuchadnezzar II for his wife Amytis of Media, who missed the verdant hills of her homeland.",
        "context": "A masterwork of ancient hydraulic engineering that pumped Euphrates water to terraced mountain gardens."
    },
    "Hermitage": {
        "era": "Industrial", "year": "1764 CE", "lat": 59.9398, "lng": 30.3146, "country": "Russia", "region": "St. Petersburg, Palace Embankment",
        "tech": "Natural History", "cost": 1450, "placement": "Must be built along a River.",
        "yields": {"culture": 3, "greatPersonPoints": "+3 Great Artist"},
        "bonuses": ["Provides 4 Great Work of Art slots", "+3 Great Artist points per turn"],
        "quote": "Only the mice and I can contemplate all these treasures.",
        "author": "Catherine the Great", "work": "Letter to Baron Melchior Grimm",
        "civilopedia": "The Winter Palace and museum founded by Empress Catherine the Great in Saint Petersburg, housing one of the largest art collections in the world.",
        "context": "Survives with over three million works of art spanning Leonardo da Vinci, Rembrandt, and Russian imperial court treasures."
    },
    "Huey Teocalli": {
        "era": "Medieval", "year": "1325 CE", "lat": 19.4350, "lng": -99.1314, "country": "Mexico", "region": "Mexico City (Tenochtitlan)",
        "tech": "Military Training", "cost": 710, "placement": "Must be built on Lake adjacent to land.",
        "yields": {"food": 1, "production": 1},
        "bonuses": ["+1 Amenity from entertainment for each Lake tile within 1 tile of Huey Teocalli", "+1 Food and +1 Production to each Lake tile in your empire"],
        "quote": "And when we saw all those cities and villages built in the water, and other great towns on dry land, we were amazed.",
        "author": "Bernal Díaz del Castillo", "work": "The Conquest of New Spain",
        "civilopedia": "The Templo Mayor was the main temple of the Mexica peoples in their capital city of Tenochtitlan, dedicated to Huitzilopochtli, god of war, and Tlaloc, god of rain.",
        "context": "Stood over 60 meters high atop an island in Lake Texcoco, crowned by twin shrines."
    },
    "Jebel Barkal": {
        "era": "Classical", "year": "1450 BCE", "lat": 18.5356, "lng": 31.8286, "country": "Sudan", "region": "Karima, Northern State",
        "tech": "Iron Working", "cost": 400, "placement": "Must be built on Desert Hills.",
        "yields": {"faith": 4},
        "bonuses": ["Awards 2 free Iron resources", "Provides +4 Faith to all city centers within 6 tiles"],
        "quote": "I made the mountain of the pure peak to be his dwelling, established forever.",
        "author": "King Piye", "work": "Victory Stele of Jebel Barkal",
        "civilopedia": "A small mountain located about 400 km north of Khartoum, in Karima town in Sudan, on a large bend of the Nile River in Nubia.",
        "context": "Regarded as the southern residence of Amun-Ra, center of the Kingdom of Kush and the 25th Dynasty of pharaohs."
    },
    "Kilwa Kisiwani": {
        "era": "Medieval", "year": "1100 CE", "lat": -8.9581, "lng": 39.5158, "country": "Tanzania", "region": "Kilwa Island, Lindi Region",
        "tech": "Machinery", "cost": 710, "placement": "Must be built on flat land adjacent to Coast.",
        "yields": {"greatPersonPoints": "+3 Envoys"},
        "bonuses": ["Grants 3 Envoys when completed", "Being Suzerain of a city-state grants +15% of that type's yield in this city; 2 or more of same type grants +15% empire-wide"],
        "quote": "Kilwa is one of the most beautiful and well-constructed towns in the world.",
        "author": "Ibn Battuta", "work": "The Rihla (1331)",
        "civilopedia": "The historic sultanate and island port city off modern Tanzania that was the jewel of the medieval Swahili Coast maritime trade.",
        "context": "Controlled gold shipments from Great Zimbabwe to Arabia, Persia, and India, issuing its own copper coinage."
    },
    "Kotoku-in": {
        "era": "Medieval", "year": "1252 CE", "lat": 35.3168, "lng": 139.5357, "country": "Japan", "region": "Kamakura, Kanagawa",
        "tech": "Divine Right", "cost": 710, "placement": "Must be built adjacent to a Holy Site with a Temple.",
        "yields": {"faith": 2},
        "bonuses": ["Grants 4 Warrior Monks to your empire", "+20% Faith in this city"],
        "quote": "A statue of bronze eleven meters high, sitting in peaceful meditation while the ocean winds pass through the valley.",
        "author": "Lafcadio Hearn", "work": "Glimpses of Unfamiliar Japan (1894)",
        "civilopedia": "A Buddhist temple of the Jodo-shu sect in Kamakura, Japan, world-renowned for the monumental Great Buddha (Daibutsu) of Kamakura.",
        "context": "Survives in the open air after the wooden temple hall housing it was destroyed by a tsunami in 1498."
    },
    "Mahabodhi Temple": {
        "era": "Classical", "year": "250 BCE", "lat": 24.6960, "lng": 84.9913, "country": "India", "region": "Bodh Gaya, Bihar",
        "tech": "Theology", "cost": 400, "placement": "Must be built on flat land adjacent to a Holy Site and a Forest.",
        "yields": {"faith": 4, "greatPersonPoints": "+1 Great Prophet"},
        "bonuses": ["Awards 2 free Apostles", "+4 Faith per turn"],
        "quote": "Here the Buddha attained Supreme Enlightenment under the Bodhi tree.",
        "author": "Ashoka the Great", "work": "Major Rock Edicts",
        "civilopedia": "An ancient Buddhist temple in Bodh Gaya, marking the location where the Buddha is said to have attained enlightenment under the Bodhi tree.",
        "context": "Originally founded by Emperor Ashoka in the 3rd century BCE, reconstructed in pyramidal brick architecture during the Gupta era."
    },
    "Mausoleum at Halicarnassus": {
        "era": "Classical", "year": "350 BCE", "lat": 37.0379, "lng": 27.4241, "country": "Turkey", "region": "Bodrum (Halicarnassus)",
        "tech": "Defensive Tactics", "cost": 400, "placement": "Must be built adjacent to a Harbor district.",
        "yields": {"science": 1, "faith": 1, "culture": 1},
        "bonuses": ["Great Admirals and Great Engineers gain +1 additional charge", "+1 Science, +1 Faith, and +1 Culture on all Coast tiles in this city"],
        "quote": "It is not of mere size that we speak, but of the marble sculptured horses and gods made by the hands of Scopas and Bryaxis.",
        "author": "Pliny the Elder", "work": "Natural History",
        "civilopedia": "A tomb built between 353 and 350 BCE at Halicarnassus for Mausolus, a satrap of the Achaemenid Empire. Its architectural beauty originated the word mausoleum.",
        "context": "Stood 45 meters high with relief friezes on all four sides, destroyed by successive earthquakes between the 12th and 15th centuries."
    },
    "Meenakshi Temple": {
        "era": "Medieval", "year": "1623 CE", "lat": 9.9195, "lng": 78.1193, "country": "India", "region": "Madurai, Tamil Nadu",
        "tech": "Civil Service", "cost": 710, "placement": "Must be built adjacent to a Holy Site.",
        "yields": {"faith": 3},
        "bonuses": ["Awards 2 free Gurus", "Gurus in your empire are 30% cheaper to purchase and religious units adjacent to Gurus receive +5 Religious Strength and +0.5 Movement"],
        "quote": "Fourteen towering gopuram gates reach toward the sky, covered in thousands of painted stone figures of deities and mythical beasts.",
        "author": "Tirumala Nayaka", "work": "Chronicles of Madurai",
        "civilopedia": "A historic Hindu temple complex on the southern bank of the Vaigai River in Madurai, Tamil Nadu, dedicated to goddess Meenakshi and Lord Sundareswarar.",
        "context": "The heart of Tamil architecture with 14 gopuram gateway towers, the tallest reaching over 52 meters."
    },
    "Mont Saint-Michel": {
        "era": "Medieval", "year": "1000 CE", "lat": 48.6360, "lng": -1.5115, "country": "France", "region": "Normandy / Brittany Coast",
        "tech": "Divine Right", "cost": 710, "placement": "Must be built on Marsh or Floodplains.",
        "yields": {"faith": 2, "greatPersonPoints": "+2 Relic slots"},
        "bonuses": ["All Apostles you train gain the 'Martyr' promotion (creates a Relic if killed in religious combat)", "Provides 2 Relic slots"],
        "quote": "Church on the rock, castle in the sea, sanctuary against all tides.",
        "author": "Victor Hugo", "work": "Ninety-Three (1874)",
        "civilopedia": "A tidal island and abbey in Normandy, France. At high tide, the sea sweeps in across the bay at the speed of a galloping horse, turning the mount into an impregnable fortress.",
        "context": "Dedicated to the Archangel Michael, a focal point of medieval pilgrimage and French resistance during the Hundred Years' War."
    },
    "Oracle": {
        "era": "Ancient", "year": "800 BCE", "lat": 38.4824, "lng": 22.5010, "country": "Greece", "region": "Delphi, Phocis",
        "tech": "Mysticism", "cost": 290, "placement": "Must be built on Hills.",
        "yields": {"culture": 1, "faith": 1},
        "bonuses": ["Patronage of Great People costs 25% less Faith", "Districts in this city provide +2 Great Person points of their type"],
        "quote": "Know thyself, and nothing in excess.",
        "author": "Pythia / Delphic Maxim", "work": "Temple of Apollo at Delphi",
        "civilopedia": "The sanctuary of Apollo at Delphi, where the priestess Pythia delivered enigmatic prophecies that guided kings, legislators, and generals throughout the classical Greek world.",
        "context": "Located on the slopes of Mount Parnassus overlooking the Gulf of Corinth, celebrated as the center of the world marked by the omphalos stone."
    },
    "Oxford University": {
        "era": "Industrial", "year": "1096 CE", "lat": 51.7548, "lng": -1.2544, "country": "United Kingdom", "region": "Oxford, Oxfordshire",
        "tech": "Scientific Theory", "cost": 1450, "placement": "Must be built on flat land adjacent to a Campus with a University.",
        "yields": {"science": 3, "greatPersonPoints": "+3 Great Scientist"},
        "bonuses": ["Awards 2 free random Technologies from your current or prior eras", "+20% Science in this city", "2 Great Work of Writing slots"],
        "quote": "The university is a sanctuary where the flame of knowledge is passed across the centuries.",
        "author": "Thomas Aquinas", "work": "Disputations",
        "civilopedia": "The oldest university in the English-speaking world, with teaching existing in some form since 1096. Grew rapidly from 1167 when Henry II banned English students from attending Paris.",
        "context": "Produced 30 British prime ministers, 73 Nobel laureates, and centuries of foundational scientific discoveries."
    },
    "Panama Canal": {
        "era": "Industrial", "year": "1914 CE", "lat": 9.0800, "lng": -79.6800, "country": "Panama", "region": "Isthmus of Panama",
        "tech": "Steam Power", "cost": 1450, "placement": "Must be built on a flat land tile connecting two water bodies.",
        "yields": {"gold": 10},
        "bonuses": ["Creates a navigable water passage between two bodies of water", "Trade routes passing through the canal gain +150% Gold"],
        "quote": "A man, a plan, a canal: Panama.",
        "author": "Leigh Mercer", "work": "Palindrome (1948)",
        "civilopedia": "An artificial 82 km waterway in Panama that connects the Atlantic Ocean with the Pacific Ocean, cutting through the Isthmus of Panama.",
        "context": "One of the greatest and most difficult engineering projects ever undertaken, saving ships a perilous 15,000 km voyage around Cape Horn."
    },
    "Petra": {
        "era": "Classical", "year": "312 BCE", "lat": 30.3285, "lng": 35.4444, "country": "Jordan", "region": "Ma'an Governorate",
        "tech": "Mathematics", "cost": 400, "placement": "Must be built on Desert or Floodplains.",
        "yields": {"food": 2, "gold": 2, "production": 1},
        "bonuses": ["+2 Food, +2 Gold, and +1 Production on all Desert tiles in this city (excluding Floodplains)"],
        "quote": "Match me such marvel save in Eastern clime, A rose-red city half as old as time.",
        "author": "John William Burgon", "work": "Petra (1845)",
        "civilopedia": "The rose-red city of the Nabataeans, carved directly into vibrant sandstone canyon cliffs. Controlled caravan spice routes linking Arabia, Egypt, and Syria.",
        "context": "Engineered with sophisticated rock-cut cisterns, channels, and ceramic pipes that harvested flash floods into an oasis."
    },
    "Potala Palace": {
        "era": "Renaissance", "year": "1649 CE", "lat": 29.6555, "lng": 91.1186, "country": "Tibet / China", "region": "Lhasa Valley",
        "tech": "Astronomy", "cost": 1060, "placement": "Must be built on Hills adjacent to a Mountain.",
        "yields": {"culture": 2, "faith": 3},
        "bonuses": ["+1 Diplomatic policy slot in your government", "+2 Culture and +3 Faith per turn"],
        "quote": "The red and white halls stand perched between heaven and earth atop the Red Hill of Lhasa.",
        "author": "5th Dalai Lama", "work": "Autobiography (1681)",
        "civilopedia": "The winter palace of the Dalai Lamas from 1649 to 1959, located in Lhasa, Tibet. Stands atop Marpo Ri (the Red Hill) at 3,700 meters above sea level.",
        "context": "Thirteen stories high with over 1,000 rooms and 10,000 shrines, housing sacred stupas adorned in solid gold and jewels."
    },
    "Pyramids": {
        "era": "Ancient", "year": "2560 BCE", "lat": 29.9792, "lng": 31.1342, "country": "Egypt", "region": "Giza, Cairo",
        "tech": "Masonry", "cost": 220, "placement": "Must be built on Desert or Floodplains without Hills.",
        "yields": {"culture": 2},
        "bonuses": ["Grants a free Builder unit upon completion", "All Builders can build 1 extra improvement throughout the rest of the game"],
        "quote": "Man fears Time, but Time fears the Pyramids.",
        "author": "Arab Proverb", "work": "Oral Tradition",
        "civilopedia": "The Great Pyramid of Giza, built for Pharaoh Khufu of the Fourth Dynasty. The oldest of the Seven Wonders of the Ancient World and the only one to remain largely intact.",
        "context": "Built with over 2.3 million blocks of limestone and granite, remaining the tallest human-made structure in the world for over 3,800 years."
    },
    "Ruhr Valley": {
        "era": "Industrial", "year": "1850 CE", "lat": 51.4556, "lng": 7.0116, "country": "Germany", "region": "North Rhine-Westphalia",
        "tech": "Industrialization", "cost": 1240, "placement": "Must be built along a River adjacent to an Industrial Zone with a Factory.",
        "yields": {"production": 1},
        "bonuses": ["+20% Production in this city", "+1 Production for each Mine and Quarry in this city"],
        "quote": "The industrial heart of Germany practically stopped beating. Hardly anyone worked; hardly anything ran.",
        "author": "Adam Fergusson", "work": "When Money Dies",
        "civilopedia": "The polycentric industrial powerhouse of North Rhine-Westphalia in western Germany, defined by coal mining, steel mills, and heavy engineering.",
        "context": "Fueled Germany's nineteenth-century industrial revolution and technological rise along the Ruhr and Rhine rivers."
    },
    "St. Basil's Cathedral": {
        "era": "Renaissance", "year": "1561 CE", "lat": 55.7525, "lng": 37.6231, "country": "Russia", "region": "Moscow, Red Square",
        "tech": "Reformed Church", "cost": 920, "placement": "Must be built adjacent to your City Center.",
        "yields": {"culture": 1, "faith": 1, "tourism": 100},
        "bonuses": ["+100% Religious Tourism from this city", "+1 Culture, +1 Faith, and +1 Production on all Tundra tiles in this city", "Provides 3 Relic slots"],
        "quote": "Rising like the flames of a bonfire climbing into the Russian sky.",
        "author": "Ivan the Terrible", "work": "Dedication of the Intercession",
        "civilopedia": "The Cathedral of the Intercession of the Most Holy Theotokos on the Moat, commonly known as Saint Basil's Cathedral on Red Square in Moscow.",
        "context": "Commissioned by Ivan IV to commemorate the capture of Kazan and Astrakhan, renowned for its colorful pattern onion domes."
    },
    "Statue of Liberty": {
        "era": "Industrial", "year": "1886 CE", "lat": 40.6892, "lng": -74.0445, "country": "United States", "region": "New York Harbor",
        "tech": "Civil Engineering", "cost": 1450, "placement": "Must be built on Coast adjacent to a Harbor district.",
        "yields": {"diplomacy": 4},
        "bonuses": ["Awards 4 Diplomatic Victory Points", "All cities within 6 tiles are always 100% loyal to your civilization"],
        "quote": "Give me your tired, your poor, Your huddled masses yearning to breathe free.",
        "author": "Emma Lazarus", "work": "The New Colossus (1883)",
        "civilopedia": "A colossal neoclassical copper sculpture on Liberty Island in New York Harbor, designed by Frédéric Auguste Bartholdi and engineered by Gustave Eiffel.",
        "context": "A gift from the people of France to the United States, welcoming millions of immigrants arriving by sea."
    },
    "Statue of Zeus": {
        "era": "Classical", "year": "435 BCE", "lat": 37.6379, "lng": 21.6300, "country": "Greece", "region": "Olympia, Peloponnese",
        "tech": "Military Training", "cost": 400, "placement": "Must be built on flat land adjacent to an Encampment district with a Barracks.",
        "yields": {"gold": 3},
        "bonuses": ["Awards 3 Spearmen, 3 Archers, and 1 Battering Ram to your empire", "+50% Production toward anti-cavalry units"],
        "quote": "He spoke, and the dark brows of Cronion bent; the ambrosial locks of the king shook upon his immortal head, and Olympus trembled.",
        "author": "Homer", "work": "The Iliad",
        "civilopedia": "A giant chryselephantine sculpture of the king of the Greek gods, sculpted by Phidias inside the Temple of Zeus at Olympia.",
        "context": "Stood 12.4 meters high, depicting Zeus seated on an ivory throne adorned with cedarwood, ebony, and gold."
    },
    "Stonehenge": {
        "era": "Ancient", "year": "2500 BCE", "lat": 51.1789, "lng": -1.8262, "country": "United Kingdom", "region": "Wiltshire, England",
        "tech": "Astrology", "cost": 180, "placement": "Must be built on flat land adjacent to Stone.",
        "yields": {"faith": 2, "greatPersonPoints": "+1 Free Great Prophet"},
        "bonuses": ["Grants a free Great Prophet (can found a Religion without a Holy Site)", "+2 Faith per turn"],
        "quote": "Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?",
        "author": "Book of Job", "work": "Hebrew Bible (Job 38:31)",
        "civilopedia": "A prehistoric megalithic monument on Salisbury Plain in Wiltshire, England. Consists of an outer ring of vertical sarsen standing stones topped by horizontal lintels.",
        "context": "Constructed in several stages from 3000 to 2000 BCE, aligned toward the sunrise on the summer solstice."
    },
    "Sydney Opera House": {
        "era": "Atomic", "year": "1973 CE", "lat": -33.8568, "lng": 151.2153, "country": "Australia", "region": "Sydney Harbor, Bennelong Point",
        "tech": "Cultural Heritage", "cost": 1620, "placement": "Must be built on Coast adjacent to a Harbor district.",
        "yields": {"culture": 8, "greatPersonPoints": "+5 Great Musician"},
        "bonuses": ["3 Great Work of Music slots", "+8 Culture per turn", "+50% Music Tourism in this city"],
        "quote": "The sun did not know how beautiful its light was, until it fell upon this building.",
        "author": "Louis Kahn", "work": "On Utzon's Opera House",
        "civilopedia": "A multi-venue performing arts centre at Sydney Harbour. Designed by Danish architect Jørn Utzon, featuring distinctive precast concrete interlocking roof shells.",
        "context": "One of the 20th century's most famous and distinctive buildings, inaugurated by Queen Elizabeth II in 1973."
    },
    "Taj Mahal": {
        "era": "Renaissance", "year": "1653 CE", "lat": 27.1751, "lng": 78.0421, "country": "India", "region": "Agra, Uttar Pradesh",
        "tech": "Humanism", "cost": 920, "placement": "Must be built along a River.",
        "yields": {},
        "bonuses": ["Historic Moments that would grant 2 or more Era Score grant an additional +1 Era Score", "Ensures easy entry into Golden and Heroic Eras"],
        "quote": "Not a piece of architecture, as other buildings are, but a proud emperor's love wrought in living stones.",
        "author": "Sir Edwin Arnold", "work": "India Revisited",
        "civilopedia": "An ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
        "context": "The pinnacle of Mughal architecture, employing thousands of artisans and inlaid with semiprecious lapis lazuli and jade."
    },
    "Temple of Artemis": {
        "era": "Ancient", "year": "550 BCE", "lat": 37.9497, "lng": 27.3639, "country": "Turkey", "region": "Ephesus, Izmir Province",
        "tech": "Archery", "cost": 180, "placement": "Must be built on flat land adjacent to a Camp.",
        "yields": {"housing": 3, "amenity": 1},
        "bonuses": ["+1 Amenity from entertainment for every Camp, Pasture, and Plantation improvement within 4 tiles", "+3 Housing in host city"],
        "quote": "When I saw the sacred house of Artemis that towers to the clouds, the others were placed in the shade.",
        "author": "Antipater of Sidon", "work": "Greek Anthology",
        "civilopedia": "A Greek temple dedicated to an ancient local form of the goddess Artemis at Ephesus. One of the Seven Wonders of the Ancient World.",
        "context": "Funded by King Croesus of Lydia and engineered by Chersiphron with 127 ionic marble columns."
    },
    "Terracotta Army": {
        "era": "Classical", "year": "210 BCE", "lat": 34.3841, "lng": 109.2785, "country": "China", "region": "Xi'an, Shaanxi",
        "tech": "Construction", "cost": 400, "placement": "Must be built on flat land adjacent to an Encampment district with a Barracks or Stable.",
        "yields": {"greatPersonPoints": "+1 Great General"},
        "bonuses": ["All current land military units gain 1 free promotion level", "Archaeologists can enter foreign territory without Open Borders"],
        "quote": "Eight thousand clay soldiers stood in battle formation, guarding the first sovereign emperor on his subterranean march into eternity.",
        "author": "Sima Qian", "work": "Records of the Grand Historian",
        "civilopedia": "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China, buried with him to protect him in the afterlife.",
        "context": "Discovered by farmers in 1974, each soldier possesses unique facial features, armor, hairstyles, and weaponry."
    },
    "Torre de Belém": {
        "era": "Renaissance", "year": "1519 CE", "lat": 38.6916, "lng": -9.2160, "country": "Portugal", "region": "Lisbon, Tagus River",
        "tech": "Mercantilism", "cost": 920, "placement": "Must be built on Coast adjacent to a Harbor district.",
        "yields": {"gold": 5, "greatPersonPoints": "+1 Great Admiral"},
        "bonuses": ["International Trade Routes from this city gain +2 Gold for every luxury resource at destination", "Cities on foreign continents receive the cheapest building they can currently construct upon founding"],
        "quote": "Standing guard over the Tagus, she bade farewell to the caravels sailing past the edge of the known earth.",
        "author": "Luís de Camões", "work": "Os Lusíadas",
        "civilopedia": "The Tower of Saint Vincent, a 16th-century fortification on the northern bank of the Tagus River in Lisbon. A prominent example of the Portuguese Manueline style.",
        "context": "Served as a ceremonial gateway and defensive redoubt for Portuguese explorers embarking on the maritime route to India and Brazil."
    },
    "University of Sankore": {
        "era": "Medieval", "year": "1327 CE", "lat": 16.7758, "lng": -3.0075, "country": "Mali", "region": "Timbuktu",
        "tech": "Education", "cost": 710, "placement": "Must be built on Desert or Desert Hills adjacent to a Campus with a University.",
        "yields": {"science": 3, "faith": 1, "greatPersonPoints": "+2 Great Scientist"},
        "bonuses": ["+2 Science and +1 Gold to all domestic trade routes to this city", "Foreign trade routes to this city yield +2 Science for the sender and +2 Gold for you"],
        "quote": "Salt comes from the north, gold from the south, but the word of God and the treasures of wisdom are only to be found in Timbuktu.",
        "author": "Sudanese Proverb", "work": "West African Oral History",
        "civilopedia": "The Sankore Madrasah in Timbuktu, Mali, was one of three ancient centers of learning in the city, capable of housing 25,000 scholars during the Mali and Songhai Empires.",
        "context": "Financed by Mansa Musa and local merchants, amassing thousands of scientific and theological manuscripts in West Africa."
    },
    "Venetian Arsenal": {
        "era": "Renaissance", "year": "1104 CE", "lat": 45.4347, "lng": 12.3524, "country": "Italy", "region": "Venice, Veneto",
        "tech": "Mass Production", "cost": 920, "placement": "Must be built on Coast adjacent to an Industrial Zone.",
        "yields": {"greatPersonPoints": "+2 Great Engineer"},
        "bonuses": ["Receive a second naval unit every time you train a naval combat unit in your empire"],
        "quote": "As in the Arsenal of the Venetians boils in the winter the tenacious pitch to smear their unsound vessels.",
        "author": "Dante Alighieri", "work": "Inferno (Canto XXI)",
        "civilopedia": "A complex of state-owned shipyards and armories in Venice that was responsible for the naval power of the Venetian Republic throughout the Middle Ages and Renaissance.",
        "context": "Pioneered mass assembly-line production centuries before the Industrial Revolution, assembling a full war galley in a single day."
    }
}

# Known metadata & geographic coordinates for all Civ 6 Natural Wonders
CIV6_NATURAL_METADATA = {
    "Bermuda Triangle": {
        "lat": 25.0000, "lng": -71.0000, "country": "Atlantic Ocean", "region": "North Atlantic",
        "yields": {"science": 5},
        "bonuses": ["3-tile passable ocean natural wonder", "+5 Science to adjacent tiles", "Naval units entering it gain the 'Mysterious Currents' promotion (+1 Movement) and teleport to an Ocean tile on the other side of the globe"],
        "quote": "There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath.",
        "author": "Herman Melville", "work": "Moby-Dick (1851)",
        "civilopedia": "A loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances.",
        "context": "In Civ VI, passing through its magnetic storms flings ships across the planet while blessing them with extraordinary maritime speed."
    },
    "Chocolate Hills": {
        "lat": 9.9167, "lng": 124.1667, "country": "Philippines", "region": "Bohol Province",
        "yields": {"food": 1, "production": 2, "science": 1},
        "bonuses": ["4-tile impassable natural wonder", "Provides +1 Food, +2 Production, and +1 Science to adjacent tiles", "Provides fresh water to adjacent tiles"],
        "quote": "Hundreds of conical green mounds that turn cocoa brown in the dry heat of the Philippine sun.",
        "author": "Antonio Pigafetta", "work": "First Voyage Around the World",
        "civilopedia": "A geological formation in the Bohol province of the Philippines, consisting of at least 1,260 individual limestone cone karst mounds covered in grass that browns during the dry season.",
        "context": "Formed from marine limestone uplifted by tectonic forces and sculpted by millennia of tropical rainwater erosion."
    },
    "Cliffs of Dover": {
        "lat": 51.1378, "lng": 1.3488, "country": "United Kingdom", "region": "Dover, Kent, English Channel",
        "yields": {"culture": 3, "gold": 3, "food": 2},
        "bonuses": ["2-tile natural wonder", "Provides +3 Culture, +3 Gold, and +2 Food on the wonder tiles", "+4 Appeal to adjacent tiles"],
        "quote": "There'll be bluebirds over the white cliffs of Dover, tomorrow, just you wait and see.",
        "author": "Nat Burton", "work": "The White Cliffs of Dover (1941)",
        "civilopedia": "The iconic white chalk cliffs facing the Strait of Dover and France, marking the narrowest part of the English Channel.",
        "context": "Composed of pure white calcium carbonate coccoliths deposited during the Cretaceous period over 70 million years ago."
    },
    "Crater Lake": {
        "lat": 42.9446, "lng": -122.1090, "country": "United States", "region": "Cascade Range, Oregon",
        "yields": {"science": 1, "faith": 5},
        "bonuses": ["1-tile natural wonder lake", "Provides +1 Science and +5 Faith on its tile", "Provides fresh water to adjacent tiles and +4 Appeal"],
        "quote": "Never was water so blue, resting in a rim of volcanic stone like a jewel fallen from the sky.",
        "author": "Joaquin Miller", "work": "Songs of the Sierras",
        "civilopedia": "A volcanic crater lake in south-central Oregon, filling the caldera formed around 7,700 years ago by the collapse of Mount Mazama.",
        "context": "The deepest lake in the United States (594 m), celebrated for its deep indigo purity fed entirely by snowfall and rain."
    },
    "Dead Sea": {
        "lat": 31.5590, "lng": 35.4732, "country": "Jordan & Israel", "region": "Jordan Rift Valley",
        "yields": {"faith": 2, "culture": 2},
        "bonuses": ["2-tile lake natural wonder", "Provides +2 Faith, +2 Culture, and fresh water to adjacent tiles", "Units healing adjacent to Dead Sea heal completely in 1 turn"],
        "quote": "The waters are so dense that no swimmer may sink, and the salt gleams like crystal across the barren shores.",
        "author": "Flavius Josephus", "work": "The Jewish War",
        "civilopedia": "A hypersaline lake in the Jordan Rift Valley, 430 meters below sea level, marking the lowest land elevation on Earth.",
        "context": "Nearly ten times saltier than the ocean, attracting travelers since antiquity for its healing mineral-rich waters."
    },
    "Delicate Arch": {
        "lat": 38.7436, "lng": -109.4993, "country": "United States", "region": "Arches National Park, Utah",
        "yields": {"faith": 2, "gold": 1},
        "bonuses": ["1-tile impassable natural wonder", "Provides +2 Faith and +1 Gold to adjacent tiles", "+4 Appeal to adjacent tiles"],
        "quote": "A fragile circle of sandstone sculpted by wind and ice, framing the snowcapped peaks beyond.",
        "author": "Edward Abbey", "work": "Desert Solitaire (1968)",
        "civilopedia": "A 16-meter-tall freestanding natural arch in Arches National Park near Moab, Utah. Carved out of Entrada Sandstone over millions of years.",
        "context": "One of the most famous and photographed natural geological arches on Earth, featured on Utah state license plates."
    },
    "Eye of the Sahara": {
        "lat": 21.1269, "lng": -11.4016, "country": "Mauritania", "region": "Ouadane, Adrar Plateau",
        "yields": {"science": 1, "production": 1, "gold": 3},
        "bonuses": ["3-tile natural wonder", "Provides +1 Science, +1 Production, and +3 Gold to adjacent tiles", "Provides +2 Science, +2 Production, and +3 Gold during the Atomic Era and beyond"],
        "quote": "A bulls-eye in the desert sand, visible to astronauts drifting across the dark curve of Africa.",
        "author": "Gemini 4 Mission Logs", "work": "NASA Archives (1965)",
        "civilopedia": "The Richat Structure is a deeply eroded, 40-kilometer circular geological dome in the Sahara desert near Ouadane in west-central Mauritania.",
        "context": "Concentric rings of resistant quartzite and igneous rock, long used as a prominent visual landmark by orbital space crews."
    },
    "Eyjafjallajökull": {
        "lat": 63.6333, "lng": -19.6000, "country": "Iceland", "region": "Suðurland, Southern Iceland",
        "yields": {"culture": 2, "food": 1},
        "bonuses": ["2-tile volcanic mountain natural wonder", "+2 Culture and +1 Food to adjacent tiles", "Volcanic eruptions provide high soil fertility"],
        "quote": "Fire sleeping beneath three hundred meters of glacial ice.",
        "author": "Icelandic Saga Tradition", "work": "Landnamabok",
        "civilopedia": "An ice-capped stratovolcano in southern Iceland, reaching 1,651 meters. Famous for its dramatic 2010 eruptions that disrupted transatlantic air travel.",
        "context": "The ice cap covers an area of about 100 square kilometers, feeding multiple meltwater glacier tongues."
    },
    "Fountain of Youth": {
        "lat": 25.7200, "lng": -79.2800, "country": "The Bahamas", "region": "Bimini Islands",
        "yields": {"science": 4, "faith": 4},
        "bonuses": ["1-tile natural wonder", "Provides +4 Science and +4 Faith on its tile, and acts as fresh water", "Units moving adjacent to it gain the 'Water of Life' ability (heals +10 HP per turn in all territory)"],
        "quote": "A spring whose miraculous waters restore youthful vigor to any who bathe in its depths.",
        "author": "Juan Ponce de León", "work": "Voyage to Florida (1513)",
        "civilopedia": "A legendary spring that reputedly restores the youth of anyone who drinks or bathes in its waters, pursued by Spanish explorers throughout the Caribbean.",
        "context": "In Civ VI, unlocks the mystical 'Water of Life' regeneration promotion for any passing unit."
    },
    "Galápagos Islands": {
        "lat": -0.9538, "lng": -90.9656, "country": "Ecuador", "region": "Galápagos Province, Pacific Ocean",
        "yields": {"science": 2},
        "bonuses": ["2-tile natural wonder", "Provides +2 Science to adjacent ocean tiles"],
        "quote": "Hence, both in space and time, we seem to be brought somewhat near to that great fact—that mystery of mysteries—the first appearance of new beings on this earth.",
        "author": "Charles Darwin", "work": "The Voyage of the Beagle (1839)",
        "civilopedia": "A volcanic archipelago in the Pacific Ocean around the equator, 906 km west of continental Ecuador. Famed for its endemic species that inspired Darwin's theory of evolution.",
        "context": "Isolated for millions of years at the junction of three tectonic plates and three major ocean currents."
    },
    "Giant's Causeway": {
        "lat": 55.2408, "lng": -6.5116, "country": "United Kingdom", "region": "County Antrim, Northern Ireland",
        "yields": {"culture": 1, "science": 2},
        "bonuses": ["2-tile natural wonder", "Provides +1 Culture and +2 Science to adjacent tiles", "Military units passing adjacent gain the 'Spear of Fionn' ability (+5 Combat Strength)"],
        "quote": "Stepping stones paved by the giant Finn McCool across the stormy North Channel to Scotland.",
        "author": "Irish Folk Legend", "work": "Ulster Cycle",
        "civilopedia": "An area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption in County Antrim, Northern Ireland.",
        "context": "The tops of the hexagonal pillars form stepping stones leading from the cliff foot into the North Sea."
    },
    "Gobustan": {
        "lat": 40.1167, "lng": 49.3833, "country": "Azerbaijan", "region": "Baku, Caspian Sea",
        "yields": {"culture": 3, "production": 1},
        "bonuses": ["3-tile impassable natural wonder", "Provides +3 Culture and +1 Production to adjacent tiles"],
        "quote": "Thousands of prehistoric petroglyphs carved into limestone boulders beside bubbling mud volcanoes.",
        "author": "Thor Heyerdahl", "work": "Scandinavian-Azeri Studies",
        "civilopedia": "Gobustan National Park in Azerbaijan, famous for its over 6,000 rock carvings depicting hunting, dances, and prehistoric reeds boats dating back 40,000 years.",
        "context": "Features active mud volcanoes and ancient rock art overlooking the shores of the Caspian Sea."
    },
    "Ha Long Bay": {
        "lat": 20.9101, "lng": 107.1839, "country": "Vietnam", "region": "Quang Ninh Province, Gulf of Tonkin",
        "yields": {"food": 3, "culture": 1, "production": 1},
        "bonuses": ["2-tile water natural wonder", "Provides +3 Food, +1 Culture, and +1 Production on wonder tiles", "+1 Defense Strength to naval units on these tiles"],
        "quote": "Where the dragon descended into the emerald bay, spitting jewels that turned into thousands of jade islands.",
        "author": "Vietnamese Legend", "work": "Mythology of the Descending Dragon",
        "civilopedia": "A UNESCO World Heritage Site in northeast Vietnam, renowned for its emerald waters and thousands of towering limestone islands topped by rainforests.",
        "context": "Formed through 500 million years of limestone karst evolution and tropical climate weathering."
    },
    "Ik-Kil": {
        "lat": 20.6608, "lng": -88.5503, "country": "Mexico", "region": "Yucatan Peninsula (near Chichen Itza)",
        "yields": {"science": 1, "faith": 2},
        "bonuses": ["1-tile natural wonder", "Provides +50% Production toward Wonders and Districts built in adjacent tiles", "Provides fresh water"],
        "quote": "A sacred subterranean well open to the sky, where turquoise waters plunge twenty-six meters below the jungle floor.",
        "author": "Maya Oral Tradition", "work": "Sacred Cenotes of Yucatan",
        "civilopedia": "A deep natural sinkhole cenote near Chichen Itza in the Yucatan. The water level is 26 meters below ground level, surrounded by hanging tropical vines.",
        "context": "Sacred to the Maya civilization, dedicated to the rain god Chaac for religious rites."
    },
    "Lysefjorden": {
        "lat": 58.9872, "lng": 6.1364, "country": "Norway", "region": "Rogaland, Southwestern Norway",
        "yields": {"production": 1, "gold": 3},
        "bonuses": ["1-tile coastal natural wonder", "+1 Production and +3 Gold to adjacent water tiles", "Naval units passing adjacent gain +1 Movement"],
        "quote": "The light fjord cuts between vertical granite cliffs rising a thousand meters sheer from the dark sea.",
        "author": "Norwegian Royal Travelogue", "work": "Explorations of Rogaland",
        "civilopedia": "A 42-kilometer fjord in Rogaland, Norway. Meaning 'light fjord,' it is renowned for Preikestolen (Pulpit Rock) towering 604 meters sheer above the water.",
        "context": "Carved by massive Quaternary glaciers during successive ice ages in Scandinavian bedrock."
    },
    "Mato Tipila": {
        "lat": 44.5902, "lng": -104.7146, "country": "United States", "region": "Crook County, Wyoming",
        "yields": {"faith": 1, "production": 2},
        "bonuses": ["1-tile impassable natural wonder", "Provides +1 Faith and +2 Production to adjacent tiles", "+4 Appeal to adjacent tiles"],
        "quote": "The great bear clawed the volcanic rock, carving vertical furrows as the children were carried into the sky.",
        "author": "Lakota & Kiowa Sacred Tradition", "work": "Legend of Mato Tipila (Devils Tower)",
        "civilopedia": "Devils Tower, sacred as Bear's Lodge (Mato Tipila) to Northern Plains tribes. A solitary igneous rock intrusion of phonolite porphyry rising 386 meters above the Belle Fourche River.",
        "context": "Designated the first United States National Monument by President Theodore Roosevelt in 1906."
    },
    "Matterhorn": {
        "lat": 45.9765, "lng": 7.6585, "country": "Switzerland & Italy", "region": "Pennine Alps, Zermatt",
        "yields": {"culture": 2},
        "bonuses": ["1-tile impassable mountain natural wonder", "Provides +2 Culture to adjacent tiles", "Land units passing adjacent gain the 'Alpine Training' promotion (moves over Hills as if flat terrain, +3 Combat on Hills)"],
        "quote": "A monumental pyramid of ice and gneiss standing solitary above the high valleys of the Alps.",
        "author": "Edward Whymper", "work": "Scrambles Amongst the Alps (1871)",
        "civilopedia": "A mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. Its near-symmetric pyramidal peak reaches 4,478 meters.",
        "context": "One of the deadliest peaks in the Alps, first climbed in 1865 by Edward Whymper's expedition."
    },
    "Mount Everest": {
        "lat": 27.9881, "lng": 86.9250, "country": "Nepal & China", "region": "Himalayas, Mahalangur Himal",
        "yields": {"faith": 3},
        "bonuses": ["3-tile impassable mountain natural wonder", "+3 Faith to adjacent tiles", "Religious units moving adjacent gain the 'Altitude Sickness' immune movement ability"],
        "quote": "Because it's there.",
        "author": "George Mallory", "work": "New York Times Interview (1923)",
        "civilopedia": "Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. Reaches 8,848.86 meters.",
        "context": "Known in Nepali as Sagarmatha and in Tibetan as Chomolungma ('Goddess Mother of the World')."
    },
    "Mount Roraima": {
        "lat": 5.1433, "lng": -60.7625, "country": "Venezuela, Brazil & Guyana", "region": "Guiana Highlands, Canaima",
        "yields": {"faith": 1, "science": 1},
        "bonuses": ["4-tile impassable mountain natural wonder", "Provides +1 Faith and +1 Science to adjacent tiles", "Provides +4 Appeal to adjacent tiles"],
        "quote": "An island floating in the clouds, where unique life has lived cut off from the forest floor for hundreds of millions of years.",
        "author": "Sir Arthur Conan Doyle", "work": "The Lost World (1912)",
        "civilopedia": "The highest of the Pakaraima chain of tepui plateaus in South America, its 31-square-kilometer summit area bounded on all sides by 400-meter cliffs.",
        "context": "Among the oldest geological formations on Earth, dating back two billion years to the Precambrian."
    },
    "Paititi": {
        "lat": -12.5000, "lng": -71.0000, "country": "Peru", "region": "Madre de Dios, Amazon Rainforest",
        "yields": {"gold": 3, "culture": 2},
        "bonuses": ["3-tile natural wonder", "Provides +3 Gold and +2 Culture to adjacent tiles", "Provides +4 Gold and +3 Culture to adjacent tiles during the Industrial Era and beyond"],
        "quote": "A lost golden realm hidden deep in the eastern jungle beyond the Andes mountains.",
        "author": "Andean Legend", "work": "Chronicles of the Incan Empire",
        "civilopedia": "A legendary Inca lost city or utopian rich state said to lie east of the Andes, hidden within the remote rainforests of southeast Peru.",
        "context": "In Civ VI, an extraordinary source of early Culture and Gold, inspiring explorations into the deep Amazon."
    },
    "Pamukkale": {
        "lat": 37.9250, "lng": 29.1219, "country": "Turkey", "region": "Denizli Province, Aegean Turkey",
        "yields": {"culture": 2, "gold": 1},
        "bonuses": ["2-tile natural wonder", "Provides +2 Culture and +1 Gold to adjacent tiles, and acts as fresh water", "Major adjacency bonus to Theater Square, Campus, and Commercial Hub districts (+2 each)"],
        "quote": "Terraces of pure white travertine holding thermal turquoise waters, glowing under the Anatolian sky.",
        "author": "Hierapolis Inscriptions", "work": "Graeco-Roman Records",
        "civilopedia": "Meaning 'cotton castle' in Turkish, a natural site in Denizli in southwestern Turkey. Famous for its gleaming white travertine terraces formed by mineral-rich thermal waters.",
        "context": "Site of the ancient Greco-Roman spa city of Hierapolis, inhabited since the 2nd century BCE."
    },
    "Pantanal": {
        "lat": -16.9800, "lng": -56.6300, "country": "Brazil, Bolivia & Paraguay", "region": "Mato Grosso do Sul",
        "yields": {"food": 2, "culture": 2},
        "bonuses": ["4-tile marsh natural wonder", "Provides +2 Food and +2 Culture on the wonder tiles", "Provides fresh water to adjacent tiles"],
        "quote": "The largest tropical wetland on the planet, pulsing with life as the seasonal floodwaters rise and recede.",
        "author": "Candido Rondon", "work": "Expeditions into the Mato Grosso",
        "civilopedia": "A natural region encompassing the world's largest tropical wetland area, sprawling over 140,000 square kilometers across Brazil, Bolivia, and Paraguay.",
        "context": "Home to thousands of species including jaguars, giant river otters, capybaras, and the hyacinth macaw."
    },
    "Piopiotahi": {
        "lat": -44.6716, "lng": 167.9256, "country": "New Zealand", "region": "Fiordland, South Island",
        "yields": {"culture": 1, "gold": 2},
        "bonuses": ["3-tile coastal natural wonder", "Provides +1 Culture and +2 Gold to adjacent tiles", "Naval and land units on adjacent tiles gain +1 Movement"],
        "quote": "Standing beneath Mitre Peak as waterfalls cascade a thousand meters through mist into dark glacial fjords.",
        "author": "Rudyard Kipling", "work": "Letters of Travel (1891)",
        "civilopedia": "Milford Sound (Piopiotahi in Māori) is a fjord in the south west of New Zealand's South Island. Acclaimed by Rudyard Kipling as the eighth Wonder of the World.",
        "context": "Carved by ancient glaciers, featuring vertical rock walls rising 1,200 meters directly out of the Tasman Sea."
    },
    "Sahara el Beyda": {
        "lat": 27.0583, "lng": 27.9711, "country": "Egypt", "region": "Farafra Depression, Western Desert",
        "yields": {"culture": 1, "science": 1, "gold": 4},
        "bonuses": ["4-tile desert natural wonder", "Provides +1 Culture, +1 Science, and +4 Gold on the wonder tiles"],
        "quote": "Surreal chalk sculptures rising out of the sand dunes like frozen ghosts in a sea of gold.",
        "author": "Ahmed Fakhry", "work": "The Oases of Egypt",
        "civilopedia": "The White Desert National Park in Egypt, located 45 km north of Farafra oasis. Renowned for its massive white chalk rock formations sculpted by sandstorms.",
        "context": "Former seabed of chalk rock, shaped by wind into mushroom, camel, and conical natural monuments."
    },
    "Torres del Paine": {
        "lat": -51.2532, "lng": -72.9818, "country": "Chile", "region": "Patagonia, Magallanes",
        "yields": {},
        "bonuses": ["2-tile mountain natural wonder", "Doubles all tile yields on adjacent tiles"],
        "quote": "Three blue granite horns piercing the fierce winds of Patagonia above turquoise glacial lakes.",
        "author": "Lady Florence Dixie", "work": "Across Patagonia (1880)",
        "civilopedia": "A national park encompassing mountains, glaciers, lakes, and rivers in southern Chilean Patagonia. The Cordillera del Paine is the centerpiece of the park.",
        "context": "The granite towers rise up to 2,500 meters above the Patagonian steppe, carved by Pleistocene glaciers."
    },
    "Tsingy de Bemaraha": {
        "lat": -18.6667, "lng": 44.7500, "country": "Madagascar", "region": "Melaky Region, Western Madagascar",
        "yields": {"culture": 1, "science": 1},
        "bonuses": ["4-tile natural wonder", "Provides +1 Culture and +1 Science to adjacent tiles", "Enemy units in adjacent tiles suffer -5 Combat Strength"],
        "quote": "A stone forest of needle-sharp limestone pinnacles, where lemurs leap across the razor spires.",
        "author": "Jean-Noël Labat", "work": "Madagascar Flora and Landscapes",
        "civilopedia": "A national park located in western Madagascar, characterized by needle-shaped limestone karst formations known as tsingy ('where one cannot walk barefoot').",
        "context": "A fortress of biodiversity harboring endemic chameleons, sifakas, and rare birds isolated within limestone crevices."
    },
    "Ubsunur Hollow": {
        "lat": 50.3167, "lng": 92.7500, "country": "Mongolia & Russia", "region": "Uvs Province & Tuva Republic",
        "yields": {"faith": 1, "production": 1, "food": 2},
        "bonuses": ["4-tile natural wonder", "Provides +1 Faith, +1 Production, and +2 Food on the wonder tiles"],
        "quote": "An enclosed basin where Siberian taiga, alpine tundra, and Central Asian sand deserts meet in harmony.",
        "author": "UNESCO World Heritage Inscription", "work": "Ecosystem Assessment",
        "civilopedia": "The northernmost enclosed drainage basin in Central Asia, shared by Tuva in Russia and Uvs Province in Mongolia. Encompasses Lake Uvs, a large shallow saltwater lake.",
        "context": "One of the best-preserved natural steppe ecosystems on the Eurasian continent."
    },
    "Uluru": {
        "lat": -25.3444, "lng": 131.0369, "country": "Australia", "region": "Northern Territory, Red Centre",
        "yields": {"faith": 2, "culture": 2},
        "bonuses": ["1-tile natural wonder", "Provides +2 Faith and +2 Culture to adjacent tiles", "Provides +4 Appeal to adjacent tiles"],
        "quote": "The ancient red heart of the continent, glowing ruby at sunset with the songs of the Tjukurpa ancestors.",
        "author": "Anangu Sacred Tradition", "work": "Tjukurpa Law and Creation",
        "civilopedia": "A massive sandstone inselberg in the southern part of the Northern Territory in central Australia, sacred to the Pitjantjatjara Anangu.",
        "context": "Stands 348 meters high, changing color dramatically from ochre to fiery crimson at sunrise and sunset."
    },
    "Vredefort Dome": {
        "lat": -27.0000, "lng": 27.5000, "country": "South Africa", "region": "Free State & North West",
        "yields": {"science": 1, "production": 2},
        "bonuses": ["3-tile natural wonder", "Provides +1 Science and +2 Production to adjacent tiles"],
        "quote": "The scar of the largest known asteroid impact on Earth, shaking the Precambrian crust two billion years ago.",
        "author": "Geological Society of South Africa", "work": "Vredefort Crater Studies",
        "civilopedia": "The largest verified impact crater on Earth, with an estimated original diameter of 300 km. Located in the Free State of South Africa.",
        "context": "Formed over two billion years ago when an asteroid 10 to 15 km in diameter struck Earth during the Paleoproterozoic."
    },
    "Yosemite": {
        "lat": 37.8651, "lng": -119.5383, "country": "United States", "region": "Sierra Nevada, California",
        "yields": {"science": 1, "gold": 1},
        "bonuses": ["2-tile mountain natural wonder", "Provides +1 Science and +1 Gold to adjacent tiles", "+4 Appeal to adjacent tiles"],
        "quote": "It is by far the grandest of all the special temples of Nature I was ever permitted to enter.",
        "author": "John Muir", "work": "The Yosemite (1912)",
        "civilopedia": "A national park in California's Sierra Nevada mountains, famed for its giant ancient sequoias, the granite cliffs of El Capitan and Half Dome, and bridal veil waterfalls.",
        "context": "Carved by glaciers through solid granite, inspiring the creation of the United States National Park Service."
    },
    "Zhangye Danxia": {
        "lat": 38.9056, "lng": 100.1444, "country": "China", "region": "Gansu Province, Qilian Mountains",
        "yields": {"greatPersonPoints": "+2 Great General, +2 Great Merchant"},
        "bonuses": ["3-tile natural wonder", "Provides +2 Great General points and +2 Great Merchant points per turn to the controlling city"],
        "quote": "Stripes of magenta, lemon, and lapis lazuli painted across the rolling foothills of the Silk Road.",
        "author": "Silk Road Chronicles", "work": "Hexi Corridor Travelogue",
        "civilopedia": "The Rainbow Mountains of Zhangye Danxia National Geological Park in Gansu, China, known for the colorful sandstone and mineral layers deposited over 24 million years.",
        "context": "Folded by Himalayan tectonic forces and sculpted by erosion along the historic Hexi Corridor."
    }
}

out = []
out.append("import { CivWonder } from '../types/wonder';\n\nexport const CIV6_WONDERS: CivWonder[] = [\n")

# Add World Wonders
for name, data in CIV6_WORLD_METADATA.items():
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    cid = f"civ6-{slug}"
    icon = get_asset_url(name, is_icon=True, is_nat=False)
    img = get_asset_url(name, is_icon=False, is_nat=False)

    w_dict = {
        "id": cid,
        "name": name,
        "game": "civ6",
        "type": "world_wonder",
        "era": data["era"],
        "yearApprox": data["year"],
        "location": {
            "lat": data["lat"],
            "lng": data["lng"],
            "modernCountry": data["country"],
            "modernRegion": data["region"]
        },
        "placementRequirement": data.get("placement", ""),
        "yields": data.get("yields", {}),
        "bonuses": data.get("bonuses", []),
        "quote": data.get("quote", ""),
        "quoteAuthor": data.get("author", "Civilization VI"),
        "quoteWork": data.get("work", ""),
        "civilopediaExcerpt": data.get("civilopedia", ""),
        "historicalContext": data.get("context", ""),
        "iconUrl": icon,
        "visualUrl": img,
        "imageUrl": img
    }
    if "tech" in data:
        w_dict["techRequirement"] = data["tech"]
    if "cost" in data:
        w_dict["productionCost"] = data["cost"]

    out.append(f"  {json.dumps(w_dict, indent=4)},\n")

# Add Natural Wonders
for name, data in CIV6_NATURAL_METADATA.items():
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    cid = f"civ6-{slug}"
    icon = get_asset_url(name, is_icon=True, is_nat=True)
    img = get_asset_url(name, is_icon=False, is_nat=True)

    w_dict = {
        "id": cid,
        "name": name,
        "game": "civ6",
        "type": "natural_wonder",
        "era": "Timeless",
        "yearApprox": "Natural Geological Formation",
        "location": {
            "lat": data["lat"],
            "lng": data["lng"],
            "modernCountry": data["country"],
            "modernRegion": data["region"]
        },
        "yields": data.get("yields", {}),
        "bonuses": data.get("bonuses", []),
        "quote": data.get("quote", ""),
        "quoteAuthor": data.get("author", "Civilization VI"),
        "quoteWork": data.get("work", ""),
        "civilopediaExcerpt": data.get("civilopedia", ""),
        "historicalContext": data.get("context", ""),
        "iconUrl": icon,
        "visualUrl": img,
        "imageUrl": img
    }
    out.append(f"  {json.dumps(w_dict, indent=4)},\n")

out.append("];\n")

with open('src/data/civ6Wonders.ts', 'w') as f:
    f.writelines(out)

print(f"Generated src/data/civ6Wonders.ts with {len(CIV6_WORLD_METADATA)} World Wonders and {len(CIV6_NATURAL_METADATA)} Natural Wonders")
