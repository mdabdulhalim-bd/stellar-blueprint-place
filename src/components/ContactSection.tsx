import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Website Development",
  "Software Development",
  "Mobile App Development",
  "E-Commerce Solution",
  "UI/UX Design",
  "SEO & Digital Marketing",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@flairbuild.com", color: "from-primary/20 to-primary/5" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", color: "from-accent/20 to-accent/5" },
  { icon: MapPin, label: "Visit Us", value: "San Francisco, CA", color: "from-primary/20 to-primary/5" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri, 9AM–6PM", color: "from-accent/20 to-accent/5" },
];

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/30"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1.2, 0.5],
    }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const filledCount = [form.name, form.email, form.message].filter(v => v.trim()).length;
  const progress = (filledCount / 3) * 100;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(210 25% 6%) 0%, hsl(210 30% 10%) 50%, hsl(160 20% 8%) 100%)" }}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
          y: bgY,
          scale: orbScale,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [-60, 60]),
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[
        { delay: 0, x: "10%", y: "20%" }, { delay: 1.5, x: "85%", y: "30%" },
        { delay: 0.8, x: "30%", y: "70%" }, { delay: 2, x: "70%", y: "80%" },
        { delay: 1, x: "50%", y: "15%" }, { delay: 2.5, x: "15%", y: "55%" },
        { delay: 0.5, x: "90%", y: "60%" }, { delay: 1.8, x: "45%", y: "90%" },
      ].map((p, i) => <FloatingParticle key={i} {...p} />)}

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                Extraordinary
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's start a conversation
            that could change everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left column — info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8, borderColor: "hsl(122, 39%, 49%, 0.3)" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-medium mb-0.5">{item.label}</p>
                      <p className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">{item.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Promise badges */}
            <motion.div
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">What You'll Get</h4>
              <div className="space-y-3">
                {[
                  { emoji: "💬", text: "Free project consultation" },
                  { emoji: "📊", text: "Detailed cost estimate" },
                  { emoji: "📅", text: "Timeline & milestone plan" },
                  { emoji: "✅", text: "No obligation whatsoever" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-base text-white/70 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Response time badge */}
            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-40" />
              </div>
              <span className="text-sm font-semibold text-white/80">
                Average response time: <span className="text-primary">under 2 hours</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ x: springX, y: springY }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="rounded-3xl border border-primary/20 bg-white/[0.03] backdrop-blur-xl p-12 lg:p-16 text-center"
                  initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, stiffness: 300 }}
                  >
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-lg text-white/50 max-w-md mx-auto">
                    Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="relative rounded-3xl border border-white/[0.08] overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, hsl(210 20% 12% / 0.8), hsl(210 25% 8% / 0.9))",
                    backdropFilter: "blur(40px)",
                  }}
                >
                  {/* Form top glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  {/* Progress bar */}
                  <div className="h-1 bg-white/[0.03]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-emerald-400"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-6">
                    {/* Form header */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Start a Project</h3>
                        <p className="text-sm text-white/40 mt-1">Fill in the details and we'll reach out</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/30 uppercase tracking-wider">Completed</span>
                        <p className="text-2xl font-bold text-primary">{filledCount}/3</p>
                      </div>
                    </div>

                    {/* Name & Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white/70 flex items-center gap-1.5">
                          Full Name <span className="text-primary text-base">*</span>
                        </label>
                        <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-primary/30' : ''}`}>
                          <Input
                            placeholder="John Doe"
                            maxLength={100}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 text-base rounded-xl focus-visible:ring-primary/30 focus-visible:border-primary/30 transition-all duration-300"
                          />
                          {form.name.trim() && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white/70 flex items-center gap-1.5">
                          Email Address <span className="text-primary text-base">*</span>
                        </label>
                        <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-primary/30' : ''}`}>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            maxLength={255}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 text-base rounded-xl focus-visible:ring-primary/30 focus-visible:border-primary/30 transition-all duration-300"
                          />
                          {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Type & Budget row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white/70">Project Type</label>
                        <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })}>
                          <SelectTrigger className="h-12 bg-white/[0.04] border-white/[0.08] text-white text-base rounded-xl focus:ring-primary/30 [&>span]:text-white/50 data-[state=open]:ring-2 data-[state=open]:ring-primary/30">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-[hsl(210,25%,12%)] border-white/10 rounded-xl">
                            {projectTypes.map((t) => (
                              <SelectItem key={t} value={t} className="text-white/80 focus:bg-primary/10 focus:text-white text-base">{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white/70">Budget Range</label>
                        <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                          <SelectTrigger className="h-12 bg-white/[0.04] border-white/[0.08] text-white text-base rounded-xl focus:ring-primary/30 [&>span]:text-white/50 data-[state=open]:ring-2 data-[state=open]:ring-primary/30">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-[hsl(210,25%,12%)] border-white/10 rounded-xl">
                            {budgetRanges.map((b) => (
                              <SelectItem key={b} value={b} className="text-white/80 focus:bg-primary/10 focus:text-white text-base">{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/70 flex items-center gap-1.5">
                        Project Details <span className="text-primary text-base">*</span>
                      </label>
                      <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-primary/30' : ''}`}>
                        <Textarea
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={5}
                          maxLength={1000}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 text-base rounded-xl resize-none focus-visible:ring-primary/30 focus-visible:border-primary/30 transition-all duration-300 min-h-[130px]"
                        />
                        <span className="absolute bottom-3 right-3 text-xs text-white/20">
                          {form.message.length}/1000
                        </span>
                      </div>
                    </div>

                    {/* Submit button */}
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white shadow-[0_8px_32px_-4px_hsl(122,39%,49%,0.4)] hover:shadow-[0_12px_40px_-4px_hsl(122,39%,49%,0.5)] transition-all duration-300 border-0"
                        size="lg"
                      >
                        {loading ? (
                          <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </motion.div>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-center text-xs text-white/25 pt-1">
                      🔒 Your information is secure and will never be shared
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
