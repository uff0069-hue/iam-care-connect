import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, HeartHandshake, IndianRupee, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { DONORS } from "@/lib/site-content";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Us — Ways to Help IAMD & IMDRC Solan" },
      {
        name: "description",
        content:
          "Sponsor a patient's rehabilitation, fund equipment, contribute in kind, give through CSR or volunteer your time. Every rupee is eligible for Section 80G exemption.",
      },
      { property: "og:title", content: "Support Us — IAMD" },
      {
        property: "og:description",
        content:
          "Five ways to support muscular dystrophy patients in India: sponsorship, equipment, CSR partnerships, in-kind giving and volunteering.",
      },
    ],
  }),
  component: SupportPage,
});

const WAYS = [
  {
    icon: IndianRupee,
    tone: "tone-coral",
    title: "Sponsor a patient",
    body: "₹14,000 funds one complete two-week rehabilitation cycle — stay, meals, hydrotherapy, physiotherapy, yoga, counselling and medical review.",
  },
  {
    icon: HeartHandshake,
    tone: "tone-amber",
    title: "Fund equipment",
    body: "Wheelchairs, standing frames, splints, hydrotherapy hoists and physiotherapy equipment are all funded entirely by donors.",
  },
  {
    icon: Users,
    tone: "tone-ocean",
    title: "CSR partnerships",
    body: "Corporates fund entire wings, therapy programmes, patient camps and transport. We provide full utilisation reporting for CSR compliance.",
  },
  {
    icon: HandHeart,
    tone: "tone-teal",
    title: "In-kind giving",
    body: "Groceries, linen, medical consumables, computers and vehicles reduce the running cost of the centre directly.",
  },
];

function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support us"
        title="IAMD needs your help to continue its mission"
        description="100% of public donations go to patient rehabilitation at IMDRC Solan. Every contribution is eligible for tax exemption under Section 80G of the Income Tax Act."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/donate"
            className="inline-flex min-h-12 items-center rounded-full bg-card px-6 text-base font-bold text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            Donate now
          </Link>
          <Link
            to="/volunteer"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-navy-foreground/40 px-6 text-base font-bold"
          >
            Volunteer with us
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="ways-heading">
        <h2 id="ways-heading" className="text-3xl font-extrabold sm:text-4xl">
          Ways to <span className="rainbow-text">give</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WAYS.map((way) => (
            <article
              key={way.title}
              className={`lift-card tinted ${way.tone} rounded-2xl border bg-card p-6`}
            >
              <span className="tone-chip inline-flex size-11 items-center justify-center rounded-xl">
                <way.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-extrabold">{way.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{way.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="donors-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="donors-heading" className="text-3xl font-extrabold sm:text-4xl">
            Our donors
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Institutions, trusts and individuals whose generosity keeps IMDRC running — including the
            Wagh Bakri Group (Piyush Bhai Desai).
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
    </>
  );
}
