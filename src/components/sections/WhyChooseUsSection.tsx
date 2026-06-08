"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Sparkles,
  MapPin,
  Users,
  Image,
} from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "Professional-grade equipment and meticulous editing ensure every image meets the highest standards of quality and artistry.",
  },
  {
    icon: Shield,
    title: "Reliable & Professional",
    description:
      "We arrive early, come prepared, and deliver on time. Your memories are safe with us — guaranteed.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Receive your edited photos within 2-3 weeks. Highlight reels and previews are delivered even faster.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "We take time to understand your vision and preferences, ensuring the final result reflects your unique story and style.",
  },
  {
    icon: MapPin,
    title: "Jinja-Based, Nationwide",
    description:
      "Based in Jinja, we serve clients across Uganda. From Kampala to Mbale, we travel to capture your special moments.",
  },
  {
    icon: Image,
    title: "Photo + Video Combined",
    description:
      "Save time and money by booking both photography and videography with one trusted team. Seamless coordination guaranteed.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-muted/30">
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
            Why PK Photography
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Why Choose{" "}
            <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            We don&apos;t just take photos — we create experiences. Here&apos;s 
            what sets us apart.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-5 p-6 rounded-xl border border-border/30 bg-card/50 hover:bg-card transition-all duration-300 group"
            >
              <div className="shrink-0">
                <reason.icon className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-fg mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
