
import { motion, useReducedMotion } from 'motion/react';
import roomStandard from '../../assets/landingpage/room/katalog/room.png';
import room2 from '../../assets/landingpage/room/katalog/room2.png';
import room3 from '../../assets/landingpage/room/katalog/room3.png';
import room4 from '../../assets/landingpage/room/katalog/room4.png';

const rooms = [
  { id: 1, name: 'Tipe Standard', img: roomStandard, price: 'Mulai Rp 1.5jt/bln' },
  { id: 2, name: 'Tipe Deluxe', img: room2, price: 'Mulai Rp 2.2jt/bln' },
  { id: 3, name: 'Tipe Suite', img: room3, price: 'Mulai Rp 3.0jt/bln' },
  { id: 4, name: 'Tipe Penthouse', img: room4, price: 'Mulai Rp 4.5jt/bln' },
];

export const RoomCatalog = () => {
  const reduce = useReducedMotion();

  return (
    <section id="catalog" className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left: Typography Block (Editorial Split) */}
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="sticky top-32">
            <div className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 dark:border-white/10 mb-6">
              Katalog Kamar
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
              Pilih ruang<br />pribadi Anda.
            </h2>
            <p className="text-black/60 dark:text-white/60 mb-8 max-w-[30ch]">
              Dari kamar standar yang nyaman hingga suite mewah dengan fasilitas ekstra. Temukan ruang yang paling sesuai dengan gaya hidup Anda.
            </p>
          </div>
        </div>

        {/* Right: Catalog Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="group double-bezel-shell h-[400px] md:h-[450px]"
              >
                <div className="double-bezel-core bg-white dark:bg-zinc-900 p-2 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={room.img} 
                      alt={room.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 mt-auto p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-medium tracking-tight mb-1">{room.name}</h3>
                    <p className="text-sm text-white/70">{room.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
