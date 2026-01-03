import Link from "next/link";
import { getPostsByCategory } from "@/lib/blog";
import { BlogCategory, CATEGORY_LABELS, BlogPost } from "@/lib/types";
import { BlogSection } from "@/components/BlogSection";

const CATEGORIES: BlogCategory[] = [
  "dev-tooling",
  "growth",
  "fintech",
  "founder",
];

export default function Home() {
  const postsByCategory: Record<BlogCategory, BlogPost[]> = {
    "dev-tooling": getPostsByCategory("dev-tooling"),
    growth: getPostsByCategory("growth"),
    fintech: getPostsByCategory("fintech"),
    founder: getPostsByCategory("founder"),
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-2xl px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-base font-normal">Rick</h1>
          <p className="text-sm leading-relaxed text-gray-600">
            Building at the intersection of fintech and developer tooling. I help
            teams understand, grow, and activate their open source communities.
          </p>
        </header>

        {/* Blog Sections Grid */}
        <section className="mb-12">
          <p className="mb-6 text-sm text-gray-600">Writing</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {CATEGORIES.map((category) => (
              <BlogSection
                key={category}
                category={category}
                label={CATEGORY_LABELS[category]}
                posts={postsByCategory[category]}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm">
          <div className="flex gap-4">
            <Link href="https://twitter.com">Twitter</Link>
            <Link href="https://github.com">GitHub</Link>
            <Link href="mailto:email@example.com">Email</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
