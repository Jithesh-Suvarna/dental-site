import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/911234567890?text=Hi%20SmileCare,%20I%20would%20like%20to%20book%20a%20dental%20appointment.";

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-bg dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs tracking-wider uppercase text-brand-primary dark:text-sky-400">
            Contact Information
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Our <span className="text-brand-primary dark:text-sky-400">Location & Details</span>
          </h2>
          <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Ready for your visit? Contact us directly or navigate straight to our clinic in Khar West.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-left" id="contact-info-cards">
              
              {/* Address card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-805 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-brand-primary dark:text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Clinic Address
                  </h4>
                  <p className="font-sans text-sm text-slate-550 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Suite 204, Platinum Plaza, 14th Road, <br />
                    Khar West, Mumbai, Maharashtra 400052
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <a
                href="tel:+911234567890"
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-805 shadow-sm flex items-start space-x-4 hover:border-sky-200 dark:hover:border-sky-900 transition-colors cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-brand-primary dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-450 transition-colors">
                    Phone Numbers
                  </h4>
                  <p className="font-sans text-sm text-slate-550 dark:text-slate-400 mt-1.5 font-medium">
                    +91 123 456 7890 <br />
                    <span className="text-xs text-brand-primary dark:text-sky-400 font-bold block mt-1 group-hover:underline">Click to call now</span>
                  </p>
                </div>
              </a>

              {/* Email card */}
              <a
                href="mailto:hello@smilecaremumbai.com"
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-805 shadow-sm flex items-start space-x-4 hover:border-sky-200 dark:hover:border-sky-900 transition-colors cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-brand-primary dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-450 transition-colors">
                    Email Address
                  </h4>
                  <p className="font-sans text-sm text-slate-550 dark:text-slate-400 mt-1.5">
                    hello@smilecaremumbai.com <br />
                    <span className="text-xs text-brand-primary dark:text-sky-400 font-bold block mt-1 group-hover:underline">Click to email us</span>
                  </p>
                </div>
              </a>

            </div>

            {/* Quick Actions buttons */}
            <div className="pt-2 text-left space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl font-sans font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all active:scale-98"
                id="whatsapp-chat-btn"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat via WhatsApp (+91 123 456 7890)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[400px]">
            <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 relative flex flex-col justify-between">
              
              <iframe
                title="SmileCare Dental Clinic Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.211933924391!2d72.831518!3d19.053703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9116a445d35%3A0xf6f693cfbd6fde72!2sPlatinum%20Plaza%2C%2014th%20Rd%2C%20Khar%20West%2C%20Mumbai%2C%20Maharashtra%20400052!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="google-maps-iframe"
              />

              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="https://maps.app.goo.gl/9v1Wf46Xor6r4f6p9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-sans font-bold text-xs shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  id="open-maps-btn"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
