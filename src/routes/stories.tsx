import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { NEWS } from "@/lib/site-content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories & News — IAMD Community Achievements" },
      {
        name: "description",
        content:
          "Boccia gold medals, awareness campaigns and patient journeys: news and success stories from the Indian Association of Muscular Dystrophy community.",
      },
      { property: "og:title", content: "Success Stories & News — IAMD" },
      {
        property: "og:description",
        content:
          "Achievements from the IAMD community in sport, advocacy and everyday independence.",
      },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const [openStory, setOpenStory] = useState<(typeof NEWS)[number] | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Impact & success stories"
        title="Latest news and success stories"
        description="Achievements from the IAMD community — in sport, advocacy and everyday independence."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {NEWS.map((item, i) => (
            <article
              key={item.title}
              className={`lift-card tinted ${["tone-magenta", "tone-ocean", "tone-lime"][i % 3]} flex flex-col rounded-2xl border bg-card p-6`}
            >
              <ImagePlaceholder label={item.placeholder} aspect="aspect-[16/9]" />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="tone-chip rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {item.badge}
                </span>
                <time className="text-xs font-semibold text-muted-foreground">{item.date}</time>
              </div>
              <h3 className="mt-3 text-lg font-extrabold leading-snug">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <button
                type="button"
                onClick={() => setOpenStory(item)}
                className="tone-text mt-5 inline-flex min-h-11 items-center text-sm font-bold underline-offset-4 hover:underline"
              >
                Continue reading
              </button>
            </article>
          ))}
        </div>

        <Dialog open={!!openStory} onOpenChange={(open) => !open && setOpenStory(null)}>
          <DialogContent className="max-w-2xl">
            {openStory && (
              <>
                <DialogHeader>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rainbow-bar rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                      {openStory.badge}
                    </span>
                    <time className="text-xs font-semibold text-muted-foreground">
                      {openStory.date}
                    </time>
                  </div>
                  <DialogTitle className="mt-3 text-left text-xl font-extrabold leading-snug">
                    {openStory.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">Full story details</DialogDescription>
                </DialogHeader>
                <div className="mt-4 max-h-[40vh] overflow-hidden rounded-xl">
                  <ImagePlaceholder label={openStory.placeholder} aspect="aspect-[16/9]" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {openStory.full}
                </p>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
