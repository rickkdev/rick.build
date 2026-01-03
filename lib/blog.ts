import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { BlogPost, BlogCategory } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function parseMarkdownPost(filePath: string): BlogPost | null {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (!data.title || !data.date || !data.category) {
    return null;
  }

  const slug = data.slug || path.basename(filePath, ".md");

  return {
    slug,
    title: data.title,
    date:
      typeof data.date === "string"
        ? data.date
        : data.date.toISOString().split("T")[0],
    category: data.category as BlogCategory,
    excerpt: data.excerpt || "",
    content: marked(content) as string,
  };
}

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
      if (!file.endsWith(".md")) continue;

      const filePath = path.join(categoryDir, file);
      const post = parseMarkdownPost(filePath);
      if (post) {
        posts.push(post);
      }
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
