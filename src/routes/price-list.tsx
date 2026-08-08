import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { PRICE_LIST } from "@/lib/site-content";

export const Route = createFileRoute("/price-list")({
  head: () => ({
    meta: [
      { title: "Price List — Stay & Therapy Charges at IMDRC Solan | IAMD" },
      {
        name: "description",
        content:
          "Transparent, subsidised charges for accommodation, meals, hydrotherapy, physiotherapy, yoga and medical assessment at IMDRC Solan, Himachal Pradesh.",
      },
      { property: "og:title", content: "Price List — IMDRC Solan" },
      {
        property: "og:description",
        content:
          "Subsidised rehabilitation charges at IMDRC Solan. No patient is turned away for inability to pay.",
      },
    ],
  }),
  component: PriceListPage,
});

function PriceListPage() {
  return (
    <>
      <PageHeader
        eyebrow="Price list"
        title="Transparent, heavily subsidised charges"
        description="Donations fund the majority of the real cost of care. The charges below are indicative for the 2026 season and confirmed by our coordinator at the time of booking."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="lift-card overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Accommodation and therapy charges at IMDRC Solan
            </caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-5 py-4 text-xs font-extrabold uppercase tracking-widest">
                  Service
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-extrabold uppercase tracking-widest">
                  Contribution
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICE_LIST.map((row) => (
                <tr key={row.item} className="border-t border-border align-top">
                  <th scope="row" className="px-5 py-4 font-semibold">
                    {row.item}
                    <span className="mt-1 block text-xs font-normal text-muted-foreground">
                      {row.note}
                    </span>
                  </th>
                  <td className="whitespace-nowrap px-5 py-4 font-extrabold tabular-nums text-primary">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="lift-card tone-amber tinted rounded-2xl border bg-card p-6">
            <h2 className="text-lg font-extrabold">Nobody is turned away</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Families who cannot afford these contributions are supported through our sponsorship
              fund. Tell the coordinator during registration — it changes nothing about the care
              received.
            </p>
          </article>
          <article className="lift-card tone-coral tinted rounded-2xl border bg-card p-6">
            <h2 className="text-lg font-extrabold">Sponsor a patient instead</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A donation of ₹14,000 funds one complete two-week rehabilitation cycle for a patient
              who cannot pay. All donations qualify for Section 80G exemption.
            </p>
            <Link
              to="/donate"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground"
            >
              Donate now
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
