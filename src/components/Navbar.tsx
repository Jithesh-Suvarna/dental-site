import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-100/20 dark:shadow-slate-950/40 border-b border-slate-100/80 dark:border-slate-800/80 py-2"
          : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-b border-slate-100/20 dark:border-slate-800/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center space-x-2.5 group relative z-50"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-sky-600 dark:from-sky-600 dark:to-cyan-400 flex items-center justify-center text-white shadow-md shadow-brand-primary/15 dark:shadow-sky-500/15 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Smile<span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Care</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                className="relative font-sans font-medium text-sm text-slate-600 hover:text-brand-primary dark:text-slate-300 dark:hover:text-sky-400 py-2 transition-all group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-sky-500 dark:from-sky-400 dark:to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 transition-all duration-300 border border-slate-200/10 active:scale-95 cursor-pointer relative overflow-hidden"
              aria-label="Toggle dark mode"
              id="theme-toggle-btn"
            >
              <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ y: -10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>
            <a
              href="#appointment"
              onClick={(e) => handleScrollTo(e, "appointment")}
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-sans font-semibold text-sm text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 dark:hover:from-sky-500 dark:hover:to-cyan-500 transition-all duration-300 active:scale-98 shadow-md shadow-brand-primary/20 dark:shadow-sky-500/10 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-0.5 overflow-hidden group"
              id="desktop-book-btn"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book Appointment <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile menu toggle & theme toggle */}
          <div className="flex items-center space-x-2 md:hidden relative z-50">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 transition-all border border-slate-200/10 cursor-pointer"
              aria-label="Toggle dark mode"
              id="mobile-theme-toggle"
            >
              <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ rotate: -90, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all border border-slate-200/10 cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                    className="block px-4 py-3 rounded-xl font-sans font-medium text-base text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand-primary dark:hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-slate-100 dark:border-slate-800 px-4"
              >
                <a
                  href="#appointment"
                  onClick={(e) => handleScrollTo(e, "appointment")}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-sans font-bold text-white bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-600 dark:to-cyan-600 transition-all shadow-md shadow-brand-primary/10"
                  id="mobile-book-btn"
                >
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
