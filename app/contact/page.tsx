import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Josias Fabián.",
};

const LINKS = [
  {
    label: "Email",
    value: "jfabiansec@outlook.com",
    href: "mailto:jfabiansec@outlook.com",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Discord",
    value: "wu.tang.cl4ng",
    href: null,
    icon: (
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.74 19.74 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    ),
  },
  {
    label: "X",
    value: "@JosiasEmanuelF1",
    href: "https://x.com/JosiasEmanuelF1",
    icon: (
      <path d="M749.063 0H951.844L597.656 459.375L1125 1227H778.906L493.594 819.281L165.938 1227H0L386.719 716.906L75 0H426.094L659.531 373.781L749.063 0ZM690.938 1096.88H787.812L262.969 128.344H160.781L690.938 1096.88Z" />
    ),
    viewBox: "0 0 1200 1227",
  },
  {
    label: "LinkedIn",
    value: "in/josias-fabián",
    href: "https://www.linkedin.com/in/josias-fabi%C3%A1n-02736b247/",
    icon: (
      <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Contact</h1>
      <p className="mt-3 text-ink-soft">Reach out through any of these — email is fastest.</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {LINKS.map((link) => {
          const content = (
            <>
              <svg
                className="h-7 w-7 shrink-0 text-ink-soft transition-colors group-hover:text-rust-text"
                viewBox={link.viewBox ?? "0 0 24 24"}
                fill={link.viewBox ? "currentColor" : "none"}
                stroke={link.viewBox ? undefined : "currentColor"}
                strokeWidth={link.viewBox ? undefined : 1.75}
              >
                {link.icon}
              </svg>
              <div className="min-w-0">
                <div className="truncate text-ink transition-colors group-hover:text-rust-text">{link.label}</div>
                <div className="truncate text-sm text-ink-soft">{link.value}</div>
              </div>
            </>
          );
          const className =
            "group flex items-center gap-4 rounded-lg border border-paper-line bg-paper-dark/60 p-4 transition-colors";
          return link.href ? (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
              {content}
            </a>
          ) : (
            <div key={link.label} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
