'use client'
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  startDate: string;
  endDate: string;
}

export default function Modal({ isOpen, onClose, startDate, endDate }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface border-2 border-accent rounded-lg p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-primary mb-4 font-inter">
          Zapisy są zamknięte
        </h2>
        <p className="text-foreground mb-6 font-inter">
          Zapisy na hackathon IDEA2IMPACT będą dostępne w terminie:
        </p>
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
          <p className="text-lg font-semibold text-center font-inter text-white">
            {startDate} - {endDate}
          </p>
        </div>
        <p className="text-sm text-foreground/70 mb-6 font-inter">
          Prosimy wrócić w wyznaczonym terminie, aby dokonać rejestracji.
        </p>
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-primary text-white font-semibold font-inter rounded-lg hover:bg-primary/80 transition"
        >
          Rozumiem
        </button>
      </div>
    </div>,
    document.body
  );
}
