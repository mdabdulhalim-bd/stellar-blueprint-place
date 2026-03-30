import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Monitor, Smartphone, ShoppingCart, Search, Palette, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, high-performance websites crafted for optimal user experience and built with modern frameworks.",
    tags: ["React", "Next.js", "WordPress"],
    number: "01",
    accent: "220, 80%, 50%",
    highlight: "500+ Sites Launched",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions that are secure, scalable, and intuitive for streamlined operations.",
    tags: ["SaaS", "Enterprise", "API"],
    number: "02",
    accent: "275, 65%, 50%",
    highlight: "Enterprise Ready",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications delivering seamless iOS and Android experiences.",
    tags: ["React Native", "Flutter", "iOS"],
    number: "03",
    accent: "145, 70%, 45%",
    highlight: "4.9★ Avg Rating",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payments, inventory management, and optimized checkout.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    number: "04",
    accent: "33 100% 50%",
    highlight: "+145% Revenue Avg",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies that boost visibility, drive organic traffic, and convert visitors.",
    tags: ["Technical SEO", "Analytics", "Growth"],
    number: "05",
    accent: "200 60% 45%",
    highlight: "Top 3 Rankings",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design balancing aesthetics with functionality to guide users effortlessly.",
    tags: ["Figma", "Prototyping", "Research"],
    number: "06",
    accent: "280 60% 55%",
    highlight: "Award Winning",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-3xl border border-border bg-card overflow-hidden h-full transition-all duration-500 hover:border-primary/40 hover:shadow-card-hover">
        {/* Dynamic spotlight that follows cursor */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(500px circle at ${x}% ${y}%, hsl(${service.accent} / 0.12), transparent 50%)`
            ),
          }}
        />

        {/* Top shimmer border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${service.accent}), hsl(${service.accent} / 0.5), transparent)`,
            transformOrigin: "left",
          }}
        />

        <div className="relative z-10 p-8 lg:p-9">
          {/* Top row: icon + number + highlight badge */}
          <div className="flex items-start justify-between mb-7">
            <div className="flex items-center gap-4">
              <motion.div
                className="relative h-16 w-16 rounded-2xl flex items-center justify-center overflow-hidden"
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  rotate: isHovered ? 6 : 0,
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                {/* Icon background with gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: isHovered
                      ? `linear-gradient(135deg, hsl(${service.accent}), hsl(${service.accent} / 0.8))`
                      : "hsl(var(--primary) / 0.08)",
                  }}
                  transition={{ duration: 0.4 }}
                />
                {/* Shine sweep on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    background: isHovered
                      ? "linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.2) 45%, hsl(0 0% 100% / 0.3) 50%, transparent 55%)"
                      : "transparent",
                    backgroundPosition: isHovered ? "200% 0" : "-200% 0",
                  }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <service.icon className={`h-7 w-7 relative z-10 transition-colors duration-300 ${isHovered ? "text-primary-foreground" : "text-primary"}`} />

                {/* Particle ring */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: `hsl(${service.accent})` }}
                    animate={{
                      opacity: isHovered ? [0, 0.8, 0] : 0,
                      x: isHovered
                        ? [0, Math.cos((i * Math.PI) / 2) * 28, Math.cos((i * Math.PI) / 2) * 36]
                        : 0,
                      y: isHovered
                        ? [0, Math.sin((i * Math.PI) / 2) * 28, Math.sin((i * Math.PI) / 2) * 36]
                        : 0,
                      scale: isHovered ? [0, 1, 0] : 0,
                    }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                  />
                ))}
              </motion.div>

              {/* Step number */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/50">
                  Service
                </span>
                <span className="text-2xl font-display font-bold text-foreground/[0.06] group-hover:text-primary/15 transition-colors duration-500">
                  {service.number}
                </span>
              </div>
            </div>

            {/* Highlight badge */}
            <motion.div
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border"
              animate={{
                backgroundColor: isHovered ? `hsl(${service.accent} / 0.1)` : "hsl(var(--secondary))",
                borderColor: isHovered ? `hsl(${service.accent} / 0.3)` : "hsl(var(--border))",
                color: isHovered ? `hsl(${service.accent})` : "hsl(var(--muted-foreground))",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full"
                animate={{
                  backgroundColor: isHovered ? `hsl(${service.accent})` : "hsl(var(--muted-foreground) / 0.3)",
                  scale: isHovered ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
              />
              {service.highlight}
            </motion.div>
          </div>

          {/* Title with arrow */}
          <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
            <span>{service.title}</span>
            <motion.div
              animate={{
                x: isHovered ? 0 : -10,
                y: isHovered ? 0 : 10,
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </motion.div>
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-7 leading-relaxed text-sm lg:text-[15px]">
            {service.description}
          </p>

          {/* Tags with staggered animation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag, ti) => (
              <motion.span
                key={tag}
                className="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-300"
                animate={{
                  borderColor: isHovered ? `hsl(${service.accent} / 0.25)` : "hsl(var(--border))",
                  backgroundColor: isHovered ? `hsl(${service.accent} / 0.06)` : "hsl(var(--secondary) / 0.5)",
                  color: isHovered ? `hsl(${service.accent})` : "hsl(var(--muted-foreground))",
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3, delay: ti * 0.06 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Interactive bottom bar */}
          <div className="relative h-10 flex items-center">
            <motion.div
              className="absolute left-0 right-0 h-[2px] rounded-full bottom-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: `linear-gradient(90deg, hsl(${service.accent}), hsl(${service.accent} / 0.1))`,
                transformOrigin: "left",
              }}
            />
            <motion.span
              className="text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
                color: `hsl(${service.accent})`,
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Learn more
              <motion.span
                animate={{ x: isHovered ? [0, 4, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient floating orbs */}
      <motion.div
        className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(220, 80%, 50%), transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-[350px] h-[350px] rounded-full opacity-[0.03] pointer-events-none"
        animate={{ y: [20, -20, 20], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(275, 65%, 50%), transparent 70%)" }}
      />
      {/* Grid lines background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "100px 100px"
      }} />

      <div className="container relative z-10">
        {/* Section Header */}
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
            What We Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Services We <span className="text-gradient-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            End-to-end digital solutions tailored to your business goals — from ideation to launch and beyond.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 h-px w-24"
            style={{ background: "var(--gradient-primary)", transformOrigin: "center" }}
          />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4 mt-20"
        >
          <p className="text-muted-foreground text-base text-center max-w-md">
            Don't see what you need? We build custom solutions for unique challenges.
          </p>
          <Button variant="outline" size="lg" className="group/btn" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
