import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Defensive checks
  const post: Post = {
    title: typeof data.title === "string" ? data.title : "Untitled",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    coverImage: typeof data.coverImage === "string" ? data.coverImage : "/assets/default-cover.png",
    date: typeof data.date === "string" ? data.date : new Date().toISOString(),
    author: {
      name: typeof data.author?.name === "string" ? data.author.name : "Unknown",
      picture: typeof data.author?.picture === "string" ? data.author.picture : "/assets/default-avatar.png",
    },
    ogImage: {
      url: typeof data.ogImage?.url === "string" ? data.ogImage.url : "/assets/default-og.png",
    },
    slug: realSlug,
    content,
  };

  return post;
}
