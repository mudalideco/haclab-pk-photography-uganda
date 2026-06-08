"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const socialPosts = [
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=85",
    alt: "Fashion portrait photography",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=85",
    alt: "Wedding couple photography",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=85",
    alt: "Wedding ceremony details",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=85",
    alt: "Golden hour couple portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=85",
    alt: "Event celebration photography",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=85",
    alt: "Professional camera equipment",
  },
];

export function SocialSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Social Feed
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Follow Us on{" "}
            <span className="text-gradient-gold">TikTok</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Follow @pkphotographyuganda for behind-the-scenes content, 
            sneak peeks, and daily inspiration.
          </p>

          <a
            href="https://tiktok.com/@pkphotographyuganda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-accent transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.15em]">
              Follow @pkphotographyuganda
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Instagram-like Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://facebook.com/Atatutya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://tiktok.com/@pkphotographyuganda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://youtube.com/@pkphotographyug6021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
