import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
            Patient Stories
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            What Our <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Patients Say</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Read stories of life-changing smile transformations from our happy patients in Mumbai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-brand-bg/60 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900/80 hover:border-brand-primary/20 dark:hover:border-sky-500/30 shadow-xs hover:shadow-xl hover:shadow-brand-primary/5 flex flex-col justify-between relative text-left group transition-all duration-300"
              id={`testimonial-${testimonial.id}`}
            >
              {/* Quote Mark accent with interactive rotation */}
              <div className="absolute top-6 right-6 text-sky-100 dark:text-slate-800 group-hover:text-brand-primary/10 dark:group-hover:text-sky-400/10 transition-colors duration-300">
                <Quote className="w-8 h-8 rotate-180 fill-current group-hover:scale-110 group-hover:rotate-[190deg] transition-transform duration-500" />
              </div>

              <div className="space-y-4">
                {/* Stars with scale-up interaction */}
                <div className="flex space-x-1 text-amber-500" id={`testimonial-rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-105" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800">
                {/* Colored Avatar Ring with beautiful initials frame */}
                <div className="w-11 h-11 rounded-full bg-sky-100 dark:bg-sky-950/80 text-brand-primary dark:text-sky-400 flex items-center justify-center font-display font-extrabold text-sm tracking-wider border border-sky-200/20 dark:border-sky-500/10 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:bg-sky-600 transition-all duration-300 shadow-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-brand-primary dark:group-hover:text-sky-400">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
