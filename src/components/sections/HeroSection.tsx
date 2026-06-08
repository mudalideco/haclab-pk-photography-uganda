"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Camera, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=85"
          alt="Professional photography camera capturing a moment"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full backdrop-blur-sm bg-primary/5">
            <Camera className="w-3.5 h-3.5" />
            Wedding & Event Photography
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-5xl tracking-tight leading-none mb-6"
        >
          <span className="text-fg">PK</span>{" "}
          <span className="text-gradient-gold">Photography</span>
          <br />
          <span className="text-fg/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Uganda
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-fg/70 max-w-xl mb-10 font-light tracking-wide"
        >
          Capturing life&apos;s beautiful moments in Jinja & beyond — 
          where every frame tells a story worth remembering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-primary-fg bg-primary rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02]"
          >
            Book a Session
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-fg/80 border border-border/50 rounded-full hover:border-primary/50 hover:text-fg transition-all duration-300 backdrop-blur-sm"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
