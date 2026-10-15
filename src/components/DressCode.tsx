import React from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

export const DressCode: React.FC = () => {
  const recommendedColors = [
    { name: 'Azul Noche', hex: '#162238' },
    { name: 'Verde Esmeralda', hex: '#1B4D3E' },
    { name: 'Vino / Borgoña', hex: '#581825' },
    { name: 'Gris Carbón', hex: '#2C3038' },
    { name: 'Dorado / Cobre', hex: '#B8860B' },
  ];

  return (
    <section id="vestimenta" className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Elegancia y Distinción
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Código de Vestimenta
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            Queremos que luzcas espectacular en esta gran noche de gala.
          </p>
        </div>

        {/* Central main card */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 border border-[#E8D3C5] shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#3B2926] uppercase block">
              Rigurosa Etiqueta / Formal
            </span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto mt-2.5 sm:mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-10">
            {/* Damas */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8D3C5]/80">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <DressIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#996515]" />
                <h3 className="font-cinzel font-bold text-sm sm:text-base text-[#2C2422]">
                  Para las Damas
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6E574E] leading-relaxed">
                Vestido largo de gala o midi formal en telas elegantes. Zapatos cómodos para bailar toda la noche.
              </p>
            </div>

            {/* Caballeros */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8D3C5]/80">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <SuitIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#996515]" />
                <h3 className="font-cinzel font-bold text-sm sm:text-base text-[#2C2422]">
                  Para los Caballeros
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6E574E] leading-relaxed">
                Traje oscuro completo o smoking con camisa formal, corbata o moño, y calzado de vestir.
              </p>
            </div>
          </div>

          {/* Color palette suggestion */}
          <div className="border-t border-[#F0E4D8] pt-6 sm:pt-8 mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8C7A70] font-sans font-medium block text-center mb-3 sm:mb-4">
              Gama de colores sugerida
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {recommendedColors.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md transform hover:scale-110 transition-transform"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                  <span className="text-[10px] sm:text-[11px] text-[#6E574E] font-sans mt-1.5 text-center">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reserved colors disclaimer */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF3F0] border border-[#E8A598]/60 flex items-start gap-2.5 sm:gap-3">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#B85C4B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#6B3E36] leading-relaxed">
              <span className="font-semibold block text-[#522922]">Nota de Cortesía:</span>
              Rogamos con cariño reservar los colores{' '}
              <strong className="font-bold">Rosa Pastel / Blush</strong> y{' '}
              <strong className="font-bold">Blanco</strong> exclusivamente para la quinceañera
              Emilia.
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#8C7A70] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            ¡Tu presencia y elegancia iluminarán nuestra celebración!
          </span>
        </div>
      </div>
    </section>
  );
};

const DressIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 2h10l-2 5h-6z" />
    <path d="M9 7l-4 15h14l-4-15" />
    <path d="M9 2a3 3 0 0 0 6 0" />
  </svg>
);

const SuitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
    <path d="M12 4v7" />
    <path d="M8 4l4 7 4-7" />
    <path d="M4 4l8 4 8-4" />
    <path d="M10 14h4" />
    <path d="M10 17h4" />
  </svg>
);
