import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Users, HandSwipeRight, AppWindow } from '@phosphor-icons/react';

export const ScrollRevealStagger = () => {
  const reduce = useReducedMotion();
  const steps = [
    {
      icon: <Users size={24} weight="light" />,
      title: "Koneksi Cerdas",
      desc: "Setiap fasilitas terhubung dengan sistem pintar untuk memudahkan keseharian Anda."
    },
    {
      icon: <HandSwipeRight size={24} weight="light" />,
      title: "Akses Seamless",
      desc: "Mulai dari pintu masuk hingga fasilitas bersama, semua dalam satu kartu akses."
    },
    {
      icon: <AppWindow size={24} weight="light" />,
      title: "Layanan 24/7",
      desc: "Lingkungan aman yang selalu terjaga dan dukungan penuh untuk ketenangan Anda."
    }
  ];

  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8">
        <div className="w-full md:w-1/2">
           <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
             Pengalaman hunian<br />tanpa hambatan.
           </h2>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="grid gap-12">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex gap-6"
              >
                <div className="mt-1 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-medium tracking-tight mb-2">{step.title}</h4>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
