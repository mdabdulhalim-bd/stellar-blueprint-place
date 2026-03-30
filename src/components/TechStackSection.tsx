import { motion } from "framer-motion";
import { useState } from "react";

const techStack = [
  {
    category: "Frontend",
    description: "Beautiful, responsive interfaces",
    tools: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "🟢" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    description: "Powerful server-side solutions",
    tools: [
      { name: "Node.js", icon: "🟩" },
      { name: "Python", icon: "🐍" },
      { name: "Laravel", icon: "🔺" },
      { name: "Django", icon: "🌿" },
      { name: "Express", icon: "⚡" },
    ],
  },
  {
    category: "Mobile",
    description: "Native & cross-platform apps",
    tools: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Scalable infrastructure",
    tools: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Firebase", icon: "🔥" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub", icon: "🐙" },
    ],
  },
  {
    category: "Database",
    description: "Reliable data management",
    tools: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🗄️" },
      { name: "Redis", icon: "🔴" },
    ],
  },
];

const allTools = techStack.flatMap((g) => g.tools);

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-32 bg-background overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(220,80%,50%) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-6"
          >
            Technologies
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We use cutting-edge technologies to build fast, scalable, and maintainable solutions.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techStack.map((group, gi) => (
            <motion.button
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
              onClick={() => setActiveCategory(gi)}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === gi
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {group.category}
            </motion.button>
          ))}
        </div>

        {/* Active category display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-border bg-card p-10 shadow-card overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20" style={{
              background: "radial-gradient(circle, hsl(220,80%,50%,0.3), transparent 70%)"
            }} />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-1 rounded-full bg-primary" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {techStack[activeCategory].category}
                  </h3>
                  <p className="text-sm text-muted-foreground">{techStack[activeCategory].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {techStack[activeCategory].tools.map((tool, ti) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ti * 0.06 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover cursor-default"
                  >
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-110" role="img" aria-label={tool.name}>
                      {tool.icon}
                    </span>
                    <span className="text-sm font-semibold text-foreground text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="mt-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, repeat) => (
                <div key={repeat} className="flex gap-12 items-center">
                  {allTools.map((tool, i) => (
                    <div key={`${repeat}-${i}`} className="flex items-center gap-2">
                      <span className="text-lg">{tool.icon}</span>
                      <span className="text-sm font-medium text-muted-foreground/30 uppercase tracking-widest">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
