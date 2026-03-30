import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Zap, Users, Trophy, Clock, HeartHandshake, Check, X, Sparkles, ArrowRight, Star, Rocket, Target, Award } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Trophy, accent: "220, 80%, 50%", description: "Across 30+ industries" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: HeartHandshake, accent: "275, 65%, 50%", description: "Based on post-project surveys" },
  { value: 50, suffix: "+", label: "Team Experts", icon: Users, accent: "145 70% 45%", description: "Senior-level engineers" },
  { value: 24, suffix: "/7", label: "Support Available", icon: Clock, accent: "25 95% 55%", description: "Round-the-clock assistance" },
];

const advantages = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption, penetration testing, and regular third-party audits.",
    accent: "220, 80%, 50%",
    metric: "Zero Breaches",
    features: ["End-to-end encryption", "Regular audits", "GDPR compliant"],
  },
  {
    icon: Zap,
    title: "Lightning Delivery",
    description: "Agile sprints with 2-week release cycles — ship faster without sacrificing quality.",
    accent: "145 70% 45%",
    metric: "2x Faster",
    features: ["Agile methodology", "CI/CD pipeline", "Rapid prototyping"],
  },
  {
    icon: Target,
    title: "Dedicated Team",
    description: "A senior team assigned exclusively to your project from discovery to launch and beyond.",
    accent: "275, 65%, 50%",
    metric: "1:1 Ratio",
    features: ["Dedicated PM", "Daily standups", "Direct access"],
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise invoices. Fixed-price or time-and-materials — your choice.",
    accent: "25 95% 55%",
    metric: "100% Clear",
    features: ["Fixed pricing", "No hidden fees", "Flexible models"],
  },
];

const comparisonRows = [
  { feature: "Dedicated Project Manager", us: true, others: false },
  { feature: "Fixed-Price Guarantee", us: true, others: false },
  { feature: "Source Code Ownership", us: true, others: false },
  { feature: "24/7 Priority Support", us: true, others: false },
  { feature: "Post-Launch Maintenance", us: true, others: true },
  { feature: "Scalable Architecture", us: true, others: false },
];

/* ── Animated Counter ── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

/* ── Stat Card ── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative rounded-3xl border border-border bg-card p-6 lg:p-8 text-center overflow-hidden h-full"
        animate={{
          borderColor: hovered ? `hsl(${stat.accent} / 0.4)` : "hsl(var(--border))",
          y: hovered ? -8 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at 50% 30%, hsl(${stat.accent} / 0.12), transparent 70%)`,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated ring */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
          animate={{
            opacity: hovered ? 0.08 : 0,
            scale: hovered ? 1.2 : 0.8,
            borderColor: `hsl(${stat.accent})`,
          }}
          style={{ border: `2px solid hsl(${stat.accent})` }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10">
          {/* Icon with pulse ring */}
          <div className="relative mx-auto w-16 h-16 mb-5">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: hovered
                  ? `linear-gradient(135deg, hsl(${stat.accent}), hsl(${stat.accent} / 0.6))`
                  : `hsl(${stat.accent} / 0.08)`,
                rotate: hovered ? 12 : 0,
                scale: hovered ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            {/* Pulse rings on hover */}
            {[0, 1].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: `1px solid hsl(${stat.accent} / 0.3)` }}
                animate={{
                  scale: hovered ? [1, 1.6 + ring * 0.3] : 1,
                  opacity: hovered ? [0.5, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: hovered ? Infinity : 0,
                  delay: ring * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
            <stat.icon
              className="h-7 w-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-300"
              style={{ color: hovered ? "hsl(0 0% 100%)" : `hsl(${stat.accent})` }}
            />
          </div>

          {/* Number */}
          <motion.div
            className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-2"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </motion.div>

          <p className="text-foreground font-semibold text-sm mb-1">{stat.label}</p>
          <motion.p
            className="text-muted-foreground text-xs"
            animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
          >
            {stat.description}
          </motion.p>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
            animate={{
              width: hovered ? "60%" : "0%",
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: `linear-gradient(90deg, transparent, hsl(${stat.accent}), transparent)` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Advantage Card (premium 3D) ── */
function AdvantageCard({ item, index }: { item: typeof advantages[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 15 });
  const sy = useSpring(my, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(sy, [-0.5, 0.5], [0, 100]);

  // Cycle through features on hover
  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => setActiveFeature((p) => (p + 1) % item.features.length), 1800);
    return () => clearInterval(interval);
  }, [hovered, item.features.length]);

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1200px" }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { mx.set(0); my.set(0); setHovered(false); }}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-3xl border border-border bg-card overflow-hidden h-full transition-all duration-500 hover:border-primary/40">
        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(450px circle at ${x}% ${y}%, hsl(${item.accent} / 0.15), transparent 50%)`
            ),
          }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: hovered
              ? `0 0 40px -10px hsl(${item.accent} / 0.3), inset 0 0 40px -15px hsl(${item.accent} / 0.05)`
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Top shimmer line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${item.accent}), hsl(${item.accent} / 0.6), transparent)`,
            transformOrigin: "left",
          }}
        />

        <div className="relative z-10 p-8 lg:p-9 flex flex-col h-full">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon with orbiting particles */}
            <div className="relative">
              <motion.div
                className="h-16 w-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 8 : 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: hovered
                      ? `linear-gradient(135deg, hsl(${item.accent}), hsl(${item.accent} / 0.7))`
                      : `hsl(${item.accent} / 0.08)`,
                  }}
                  transition={{ duration: 0.4 }}
                />
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    opacity: hovered ? [0, 0.4, 0] : 0,
                    backgroundPosition: hovered ? ["200% 0", "-200% 0"] : "200% 0",
                  }}
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.3) 50%, transparent 55%)",
                    backgroundSize: "200% 100%",
                  }}
                  transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, repeatDelay: 2 }}
                />
                <item.icon className={`h-7 w-7 relative z-10 transition-colors duration-300 ${hovered ? "text-primary-foreground" : "text-primary"}`} />
              </motion.div>

              {/* Orbiting dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full top-1/2 left-1/2"
                  style={{ backgroundColor: `hsl(${item.accent})` }}
                  animate={{
                    opacity: hovered ? [0, 0.8, 0] : 0,
                    x: hovered ? [0, Math.cos((i * Math.PI * 2) / 3) * 32] : 0,
                    y: hovered ? [0, Math.sin((i * Math.PI * 2) / 3) * 32] : 0,
                    scale: hovered ? [0, 1, 0] : 0,
                  }}
                  transition={{ duration: 1, delay: i * 0.12, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* Metric badge */}
            <motion.div
              className="rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-widest uppercase border flex items-center gap-1.5"
              animate={{
                backgroundColor: hovered ? `hsl(${item.accent} / 0.1)` : "hsl(var(--secondary))",
                borderColor: hovered ? `hsl(${item.accent} / 0.3)` : "hsl(var(--border))",
                color: hovered ? `hsl(${item.accent})` : "hsl(var(--muted-foreground))",
                scale: hovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-1.5 w-1.5 rounded-full"
                animate={{
                  backgroundColor: hovered ? `hsl(${item.accent})` : "hsl(var(--muted-foreground) / 0.3)",
                  scale: hovered ? [1, 1.4, 1] : 1,
                }}
                transition={{ duration: 0.8, repeat: hovered ? Infinity : 0, repeatDelay: 1.2 }}
              />
              {item.metric}
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
            {item.title}
            <motion.span
              animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="h-5 w-5 text-primary" />
            </motion.span>
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{item.description}</p>

          {/* Animated feature tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {item.features.map((feat, fi) => (
              <motion.span
                key={feat}
                className="rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-300"
                animate={{
                  borderColor: hovered && fi === activeFeature ? `hsl(${item.accent} / 0.5)` : "hsl(var(--border))",
                  backgroundColor: hovered && fi === activeFeature ? `hsl(${item.accent} / 0.1)` : "hsl(var(--secondary) / 0.5)",
                  color: hovered && fi === activeFeature ? `hsl(${item.accent})` : "hsl(var(--muted-foreground))",
                  scale: hovered && fi === activeFeature ? 1.05 : 1,
                  y: hovered ? -2 : 0,
                }}
                transition={{ duration: 0.3, delay: fi * 0.05 }}
              >
                {feat}
              </motion.span>
            ))}
          </div>

          {/* Bottom progress line */}
          <div className="relative h-[2px] rounded-full bg-border/50 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              animate={{ width: hovered ? "100%" : "0%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg, hsl(${item.accent}), hsl(${item.accent} / 0.3))` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} id="why-us" className="py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Parallax ambient orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <motion.div
          className="absolute top-20 left-[5%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          animate={{ y: [-20, 20, -20], scale: [1, 1.06, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 65%)" }}
        />
        <motion.div
          className="absolute top-[40%] right-[3%] w-[400px] h-[400px] rounded-full opacity-[0.035]"
          animate={{ y: [20, -20, 20], scale: [1.04, 1, 1.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 65%)" }}
        />
        <motion.div
          className="absolute bottom-20 left-[40%] w-[350px] h-[350px] rounded-full opacity-[0.025]"
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, hsl(275, 65%, 50%), transparent 65%)" }}
        />
      </motion.div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20 pointer-events-none"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary mb-8"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Why Choose Us
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Built Different,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="block text-gradient-primary"
            >
              Delivered Better
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed"
          >
            We don't just build software — we engineer competitive advantages that scale with your ambition.
          </motion.p>

          {/* Decorative line with glow */}
          <div className="relative mx-auto mt-10 w-32">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-full"
              style={{ background: "var(--gradient-primary)", transformOrigin: "center" }}
            />
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute inset-0 h-[2px] blur-md"
              style={{ background: "var(--gradient-primary)", transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        {/* ── Animated Counter Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ── Advantage Cards ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-display font-bold text-foreground text-center mb-14"
          >
            Our Competitive <span className="text-gradient-primary">Edge</span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {advantages.map((item, i) => (
              <AdvantageCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-display font-bold text-foreground text-center mb-4"
          >
            How We <span className="text-gradient-primary">Compare</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center mb-12 text-base"
          >
            See why teams choose us over the competition
          </motion.p>

          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-lg">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-bold">
              <div className="p-5 lg:p-6 text-muted-foreground flex items-center">
                <Star className="h-4 w-4 mr-2 text-primary/30" />
                Feature
              </div>
              <div className="p-5 lg:p-6 text-center bg-primary/5 border-x border-border">
                <span className="inline-flex items-center gap-2 text-primary">
                  <Rocket className="h-4 w-4" />
                  <span className="font-bold">Us</span>
                </span>
              </div>
              <div className="p-5 lg:p-6 text-center text-muted-foreground">Others</div>
            </div>

            <div className="border-t border-border">
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-3 text-sm group/row ${i < comparisonRows.length - 1 ? "border-b border-border" : ""} hover:bg-muted/20 transition-all duration-300`}
                >
                  <div className="p-4 lg:p-5 text-foreground font-medium flex items-center group-hover/row:translate-x-1 transition-transform duration-300">
                    {row.feature}
                  </div>
                  <div className="p-4 lg:p-5 flex justify-center bg-primary/[0.02] border-x border-border">
                    {row.us ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 350, damping: 15 }}
                        className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover/row:bg-primary/20 transition-colors duration-300"
                      >
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </motion.div>
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="h-4 w-4 text-destructive" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <div className="p-4 lg:p-5 flex justify-center">
                    {row.others ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 350 }}
                        className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center"
                      >
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.08, type: "spring", stiffness: 350, damping: 15 }}
                        className="h-7 w-7 rounded-full bg-destructive/10 flex items-center justify-center"
                      >
                        <X className="h-4 w-4 text-destructive/60" strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA below table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase group/cta"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Start Your Project Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
