import { ServiceItem, Doctor, Testimonial, FAQItem } from "./types";

export const IMAGES = {
  heroDentist: "/src/assets/images/hero_dentist_image_1782484461850.jpg",
  aboutEquipment: "/src/assets/images/about_dental_equipment_1782484480039.jpg",
  doctorRahul: "/src/assets/images/doctor_rahul_sharma_1782484495226.jpg",
  doctorPriya: "/src/assets/images/doctor_priya_sharma_1782484515081.jpg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to keep your gums healthy and breath fresh.",
    iconName: "Brush",
    details: [
      "Plaque and tartar removal from hard-to-reach areas.",
      "Stain removal and polishing for a brighter smile.",
      "Periodontal health screening and gum measurements.",
      "Personalized oral hygiene instructions and brush recommendations."
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal",
    description: "Expert endodontic treatment to save your natural teeth with minimal discomfort.",
    iconName: "Activity",
    details: [
      "High-precision cleaning of the infected pulp chamber.",
      "Using local computerized anesthesia for a completely pain-free process.",
      "Sealing the canal with biocompatible material.",
      "Reinforcing the structure with a custom dental crown."
    ]
  },
  {
    id: "dental-braces",
    title: "Dental Braces",
    description: "Metal and ceramic braces or clear aligners for a perfectly aligned smile.",
    iconName: "Grid",
    details: [
      "Comprehensive orthodontic assessment with 3D scanning.",
      "Traditional metal braces, subtle ceramic options, and clear Invisalign aligners.",
      "Custom treatment plan for overcrowding, gaps, and bite issues.",
      "Post-orthodontic retainers for permanent stability."
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look and feel completely natural.",
    iconName: "PlusSquare",
    details: [
      "Titanium post insertion mirroring a natural tooth root.",
      "Biocompatible osseointegration for ultimate structural stability.",
      "Custom-crafted, color-matched porcelain crown overlay.",
      "Lifetime durability with proper oral care."
    ]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Brighten your smile by several shades in just one professional session.",
    iconName: "Sparkles",
    details: [
      "In-office laser-assisted whitening under expert supervision.",
      "Clinical grade peroxide gels that minimize sensitivity.",
      "Customized home bleaching kits for touch-ups.",
      "Up to 8 shades lighter teeth in 45-60 minutes."
    ]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle dental care designed specifically for children and teenagers.",
    iconName: "Smile",
    details: [
      "Fun, child-friendly environment to eliminate dental anxiety.",
      "Early cavity detection and dental sealants for tooth protection.",
      "Monitoring jaw growth and early interceptive orthodontics.",
      "Gentle extractions of primary teeth and emergency care."
    ]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth",
    description: "Safe and comfortable extraction of impacted or troublesome wisdom teeth.",
    iconName: "Flame",
    details: [
      "Panoramic 3D imaging to map the tooth root and dental nerve path.",
      "Minimally invasive oral surgery designed to minimize swelling.",
      "Sedation options available for absolute relaxation.",
      "Comprehensive post-operative follow-up and care instructions."
    ]
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description: "A complete aesthetic transformation using veneers and aesthetic dentistry.",
    iconName: "Heart",
    details: [
      "Digital Smile Design (DSD) to preview your ideal smile before starting.",
      "Ultra-thin porcelain veneers, composite bonding, and gum contouring.",
      "Tailored cosmetic plan balancing facial aesthetics and symmetry.",
      "Restorative-cosmetic hybrid treatments for maximum beauty."
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-rahul",
    name: "Dr. Rahul Sharma",
    role: "Lead Surgeon & Founder",
    specialty: "Implantology & Oral Surgery",
    image: IMAGES.doctorRahul,
    experience: "15+ Years",
    bio: "Specializing in full-mouth rehabilitation and complex dental implants. Dr. Rahul completed his residency in Advanced Implant Dentistry and has successfully placed over 4,000 implants."
  },
  {
    id: "dr-priya",
    name: "Dr. Priya Sharma",
    role: "Orthodontist",
    specialty: "Cosmetic & Pediatric Orthodontics",
    image: IMAGES.doctorPriya,
    experience: "11+ Years",
    bio: "Expert in invisible aligners (Invisalign certified) and pediatric orthodontics for all ages. Dr. Priya is dedicated to designing functional, beautifully symmetric smiles with a gentle touch."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Amit Malhotra",
    role: "Mumbai Resident",
    content: "Truly the best dental experience I've ever had. Dr. Rahul is very professional and the pain-free treatment was actually pain-free!",
    rating: 5,
    avatar: "AM"
  },
  {
    id: "test-2",
    name: "Sneha Kapoor",
    role: "IT Professional",
    content: "I got my Invisalign treatment done from Dr. Priya. The results are amazing and the staff was very cooperative throughout the process.",
    rating: 5,
    avatar: "SK"
  },
  {
    id: "test-3",
    name: "Rajesh Varma",
    role: "Parent",
    content: "Very clean and hygienic clinic. Highly recommend SmileCare for families. My kids are actually happy to visit the dentist now!",
    rating: 5,
    avatar: "RV"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is the treatment really pain-free?",
    answer: "Yes, we use advanced laser technology, micro-fine instruments, and computer-controlled anesthesia systems that significantly minimize discomfort during procedures. Most patients report feeling only light vibrations or nothing at all."
  },
  {
    id: "faq-2",
    question: "How long do dental implants last?",
    answer: "With proper oral hygiene and regular professional cleanings, dental implants can last a lifetime! The titanium post fuses permanently with your jawbone, acting as a highly durable natural tooth root."
  },
  {
    id: "faq-3",
    question: "Do you accept insurance?",
    answer: "We partner with leading corporate medical insurances and dental benefit providers in India. Contact our front desk with your policy details, and we will happily assist you in checking your coverage and filing claims."
  },
  {
    id: "faq-4",
    question: "How often should I visit the dentist?",
    answer: "We highly recommend a professional check-up and teeth cleaning every six months. Regular visits prevent plaque build-up, catch early signs of decay, and keep your gums healthy, saving you from complex treatments later."
  },
  {
    id: "faq-5",
    question: "What is the cost of Invisalign?",
    answer: "Invisalign pricing is tailored specifically to your alignment complexity and treatment duration. Typically, a custom consultation and detailed 3D scan are used to provide an exact cost, which we offer with convenient monthly installment plans (EMIs)."
  }
];
