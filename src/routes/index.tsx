import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Bath,
  BedDouble,
  CalendarCheck,
  HeartHandshake,
  HeartPulse,
  Stethoscope,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { AccessibilityBar } from "@/components/site/AccessibilityBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { DonateForm } from "@/components/site/DonateForm";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IAMD — Muscular Dystrophy Rehabilitation at IMDRC Solan, India",
      },
      {
        name: "description",
        content:
          "Indian Association of Muscular Dystrophy: integrated rehabilitation, hydrotherapy, physiotherapy and family support at IMDRC Solan, Himachal Pradesh since 1992.",
      },
      {
        property: "og:title",
        content: "IAMD — Empowering Lives Affected by Muscular Dystrophy Since 1992",
      },
      {
        property: "og:description",
        content:
          "Hydrotherapy, physiotherapy, counselling and accessible accommodation at the Integrated Muscular Dystrophy Rehabilitation Centre, Solan.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: Bath,
    title: "Hydro Therapy Care",
    tagline: "Gentle water-based healing and strength building",
    body: "Warm-water sessions help patients improve mobility and reduce muscle stiffness. This low-impact therapy promotes relaxation and strengthens muscles gently in a safe, supervised environment.",
    span: "lg:col-span-2",
    placeholder: "Hydrotherapy Session",
  },
  {
    icon: HeartPulse,
    title: "Physiotherapy Support",
    tagline: "Improving mobility and muscle strength with care",
    body: "Programmes designed specifically for muscular dystrophy enhance movement, flexibility and strength, reducing discomfort and building day-to-day independence.",
    span: "",
    placeholder: "Physiotherapy Session at IMDRC",
  },
  {
    icon: HeartHandshake,
    title: "Counselling",
    tagline: "Emotional support for patients and families",
    body: "Compassionate counselling helps families cope with emotional challenges, building mental strength and a positive outlook through the entire care journey.",
    span: "",
    placeholder: "Family Counselling Session",
  },
  {
    icon: UtensilsCrossed,
    title: "Healthy Dining Support",
    tagline: "Nutritious meals for better strength",
    body: "Balanced meals suited to patient needs support energy, wellness and comfort during rehabilitation and daily care.",
    span: "",
    placeholder: "Dining Hall at IMDRC Solan",
  },
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    tagline: "Safe, peaceful stay for patients and caregivers",
    body: "Clean, accessible rooms and dormitory facilities give patients and their families proper rest, safety and a supportive space through treatment.",
    span: "",
    placeholder: "Accessible Dormitory Room",
  },
  {
    icon: Sparkles,
    title: "Therapeutic Yoga Sessions",
    tagline: "Gentle practices for strength and inner calm",
    body: "Tailored yoga supports flexibility, breathing and relaxation. Guided movement and mindful practice improve balance and reduce stress.",
    span: "",
    placeholder: "Therapeutic Yoga Session",
  },
  {
    icon: Stethoscope,
    title: "Regular Health Checkups",
    tagline: "Monitoring progress with expert medical care",
    body: "Routine checkups let our medical team assess health, plan personalised care and offer continuous support to improve quality of life.",
    span: "",
    placeholder: "Medical Checkup with Doctor",
  },
  {
    icon: Activity,
    title: "Therapeutic Activities",
    tagline: "Encouraging movement, confidence and joy",
    body: "Engaging group activities keep patients active physically and emotionally, improving coordination and bringing positivity into daily life.",
    span: "lg:col-span-2",
    placeholder: "Group Therapeutic Activity Session",
  },
];

const NEWS = [
  {
    date: "04 Aug 2024",
    badge: "Gold Medal",
    title: "Gold for India: IMDRC-trained participants shine at World Boccia 2024",
    body: "Anjali Devi trained at IMDRC Solan and went on to win a gold medal at the World Boccia Challenger 2024 in Cairo, Egypt.",
    placeholder: "Anjali Devi World Boccia Gold Medalist",
  },
  {
    date: "22 Feb 2024",
    badge: "Awareness",
    title: "Governor of HP appoints Vivek Agnihotri to raise muscular dystrophy awareness",
    body: "Filmmaker Vivek Ranjan Agnihotri joins IMDRC as brand ambassador for muscular dystrophy awareness in India.",
    placeholder: "Vivek Agnihotri joins IMDRC as Brand Ambassador",
  },
  {
    date: "18 Feb 2024",
    badge: "Patient Story",
    title: "Vedant's journey: overcoming challenges and pursuing success",
    body: "Vedant's life has been an incredible journey filled with determination and a strong will to keep learning and growing.",
    placeholder: "Vedant at IMDRC Solan",
  },
];

const PILLARS = [
  {
    title: "Obtaining a diagnosis",
    body: "You or your child has trouble walking or moving, but you are unsure what is causing it? Learn how to obtain a clear diagnosis.",
    placeholder: "Doctor explaining diagnosis to family",
  },
  {
    title: "Managing MD at IMDRC Manav Mandir",
    body: "IMDRC Manav Mandir has state-of-the-art facilities to help you learn how to live successfully with muscular dystrophy.",
    placeholder: "IMDRC Manav Mandir facility",
  },
  {
    title: "About Muscular Dystrophy",
    body: "Learn about muscular dystrophy, ongoing research and the cures currently being explored worldwide.",
    placeholder: "Awareness session on Muscular Dystrophy",
  },
  {
    title: "How you can help us",
    body: "IAMD needs your help to continue its mission. Here are the ways you can help us support those in need.",
    placeholder: "Volunteers supporting IAMD",
  },
];

const AWARDS = [
  "2004 National Award by President Dr. A.P.J. Abdul Kalam",
  "2010 IBN-7 Award presented by Salman Khan",
  "2012 Mahila Aayog Award by Sushma Swaraj Ji",
  "2012 Mahila Aayog Award by Smriti Irani Ji",
  "2016 Grah Luxmi Award by Kiran Bedi Ji",
  "2017 State Award by Chief Minister Sh. Vir Bhadra Singh Ji",
  "2018 23rd CIDC Award",
  "General Secretary Vipul with Gurudev Sri Ravi Shankar",
];

const DONORS = [
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

const FAQS = [
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

function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <AccessibilityBar />
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="hero-surface" aria-labelledby="hero-heading">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Since 1992 · IMDRC Solan, Himachal Pradesh
              </p>
              <h1
                id="hero-heading"
                className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
              >
                Empowering Lives Affected by Muscular Dystrophy Since 1992
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85">
                Integrated rehabilitation, hydrotherapy and holistic support at the Integrated
                Muscular Dystrophy Rehabilitation Centre (IMDRC), Solan — providing comprehensive
                care and management since 2018.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-card px-6 text-base font-bold text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  Book Patient Rehabilitation Visit
                </a>
                <a
                  href="#donate"
                  className="warm-surface inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  <HeartHandshake className="size-5" aria-hidden="true" />
                  Sponsor a Patient
                </a>
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["30+", "Years of service"],
                  ["10,000+", "Families empowered"],
                  ["100%", "Non-profit"],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-navy-foreground/20 bg-navy-foreground/10 p-4"
                  >
                    <dt className="text-2xl font-extrabold tabular-nums">{stat}</dt>
                    <dd className="mt-1 text-sm text-navy-foreground/80">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-4">
              <ImagePlaceholder
                label="Photo of IMDRC Solan Entrance"
                aspect="aspect-[16/10]"
                note="Hero slider image 1 from iamd.in"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <ImagePlaceholder label="Hydrotherapy Pool" aspect="aspect-[4/3]" />
                <ImagePlaceholder label="Patients in Physiotherapy Hall" aspect="aspect-[4/3]" />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImagePlaceholder
              label="IAMD founders and patients at Manav Mandir"
              aspect="aspect-[4/3]"
            />
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">About IAMD</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Since 1992, IAMD has been transforming the lives of families affected by muscular
                dystrophy and other neuromuscular disorders. In 2018, IAMD established the
                Integrated Muscular Dystrophy Rehabilitation Centre (IMDRC) in Solan, Himachal
                Pradesh, where patients receive comprehensive muscular dystrophy treatment, care and
                management under one roof.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Patient-led organisation",
                  "Multi-disciplinary care team",
                  "Residential rehabilitation cycles",
                  "Awareness and advocacy across India",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-border bg-surface p-4 text-sm font-semibold"
                  >
                    <span
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-success"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES BENTO */}
        <section id="care" className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                An integrated programme of therapies, medical review and everyday support — designed
                around the realities of living with muscular dystrophy.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article
                  key={service.title}
                  className={`lift-card flex flex-col rounded-2xl border border-border bg-card p-6 ${service.span}`}
                >
                  <ImagePlaceholder label={service.placeholder} aspect="aspect-[16/9]" />
                  <span className="mt-6 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-success">{service.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITY TOUR */}
        <section id="facilities" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Facility tour — IMDRC, Solan
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Walk through the centre: the hydrotherapy pool, therapy halls, accessible dormitory
                rooms and the dining hall set in the hills of Himachal Pradesh.
              </p>
            </div>
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a visit
            </a>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Hydrotherapy Pool at IMDRC",
              "Physiotherapy & Exercise Hall",
              "Accessible Dormitory Room",
              "Dining Hall serving patients",
              "Yoga & Meditation Hall",
              "Facility Walkthrough Video — IMDRC Solan campus",
            ].map((label) => (
              <ImagePlaceholder key={label} label={label} aspect="aspect-[4/3]" />
            ))}
          </div>
        </section>

        {/* IMPACT / NEWS */}
        <section id="stories" className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Latest news &amp; success stories</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Achievements from the IAMD community — in sport, advocacy and everyday independence.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {NEWS.map((item) => (
                <article
                  key={item.title}
                  className="lift-card flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <ImagePlaceholder label={item.placeholder} aspect="aspect-[16/9]" />
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-success/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-success">
                      {item.badge}
                    </span>
                    <time className="text-xs font-semibold text-muted-foreground">{item.date}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold leading-snug">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <a
                    href="#stories"
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-primary underline-offset-4 hover:underline"
                  >
                    Continue reading
                  </a>
                </article>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <article
                  key={p.title}
                  className="lift-card flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <ImagePlaceholder label={p.placeholder} aspect="aspect-[16/9]" />
                  <h3 className="mt-6 text-base font-extrabold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <a
                    href="#care"
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-primary underline-offset-4 hover:underline"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AWARDS / ACHIEVERS */}
        <section id="awards" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Achievers &amp; recognition</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Three decades of national and state recognition for the association&apos;s work with
            persons affected by muscular dystrophy.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <ImagePlaceholder
              label="President Kalam presenting National Award, 2004"
              aspect="aspect-[16/9]"
              note="Featured archival award photograph"
            />
            <ImagePlaceholder label="Achievers Poster 2025" aspect="aspect-[16/9]" />
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((award) => (
              <li key={award} className="lift-card rounded-2xl border border-border bg-card p-4">
                <ImagePlaceholder label={award} aspect="aspect-[4/3]" />
                <p className="mt-4 text-sm font-semibold leading-snug">{award}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* DONATE */}
        <section id="donate" className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
                80G tax exemption
              </span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                One-click donation, instant receipt
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose an amount, see exactly what it funds, and get your Section 80G receipt
                immediately.
              </p>
            </div>
            <div className="mt-10">
              <DonateForm />
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section id="book" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Book a rehabilitation visit</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Share a few details and our coordinator at IMDRC Solan will call you back with
                availability, costs and a preparation checklist. You can also reach us directly on{" "}
                <a className="font-bold text-primary underline" href="tel:+911792292037">
                  01792 292037
                </a>
                .
              </p>
              <div className="mt-8">
                <ImagePlaceholder
                  label="Coordinator welcoming a patient at IMDRC reception"
                  aspect="aspect-[16/9]"
                />
              </div>
            </div>

            <form className="rounded-2xl border border-border bg-card p-6 lift-card sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="visit-name" className="block text-sm font-semibold">
                    Patient name
                  </label>
                  <input
                    id="visit-name"
                    required
                    autoComplete="name"
                    className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="visit-phone" className="block text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    id="visit-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="visit-date" className="block text-sm font-semibold">
                    Preferred date
                  </label>
                  <input
                    id="visit-date"
                    type="date"
                    className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="visit-notes" className="block text-sm font-semibold">
                    Diagnosis and support needed
                  </label>
                  <textarea
                    id="visit-notes"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="size-5" aria-hidden="true" />
                Request a visit
              </button>
            </form>
          </div>
        </section>

        {/* DONORS */}
        <section id="donors" className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Our donors</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Institutions, trusts and individuals whose generosity keeps IMDRC running.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DONORS.map((donor) => (
                <li key={donor}>
                  <ImagePlaceholder label={`Donor logo — ${donor}`} aspect="aspect-[3/2]" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-border bg-card p-6 lift-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold">
                  {faq.q}
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-lg font-black text-primary transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
