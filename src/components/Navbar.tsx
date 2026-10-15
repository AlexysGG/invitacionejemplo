import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Heart, MapPin, Sparkles, QrCode } from 'lucide-react';

interface Props {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenInvitationModal: () => void;
}

export const Navbar: React.FC<Props> = ({
  isMusicPlaying,
  onToggleMusic,
  onOpenInvitationModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Ubicaciones', href: '#lugares', icon: MapPin },
    { label: 'Vestimenta', href: '#vestimenta', icon: Sparkles },
    { label: 'Galería', href: '#galeria', icon: QrCode },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8D3C5]/70 transition-colors w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-8 px-3.5 sm:px-6 py-2.5 sm:py-3.5">
        {/* Zone 1: Brand wordmark (scales gracefully on mobile) */}
        <a
          href="#"
          className="font-cinzel font-bold text-[#3B2926] hover:text-[#996515] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2"
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[10px] sm:text-xs text-[#996515] font-serif font-bold bg-[#FAF4ED] shrink-0">
            E
          </span>
          <span className="text-sm sm:text-base md:text-lg tracking-wider">EMILIA</span>
          <span className="text-[10px] sm:text-xs text-[#996515] tracking-widest hidden sm:inline">
            · MIS XV
          </span>
        </a>

        {/* Zone 2: Desktop clean single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-sans font-medium text-[#6E574E]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#996515] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Audio toggle + Primary RSVP Action + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Music button */}
          <button
            onClick={onToggleMusic}
            aria-label={isMusicPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
            className="p-1.5 sm:p-2 rounded-full border border-[#D4AF37]/40 text-[#6E574E] hover:text-[#996515] hover:border-[#D4AF37] transition-all bg-white/80 shrink-0"
            title={isMusicPlaying ? 'Pausar vals' : 'Reproducir vals'}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B] animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C7A70]" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.getElementById('confirmacion');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onOpenInvitationModal();
              }
            }}
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-sans font-medium text-white bg-[#3B2926] hover:bg-[#523B36] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Heart className="w-3 h-3 text-[#E8A598] hidden xs:inline" />
            <span className="hidden sm:inline">Confirmar Asistencia</span>
            <span className="sm:hidden">Confirmar</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg border border-[#DFCFC2] text-[#3B2926] hover:bg-[#F2ECE4] transition-colors shrink-0"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de secciones'}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-[#3B2926]" />
            ) : (
              <Menu className="w-4 h-4 text-[#3B2926]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8D3C5] bg-[#FFFDF9] px-4 py-3 shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-sans">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8D3C5] text-[#3B2926] hover:bg-[#F0E4D8] text-left flex items-center gap-2 font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-[#E8D3C5]/60 flex items-center justify-between text-xs font-sans">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInvitationModal();
              }}
              className="text-[#996515] font-semibold hover:underline flex items-center gap-1"
            >
              ✉️ Abrir sobre formal
            </button>
            <span className="text-[10px] text-[#8C7A70]">14 Nov 2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
