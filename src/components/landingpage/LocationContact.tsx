import { motion, useReducedMotion } from 'motion/react';
import { MapPin, EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react';

export const LocationContact = () => {
  const reduce = useReducedMotion();

  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Lokasi Card */}
        <motion.div
          id="lokasi"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="double-bezel-shell group"
        >
          <div className="double-bezel-core bg-[#F7F5F2] dark:bg-zinc-900 p-8 md:p-12 h-full flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 dark:border-white/10 mb-8">
                Lokasi
              </div>
              <h3 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
                Pusat Kota,<br />Mudah Diakses.
              </h3>
              <p className="text-black/60 dark:text-white/60 mb-6 max-w-[30ch]">
                Jl. Sudirman No. 123, Kawasan Pusat Bisnis, Jakarta Selatan 12190
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 flex items-center justify-center shadow-sm">
                <MapPin size={20} weight="light" />
              </div>
              <a href="#" className="underline decoration-black/20 dark:decoration-white/20 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-colors">
                Buka di Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Kontak Card */}
        <motion.div
          id="kontak"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="double-bezel-shell group"
        >
          <div className="double-bezel-core bg-[#111111] dark:bg-black text-white p-8 md:p-12 h-full flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/20 mb-8">
                Hubungi Kami
              </div>
              <h3 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-white">
                Punya<br />pertanyaan?
              </h3>
              <p className="text-white/60 mb-8 max-w-[30ch]">
                Tim kami siap membantu Anda menemukan kamar yang paling sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:hello@kos.com" className="flex items-center gap-4 group/link">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center transition-colors group-hover/link:bg-white group-hover/link:text-black">
                  <EnvelopeSimple size={20} weight="light" />
                </div>
                <span className="font-medium text-white/80 group-hover/link:text-white transition-colors">hello@kos.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 group/link">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center transition-colors group-hover/link:bg-[#25D366] group-hover/link:text-white group-hover/link:border-[#25D366]">
                  <WhatsappLogo size={20} weight="light" />
                </div>
                <span className="font-medium text-white/80 group-hover/link:text-white transition-colors">+62 811 2345 6789</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
