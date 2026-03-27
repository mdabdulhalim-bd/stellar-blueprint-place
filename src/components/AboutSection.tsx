import { motion } from "framer-motion";
import { Target, Users, Award, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We build technology that solves real problems and creates measurable impact for your business.",
    accent: "122 39% 49%",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We treat every project as a partnership, not a transaction.",
    accent: "200 60% 45%",
  },
  {
    icon: Award,
    title: "Excellence First",
    description: "We never cut corners. Every line of code, every pixel, every interaction is crafted with precision.",
    accent: "33 100% 50%",
  },
  {
    icon: Zap,
    title: "Innovation Led",
    description: "We stay ahead of the curve, adopting cutting-edge technologies to future-proof your products.",
    accent: "280 60% 55%",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "380+", label: "Clients Worldwide" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-gradient-process relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(122,39%,49%) 1px, transparent 1px), linear-gradient(90deg, hsl(122,39%,49%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      <motion.div
        className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(122,39%,49%,0.3), transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Top section: Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Heading + story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary mb-6"
            >
              About Us
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0,0%,95%)" }}>
              We Build the{" "}
              <span className="text-gradient-primary">Future</span>
              <br />
              of Digital
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "hsl(210,10%,55%)" }}>
              Founded in 2009, Zoom IT has grown from a small development studio into a full-service digital agency trusted by startups and enterprises across 30+ countries.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(210,10%,45%)" }}>
              We believe great software isn't just about code — it's about understanding people, solving problems, and creating experiences that make a difference. Our team of 50+ engineers, designers, and strategists brings that philosophy to every project.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {["ISO 27001 Certified", "Agile Methodology", "24/7 Support", "NDA Protected"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(0,0%,80%)" }}>
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="group relative rounded-2xl border border-primary/10 p-8 text-center overflow-hidden"
                  style={{ background: "hsl(210,20%,10%)" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: "radial-gradient(circle at center, hsl(122,39%,49%,0.08), transparent 70%)",
                  }} />
                  <motion.div
                    className="absolute top-0 left-[10%] right-[10%] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(122,39%,49%), transparent)" }}
                  />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "hsl(210,10%,50%)" }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3" style={{ color: "hsl(0,0%,92%)" }}>
            Our Core Values
          </h3>
          <p className="text-base max-w-lg mx-auto" style={{ color: "hsl(210,10%,50%)" }}>
            The principles that guide every decision we make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-primary/10 p-7 overflow-hidden"
              style={{ background: "hsl(210,20%,10%)" }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: `radial-gradient(circle at top left, hsl(${value.accent} / 0.08), transparent 60%)`,
              }} />
              <motion.div
                className="absolute top-0 left-[5%] right-[5%] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, hsl(${value.accent}), transparent)` }}
              />

              <div className="relative z-10">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `hsl(${value.accent} / 0.1)`,
                    color: `hsl(${value.accent})`,
                  }}
                >
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-display font-bold mb-2" style={{ color: "hsl(0,0%,92%)" }}>
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210,10%,50%)" }}>
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
