import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechNova Inc.",
    rating: 5,
    text: "Zoom IT transformed our outdated system into a modern platform that our customers love. Revenue jumped 145% in the first quarter after launch. Their team is incredibly responsive and professional.",
    initials: "SM",
    metric: "+145%",
    metricLabel: "Revenue Growth",
    accent: "220, 80%, 50%",
  },
  {
    name: "James Rodriguez",
    role: "Founder, PropVista",
    rating: 5,
    text: "The real estate platform they built exceeded all expectations. From the virtual tour integration to the advanced search — everything works flawlessly. Best investment we've made.",
    initials: "JR",
    metric: "12K+",
    metricLabel: "Listings Managed",
    accent: "200 60% 45%",
  },
  {
    name: "Amina Khan",
    role: "CTO, HealthSync",
    rating: 5,
    text: "Working with Zoom IT on our patient portal was seamless. They understood HIPAA requirements from day one and delivered a secure, beautiful product on time and on budget.",
    initials: "AK",
    metric: "100%",
    metricLabel: "HIPAA Compliant",
    accent: "145, 70%, 45%",
  },
  {
    name: "David Chen",
    role: "Product Lead, PayFlow",
    rating: 4,
    text: "Our mobile banking app went from concept to 85K active users in under a year. Zoom IT's engineering quality and attention to UX detail is truly world-class.",
    initials: "DC",
    metric: "85K+",
    metricLabel: "Active Users",
    accent: "33 100% 50%",
  },
  {
    name: "Elena Petrova",
    role: "Marketing Director, Luxora",
    rating: 5,
    text: "The e-commerce platform Zoom IT built for us handles thousands of daily transactions without a hitch. Our conversion rate doubled within three months of launch.",
    initials: "EP",
    metric: "2x",
    metricLabel: "Conversion Rate",
    accent: "280 60% 55%",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-process relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(220, 80%, 50%) 1px, transparent 0)",
        backgroundSize: "48px 48px",
      }} />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%,0.2), transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(275, 65%, 50%,0.15), transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Testimonials
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-5" style={{ color: "hsl(0,0%,95%)" }}>
            What Our <span className="text-gradient-primary">Clients</span> Say
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "hsl(210,10%,55%)" }}>
            Don't just take our word for it — hear from businesses we've helped grow.
          </p>
        </motion.div>

        {/* Main testimonial area */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-center">
            {/* Testimonial card */}
            <div className="relative min-h-[360px] sm:min-h-[320px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                  style={{ perspective: "1200px" }}
                >
                  <div className="relative rounded-3xl border border-primary/10 p-8 sm:p-10 overflow-hidden" style={{
                    background: "linear-gradient(135deg, hsl(210,20%,12%) 0%, hsl(210,25%,10%) 100%)",
                  }}>
                    {/* Accent glow */}
                    <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-15 pointer-events-none" style={{
                      background: `radial-gradient(circle, hsl(${t.accent} / 0.4), transparent 70%)`,
                    }} />

                    {/* Top shimmer line */}
                    <motion.div
                      className="absolute top-0 left-[5%] right-[5%] h-[2px]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{
                        background: `linear-gradient(90deg, transparent, hsl(${t.accent}), transparent)`,
                        transformOrigin: "left",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Quote icon + rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                          background: `hsl(${t.accent} / 0.1)`,
                        }}>
                          <Quote className="h-5 w-5" style={{ color: `hsl(${t.accent})` }} />
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + j * 0.06 }}
                            >
                              <Star
                                className={`h-4 w-4 ${j < t.rating ? "fill-accent text-accent" : "text-muted-foreground/20"}`}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Quote text */}
                      <blockquote className="text-lg sm:text-xl font-light leading-relaxed mb-8" style={{ color: "hsl(0,0%,85%)" }}>
                        "{t.text}"
                      </blockquote>

                      {/* Author row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-14 w-14 rounded-full flex items-center justify-center font-display font-bold text-sm ring-2"
                            style={{
                              background: `linear-gradient(135deg, hsl(${t.accent} / 0.2), hsl(${t.accent} / 0.05))`,
                              color: `hsl(${t.accent})`,
                              boxShadow: `0 0 0 2px hsl(${t.accent} / 0.3)`,
                            }}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            {t.initials}
                          </motion.div>
                          <div>
                            <div className="font-display font-semibold text-base" style={{ color: "hsl(0,0%,92%)" }}>
                              {t.name}
                            </div>
                            <div className="text-sm" style={{ color: "hsl(210,10%,50%)" }}>{t.role}</div>
                          </div>
                        </div>

                        {/* Metric badge */}
                        <motion.div
                          className="hidden sm:flex flex-col items-end rounded-xl px-4 py-2 border"
                          style={{
                            borderColor: `hsl(${t.accent} / 0.2)`,
                            background: `hsl(${t.accent} / 0.05)`,
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="text-xl font-display font-bold" style={{ color: `hsl(${t.accent})` }}>
                            {t.metric}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "hsl(210,10%,50%)" }}>
                            {t.metricLabel}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Client list + nav */}
            <div className="space-y-3">
              {testimonials.map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-full text-left rounded-xl p-4 transition-all duration-400 border ${
                    i === current
                      ? "border-primary/30 bg-primary/5"
                      : "border-transparent hover:bg-card/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold font-display shrink-0 transition-all duration-300 ${
                        i === current ? "ring-2" : ""
                      }`}
                      style={{
                        background: i === current ? `hsl(${item.accent} / 0.15)` : "hsl(210,20%,15%)",
                        color: i === current ? `hsl(${item.accent})` : "hsl(210,10%,50%)",
                        boxShadow: i === current ? `0 0 0 2px hsl(${item.accent} / 0.4)` : undefined,
                      }}
                    >
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate transition-colors duration-300 ${
                        i === current ? "text-primary-foreground" : ""
                      }`} style={{
                        color: i === current ? "hsl(0,0%,92%)" : "hsl(210,10%,55%)",
                      }}>
                        {item.name}
                      </p>
                      <p className="text-xs truncate" style={{ color: "hsl(210,10%,40%)" }}>
                        {item.role}
                      </p>
                    </div>
                    {/* Active indicator */}
                    {i === current && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="h-6 w-1 rounded-full bg-primary shrink-0"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </div>

                  {/* Progress bar for current */}
                  {i === current && (
                    <motion.div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: "hsl(210,20%,15%)" }}>
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        key={`progress-${current}`}
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}

              {/* Nav buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-xl border border-primary/20 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/40"
                  style={{ color: "hsl(210,10%,55%)" }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-xl border border-primary/20 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/40"
                  style={{ color: "hsl(210,10%,55%)" }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <span className="ml-auto text-xs font-mono" style={{ color: "hsl(210,10%,40%)" }}>
                  {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
