import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteering Opportunities — IAMD, IMDRC Solan" },
      {
        name: "description",
        content:
          "Volunteer with IAMD at IMDRC Solan: therapy assistance, awareness camps, teaching and skills training, fundraising, media and remote support roles.",
      },
      { property: "og:title", content: "Volunteering Opportunities — IAMD" },
      {
        property: "og:description",
        content:
          "Give your time, skills or professional expertise to muscular dystrophy patients in India. On-site and remote roles available.",
      },
    ],
  }),
  component: VolunteerPage,
});

const ROLES = [
  ["tone-ocean", "Therapy assistance", "Support physiotherapists and hydrotherapy staff during sessions (training provided)."],
  ["tone-teal", "Teaching & skills", "Tutor patients in academics, computers, art, music or vocational skills."],
  ["tone-amber", "Awareness camps", "Help run diagnostic and awareness camps in schools, colleges and districts."],
  ["tone-violet", "Media & design", "Photography, video, social media and design support for campaigns."],
  ["tone-coral", "Fundraising", "Organise events, run peer-to-peer campaigns or open corporate CSR doors."],
  ["tone-lime", "Remote support", "Documentation, translation, grant writing and helpline follow-ups from anywhere."],
];

const FIELD =
  "mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground";

function VolunteerPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Volunteering"
        title="Give your time — it changes a patient's month, not just their day"
        description="Volunteers are part of everyday life at IMDRC Solan. Some come for a weekend camp, some teach online every week, some help us run national awareness drives."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="roles-heading">
        <h2 id="roles-heading" className="text-3xl font-extrabold sm:text-4xl">
          Volunteer <span className="rainbow-text">roles</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map(([tone, title, body]) => (
            <article key={title} className={`lift-card tinted ${tone} rounded-2xl border bg-card p-6`}>
              <span className="tone-bar block h-1 w-12 rounded-full" aria-hidden="true" />
              <h3 className="mt-4 text-base font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            label="Volunteers with patients at IMDRC Solan"
            aspect="aspect-[4/3]"
            note="Volunteering image from iamd.in"
          />

          <form
            className="lift-card rounded-2xl border border-border bg-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h2 className="text-xl font-extrabold">Register as a volunteer</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="vol-name" className="block text-sm font-semibold">
                  Full name
                </label>
                <input id="vol-name" required autoComplete="name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="vol-phone" className="block text-sm font-semibold">
                  Phone
                </label>
                <input id="vol-phone" type="tel" required autoComplete="tel" className={FIELD} />
              </div>
              <div>
                <label htmlFor="vol-email" className="block text-sm font-semibold">
                  Email
                </label>
                <input id="vol-email" type="email" autoComplete="email" className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="vol-role" className="block text-sm font-semibold">
                  Preferred role
                </label>
                <select id="vol-role" className={FIELD}>
                  {ROLES.map(([, title]) => (
                    <option key={title}>{title}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="vol-about" className="block text-sm font-semibold">
                  Tell us about your skills and availability
                </label>
                <textarea id="vol-about" rows={4} className={`${FIELD} py-3`} />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit volunteer form
            </button>
            <p aria-live="polite" className="mt-4 text-sm font-semibold text-muted-foreground">
              {done
                ? "Thank you for signing up — our volunteer coordinator will be in touch soon."
                : "Prefer to talk first? Call 01792 292037 or email info@iamd.in."}
            </p>
          </form>
        </div>

        <Link
          to="/support"
          className="mt-10 inline-flex min-h-12 items-center rounded-full border-2 border-primary px-6 text-base font-bold text-primary"
        >
          Other ways to support us
        </Link>
      </section>
    </>
  );
}
