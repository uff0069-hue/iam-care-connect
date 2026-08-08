import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Patient Registration — IMDRC Solan | IAMD" },
      {
        name: "description",
        content:
          "Register a muscular dystrophy patient with IAMD to begin assessment and rehabilitation at IMDRC Solan. Share diagnosis, mobility status and contact details.",
      },
      { property: "og:title", content: "Patient Registration — IMDRC Solan" },
      {
        property: "og:description",
        content:
          "One form to register a patient for assessment, therapy planning and residential rehabilitation at IMDRC Solan.",
      },
    ],
  }),
  component: RegisterPage,
});

const FIELD =
  "mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground";

function RegisterPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Patient registration"
        title="Register a patient with IAMD"
        description="Registration helps our medical team understand the diagnosis and mobility needs before arrival, so the first day at IMDRC is spent on care rather than paperwork."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="lift-card rounded-2xl border border-border bg-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h2 className="text-xl font-extrabold">Registration details</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="reg-name" className="block text-sm font-semibold">
                  Patient full name
                </label>
                <input id="reg-name" required autoComplete="name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="reg-age" className="block text-sm font-semibold">
                  Age
                </label>
                <input id="reg-age" type="number" min={0} max={120} required className={FIELD} />
              </div>
              <div>
                <label htmlFor="reg-gender" className="block text-sm font-semibold">
                  Gender
                </label>
                <select id="reg-gender" className={FIELD}>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other / prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="reg-diagnosis" className="block text-sm font-semibold">
                  Diagnosis (if known)
                </label>
                <select id="reg-diagnosis" className={FIELD}>
                  <option>Duchenne muscular dystrophy</option>
                  <option>Becker muscular dystrophy</option>
                  <option>Limb-girdle muscular dystrophy</option>
                  <option>Myotonic dystrophy</option>
                  <option>Facioscapulohumeral dystrophy</option>
                  <option>Spinal muscular atrophy</option>
                  <option>Other neuromuscular disorder</option>
                  <option>Not yet diagnosed</option>
                </select>
              </div>
              <div>
                <label htmlFor="reg-mobility" className="block text-sm font-semibold">
                  Current mobility
                </label>
                <select id="reg-mobility" className={FIELD}>
                  <option>Walking independently</option>
                  <option>Walking with support</option>
                  <option>Uses a wheelchair part-time</option>
                  <option>Uses a wheelchair full-time</option>
                  <option>Bed-bound</option>
                </select>
              </div>
              <div>
                <label htmlFor="reg-phone" className="block text-sm font-semibold">
                  Phone
                </label>
                <input id="reg-phone" type="tel" required autoComplete="tel" className={FIELD} />
              </div>
              <div>
                <label htmlFor="reg-email" className="block text-sm font-semibold">
                  Email
                </label>
                <input id="reg-email" type="email" autoComplete="email" className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="reg-city" className="block text-sm font-semibold">
                  City & state
                </label>
                <input id="reg-city" required className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="reg-notes" className="block text-sm font-semibold">
                  Medical history & what you need help with
                </label>
                <textarea id="reg-notes" rows={4} className={`${FIELD} py-3`} />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit registration
            </button>

            <p aria-live="polite" className="mt-4 text-sm font-semibold text-muted-foreground">
              {done
                ? "Thank you — your registration has been recorded. A coordinator from IMDRC Solan will call you within two working days."
                : "We never share patient information outside the IMDRC care team."}
            </p>
          </form>

          <aside className="lift-card tone-teal tinted rounded-2xl border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">What happens after you register</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed">
              {[
                "A coordinator calls you to confirm details and answer questions about travel and costs.",
                "Our medical team reviews the diagnosis and any reports you can share over email or WhatsApp.",
                "You receive a suggested rehabilitation cycle, dates and a preparation checklist.",
                "On arrival at IMDRC Solan the patient is assessed and a personalised therapy plan begins.",
              ].map((step) => (
                <li key={step} className="flex gap-3">
                  <CheckCircle2 className="tone-text mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-extrabold uppercase tracking-widest">
              Documents to keep ready
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Any genetic test, biopsy or EMG reports</li>
              <li>Recent prescriptions and medication list</li>
              <li>Disability certificate / UDID card, if issued</li>
              <li>Government photo identification for patient and caregiver</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
