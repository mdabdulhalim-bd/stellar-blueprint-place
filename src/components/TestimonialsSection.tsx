import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechNova Inc.",
    rating: 5,
    text: "Zoom IT transformed our outdated system into a modern platform that our customers love. Revenue jumped 145% in the first quarter after launch. Their team is incredibly responsive and professional.",
    initials: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Founder, PropVista",
    rating: 5,
    text: "The real estate platform they built exceeded all expectations. From the virtual tour integration to the advanced search — everything works flawlessly. Best investment we've made.",
    initials: "JR",
  },
  {
    name: "Amina Khan",
    role: "CTO, HealthSync",
    rating: 5,
    text: "Working with Zoom IT on our patient portal was seamless. They understood HIPAA requirements from day one and delivered a secure, beautiful product on time and on budget.",
    initials: "AK",
  },
  {
    name: "David Chen",
    role: "Product Lead, PayFlow",
    rating: 4,
    text: "Our mobile banking app went from concept to 85K active users in under a year. Zoom IT's engineering quality and attention to UX detail is truly world-class.",
    initials: "DC",
  },
  {
    name: "Elena Petrova",
    role: "Marketing Director, Luxora",
    rating: 5,
    text: "The e-commerce platform Zoom IT built for us handles thousands of daily transactions without a hitch. Our conversion rate doubled within three months of launch.",
    initials: "EP",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Our <span className="text-gradient-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Don't just take our word for it — hear from businesses we've helped grow.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 text-primary/15" />

          <div className="min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full text-center"
              >
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-5 w-5 ${j < t.rating ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-display font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
