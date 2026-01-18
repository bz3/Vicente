
import React from 'react';

const events = [
  {
    time: '17:00',
    title: 'Ceremonia',
    description: 'Jardines de la Finca',
  },
  {
    time: '18:30',
    title: 'Cóctel de Bienvenida',
    description: 'Música en vivo & Aperitivos',
  },
  {
    time: '20:30',
    title: 'Cena de Gala',
    description: 'Salón Principal',
  },
  {
    time: '23:00',
    title: 'Fiesta & Baile',
    description: 'Hasta que salga el sol',
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-serif text-center mb-16">El Gran Día</h2>
      
      <div className="relative max-w-sm mx-auto pl-10">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-wedding-primary/10"></div>
        
        <div className="space-y-16">
          {events.map((event, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute -left-[28px] top-1 w-2.5 h-2.5 rounded-full bg-wedding-primary ring-4 ring-wedding-primary/10"></div>
              
              <div className="space-y-1">
                <p className="text-[11px] font-sans font-bold tracking-[0.2em] text-wedding-primary uppercase">
                  {event.time}
                </p>
                <h4 className="text-xl font-serif">{event.title}</h4>
                <p className="text-sm italic font-serif opacity-60 text-wedding-accent">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
