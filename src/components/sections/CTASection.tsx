"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl mt-4 mb-6 leading-tight">
            Your Story Deserves{" "}
            <span className="text-gradient-gold">to Be Told</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Don&apos;t let your precious moments fade into memories. Book your 
            session today and receive timeless photographs you&apos;ll treasure forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-fg rounded-full text-lg font-medium hover:bg-accent transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02]"
            >
              Book Your Session
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+256703172962"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-fg hover:border-primary/50 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Call +256 703 172 962
            </a>
          </div>

          <p className="text-muted-foreground/60 text-sm mt-6">
            Free consultation · No obligation · 50% deposit to secure your date
          </p>
        </motion.div>
      </div>
    </section>
  );
}
