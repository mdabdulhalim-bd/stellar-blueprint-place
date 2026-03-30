import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Globe, Smartphone, Award, ShieldCheck, BadgeDollarSign, Sparkles, Zap, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const words = ["Solutions", "Experiences", "Products", "Platforms"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, hsl(122, 39%, 49%, 0.06), transparent 60%)`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const badges = [
    { icon: Award, label: "10+ Years Experience", accent: "from-amber-500/20 to-yellow-500/10", border: "border-amber-500/25", iconColor: "text-amber-400" },
    { icon: BadgeDollarSign, label: "Money Back Guarantee", accent: "from-emerald-500/20 to-green-500/10", border: "border-emerald-500/25", iconColor: "text-emerald-400" },
    { icon: ShieldCheck, label: "Quality Guarantee", accent: "from-sky-500/20 to-blue-500/10", border: "border-sky-500/25", iconColor: "text-sky-400" },
  ];

  return (
    <section
      className="relative min-h-screen bg-hero overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: spotlightBg }} />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(122, 39%, 49%, 0.2), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(33, 100%, 50%, 0.15), transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + (i % 3) * 2,
            height: 2 + (i % 3) * 2,
            top: `${8 + (i * 7.5) % 85}%`,
            left: `${5 + (i * 8.3) % 90}%`,
            background: i % 2 === 0 ? "hsl(122, 39%, 49%, 0.4)" : "hsl(33, 100%, 50%, 0.3)",
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container relative z-10 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout on large screens */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-5 py-2.5 text-sm text-primary mb-8"
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Sparkles className="h-3.5 w-3.5" />
                Software & Web Development Agency
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight text-primary-foreground leading-[1.05] mb-6"
              >
                We Build Digital
                <br />
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="text-gradient-primary inline-block"
                      initial={{ y: 40, opacity: 0, rotateX: -40 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -40, opacity: 0, rotateX: 40 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                    style={{ background: "linear-gradient(90deg, hsl(122, 39%, 49%), hsl(33, 100%, 50%))" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style2={{ originX: 0 }}
                  />
                </span>
                <br />
                <span className="text-primary-foreground/80">That Drive Growth</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg lg:text-xl text-primary-foreground/50 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
              >
                From concept to deployment, we craft high-performance web applications,
                custom software, and mobile solutions that transform your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10"
              >
                <Button variant="hero" size="lg" asChild className="group relative overflow-hidden">
                  <a href="#contact">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />
                    <span className="relative flex items-center gap-2">
                      Get a Free Quote
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="group">
                  <a href="#portfolio" className="flex items-center gap-2">
                    <Play className="h-4 w-4 fill-current" />
                    View Our Work
                  </a>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                {badges.map(({ icon: Icon, label, accent, border, iconColor }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.15, duration: 0.5, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className={`group relative cursor-default rounded-xl border ${border} bg-gradient-to-br ${accent} backdrop-blur-md px-4 py-2.5 flex items-center gap-2.5 overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle at 50% 50%, hsl(122, 39%, 49%, 0.1), transparent 70%)" }}
                    />
                    <span className="relative flex items-center justify-center">
                      <motion.span
                        className={`absolute inset-0 rounded-full ${iconColor} opacity-20`}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      />
                      <Icon className={`relative h-4 w-4 sm:h-5 sm:w-5 ${iconColor} drop-shadow-lg`} />
                    </span>
                    <span className="relative text-xs sm:text-sm font-semibold text-primary-foreground/85 tracking-wide whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side — floating 3D card stack */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col items-center gap-5 relative"
            >
              {/* Glow behind cards */}
              <div className="absolute inset-0 -m-10 rounded-full blur-[80px] opacity-30" style={{ background: "radial-gradient(circle, hsl(122, 39%, 49%, 0.3), transparent 70%)" }} />

              {[
                { Icon: Code2, title: "Web Development", desc: "React, Next.js, Vue", color: "from-primary/20 to-primary/5", borderColor: "border-primary/20" },
                { Icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android", color: "from-accent/20 to-accent/5", borderColor: "border-accent/20" },
                { Icon: Globe, title: "Cloud Solutions", desc: "AWS, Azure, GCP", color: "from-sky-500/20 to-sky-500/5", borderColor: "border-sky-500/20" },
              ].map(({ Icon, title, desc, color, borderColor }, i) => (
                <motion.div
                  key={i}
                  className={`relative w-64 rounded-2xl border ${borderColor} bg-gradient-to-br ${color} backdrop-blur-xl p-5 flex items-center gap-4`}
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.6, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.05, x: -8 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{title}</p>
                    <p className="text-xs text-primary-foreground/50">{desc}</p>
                  </div>
                  {/* Glowing edge */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    style={{ boxShadow: "inset 0 0 20px hsl(122, 39%, 49%, 0.1), 0 0 30px hsl(122, 39%, 49%, 0.05)" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              {/* Stats counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
                className="flex items-center gap-6 mt-2 px-6 py-4 rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-md"
              >
                {[
                  { value: "200+", label: "Projects" },
                  { value: "50+", label: "Clients" },
                  { value: "99%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-primary-foreground/40">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/15 flex items-start justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-primary"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
