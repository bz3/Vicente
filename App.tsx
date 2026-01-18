
import React, { useState } from 'react';
import { Language } from './types';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import RSVPForm from './components/RSVPForm';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ES');

  return (
    <div className="min-h-screen bg-wedding-background selection:bg-wedding-primary selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-wedding-background/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-black/5">
        <div className="text-wedding-primary">
          <span className="material-symbols-outlined text-2xl fill-[1]">favorite</span>
        </div>
        <div className="flex gap-6">
          {(['ES', 'EN', 'HU'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`text-[10px] tracking-[0.25em] font-bold uppercase transition-opacity ${
                lang === l ? 'opacity-100 border-b border-wedding-primary' : 'opacity-30'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-4 pt-4 pb-12 max-w-2xl mx-auto">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
            {/* Using a high-quality wedding couple placeholder */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%), url('https://picsum.photos/seed/wedding123/1200/1600')`
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <h1 className="text-white text-5xl font-bold leading-none tracking-tight font-serif mb-3">
                Anna &<br />Vicente
              </h1>
              <p className="text-white/90 text-lg italic font-serif tracking-wide">
                July 3rd, 2026
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a 
              href="#confirmar"
              className="bg-wedding-primary text-white px-12 py-5 rounded-full font-bold font-sans tracking-[0.2em] uppercase text-[11px] shadow-lg shadow-wedding-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Confirmar asistencia
            </a>
          </div>
        </section>

        <Countdown />
        <Timeline />

        {/* Location Section */}
        <section className="px-6 py-20 max-w-lg mx-auto">
          <h2 className="text-3xl font-serif text-center mb-10 italic">Ubicación</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            <div 
              className="h-56 bg-gray-100 bg-cover bg-center grayscale-[0.2]" 
              style={{ backgroundImage: `url('https://picsum.photos/seed/map456/800/600')` }}
            />
            <div className="p-8">
              <h3 className="text-xl font-serif mb-2">Finca Etxemendi de Araceli</h3>
              <p className="text-sm opacity-60 font-sans mb-8 leading-relaxed">
                Camino Real, 42, San Agustín del Guadalix,<br />Madrid, España
              </p>
              <button 
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="w-full flex items-center justify-center gap-3 border border-wedding-primary/20 py-4 rounded-xl text-wedding-primary font-sans font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-wedding-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                Abrir en Google Maps
              </button>
            </div>
          </div>

          <div className="mt-8 bg-wedding-primary/[0.03] p-8 rounded-3xl border border-wedding-primary/5 flex items-start gap-5">
            <span className="material-symbols-outlined text-wedding-primary mt-1">bed</span>
            <div>
              <h3 className="text-lg font-serif mb-1">Alojamiento</h3>
              <p className="text-sm opacity-70 font-serif mb-5 leading-relaxed">
                Recomendamos el Hotel Casa José Díaz para vuestra estancia.
              </p>
              <a 
                href="#" 
                className="text-wedding-primary font-bold text-[10px] uppercase font-sans tracking-[0.2em] underline decoration-1 underline-offset-8"
              >
                Reservar Habitación
              </a>
            </div>
          </div>
        </section>

        <RSVPForm />
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-black/5">
        <div className="text-wedding-primary opacity-20 mb-6">
          <span className="material-symbols-outlined text-5xl">all_inclusive</span>
        </div>
        <p className="text-3xl font-serif font-bold italic mb-10 text-wedding-accent">A & V</p>
        <div className="space-y-3">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-sans">Diseñado para Anna & Vicente</p>
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-sans font-bold">Madríd, 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
