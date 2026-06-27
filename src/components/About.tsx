import { motion } from "motion/react";
import { Check, ShieldCheck, HeartPulse, Award, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";

export default function About() {
  const points = [
    {
      title: "Advanced Digital X-Ray & Imaging",
      desc: "Ultra-low radiation 3D scanning for 100% diagnostic accuracy.",
    },
    {
      title: "Laser Dentistry for Pain-Free Procedures",
      desc: "Soft tissue lasers replace drills to eliminate pain and accelerate healing.",
    },
    {
      title: "Sterilization Protocols of Global Standards",
      desc: "Class B autoclaves and strict chemical sanitation logs.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-bg dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative subtle background ring */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full border border-slate-200/20 dark:border-slate-800/20 pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual block */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl -rotate-2 scale-102 blur-xs" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/50 shadow-2xl bg-white dark:bg-slate-900 p-2.5 transition-all duration-300 hover:shadow-brand-primary/5">
                <img
                  src={IMAGES.aboutEquipment}
                  alt="SmileCare Dental High Tech Equipment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl aspect-square transition-transform duration-700 hover:scale-[1.02]"
                  id="about-img"
                />
              </div>

              {/* Founded stamp badge with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="absolute -bottom-6 right-4 sm:right-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-800/80 p-5 rounded-2xl shadow-xl max-w-xs text-left transition-all duration-300"
                id="about-stamp-card"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-brand-primary dark:text-sky-400">
                    <HeartPulse className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="block font-display font-black text-brand-primary dark:text-sky-400 text-lg">
                    Founded 2014
                  </span>
                </div>
                <span className="block font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  A decade of clinical excellence and trusted dental solutions in Mumbai.
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <div className="space-y-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
                Next-Gen Dentistry
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Modern Dentistry for the <br />
                <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Next Generation</span>
              </h2>
            </div>

            <p className="font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At SmileCare, we believe that everyone deserves a healthy, beautiful smile. Our clinic is fully equipped with the latest digital scanning systems, smart patient monitors, and pain-free treatment lasers that offer precision dentistry under comfortable settings.
            </p>

            {/* Checklist items with beautiful micro-interactions */}
            <div className="space-y-4 md:space-y-5" id="about-checklist">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-3.5 group transition-all"
                >
                  <div className="flex-shrink-0 w-6.5 h-6.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mt-1 shadow-xs transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/60">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Story Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-sans font-bold text-sm text-white bg-brand-primary hover:bg-brand-primary-hover dark:bg-sky-600 dark:hover:bg-sky-500 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                id="about-cta-story"
              >
                <span>Explore Dental Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
