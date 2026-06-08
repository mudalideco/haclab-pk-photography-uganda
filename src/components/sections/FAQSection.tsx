"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a session with PK Photography?",
    a: "Simply reach out through our contact form, call/WhatsApp us at +256 703 172 962, or DM us on Instagram. We'll get back to you within 24 hours to discuss your needs and schedule.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Jinja, Uganda and serve the entire Eastern region. We also travel to Kampala, Mbale, and other parts of Uganda. Travel expenses may apply for locations beyond 50km from Jinja.",
  },
  {
    q: "How long does it take to get our photos?",
    a: "Standard delivery is 2-3 weeks for edited photos and 4-6 weeks for cinematic wedding films. We provide a preview gallery within 48 hours of your event so you can relive the moments immediately.",
  },
  {
    q: "Do you offer both photo and video?",
    a: "Yes! Our Ultimate package includes both photography and videography. We can also add videography to any package or customize a solution that fits your needs.",
  },
  {
    q: "How many photos will we receive?",
    a: "The number depends on your package. Our Essentials package includes 100+ photos, Premium includes 400+, and Ultimate includes 600+. All photos are professionally edited with consistent color grading.",
  },
  {
    q: "Do you cover traditional Ugandan ceremonies?",
    a: "Absolutely! We have extensive experience covering Kwanjula, Kukyala, and other traditional ceremonies. We understand the cultural protocols and capture each ritual with the respect it deserves.",
  },
  {
    q: "What is your payment structure?",
    a: "We require a 50% deposit to secure your booking, with the remaining 50% due on the day of the event. We accept mobile money, bank transfers, and cash payments.",
  },
  {
    q: "What if it rains on the day of our outdoor shoot?",
    a: "We monitor weather forecasts closely and will work with you to find the best solution — whether that's rescheduling, finding an indoor alternative, or embracing the weather for unique atmospheric shots!",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Everything you need to know before booking. Still have questions? 
            Don&apos;t hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-card/80 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base text-fg pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
