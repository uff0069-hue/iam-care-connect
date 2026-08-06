import { useState } from "react";
import { BadgeCheck, Download, ShieldCheck } from "lucide-react";

const AMOUNTS = [
  { value: 500, funds: "One week of nutritious meals for a patient" },
  { value: 2000, funds: "A month of physiotherapy sessions" },
  { value: 10000, funds: "Full hydrotherapy rehabilitation cycle" },
];

export function DonateForm() {
  const [amount, setAmount] = useState<number | "custom">(2000);
  const [custom, setCustom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const effective = amount === "custom" ? Number(custom || 0) : amount;
  const selectedNote =
    amount === "custom"
      ? "Every rupee goes directly to patient care at IMDRC Solan."
      : AMOUNTS.find((a) => a.value === amount)?.funds;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="rounded-2xl border border-border bg-card p-6 lift-card sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <fieldset>
          <legend className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Step 1 — Choose an amount
          </legend>
          <div className="mt-4 flex flex-wrap gap-3" role="group" aria-label="Donation amount">
            {AMOUNTS.map((a) => (
              <button
                key={a.value}
                type="button"
                aria-pressed={amount === a.value}
                onClick={() => setAmount(a.value)}
                className={`min-h-11 rounded-full border-2 px-5 text-sm font-bold transition-colors ${
                  amount === a.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-foreground hover:border-primary"
                }`}
              >
                ₹{a.value.toLocaleString("en-IN")}
              </button>
            ))}
            <button
              type="button"
              aria-pressed={amount === "custom"}
              onClick={() => setAmount("custom")}
              className={`min-h-11 rounded-full border-2 px-5 text-sm font-bold transition-colors ${
                amount === "custom"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-foreground hover:border-primary"
              }`}
            >
              Custom
            </button>
          </div>

          {amount === "custom" ? (
            <div className="mt-4">
              <label htmlFor="custom-amount" className="block text-sm font-semibold">
                Custom amount (₹)
              </label>
              <input
                id="custom-amount"
                type="number"
                min={100}
                inputMode="numeric"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base placeholder:text-muted-foreground"
                placeholder="e.g. 25000"
              />
            </div>
          ) : null}

          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
            <span>{selectedNote}</span>
          </p>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Step 2 — Your details (for the 80G receipt)
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="donor-name" className="block text-sm font-semibold">
                Full name
              </label>
              <input
                id="donor-name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
              />
            </div>
            <div>
              <label htmlFor="donor-email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                id="donor-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
              />
            </div>
            <div>
              <label htmlFor="donor-phone" className="block text-sm font-semibold">
                Phone
              </label>
              <input
                id="donor-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base"
              />
            </div>
            <div>
              <label htmlFor="donor-pan" className="block text-sm font-semibold">
                PAN <span className="font-normal text-muted-foreground">(for 80G)</span>
              </label>
              <input
                id="donor-pan"
                name="pan"
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background px-4 text-base uppercase"
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="warm-surface mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-base font-bold shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          Donate ₹{effective ? effective.toLocaleString("en-IN") : "—"} securely
        </button>

        <p aria-live="polite" className="mt-3 text-sm font-semibold text-success">
          {submitted
            ? "Thank you! Your 80G receipt preview is ready on the right."
            : ""}
        </p>
        <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
          Registered non-profit. Donations are exempt under Section 80G of the Income Tax Act.
        </p>
      </form>

      {/* 80G receipt preview */}
      <aside
        aria-label="80G receipt preview"
        className="rounded-2xl border border-border bg-surface p-6 lift-card sm:p-8"
      >
        <h3 className="text-lg font-extrabold">Instant 80G receipt preview</h3>
        <dl className="mt-5 space-y-3 rounded-xl border-2 border-dashed border-muted-foreground/40 bg-card p-5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Organisation</dt>
            <dd className="text-right font-semibold">Indian Association of Muscular Dystrophy</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Centre</dt>
            <dd className="text-right font-semibold">IMDRC, Solan, Himachal Pradesh</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Donation</dt>
            <dd className="text-right font-semibold tabular-nums">
              ₹{effective ? effective.toLocaleString("en-IN") : "0"}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Exemption</dt>
            <dd className="text-right font-semibold">Section 80G — 50% deductible</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Receipt no.</dt>
            <dd className="text-right font-semibold">IAMD/80G/PREVIEW</dd>
          </div>
        </dl>
        <button
          type="button"
          disabled={!submitted}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-primary px-5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Download className="size-4" aria-hidden="true" />
          Download receipt (PDF)
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Available after your donation is confirmed. A signed copy is also emailed to you.
        </p>
      </aside>
    </div>
  );
}
