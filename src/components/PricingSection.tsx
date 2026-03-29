import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Check, X, Sparkles, ArrowRight, Zap, Crown, Rocket, Shield, Headphones, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: "299",
    annualPrice: "249",
    description: "Perfect for small businesses needing a professional web presence.",
    popular: false,
    accent: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-500/20 to-cyan-500/10",
    glowColor: "rgba(59,130,246,0.15)",
    features: [
      { text: "Custom responsive website", included: true },
      { text: "Up to 5 pages", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "Mobile-optimized design", included: true },
      { text: "1 month free support", included: true },
      { text: "Custom backend/API", included: false },
      { text: "E-commerce features", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    icon: Crown,
    monthlyPrice: "899",
    annualPrice: "749",
    description: "For growing businesses that need a powerful digital platform.",
    popular: true,
    accent: "from-primary/20 to-emerald-500/20",
    iconBg: "from-primary/30 to-emerald-500/20",
    glowColor: "hsla(122,39%,49%,0.2)",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Up to 15 pages", included: true },
      { text: "Advanced SEO & analytics", included: true },
      { text: "CMS integration", included: true },
      { text: "Custom animations & UI", included: true },
      { text: "API & backend development", included: true },
      { text: "3 months free support", included: true },
      { text: "Priority delivery", included: true },
    ],
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    monthlyPrice: "2,499",
    annualPrice: "1,999",
    description: "Full-scale digital solutions for enterprises and complex products.",
    popular: false,
    accent: "from-violet-500/20 to-purple-500/20",
    iconBg: "from-violet-500/20 to-purple-500/10",
    glowColor: "rgba(139,92,246,0.15)",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Unlimited pages & features", included: true },
      { text: "Custom software/SaaS build", included: true },
      { text: "Mobile app development", included: true },
      { text: "Third-party integrations", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "12 months free support", included: true },
      { text: "SLA & performance guarantee", included: true },
    ],
    cta: "Contact Us",
  },
];

const guarantees = [
  { icon: Shield, text: "Money-Back Guarantee" },
  { icon: Headphones, text: "24/7 Priority Support" },
  { icon: RefreshCw, text: "Free Revisions Included" },
];

const PricingCard = ({
  plan,
  isAnnual,
  index,
}: {
  plan: (typeof plans)[0];
  isAnnual: boolean;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      className={`relative rounded-3xl flex flex-col overflow-hidden group ${
        plan.popular ? "lg:scale-105 z-10" : ""
      }`}
    >
      {/* Card border glow */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
          plan.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: `linear-gradient(145deg, ${plan.glowColor}, transparent 60%)`,
          padding: "1px",
        }}
      />

      {/* Card background */}
      <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex flex-col flex-1 overflow-hidden">
        {/* Top shimmer line */}
        <div
          className={`h-px ${
            plan.popular
              ? "bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
          }`}
        />

        {/* Cursor-tracking spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, ${plan.glowColor}, transparent 60%)`,
          }}
        />

        {/* Popular badge */}
        {plan.popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="px-6 py-2 rounded-b-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-emerald-500 flex items-center gap-1.5 shadow-[0_4px_20px_-4px_hsl(122,39%,49%,0.5)]">
                <Sparkles className="w-3.5 h-3.5" />
                Most Popular
              </div>
            </motion.div>
          </div>
        )}

        <div className="p-8 lg:p-10 flex flex-col flex-1">
          {/* Header */}
          <div className={`mb-8 ${plan.popular ? "pt-4" : ""}`}>
            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.iconBg} mb-5 group-hover:scale-110 transition-transform duration-500`}>
              <plan.icon className="h-6 w-6 text-white/80" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{plan.description}</p>
          </div>

          {/* Price */}
          <div className="mb-8 pb-8 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-1">
              <span className="text-lg text-white/40 font-medium">$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={isAnnual ? "annual" : "monthly"}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight"
                >
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-white/35">
                per month{isAnnual ? ", billed annually" : ""}
              </span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2.5 py-0.5 border border-primary/20"
                >
                  SAVE 20%
                </motion.span>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3.5 mb-10 flex-1">
            {plan.features.map((feature, j) => (
              <motion.li
                key={feature.text}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + j * 0.05 }}
                className="flex items-start gap-3"
              >
                {feature.included ? (
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 border border-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                ) : (
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 border border-white/[0.06]">
                    <X className="h-3 w-3 text-white/20" />
                  </div>
                )}
                <span className={`text-sm ${feature.included ? "text-white/70" : "text-white/25 line-through"}`}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className={`w-full h-13 text-base font-bold rounded-xl border-0 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-r from-primary to-emerald-500 text-white shadow-[0_8px_30px_-4px_hsl(122,39%,49%,0.4)] hover:shadow-[0_12px_40px_-4px_hsl(122,39%,49%,0.5)]"
                  : "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.08]"
              }`}
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                {plan.cta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(210 25% 6%) 0%, hsl(210 30% 10%) 50%, hsl(160 20% 8%) 100%)" }}
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
          y: bgY,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.1), transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [-60, 60]),
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[
        { x: "8%", y: "15%", delay: 0 },
        { x: "92%", y: "25%", delay: 1.2 },
        { x: "20%", y: "75%", delay: 0.6 },
        { x: "80%", y: "85%", delay: 1.8 },
        { x: "50%", y: "10%", delay: 0.3 },
        { x: "65%", y: "65%", delay: 2.1 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [0, -25, 0], opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Pricing Plans</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Investment That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                Pays Off
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose a plan that fits your
            business needs and budget.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-sm font-semibold transition-colors duration-300 ${!isAnnual ? "text-white" : "text-white/35"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative h-9 w-16 rounded-full bg-white/[0.08] border border-white/[0.1] transition-colors hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="absolute top-1.5 left-1.5 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-emerald-500 shadow-[0_0_12px_hsl(122,39%,49%,0.4)]"
              animate={{ x: isAnnual ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors duration-300 ${isAnnual ? "text-white" : "text-white/35"}`}>
            Annual
          </span>
          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-primary to-emerald-500 shadow-[0_4px_16px_-4px_hsl(122,39%,49%,0.4)]"
              >
                <Sparkles className="h-3 w-3" />
                SAVE 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} index={i} />
          ))}
        </div>

        {/* Trust guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {guarantees.map((g, i) => (
            <motion.div
              key={g.text}
              className="flex items-center gap-2.5 text-white/40 group cursor-default"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <g.icon className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium group-hover:text-white/60 transition-colors duration-300">{g.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-white/30 mt-10"
        >
          All plans include free consultation. Custom quotes available for unique requirements.{" "}
          <a href="#contact" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Contact us →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
