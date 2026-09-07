import type { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Experience",
  description: "Josias Fabián's professional experience in penetration testing and IT infrastructure.",
};

const STATS = [
  { value: "40+", label: "Technologies used" },
  { value: "25+", label: "Projects completed" },
  { value: "3+", label: "Recommendations received" },
  { value: "10+", label: "Courses completed" },
];

const JOBS = [
  {
    org: "Thoropass",
    role: "Penetration Tester",
    date: "Nov 2025 – Present",
    intro:
      "Thoropass is a compliance and security assurance platform that helps companies achieve and maintain certifications like SOC 2, ISO 27001, and HIPAA. As part of their pentest team, I work with clients going through annual compliance cycles who need penetration testing as part of their audit requirements. Engagements span the full attack surface: web applications, APIs, mobile apps, cloud environments, internal networks, and increasingly, AI systems. The work goes beyond remote assessments — I have traveled to Miami to conduct on-site engagements for clients requiring in-person testing of their infrastructure.",
    responsibilities: [
      "Conduct penetration tests across web applications, APIs, mobile (iOS and Android), cloud environments (AWS, Azure), and internal networks following OWASP, PTES, and NIST methodologies",
      "Perform manual and automated testing using Burp Suite Professional, Nmap, Nuclei, ffuf, and custom scripts",
      "Assess authentication, authorization, session management, and access control mechanisms across all engagement types",
      "Evaluate cloud security posture and identify misconfiguration risks in AWS and Azure environments",
      "Develop proof-of-concept exploits demonstrating real business impact for each critical finding",
      "Produce technical reports with CVSS scoring and actionable remediation guidance for both technical and executive audiences",
      "Support clients through remediation validation and retesting activities post-fix",
      "Validate effectiveness of security controls including MFA, WAF configurations, and monitoring capabilities",
    ],
  },
  {
    org: "Cybersecurity Blue Team & Red Team",
    role: "Penetration Tester",
    date: "March 2024 – Nov 2025",
    intro:
      "A Dominican Republic-based offensive security firm — this is where I built the foundation of my pentesting career. The client base was broad: banking institutions, hospitals, schools, food and beverage companies, government entities, and hospitality businesses, each with its own risk profile and compliance requirements. I also had the opportunity to speak at national cybersecurity events including RedTeamRD and HackonRD.",
    responsibilities: [
      "Performed penetration testing across cloud environments (Azure, AWS, GCP), web applications, and internal networks, identifying vulnerabilities from informational to critical severity",
      "Conducted Azure and Office 365 security assessments, including Azure AD / Entra ID analysis, IAM and RBAC misconfiguration review, managed identities, and Key Vault security",
      "Executed initial access scenarios via exposed services, credential abuse, and phishing simulations, followed by post-exploitation, lateral movement, and privilege escalation in cloud environments",
      "Identified and exploited misconfigurations in IAM roles, RBAC assignments, and Azure service principals to demonstrate privilege escalation paths",
      "Performed internal network assessments against domain-joined environments, including Active Directory enumeration with BloodHound, credential dumping, and lateral movement techniques",
      "Assessed web applications for OWASP Top 10 vulnerabilities including IDOR, BFLA, SQLi, XSS, SSRF, XXE, JWT attacks, CORS misconfigurations, and broken authentication",
      "Performed reverse engineering and dynamic analysis of Android applications using Frida and Burp Suite",
      "Automated reconnaissance workflows with custom Python and Bash scripts, reducing manual effort across engagements",
      "Delivered detailed technical and executive reports with CVSS scoring and remediation strategies tailored to each client",
    ],
  },
  {
    org: "Grey Matter Technologies / Hotel W&P Santo Domingo",
    role: "Infrastructure Manager — Outsourced to Hotel W&P",
    date: "Jan 2023 – March 2024",
    intro:
      "Grey Matter Technologies is a managed IT services provider. In this role I was outsourced full-time to Hotel W&P Santo Domingo, where I served as their on-site IT department — my entry point into infrastructure and the technical foundation I later brought into security. I started at level 1 support and, by the time I left, was managing the entire IT environment of the hotel independently.",
    responsibilities: [
      "Handled technical support from level 1 through level 3, resolving end-user issues, server incidents, and network outages across the property",
      "Administered and maintained Windows Active Directory, managing user accounts, group policies, and access control across all hotel departments",
      "Managed Ubiquiti network infrastructure including switches, access points, and network segmentation across the hotel floors and back-office environments",
      "Administered Azure AD and Google Workspace for cloud identity and collaboration services used across the organization",
      "Configured and maintained Palo Alto and Cisco firewalls, managing security policies, VPN access, and traffic segmentation",
      "Managed VoIP phone systems and coordinated with vendors for hardware lifecycle and service continuity",
      "Supported incident response and root cause analysis for IT service disruptions, minimizing downtime in a 24/7 hospitality environment",
      "Documented network topology, IT procedures, and configuration standards to maintain operational continuity",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Experience</h1>

      <div className="prose-post mt-8">
        <p>
          I got into cybersecurity through pure curiosity. Growing up surrounded by technology and with a
          natural pull toward software engineering, a mentor pointed me toward ITLA, the best institution
          for cybersecurity in the Dominican Republic at the time, and that changed everything.
        </p>
        <p>
          What keeps me in this field is the feeling of making something do what it was never meant to
          do. Finding the hidden path, breaking what looked unbreakable, and then explaining exactly how
          and why — that is what drives me. I am a creative, curious, and persistent professional who
          communicates clearly and does not give up until the job is done.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-paper-line bg-paper-dark/60 p-4 text-center">
            <p className="font-display text-2xl text-rust-text">{stat.value}</p>
            <p className="mt-1 text-xs text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-8">
        {JOBS.map((job) => (
          <Card key={job.org}>
            <p className="text-xs text-ink-soft">{job.date}</p>
            <h2 className="mt-1 font-display text-xl text-ink">{job.org}</h2>
            <p className="text-sm text-rust-text">{job.role}</p>
            <p className="mt-3 text-sm text-ink-soft">{job.intro}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
