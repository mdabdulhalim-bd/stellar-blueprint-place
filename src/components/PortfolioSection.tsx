import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectFintech from "@/assets/project-fintech.jpg";

const projects = [
  {
    image: projectEcommerce,
    title: "GC Mart E-Commerce Platform",
    category: "E-Commerce",
    year: "2024",
    description: "A full-featured online marketplace with real-time inventory, analytics dashboard, and seamless checkout experience.",
    results: [
      { label: "Revenue Increase", value: "+145%" },
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Load Time", value: "0.8s" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "220, 80%, 50%",
  },
  {
    image: projectRealestate,
    title: "Streline Property Platform",
    category: "Web App",
    year: "2024",
    description: "Luxury real estate listing platform with advanced search, virtual tours, and agent management portal.",
    results: [
      { label: "Listings Managed", value: "12K+" },
      { label: "User Growth", value: "+280%" },
      { label: "Time on Site", value: "4.2m" },
    ],
    tags: ["Next.js", "Maps API", "MongoDB", "Cloudinary"],
    color: "200, 60%, 45%",
  },
  {
    image: projectFintech,
    title: "Fintech Mobile Banking App",
    category: "Mobile",
    year: "2023",
    description: "Cross-platform banking application featuring instant transfers, budget tracking, and real-time notifications.",
    results: [
      { label: "Active Users", value: "85K+" },
      { label: "App Rating", value: "4.9★" },
      { label: "Transactions", value: "1M+" },
    ],
    tags: ["React Native", "Plaid", "Firebase", "Stripe"],
    color: "33, 100%, 50%",
  },
];

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="portfolio" className="py-28 bg-hero relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary mb-5 bg-primary/10 rounded-full px-4 py-1.5">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-5 leading-tight">
            Featured{" "}
            <span className="text-gradient-primary">Case Studies</span>
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Real projects, real results. See how we've helped businesses scale
            with custom digital solutions.
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Project List */}
          <div className="space-y-3">
            {projects.map((project, i) => (
              <motion.button
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveProject(i)}
                className={`w-full text-left rounded-2xl p-5 lg:p-6 transition-all duration-500 border group ${
                  activeProject === i
                    ? "border-primary/40 bg-primary/10"
                    : "border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                      activeProject === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground/10 text-primary-foreground/50"
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-xs text-primary-foreground/30 font-medium">
                      {project.year}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-all duration-300 ${
                    activeProject === i
                      ? "text-primary translate-x-0 opacity-100"
                      : "text-primary-foreground/20 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                  }`} />
                </div>
                <h3 className={`text-lg lg:text-xl font-display font-bold mb-1 transition-colors ${
                  activeProject === i ? "text-primary-foreground" : "text-primary-foreground/70"
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors line-clamp-2 ${
                  activeProject === i ? "text-primary-foreground/60" : "text-primary-foreground/40"
                }`}>
                  {project.description}
                </p>
              </motion.button>
            ))}

            {/* View all */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <Button variant="heroOutline" size="sm" className="w-full" asChild>
                <a href="#contact">
                  Discuss Your Project
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Active Project Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,20%,8%,0.8)] via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-[hsl(210,20%,8%,0.4)]">
                    <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <ExternalLink className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  {/* Bottom info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-1">
                      {projects[activeProject].title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-primary-foreground/10 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-primary-foreground/80 border border-primary-foreground/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Cards */}
                <div className="grid grid-cols-3 gap-3">
                  {projects[activeProject].results.map((result, j) => (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + j * 0.08 }}
                      className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-center group/stat hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <TrendingUp className="h-4 w-4 text-primary mx-auto mb-2 group-hover/stat:scale-110 transition-transform" />
                      <div className="text-xl lg:text-2xl font-display font-bold text-primary-foreground mb-0.5">
                        {result.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-primary-foreground/40 uppercase tracking-wider font-medium">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Project indicator dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeProject ? "w-8 bg-primary" : "w-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/40"
                  }`}
                  aria-label={`View project ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
