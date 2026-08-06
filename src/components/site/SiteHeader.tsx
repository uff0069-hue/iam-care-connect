import { useState } from "react";
import { HeartHandshake, Menu, Phone, X } from "lucide-react";

const NAV = [
  { label: "About Us", href: "#about" },
  { label: "Facilities & Booking", href: "#facilities" },
  { label: "Muscular Dystrophy Care", href: "#care" },
  { label: "Success Stories", href: "#stories" },
  { label: "Donate", href: "#donate" },
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
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <a href="#main" className="flex min-w-0 items-center gap-3">
            <span
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground"
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
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#book"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border-2 border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Book a Visit
            </a>
            <a
              href="#donate"
              className="warm-surface inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="size-4" aria-hidden="true" />
              Donate (80G Tax Free)
            </a>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
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
            className="border-t border-border bg-card px-4 py-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-base font-semibold text-foreground hover:bg-surface"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary px-4 text-sm font-bold text-primary"
              >
                Book a Visit
              </a>
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="warm-surface inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold"
              >
                Donate (80G Tax Free)
              </a>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
