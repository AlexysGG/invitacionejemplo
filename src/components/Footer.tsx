import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C2422] text-[#FAF7F2] py-12 sm:py-16 border-t border-[#443834] relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center">
        {/* Monogram */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 mx-auto flex items-center justify-center mb-3 sm:mb-4 bg-[#3B2926]">
          <span className="font-cinzel text-lg sm:text-xl font-bold text-[#D4AF37]">E</span>
        </div>

        <p className="font-script text-3xl sm:text-4xl text-[#D4AF37] mb-1">
          Mis Quince Años
        </p>

        <h3 className="font-cinzel text-lg sm:text-xl tracking-[0.2em] font-semibold text-[#FFFDF9] mb-3 sm:mb-4">
          EMILIA
        </h3>

        <p className="font-cormorant italic text-sm sm:text-base text-[#D1C2BA] max-w-md mx-auto mb-6 sm:mb-8 px-2">
          &ldquo;Gracias por acompañarme en el comienzo de esta nueva y maravillosa etapa de mi vida.&rdquo;
        </p>

        {/* Scroll to Top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 text-xs font-sans text-[#E8D3C5] hover:text-white hover:border-[#D4AF37] transition-all mb-8 bg-[#3B2926]/50"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Volver al inicio
        </button>

        <div className="pt-6 sm:pt-8 border-t border-[#443834] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E8B83] font-sans gap-3 sm:gap-4">
          <p>© 2026 Celebración de Mis XV Años · Emilia Morales Herrera</p>
          <p className="flex items-center gap-1.5 justify-center">
            Hecho con <Heart className="w-3 h-3 text-[#E8A598] fill-[#E8A598]" /> para este día inolvidable
          </p>
        </div>
      </div>
    </footer>
  );
};
