export type BlogCategory = "dev-tooling" | "growth" | "fintech" | "founder";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "dev-tooling": "Dev tooling",
  growth: "Growth",
  fintech: "Fintech",
  founder: "Founder",
};
