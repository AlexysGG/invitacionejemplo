import React, { useState } from 'react';
import { Mail, CreditCard, Copy, Check, ShoppingBag, Heart } from 'lucide-react';

export const GiftsSection: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedLiverpool, setCopiedLiverpool] = useState(false);

  const clabe = '012180015489201934';
  const liverpoolEventId = 'EVENTO-514920';

  const handleCopy = (text: string, type: 'bank' | 'liverpool') => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    } else {
      setCopiedLiverpool(true);
      setTimeout(() => setCopiedLiverpool(false), 2500);
    }
  };

  return (
    <section id="regalos" className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Detalles con Cariño
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Mesa de Regalos
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#5C453C] mt-2 px-2">
            &ldquo;Tu presencia y cariño son mi mayor y más valioso regalo. Si deseas hacerme un detalle, te comparto estas opciones.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Lluvia de Sobres */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8D3C5] shadow-sm text-center flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF4ED] border border-[#D4AF37]/40 mx-auto flex items-center justify-center mb-3 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#996515]" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#2C2422] mb-1.5 sm:mb-2">
                Lluvia de Sobres
              </h3>
              <p className="text-xs sm:text-sm text-[#6E574E] leading-relaxed">
                Contaremos con un buzón especial en la entrada del salón donde podrás depositar tu sobre con tus mejores deseos.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#F0E4D8]">
              <span className="text-[11px] uppercase tracking-wider text-[#996515] font-sans font-medium flex items-center justify-center gap-1">
                <Heart className="w-3.5 h-3.5" /> En recepción
              </span>
            </div>
          </div>

          {/* Card 2: Transferencia Bancaria */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#D4AF37]/50 shadow-sm text-center flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B2926] text-[#FFFDF9] text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
              Opción Práctica
            </div>
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF4ED] border border-[#D4AF37]/40 mx-auto flex items-center justify-center mb-3 sm:mb-4 mt-1">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#996515]" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#2C2422] mb-0.5">
                Transferencia
              </h3>
              <p className="text-xs text-[#7A6357] mb-3">BBVA Bancomer</p>

              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5] text-left text-xs mb-4">
                <div className="text-[#8C7A70] text-[10px] uppercase font-sans">Beneficiaria:</div>
                <div className="font-medium text-[#2C2422] truncate text-xs">Emilia Morales H.</div>
                <div className="text-[#8C7A70] text-[10px] uppercase font-sans mt-2">CLABE:</div>
                <div className="font-mono text-[11px] font-bold text-[#3B2926] tracking-wider break-all">
                  {clabe}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(clabe, 'bank')}
              className="w-full py-2.5 px-3 rounded-xl bg-[#3B2926] text-white hover:bg-[#523B36] text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              {copiedBank ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>¡CLABE Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Copiar CLABE</span>
                </>
              )}
            </button>
          </div>

          {/* Card 3: Tienda Departamental */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8D3C5] shadow-sm text-center flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF4ED] border border-[#D4AF37]/40 mx-auto flex items-center justify-center mb-3 sm:mb-4">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#996515]" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#2C2422] mb-0.5">
                Mesa Departamental
              </h3>
              <p className="text-xs text-[#7A6357] mb-2.5">Liverpool</p>
              <p className="text-xs sm:text-sm text-[#6E574E] leading-relaxed mb-3">
                Puedes buscar la mesa con el número de evento en cualquier sucursal o en línea.
              </p>
              <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5] font-mono text-xs font-bold text-[#996515]">
                {liverpoolEventId}
              </div>
            </div>

            <button
              onClick={() => handleCopy(liverpoolEventId, 'liverpool')}
              className="mt-4 sm:mt-5 w-full py-2.5 px-3 rounded-xl border border-[#D4AF37]/40 hover:bg-[#FAF6F0] text-[#3B2926] text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              {copiedLiverpool ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>¡Código Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Copiar N° Evento</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
