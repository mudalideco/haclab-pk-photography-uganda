"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Camera, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Reach Out",
    description:
      "Get in touch through our contact form, phone, or social media. Tell us about your event or session — we'd love to hear your vision.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Plan & Book",
    description:
      "We'll discuss your needs, customize a package, and schedule your session. A simple deposit secures your date with no hidden fees.",
  },
  {
    icon: Camera,
    step: "03",
    title: "Your Session",
    description:
      "On the day, we arrive early and work seamlessly to capture every moment. Relax and enjoy — we handle the rest.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Deliver & Relive",
    description:
      "Within 2-3 weeks, your beautifully edited photos and videos are ready. You'll receive an online gallery to share and download.",
  },
];

export function ProcessSection() {
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
            How It Works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Simple <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            From first hello to final delivery — we make booking your 
            photographer effortless and enjoyable.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              {/* Step number */}
              <div className="font-heading text-6xl text-primary/10 mb-4 leading-none">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading text-xl text-fg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
