"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogCategory, BlogPost } from "@/lib/types";

interface BlogSectionProps {
  category: BlogCategory;
  label: string;
  posts: BlogPost[];
}

const INITIAL_COUNT = 3;

export function BlogSection({ category, label, posts }: BlogSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const visiblePosts = expanded ? posts : posts.slice(0, INITIAL_COUNT);
  const hasMore = posts.length > INITIAL_COUNT;

  return (
    <div>
      <p className="mb-3 text-sm text-gray-600">{label}</p>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-400">—</p>
      ) : (
        <>
          <ul className="space-y-1">
            {visiblePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-sm">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm text-gray-600 underline hover:no-underline"
            >
              {expanded ? "less" : `more`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
