import type { ReactNode } from "react";

type Props = {
  label: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[16/9]" */
  aspect?: string;
  className?: string;
  note?: string;
  children?: ReactNode;
};

/**
 * Modern placeholder frame standing in for a real photograph from iamd.in.
 * Dashed slate container, rounded-2xl, inner shadow + hover elevation.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[16/9]",
  className = "",
  note,
}: Props) {
  return (
    <figure
      className={`media-frame group flex ${aspect} w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-muted-foreground/45 bg-surface p-6 text-center ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <span className="rounded-full border border-primary/30 bg-card px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-primary">
        Placeholder
      </span>
      <figcaption className="max-w-[32ch] text-sm font-semibold leading-snug text-foreground">
        [PLACEHOLDER: {label}]
      </figcaption>
      {note ? <p className="text-xs text-muted-foreground">{note}</p> : null}
    </figure>
  );
}
