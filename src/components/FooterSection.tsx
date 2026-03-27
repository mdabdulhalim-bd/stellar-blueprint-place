import { Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="font-display text-xl font-bold tracking-tight text-background mb-4 block">
              <span className="text-gradient-primary">ZOOM</span> IT
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Building high-performance digital solutions that drive growth for
              businesses worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Website Development", "Software Development", "Mobile Apps", "E-Commerce", "UI/UX Design", "SEO"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-background/50 hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About Us", "Portfolio", "Process", "Careers", "Blog"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                hello@zoomit.dev
              </li>
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-background/50">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                123 Tech Lane, San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {currentYear} Zoom IT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-xs text-background/40 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
