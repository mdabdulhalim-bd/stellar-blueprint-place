import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
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

const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="text-gradient-primary">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to start your next project? Fill out the form and we'll get
              back to you within 24 hours with a free consultation and project
              estimate.
            </p>

            <div className="space-y-4">
              {[
                { label: "Free project consultation", icon: "💬" },
                { label: "Detailed cost estimate", icon: "📊" },
                { label: "Timeline & milestone plan", icon: "📅" },
                { label: "No obligation whatsoever", icon: "✅" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-foreground">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="John Doe"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Project Type
                    </label>
                    <Select
                      value={form.projectType}
                      onValueChange={(v) => setForm({ ...form, projectType: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Budget Range
                    </label>
                    <Select
                      value={form.budget}
                      onValueChange={(v) => setForm({ ...form, budget: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full" size="lg">
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
