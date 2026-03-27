import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Award, Zap, CheckCircle, ArrowRight, Globe, Code2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import aboutTeamImg from "@/assets/about-team.jpg";

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
  { value: "15+", label: "Years in Business", icon: Sparkles },
  { value: "380+", label: "Clients Worldwide", icon: Globe },
  { value: "1000+", label: "Projects Delivered", icon: Code2 },
  { value: "98%", label: "Client Retention", icon: Award },
];

const milestones = [
  { year: "2009", event: "Founded as a 3-person dev studio" },
  { year: "2014", event: "Expanded to 20+ engineers, first enterprise client" },
  { year: "2019", event: "Opened offices in 3 countries, 100+ team members" },
  { year: "2024", event: "1000+ projects delivered, serving Fortune 500s" },
];

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [-15, 15, -15],
      opacity: [0.2, 0.6, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-gradient-process relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(122,39%,49%) 1px, transparent 1px), linear-gradient(90deg, hsl(122,39%,49%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(122,39%,49%,0.3), transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, hsl(145,63%,42%,0.2), transparent 70%)" }}
      />

      {/* Spinning ring decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.03] pointer-events-none"
        style={{ rotate: bgRotate }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-primary/[0.04] pointer-events-none"
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
      />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={4} />
      <FloatingParticle delay={1.5} x="85%" y="15%" size={3} />
      <FloatingParticle delay={0.8} x="75%" y="70%" size={5} />
      <FloatingParticle delay={2} x="15%" y="80%" size={3} />
      <FloatingParticle delay={1} x="50%" y="10%" size={4} />
      <FloatingParticle delay={2.5} x="90%" y="50%" size={3} />

      <div className="container relative z-10">
        {/* ===== TOP: Hero banner with image ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary mb-8"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-8"
              style={{ color: "hsl(0,0%,95%)" }}
            >
              We Build the{" "}
              <span className="text-gradient-primary relative">
                Future
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-primary/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br />
              of Digital
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-lg sm:text-xl leading-relaxed mb-6"
              style={{ color: "hsl(210,10%,55%)" }}
            >
              Founded in 2009, Zoom IT has grown from a small development studio into a full-service digital agency trusted by startups and enterprises across <span className="text-primary font-semibold">30+ countries</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "hsl(210,10%,45%)" }}
            >
              We believe great software isn't just about code — it's about understanding people, solving problems, and creating experiences that make a difference.
            </motion.p>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {["ISO 27001 Certified", "Agile Methodology", "24/7 Support", "NDA Protected"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs sm:text-sm font-medium"
                  style={{ color: "hsl(0,0%,80%)" }}
                >
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Image with overlays */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/10">
                <img
                  src={aboutTeamImg}
                  alt="Zoom IT team working"
                  width={960}
                  height={640}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(135deg, hsl(210,20%,8%,0.3) 0%, transparent 50%, hsl(122,39%,49%,0.1) 100%)",
                }} />
              </div>

              {/* Floating stat card — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                animate={{ y: [-4, 4, -4] }}
                className="absolute -top-6 -right-4 sm:-right-8 rounded-2xl border border-primary/20 px-6 py-4 backdrop-blur-xl"
                style={{ background: "hsl(210,20%,10%,0.9)" }}
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-primary">50+</div>
                <div className="text-xs font-medium" style={{ color: "hsl(210,10%,50%)" }}>Team Members</div>
              </motion.div>

              {/* Floating card — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                animate={{ y: [4, -4, 4] }}
                className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl border border-primary/20 px-6 py-4 backdrop-blur-xl"
                style={{ background: "hsl(210,20%,10%,0.9)" }}
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-primary">30+</div>
                <div className="text-xs font-medium" style={{ color: "hsl(210,10%,50%)" }}>Countries Served</div>
              </motion.div>

              {/* Green glow behind image */}
              <div className="absolute -inset-4 rounded-3xl -z-10 blur-2xl opacity-20" style={{
                background: "radial-gradient(circle, hsl(122,39%,49%,0.3), transparent 70%)",
              }} />
            </motion.div>
          </motion.div>
        </div>

        {/* ===== STATS BAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/10 p-8 sm:p-10 mb-28 relative overflow-hidden"
          style={{ background: "hsl(210,20%,9%)" }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(135deg, hsl(122,39%,49%,0.03), transparent 40%, hsl(145,63%,42%,0.02))",
          }} />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="h-12 w-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: "hsl(122,39%,49%,0.1)" }}
                  whileHover={{ boxShadow: "0 0 30px hsl(122,39%,49%,0.2)" }}
                >
                  <stat.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium" style={{ color: "hsl(210,10%,50%)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== TIMELINE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3" style={{ color: "hsl(0,0%,92%)" }}>
            Our <span className="text-gradient-primary">Journey</span>
          </h3>
          <p className="text-base max-w-lg mx-auto" style={{ color: "hsl(210,10%,50%)" }}>
            From a small studio to a global digital agency.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mb-28">
          {/* Timeline line */}
          <motion.div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, hsl(122,39%,49%,0.4), hsl(122,39%,49%,0.05))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex items-center gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Content */}
              <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"}`}>
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-1">{item.year}</div>
                <p className="text-sm sm:text-base font-medium" style={{ color: "hsl(0,0%,80%)" }}>
                  {item.event}
                </p>
              </div>

              {/* Dot */}
              <motion.div
                className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-5 w-5 rounded-full border-[3px] border-primary z-10"
                style={{ background: "hsl(210,20%,8%)" }}
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
              />

              {/* Spacer for opposite side */}
              <div className="hidden sm:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* ===== VALUES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3" style={{ color: "hsl(0,0%,92%)" }}>
            Our Core <span className="text-gradient-primary">Values</span>
          </h3>
          <p className="text-base max-w-lg mx-auto" style={{ color: "hsl(210,10%,50%)" }}>
            The principles that guide every decision we make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              className="group relative rounded-2xl border border-primary/10 p-7 overflow-hidden cursor-default"
              style={{ background: "hsl(210,20%,10%)" }}
            >
              {/* Hover spotlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                background: `radial-gradient(circle at 30% 20%, hsl(${value.accent} / 0.1), transparent 60%)`,
              }} />
              {/* Top shimmer */}
              <motion.div
                className="absolute top-0 left-[5%] right-[5%] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, hsl(${value.accent}), transparent)` }}
              />

              <div className="relative z-10">
                <motion.div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: `hsl(${value.accent} / 0.1)`,
                    color: `hsl(${value.accent})`,
                  }}
                  whileHover={{ boxShadow: `0 0 30px hsl(${value.accent} / 0.2)` }}
                >
                  <value.icon className="h-7 w-7" />
                </motion.div>
                <h4 className="text-lg font-display font-bold mb-2" style={{ color: "hsl(0,0%,92%)" }}>
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210,10%,50%)" }}>
                  {value.description}
                </p>

                {/* Bottom line */}
                <motion.div
                  className="mt-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, hsl(${value.accent}), hsl(${value.accent} / 0.1))`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
