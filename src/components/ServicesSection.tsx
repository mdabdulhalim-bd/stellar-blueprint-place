import { motion, useMotionValue, useTransform } from "framer-motion";
import { Globe, Monitor, Smartphone, ShoppingCart, Search, Palette, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, high-performance websites crafted for optimal user experience and built with modern frameworks.",
    tags: ["React", "Next.js", "WordPress"],
    number: "01",
    accent: "122 39% 49%",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions that are secure, scalable, and intuitive for streamlined operations.",
    tags: ["SaaS", "Enterprise", "API"],
    number: "02",
    accent: "145 63% 42%",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications delivering seamless iOS and Android experiences.",
    tags: ["React Native", "Flutter", "iOS"],
    number: "03",
    accent: "160 50% 40%",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payments, inventory management, and optimized checkout.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    number: "04",
    accent: "33 100% 50%",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies that boost visibility, drive organic traffic, and convert visitors.",
    tags: ["Technical SEO", "Analytics", "Growth"],
    number: "05",
    accent: "200 60% 45%",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design balancing aesthetics with functionality to guide users effortlessly.",
    tags: ["Figma", "Prototyping", "Research"],
    number: "06",
    accent: "280 60% 55%",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-3xl border border-border bg-card p-8 lg:p-9 transition-all duration-500 hover:border-primary/30 overflow-hidden h-full">
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(${service.accent} / 0.07), transparent 40%)`,
          }}
        />

        {/* Top glow line */}
        <motion.div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(90deg, transparent, hsl(${service.accent}), transparent)` }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="relative h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500"
              animate={{
                backgroundColor: isHovered ? `hsl(${service.accent})` : "hsl(var(--primary) / 0.08)",
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 6 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <service.icon className={`h-6 w-6 transition-colors duration-300 ${isHovered ? "text-primary-foreground" : "text-primary"}`} />
              
              {/* Orbiting dot */}
              <motion.div
                className="absolute h-2 w-2 rounded-full bg-primary"
                animate={{
                  opacity: isHovered ? [0, 1, 0] : 0,
                  scale: isHovered ? [0.5, 1, 0.5] : 0,
                  rotate: isHovered ? 360 : 0,
                  x: isHovered ? [0, 20, 0, -20, 0] : 0,
                  y: isHovered ? [-20, 0, 20, 0, -20] : 0,
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <span className="text-5xl font-display font-bold text-foreground/[0.04] select-none transition-colors duration-500 group-hover:text-primary/10">
              {service.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
            {service.title}
            <motion.span
              animate={{ x: isHovered ? 0 : -8, y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </motion.span>
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, ti) => (
              <motion.span
                key={tag}
                className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5"
                animate={{ y: isHovered ? 0 : 0 }}
                transition={{ delay: ti * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Bottom connector line */}
          <motion.div
            className="mt-6 h-0.5 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: `linear-gradient(90deg, hsl(${service.accent}), hsl(${service.accent} / 0.2))`,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{
        background: "radial-gradient(circle, hsl(122,39%,49%), transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{
        background: "radial-gradient(circle, hsl(145,63%,42%), transparent 70%)"
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            What We Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
            Services We <span className="text-gradient-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            End-to-end digital solutions tailored to your business goals — from ideation to launch and beyond.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm">
            Need something custom?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline underline-offset-4 transition-colors">
              Let's talk about your project →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
