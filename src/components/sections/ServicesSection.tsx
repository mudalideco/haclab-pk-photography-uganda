"use client";

import { motion } from "framer-motion";
import { Camera, Video, Users, Building2, Heart, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Comprehensive wedding day coverage from preparation to the reception. We capture every precious moment of your special day with cinematic elegance.",
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description:
      "Professional portraits for individuals, couples, families, and corporate teams. Natural, relaxed sessions that bring out your authentic self.",
  },
  {
    icon: PartyPopper,
    title: "Event Photography",
    description:
      "Birthday parties, graduations, anniversaries, and corporate events. Full-day or hourly coverage available to document your celebration.",
  },
  {
    icon: Building2,
    title: "Commercial Photography",
    description:
      "Product photography, brand imagery, real estate shoots, and promotional content for businesses looking to elevate their visual identity.",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Cinematic wedding films, event highlight reels, and commercial video production. Professional-grade equipment for stunning visual storytelling.",
  },
  {
    icon: Users,
    title: "Kwanjula & Intros",
    description:
      "Traditional Ugandan wedding introduction ceremony coverage. We understand the cultural significance and capture every ritual with respect and artistry.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 bg-muted/30">
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
            What We Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            From intimate portraits to grand celebrations, we offer comprehensive 
            photography and videography services across Uganda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading text-xl text-fg mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
