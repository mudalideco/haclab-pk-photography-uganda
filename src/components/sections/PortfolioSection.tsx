"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Portraits", "Events", "Commercial"];

const portfolioItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    alt: "Elegant wedding ceremony setup with floral decorations",
    category: "Weddings",
    title: "Lakeside Wedding",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
    alt: "Professional portrait of a smiling man",
    category: "Portraits",
    title: "Corporate Portraits",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85",
    alt: "Vibrant outdoor event with guests celebrating",
    category: "Events",
    title: "Garden Party Event",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=85",
    alt: "Bride and groom sharing a romantic moment at sunset",
    category: "Weddings",
    title: "Sunset Romance",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=85",
    alt: "Fashion portrait with dramatic lighting",
    category: "Portraits",
    title: "Editorial Fashion",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=85",
    alt: "Grand wedding reception with decorated tables",
    category: "Events",
    title: "Reception Decor",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=85",
    alt: "Professional product photography on clean background",
    category: "Commercial",
    title: "Product Shoot",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    alt: "Wedding couple walking hand in hand through a field",
    category: "Weddings",
    title: "Couple's Session",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=85",
    alt: "Creative portrait with colorful lighting",
    category: "Portraits",
    title: "Creative Portraits",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 px-6">
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
            Our Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Featured <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Every image tells a unique story. Browse through our recent work 
            showcasing the beauty and emotion we capture.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 text-sm rounded-full border transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary text-primary-fg border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-fg"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl cursor-pointer",
                  index === 0 && filteredItems.length > 1
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                  // Removed the index === 9 condition since we don't have that many items
                )}
              >
                <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[280px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group"
          >
            <span className="text-sm uppercase tracking-[0.15em]">
              Ready to create your story?
            </span>
            <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
