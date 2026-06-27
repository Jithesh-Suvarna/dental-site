import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../constants";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // keep first one open by default as in design

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-bg dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans font-bold text-xs tracking-wider uppercase text-brand-primary dark:text-sky-400">
            Have Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Common <span className="text-brand-primary dark:text-sky-400">Questions</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Find answers to frequently asked questions about dental implants, alignment treatments, pricing, and insurance.
          </p>
        </div>

        {/* FAQs Accordion Block */}
        <div className="space-y-4 max-w-3xl mx-auto" id="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-display font-bold text-sm sm:text-base text-slate-800 hover:text-brand-primary dark:text-slate-200 dark:hover:text-sky-400 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-primary dark:text-sky-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50 dark:border-slate-800/50 font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
