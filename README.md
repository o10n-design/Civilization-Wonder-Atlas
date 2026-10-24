# 🏛️ Civilization Wonder Atlas

[![Live Demo](https://img.shields.io/badge/Live_Demo-civ--atlas.vercel.app-gold?style=for-the-badge&logo=vercel)](https://civ-atlas.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-GIS_Mapping-green?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/ouzozcn/Civilization-Wonder-Atlas/pulls)

> **Explore every World Wonder and Natural Wonder from Sid Meier's Civilization V & Civilization VI mapped to their real-world geographic coordinates.**

An interactive GIS world atlas and Civilopedia companion featuring Age of Discovery cartography, real weathered parchment textures, authentic audio narration, strategic empire yields, and instant cross-series edition toggling.

---

## 🌐 Live Application

Explore the deployed atlas directly at:  
👉 **[https://civ-atlas.vercel.app/](https://civ-atlas.vercel.app/)**

---

## ✨ Features

- 🗺️ **Interactive Geographic Map**: Explore 100+ World Wonders and Natural Wonders positioned at their real-world archaeological coordinates across modern continents and countries.
- 📜 **Civ VI Fog of War Cartography**: Styled with authentic weathered papyrus texture, 16-point brass astrolabe compass rose, nautical rhumb lines (loxodromes), caravel exploration vessels, and mythological sea monsters.
- ⚖️ **Dual-Edition Cross-Series Codex**: Seamlessly toggle between **Civilization V** and **Civilization VI** data for wonders appearing in both games (e.g., *Hanging Gardens, Machu Picchu, Pyramids, Great Library, Petra, Stonehenge*).
- 🌾 **Strategic Empire Yields**: Immediate breakdown of in-game yields (+Science, +Culture, +Faith, +Gold, +Production, +Food, +Amenities, +Housing).
- 📜 **Unique In-Game Effects**: Direct Civilopedia rules, construction requirements (techs, civics, terrain, river adjacency), and wonder bonuses.
- 🎙️ **Authentic Spoken Quotes & Audio**: Listen to civilopedia quotes and completion fanfares narrated with integrated audio playback.
- 🌓 **Neo Kinpaku Dark & Light Themes**: Dark mineral lacquer mode and clean archival porcelain light mode.
- 🔍 **Instant Search & Filtering**: Filter by series (*All, Civ VI, Civ V*) and category (*World Wonders, Natural Wonders*).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Cartography**: [Leaflet](https://leafletjs.com/) + OpenStreetMap Tiles
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/)

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `bun` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ouzozcn/Civilization-Wonder-Atlas.git
   cd Civilization-Wonder-Atlas
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Linting and Type Checking**:
   ```bash
   npm run lint
   ```

---

## 🤝 Contributing — Any & All PRs are Welcomed!

We love community contributions! Whether you want to fix a typo, suggest a feature, refine archaeological coordinates, enhance map visuals, or prepare for Civilization VII, **any and all pull requests are welcomed.**

### How to Contribute

1. **Fork the Repository** on GitHub:
   [https://github.com/ouzozcn/Civilization-Wonder-Atlas](https://github.com/ouzozcn/Civilization-Wonder-Atlas)
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-wonder-feature
   ```
3. **Commit Your Changes**:
   ```bash
   git commit -m "Add: detailed historical background for Petra"
   ```
4. **Push to Your Branch**:
   ```bash
   git push origin feature/amazing-wonder-feature
   ```
5. **Open a Pull Request** describing your additions or fixes!

### Ideas for Contributions

- 🏛️ **New Wonder Data**: Preparing schemas and wonder lore for future Civilization releases (Civ VII).
- 🌍 **Geographic Precision**: Fine-tuning GPS coordinates or adding historical city boundary overlays.
- 🎨 **Map Styles**: Adding custom tile themes, satellite topographic overlays, or antique projection filters.
- 🌐 **Internationalization (i18n)**: Translating Civilopedia entries, yields, and UI into other languages.
- ⚡ **Performance & UX**: Accessibility improvements (a11y), keyboard navigations, or mobile touch gestures.

---

## ⚖️ Legal & Trademarks Disclaimer

- **Fan-Made Project**: Civilization Wonder Atlas is an independent, non-commercial educational fan project created under Fair Use guidelines.
- **Trademarks**: *Sid Meier's Civilization*, *Civ V*, *Civ VI*, and related logos and trademarks are registered trademarks of **Take-Two Interactive Software, Inc.**, **2K Games**, and **Firaxis Games**. This project is not affiliated with, endorsed by, or sponsored by 2K Games or Firaxis Games.
- **Lore & Data Sources**: Gameplay text, Civilopedia lore, quotes, and yield mechanics are referenced from the community [Civilization Wiki on Fandom](https://civilization.fandom.com/) under the [Creative Commons Attribution-ShareAlike 3.0 (CC-BY-SA 3.0)](https://creativecommons.org/licenses/by-sa/3.0/) license.
- **Map Data**: Cartography tiles and geographic boundary data &copy; [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

---

## 📄 License

Distributed under the **MIT License**. Feel free to use, modify, and distribute this codebase.
