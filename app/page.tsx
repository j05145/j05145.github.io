import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CertPills } from "@/components/home/cert-pills";

const STACK = ["Burp Suite", "Python", "Bash", "Azure", "AWS", "GCP", "Docker", "Wireshark", "Linux"];

// Short summaries for the home timeline; the full descriptions live on /experience.
const EXPERIENCE = [
  {
    org: "Thoropass",
    role: "Penetration Tester",
    date: "2025 - Present",
    body: "End-to-end engagements across web, APIs, iOS and Android, internal networks and AWS, Azure and GCP, with technical and executive reporting.",
  },
  {
    org: "Cybersecurity Blue Team & Red Team",
    role: "Penetration Tester",
    date: "2024 - 2025",
    body: "Offensive assessments with a focus on Azure identity abuse, custom payloads and automated recon and post-exploitation.",
  },
  {
    org: "Grey Matter Technologies",
    role: "Infrastructure Manager, outsourced to Hotel W&P",
    date: "2023 - 2024",
    body: "Designed and ran secure on-prem and cloud infrastructure, backups, monitoring and disaster recovery.",
  },
];

// Split hero: name, stack and actions on the left; avatar and certs on the
// right. Below, write-ups and an experience timeline side by side.
export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="paper-texture border-b border-paper-line bg-leather text-cream">
        <div className="mx-auto flex max-w-5xl flex-wrap-reverse items-center gap-10 px-6 py-16 md:py-20">
          <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-5">
            <h1 className="font-display text-4xl tracking-wide md:text-5xl animate-fade-in-up">Josias Fabián</h1>
            <p className="text-cream/70">Penetration Tester · Web · API · Mobile · Cloud · Network</p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span key={tech} className="rounded border border-leather-line px-2.5 py-0.5 text-xs text-cream/60">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/blog">Read the blog</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Get in touch
              </LinkButton>
            </div>
          </div>
          <div className="mx-auto flex flex-[1_1_240px] flex-col items-center gap-4">
            <Image
              src="/images/avatar.png"
              alt="Josias Fabián"
              width={176}
              height={176}
              className="rounded-full border-2 border-leather-line animate-pop-in"
              priority
            />
            <CertPills />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr]">
        <section>
          <div className="flex items-baseline justify-between gap-3">
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

        <section>
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl text-ink">Experience</h2>
            <Link href="/experience" className="text-sm text-rust-text hover:underline">
              View all
            </Link>
          </div>
          <ol className="mt-8 flex flex-col gap-6 border-l border-paper-line pl-5">
            {EXPERIENCE.map((job) => (
              <li key={job.org} className="relative">
                <span aria-hidden="true" className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-rust" />
                <p className="text-xs text-ink-soft">{job.date}</p>
                <h3 className="font-display text-ink">{job.org}</h3>
                <p className="text-sm text-rust-text">{job.role}</p>
                <p className="mt-2 text-sm text-ink-soft">{job.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
