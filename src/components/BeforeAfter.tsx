import { useState, useRef, useEffect, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowLeftRight } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="makeover" className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic light rays */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
            Interactive Showcase
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Smile Transformations & <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Makeovers</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Drag the slider to see the dramatic before-and-after results of our customized dental aesthetic and whitening treatments.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl select-none bg-slate-100 dark:bg-slate-950"
              id="before-after-slider-container"
            >
              {/* BEFORE State (YELLOWISH TINT SMILE DESIGN) */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100/55 dark:from-amber-950/20 dark:to-slate-900">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="text-center space-y-4 max-w-sm px-6">
                  {/* Visual Teeth / Smile Illustration */}
                  <div className="relative mx-auto w-40 h-20 bg-amber-200/45 dark:bg-amber-900/30 rounded-t-full rounded-b-lg border-2 border-amber-300/40 flex items-end justify-center pb-2 shadow-inner">
                    <div className="flex gap-1.5 w-full px-4 justify-center">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-4 h-10 bg-amber-100 dark:bg-amber-300/30 rounded-b-md border border-amber-300/50" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-amber-800 dark:text-amber-400 text-lg">Before Treatment</h3>
                    <p className="font-sans text-xs text-amber-700/80 dark:text-amber-500/80 leading-relaxed">
                      Severe enamel discoloration, surface micro-staining, and uneven smile alignment.
                    </p>
                  </div>
                </div>
              </div>

              {/* AFTER State (BRILLIANT WHITER SMILE DESIGN) */}
              <div 
                className="absolute inset-0 h-full overflow-hidden" 
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Same size background as parent to prevent distortion */}
                <div className="absolute inset-0 w-[200%] max-w-none h-full flex items-center justify-start bg-gradient-to-br from-sky-50 to-indigo-50/70 dark:from-slate-900 dark:to-slate-950">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="text-center space-y-4 max-w-sm px-6">
                      {/* Premium Whitened Visual Teeth */}
                      <div className="relative mx-auto w-40 h-20 bg-white dark:bg-slate-850 rounded-t-full rounded-b-lg border-2 border-brand-primary/30 flex items-end justify-center pb-2 shadow-md">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-brand-primary dark:text-sky-400 animate-pulse">
                          <Sparkles className="w-5 h-5 fill-current" />
                        </div>
                        <div className="flex gap-1.5 w-full px-4 justify-center">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-4 h-10 bg-sky-50 dark:bg-white rounded-b-md border border-sky-100 shadow-xs" />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display font-extrabold text-brand-primary dark:text-sky-400 text-lg">After SmileCare</h3>
                        <p className="font-sans text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                          9-shades whitening improvement, fully aligned cosmetic bonding, and premium protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDER LINE & HANDLE */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-brand-primary dark:bg-sky-400 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-primary dark:bg-sky-500 text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 transition-transform group-hover:scale-110">
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Transparent input slider for capturing gestures */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Before and After Treatment comparison slider"
                id="before-after-slider-control"
              />

              {/* Labels overlays */}
              <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-xs pointer-events-none z-10">
                Before
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-primary/90 text-white text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-xs pointer-events-none z-10">
                After
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
            <div className="space-y-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                ⭐ Rated 4.9/5 by patients
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                Cosmetic & Restoration Mastery
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our clinic utilizes advanced laser whitening technologies and state-of-the-art porcelain materials that deliver instant, spectacular transformations with absolutely zero sensitivity.
            </p>

            {/* List Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60">
                <span className="block font-display font-extrabold text-brand-primary dark:text-sky-400 text-lg sm:text-xl">
                  9 Shades
                </span>
                <span className="block font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Average whiteness gain
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60">
                <span className="block font-display font-extrabold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl">
                  45 Mins
                </span>
                <span className="block font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Treatment time length
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60">
                <span className="block font-display font-extrabold text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl">
                  100% Pain-Free
                </span>
                <span className="block font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Drill-free laser prep
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60">
                <span className="block font-display font-extrabold text-pink-600 dark:text-pink-400 text-lg sm:text-xl">
                  10+ Years
                </span>
                <span className="block font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Restoration durability
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("appointment");
                  if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-sans font-bold text-sm text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 dark:hover:from-sky-500 dark:hover:to-cyan-500 shadow-md hover:shadow-lg transition-all cursor-pointer"
                id="makeover-book-btn"
              >
                <span>Schedule a Free Whitening Trial</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
