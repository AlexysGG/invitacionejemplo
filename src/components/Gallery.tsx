import React, { useState } from 'react';
import { QrCode, Camera, Share2, Copy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const albumUrl = 'https://photos.app.goo.gl/emilia-xv-recuerdos';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(albumUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="galeria"
      className="py-14 sm:py-20 md:py-28 bg-[#FFFDF9] relative border-b border-[#E8D3C5]/60 w-full overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Recuerdos Inolvidables
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Álbum de Recuerdos
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            ¡Queremos ver la fiesta a través de tus ojos! Escanea el código con tu celular para compartir tus fotos o ver el álbum digital de Emilia.
          </p>
        </div>

        {/* QR Code Presentation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-md max-w-xl mx-auto relative overflow-hidden text-center">
          {/* Decorative Corner Borders */}
          <div className="absolute top-3 left-3 text-[#D4AF37]/40 text-lg select-none">❧</div>
          <div className="absolute top-3 right-3 text-[#D4AF37]/40 text-lg select-none">☙</div>
          <div className="absolute bottom-3 left-3 text-[#D4AF37]/40 text-lg select-none">☙</div>
          <div className="absolute bottom-3 right-3 text-[#D4AF37]/40 text-lg select-none">❧</div>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D3C5] text-[#996515] text-[11px] font-sans font-semibold uppercase tracking-wider mb-6">
            <Camera className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Código QR del Evento</span>
          </div>

          {/* QR Code Frame */}
          <div className="relative inline-block mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EE] border-2 border-[#D4AF37]/60 shadow-[0_8px_30px_rgba(212,175,55,0.15)] mb-6">
            {/* Elegant SVG QR Code Representation */}
            <svg
              className="w-48 h-48 sm:w-56 sm:h-56 mx-auto text-[#2C2422]"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              {/* Outer border & white background */}
              <rect x="0" y="0" width="200" height="200" fill="#FFFFFF" rx="12" />

              {/* Top-Left Finder Pattern */}
              <rect x="16" y="16" width="48" height="48" rx="6" fill="#2C2422" />
              <rect x="22" y="22" width="36" height="36" rx="4" fill="#FFFFFF" />
              <rect x="28" y="28" width="24" height="24" rx="3" fill="#996515" />

              {/* Top-Right Finder Pattern */}
              <rect x="136" y="16" width="48" height="48" rx="6" fill="#2C2422" />
              <rect x="142" y="22" width="36" height="36" rx="4" fill="#FFFFFF" />
              <rect x="148" y="28" width="24" height="24" rx="3" fill="#996515" />

              {/* Bottom-Left Finder Pattern */}
              <rect x="16" y="136" width="48" height="48" rx="6" fill="#2C2422" />
              <rect x="22" y="142" width="36" height="36" rx="4" fill="#FFFFFF" />
              <rect x="28" y="148" width="24" height="24" rx="3" fill="#996515" />

              {/* Timing Patterns */}
              <rect x="70" y="20" width="6" height="6" rx="1.5" />
              <rect x="82" y="20" width="6" height="6" rx="1.5" />
              <rect x="94" y="20" width="6" height="6" rx="1.5" />
              <rect x="106" y="20" width="6" height="6" rx="1.5" />
              <rect x="118" y="20" width="6" height="6" rx="1.5" />

              <rect x="20" y="70" width="6" height="6" rx="1.5" />
              <rect x="20" y="82" width="6" height="6" rx="1.5" />
              <rect x="20" y="94" width="6" height="6" rx="1.5" />
              <rect x="20" y="106" width="6" height="6" rx="1.5" />
              <rect x="20" y="118" width="6" height="6" rx="1.5" />

              {/* Alignment Pattern Bottom-Right */}
              <rect x="140" y="140" width="28" height="28" rx="4" fill="#2C2422" />
              <rect x="145" y="145" width="18" height="18" rx="2" fill="#FFFFFF" />
              <rect x="150" y="150" width="8" height="8" rx="1.5" fill="#996515" />

              {/* Data module matrix dots */}
              {/* Row 1-4 data */}
              <rect x="72" y="32" width="7" height="7" rx="1.5" />
              <rect x="88" y="32" width="7" height="7" rx="1.5" />
              <rect x="104" y="32" width="7" height="7" rx="1.5" />
              <rect x="120" y="32" width="7" height="7" rx="1.5" />

              <rect x="72" y="46" width="7" height="7" rx="1.5" />
              <rect x="80" y="46" width="7" height="7" rx="1.5" />
              <rect x="112" y="46" width="7" height="7" rx="1.5" />
              <rect x="120" y="46" width="7" height="7" rx="1.5" />

              {/* Middle cluster */}
              <rect x="34" y="72" width="7" height="7" rx="1.5" />
              <rect x="48" y="72" width="7" height="7" rx="1.5" />
              <rect x="62" y="72" width="7" height="7" rx="1.5" />
              <rect x="136" y="72" width="7" height="7" rx="1.5" />
              <rect x="152" y="72" width="7" height="7" rx="1.5" />
              <rect x="168" y="72" width="7" height="7" rx="1.5" />

              <rect x="34" y="86" width="7" height="7" rx="1.5" />
              <rect x="48" y="86" width="7" height="7" rx="1.5" />
              <rect x="136" y="86" width="7" height="7" rx="1.5" />
              <rect x="160" y="86" width="7" height="7" rx="1.5" />

              <rect x="34" y="100" width="7" height="7" rx="1.5" />
              <rect x="56" y="100" width="7" height="7" rx="1.5" />
              <rect x="144" y="100" width="7" height="7" rx="1.5" />
              <rect x="168" y="100" width="7" height="7" rx="1.5" />

              <rect x="48" y="114" width="7" height="7" rx="1.5" />
              <rect x="62" y="114" width="7" height="7" rx="1.5" />
              <rect x="136" y="114" width="7" height="7" rx="1.5" />
              <rect x="152" y="114" width="7" height="7" rx="1.5" />

              {/* Bottom cluster */}
              <rect x="72" y="136" width="7" height="7" rx="1.5" />
              <rect x="88" y="136" width="7" height="7" rx="1.5" />
              <rect x="104" y="136" width="7" height="7" rx="1.5" />
              <rect x="120" y="136" width="7" height="7" rx="1.5" />

              <rect x="72" y="150" width="7" height="7" rx="1.5" />
              <rect x="96" y="150" width="7" height="7" rx="1.5" />
              <rect x="112" y="150" width="7" height="7" rx="1.5" />

              <rect x="72" y="164" width="7" height="7" rx="1.5" />
              <rect x="88" y="164" width="7" height="7" rx="1.5" />
              <rect x="104" y="164" width="7" height="7" rx="1.5" />
              <rect x="120" y="164" width="7" height="7" rx="1.5" />

              {/* Center Monogram Badge */}
              <circle cx="100" cy="100" r="22" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="2.5" />
              <text
                x="100"
                y="107"
                textAnchor="middle"
                fontFamily="'Cinzel', serif"
                fontSize="20"
                fontWeight="bold"
                fill="#996515"
              >
                E
              </text>
            </svg>
          </div>

          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#2C2422] mb-1">
            Escanea para Compartir Fotos
          </h3>
          <p className="text-xs text-[#6E574E] font-sans max-w-sm mx-auto mb-6">
            Apunta la cámara de tu teléfono al código QR durante el evento para subir tus mejores recuerdos de la noche.
          </p>

          {/* Quick instructions in steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-6 max-w-md mx-auto">
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D3C5] text-center">
              <span className="w-5 h-5 rounded-full bg-[#3B2926] text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">
                1
              </span>
              <p className="text-[11px] text-[#5C453C] font-sans font-medium">Abre tu cámara</p>
            </div>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D3C5] text-center">
              <span className="w-5 h-5 rounded-full bg-[#3B2926] text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">
                2
              </span>
              <p className="text-[11px] text-[#5C453C] font-sans font-medium">Escanea el código</p>
            </div>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D3C5] text-center">
              <span className="w-5 h-5 rounded-full bg-[#3B2926] text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">
                3
              </span>
              <p className="text-[11px] text-[#5C453C] font-sans font-medium">Sube tus fotos</p>
            </div>
          </div>

          {/* Direct Link Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={albumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#3B2926] text-white hover:bg-[#523B36] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              Abrir Álbum Digital
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#DFCFC2] text-[#5C453C] hover:bg-[#FAF7F2] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Copiar Enlace</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-xs font-sans text-[#8C7A70] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Las fotografías profesionales estarán disponibles en este mismo enlace después del evento
          </p>
        </div>
      </div>
    </section>
  );
};
