"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    price: "UGX 1.5M",
    period: "starting from",
    description: "Perfect for small events and portrait sessions",
    features: [
      "1 photographer",
      "4 hours coverage",
      "100+ edited photos",
      "Online gallery",
      "Soft copies via USB",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "UGX 4M",
    period: "starting from",
    description: "Ideal for weddings and full-day events",
    features: [
      "2 photographers",
      "Full day coverage (10 hrs)",
      "400+ edited photos",
      "Online gallery",
      "Engagement pre-shoot",
      "Photo album",
      "Same-day edit slideshow",
    ],
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "UGX 8M",
    period: "starting from",
    description: "The complete package with photo + video",
    features: [
      "2 photographers + videographer",
      "Full day coverage",
      "600+ edited photos",
      "Cinematic wedding film (5-7 min)",
      "Full ceremony & speeches video",
      "Drone aerial coverage",
      "Premium photo album",
      "Online gallery + USB",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 bg-muted/30">
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
            Investment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Simple &{" "}
            <span className="text-gradient-gold">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Choose the package that fits your needs. Every package is tailored 
            to deliver exceptional quality and lasting memories.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary/5 border-2 border-primary shadow-xl shadow-primary/10 scale-105 md:scale-110"
                  : "bg-card border border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-fg text-xs uppercase tracking-[0.2em] font-medium px-5 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl text-fg mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {plan.period}
                </p>
                <div className="mt-4">
                  <span className="font-heading text-4xl text-gradient-gold">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-fg hover:bg-accent hover:shadow-lg hover:shadow-primary/20"
                    : "border border-border text-fg hover:border-primary/50"
                }`}
              >
                Get This Package
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          All packages are customizable. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
}
