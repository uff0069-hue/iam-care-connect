import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { TEAM } from "@/lib/site-content";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — People Behind IAMD & IMDRC Solan" },
      {
        name: "description",
        content:
          "Meet the founders, clinicians, counsellors, care staff and volunteers who run the Integrated Muscular Dystrophy Rehabilitation Centre at Manav Mandir, Solan.",
      },
      { property: "og:title", content: "Our Team — IAMD" },
      {
        property: "og:description",
        content:
          "The patient-led leadership, clinical team and volunteers behind three decades of muscular dystrophy care in India.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="A patient-led organisation, run by families and clinicians together"
        description="IAMD was founded by families living with muscular dystrophy. Today a small core team, a clinical unit and a wide circle of volunteers keep IMDRC Solan running every day of the year."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className={`lift-card tinted ${member.tone} flex flex-col rounded-2xl border bg-card p-6`}
            >
              <ImagePlaceholder label={member.placeholder} aspect="aspect-[4/3]" />
              <h2 className="mt-6 text-lg font-extrabold">{member.name}</h2>
              <p className="tone-text mt-1 text-sm font-bold uppercase tracking-widest">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
