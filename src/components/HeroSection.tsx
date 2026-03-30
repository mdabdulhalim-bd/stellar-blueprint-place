import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Smartphone, Award, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { Button } from "./ui/button";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm text-primary mb-10"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Software & Web Development Services
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold tracking-tight text-primary-foreground leading-[1.05] mb-8"
          >
            We Build Digital
            <br />
            <span className="text-gradient-primary relative">
              Solutions
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-primary/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>{" "}
            That
            <br />
            Drive Growth
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            From concept to deployment, we craft high-performance web applications,
            custom software, and mobile solutions that transform your business.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-10"
          >
            {[
              { icon: Award, label: "10+ Years Experience", color: "from-amber-500/20 to-yellow-500/10", border: "border-amber-500/30", iconColor: "text-amber-400", delay: 0 },
              { icon: BadgeDollarSign, label: "Money Back Guarantee", color: "from-emerald-500/20 to-green-500/10", border: "border-emerald-500/30", iconColor: "text-emerald-400", delay: 0.15 },
              { icon: ShieldCheck, label: "Quality Guarantee", color: "from-sky-500/20 to-blue-500/10", border: "border-sky-500/30", iconColor: "text-sky-400", delay: 0.3 },
            ].map(({ icon: Icon, label, color, border, iconColor, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.8 + delay, duration: 0.6, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative cursor-default rounded-2xl border ${border} bg-gradient-to-br ${color} backdrop-blur-md px-5 py-3 flex items-center gap-3 overflow-hidden`}
              >
                {/* Animated spotlight on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15), transparent 70%)",
                  }}
                />

                {/* Pulse ring behind icon */}
                <span className="relative flex items-center justify-center">
                  <motion.span
                    className={`absolute inset-0 rounded-full ${iconColor} opacity-20`}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <Icon className={`relative h-5 w-5 sm:h-6 sm:w-6 ${iconColor} drop-shadow-lg`} />
                </span>

                <span className="relative text-sm sm:text-base font-semibold text-primary-foreground/90 tracking-wide whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating icons */}
          <div className="relative mt-20 h-24 hidden sm:block">
            {[
              { Icon: Code2, pos: "left-[20%]", delay: 0.8 },
              { Icon: Globe, pos: "left-1/2 -translate-x-1/2", delay: 1.0 },
              { Icon: Smartphone, pos: "right-[20%]", delay: 1.2 },
            ].map(({ Icon, pos, delay }, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} animate-float`}
                style={{ animationDelay: `${i}s` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4 backdrop-blur-sm">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
