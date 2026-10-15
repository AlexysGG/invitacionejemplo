import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Clock, MapPin, X, Heart } from 'lucide-react';
import { luxurySynth } from '../utils/audioSynth';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPlayMusic: () => void;
}

export const InvitationEnvelopeModal: React.FC<Props> = ({ isOpen, onClose, onPlayMusic }) => {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpen) return null;

  const handleOpenSeal = () => {
    setIsOpened(true);
    luxurySynth.play();
    onPlayMusic();

    // Celebratory confetti burst in gold and rose
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#E8A598', '#FFFFFF', '#C5A059'],
      });
    } catch {
      // fallback safe
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Invitación Formal de Mis XV Años"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn transition-opacity duration-300 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl mx-auto my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 sm:-top-12 right-0 md:-right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Cerrar ventana de invitación"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {!isOpened ? (
          /* Sealed Envelope View */
          <div className="bg-[#FAF6F0] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 text-center border-2 border-[#D4AF37]/40 relative overflow-hidden">
            {/* Corner flourishes */}
            <div className="absolute top-2.5 left-2.5 text-[#D4AF37]/40 font-serif text-lg sm:text-xl">❧</div>
            <div className="absolute top-2.5 right-2.5 text-[#D4AF37]/40 font-serif text-lg sm:text-xl">☙</div>
            <div className="absolute bottom-2.5 left-2.5 text-[#D4AF37]/40 font-serif text-lg sm:text-xl">☙</div>
            <div className="absolute bottom-2.5 right-2.5 text-[#D4AF37]/40 font-serif text-lg sm:text-xl">❧</div>

            {/* Subtle ribbon graphic */}
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />

            <span className="font-script text-4xl md:text-5xl text-[#996515] block mb-2">
              Invitación de Honor
            </span>

            <p className="font-cormorant text-xl md:text-2xl text-[#5C453C] tracking-wide mb-6">
              Para ti y tu distinguida familia
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-[#8C7A70] mb-8 font-sans">
              Celebración de los XV Años de
            </p>

            {/* Wax Seal Button */}
            <div className="my-6 flex flex-col items-center justify-center">
              <button
                onClick={handleOpenSeal}
                className="group relative w-24 h-24 rounded-full bg-gradient-to-br from-[#B8860B] via-[#D4AF37] to-[#8B6508] shadow-[0_10px_25px_rgba(184,134,11,0.45)] flex items-center justify-center text-white transform transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                aria-label="Romper sello de cera y abrir invitación"
              >
                {/* Wax seal outer rim ring */}
                <div className="absolute inset-1.5 rounded-full border border-[#FFF3C4]/60 border-dashed" />
                <div className="flex flex-col items-center">
                  <span className="font-cinzel text-3xl font-bold tracking-wider text-[#FFF9E6] drop-shadow-sm">
                    E
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#FFF9E6]/80 font-sans">
                    XV
                  </span>
                </div>
              </button>
              <span className="mt-4 text-xs font-sans text-[#7A6357] tracking-wider animate-bounce flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Toca el sello para abrir la invitación
              </span>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
          </div>
        ) : (
          /* Opened Formal Card View */
          <div className="bg-[#FFFDF9] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#D4AF37]/40 relative overflow-hidden transition-all duration-500 max-h-[85vh] overflow-y-auto">
            {/* Decorative gold foil frame */}
            <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-xl pointer-events-none" />
            <div className="absolute inset-3 border border-[#E8D3C5]/40 rounded-lg pointer-events-none" />

            <div className="relative text-center pt-2 pb-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 mx-auto flex items-center justify-center mb-3 bg-[#FAF7F2]">
                <span className="font-cinzel text-lg font-bold text-[#996515]">E</span>
              </div>

              <span className="font-script text-3xl md:text-4xl text-[#996515] block">
                Mis Quince Años
              </span>

              <h2 className="font-cinzel text-2xl md:text-3xl font-semibold tracking-wider text-[#3B2926] mt-1 mb-3">
                EMILIA
              </h2>

              <p className="font-cormorant italic text-base md:text-lg text-[#6E574E] max-w-md mx-auto mb-6 px-4">
                &ldquo;Hay momentos en la vida que imaginamos desde pequeñas. Hoy doy gracias a Dios
                por permitirme llegar a mis quince años rodeada del amor de mi familia y amigos.&rdquo;
              </p>

              {/* Ceremony details quick glance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6 text-left text-sm max-w-lg mx-auto">
                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8D3C5]">
                  <div className="flex items-center gap-2 text-[#996515] font-semibold font-cinzel text-xs mb-1">
                    <ChurchIcon className="w-4 h-4 text-[#B8860B]" />
                    <span>MISA DE ACCIÓN DE GRACIAS</span>
                  </div>
                  <p className="font-medium text-[#2C2422]">Parroquia San Juan Bautista</p>
                  <p className="text-xs text-[#7A6357] mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B8860B]" /> 17:00 Horas
                  </p>
                  <p className="text-xs text-[#7A6357] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B8860B]" /> Av. de las Rosas #420, Jardines
                  </p>
                </div>

                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8D3C5]">
                  <div className="flex items-center gap-2 text-[#996515] font-semibold font-cinzel text-xs mb-1">
                    <PartyIcon className="w-4 h-4 text-[#B8860B]" />
                    <span>RECEPCIÓN Y CENA GALA</span>
                  </div>
                  <p className="font-medium text-[#2C2422]">Hacienda Las Magnolias</p>
                  <p className="text-xs text-[#7A6357] mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B8860B]" /> 19:30 Horas
                  </p>
                  <p className="text-xs text-[#7A6357] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B8860B]" /> Camino Real #1800, La Herradura
                  </p>
                </div>
              </div>

              {/* Date banner */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5EDE4] text-[#5C453C] text-xs font-sans font-medium mb-6">
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                <span>Sábado 14 de Noviembre de 2026</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('confirmacion');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#3B2926] text-[#FAF7F2] hover:bg-[#523B36] text-xs font-medium uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 text-[#E8A598]" />
                  Confirmar Asistencia
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#D4AF37]/50 text-[#5C453C] hover:bg-[#FAF6F0] text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  Continuar explorando
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ChurchIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M10 22v-6a2 2 0 0 1 4 0v6" />
  </svg>
);

const PartyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-4l-3 4-3-4H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l3 12h8l3-12h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    <path d="M12 6v14" />
  </svg>
);
