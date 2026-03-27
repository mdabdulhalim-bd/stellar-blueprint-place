import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: "299",
    annualPrice: "249",
    description: "Perfect for small businesses needing a professional web presence.",
    popular: false,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] glow rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary mb-5 bg-primary/10 rounded-full px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4" />
            Pricing Plans
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
            Investment That{" "}
            <span className="text-gradient-primary">Pays Off</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Transparent pricing with no hidden fees. Choose a plan that fits your
            business needs and budget.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative h-8 w-14 rounded-full bg-primary/20 transition-colors hover:bg-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="absolute top-1 left-1 h-6 w-6 rounded-full bg-primary shadow-md"
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual
          </span>
          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                style={{ background: "var(--gradient-popular)" }}
              >
                <Sparkles className="h-3 w-3" />
                SAVE 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl border p-8 lg:p-10 flex flex-col transition-shadow duration-500 ${
                plan.popular
                  ? "border-primary bg-card shadow-[var(--shadow-pricing)] scale-[1.02]"
                  : "border-border bg-card shadow-card hover:shadow-card-hover"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full px-5 py-1.5 text-xs font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-popular)" }}
                  >
                    <Sparkles className="h-3 w-3" />
                    MOST POPULAR
                  </span>
                </motion.div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}>
                  <plan.icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground font-medium">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight"
                    >
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">
                    per month{isAnnual ? ", billed annually" : ""}
                  </span>
                  {isAnnual && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5"
                    >
                      -20%
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * j }}
                    className="flex items-start gap-3"
                  >
                    {feature.included ? (
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                    ) : (
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <X className="h-3 w-3 text-muted-foreground/50" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full text-base font-semibold ${
                  plan.popular ? "shadow-[var(--shadow-hero-btn)]" : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include free consultation. Custom quotes available for unique requirements.{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Contact us →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
