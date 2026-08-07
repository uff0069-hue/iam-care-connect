import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { AWARDS } from "@/lib/site-content";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Achievers & Recognition — Awards Received by IAMD" },
      {
        name: "description",
        content:
          "National and state awards received by the Indian Association of Muscular Dystrophy, including the 2004 National Award from President Dr. A.P.J. Abdul Kalam.",
      },
      { property: "og:title", content: "Achievers & Recognition — IAMD" },
      {
        property: "og:description",
        content:
          "Three decades of national and state recognition for IAMD's work with persons affected by muscular dystrophy.",
      },
    ],
  }),
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievers & recognition"
        title="Three decades of national and state recognition"
        description="Awards received by the association for its work with persons affected by muscular dystrophy — and the achievers who make it meaningful."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ImagePlaceholder
            label="President Kalam presenting National Award, 2004"
            aspect="aspect-[16/9]"
            note="Featured archival award photograph"
          />
          <ImagePlaceholder label="Achievers Poster 2025" aspect="aspect-[16/9]" />
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((award, i) => (
            <li
              key={award}
              className={`lift-card tinted ${["tone-amber", "tone-violet", "tone-ocean", "tone-coral"][i % 4]} rounded-2xl border bg-card p-4`}
            >
              <ImagePlaceholder label={award} aspect="aspect-[4/3]" />
              <p className="mt-4 text-sm font-semibold leading-snug">{award}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
