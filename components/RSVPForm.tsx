
import React, { useState } from 'react';
import { RSVPData } from '../types';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    fullName: '',
    attending: 'yes',
    mealPreference: 'meat',
    allergies: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="px-6 py-20 bg-wedding-accent text-white text-center">
        <span className="material-symbols-outlined text-5xl text-wedding-primary mb-4">check_circle</span>
        <h2 className="text-3xl font-serif mb-4">¡Gracias!</h2>
        <p className="opacity-70">Tu confirmación ha sido enviada correctamente.</p>
      </section>
    );
  }

  return (
    <section id="confirmar" className="px-6 py-20 bg-wedding-accent text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Confirmación</h2>
        <p className="text-center opacity-60 text-sm mb-12 italic font-serif">
          Por favor, confirma tu asistencia antes del 1 de Junio de 2026
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name Input */}
          <div className="space-y-2 group">
            <label className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-sans">
              Nombre Completo
            </label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 focus:ring-0 focus:border-white transition-colors text-lg font-serif placeholder:text-white/10"
              placeholder="Escribe tu nombre..."
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Attendance Toggle */}
          <div className="space-y-4">
            <label className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-sans block">
              ¿Podrás asistir?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'yes' })}
                className={`flex-1 py-4 text-center border rounded-lg transition-all font-sans text-xs font-bold uppercase tracking-widest ${
                  formData.attending === 'yes'
                    ? 'bg-white text-wedding-accent border-white'
                    : 'bg-transparent border-white/20 text-white hover:border-white/50'
                }`}
              >
                Sí, asistiré
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'no' })}
                className={`flex-1 py-4 text-center border rounded-lg transition-all font-sans text-xs font-bold uppercase tracking-widest ${
                  formData.attending === 'no'
                    ? 'bg-white text-wedding-accent border-white'
                    : 'bg-transparent border-white/20 text-white hover:border-white/50'
                }`}
              >
                No podré
              </button>
            </div>
          </div>

          {/* Conditional Content (If attending) */}
          {formData.attending === 'yes' && (
            <div className="space-y-10 pt-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="space-y-4">
                <label className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-sans block">
                  Plato Principal
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="meal"
                      className="size-5 border-white/20 bg-transparent text-wedding-primary focus:ring-wedding-primary ring-offset-wedding-accent"
                      checked={formData.mealPreference === 'meat'}
                      onChange={() => setFormData({ ...formData, mealPreference: 'meat' })}
                    />
                    <span className="font-sans text-sm opacity-80 group-hover:opacity-100">Carne</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="meal"
                      className="size-5 border-white/20 bg-transparent text-wedding-primary focus:ring-wedding-primary ring-offset-wedding-accent"
                      checked={formData.mealPreference === 'fish'}
                      onChange={() => setFormData({ ...formData, mealPreference: 'fish' })}
                    />
                    <span className="font-sans text-sm opacity-80 group-hover:opacity-100">Pescado</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-sans">
                  Alergias o Intolerancias
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 focus:ring-0 focus:border-white transition-colors font-serif text-base placeholder:text-white/20 resize-none"
                  placeholder="Háznoslo saber..."
                  rows={2}
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-white text-wedding-accent py-5 rounded-full font-sans font-bold tracking-[0.2em] uppercase text-[11px] mt-10 hover:bg-gray-100 transition-colors shadow-xl"
          >
            Enviar Confirmación
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
