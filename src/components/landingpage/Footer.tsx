import React from 'react';

export const Footer = () => {
  return (
    <footer className="pt-12 pb-24 md:pt-16 md:pb-32 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl md:text-9xl font-medium tracking-tighter mb-12">
        KOS.
      </h2>
      <div className="flex gap-8 text-sm font-medium">
        <a href="#" className="hover:opacity-50 transition-opacity">Kamar</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Fasilitas</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Hubungi Kami</a>
      </div>
    </footer>
  );
};
