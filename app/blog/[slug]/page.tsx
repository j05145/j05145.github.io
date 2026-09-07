import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Concept } from "@/components/concept";
import { FlowChart } from "@/components/diagrams/flow-chart";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

const components = { Concept, FlowChart };

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h1 className="font-display text-3xl leading-tight text-ink md:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-ink-soft">{post.dateLabel}</p>

      <div className="prose-post mt-12">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm] },
            // Content in content/posts/ is authored by us, not user-submitted,
            // so it's safe to allow the JS expressions our diagrams need
            // (e.g. `steps={[...]}`) — next-mdx-remote strips those by
            // default as an XSS/RCE guard against untrusted MDX.
            blockJS: false,
          }}
        />
      </div>
    </article>
  );
}
