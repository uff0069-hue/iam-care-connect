import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Clinical Trials Update — Muscular Dystrophy | IAMD" },
      {
        name: "description",
        content:
          "Where muscular dystrophy research stands in 2026: gene therapy, exon skipping, steroid protocols and registries, and what is realistically available to Indian families.",
      },
      { property: "og:title", content: "Research & Clinical Trials — IAMD" },
      {
        property: "og:description",
        content:
          "Plain-language updates on gene therapy, exon skipping and clinical trials, plus how Indian patients can join a registry.",
      },
    ],
  }),
  component: ResearchPage,
});

const AREAS = [
  {
    tone: "tone-ocean",
    title: "Gene therapy",
    body: "Micro-dystrophin gene transfer using viral vectors has moved from laboratories into late-stage trials internationally. Access remains limited and costs are very high, but the direction of travel is real.",
  },
  {
    tone: "tone-teal",
    title: "Exon skipping & antisense drugs",
    body: "Mutation-specific therapies can partially restore dystrophin production for some Duchenne patients. Eligibility depends on the exact mutation, which is why genetic confirmation matters.",
  },
  {
    tone: "tone-amber",
    title: "Steroid and cardiac protocols",
    body: "Refined corticosteroid regimens plus early cardiac and respiratory management have added years of independent function — this is available in India today.",
  },
  {
    tone: "tone-violet",
    title: "Rehabilitation science",
    body: "Evidence continues to build for hydrotherapy, stretching protocols, night splinting, weight management and paced exercise in slowing contractures and preserving function.",
  },
  {
    tone: "tone-coral",
    title: "Patient registries",
    body: "A well-maintained registry connects Indian patients to trials as they open. IAMD encourages every registered family to record their genetic diagnosis.",
  },
  {
    tone: "tone-lime",
    title: "Assistive technology",
    body: "Powered wheelchairs, standing frames, cough-assist devices and non-invasive ventilation dramatically improve quality of life and are increasingly affordable.",
  },
];

function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research & clinical trials"
        title="Where the science stands — and what it means for your family"
        description="Research into muscular dystrophy is moving faster than at any point in the last thirty years. This page separates what is available today in India from what is still in trials."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePlaceholder
            label="Research and clinical trials briefing at IMDRC"
            aspect="aspect-[4/3]"
            note="Research update image from iamd.in"
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              IAMD is not a research laboratory. Our role is to help families understand credible
              science, avoid unproven and expensive "cures", and connect with genuine trials and
              specialist centres.
            </p>
            <p>
              If a treatment is offered to you with guarantees of reversal or cure, ask for
              published peer-reviewed evidence and speak to our helpline before paying anything.
              Stem-cell clinics marketing muscular dystrophy cures in India are not supported by
              current evidence.
            </p>
            <p>
              For families with a confirmed genetic diagnosis, we can point you towards academic
              neuromuscular centres that maintain trial registries and offer genetic counselling.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <article
              key={area.title}
              className={`lift-card tinted ${area.tone} rounded-2xl border bg-card p-6`}
            >
              <span className="tone-bar block h-1 w-12 rounded-full" aria-hidden="true" />
              <h2 className="mt-4 text-base font-extrabold">{area.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
