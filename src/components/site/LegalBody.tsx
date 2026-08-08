import type { ReactNode } from "react";

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-foreground [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
