import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, MapPin, Calendar, Check, AlertCircle, Loader2 } from "lucide-react";
import { createAppointment } from "../firebase";
import { SERVICES } from "../constants";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Spam protection

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Honey-pot check
    if (honeypot) {
      console.log("Spam detected");
      return;
    }

    // Input validations
    if (!name.trim()) return setError("Please enter your name");
    if (!phone.trim()) return setError("Please enter your phone number");
    if (phone.trim().replace(/\D/g, "").length < 10) return setError("Please enter a valid 10-digit phone number");
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email address");
    if (!service) return setError("Please select a dental service");
    if (!date) return setError("Please select an appointment date");
    if (!time) return setError("Please select a convenient time slot");

    setLoading(true);

    try {
      await createAppointment({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        service,
        date,
        time,
        message: message.trim() || undefined
      });

      setSuccess(true);
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setDate("");
      setTime("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to book your appointment. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative ambient background orb */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/5 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Copy and Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:text-sky-400">
                Direct Scheduling
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Book Your <span className="bg-gradient-to-r from-brand-primary to-sky-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Appointment</span> Today
              </h2>
              <p className="font-sans text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Take the first step towards your perfect smile. Fill out the reservation form and our patient care team will reach out to confirm your exact slot within 2 hours.
              </p>
            </div>

            {/* Quick Contact Specs */}
            <div className="space-y-6" id="appointment-details">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-primary dark:text-sky-400 flex items-center justify-center shadow-xs shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors duration-300">
                    Consultation Hours
                  </h4>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Mon - Sat: 10:00 AM - 08:00 PM <br />
                    <span className="text-xs text-slate-400 block mt-1">Closed on Sundays & Public Holidays</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-primary dark:text-sky-400 flex items-center justify-center shadow-xs shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-sky-400 transition-colors duration-300">
                    Clinic Location
                  </h4>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Suite 204, Platinum Plaza, 14th Road, <br />
                    Khar West, Mumbai, Maharashtra 400052
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card with Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
              
              {/* Spam Protection Hidden Field */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                autoComplete="off"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait">
                {success ? (
                  /* Success Feedback layout */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                    id="appointment-success-msg"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-md shadow-emerald-500/20">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                        Appointment Requested!
                      </h3>
                      <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                        Thank you for booking. Your details have been submitted. Our dental coordinator will call you shortly to confirm your scheduled slot.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setSuccess(false)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 text-white font-sans font-bold text-sm shadow-md transition-all cursor-pointer"
                        id="book-another-btn"
                      >
                        Book Another Appointment
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Booking Form layout */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                    id="booking-form"
                  >
                    {/* Error Alerts */}
                    {error && (
                      <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-rose-700 dark:text-rose-400 flex items-start space-x-2.5 text-left text-xs sm:text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="input-name" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Amit Malhotra"
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-900 dark:text-white font-sans text-sm focus:outline-none transition-all duration-200"
                          id="input-name"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-2">
                        <label htmlFor="input-phone" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-900 dark:text-white font-sans text-sm focus:outline-none transition-all duration-200"
                          id="input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      {/* Email Input */}
                      <div className="space-y-2">
                        <label htmlFor="input-email" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. amit@gmail.com"
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-900 dark:text-white font-sans text-sm focus:outline-none transition-all duration-200"
                          id="input-email"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div className="space-y-2">
                        <label htmlFor="input-service" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Select Service
                        </label>
                        <select
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-750 dark:text-slate-300 font-sans text-sm focus:outline-none transition-all duration-200 cursor-pointer"
                          id="input-service"
                        >
                          <option value="">Choose a treatment...</option>
                          {SERVICES.map((srv) => (
                            <option key={srv.id} value={srv.title} className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">
                              {srv.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      {/* Date Picker */}
                      <div className="space-y-2">
                        <label htmlFor="input-date" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Appointment Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-750 dark:text-slate-300 font-sans text-sm focus:outline-none transition-all duration-200 cursor-pointer"
                            id="input-date"
                          />
                        </div>
                      </div>

                      {/* Time Slot Picker */}
                      <div className="space-y-2">
                        <label htmlFor="input-time" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Preferred Time Slot
                        </label>
                        <select
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-750 dark:text-slate-300 font-sans text-sm focus:outline-none transition-all duration-200 cursor-pointer"
                          id="input-time"
                        >
                          <option value="">Choose a slot...</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot} className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Details Area */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="input-message" className="block font-sans font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Message (Optional)
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please tell us about your requirements or any symptoms..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 focus:border-brand-primary dark:focus:border-sky-500 focus:ring-4 focus:ring-brand-primary/10 dark:focus:ring-sky-500/10 text-slate-900 dark:text-white font-sans text-sm focus:outline-none transition-all duration-200 resize-none"
                        id="input-message"
                      />
                    </div>

                    {/* Submit action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-13 inline-flex items-center justify-center space-x-2 rounded-xl font-sans font-bold text-base text-white bg-gradient-to-r from-brand-primary to-sky-600 hover:from-brand-primary-hover hover:to-sky-700 dark:from-sky-600 dark:to-cyan-600 dark:hover:from-sky-500 dark:hover:to-cyan-500 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/25 disabled:shadow-none hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                        id="submit-btn"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <span>Confirm Appointment</span>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
