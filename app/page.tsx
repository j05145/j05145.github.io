import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CertPills } from "@/components/home/cert-pills";

const STACK = ["Burp Suite", "Python", "Bash", "Azure", "AWS", "GCP", "Docker", "Wireshark", "Linux"];

// Short summaries for the home timeline; the full descriptions live on /experience.
// The independent entry goes first and gets a hollow dot: it runs alongside the
// jobs rather than being one of them, so it has no dates.
type Experience = {
  org: string;
  role: string;
  date: string;
  body: string;
  highlights: string[];
  tags: string[];
  independent?: boolean;
};

const EXPERIENCE: Experience[] = [
  {
    org: "Independent engagements",
    role: "Independent Penetration Tester",
    date: "Alongside my full-time roles",
    body: "For several years I have also run penetration tests on my own, outside the companies I have worked for.",
    highlights: [
      "Banks and financial institutions",
      "Cloud environments",
      "Engagements scoped and reported directly with each client",
    ],
    tags: ["Banking", "Finance", "Cloud"],
    independent: true,
  },
  {
    org: "Thoropass",
    role: "Penetration Tester",
    date: "Nov 2025 - Present",
    body: "Contract pentester on a 10+ person internal offensive team, testing SaaS and AI companies pursuing SOC 2, ISO 27001 and PCI DSS.",
    highlights: [
      "Web apps, APIs, iOS and Android, cloud environments and LLM/AI features",
      "White-box source code review to catch what black-box testing misses",
      "Proof-of-concept exploits, CVSS-scored reports, client debriefs and retests",
      "On-site engagements in Miami for clients requiring in-person testing",
    ],
    tags: ["Web", "API", "Mobile", "LLM/AI", "AWS", "Azure"],
  },
  {
    org: "Cybersecurity Blue Team & Red Team",
    role: "Penetration Tester",
    date: "Mar 2024 - Nov 2025",
    body: "Dominican offensive security firm serving banking, healthcare, government and enterprise clients.",
    highlights: [
      "Azure and Office 365 assessments: Entra ID, IAM and RBAC, managed identities, Key Vault",
      "iOS and Android banking apps: certificate pinning, hardcoded credentials, exposed API keys",
      "Active Directory and internal networks: privilege escalation and lateral movement",
      "Speaker at RedTeamRD and HackonRD",
    ],
    tags: ["Azure", "Mobile banking", "Active Directory", "Web"],
  },
  {
    org: "Grey Matter Technologies",
    role: "Infrastructure Manager, outsourced to Hotel W&P",
    date: "Jan 2023 - Mar 2024",
    body: "Served full time as the on-site IT department of Hotel W&P Santo Domingo, growing from level 1 support to running the whole environment.",
    highlights: [
      "Windows Active Directory, group policies and access control across departments",
      "Palo Alto and Cisco firewalls, VPN access and network segmentation on Ubiquiti",
      "Azure AD and Google Workspace administration",
      "Incident response and root cause analysis in a 24/7 hospitality environment",
    ],
    tags: ["Active Directory", "Firewalls", "Networking"],
  },
];

// Split hero: name, stack and actions on the left; avatar and certs on the
// right. Below, write-ups and an experience timeline side by side.
export default function HomePage() {
  // Every write-up stays on the home: a new post should never push an older one off.
  const posts = getAllPosts();

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
            <h2 className="font-display text-2xl text-ink">Write-ups</h2>
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
                <span
                  aria-hidden="true"
                  className={`absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    job.independent ? "border-2 border-rust bg-paper" : "bg-rust"
                  }`}
                />
                <p className="text-xs text-ink-soft">{job.date}</p>
                <h3 className="font-display text-ink">{job.org}</h3>
                <p className="text-sm text-rust-text">{job.role}</p>
                <p className="mt-2 text-sm text-ink-soft">{job.body}</p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-ink-soft marker:text-rust">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
