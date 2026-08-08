import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/diagnosis")({
  head: () => ({
    meta: [
      { title: "Get a Diagnosis — Early Signs of Muscular Dystrophy | IAMD" },
      {
        name: "description",
        content:
          "Frequent falls, difficulty climbing stairs or rising from the floor? Learn the early signs of muscular dystrophy and the step-by-step route to a confirmed diagnosis in India.",
      },
      { property: "og:title", content: "Get a Diagnosis — IAMD" },
      {
        property: "og:description",
        content:
          "Symptom checklist and the diagnostic pathway — clinical review, CPK blood test, genetic testing and specialist referral.",
      },
    ],
  }),
  component: DiagnosisPage,
});

const SIGNS = [
  "Frequent falls or tripping without an obvious cause",
  "Difficulty climbing stairs or rising from the floor",
  "Using hands on the thighs to stand up (Gowers' sign)",
  "Walking on the toes or with a waddling gait",
  "Enlarged, firm calf muscles",
  "Delayed walking or speech milestones in a child",
  "Trouble lifting arms above the head",
  "Muscle pain, cramps or unusual fatigue",
];

const STEPS = [
  [
    "1",
    "Talk to a doctor early",
    "Describe the pattern of weakness, when it started and whether anyone in the family has similar symptoms.",
  ],
  [
    "2",
    "CPK blood test",
    "A raised creatine phosphokinase level is a strong early indicator of muscle damage and is inexpensive and widely available.",
  ],
  [
    "3",
    "Neurologist referral",
    "A neurologist confirms the clinical pattern and may order EMG, nerve conduction or an MRI of muscle.",
  ],
  [
    "4",
    "Genetic testing",
    "Genetic confirmation identifies the exact type and mutation, which matters for prognosis, family counselling and trial eligibility.",
  ],
  [
    "5",
    "Build a care plan",
    "Register with IAMD so rehabilitation, respiratory and cardiac monitoring, and family counselling start without delay.",
  ],
];

function DiagnosisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Obtaining a diagnosis"
        title="You or your child has trouble moving — what now?"
        description="Muscular dystrophy is often mistaken for clumsiness or slow development for years. A clear diagnosis unlocks the right therapy, the right monitoring and access to schemes and research."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Early signs to look for</h2>
            <ul className="mt-6 grid gap-3">
              {SIGNS.map((sign) => (
                <li
                  key={sign}
                  className="lift-card tone-ocean tinted rounded-xl border bg-card px-4 py-3 text-sm font-semibold"
                >
                  {sign}
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder
            label="Doctor explaining diagnosis to a family"
            aspect="aspect-[4/3]"
            note="Diagnosis guidance image from iamd.in"
          />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="path-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="path-heading" className="text-3xl font-extrabold sm:text-4xl">
            The diagnostic <span className="rainbow-text">pathway</span>
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Register a patient
            </Link>
            <a
              href="tel:+911792292037"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-primary px-6 text-base font-bold text-primary"
            >
              Call the helpline: 01792 292037
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
