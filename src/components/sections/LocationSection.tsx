"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Globe } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Visit Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-6">
              Based in{" "}
              <span className="text-gradient-gold">Jinja</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Proudly serving Jinja and the entire Eastern Uganda region. 
              We&apos;re available for travel to any location across the country.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-fg">Jinja, Uganda</p>
                  <p className="text-sm text-muted-foreground">
                    Available for travel nationwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-fg">Office Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: By appointment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-fg">Service Areas</p>
                  <p className="text-sm text-muted-foreground">
                    Jinja, Kampala, Mbale, Entebbe, Mukono, Iganga, Bugembe, and nationwide
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:+256703172962"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-fg rounded-full font-medium hover:bg-accent transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call +256 703 172 962
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=800&q=80"
              alt="Map of Jinja, Uganda location"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/30">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-heading text-fg">
                      PK Photography Uganda
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Jinja, Uganda · Serving nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
