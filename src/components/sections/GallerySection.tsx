"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=85",
    alt: "Wedding ceremony with bride and groom at altar",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85",
    alt: "Professional camera equipment on tripod",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=85",
    alt: "Elegant wedding reception table setting",
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=85",
    alt: "Photographer capturing a portrait session",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85",
    alt: "Fashion photoshoot with dramatic lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=85",
    alt: "Wedding couple embracing at golden hour",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=85",
    alt: "Bride and groom walking hand in hand",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=85",
    alt: "Photography camera on wooden surface",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=85",
    alt: "Vibrant outdoor event celebration",
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Gallery
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                    Our <span className="text-gradient-gold">Moments</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                    A closer look at the moments we&apos;ve had the privilege to capture. 
                    Click any image to view full screen.
                  </p>
                </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
