import { motion } from "motion/react";
import { Star, ShieldAlert, Award, Calendar, ArrowRight } from "lucide-react";
import { DOCTORS } from "../constants";

export default function Doctors() {
  const handleScrollToForm = () => {
    const el = document.getElementById("appointment");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="doctors" className="py-20 md:py-28 bg-brand-bg dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
            Clinical Excellence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Clinical Experts</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our doctors are world-class professionals committed to providing the best clinical outcomes and personalized patient experiences.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-900 border border-slate-100/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-100/10 dark:hover:shadow-slate-950/40 transition-all duration-300 flex flex-col sm:flex-row text-left group"
              id={`doctor-card-${doctor.id}`}
            >
              {/* Image side */}
              <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden bg-sky-50 dark:bg-slate-800">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />
                {/* Experience Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-800 px-3 py-1.5 rounded-2xl shadow-md">
                  <span className="font-display font-black text-brand-primary dark:text-sky-400 text-xs sm:text-sm">
                    {doctor.experience}
                  </span>
                  <span className="font-sans text-[9px] text-slate-500 dark:text-slate-400 block -mt-0.5 uppercase font-semibold tracking-wide">
                    Experience
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-sans font-bold text-xs text-brand-primary dark:text-sky-400 uppercase tracking-widest block">
                    {doctor.specialty}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-400">
                    {doctor.role}
                  </p>
                  
                  <div className="w-8 h-1 bg-gradient-to-r from-brand-primary to-sky-400 rounded-full" />

                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {doctor.bio}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleScrollToForm}
                    className="group/btn inline-flex items-center space-x-2 font-sans font-bold text-xs text-brand-primary dark:text-sky-400 hover:text-brand-primary-hover transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-brand-primary dark:text-sky-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
