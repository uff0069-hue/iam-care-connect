import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQS } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Visit — IMDRC Solan | IAMD" },
      {
        name: "description",
        content:
          "Request a rehabilitation visit at IMDRC Solan or call the IAMD helpline on 01792 292037. Address, email and frequently asked questions.",
      },
      { property: "og:title", content: "Contact IAMD & Book a Rehabilitation Visit" },
      {
        property: "og:description",
        content:
          "Share a few details and our coordinator at IMDRC Solan will call back with availability, costs and a preparation checklist.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & booking"
        title="Book a rehabilitation visit"
        description="Share a few details and our coordinator at IMDRC Solan will call you back with availability, costs and a preparation checklist."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="lift-card tone-ocean tinted rounded-2xl border bg-card p-5">
                <Phone className="tone-text size-5" aria-hidden="true" />
                <h2 className="mt-3 text-sm font-extrabold uppercase tracking-widest">Helpline</h2>
                <a className="mt-2 block font-bold" href="tel:+911792292037">
                  01792 292037
                </a>
                <a className="block font-bold" href="tel:+919218098999">
                  92180 98999
                </a>
              </li>
              <li className="lift-card tone-teal tinted rounded-2xl border bg-card p-5">
                <Mail className="tone-text size-5" aria-hidden="true" />
                <h2 className="mt-3 text-sm font-extrabold uppercase tracking-widest">Email</h2>
                <a className="mt-2 block font-bold" href="mailto:info@iamd.in">
                  info@iamd.in
                </a>
              </li>
              <li className="lift-card tone-violet tinted rounded-2xl border bg-card p-5 sm:col-span-2">
                <MapPin className="tone-text size-5" aria-hidden="true" />
                <h2 className="mt-3 text-sm font-extrabold uppercase tracking-widest">Address</h2>
                <p className="mt-2 text-sm font-semibold">
                  IMDRC, Manav Mandir, Solan, Himachal Pradesh 173212
                </p>
              </li>
            </ul>

            <div className="mt-8">
              <ImagePlaceholder
                label="Coordinator welcoming a patient at IMDRC reception"
                aspect="aspect-[16/9]"
              />
            </div>
          </div>

          <form className="lift-card rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="visit-name" className="block text-sm font-semibold">
                  Patient name
                </label>
                <input
                  id="visit-name"
                  required
                  autoComplete="name"
                  className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                />
              </div>
              <div>
                <label htmlFor="visit-phone" className="block text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="visit-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                />
              </div>
              <div>
                <label htmlFor="visit-date" className="block text-sm font-semibold">
                  Preferred date
                </label>
                <input
                  id="visit-date"
                  type="date"
                  className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="visit-notes" className="block text-sm font-semibold">
                  Diagnosis and support needed
                </label>
                <textarea
                  id="visit-notes"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rainbow-bar mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Request a visit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="faq-heading" className="text-3xl font-extrabold sm:text-4xl">
            Frequently asked <span className="rainbow-text">questions</span>
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="lift-card group rounded-2xl border border-border bg-card p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold">
                  {faq.q}
                  <span
                    className="rainbow-bar grid size-8 shrink-0 place-items-center rounded-full text-lg font-black text-primary-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
