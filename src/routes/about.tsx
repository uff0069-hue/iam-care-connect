import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IAMD — Patient-Led Since 1992 | Indian Association of Muscular Dystrophy" },
      {
        name: "description",
        content:
          "IAMD is a patient-led organisation founded in 1992 that built IMDRC Solan in 2018 to deliver integrated muscular dystrophy rehabilitation across India.",
      },
      { property: "og:title", content: "About IAMD — A Patient-Led Movement Since 1992" },
      {
        property: "og:description",
        content:
          "Our story, mission and multi-disciplinary team behind the Integrated Muscular Dystrophy Rehabilitation Centre in Solan, Himachal Pradesh.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    tone: "tone-ocean",
    title: "Patient-led",
    body: "Founded and steered by people living with muscular dystrophy and their families — decisions start from lived experience.",
  },
  {
    tone: "tone-teal",
    title: "Integrated",
    body: "Therapy, medical review, nutrition, counselling and accessible accommodation delivered together, not in fragments.",
  },
  {
    tone: "tone-violet",
    title: "Dignity first",
    body: "Care is designed to protect independence, privacy and confidence at every stage of the condition.",
  },
  {
    tone: "tone-coral",
    title: "Advocacy",
    body: "Awareness drives, policy engagement and school outreach so families get an earlier diagnosis and better support.",
  },
];

const TIMELINE = [
  ["1992", "IAMD founded as a patient-led association for families affected by muscular dystrophy."],
  ["2004", "National Award received from President Dr. A.P.J. Abdul Kalam."],
  ["2018", "IMDRC opens at Manav Mandir, Solan — India's integrated MD rehabilitation centre."],
  ["2024", "IMDRC-trained athletes win international Boccia medals for India."],
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A patient-led movement transforming muscular dystrophy care in India"
        description="Since 1992, IAMD has supported families affected by muscular dystrophy and other neuromuscular disorders — culminating in the Integrated Muscular Dystrophy Rehabilitation Centre at Solan."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImagePlaceholder
            label="IAMD founders and patients at Manav Mandir"
            aspect="aspect-[4/3]"
          />
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Our story</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Since 1992, IAMD has been transforming the lives of families affected by muscular
              dystrophy and other neuromuscular disorders. In 2018, IAMD established the Integrated
              Muscular Dystrophy Rehabilitation Centre (IMDRC) in Solan, Himachal Pradesh, where
              patients receive comprehensive muscular dystrophy treatment, care and management under
              one roof.
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
                    className="rainbow-bar mt-1.5 size-2 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="values-heading" className="text-3xl font-extrabold sm:text-4xl">
            What we <span className="rainbow-text">stand for</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className={`lift-card tinted ${v.tone} rounded-2xl border bg-card p-6`}
              >
                <span className="tone-bar block h-1 w-12 rounded-full" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-extrabold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-3xl font-extrabold sm:text-4xl">
          Milestones
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map(([year, text]) => (
            <li
              key={year}
              className="lift-card tone-violet tinted rounded-2xl border bg-card p-6"
            >
              <span className="tone-chip inline-flex rounded-full px-3 py-1 text-xs font-black tracking-widest">
                {year}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/facilities"
            className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Tour IMDRC Solan
          </Link>
          <Link
            to="/donate"
            className="warm-surface inline-flex min-h-12 items-center rounded-full px-6 text-base font-bold transition-transform hover:-translate-y-0.5"
          >
            Support the mission
          </Link>
        </div>
      </section>
    </>
  );
}
