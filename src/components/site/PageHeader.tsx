import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="aurora-surface" aria-labelledby="page-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
          {eyebrow}
        </p>
        <h1
          id="page-heading"
          className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-foreground/85">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
      <div className="rainbow-bar h-1.5 w-full" aria-hidden="true" />
    </section>
  );
}
