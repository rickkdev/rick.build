import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { CATEGORY_LABELS } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Rick's Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-2xl px-6 py-12">
        {/* Back link */}
        <Link href="/" className="text-sm">
          back
        </Link>

        {/* Post header */}
        <header className="mb-8 mt-12">
          <p className="text-sm text-gray-600">{post.date}</p>
          <h1 className="mt-1 text-base font-normal">{post.title}</h1>
          <p className="mt-1 text-sm text-gray-600">
            {CATEGORY_LABELS[post.category]}
          </p>
        </header>

        {/* Post content */}
        <article
          className="prose prose-sm prose-black max-w-none text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-12">
          <Link href="/" className="text-sm">
            back
          </Link>
        </footer>
      </main>
    </div>
  );
}
