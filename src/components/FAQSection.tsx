import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "We specialize in custom web applications, SaaS platforms, e-commerce stores, mobile apps (iOS & Android), enterprise software, and UI/UX design. Whether you're a startup launching an MVP or an enterprise modernizing legacy systems, we have the expertise to deliver.",
  },
  {
    question: "How much does a typical project cost?",
    answer: "Project costs vary based on scope, complexity, and timeline. Simple websites start around $5,000, while complex web applications or mobile apps range from $15,000 to $100,000+. We provide a detailed, no-obligation estimate after our free consultation call.",
  },
  {
    question: "What is your development process like?",
    answer: "We follow an agile methodology with four key phases: Discovery (understanding your goals), Strategy & Design (wireframes, prototypes, UI/UX), Development (iterative sprints with regular demos), and Launch & Support (QA, deployment, and ongoing maintenance).",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Timelines depend on project scope. A simple website typically takes 4-6 weeks, while complex web applications or mobile apps can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely! We offer flexible maintenance packages that include bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 support for critical issues.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Yes! We regularly collaborate with in-house teams, providing dedicated developers, designers, or full project teams that integrate seamlessly with your existing workflow and tools.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-faq relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-30" style={{
        background: "radial-gradient(circle, hsl(122,39%,49%,0.08), transparent 70%)"
      }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full opacity-20" style={{
        background: "radial-gradient(circle, hsl(145,63%,42%,0.06), transparent 70%)"
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left side - sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-6"
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Everything you need to know about working with us. Can't find the answer you're looking for?
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Still have questions?</p>
                <p className="text-xs text-muted-foreground">Contact us for a free consultation</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - FAQ items */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === i
                      ? "border-primary/30 bg-card shadow-card-hover"
                      : "border-border bg-card shadow-card hover:border-primary/15 hover:shadow-card-hover"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <div className="flex items-center gap-4 flex-1 pr-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        openIndex === i
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span className={`font-display font-semibold transition-colors duration-300 ${
                        openIndex === i ? "text-foreground" : "text-foreground/80"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === i
                        ? "bg-primary text-primary-foreground rotate-0"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          <div className="h-px bg-border mb-4" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
