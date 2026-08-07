import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Muscular Dystrophy Care", to: "/care" as const },
  { label: "Facilities & Booking", to: "/facilities" as const },
  { label: "Success Stories", to: "/stories" as const },
  { label: "Achievers & Awards", to: "/awards" as const },
  { label: "Donate", to: "/donate" as const },
  { label: "Contact & FAQs", to: "/contact" as const },
];

export function SiteFooter() {
  return (
    <footer className="aurora-surface mt-24">
      <div className="rainbow-bar h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-extrabold">IAMD</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
            Indian Association of Muscular Dystrophy — empowering families affected by muscular
            dystrophy and other neuromuscular disorders since 1992.
          </p>
        </div>

        <nav aria-label="Footer sections">
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-flex min-h-9 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
            Reach us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              IMDRC, Manav Mandir, Solan, Himachal Pradesh 173212
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span className="flex flex-col">
                <a className="min-h-9 underline-offset-4 hover:underline" href="tel:+911792292037">
                  01792 292037
                </a>
                <a className="min-h-9 underline-offset-4 hover:underline" href="tel:+919218098999">
                  92180 98999
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="underline-offset-4 hover:underline" href="mailto:info@iamd.in">
                info@iamd.in
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
            Support the mission
          </h3>
          <p className="mt-4 text-sm text-navy-foreground/75">
            All donations are eligible for tax exemption under Section 80G.
          </p>
          <Link
            to="/donate"
            className="warm-surface mt-4 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-bold"
          >
            Donate now
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-navy-foreground/70">
          © {new Date().getFullYear()} Indian Association of Muscular Dystrophy. A registered
          non-profit organisation. 100% of public donations fund patient rehabilitation.
        </p>
      </div>
    </footer>
  );
}
