import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Heart, MailOpen, Download } from 'lucide-react';

interface Props {
  onOpenEnvelope: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenEnvelope }) => {
  // Target date for Emilia's XV: Nov 14, 2026 17:00:00
  const eventDate = new Date('2026-11-14T17:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = eventDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mis XV Años//Emilia//ES',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'SUMMARY:Mis XV Años · Emilia',
      'DESCRIPTION:Celebración de los XV Años de Emilia. Ceremonia religiosa en Parroquia San Juan Bautista (17:00 hrs) y Recepción de Gala en Hacienda Las Magnolias (19:30 hrs).',
      'LOCATION:Hacienda Las Magnolias\\, Camino Real #1800\\, La Herradura',
      'DTSTART:20261114T170000',
      'DTEND:20261115T020000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'XV_Anos_Emilia.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenGoogleCalendar = () => {
    const title = encodeURIComponent('Mis XV Años · Emilia');
    const details = encodeURIComponent(
      'Celebración de los XV Años de Emilia. Ceremonia religiosa en Parroquia San Juan Bautista (17:00 hrs) y Recepción de Gala en Hacienda Las Magnolias (19:30 hrs).'
    );
    const location = encodeURIComponent('Hacienda Las Magnolias, Camino Real #1800, La Herradura');
    const start = '20261114T230000Z';
    const end = '20261115T080000Z';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 overflow-hidden w-full">
      {/* Soft circular aura background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] bg-gradient-to-tr from-[#F5E6D8]/50 via-[#FDF3EA]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center">
        {/* Monogram Crest with delicate laurels */}
        <div className="inline-flex flex-col items-center justify-center mb-5 sm:mb-6">
          <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FFFDF9] shadow-[0_4px_20px_rgba(212,175,55,0.12)]">
            <svg
              className="absolute inset-0 w-full h-full text-[#D4AF37]/40 pointer-events-none p-1"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <circle cx="50" cy="50" r="46" strokeDasharray="2 3" />
            </svg>

            <span className="font-cinzel text-2xl sm:text-4xl font-bold tracking-widest text-[#996515]">
              E
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] mt-2.5 font-sans font-medium">
            14 · 11 · 2026
          </span>
        </div>

        {/* Script Intro */}
        <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#996515] mb-1">
          Mis Quince Años
        </p>

        {/* Big Name */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#2C2422] uppercase mb-4 sm:mb-6">
          Emilia
        </h1>

        {/* Heartfelt Quote */}
        <p className="font-cormorant italic text-base sm:text-xl md:text-2xl text-[#5C453C] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
          &ldquo;Hay momentos en la vida que son irrepetibles, pero compartirlos con las personas
          que más quiero los hace eternos. Te invito a celebrar conmigo este día tan especial.&rdquo;
        </p>

        {/* Date & Time metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-[#7A6357] font-sans font-medium mb-8 sm:mb-10 px-2">
          <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B] shrink-0" /> Sábado, 14 Nov 2026
          </span>
          <span aria-hidden="true" className="text-[#D4AF37] hidden xs:inline">·</span>
          <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B] shrink-0" /> Misa 17:00 hrs
          </span>
          <span aria-hidden="true" className="text-[#D4AF37] hidden xs:inline">·</span>
          <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B] shrink-0" /> Fiesta 19:30 hrs
          </span>
        </div>

        {/* Countdown Timer Block */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10 p-3.5 sm:p-6 md:p-8 rounded-2xl bg-white/85 border border-[#D4AF37]/30 shadow-sm backdrop-blur-sm">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C7A70] font-sans font-medium mb-3.5 sm:mb-5">
            La cuenta regresiva ha comenzado
          </p>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4">
            <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5]/70">
              <span className="font-cinzel font-bold text-lg sm:text-2xl md:text-4xl text-[#3B2926] tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#7A6357] font-sans mt-0.5 sm:mt-1">
                Días
              </span>
            </div>

            <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5]/70">
              <span className="font-cinzel font-bold text-lg sm:text-2xl md:text-4xl text-[#3B2926] tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#7A6357] font-sans mt-0.5 sm:mt-1">
                Horas
              </span>
            </div>

            <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5]/70">
              <span className="font-cinzel font-bold text-lg sm:text-2xl md:text-4xl text-[#3B2926] tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#7A6357] font-sans mt-0.5 sm:mt-1">
                Minutos
              </span>
            </div>

            <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D3C5]/70">
              <span className="font-cinzel font-bold text-lg sm:text-2xl md:text-4xl text-[#996515] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#7A6357] font-sans mt-0.5 sm:mt-1">
                Segundos
              </span>
            </div>
          </div>

          {/* Calendar export quick actions */}
          <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#E8D3C5]/50 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-sans text-[#6E574E]">
            <button
              onClick={handleOpenGoogleCalendar}
              className="hover:text-[#996515] hover:underline underline-offset-4 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              Agendar en Google Calendar
            </button>
            <span aria-hidden="true" className="text-[#D4AF37] hidden sm:inline">·</span>
            <button
              onClick={handleDownloadCalendar}
              className="hover:text-[#996515] hover:underline underline-offset-4 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#B8860B]" />
              Descargar archivo .ICS (Apple)
            </button>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenEnvelope}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#996515] via-[#B8860B] to-[#996515] text-[#FFFDF9] font-sans font-medium text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_18px_rgba(184,134,11,0.25)] flex items-center justify-center gap-2"
          >
            <MailOpen className="w-4 h-4 text-[#FFF3C4]" />
            Abrir Invitación Formal
          </button>

          <a
            href="#lugares"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white/90 border border-[#D4AF37]/40 text-[#3B2926] hover:bg-[#FAF6F0] font-sans font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MapPin className="w-4 h-4 text-[#B8860B]" />
            Ver Ubicaciones en Mapa
          </a>
        </div>
      </div>
    </section>
  );
};
