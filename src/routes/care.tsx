import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES } from "@/lib/site-content";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "Muscular Dystrophy Care & Services — IAMD, IMDRC Solan" },
      {
        name: "description",
        content:
          "Hydrotherapy, physiotherapy, therapeutic yoga, counselling, nutrition and regular health checkups: the integrated muscular dystrophy care programme at IMDRC Solan.",
      },
      { property: "og:title", content: "Muscular Dystrophy Care & Services at IMDRC Solan" },
      {
        property: "og:description",
        content:
          "An integrated eight-part rehabilitation programme for muscular dystrophy patients and their caregivers.",
      },
    ],
  }),
  component: CarePage,
});

const STEPS = [
  ["1", "Enquiry & helpline call", "Speak to a coordinator about symptoms, diagnosis and needs."],
  ["2", "Assessment at IMDRC", "Medical review and functional assessment on arrival."],
  ["3", "Integrated therapy cycle", "Two to four weeks of hydro, physio, yoga and counselling."],
  ["4", "Home programme", "A personalised plan, caregiver training and follow-up reviews."],
];

function CarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Muscular dystrophy care"
        title="Integrated therapy, medical review and everyday support"
        description="Muscular dystrophy needs more than one specialist. At IMDRC Solan, eight services work together so patients gain mobility, strength and confidence — and families gain a plan."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-extrabold sm:text-4xl">
          Our <span className="rainbow-text">services</span>
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`lift-card tinted ${service.tone} ${service.span} flex flex-col rounded-2xl border bg-card p-6`}
            >
              <ImagePlaceholder label={service.placeholder} aspect="aspect-[16/9]" />
              <span className="tone-chip mt-6 inline-flex size-11 items-center justify-center rounded-xl">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{service.title}</h3>
              <p className="tone-text mt-1 text-sm font-semibold">{service.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="journey-heading" className="text-3xl font-extrabold sm:text-4xl">
            The patient journey
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([n, title, body]) => (
              <li key={n} className="lift-card tone-teal tinted rounded-2xl border bg-card p-6">
                <span className="tone-chip grid size-10 place-items-center rounded-full text-base font-black">
                  {n}
                </span>
                <h3 className="mt-4 text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>

          <Link
            to="/contact"
            className="mt-10 inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start with a booking request
          </Link>
        </div>
      </section>
    </>
  );
}
