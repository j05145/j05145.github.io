import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const STACK = [
  "Burp Suite",
  "Python",
  "Bash",
  "Azure",
  "AWS",
  "GCP",
  "Docker",
  "Wireshark",
  "Linux",
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="paper-texture border-b border-paper-line bg-leather text-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center">
          <Image
            src="/images/avatar.png"
            alt="Josias Fabián"
            width={112}
            height={112}
            className="rounded-full border-2 border-leather-line animate-pop-in"
            priority
          />
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl tracking-wide md:text-5xl">Josias Fabián</h1>
            <p className="mt-3 text-cream/70">
              Penetration Tester · Web · API · Mobile · Cloud · Network
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {STACK.map((tech) => (
              <span key={tech} className="rounded border border-leather-line px-2.5 py-0.5 text-xs text-cream/60">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-3">
            <LinkButton href="/blog">Read the blog</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Get in touch
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">Latest write-ups</h2>
          <Link href="/blog" className="text-sm text-rust-text hover:underline">
            View all
          </Link>
        </div>

        <div className="stagger-children mt-8 flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card>
                <p className="text-xs text-ink-soft">{post.dateLabel}</p>
                <h3 className="mt-1 font-display text-lg text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
