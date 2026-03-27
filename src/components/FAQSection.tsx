import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "We specialize in custom web applications, SaaS platforms, e-commerce stores, mobile apps (iOS & Android), enterprise software, and UI/UX design. Whether you're a startup launching an MVP or an enterprise modernizing legacy systems, we have the expertise to deliver.",
    number: "01",
  },
  {
    question: "How much does a typical project cost?",
    answer: "Project costs vary based on scope, complexity, and timeline. Simple websites start around $5,000, while complex web applications or mobile apps range from $15,000 to $100,000+. We provide a detailed, no-obligation estimate after our free consultation call.",
    number: "02",
  },
  {
    question: "What is your development process like?",
    answer: "We follow an agile methodology with four key phases: Discovery (understanding your goals), Strategy & Design (wireframes, prototypes, UI/UX), Development (iterative sprints with regular demos), and Launch & Support (QA, deployment, and ongoing maintenance).",
    number: "03",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Timelines depend on project scope. A simple website typically takes 4-6 weeks, while complex web applications or mobile apps can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    number: "04",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely! We offer flexible maintenance packages that include bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 support for critical issues.",
    number: "05",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Yes! We regularly collaborate with in-house teams, providing dedicated developers, designers, or full project teams that integrate seamlessly with your existing workflow and tools.",
    number: "06",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gradient-process relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(122,39%,49%) 1px, transparent 0)",
        backgroundSize: "50px 50px",
      }} />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ background: "radial-gradient(circle, hsl(122,39%,49%,0.2), transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary mb-6"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-5" style={{ color: "hsl(0,0%,95%)" }}>
            Got <span className="text-gradient-primary">Questions?</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "hsl(210,10%,55%)" }}>
            Everything you need to know about working with us.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 h-px w-20"
            style={{ background: "var(--gradient-primary)", transformOrigin: "center" }}
          />
        </motion.div>

        {/* FAQ List — full width, big typography */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b"
                style={{ borderColor: "hsl(210,20%,16%)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-start gap-5 sm:gap-8 w-full py-8 sm:py-10 text-left group"
                >
                  {/* Number */}
                  <motion.span
                    className="text-sm sm:text-base font-mono font-bold shrink-0 mt-1 sm:mt-2 transition-colors duration-300"
                    animate={{ color: isOpen ? "hsl(122,39%,49%)" : "hsl(210,10%,30%)" }}
                  >
                    {faq.number}
                  </motion.span>

                  {/* Question */}
                  <div className="flex-1">
                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-display font-bold leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? "hsl(0,0%,95%)" : "hsl(210,10%,55%)" }}
                    >
                      {faq.question}
                    </h3>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-5 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(210,10%,50%)" }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle icon */}
                  <motion.div
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all duration-300 border"
                    animate={{
                      backgroundColor: isOpen ? "hsl(122,39%,49%)" : "transparent",
                      borderColor: isOpen ? "hsl(122,39%,49%)" : "hsl(210,20%,20%)",
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" style={{ color: "hsl(0,0%,100%)" }} />
                    ) : (
                      <Plus className="h-5 w-5" style={{ color: "hsl(210,10%,40%)" }} />
                    )}
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-primary/15 px-8 py-6" style={{
            background: "hsl(210,20%,10%)",
          }}>
            <div className="text-center sm:text-left">
              <p className="text-base font-semibold" style={{ color: "hsl(0,0%,90%)" }}>
                Still have questions?
              </p>
              <p className="text-sm" style={{ color: "hsl(210,10%,45%)" }}>
                We'd love to hear from you — reach out anytime.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
