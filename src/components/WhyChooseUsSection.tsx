import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Zap, Users, Trophy, Clock, HeartHandshake, Check, X, Sparkles, ArrowRight } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Trophy, accent: "122 39% 49%" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: HeartHandshake, accent: "145 63% 42%" },
  { value: 50, suffix: "+", label: "Team Experts", icon: Users, accent: "33 100% 50%" },
  { value: 24, suffix: "/7", label: "Support Available", icon: Clock, accent: "200 60% 50%" },
];

const advantages = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and regular security audits.",
    accent: "122 39% 49%",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Agile sprints with 2-week release cycles — no endless timelines.",
    accent: "33 100% 50%",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A senior team assigned to your project from day one to launch.",
    accent: "145 63% 42%",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description: "No hidden fees. Fixed-price or time-and-materials — your choice.",
    accent: "200 60% 50%",
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

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

function AdvantageCard({ item, index }: { item: typeof advantages[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const glowX = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(sy, [-0.5, 0.5], [0, 100]);

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { mx.set(0); my.set(0); setHovered(false); }}
      className="group relative"
    >
      <div className="relative rounded-3xl border border-border bg-card overflow-hidden h-full transition-all duration-500 hover:border-primary/40 hover:shadow-xl p-8">
        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(400px circle at ${x}% ${y}%, hsl(${item.accent} / 0.1), transparent 50%)`
            ),
          }}
        />
        {/* Shimmer top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${item.accent}), transparent)`,
            transformOrigin: "left",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
            animate={{
              scale: hovered ? 1.1 : 1,
              rotate: hovered ? 6 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: hovered
                  ? `linear-gradient(135deg, hsl(${item.accent}), hsl(${item.accent} / 0.7))`
                  : "hsl(var(--primary) / 0.08)",
              }}
              transition={{ duration: 0.4 }}
            />
            <item.icon className={`h-6 w-6 relative z-10 transition-colors duration-300 ${hovered ? "text-primary-foreground" : "text-primary"}`} />
          </motion.div>

          <h3 className="text-xl font-bold text-foreground mb-3 font-display">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

          <motion.div
            className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase"
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10, color: `hsl(${item.accent})` }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Learn more
            <motion.span animate={{ x: hovered ? [0, 4, 0] : 0 }} transition={{ duration: 1, repeat: Infinity }}>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-40 left-[8%] w-[350px] h-[350px] rounded-full opacity-[0.04] pointer-events-none"
        animate={{ y: [-15, 15, -15], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-20 right-[5%] w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Built Different, <span className="text-gradient-primary">Delivered Better</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just build software — we engineer competitive advantages that scale with your ambition.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 h-px w-24"
            style={{ background: "var(--gradient-primary)", transformOrigin: "center" }}
          />
        </motion.div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border bg-card p-6 lg:p-8 text-center overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, hsl(${stat.accent} / 0.08), transparent 70%)` }}
              />
              <div className="relative z-10">
                <motion.div
                  className="mx-auto h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `hsl(${stat.accent} / 0.1)` }}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-5 w-5" style={{ color: `hsl(${stat.accent})` }} />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {advantages.map((item, i) => (
            <AdvantageCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground text-center mb-10">
            How We <span className="text-gradient-primary">Compare</span>
          </h3>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-bold border-b border-border">
              <div className="p-4 lg:p-5 text-muted-foreground">Feature</div>
              <div className="p-4 lg:p-5 text-center text-primary bg-primary/5 border-x border-border">
                <span className="inline-flex items-center gap-1.5">
                  <Trophy className="h-4 w-4" /> Us
                </span>
              </div>
              <div className="p-4 lg:p-5 text-center text-muted-foreground">Others</div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className={`grid grid-cols-3 text-sm ${i < comparisonRows.length - 1 ? "border-b border-border" : ""} hover:bg-muted/30 transition-colors duration-200`}
              >
                <div className="p-4 lg:p-5 text-foreground font-medium">{row.feature}</div>
                <div className="p-4 lg:p-5 flex justify-center bg-primary/[0.02] border-x border-border">
                  {row.us ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 400 }}
                      className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </motion.div>
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="h-3.5 w-3.5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="p-4 lg:p-5 flex justify-center">
                  {row.others ? (
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 400 }}
                      className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center"
                    >
                      <X className="h-3.5 w-3.5 text-destructive" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
