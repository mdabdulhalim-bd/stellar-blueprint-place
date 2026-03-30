import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Star, Play, Award, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { Button } from "./ui/button";

const clients = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
];

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const sY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const spotlight = useTransform(
    [sX, sY],
    ([x, y]) => `radial-gradient(900px circle at ${x}px ${y}px, hsl(220, 80%, 50%,0.05), transparent 60%)`
  );

  const handleMouse = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  const badges = [
    { icon: Award, label: "10+ Years Experience", accent: "from-orange-500/15 to-amber-500/5", border: "border-orange-500/20", ic: "text-orange-400" },
    { icon: BadgeDollarSign, label: "Money Back Guarantee", accent: "from-blue-500/15 to-indigo-500/5", border: "border-blue-500/20", ic: "text-blue-400" },
    { icon: ShieldCheck, label: "Quality Guarantee", accent: "from-purple-500/15 to-violet-500/5", border: "border-purple-500/20", ic: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center" onMouseMove={handleMouse}>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

      {/* Subtle ambient light */}
      <div
        className="absolute top-[5%] right-[20%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%,0.25), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(33,100%,50%,0.15), transparent 70%)" }}
      />

      {/* Faint grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Micro label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 backdrop-blur px-4 py-1.5 text-xs sm:text-sm text-primary font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Currently accepting new projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-display font-bold tracking-tight text-primary-foreground leading-[1.08] mb-6 text-center lg:text-left"
          >
            We don't just build websites.
            <br />
            <span className="text-gradient-primary">We build businesses.</span>
          </motion.h1>

          {/* Subtitle — conversational */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-base sm:text-lg lg:text-xl text-primary-foreground/50 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-center lg:text-left"
          >
            Real teams. Real results. We've helped <span className="text-primary-foreground/80 font-medium">200+ companies</span> ship 
            products their users actually love — on time and on budget.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10"
          >
            <Button variant="hero" size="lg" asChild className="group relative overflow-hidden">
              <a href="#contact">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="group">
              <a href="#portfolio" className="flex items-center gap-2">
                <Play className="h-3.5 w-3.5 fill-current" />
                See Our Work
              </a>
            </Button>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-5 mb-14"
          >
            {/* Avatar stack */}
            <div className="flex items-center">
              {clients.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt="Client"
                  className="w-9 h-9 rounded-full border-2 border-background object-cover"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: clients.length - i }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                />
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="ml-1 w-9 h-9 rounded-full bg-primary/15 border-2 border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary"
              >
                +50
              </motion.span>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-primary-foreground/80">4.9/5</span>
              </div>
              <p className="text-xs text-primary-foreground/40">from 50+ happy clients worldwide</p>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            {badges.map(({ icon: Icon, label, accent, border, ic }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.12, duration: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className={`group cursor-default rounded-xl border ${border} bg-gradient-to-br ${accent} backdrop-blur px-3.5 py-2 flex items-center gap-2 transition-shadow hover:shadow-glow-sm`}
              >
                <span className="relative flex items-center justify-center">
                  <motion.span
                    className={`absolute rounded-full ${ic} opacity-20`}
                    style={{ inset: -4 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0, 0.25] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <Icon className={`relative h-4 w-4 ${ic}`} />
                </span>
                <span className="text-xs font-semibold text-primary-foreground/80 tracking-wide whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-primary-foreground/15 flex items-start justify-center pt-2"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
