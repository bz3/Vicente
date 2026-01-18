
import React, { useState, useEffect, useCallback } from 'react';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-07-03T17:00:00').getTime();
  
  const calculateTimeLeft = useCallback((): CountdownTime => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-light font-serif mb-1">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-[0.15em] font-sans opacity-60">{label}</span>
    </div>
  );

  return (
    <section className="px-6 py-16 text-center max-w-lg mx-auto">
      <h3 className="text-[10px] tracking-[0.3em] uppercase font-sans opacity-50 mb-10">
        Cuenta atrás para el gran día
      </h3>
      <div className="flex justify-between items-center px-4">
        <TimeUnit value={timeLeft.days} label="Días" />
        <div className="h-8 w-px bg-wedding-primary/20"></div>
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <div className="h-8 w-px bg-wedding-primary/20"></div>
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <div className="h-8 w-px bg-wedding-primary/20"></div>
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </section>
  );
};

export default Countdown;
