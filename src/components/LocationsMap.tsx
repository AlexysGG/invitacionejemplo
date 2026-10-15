import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Car, ShieldCheck } from 'lucide-react';
import { Venue } from '../types';

export const LocationsMap: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<'church' | 'reception'>('church');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const venues: Record<'church' | 'reception', Venue> = {
    church: {
      id: 'church',
      title: 'Misa de Acción de Gracias',
      subtitle: 'Ceremonia Religiosa',
      time: '17:00 hrs',
      name: 'Parroquia San Juan Bautista',
      address: 'Calzada de las Rosas #420, Col. Jardines del Bosque',
      city: 'Guadalajara, Jalisco',
      coordinates: {
        lat: 20.6657,
        lng: -103.3884,
      },
      googleMapsUrl: 'https://maps.google.com/?q=20.6657,-103.3884',
      wazeUrl: 'https://waze.com/ul?ll=20.6657,-103.3884&navigate=yes',
      recommendations: [
        'Se ruega llegar con 15 minutos de anticipación.',
        'Estacionamiento anexo al atrio parroquial.',
        'Fotografías permitidas al término de la ceremonia.',
      ],
      bannerGradient: 'from-[#FAF2EB] to-[#F5E6DC]',
    },
    reception: {
      id: 'reception',
      title: 'Recepción & Fiesta de Gala',
      subtitle: 'Banquete, Vals & Celebración',
      time: '19:30 hrs',
      name: 'Hacienda Las Magnolias & Jardín',
      address: 'Camino Real a la Herradura #1800, San Jerónimo',
      city: 'Zapopan / Guadalajara',
      coordinates: {
        lat: 20.7123,
        lng: -103.4189,
      },
      googleMapsUrl: 'https://maps.google.com/?q=20.7123,-103.4189',
      wazeUrl: 'https://waze.com/ul?ll=20.7123,-103.4189&navigate=yes',
      recommendations: [
        'Servicio de Valet Parking y seguridad en puerta.',
        'Cóctel de bienvenida a partir de las 19:30 hrs.',
        'Entrada triunfal y vals de Emilia a las 20:45 hrs.',
      ],
      bannerGradient: 'from-[#F7EFE8] to-[#F2E3D5]',
    },
  };

  const current = venues[selectedVenue];

  const handleCopyAddress = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  // Google Maps embed URL using coordinate query
  const mapEmbedUrl = `https://maps.google.com/maps?q=${current.coordinates.lat},${current.coordinates.lng}&hl=es&z=15&output=embed`;

  return (
    <section id="lugares" className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] relative w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Dónde y Cuándo
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Ubicaciones del Evento
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            Acompáñanos en cada momento especial. Consulta las direcciones exactas e indicaciones de
            llegada.
          </p>
        </div>

        {/* Venue Selector Segmented Control - Strict Mobile Fit */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="grid grid-cols-2 p-1 rounded-xl bg-[#EFE6DC] border border-[#DFCFC2] gap-1">
            <button
              onClick={() => setSelectedVenue('church')}
              className={`py-2.5 px-2 rounded-lg text-xs font-sans uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 min-w-0 ${
                selectedVenue === 'church'
                  ? 'bg-white text-[#2C2422] shadow-sm font-bold'
                  : 'text-[#6E574E] hover:text-[#2C2422] font-medium'
              }`}
            >
              <ChurchPinIcon className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
              <span className="truncate text-[11px] sm:text-xs">
                1. Misa <span className="hidden sm:inline">Religiosa</span>
              </span>
            </button>
            <button
              onClick={() => setSelectedVenue('reception')}
              className={`py-2.5 px-2 rounded-lg text-xs font-sans uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 min-w-0 ${
                selectedVenue === 'reception'
                  ? 'bg-white text-[#2C2422] shadow-sm font-bold'
                  : 'text-[#6E574E] hover:text-[#2C2422] font-medium'
              }`}
            >
              <PartyPinIcon className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
              <span className="truncate text-[11px] sm:text-xs">
                2. Fiesta <span className="hidden sm:inline">&amp; Gala</span>
              </span>
            </button>
          </div>
        </div>

        {/* Venue Details & Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-4 sm:p-7 border border-[#E8D3C5] shadow-sm">
            <div>
              {/* Category & Time */}
              <div className="flex items-start justify-between border-b border-[#F0E4D8] pb-4 mb-5 gap-2">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#996515] block">
                    {current.subtitle}
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-[#2C2422] mt-0.5 leading-snug break-words">
                    {current.name}
                  </h3>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#FAF4ED] text-[#996515] text-[11px] sm:text-xs font-sans font-semibold border border-[#E8D3C5]">
                    <Clock className="w-3 h-3" />
                    {current.time}
                  </span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="mb-5">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C7A70] font-sans font-medium block mb-1">
                  Dirección
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#3B2926] leading-relaxed break-words">
                  {current.address}
                </p>
                <p className="text-xs text-[#7A6357] mt-0.5">{current.city}</p>

                {/* Copy button */}
                <button
                  onClick={() =>
                    handleCopyAddress(`${current.name}, ${current.address}, ${current.city}`, current.id)
                  }
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#996515] hover:text-[#7A500F] font-sans font-medium transition-colors"
                >
                  {copiedId === current.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">¡Copiada al portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar dirección para GPS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Recommendations list */}
              <div className="mb-6">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C7A70] font-sans font-medium block mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
                  Recomendaciones para invitados
                </span>
                <ul className="space-y-1.5 text-xs text-[#5C453C]">
                  {current.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D4AF37] mt-0.5 font-bold">·</span>
                      <span className="leading-snug">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct navigation action buttons */}
            <div className="pt-4 border-t border-[#F0E4D8] space-y-2">
              <a
                href={current.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-3 rounded-xl bg-[#3B2926] text-white hover:bg-[#523B36] text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Abrir en Google Maps
                <ExternalLink className="w-3 h-3 text-[#D4AF37]/80 ml-0.5" />
              </a>

              <a
                href={current.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F2ECE4] text-[#3B2926] border border-[#D4AF37]/40 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-[#B8860B]" />
                Abrir en Waze Navegación
                <ExternalLink className="w-3 h-3 text-[#B8860B]/70 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md relative min-h-[320px] sm:min-h-[420px] bg-[#EFE9E2] flex flex-col">
            {/* Top Bar of the Map view */}
            <div className="bg-[#3B2926] text-[#FAF7F2] px-3.5 sm:px-5 py-2.5 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="font-medium tracking-wide truncate">
                  {current.name}
                </span>
              </div>
              <span className="text-[#D4AF37] text-[10px] hidden md:inline shrink-0 ml-2">
                {current.city}
              </span>
            </div>

            {/* Interactive iframe with live map tiles */}
            <div className="flex-1 w-full h-full min-h-[280px] sm:min-h-[380px] relative">
              <iframe
                title={`Mapa de ${current.name}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                loading="lazy"
                allowFullScreen
                src={mapEmbedUrl}
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />

              {/* Responsive marker floating bar */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:right-auto bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#D4AF37]/40 shadow-lg text-xs font-sans max-w-sm pointer-events-auto">
                <div className="flex items-center justify-between gap-2">
                  <div className="truncate">
                    <p className="font-bold text-[#2C2422] truncate text-xs">{current.name}</p>
                    <p className="text-[10px] text-[#6E574E] truncate">{current.address}</p>
                  </div>
                  <a
                    href={current.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs text-[#996515] font-bold hover:underline shrink-0 bg-[#FAF4ED] px-2 py-1 rounded border border-[#E8D3C5]"
                  >
                    Ruta GPS &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick venue switch selector cards below */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          <div
            onClick={() => setSelectedVenue('church')}
            className={`p-3.5 sm:p-5 rounded-xl cursor-pointer transition-all border ${
              selectedVenue === 'church'
                ? 'bg-white border-[#D4AF37] shadow-sm'
                : 'bg-white/50 border-[#E8D3C5] hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF4ED] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <ChurchPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#996515]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#2C2422] truncate">
                    Parroquia San Juan Bautista
                  </h4>
                  <p className="text-[11px] text-[#7A6357] truncate">Misa · 17:00 hrs</p>
                </div>
              </div>
              <span className="text-[11px] font-sans font-semibold text-[#996515] shrink-0">
                {selectedVenue === 'church' ? 'Activo' : 'Ver mapa'}
              </span>
            </div>
          </div>

          <div
            onClick={() => setSelectedVenue('reception')}
            className={`p-3.5 sm:p-5 rounded-xl cursor-pointer transition-all border ${
              selectedVenue === 'reception'
                ? 'bg-white border-[#D4AF37] shadow-sm'
                : 'bg-white/50 border-[#E8D3C5] hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF4ED] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <PartyPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#996515]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#2C2422] truncate">
                    Hacienda Las Magnolias
                  </h4>
                  <p className="text-[11px] text-[#7A6357] truncate">Recepción · 19:30 hrs</p>
                </div>
              </div>
              <span className="text-[11px] font-sans font-semibold text-[#996515] shrink-0">
                {selectedVenue === 'reception' ? 'Activo' : 'Ver mapa'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChurchPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4M10 4h4" />
    <path d="M18 10h-2V7a4 4 0 0 0-8 0v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
  </svg>
);

const PartyPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
