"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Camera } from "lucide-react";

const stats = [
  { icon: Calendar, value: "100+", label: "Events Covered" },
  { icon: Camera, value: "8+", label: "Years Experience" },
  { icon: Award, value: "500+", label: "Happy Clients" },
  { icon: MapPin, value: "Jinja", label: "Based in Jinja" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=800&q=85"
                alt="Professional photographer with camera equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-xl p-4 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-heading text-fg">PK Photography</p>
                  <p className="text-xs text-muted-foreground">Est. 2018</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-6">
              Capturing Moments,{" "}
              <span className="text-gradient-gold">Creating Memories</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PK Photography Uganda is a professional photography and videography 
                studio based in the beautiful city of Jinja, Uganda. We specialize 
                in capturing life&apos;s most treasured moments — from intimate 
                portraits to grand celebrations.
              </p>
              <p>
                Our approach is simple: we tell your story through images that feel 
                authentic, emotional, and timeless. Whether it&apos;s a traditional 
                Kwanjula ceremony, a white wedding, a corporate event, or a personal 
                portrait session, we bring the same dedication and artistry to every shoot.
              </p>
              <p>
                Based in Jinja, we serve clients across Eastern Uganda and beyond, 
                traveling to capture the moments that matter most to you.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:text-accent transition-colors group"
            >
              <span className="text-sm uppercase tracking-[0.15em]">
                Let&apos;s tell your story
              </span>
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="font-heading text-3xl md:text-4xl text-fg mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
