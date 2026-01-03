import fs from "fs";
import path from "path";
import { BlogPost, BlogCategory } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  const categories: BlogCategory[] = [
    "dev-tooling",
    "growth",
    "fintech",
    "founder",
  ];

  const posts: BlogPost[] = [];

  for (const category of categories) {
    const categoryDir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;

      const filePath = path.join(categoryDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const post = JSON.parse(content) as BlogPost;
      posts.push(post);
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
