import { useState, type ReactNode } from "react";

type Props = {
  label: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[16/9]" */
  aspect?: string;
  className?: string;
  note?: string;
  children?: ReactNode;
  /** Path to a real photo (e.g. "/images/services/hydrotherapy.jpg"). When set
   *  and the file loads successfully, the real photo renders instead of the
   *  placeholder frame. Falls back to the placeholder automatically if the
   *  image is missing or fails to load. */
  src?: string;
};

/**
 * Modern placeholder frame standing in for a real photograph from iamd.in.
 * Dashed slate container, rounded-2xl, inner shadow + hover elevation.
 * Pass `src` to render a real photo instead — falls back to the placeholder
 * automatically if the file can't be loaded.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[16/9]",
  className = "",
  note,
  src,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <figure
        className={`${aspect} w-full overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
      >
        <img
          src={src}
          alt={label}
          className="size-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </figure>
    );
  }

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
