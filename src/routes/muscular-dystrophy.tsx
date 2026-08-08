import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { MD_TYPES } from "@/lib/site-content";

export const Route = createFileRoute("/muscular-dystrophy")({
  head: () => ({
    meta: [
      { title: "What is Muscular Dystrophy? Types, Symptoms & Care in India" },
      {
        name: "description",
        content:
          "Muscular dystrophy explained: what causes progressive muscle weakness, the main types including Duchenne and Becker, common symptoms, and how care works in India.",
      },
      { property: "og:title", content: "What is Muscular Dystrophy? — IAMD" },
      {
        property: "og:description",
        content:
          "A plain-language guide to muscular dystrophy, its types and symptoms, from the Indian Association of Muscular Dystrophy.",
      },
    ],
  }),
  component: MDPage,
});

function MDPage() {
  return (
    <>
      <PageHeader
        eyebrow="Muscular dystrophy"
        title="What is muscular dystrophy?"
        description="Muscular dystrophy is a group of inherited conditions in which muscle fibres gradually weaken and are lost. It is progressive, it is not contagious, and with the right rehabilitation people live full, ambitious lives."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Most forms of muscular dystrophy are caused by changes in genes responsible for
              building and maintaining healthy muscle. Without those proteins, muscle fibres are
              damaged during ordinary use and are slowly replaced by fat and connective tissue.
            </p>
            <p>
              Weakness usually begins in specific muscle groups depending on the type — the hips and
              thighs in Duchenne, the shoulders and face in FSHD, the hands and forearms in myotonic
              dystrophy. Because it is progressive, the aim of care is to preserve movement, protect
              joints and the spine, support breathing and heart function, and keep the person
              independent for as long as possible.
            </p>
            <p>
              There is presently no cure for most forms. There is, however, a great deal that
              changes outcomes: early diagnosis, structured physiotherapy and hydrotherapy, weight
              and nutrition management, assistive devices, respiratory and cardiac monitoring,
              counselling and education support. That combination is exactly what IMDRC Solan
              provides.
            </p>
          </div>
          <ImagePlaceholder
            label="Awareness session explaining muscular dystrophy"
            aspect="aspect-[4/3]"
            note="Awareness image from iamd.in"
          />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="types-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="types-heading" className="text-3xl font-extrabold sm:text-4xl">
            Main <span className="rainbow-text">types</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MD_TYPES.map((type) => (
              <article
                key={type.name}
                className={`lift-card tinted ${type.tone} rounded-2xl border bg-card p-6`}
              >
                <span className="tone-bar block h-1 w-12 rounded-full" aria-hidden="true" />
                <h3 className="mt-4 text-base font-extrabold">{type.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{type.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/diagnosis"
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              How to get a diagnosis
            </Link>
            <Link
              to="/care"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-primary px-6 text-base font-bold text-primary"
            >
              Therapy & services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
