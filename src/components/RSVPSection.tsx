import React, { useState } from 'react';
import { MessageCircle, Heart, Users, Sparkles, Send } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [guestsCount, setGuestsCount] = useState(1);

  // Phone number for RSVP (can be customized by host)
  const phoneOrganizer = '5213312345678';

  const handleConfirmWhatsApp = (attending: boolean) => {
    const guestLabel = fullName.trim() || 'Invitado(s)';
    let messageText = '';

    if (attending) {
      messageText = [
        `👑 *CONFIRMACIÓN DE ASISTENCIA - MIS XV EMILIA*`,
        ``,
        `• *Invitado(s):* ${guestLabel}`,
        `• *Personas confirmadas:* ${guestsCount} ${guestsCount === 1 ? 'persona' : 'personas'}`,
        `• *Respuesta:* ¡Sí, confirmo con mucho gusto mi asistencia! ✨`,
        ``,
        `¡Nos vemos para celebrar este día tan especial! 🥂`,
      ].join('\n');
    } else {
      messageText = [
        `👑 *RESPUESTA DE ASISTENCIA - MIS XV EMILIA*`,
        ``,
        `• *Invitado(s):* ${guestLabel}`,
        `• *Respuesta:* Lamentablemente no podré asistir.`,
        ``,
        `Les agradezco de corazón la invitación y le deseo a Emilia un día maravilloso e inolvidable. 💕`,
      ].join('\n');
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneOrganizer}&text=${encodeURIComponent(
      messageText
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="confirmacion"
      className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] relative border-b border-[#E8D3C5]/60 w-full overflow-hidden"
    >
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Tu Compañía
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Confirmar Asistencia
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            Agradecemos confirmar tu asistencia directamente por <strong className="font-bold text-[#1E7E34]">WhatsApp</strong> antes del <strong className="font-bold text-[#3B2926]">20 de Octubre de 2026</strong>.
          </p>
        </div>

        {/* WhatsApp RSVP Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-sm relative overflow-hidden">
          {/* Subtle gold ribbon top edge */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]" />

          {/* WhatsApp Header Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 text-center">
            <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
            </div>
            <span className="font-cinzel text-sm sm:text-base font-bold text-[#2C2422] tracking-wide">
              Confirmación vía WhatsApp
            </span>
          </div>

          <div className="space-y-5">
            {/* Guest Name Input */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-sans font-semibold text-[#5C453C] mb-2">
                Nombre de los Invitados / Familia
              </label>
              <input
                type="text"
                placeholder="Ej. Familia Rodríguez Morales / Sofía Martínez"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DFCFC2] bg-[#FAF7F2] text-sm text-[#2C2422] focus:bg-white focus:outline-none focus:border-[#25D366] transition-colors"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-sans font-semibold text-[#5C453C] mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#996515]" />
                Número de Personas Confirmadas
              </label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(parseInt(e.target.value, 10))}
                className="w-full px-4 py-3 rounded-xl border border-[#DFCFC2] bg-[#FAF7F2] text-sm text-[#2C2422] focus:bg-white focus:outline-none focus:border-[#25D366] transition-colors"
              >
                <option value={1}>1 Persona</option>
                <option value={2}>2 Personas (Pareja)</option>
                <option value={3}>3 Personas</option>
                <option value={4}>4 Personas (Familia)</option>
                <option value={5}>5 Personas</option>
                <option value={6}>6 Personas</option>
              </select>
            </div>

            {/* Explanatory text */}
            <p className="text-[11px] text-[#8C7A70] font-sans text-center">
              Al tocar el botón se abrirá WhatsApp con tu mensaje listo para enviar al organizador.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              {/* Primary Confirm button */}
              <button
                type="button"
                onClick={() => handleConfirmWhatsApp(true)}
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Confirmar Asistencia por WhatsApp</span>
              </button>

              {/* Decline button */}
              <button
                type="button"
                onClick={() => handleConfirmWhatsApp(false)}
                className="w-full py-3 px-6 rounded-2xl border border-[#DFCFC2] text-[#6E574E] hover:bg-[#FAF7F2] active:scale-[0.99] text-xs font-sans font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Avisar que no podré asistir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer reminder */}
        <div className="text-center mt-8">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#8C7A70] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Cupo limitado · Agradecemos confirmar tu asistencia con anticipación
          </span>
        </div>
      </div>
    </section>
  );
};
