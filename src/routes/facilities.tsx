import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { FACILITY_TOUR } from "@/lib/site-content";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Booking — IMDRC Solan | IAMD" },
      {
        name: "description",
        content:
          "Tour IMDRC Solan: hydrotherapy pool, physiotherapy halls, accessible dormitory rooms, dining hall and yoga hall in the hills of Himachal Pradesh.",
      },
      { property: "og:title", content: "Facilities at IMDRC Solan — IAMD" },
      {
        property: "og:description",
        content:
          "Accessible residential rehabilitation facilities for muscular dystrophy patients and their caregivers.",
      },
    ],
  }),
  component: FacilitiesPage,
});

const AMENITIES = [
  ["tone-ocean", "Hydrotherapy pool", "Warm-water pool with hoist access and trained supervision."],
  ["tone-teal", "Therapy halls", "Physiotherapy, exercise and yoga halls with adaptive equipment."],
  ["tone-amber", "Dining hall", "Nutrition-planned meals served on site for patients and carers."],
  ["tone-violet", "Accessible rooms", "Step-free rooms and dormitories with attached facilities."],
];

function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities & booking"
        title="Facility tour — IMDRC, Solan"
        description="Walk through the centre: the hydrotherapy pool, therapy halls, accessible dormitory rooms and the dining hall, set in the hills of Himachal Pradesh."
      >
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center rounded-full bg-card px-6 text-base font-bold text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          Book a visit
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="tour-heading">
        <h2 id="tour-heading" className="text-3xl font-extrabold sm:text-4xl">
          Inside the <span className="rainbow-text">centre</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITY_TOUR.map((label) => (
            <ImagePlaceholder key={label} label={label} aspect="aspect-[4/3]" />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="amenities-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="amenities-heading" className="text-3xl font-extrabold sm:text-4xl">
            Amenities
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.map(([tone, title, body]) => (
              <article
                key={title}
                className={`lift-card tinted ${tone} rounded-2xl border bg-card p-6`}
              >
                <span className="tone-bar block h-1 w-12 rounded-full" aria-hidden="true" />
                <h3 className="mt-4 text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
