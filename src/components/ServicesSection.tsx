import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, ShoppingCart, Search, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, high-performance websites crafted for optimal user experience. Built with modern frameworks that keep your audience engaged.",
    tags: ["React", "Next.js", "WordPress"],
  },
  {
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions that are secure, scalable, and intuitive. Streamline your operations with tailor-made applications.",
    tags: ["SaaS", "Enterprise", "API"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    tags: ["React Native", "Flutter", "iOS"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment integration, inventory management, and conversion-optimized checkout flows.",
    tags: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies that boost visibility, drive organic traffic, and turn visitors into loyal customers.",
    tags: ["Technical SEO", "Analytics", "Growth"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that balances aesthetics with functionality. Every interface tells a story and guides users effortlessly.",
    tags: ["Figma", "Prototyping", "Research"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-5 block">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
            Services We <span className="text-gradient-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            End-to-end digital solutions tailored to your business goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-card transition-all duration-500 hover:shadow-card-hover cursor-pointer overflow-hidden"
            >
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3"
              >
                <service.icon className="h-7 w-7" />
              </motion.div>

              <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-primary" />
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{
                background: "linear-gradient(135deg, hsl(122, 39%, 49%, 0.06), transparent 60%)",
              }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
