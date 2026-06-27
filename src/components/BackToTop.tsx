import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back To Top Button */}
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6.5 z-40 w-11 h-11 rounded-full bg-brand-primary dark:bg-sky-600 hover:bg-brand-primary-hover dark:hover:bg-sky-500 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-sky-100/10"
          aria-label="Back to Top"
          id="back-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
