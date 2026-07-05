import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin, Sparkle } from "@phosphor-icons/react";
import kosanVideo from "../../assets/landingpage/room/kosan.mp4";

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] pt-24 px-4 md:px-8 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6">
      {/* Left Typography */}
      <div className="col-span-1 md:col-span-8 flex flex-col items-start z-10 mt-12 md:mt-0 pr-0 md:pr-12">
        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] font-medium mb-6">
          Lebih dari sekadar
          <br />
          <span className="italic">tempat tinggal.</span>
        </h1>
        <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-lg leading-relaxed mb-10">
          Kos eksklusif dengan privasi penuh, fasilitas cerdas, dan kenyamanan
          tanpa kompromi.
        </p>

        <button className="group relative flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black rounded-full pl-6 pr-2 py-2 text-sm font-medium custom-ease transition-all duration-500 hover:bg-black/90 dark:hover:bg-white/90 active:scale-[0.98]">
          <span>Lihat Kamar</span>
          <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 custom-ease transition-all duration-500">
            <ArrowUpRight size={16} weight="bold" />
          </div>
        </button>
      </div>

      <div className="col-span-1 md:col-span-4 flex justify-center md:justify-center mt-12 md:mt-0 relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          className="w-full max-w-[340px] aspect-[9/16] double-bezel-shell"
        >
          <div className="double-bezel-core">
            <video
              src={kosanVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
