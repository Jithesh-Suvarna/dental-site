import React, { useState, FormEvent } from "react";
import { Send, ShieldCheck, Mail, CheckCircle2, Globe, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^\S+@\S+\.\S+$/.test(email)) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "Meet Doctors", href: "#doctors" },
    { name: "Book Online", href: "#appointment" },
    { name: "Contact Us", href: "#contact" }
  ];

  const servicesLinks = [
    { name: "Dental Implants", href: "#services" },
    { name: "Orthodontics", href: "#services" },
    { name: "Cosmetic Dentistry", href: "#services" },
    { name: "Pediatric Dental Care", href: "#services" },
    { name: "Teeth Whitening", href: "#services" }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 pb-12 border-b border-slate-900 text-left">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-sky-600 flex items-center justify-center text-white shadow-md shadow-brand-primary/10">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Smile<span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Care</span>
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              SmileCare is Mumbai's premier dental clinic, dedicated to providing world-class oral healthcare with compassion, clinical precision, and advanced pain-free technologies.
            </p>

            <div className="flex space-x-3 text-slate-400 pt-2">
              <span className="text-xs font-sans flex items-center space-x-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Khar West, Mumbai</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href.slice(1))}
                    className="group flex items-center font-sans text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-350"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-all mr-0 group-hover:mr-2" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="group flex items-center font-sans text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-355"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-all mr-0 group-hover:mr-2" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              Subscribe for our latest oral health tips, articles, and exclusive dental clinic offers.
            </p>

            <div id="newsletter-form-container">
              {subscribed ? (
                <div className="flex items-center space-x-2 text-emerald-400 font-sans text-xs sm:text-sm pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed Successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2" id="newsletter-form">
                  <div className="relative w-full">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      aria-label="Your Email Address"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all"
                      id="newsletter-email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-11 px-4 rounded-lg bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 text-white flex items-center justify-center cursor-pointer transition-all shadow-md shadow-brand-primary/10"
                    aria-label="Subscribe"
                    id="newsletter-submit"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0 text-center sm:text-left">
          <p>© 2026 SmileCare Dental Clinic. All Rights Reserved.</p>
          <p className="flex items-center justify-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for Mumbai's smiles.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
