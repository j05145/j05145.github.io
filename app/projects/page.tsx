import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source offensive security tooling by Josias Fabián.",
};

const PROJECTS = [
  {
    name: "Azure Pwnsuite",
    description:
      "Personal repo hosting offensive tools for Azure focused on enumerating tenants, roles, permissions, and attack paths.",
    stack: ["Azure CLI", "PowerShell", "BloodHound", "Python"],
    href: "https://github.com/j05145/Azure-Pwn-Suite",
    image: "/images/pwnsuite.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Projects</h1>
      <p className="mt-3 text-ink-soft">Tools I build and maintain for offensive security work.</p>

      <div className="stagger-children mt-10 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <div className="relative aspect-video overflow-hidden rounded-md border border-paper-line">
              <Image src={project.image} alt={project.name} fill className="object-cover" />
            </div>
            <h2 className="mt-4 font-display text-xl text-ink">{project.name}</h2>
            <p className="mt-2 flex-1 text-sm text-ink-soft">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <LinkButton href={project.href} variant="secondary" size="sm" className="mt-5 self-start">
              Learn More
            </LinkButton>
          </Card>
        ))}
      </div>
    </div>
  );
}
