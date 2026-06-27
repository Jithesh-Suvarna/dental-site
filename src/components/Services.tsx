import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brush, 
  Activity, 
  Grid, 
  PlusSquare, 
  Sparkles, 
  Smile, 
  Flame, 
  Heart,
  ArrowRight,
  X,
  CheckCircle2,
  CalendarCheck
} from "lucide-react";
import { SERVICES } from "../constants";
import { ServiceItem } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon string to Lucide React component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brush":
        return <Brush className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "Grid":
        return <Grid className="w-5 h-5" />;
      case "PlusSquare":
        return <PlusSquare className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Smile":
        return <Smile className="w-5 h-5" />;
      case "Flame":
        return <Flame className="w-5 h-5" />;
      case "Heart":
        return <Heart className="w-5 h-5" />;
      default:
        return <Smile className="w-5 h-5" />;
    }
  };

  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookFromModal = () => {
    handleCloseModal();
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
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic ambient gradient background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-brand-primary/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
            Our Specialties
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-brand-primary to-indigo-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Dental Services</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We provide a wide range of dental treatments ranging from preventive care to complex restorative procedures, all utilizing the latest pain-free technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.2 } 
              }}
              className="bg-brand-bg/60 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-900/80 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-brand-primary/20 dark:hover:border-sky-500/30 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all text-left flex flex-col justify-between group cursor-pointer"
              onClick={() => handleOpenModal(service)}
              id={`service-card-${service.id}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper with glow effect on hover */}
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900/90 text-brand-primary dark:text-sky-400 flex items-center justify-center shadow-xs border border-slate-100/50 dark:border-slate-800 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:bg-sky-600 group-hover:shadow-md group-hover:shadow-brand-primary/20 dark:group-hover:shadow-sky-500/20 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>
                
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(service);
                  }}
                  className="inline-flex items-center space-x-1.5 font-sans font-bold text-xs text-brand-primary dark:text-sky-400 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Interactive Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 text-left relative z-10"
                id="service-modal"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/40 dark:to-slate-900 p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary dark:bg-sky-600 text-white flex items-center justify-center shadow-md shadow-brand-primary/10">
                      {getIcon(selectedService.iconName)}
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Close details"
                    id="close-service-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="space-y-3.5 pt-2">
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Highlights & Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedService.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start space-x-3 bg-slate-50 dark:bg-slate-950/30 p-3.5 rounded-xl border border-slate-100/50 dark:border-slate-800/50">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-slate-600 dark:text-slate-400">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex justify-end space-x-3">
                  <button
                    onClick={handleCloseModal}
                    className="px-4.5 py-2.5 rounded-lg font-sans font-bold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleBookFromModal}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg font-sans font-bold text-sm text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 shadow-md shadow-brand-primary/10 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Service</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
