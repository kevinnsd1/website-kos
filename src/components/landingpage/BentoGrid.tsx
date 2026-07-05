
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, WashingMachine, Wallet, HouseLine } from '@phosphor-icons/react';
import smartDoor from '../../assets/landingpage/room/smartdoor.png';
import laundryImg from '../../assets/landingpage/laundry/laundry.png';

export const BentoGrid = () => {
  const reduce = useReducedMotion();
  
  return (
    <section id="features" className="pt-24 pb-12 md:pt-40 md:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        
        {/* Card 1: RFID Door (Span 8) */}
        <motion.div 
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="col-span-1 md:col-span-8 double-bezel-shell group"
        >
          <div className="double-bezel-core flex flex-col md:flex-row bg-[#F7F5F2] dark:bg-zinc-900">
            <div className="p-8 md:p-12 flex flex-col justify-between h-full md:w-1/2 z-10">
              <ShieldCheck size={32} weight="light" className="text-black/40 dark:text-white/40" />
              <div>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-3">Akses Pintar.</h3>
                <p className="text-black/60 dark:text-white/60 text-sm md:text-base max-w-[30ch]">
                  Masuk kamar tanpa repot membawa kunci fisik. Cukup tap dengan kartu akses pribadi Anda.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-full md:w-3/5 h-1/2 md:h-full">
              <img 
                src={smartDoor} 
                alt="Sleek RFID door lock" 
                className="w-full h-full object-cover object-[80%_center] opacity-80 mix-blend-multiply dark:mix-blend-screen group-hover:scale-105 custom-ease transition-transform duration-1000"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Occupancy (Span 4) */}
        <motion.div 
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          className="col-span-1 md:col-span-4 double-bezel-shell group"
        >
          <div className="double-bezel-core bg-[#111111] dark:bg-black text-white p-8 md:p-12 flex flex-col justify-between">
            <HouseLine size={32} weight="light" className="text-white/40" />
            <div>
              <div className="text-5xl font-light mb-4">Eksklusif</div>
              <h3 className="text-xl font-medium tracking-tight mb-2">Privasi Terjaga</h3>
              <p className="text-white/50 text-sm">
                Lingkungan tenang dengan jumlah penghuni terbatas untuk kenyamanan maksimal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Payments (Span 5) */}
        <motion.div 
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="col-span-1 md:col-span-5 double-bezel-shell group"
        >
          <div className="double-bezel-core bg-white dark:bg-zinc-950 p-8 md:p-12 flex flex-col justify-between">
            <Wallet size={32} weight="light" className="text-black/40 dark:text-white/40" />
            <div>
              <h3 className="text-2xl font-medium tracking-tight mb-3">Pembayaran Mudah.</h3>
              <p className="text-black/60 dark:text-white/60 text-sm">
                Cek tagihan dan bayar sewa bulanan langsung dari ponsel Anda tanpa ribet.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Laundry (Span 7) */}
        <motion.div 
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          className="col-span-1 md:col-span-7 double-bezel-shell group"
        >
          <div className="double-bezel-core flex bg-[#EAE8E3] dark:bg-zinc-900">
             <div className="p-8 md:p-12 flex flex-col justify-between h-full md:w-1/2 z-10">
              <WashingMachine size={32} weight="light" className="text-black/40 dark:text-white/40" />
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">Fasilitas Premium.</h3>
                <p className="text-black/60 dark:text-white/60 text-sm max-w-[25ch]">
                  Laundry pintar terintegrasi di dalam gedung, cukup gunakan kartu akses Anda.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-[60%] h-full">
              <img 
                src={laundryImg} 
                alt="Minimalist washing machine" 
                className="w-full h-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-screen group-hover:scale-105 custom-ease transition-transform duration-1000"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
