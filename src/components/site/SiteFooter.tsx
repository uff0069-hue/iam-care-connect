import { Link } from "@tanstack/react-router";
import { Bus, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { LEGAL_LINKS } from "@/lib/site-content";

const EXPLORE = [
  { label: "Home", to: "/" as const },
  { label: "About IAMD", to: "/about" as const },
  { label: "Our Team", to: "/team" as const },
  { label: "Awards & Honourees", to: "/awards" as const },
  { label: "Facilities", to: "/facilities" as const },
  { label: "Price List", to: "/price-list" as const },
];

const CARE = [
  { label: "What is Muscular Dystrophy?", to: "/muscular-dystrophy" as const },
  { label: "Get a Diagnosis", to: "/diagnosis" as const },
  { label: "Research & Clinical Trials", to: "/research" as const },
  { label: "Therapy & Services", to: "/care" as const },
  { label: "Patient Registration", to: "/register" as const },
  { label: "Success Stories", to: "/stories" as const },
];

const SUPPORT = [
  { label: "Support Us", to: "/support" as const },
  { label: "Volunteering Opportunities", to: "/volunteer" as const },
  { label: "Donate (80G Tax Free)", to: "/donate" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact Us", to: "/contact" as const },
];

const SOCIALS = [
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/" },
  { label: "X (Twitter)", icon: Twitter, href: "https://x.com/" },
];

function LinkColumn({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; to: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.label}>
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
  );
}

export function SiteFooter() {
  return (
    <footer className="aurora-surface mt-24">
      <div className="rainbow-bar h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-extrabold">IAMD</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
            The Indian Association of Muscular Dystrophy is a registered society serving families
            affected by muscular dystrophy and other neuromuscular disorders since 1992. Since 2018
            it has run the Integrated Muscular Dystrophy Rehabilitation Centre (IMDRC) at Manav
            Mandir, Solan, Himachal Pradesh — a residential centre offering hydrotherapy,
            physiotherapy, yoga, counselling, nutrition and medical review under one roof.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-xl border border-navy-foreground/25 bg-navy-foreground/10 hover:bg-navy-foreground/20"
                >
                  <social.icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn heading="Explore" items={EXPLORE} />
        <LinkColumn heading="Muscular dystrophy" items={CARE} />

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
            Support & contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SUPPORT.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-3 text-sm">
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
                  +91 92180 98999
                </a>
                <a className="min-h-9 underline-offset-4 hover:underline" href="tel:+919218088880">
                  +91 92180 88880
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
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-foreground/70">
            <Bus className="size-4" aria-hidden="true" />
            How to reach IMDRC
          </h3>
          <div className="mt-4 grid gap-6 text-sm leading-relaxed text-navy-foreground/80 sm:grid-cols-3">
            <p>
              <strong className="text-navy-foreground">By air:</strong> Fly to Chandigarh
              International Airport (about 70 km) or Shimla Airport at Jubbarhatti (about 45 km).
              Pre-booked accessible taxis reach Solan in roughly two hours from Chandigarh.
            </p>
            <p>
              <strong className="text-navy-foreground">By train:</strong> Kalka railway station (about
              40 km) is the nearest broad-gauge station, connected to Delhi and Chandigarh. The
              Kalka–Shimla toy train also stops at Solan and Salogra.
            </p>
            <p>
              <strong className="text-navy-foreground">By road:</strong> Solan lies on NH-5 between
              Chandigarh and Shimla, with regular HRTC and Volvo buses. IMDRC is at Manav Mandir,
              Solan 173212 — call the helpline and we will guide your driver for the final stretch.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-navy-foreground/70">
          <p>
            © {new Date().getFullYear()} Indian Association of Muscular Dystrophy. A registered
            non-profit society. 100% of public donations fund patient rehabilitation.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
