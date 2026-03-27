import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description: "We listen, research, and understand your goals, audience, and competitive landscape to build a solid foundation.",
    details: ["Stakeholder interviews", "Market research", "Competitor analysis", "Goal definition"],
    color: "122 39% 49%",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy & Design",
    description: "Wire-framing, prototyping, and UI/UX design that maps the optimal user journey for maximum impact.",
    details: ["Wireframes & mockups", "User flow mapping", "Brand alignment", "Prototype testing"],
    color: "145 63% 42%",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "Agile sprints, clean code, and continuous integration for reliable, scalable, production-ready products.",
    details: ["Agile sprints", "Code reviews", "CI/CD pipeline", "Quality assurance"],
    color: "160 50% 40%",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "QA testing, deployment, performance monitoring, and ongoing maintenance to ensure long-term success.",
    details: ["Performance testing", "Cloud deployment", "24/7 monitoring", "Ongoing support"],
    color: "33 100% 50%",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-32 bg-gradient-process overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(122,39%,49%) 1px, transparent 1px), linear-gradient(90deg, hsl(122,39%,49%) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10" style={{
        background: "radial-gradient(circle, hsl(122,39%,49%,0.3) 0%, transparent 70%)"
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
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm text-primary mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            How We Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ color: "hsl(0,0%,95%)" }}>
            Our <span className="text-gradient-primary">Process</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "hsl(210,10%,60%)" }}>
            A proven methodology that delivers results, every time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Interactive step selector */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-500 ${
                  activeStep === i
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/10 bg-card/5 hover:border-primary/20"
                }`}
              >
                {/* Active indicator line */}
                <motion.div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-primary"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeStep === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-5 pl-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                    activeStep === i ? "bg-primary shadow-glow-sm" : "bg-primary/10"
                  }`}>
                    <step.icon className={`h-6 w-6 transition-colors duration-300 ${
                      activeStep === i ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest text-primary/60">
                        STEP {step.step}
                      </span>
                      {activeStep === i && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 40 }}
                          className="h-px bg-primary/40"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1" style={{
                      color: activeStep === i ? "hsl(0,0%,95%)" : "hsl(210,10%,60%)"
                    }}>
                      {step.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ height: activeStep === i ? "auto" : 0, opacity: activeStep === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed mt-2" style={{ color: "hsl(210,10%,50%)" }}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  <ArrowRight className={`h-5 w-5 shrink-0 mt-1 transition-all duration-300 ${
                    activeStep === i ? "text-primary translate-x-0 opacity-100" : "text-primary/30 -translate-x-2 opacity-0"
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-primary/20 bg-primary/5 p-10 backdrop-blur-sm overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{
                background: `radial-gradient(circle, hsl(${steps[activeStep].color},0.4) 0%, transparent 70%)`
              }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10" style={{
                background: `radial-gradient(circle, hsl(${steps[activeStep].color},0.3) 0%, transparent 70%)`
              }} />

              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="text-8xl font-display font-bold text-primary/10 mb-6">
                  {steps[activeStep].step}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4" style={{ color: "hsl(0,0%,95%)" }}>
                  {steps[activeStep].title}
                </h3>
                <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(210,10%,55%)" }}>
                  {steps[activeStep].description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].details.map((detail, di) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: di * 0.08 }}
                      className="flex items-center gap-3 rounded-xl border border-primary/10 bg-primary/5 px-4 py-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium" style={{ color: "hsl(0,0%,80%)" }}>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
