import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PILLARS, SERVICES, NEWS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IAMD — Muscular Dystrophy Rehabilitation at IMDRC Solan, India" },
      {
        name: "description",
        content:
          "Indian Association of Muscular Dystrophy: integrated rehabilitation, hydrotherapy, physiotherapy and family support at IMDRC Solan, Himachal Pradesh since 1992.",
      },
      {
        property: "og:title",
        content: "IAMD — Empowering Lives Affected by Muscular Dystrophy Since 1992",
      },
      {
        property: "og:description",
        content:
          "Hydrotherapy, physiotherapy, counselling and accessible accommodation at the Integrated Muscular Dystrophy Rehabilitation Centre, Solan.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="aurora-surface" aria-labelledby="hero-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Since 1992 · IMDRC Solan, Himachal Pradesh
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              Empowering Lives Affected by Muscular Dystrophy Since 1992
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85">
              Integrated rehabilitation, hydrotherapy and holistic support at the Integrated
              Muscular Dystrophy Rehabilitation Centre (IMDRC), Solan — providing comprehensive care
              and management since 2018.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-card px-6 text-base font-bold text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                Book Patient Rehabilitation Visit
              </Link>
              <Link
                to="/donate"
                className="warm-surface inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                <HeartHandshake className="size-5" aria-hidden="true" />
                Sponsor a Patient
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["30+", "Years of service"],
                ["10,000+", "Families empowered"],
                ["100%", "Non-profit"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-navy-foreground/25 bg-navy-foreground/10 p-4"
                >
                  <dt className="text-2xl font-extrabold tabular-nums">{stat}</dt>
                  <dd className="mt-1 text-sm text-navy-foreground/80">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4">
            <ImagePlaceholder
              label="Photo of IMDRC Solan Entrance"
              aspect="aspect-[16/10]"
              note="Hero slider image 1 from iamd.in"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ImagePlaceholder label="Hydrotherapy Pool" aspect="aspect-[4/3]" />
              <ImagePlaceholder label="Patients in Physiotherapy Hall" aspect="aspect-[4/3]" />
            </div>
          </div>
        </div>
        <div className="rainbow-bar h-1.5 w-full" aria-hidden="true" />
      </section>

      {/* PILLARS / QUICK ENTRY POINTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="text-3xl font-extrabold sm:text-4xl">
          Where would you like to <span className="rainbow-text">start</span>?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Four paths into the work of IAMD — diagnosis, rehabilitation at IMDRC, understanding
          muscular dystrophy, and supporting the mission.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className={`lift-card tinted ${p.tone} flex flex-col rounded-2xl border bg-card p-6`}
            >
              <ImagePlaceholder label={p.placeholder} aspect="aspect-[16/9]" />
              <span className="tone-bar mt-6 h-1 w-12 rounded-full" aria-hidden="true" />
              <h3 className="mt-4 text-base font-extrabold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <Link
                to={p.to}
                className="tone-text mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-bold underline-offset-4 hover:underline"
              >
                Read more <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-surface py-16 lg:py-24" aria-labelledby="services-preview">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="services-preview" className="text-3xl font-extrabold sm:text-4xl">
                Integrated care under one roof
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Eight coordinated services — from hydrotherapy to counselling — designed around the
                realities of living with muscular dystrophy.
              </p>
            </div>
            <Link
              to="/care"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See all services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service) => (
              <article
                key={service.title}
                className={`lift-card tinted ${service.tone} rounded-2xl border bg-card p-6`}
              >
                <span className="tone-chip inline-flex size-11 items-center justify-center rounded-xl">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{service.title}</h3>
                <p className="tone-text mt-1 text-sm font-semibold">{service.tagline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24" aria-labelledby="stories-preview">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="stories-preview" className="text-3xl font-extrabold sm:text-4xl">
            Latest <span className="rainbow-text">news &amp; wins</span>
          </h2>
          <Link
            to="/stories"
            className="inline-flex min-h-11 items-center gap-1 text-base font-bold text-primary underline-offset-4 hover:underline"
          >
            All success stories <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {NEWS.map((item) => (
            <article
              key={item.title}
              className="lift-card tone-magenta tinted flex flex-col rounded-2xl border bg-card p-6"
            >
              <ImagePlaceholder label={item.placeholder} aspect="aspect-[16/9]" />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="tone-chip rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {item.badge}
                </span>
                <time className="text-xs font-semibold text-muted-foreground">{item.date}</time>
              </div>
              <h3 className="mt-3 text-lg font-extrabold leading-snug">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <Link
                to="/stories"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                Continue reading
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:pb-24">
        <div className="warm-surface flex flex-wrap items-center justify-between gap-6 rounded-3xl p-8 shadow-[var(--shadow-lift)] lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold">100% of donations fund patient care</h2>
            <p className="mt-3 text-base leading-relaxed">
              Every contribution is eligible for tax exemption under Section 80G, with an instant
              receipt.
            </p>
          </div>
          <Link
            to="/donate"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-card px-6 text-base font-bold text-accent-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            <HeartHandshake className="size-5" aria-hidden="true" />
            Donate now
          </Link>
        </div>
      </section>
    </>
  );
}
