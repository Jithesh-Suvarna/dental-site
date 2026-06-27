import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  treatment: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Vikram Malhotra",
    avatar: "VM",
    date: "2 days ago",
    rating: 5,
    text: "Extremely professional experience! Dr. Rahul explained the entire dental implant procedure clearly. The laser system was completely pain-free as advertised. SmileCare is easily the best dental clinic in Mumbai.",
    treatment: "Dental Implants"
  },
  {
    id: 2,
    name: "Anjali Deshmukh",
    avatar: "AD",
    date: "1 week ago",
    rating: 5,
    text: "I was super nervous about my root canal treatment, but Dr. Priya was incredibly gentle. The clinic is spotless and uses global sterilization protocols. I barely felt any discomfort. Highly recommended!",
    treatment: "Root Canal Therapy"
  },
  {
    id: 3,
    name: "Rohan Singhal",
    avatar: "RS",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent treatment for teeth alignment! The invisible aligners are comfortable and already showing fantastic results. Very clean environment and professional clinical care.",
    treatment: "Invisible Aligners"
  },
  {
    id: 4,
    name: "Pooja Hegde",
    avatar: "PH",
    date: "3 weeks ago",
    rating: 5,
    text: "The smile makeover and whitening results exceeded all my expectations! My teeth are 9 shades brighter now. The procedure took only 45 minutes and was absolutely pain-free.",
    treatment: "Smile Makeover"
  },
  {
    id: 5,
    name: "Siddharth Sen",
    avatar: "SS",
    date: "1 month ago",
    rating: 5,
    text: "Brought my daughter here for pediatric dentistry. Dr. Priya made her feel so safe and comfortable. The interactive screen setup kept her relaxed throughout. Excellent staff!",
    treatment: "Pediatric Care"
  }
];

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-bg dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Visual glowing backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
              Verified Ratings
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
              What Our Google Reviews <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Confirm</span>
            </h2>
            <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-xl">
              We maintain a near-perfect rating based on hundreds of verified reviews on Google. Here's what our wonderful patients say about our care.
            </p>
          </div>

          {/* Aggregated Rating Widget */}
          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shrink-0">
            <div className="text-left">
              <span className="block font-display font-black text-3xl text-slate-900 dark:text-white leading-none">4.9</span>
              <span className="block font-sans text-[11px] text-slate-400 mt-1">Based on 642 reviews</span>
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google Verified</span>
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Block */}
        <div className="relative max-w-3xl mx-auto px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 220, damping: 25 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl relative text-left"
              id={`google-review-card-${REVIEWS[activeIndex].id}`}
            >
              {/* Quote Ornament */}
              <div className="absolute top-8 right-8 text-sky-100/45 dark:text-slate-800/40">
                <Quote className="w-14 h-14 rotate-180 fill-current" />
              </div>

              <div className="space-y-6">
                {/* Review Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-amber-500">
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:text-sky-400">
                    {REVIEWS[activeIndex].treatment}
                  </span>
                </div>

                {/* Review Narrative */}
                <p className="font-sans text-slate-600 dark:text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-medium italic">
                  "{REVIEWS[activeIndex].text}"
                </p>

                {/* Author Segment */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-sky-600 text-white flex items-center justify-center font-display font-black tracking-wider text-sm shadow-md">
                      {REVIEWS[activeIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {REVIEWS[activeIndex].name}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 mt-0.5">
                        {REVIEWS[activeIndex].date}
                      </p>
                    </div>
                  </div>

                  {/* Google Logo Frame */}
                  <div className="flex items-center space-x-1.5 opacity-60">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    <span className="font-sans text-xs font-extrabold text-slate-600 dark:text-slate-400">Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-8 bg-brand-primary dark:bg-sky-500" : "bg-slate-200 dark:bg-slate-800"
                  }`}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-brand-primary hover:text-white dark:hover:bg-sky-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Previous Google Review"
                id="google-review-prev-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-brand-primary hover:text-white dark:hover:bg-sky-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Next Google Review"
                id="google-review-next-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
