import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe, HeartHandshake, Menu, Phone, X } from "lucide-react";

type NavLeaf = { label: string; to: string };
type NavItem = { label: string; to?: string; children?: NavLeaf[] };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "About IAMD", to: "/about" },
      { label: "Awards & Honourees", to: "/awards" },
      { label: "Our Team", to: "/team" },
    ],
  },
  {
    label: "Visiting IMDRC",
    children: [
      { label: "Facilities", to: "/facilities" },
      { label: "Patient Registration", to: "/register" },
      { label: "Book a Visit", to: "/contact" },
      { label: "Price List", to: "/price-list" },
    ],
  },
  {
    label: "Muscular Dystrophy",
    children: [
      { label: "What is Muscular Dystrophy?", to: "/muscular-dystrophy" },
      { label: "Get a Diagnosis", to: "/diagnosis" },
      { label: "Research & Clinical Trials", to: "/research" },
      { label: "Therapy & Services", to: "/care" },
    ],
  },
  {
    label: "Support Us",
    children: [
      { label: "Support Us", to: "/support" },
      { label: "Volunteering Opportunities", to: "/volunteer" },
    ],
  },
  { label: "Success Stories", to: "/stories" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const PHONES = [
  { label: "01792 292037", href: "tel:+911792292037" },
  { label: "+91 92180 98999", href: "tel:+919218098999" },
  { label: "+91 92180 88880", href: "tel:+919218088880" },
];

const LANGUAGES = ["English", "हिन्दी (Hindi)", "मराठी (Marathi)", "বাংলা (Bengali)"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenu(null);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="warm-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-sm font-semibold lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" />
              Helpline (IMDRC Solan):
            </span>
            {PHONES.map((phone) => (
              <a key={phone.href} className="underline underline-offset-4" href={phone.href}>
                {phone.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Globe className="size-4" aria-hidden="true" />
            <label htmlFor="site-language" className="sr-only">
              Select language
            </label>
            <select
              id="site-language"
              defaultValue="English"
              className="min-h-9 rounded-full border border-current/30 bg-transparent px-3 text-sm font-bold"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <header className="frost sticky top-0 z-50 border-b border-border">
        <div className="rainbow-bar h-1 w-full" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 xl:flex xl:justify-between">
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

          <nav aria-label="Main" ref={navRef} className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={menu === item.label}
                    onClick={() => setMenu((v) => (v === item.label ? null : item.label))}
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                  {menu === item.label ? (
                    <ul className="absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-lift)]">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            onClick={() => setMenu(null)}
                            activeProps={{ className: "bg-surface text-primary" }}
                            className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-foreground hover:bg-surface"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-surface text-primary" }}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              to="/donate"
              className="warm-surface inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="size-4" aria-hidden="true" />
              Donate
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
            className="max-h-[70vh] overflow-y-auto border-t border-border bg-card px-4 py-4 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <details className="rounded-xl">
                      <summary className="flex min-h-11 cursor-pointer items-center justify-between rounded-xl px-3 text-base font-semibold text-foreground hover:bg-surface">
                        {item.label}
                        <ChevronDown className="size-4" aria-hidden="true" />
                      </summary>
                      <ul className="mb-2 ml-3 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.to}
                              onClick={() => setOpen(false)}
                              className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-foreground hover:bg-surface"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.to!}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "bg-surface text-primary" }}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center rounded-xl px-3 text-base font-semibold text-foreground hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary px-4 text-sm font-bold text-primary"
              >
                Register Patient
              </Link>
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="warm-surface inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold"
              >
                Donate
              </Link>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
