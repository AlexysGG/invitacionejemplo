import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const ParentsAndGodparents: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#FAF7F2] border-y border-[#E8D3C5]/60 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="h-px w-6 sm:w-8 bg-[#D4AF37]/50" />
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
          <span className="h-px w-6 sm:w-8 bg-[#D4AF37]/50" />
        </div>

        <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
          Con la bendición de Dios
        </p>

        <h2 className="font-cinzel text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-[#2C2422] uppercase mb-8 sm:mb-10">
          Mis Padres y Padrinos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 text-center max-w-2xl mx-auto">
          {/* Parents Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-white/70 border border-[#E8D3C5] shadow-sm relative group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#8C7A70] block mb-2.5 sm:mb-3">
              Mis Amados Padres
            </span>
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B2926] mb-0.5">
              Alejandro Morales
            </h3>
            <span className="text-xs text-[#996515] font-serif">&amp;</span>
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B2926] mt-0.5">
              Sofía Herrera de Morales
            </h3>
            <p className="mt-3 sm:mt-4 text-xs text-[#7A6357] font-sans italic leading-relaxed">
              &ldquo;Gracias por su amor incondicional, sus consejos y por hacer realidad este sueño.&rdquo;
            </p>
          </div>

          {/* Godparents Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-white/70 border border-[#E8D3C5] shadow-sm relative group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#8C7A70] block mb-2.5 sm:mb-3">
              Mis Padrinos de Honor
            </span>
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B2926] mb-0.5">
              Roberto Morales
            </h3>
            <span className="text-xs text-[#996515] font-serif">&amp;</span>
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B2926] mt-0.5">
              Mariana Castillo
            </h3>
            <p className="mt-3 sm:mt-4 text-xs text-[#7A6357] font-sans italic leading-relaxed">
              &ldquo;Por ser mi ejemplo de bondad y guiar mis pasos en este nuevo camino.&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 inline-flex items-center gap-1.5 text-xs font-sans text-[#8C7A70]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Agradecemos profundamente ser parte de esta historia</span>
        </div>
      </div>
    </section>
  );
};
