import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Send, Sparkles } from 'lucide-react';
import { GuestbookEntry } from '../types';

export const Guestbook: React.FC = () => {
  const defaultEntries: GuestbookEntry[] = [
    {
      id: 'entry-1',
      name: 'Abuelita Carmen',
      relation: 'Familia',
      message:
        'Mi niña hermosa, parece que fue ayer cuando te tomé en mis brazos por primera vez. Que la Virgen de Guadalupe te guíe y que tus quince años sean el inicio de una vida colmada de bendiciones.',
      date: 'Hace 2 días',
      likes: 14,
    },
    {
      id: 'entry-2',
      name: 'Camila & Valentina',
      relation: 'Mejores Amigas',
      message:
        '¡Emi! Estamos tan felices de celebrar este día contigo. ¡Nos vemos en la pista para bailar todas nuestras canciones favoritas! Eres la mejor amiga del mundo.',
      date: 'Ayer',
      likes: 9,
    },
    {
      id: 'entry-3',
      name: 'Tío Fernando y Familia',
      relation: 'Familia',
      message:
        'Felicidades por tus XV años Emilia. Qué orgullosos estamos de ver la señorita tan inteligente, noble y bondadosa en la que te has convertido. ¡Un gran abrazo!',
      date: 'Hoy',
      likes: 6,
    },
  ];

  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    try {
      const saved = localStorage.getItem('emilia_xv_guestbook');
      return saved ? JSON.parse(saved) : defaultEntries;
    } catch {
      return defaultEntries;
    }
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem('emilia_xv_guestbook', JSON.stringify(entries));
    } catch {
      // safe fallback
    }
  }, [entries]);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `entry-${Date.now()}`,
      name: name.trim(),
      relation: relation.trim() || 'Invitado Especial',
      message: message.trim(),
      date: 'Justo ahora',
      likes: 1,
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setRelation('');
    setMessage('');
  };

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap({ ...likedMap, [id]: true });
    setEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#996515] mb-1">
            Palabras del Corazón
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2C2422] uppercase">
            Libro de Buenos Deseos
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6357] mt-2 sm:mt-3 px-2">
            Deja una dedicatoria que Emilia atesorará por siempre en este aniversario tan especial.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 border border-[#E8D3C5] shadow-sm mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h3 className="font-cinzel text-lg font-bold text-[#2C2422] mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#996515]" />
            Escribir un Mensaje para Emilia
          </h3>

          <form onSubmit={handleAddEntry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#6E574E] mb-1">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Tía Paty / David"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFCFC2] bg-[#FAF7F2] text-xs text-[#2C2422] focus:bg-white focus:outline-none focus:border-[#996515]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#6E574E] mb-1">
                  Parentesco / Amistad
                </label>
                <input
                  type="text"
                  placeholder="Ej. Familia / Amigo de la escuela"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFCFC2] bg-[#FAF7F2] text-xs text-[#2C2422] focus:bg-white focus:outline-none focus:border-[#996515]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#6E574E] mb-1">
                Tu Dedicatoria *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Escribe aquí tus mejores deseos para sus 15 años..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFCFC2] bg-[#FAF7F2] text-xs text-[#2C2422] focus:bg-white focus:outline-none focus:border-[#996515] resize-none"
              />
            </div>

            <button
              type="submit"
              className="py-2.5 px-5 rounded-lg bg-[#3B2926] text-white hover:bg-[#523B36] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              Publicar Dedicatoria
            </button>
          </form>
        </div>

        {/* Entries list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-2xl p-6 border border-[#E8D3C5] shadow-sm flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-cinzel font-bold text-sm text-[#2C2422]">
                      {entry.name}
                    </h4>
                    <span className="text-[11px] text-[#8C7A70] font-sans">
                      {entry.relation} · {entry.date}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLike(entry.id)}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      likedMap[entry.id]
                        ? 'border-[#E8A598] bg-[#FDF2F0] text-[#B85C4B]'
                        : 'border-[#E8D3C5] text-[#8C7A70] hover:text-[#B85C4B] hover:border-[#E8A598]'
                    }`}
                    aria-label="Dar me gusta a este mensaje"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        likedMap[entry.id] ? 'fill-[#B85C4B] text-[#B85C4B]' : ''
                      }`}
                    />
                    <span className="tabular-nums font-mono text-[11px]">{entry.likes}</span>
                  </button>
                </div>

                <p className="font-cormorant italic text-sm text-[#5C453C] leading-relaxed">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0E4D8]/60 flex items-center justify-between text-[11px] text-[#A39288]">
                <span>Mis XV · Emilia</span>
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
