import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHeader } from "@/components/site/PageHeader";
import { BLOG_POSTS } from "@/lib/site-content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Muscular Dystrophy Care, Therapy & Advocacy | IAMD" },
      {
        name: "description",
        content:
          "Guides and updates from IAMD on early diagnosis, hydrotherapy, caregiver technique, nutrition, disability schemes and research for muscular dystrophy families in India.",
      },
      { property: "og:title", content: "IAMD Blog — Guides for MD Families" },
      {
        property: "og:description",
        content:
          "Practical, plain-language articles on living with muscular dystrophy, written by the team at IMDRC Solan.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Guides, therapy notes and advocacy updates"
        description="Practical writing from the team at IMDRC Solan — the things families ask us on the helpline every week, answered properly."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className={`lift-card tinted ${post.tone} flex flex-col rounded-2xl border bg-card p-6`}
            >
              <ImagePlaceholder label={post.placeholder} aspect="aspect-[16/9]" />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="tone-chip rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {post.tag}
                </span>
                <time className="text-xs font-semibold text-muted-foreground">{post.date}</time>
              </div>
              <h2 className="mt-3 text-lg font-extrabold leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
