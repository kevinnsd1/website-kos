
import { motion, useReducedMotion } from 'motion/react';
import { Car } from '@phosphor-icons/react';
import garageImg from '../../assets/landingpage/outdoor/garage/garage.jpg';

export const GarageShowcase = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="double-bezel-shell group"
      >
        <div className="double-bezel-core relative bg-zinc-900 p-8 md:p-16 h-[500px] md:h-[600px] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={garageImg} 
              alt="Fasilitas Parkir Luas" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-white max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Car size={14} weight="bold" />
              <span>Fasilitas Kendaraan</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 text-white">
              Area Parkir<br />Aman & Luas.
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-[45ch]">
              Tersedia garasi khusus yang tertutup dan diawasi kamera keamanan selama 24 jam penuh. Kami memastikan kendaraan pribadi Anda terlindungi dari cuaca dan aman setiap saat.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
