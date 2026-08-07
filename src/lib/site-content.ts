import {
  Activity,
  Bath,
  BedDouble,
  HeartHandshake,
  HeartPulse,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Bath,
    title: "Hydro Therapy Care",
    tagline: "Gentle water-based healing and strength building",
    body: "Warm-water sessions help patients improve mobility and reduce muscle stiffness. This low-impact therapy promotes relaxation and strengthens muscles gently in a safe, supervised environment.",
    span: "lg:col-span-2",
    tone: "tone-ocean",
    placeholder: "Hydrotherapy Session",
  },
  {
    icon: HeartPulse,
    title: "Physiotherapy Support",
    tagline: "Improving mobility and muscle strength with care",
    body: "Programmes designed specifically for muscular dystrophy enhance movement, flexibility and strength, reducing discomfort and building day-to-day independence.",
    span: "",
    tone: "tone-coral",
    placeholder: "Physiotherapy Session at IMDRC",
  },
  {
    icon: HeartHandshake,
    title: "Counselling",
    tagline: "Emotional support for patients and families",
    body: "Compassionate counselling helps families cope with emotional challenges, building mental strength and a positive outlook through the entire care journey.",
    span: "",
    tone: "tone-violet",
    placeholder: "Family Counselling Session",
  },
  {
    icon: UtensilsCrossed,
    title: "Healthy Dining Support",
    tagline: "Nutritious meals for better strength",
    body: "Balanced meals suited to patient needs support energy, wellness and comfort during rehabilitation and daily care.",
    span: "",
    tone: "tone-amber",
    placeholder: "Dining Hall at IMDRC Solan",
  },
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    tagline: "Safe, peaceful stay for patients and caregivers",
    body: "Clean, accessible rooms and dormitory facilities give patients and their families proper rest, safety and a supportive space through treatment.",
    span: "",
    tone: "tone-teal",
    placeholder: "Accessible Dormitory Room",
  },
  {
    icon: Sparkles,
    title: "Therapeutic Yoga Sessions",
    tagline: "Gentle practices for strength and inner calm",
    body: "Tailored yoga supports flexibility, breathing and relaxation. Guided movement and mindful practice improve balance and reduce stress.",
    span: "",
    tone: "tone-magenta",
    placeholder: "Therapeutic Yoga Session",
  },
  {
    icon: Stethoscope,
    title: "Regular Health Checkups",
    tagline: "Monitoring progress with expert medical care",
    body: "Routine checkups let our medical team assess health, plan personalised care and offer continuous support to improve quality of life.",
    span: "",
    tone: "tone-ocean",
    placeholder: "Medical Checkup with Doctor",
  },
  {
    icon: Activity,
    title: "Therapeutic Activities",
    tagline: "Encouraging movement, confidence and joy",
    body: "Engaging group activities keep patients active physically and emotionally, improving coordination and bringing positivity into daily life.",
    span: "lg:col-span-2",
    tone: "tone-lime",
    placeholder: "Group Therapeutic Activity Session",
  },
];

export const NEWS = [
  {
    date: "04 Aug 2024",
    badge: "Gold Medal",
    title: "Gold for India: IMDRC-trained participants shine at World Boccia 2024",
    body: "Anjali Devi trained at IMDRC Solan and went on to win a gold medal at the World Boccia Challenger 2024 in Cairo, Egypt.",
    full: "Anjali Devi came to IMDRC Solan with limited access to adaptive sport training. Through the centre's structured Boccia programme — combining physiotherapy, strategy coaching and mental resilience — she developed the precision and confidence to compete internationally. In August 2024 she won gold at the World Boccia Challenger in Cairo, Egypt, bringing home a historic medal for India and proving that with the right support, muscular dystrophy is not a barrier to world-class achievement.",
    placeholder: "Anjali Devi World Boccia Gold Medalist",
  },
  {
    date: "22 Feb 2024",
    badge: "Awareness",
    title: "Governor of HP appoints Vivek Agnihotri to raise muscular dystrophy awareness",
    body: "Filmmaker Vivek Ranjan Agnihotri joins IMDRC as brand ambassador for muscular dystrophy awareness in India.",
    full: "In a ceremony at the Governor's House in Himachal Pradesh, filmmaker Vivek Ranjan Agnihotri was appointed brand ambassador for muscular dystrophy awareness. His role is to amplify IAMD's message across media platforms, encourage early diagnosis, and mobilise public support for the Integrated Muscular Dystrophy Rehabilitation Centre. The partnership aims to bring muscular dystrophy into mainstream conversation and inspire donors, policymakers and families to act.",
    placeholder: "Vivek Agnihotri joins IMDRC as Brand Ambassador",
  },
  {
    date: "18 Feb 2024",
    badge: "Patient Story",
    title: "Vedant's journey: overcoming challenges and pursuing success",
    body: "Vedant's life has been an incredible journey filled with determination and a strong will to keep learning and growing.",
    full: "Vedant was diagnosed with muscular dystrophy at a young age, but he refused to let the condition define his future. At IMDRC Solan he received personalised physiotherapy, assistive-technology guidance and counselling that helped him return to education and independent living. Today he is pursuing his goals with confidence, sharing his story to remind other patients and families that a meaningful, ambitious life is absolutely possible.",
    placeholder: "Vedant at IMDRC Solan",
  },
];

export const PILLARS = [
  {
    title: "Obtaining a diagnosis",
    body: "You or your child has trouble walking or moving, but you are unsure what is causing it? Learn how to obtain a clear diagnosis.",
    placeholder: "Doctor explaining diagnosis to family",
    tone: "tone-ocean",
    to: "/care" as const,
  },
  {
    title: "Managing MD at IMDRC Manav Mandir",
    body: "IMDRC Manav Mandir has state-of-the-art facilities to help you learn how to live successfully with muscular dystrophy.",
    placeholder: "IMDRC Manav Mandir facility",
    tone: "tone-teal",
    to: "/facilities" as const,
  },
  {
    title: "About Muscular Dystrophy",
    body: "Learn about muscular dystrophy, ongoing research and the cures currently being explored worldwide.",
    placeholder: "Awareness session on Muscular Dystrophy",
    tone: "tone-violet",
    to: "/care" as const,
  },
  {
    title: "How you can help us",
    body: "IAMD needs your help to continue its mission. Here are the ways you can help us support those in need.",
    placeholder: "Volunteers supporting IAMD",
    tone: "tone-coral",
    to: "/donate" as const,
  },
];

export const AWARDS = [
  "2004 National Award by President Dr. A.P.J. Abdul Kalam",
  "2010 IBN-7 Award presented by Salman Khan",
  "2012 Mahila Aayog Award by Sushma Swaraj Ji",
  "2012 Mahila Aayog Award by Smriti Irani Ji",
  "2016 Grah Luxmi Award by Kiran Bedi Ji",
  "2017 State Award by Chief Minister Sh. Vir Bhadra Singh Ji",
  "2018 23rd CIDC Award",
  "General Secretary Vipul with Gurudev Sri Ravi Shankar",
];

export const DONORS = [
  "Wagh Bakri Group — Piyush Bhai Desai",
  "State Bank of India",
  "Crystal Crop Protection Pvt Ltd",
  "Star Cement Meghalaya",
  "Somany Ceramics",
  "Shivalik Bimetal Controls Pvt Ltd",
  "Seth Anand Ram Jaipuria",
  "Microtek International",
  "Meridian Medicare Limited",
  "Sri Hari Sewa Trust",
  "Gajanand Trust",
  "GD Build Tech",
];

export const FACILITY_TOUR = [
  "Hydrotherapy Pool at IMDRC",
  "Physiotherapy & Exercise Hall",
  "Accessible Dormitory Room",
  "Dining Hall serving patients",
  "Yoga & Meditation Hall",
  "Facility Walkthrough Video — IMDRC Solan campus",
];

export const FAQS = [
  {
    q: "Who can receive care at IMDRC Solan?",
    a: "Anyone diagnosed with muscular dystrophy or another neuromuscular disorder, along with their caregivers. Our team assesses each patient and builds a personalised rehabilitation plan.",
  },
  {
    q: "How long is a typical rehabilitation stay?",
    a: "Most patients stay between two and four weeks for an intensive integrated cycle covering hydrotherapy, physiotherapy, yoga, counselling and medical review, followed by a home programme.",
  },
  {
    q: "Is accommodation available for family members?",
    a: "Yes. Accessible rooms and dormitory facilities are available for patients along with an accompanying caregiver, with dining support included.",
  },
  {
    q: "Are donations tax deductible?",
    a: "Yes. IAMD is a registered non-profit and donations qualify for exemption under Section 80G of the Income Tax Act. A receipt is issued for every contribution.",
  },
  {
    q: "How do I book a visit?",
    a: "Call the helpline on 01792 292037 or 92180 98999, or use the booking request form on this page. Our coordinator will confirm availability and share a preparation checklist.",
  },
];
