import { createFileRoute } from "@tanstack/react-router";
import { DonateForm } from "@/components/site/DonateForm";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { DONORS } from "@/lib/site-content";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to IAMD — 80G Tax Exempt Giving for MD Patients" },
      {
        name: "description",
        content:
          "Sponsor a muscular dystrophy patient's rehabilitation at IMDRC Solan. One-click donation with an instant Section 80G tax exemption receipt.",
      },
      { property: "og:title", content: "Donate to IAMD — Instant 80G Receipt" },
      {
        property: "og:description",
        content:
          "Choose an amount, see exactly what it funds, and receive your Section 80G receipt immediately.",
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="80G tax exemption"
        title="One-click donation, instant receipt"
        description="Choose an amount, see exactly what it funds, and get your Section 80G receipt immediately. 100% of public donations fund patient rehabilitation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <DonateForm />
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="donors-heading">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="donors-heading" className="text-3xl font-extrabold sm:text-4xl">
            Our <span className="rainbow-text">donors</span>
          </h2>
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
    </>
  );
}
