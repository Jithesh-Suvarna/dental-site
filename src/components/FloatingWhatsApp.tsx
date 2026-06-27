import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, CalendarCheck, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showStickyMobile, setShowStickyMobile] = useState(false);

  useEffect(() => {
    // Show WhatsApp tooltip after 4 seconds of page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Track scroll position to conditionally show the mobile sticky appointment button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Find the appointment section
      const appointmentSection = document.getElementById("appointment");
      if (appointmentSection) {
        const rect = appointmentSection.getBoundingClientRect();
        // Hide if appointment form is currently visible in viewport or near viewport
        const isFormVisible = rect.top < windowHeight && rect.bottom > 0;
        
        // Show sticky button only after scrolling 400px, and if the form is not visible, and we aren't at the very bottom
        if (scrollY > 400 && !isFormVisible && (scrollY + windowHeight < documentHeight - 150)) {
          setShowStickyMobile(true);
        } else {
          setShowStickyMobile(false);
        }
      } else {
        if (scrollY > 400) {
          setShowStickyMobile(true);
        } else {
          setShowStickyMobile(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      {/* 1. FLOATING WHATSAPP CTA WIDGET */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Hover Tooltip Bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/60 p-4 rounded-2xl shadow-xl max-w-xs text-left pointer-events-auto"
              id="whatsapp-tooltip-card"
            >
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute top-2.5 right-2.5 p-0.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors"
                aria-label="Close message"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              
              <div className="space-y-1 pr-4">
                <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Online Assistance</span>
                </span>
                <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                  Chat on WhatsApp
                </h4>
                <p className="font-sans text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                  Have quick questions about pricing or times? Connect directly with our patient care team.
                </p>
              </div>
              <div className="absolute right-6 -bottom-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-900 border-r border-b border-emerald-100 dark:border-emerald-950/60 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919876543210?text=Hi%20SmileCare%2C%20I%20would%20like%20to%20enquire%20about%20dental%20appointment%20slots."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/40 cursor-pointer pointer-events-auto relative group transition-colors"
          aria-label="Contact us on WhatsApp"
          id="floating-whatsapp-cta"
        >
          {/* Ripple animation ring */}
          <span className="absolute inset-0 rounded-full border-2 border-emerald-500/40 animate-ping -z-10" />
          
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.004 2c-5.51 0-9.993 4.483-9.993 9.993 0 1.763.461 3.483 1.336 5.004L2 22l5.138-1.348c1.472.803 3.126 1.233 4.86 1.233 5.516 0 9.996-4.483 9.996-9.993 0-5.51-4.48-9.993-9.986-9.993zm5.836 14.168c-.24.673-1.196 1.232-1.635 1.272-.395.035-.884.062-2.316-.525-1.832-.751-3.003-2.614-3.093-2.736-.091-.122-.733-.974-.733-1.848s.454-1.312.616-1.48c.162-.168.353-.21.471-.21h.336c.108 0 .252.007.387.329.141.336.48 1.168.522 1.252.042.084.067.182.007.301-.06.119-.091.196-.182.301-.091.105-.192.234-.273.315-.091.091-.186.189-.081.371.105.182.466.768.998 1.242.686.613 1.263.805 1.445.896.182.091.287.077.395-.049.108-.126.466-.543.591-.728.125-.186.252-.154.421-.091.169.063 1.071.504 1.256.598.186.091.311.137.357.217.046.081.046.466-.194 1.139z"/>
          </svg>
        </motion.a>
      </div>

      {/* 2. STICKY MOBILE APPOINTMENT BUTTON */}
      <AnimatePresence>
        {showStickyMobile && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-800/60 px-4 py-3 md:hidden shadow-xl flex items-center justify-between"
            id="mobile-sticky-bar"
          >
            <div className="text-left">
              <span className="block font-sans text-[10px] text-slate-400 uppercase tracking-widest font-bold">clinical excellence</span>
              <span className="block font-display font-extrabold text-xs text-slate-800 dark:text-white mt-0.5">Ready for a beautiful smile?</span>
            </div>
            
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-sans font-bold text-xs text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 shadow-md transition-all cursor-pointer"
              id="mobile-sticky-action-btn"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
