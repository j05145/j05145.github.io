import type { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Josias Fabián — sound technician, ITLA-trained, offensive security.",
};

const TALKS = [
  { org: "RedTeamRD Meetup", title: "Azure Cloud Hacking: Discovering Azure's Flaws", date: "June 2024" },
];

const CERTS = [
  { name: "Burp Suite Certified Practitioner (BSCP)", status: "Issued 2024" },
  { name: "Certified Bug Bounty Hunter (CBBH)", status: "Issued 2024" },
  { name: "Certified Pentesting Against Azure Cloud", status: "Issued 2024" },
  { name: "Certified Web Exploitation Expert (CWEE)", status: "In progress" },
];

const VOLUNTEER = [
  {
    org: "RedTeamRD",
    role: "Volunteer & Staff",
    date: "2023 – Present",
    body: "Actively involved in planning and executing cybersecurity events. I deliver technical talks and conduct hands-on hacking rooms focused on Azure pentesting, web exploitation, and cloud-based threat simulations. I also support logistics, speaker coordination, and participant engagement.",
  },
  {
    org: "HackConRD",
    role: "Hacking Room Creator & Organizer",
    date: "2023 – Present",
    body: "Volunteer staff member and technical contributor. I design and run hacking rooms on topics such as Azure exploitation, web attacks, and offensive cloud scenarios. I also assist in event setup, coordination, and mentoring participants during live workshops.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">About</h1>

      <div className="prose-post mt-8">
        <p>
          I serve as the lead sound technician at my church, where I contribute weekly with dedication
          and precision. This role has strengthened my sense of responsibility, teamwork, and attention
          to technical detail.
        </p>
        <p>
          Professionally, I was trained at the Technological Institute of the Americas (ITLA) and I&rsquo;m
          currently pursuing a degree in engineering with a strong focus on offensive cybersecurity.
        </p>
        <p>
          I&rsquo;m passionate about learning and sharing knowledge through technical research, public
          talks, and building home labs where I simulate real-world attack and defense scenarios. I
          enjoy hacking, diving deep into exploitation techniques, and researching vulnerabilities in
          cloud and web environments.
        </p>
        <p>
          In my free time, I love playing piano, watching series like Breaking Bad and Game of Thrones,
          and finding balance between creativity and technology.
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">Talks</h2>
      <div className="mt-4 flex flex-col gap-3">
        {TALKS.map((talk) => (
          <Card key={talk.title}>
            <p className="text-xs text-ink-soft">{talk.org} · {talk.date}</p>
            <p className="mt-1 text-ink">{talk.title}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">Certifications</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {CERTS.map((cert) => (
          <Card key={cert.name}>
            <p className="text-ink">{cert.name}</p>
            <p className="mt-1 text-xs text-ink-soft">{cert.status}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">Community</h2>
      <div className="mt-4 flex flex-col gap-4">
        {VOLUNTEER.map((v) => (
          <Card key={v.org}>
            <p className="text-xs text-ink-soft">{v.role} · {v.date}</p>
            <p className="mt-1 text-ink">{v.org}</p>
            <p className="mt-2 text-sm text-ink-soft">{v.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
