import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FloatingParticles } from './components/FloatingParticles';
import { InvitationEnvelopeModal } from './components/InvitationEnvelopeModal';
import { Hero } from './components/Hero';
import { ParentsAndGodparents } from './components/ParentsAndGodparents';
import { LocationsMap } from './components/LocationsMap';
import { DressCode } from './components/DressCode';
import { Gallery } from './components/Gallery';
import { RSVPSection } from './components/RSVPSection';
import { Footer } from './components/Footer';
import { luxurySynth } from './utils/audioSynth';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEnvelopeModalOpen, setIsEnvelopeModalOpen] = useState(false);

  const handleToggleMusic = () => {
    const nextState = luxurySynth.toggle();
    setIsMusicPlaying(nextState);
  };

  const handleOpenInvitationModal = () => {
    setIsEnvelopeModalOpen(true);
  };

  const handleCloseInvitationModal = () => {
    setIsEnvelopeModalOpen(false);
  };

  const handleMusicStartedFromModal = () => {
    setIsMusicPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2422] relative selection:bg-[#E8D3C5] selection:text-[#3B2926]">
      {/* Delicate floating rose petals and golden sparkles */}
      <FloatingParticles />

      {/* Top Navigation Bar with 3-Zone Contract */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onOpenInvitationModal={handleOpenInvitationModal}
      />

      <main>
        {/* Hero Section with Monogram, Countdown Timer, Calendar Export */}
        <Hero onOpenEnvelope={handleOpenInvitationModal} />

        {/* Family Blessing: Parents and Godparents Recognition */}
        <ParentsAndGodparents />

        {/* Interactive Map & Venues (Ceremonia Religiosa & Recepción) */}
        <LocationsMap />

        {/* Dress Code: Rigurosa Etiqueta & Color Swatches */}
        <DressCode />

        {/* Digital Photo Album QR Code Sample */}
        <Gallery />

        {/* RSVP Confirmation directly via WhatsApp */}
        <RSVPSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Wax Seal Digital Envelope Modal */}
      <InvitationEnvelopeModal
        isOpen={isEnvelopeModalOpen}
        onClose={handleCloseInvitationModal}
        onPlayMusic={handleMusicStartedFromModal}
      />
    </div>
  );
}
