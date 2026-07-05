import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { List, X } from '@phosphor-icons/react';

export const FluidNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg">
        <div className="double-bezel-shell">
          <div className="double-bezel-core px-6 py-3 flex items-center justify-between">
            <span className="font-bold tracking-tight text-lg">KOS.</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 active:scale-[0.92] custom-ease transition-all duration-300"
              aria-label="Toggle menu"
            >
              <List
                size={18}
                className={`absolute custom-ease transition-all duration-500 ${isOpen ? 'rotate-45 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
              />
              <X
                size={18}
                className={`absolute custom-ease transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-45 opacity-0 scale-50'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Modal Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl custom-ease transition-all duration-700 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-[100dvh] space-y-8">
          {[
            { label: 'Kamar', href: '#catalog' },
            { label: 'Fasilitas', href: '#features' },
            { label: 'Lokasi', href: '#lokasi' },
            { label: 'Kontak', href: '#kontak' }
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl md:text-6xl font-medium text-white tracking-tight custom-ease transition-all duration-700 hover:text-white/70 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
