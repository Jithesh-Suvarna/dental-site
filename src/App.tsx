import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import GoogleReviews from "./components/GoogleReviews";
import FAQ from "./components/FAQ";
import AppointmentForm from "./components/AppointmentForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Sync dark mode class on document element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-brand-bg dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-sky-100 dark:selection:bg-sky-950 transition-colors duration-300">
      
      {/* Navbar Section */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Metrics Block */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Services Grid Section */}
        <Services />

        {/* Before & After Treatment Comparison Slider */}
        <BeforeAfter />

        {/* Doctors Section */}
        <Doctors />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Verified Google Reviews Carousel */}
        <GoogleReviews />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Dynamic Booking Section */}
        <AppointmentForm />

        {/* Clinic Location & Custom Iframe Maps */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating utility indicators */}
      <BackToTop />
      <FloatingWhatsApp />
      
    </div>
  );
}
