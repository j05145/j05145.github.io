import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write-ups on web, API, cloud and network security research.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Blog</h1>
      <p className="mt-3 text-ink-soft">
        Real attack chains from penetration testing engagements — root causes, remediation, and how to
        find this class of issue yourself.
      </p>

      <div className="stagger-children mt-10 flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card>
              <p className="text-xs text-ink-soft">{post.dateLabel}</p>
              <h2 className="mt-1 font-display text-xl text-ink">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
