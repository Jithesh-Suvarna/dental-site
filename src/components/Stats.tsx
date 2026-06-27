import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Award, Users, Star, Activity } from "lucide-react";

interface AnimatedCountProps {
  value: string;
}

function AnimatedCount({ value }: AnimatedCountProps) {
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(numericPart)) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = numericPart;
    const duration = 1500; // 1.5 seconds duration
    const startTime = performance.now();

    function updateCount(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Quad ease-out formula
      const easeProgress = progress * (2 - progress);
      const current = easeProgress * (end - start) + start;
      
      if (value.includes(".")) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(updateCount);
  }, [numericPart, value]);

  // Handle formatted numbers (like 6,000+)
  const formattedCount = value.includes(",") 
    ? count.toLocaleString('en-US') 
    : count;

  return <span>{formattedCount}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: "12+", label: "Years Experience", icon: Award, color: "text-brand-primary dark:text-sky-400" },
    { value: "6,000+", label: "Happy Patients", icon: Users, color: "text-indigo-600 dark:text-indigo-400" },
    { value: "4.9/5", label: "Star Rating", icon: Star, color: "text-amber-500" },
    { value: "98.7%", label: "Success Rate", icon: Activity, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <section className="bg-gradient-to-r from-white via-brand-bg/40 to-white dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800/80 py-12 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 lg:gap-8 text-center">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group space-y-2 relative flex flex-col items-center p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/20 transition-all duration-300 ${
                  i < 3 ? "md:after:content-[''] md:after:absolute md:after:top-1/4 md:after:bottom-1/4 md:after:-right-4 lg:after:-right-8 md:after:w-[1px] md:after:bg-slate-100 dark:md:after:bg-slate-800" : ""
                }`}
              >
                {/* Micro-interactive icon frame */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-400 group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors duration-300 shadow-xs">
                  <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]" />
                </div>
                
                <div className="space-y-0.5">
                  <div className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight transition-all duration-300 ${stat.color} group-hover:scale-105 inline-block`}>
                    <AnimatedCount value={stat.value} />
                  </div>
                  <div className="font-sans font-semibold text-xs sm:text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
