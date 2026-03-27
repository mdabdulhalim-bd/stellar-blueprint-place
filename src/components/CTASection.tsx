import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            <Zap className="h-4 w-4" />
            Ready to get started?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Let's Turn Your Vision Into{" "}
            <span className="text-gradient-primary">Reality</span>
          </h2>

          <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Join 380+ businesses that trust Zoom IT to build their digital future.
            Get a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#portfolio">See Our Work</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
