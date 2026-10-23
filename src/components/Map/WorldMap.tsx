import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { CivWonder, MapTileStyle } from '../../types/wonder';
import { getYieldIconUrl } from '../../data/yieldIcons';
import { getCountryFlag } from '../../utils/countryFlags';
import { Plus, Minus, Maximize2 } from 'lucide-react';

interface WorldMapProps {
  wonders: CivWonder[];
  selectedWonder: CivWonder | null;
  onSelectWonder: (wonder: CivWonder) => void;
  mapStyle: MapTileStyle;
  showWorldWonders: boolean;
  showNaturalWonders: boolean;
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
}

const TILE_PROVIDERS: Record<
  MapTileStyle,
  { url: string; attribution: string; maxZoom: number; className: string }
> = {
  lacquer: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    className: 'civ-tile-lacquer'
  },
  standard: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    className: 'civ-tile-clean'
  },
  humanitarian: {
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
    maxZoom: 19,
    className: 'civ-tile-soft'
  },
  topographic: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
    maxZoom: 17,
    className: 'civ-tile-topo'
  },
  parchment: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    className: 'civ-tile-parchment'
  }
};

export const WorldMap: React.FC<WorldMapProps> = ({
  wonders,
  selectedWonder,
  onSelectWonder,
  mapStyle,
  showWorldWonders,
  showNaturalWonders,
  isLeftPanelOpen,
  isRightPanelOpen
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerGroupRef = useRef<L.LayerGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [24, 15],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      worldCopyJump: true
    });

    const provider = TILE_PROVIDERS[mapStyle] || TILE_PROVIDERS.lacquer;
    const tileLayer = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
      subdomains: 'abc',
      className: provider.className
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerGroupRef.current = markersGroup;

    mapInstanceRef.current = map;

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer on style change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const provider = TILE_PROVIDERS[mapStyle] || TILE_PROVIDERS.lacquer;
    const newTileLayer = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
      subdomains: 'abc',
      className: provider.className
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [mapStyle]);

  // Adjust map viewport smoothly when panels open or close
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 320);

    return () => clearTimeout(timer);
  }, [isLeftPanelOpen, isRightPanelOpen]);

  // Render Impeccable Neo Kinpaku Markers (Kinpaku Gold & Verdigris Patina)
  useEffect(() => {
    const markersGroup = markersLayerGroupRef.current;
    if (!markersGroup) return;

    markersGroup.clearLayers();

    const filteredWonders = wonders.filter((w) => {
      if (w.type === 'world_wonder' && !showWorldWonders) return false;
      if (w.type === 'natural_wonder' && !showNaturalWonders) return false;
      return true;
    });

    filteredWonders.forEach((wonder) => {
      const isSelected = selectedWonder?.id === wonder.id;
      const isWorld = wonder.type === 'world_wonder';

      const iconImgHtml = wonder.iconUrl
        ? `<img src="${wonder.iconUrl}" referrerpolicy="no-referrer" class="w-7 h-7 rounded-full object-cover p-0.5" alt="" />`
        : isWorld
        ? `<svg viewBox="0 0 100 100" class="w-5 h-5 text-[var(--ks-kinpaku)]"><polygon points="50 15, 85 85, 15 85" fill="none" stroke="currentColor" stroke-width="6"/></svg>`
        : `<svg viewBox="0 0 100 100" class="w-5 h-5 text-[var(--ks-patina)]"><path d="M28 70 L48 34 L60 52 L68 40 L80 70 Z" fill="none" stroke="currentColor" stroke-width="6"/></svg>`;

      // Neo Kinpaku Marker: Gold or Patina with Dark Lacquer Core
      const markerHtml = `
        <div class="relative group cursor-pointer">
          ${
            isSelected
              ? `<div class="absolute -inset-2 rounded-full animate-ping opacity-70 ${
                  isWorld ? 'bg-[var(--ks-kinpaku)]' : 'bg-[var(--ks-patina)]'
                }"></div>`
              : ''
          }
          <div class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-125 shadow-xl bg-[var(--ks-lacquer-deep)] ${
            isSelected
              ? isWorld
                ? 'scale-125 z-50 border-2 border-[var(--ks-kinpaku)] ring-4 ring-[var(--ks-rule-strong)] shadow-[0_0_18px_rgba(245,190,44,0.4)]'
                : 'scale-125 z-50 border-2 border-[var(--ks-patina)] ring-4 ring-[var(--ks-rule-patina)] shadow-[0_0_18px_rgba(70,210,188,0.4)]'
              : isWorld
              ? 'z-20 border-2 border-[var(--ks-kinpaku)] hover:border-[var(--ks-kinpaku-glint)]'
              : 'z-20 border-2 border-[var(--ks-patina)] hover:border-[var(--ks-patina-pale)]'
          }">
            ${iconImgHtml}
            <span class="absolute -bottom-1 -right-1 px-1 py-0.2 text-[8px] font-mono font-bold rounded-xs ${
              isWorld
                ? 'bg-[var(--ks-kinpaku)] text-[var(--ks-dark-ink)]'
                : 'bg-[var(--ks-patina)] text-[var(--ks-dark-ink)]'
            } shadow-xs">
              ${isWorld ? 'W' : 'NW'}
            </span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'clean-marker',
        html: markerHtml,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -22]
      });

      const marker = L.marker([wonder.location.lat, wonder.location.lng], {
        icon: customIcon,
        zIndexOffset: isSelected ? 1000 : 100
      });

      // Neo Kinpaku Tooltip Popup
      const isCiv6 = wonder.game === 'civ6';
      const yieldItems = [
        { key: 'science', val: wonder.yields?.science },
        { key: 'culture', val: wonder.yields?.culture },
        { key: 'faith', val: wonder.yields?.faith },
        { key: 'gold', val: wonder.yields?.gold },
        { key: 'production', val: wonder.yields?.production },
        { key: 'food', val: wonder.yields?.food },
        { key: 'happiness', val: wonder.yields?.happiness },
        { key: 'amenity', val: wonder.yields?.amenity },
        { key: 'housing', val: wonder.yields?.housing },
        { key: 'tourism', val: wonder.yields?.tourism }
      ].filter((y) => y.val && y.val > 0);

      const yieldsHtml = yieldItems.length > 0 ? `
        <div class="flex flex-wrap items-center gap-1 mt-1.5">
          ${yieldItems.slice(0, 4).map((y) => {
            const icon = getYieldIconUrl(y.key, isCiv6 ? 'civ6' : 'civ5');
            return `
              <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-[var(--ks-lacquer-deep)] border border-[var(--ks-rule)] text-[9px] font-mono tabular-nums text-[var(--ks-champagne)]">
                ${icon ? `<img src="${icon}" referrerpolicy="no-referrer" class="w-3 h-3 object-contain shrink-0" alt="" />` : ''}
                <span>+${y.val}</span>
              </span>
            `;
          }).join('')}
        </div>
      ` : '';

      const categoryLabel = isWorld
        ? (wonder.era && wonder.era !== 'Timeless' ? `${wonder.era} · World Wonder` : 'World Wonder')
        : 'Natural Wonder';
      const flag = getCountryFlag(wonder.location.modernCountry);

      const popupHtml = `
        <div class="p-3 font-body text-[var(--ks-text-warm)] max-w-[250px] bg-[var(--ks-raised-lacquer)]">
          <div class="flex items-center gap-2.5 mb-2">
            ${
              wonder.iconUrl
                ? `<img src="${wonder.iconUrl}" referrerpolicy="no-referrer" class="w-9 h-9 rounded-full border border-[var(--ks-rule)] p-0.5 bg-[var(--ks-lacquer-deep)] shrink-0 object-cover" alt="" />`
                : ''
            }
            <div class="min-w-0">
              <div class="font-display text-[22px] font-light text-[var(--ks-champagne)] leading-tight truncate">
                ${wonder.name}
              </div>
              <div class="font-mono text-[8.5px] uppercase tracking-[0.16em] font-semibold mt-0.5 ${
                isWorld ? 'text-[var(--ks-kinpaku)]' : 'text-[var(--ks-patina)]'
              }">
                ${categoryLabel}
              </div>
            </div>
          </div>
          <div class="text-[11px] text-[var(--ks-text-muted)] flex items-center gap-1.5 font-body">
            <span>${flag}</span>
            <span class="truncate">${wonder.location.modernCountry}</span>
          </div>
          ${yieldsHtml}
        </div>
      `;

      marker.bindPopup(popupHtml, {
        className: 'clean-custom-popup',
        closeButton: false,
        offset: [0, -10]
      });

      marker.on('click', () => {
        onSelectWonder(wonder);
      });

      marker.on('mouseover', () => {
        marker.openPopup();
      });

      marker.on('mouseout', () => {
        if (!isSelected) {
          marker.closePopup();
        }
      });

      markersGroup.addLayer(marker);
    });
  }, [wonders, selectedWonder, onSelectWonder, showWorldWonders, showNaturalWonders]);

  // Fly to selected wonder
  useEffect(() => {
    if (!selectedWonder || !mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(
      [selectedWonder.location.lat, selectedWonder.location.lng],
      6,
      {
        duration: 1.4,
        easeLinearity: 0.25
      }
    );
  }, [selectedWonder]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetWorldView = () => {
    mapInstanceRef.current?.flyTo([24, 15], 3, { duration: 1.2 });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Floating Neo Kinpaku Zoom Controls */}
      <div
        className={`absolute bottom-6 z-20 transition-all duration-300 flex flex-col gap-1 bg-[var(--ks-raised-lacquer)] p-1 rounded-xs shadow-2xl border border-[var(--ks-rule)] ${
          isLeftPanelOpen ? 'left-[340px] sm:left-[380px]' : 'left-6'
        }`}
      >
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 rounded-xs flex items-center justify-center text-[var(--ks-text-warm)] hover:text-[var(--ks-kinpaku)] hover:bg-[var(--ks-graphite)] transition-colors"
          title="Zoom in"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 rounded-xs flex items-center justify-center text-[var(--ks-text-warm)] hover:text-[var(--ks-kinpaku)] hover:bg-[var(--ks-graphite)] transition-colors"
          title="Zoom out"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="h-px w-6 bg-[var(--ks-rule)] mx-auto my-0.5" />
        <button
          onClick={handleResetWorldView}
          className="w-8 h-8 rounded-xs flex items-center justify-center text-[var(--ks-text-warm)] hover:text-[var(--ks-kinpaku)] hover:bg-[var(--ks-graphite)] transition-colors"
          title="Reset to whole world view"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
