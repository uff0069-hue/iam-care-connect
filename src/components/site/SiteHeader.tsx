import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HeartHandshake, Menu, Phone, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "MD Care", to: "/care" as const },
  { label: "Facilities", to: "/facilities" as const },
  { label: "Stories", to: "/stories" as const },
  { label: "Achievers", to: "/awards" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Helpline banner */}
      <div className="warm-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-sm font-semibold">
          <span className="flex items-center gap-2">
            <Phone className="size-4" aria-hidden="true" />
            Helpline (IMDRC Solan):
          </span>
          <a className="underline underline-offset-4" href="tel:+911792292037">
            01792 292037
          </a>
          <a className="underline underline-offset-4" href="tel:+919218098999">
            92180 98999
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 frost border-b border-border">
        <div className="rainbow-bar h-1 w-full" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span
              className="rainbow-bar grid size-11 shrink-0 place-items-center rounded-xl text-sm font-black text-primary-foreground"
              aria-hidden="true"
            >
              IA
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-extrabold leading-tight text-foreground">
                IAMD
              </span>
              <span className="block truncate text-xs text-muted-foreground">
                Indian Association of Muscular Dystrophy
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-surface text-primary" }}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border-2 border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Book a Visit
            </Link>
            <Link
              to="/donate"
              className="warm-surface inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="size-4" aria-hidden="true" />
              Donate (80G Tax Free)
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-card px-4 py-4 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-surface text-primary" }}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-base font-semibold text-foreground hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary px-4 text-sm font-bold text-primary"
              >
                Book a Visit
              </Link>
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="warm-surface inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold"
              >
                Donate (80G Tax Free)
              </Link>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
