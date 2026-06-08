"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    event: "Wedding, Jinja",
    text: "PK Photography captured our wedding day perfectly! From the traditional introduction to the reception, every moment was beautifully documented. The photos are absolutely stunning and we relive our special day every time we look at them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Grace Nakato",
    event: "Graduation, Kampala",
    text: "Amazing work! PK did my graduation photoshoot and the results exceeded my expectations. Professional, creative, and made me feel completely at ease in front of the camera. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 3,
    name: "James & Brenda",
    event: "Kwanjula, Jinja",
    text: "We are so grateful to PK Photography for documenting our Kwanjula ceremony. They understood the cultural significance of each ritual and captured them beautifully. The videography was cinematic quality!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 4,
    name: "Nina Kemigisha",
    event: "Portrait Session",
    text: "This was my first professional photoshoot and PK made it such a fun experience! The results were incredible — natural, vibrant, and truly captured my personality. I now have amazing photos for my LinkedIn and social media.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6">
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
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            What Our Clients{" "}
            <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Don&apos;t just take our word for it — hear from the couples and 
            clients who trusted us with their memories.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-fg/80 leading-relaxed mb-8 font-light italic max-w-3xl mx-auto">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-heading text-fg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].event}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
