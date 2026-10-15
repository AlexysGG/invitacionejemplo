import React from 'react';
import { TimelineItem } from '../types';

export const Itinerary: React.FC = () => {
  const schedule: TimelineItem[] = [
    {
      time: '17:00 hrs',
      title: 'Misa de Acción de Gracias',
      description: 'Ceremonia religiosa solemne en la Parroquia San Juan Bautista.',
      iconName: 'church',
    },
    {
      time: '19:30 hrs',
      title: 'Recepción & Cóctel de Honor',
      description: 'Bienvenida a los invitados en la terraza con música acústica y canapés de autor.',
      iconName: 'cocktail',
    },
    {
      time: '20:30 hrs',
      title: 'Entrada Triunfal de Emilia',
      description: 'Presentación oficial de la quinceañera y recibimiento de gala.',
      iconName: 'sparkles',
    },
    {
      time: '21:00 hrs',
      title: 'El Vals de Emilia & Brindis',
      description: 'Emotivo vals con sus padres, chambelanes y brindis de honor de los padrinos.',
      iconName: 'heart',
    },
    {
      time: '21:45 hrs',
      title: 'Cena de Gala en 3 Tiempos',
      description: 'Exquisito banquete internacional acompañado de violines y chelos en vivo.',
      iconName: 'utensils',
    },
    {
      time: '23:00 hrs',
      title: 'Pista de Baile & Show Sorpresa',
      description: 'Coreografía sorpresa de Emilia, DJ profesional, iluminación robótica y souvenirs.',
      iconName: 'music',
    },
    {
      time: '01:30 hrs',
      title: 'Mariachi & Las Mañanitas',
      description: 'Serenata tradicional con mariachi en vivo para cantar con todos los seres queridos.',
      iconName: 'guitar',
    },
    {
      time: '02:30 hrs',
      title: 'Tornaboda & Despedida',
      description: 'Snacks de medianoche, agradecimientos y cierre de una noche inolvidable.',
      iconName: 'moon',
    },
  ];

  return (
    <section id="itinerario" className="py-14 sm:py-20 md:py-28 bg-[#FFFDF9] relative border-b border-[#E8D3C5]/60 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Momentos Mágicos
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Itinerario de la Noche
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            Cada instante ha sido preparado con amor para compartirlo juntos.
          </p>
        </div>

        {/* Timeline container with vertical connecting line */}
        <div className="relative">
          {/* Central vertical golden line */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20" />

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {schedule.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Node Dot on timeline */}
                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF7F2] border-2 border-[#D4AF37] shadow-sm flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#996515] group-hover:bg-white transition-colors" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-9 sm:ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right text-left'
                    } w-[calc(100%-2.25rem)] sm:w-auto`}
                  >
                    <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8D3C5] shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all">
                      <div
                        className={`flex items-center gap-2 mb-1.5 ${
                          isEven ? 'md:justify-start' : 'md:justify-end justify-start'
                        }`}
                      >
                        <span className="font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#996515] px-2.5 py-0.5 sm:py-1 rounded bg-[#F4E9DC]">
                          {item.time}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#2C2422] mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#6E574E] font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
