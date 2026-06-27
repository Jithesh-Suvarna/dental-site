import { motion } from "motion/react";
import { Calendar, Phone, Star, ShieldCheck, Award } from "lucide-react";
import { IMAGES } from "../constants";

export default function Hero() {
  const handleScrollTo = (id: string) => {
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
    <section id="home" className="relative pt-24 md:pt-36 pb-16 md:pb-28 bg-gradient-to-b from-sky-50/60 via-white to-brand-bg dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Background blobs for depth with subtle floating animations */}
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-80 h-80 bg-sky-300/30 dark:bg-sky-900/10 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 dark:bg-slate-800/15 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (left) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-500/10 border border-sky-200/50 dark:border-sky-500/20 shadow-xs"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-sky-400 animate-pulse" />
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-brand-primary dark:text-sky-300">
                Premium Dental Care in Mumbai
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1] tracking-tight"
                id="hero-title"
              >
                Your Smile, <br />
                <span className="bg-gradient-to-r from-brand-primary via-sky-600 to-indigo-600 dark:from-sky-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">Our Priority</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
                id="hero-description"
              >
                Experience modern dental excellence with our team of board-certified specialists. Pain-free treatments tailored to your unique needs using the latest digital technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={() => handleScrollTo("appointment")}
                className="group relative inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-sans font-bold text-base text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 dark:hover:from-sky-500 dark:hover:to-cyan-500 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                id="hero-cta-book"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href="tel:+911234567890"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-sans font-bold text-base text-slate-800 hover:text-brand-primary dark:text-slate-200 dark:hover:text-sky-400 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-xs"
                id="hero-cta-call"
              >
                <Phone className="w-5 h-5 text-slate-500 group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors" />
                <span>Call Now (+91 123 456 7890)</span>
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-5 pt-6 border-t border-slate-200/50 dark:border-slate-800/50"
              id="hero-social-proof"
            >
              {/* Overlapping avatars with clean boarders */}
              <div className="flex -space-x-3.5">
                <img
                  className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm ring-1 ring-slate-100 dark:ring-slate-800"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Patient"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm ring-1 ring-slate-100 dark:ring-slate-800"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                  alt="Patient"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm ring-1 ring-slate-100 dark:ring-slate-800"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
                  alt="Patient"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-sans font-extrabold text-base text-slate-900 dark:text-white">6,000+</span>
                  <span className="font-sans text-sm text-slate-500 dark:text-slate-400">Happy Patients</span>
                </div>
                <div className="flex items-center space-x-1.5 text-amber-500 mt-0.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-sans font-bold text-xs text-slate-700 dark:text-slate-300">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image (right) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none flex justify-center items-center"
            >
              {/* Outer soft shadow background layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-indigo-500/20 dark:from-sky-900/10 dark:to-indigo-900/10 rounded-[2.5rem] rotate-3 scale-102 -z-10 blur-xl" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl w-full max-w-lg aspect-square bg-white dark:bg-slate-900 flex items-center justify-center p-2.5 transition-all duration-300 hover:shadow-brand-primary/10 dark:hover:shadow-sky-500/5">
                <img
                  src={IMAGES.heroDentist}
                  alt="SmileCare Modern Clinic Dentist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 hover:scale-[1.03]"
                  id="hero-img"
                />
              </div>

              {/* Floating ISO clinic badge card overlay with premium Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-800/80 p-5 rounded-2xl shadow-xl shadow-slate-100/30 dark:shadow-slate-950/50 max-w-[200px] text-left hidden sm:block transition-all duration-300"
                id="hero-floating-card"
              >
                <div className="flex items-center space-x-2 text-brand-primary dark:text-sky-400">
                  <div className="p-1 rounded-lg bg-sky-50 dark:bg-sky-950/50">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-display font-extrabold text-base tracking-tight">ISO 9001</span>
                </div>
                <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Certified Global Standards of Sterilization & Hygiene
                </p>
              </motion.div>

              {/* Second floating card to build trust & improve conversions */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute -top-6 -right-4 sm:top-8 sm:-right-4 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/40 dark:border-slate-800/80 p-4 rounded-2xl shadow-xl shadow-slate-100/30 dark:shadow-slate-950/50 max-w-[190px] text-left hidden sm:block transition-all duration-300"
                id="hero-floating-card-2"
              >
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                  <div className="p-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-display font-bold text-xs tracking-tight uppercase">Pain-Free Tech</span>
                </div>
                <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Advanced laser & digital systems for ultimate comfort.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
