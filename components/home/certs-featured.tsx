import { CERTS, type Cert } from "@/lib/certs";

// Home page certifications: the top-tier cert (first in CERTS) is featured,
// the rest are compact rows. Each links to its public verification page.

function CertLink({ cert, className, children }: { cert: Cert; className?: string; children: React.ReactNode }) {
  if (!cert.url) return <div className={className}>{children}</div>;
  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer noopener"
      title={`Verify ${cert.short} — ${cert.name}`}
      className={className}
    >
      {children}
    </a>
  );
}

export function CertsFeatured() {
  const [top, ...rest] = CERTS;
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16">
      <h2 className="font-display text-2xl text-ink">Certifications</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        <CertLink
          cert={top}
          className="group relative overflow-hidden rounded-lg border border-rust/50 bg-leather p-6 text-cream transition-colors hover:border-rust md:col-span-3"
        >
          <span className="absolute -bottom-8 -right-3 font-display text-8xl text-rust/10 select-none" aria-hidden="true">
            {top.short}
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-rust">Latest · Expert level</p>
          <p className="mt-3 font-display text-4xl tracking-wide">{top.short}</p>
          <p className="mt-1 text-sm text-cream/80">{top.name}</p>
          <p className="mt-6 flex items-center justify-between text-xs text-cream/50">
            <span>
              {top.issuer} · {top.year}
            </span>
            <span className="text-rust">Verify credential ↗</span>
          </p>
        </CertLink>
        <div className="flex flex-col divide-y divide-paper-line rounded-lg border border-paper-line bg-paper-dark/60 md:col-span-2">
          {rest.map((cert) => (
            <CertLink
              key={cert.short}
              cert={cert}
              className="group flex flex-1 items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-rust/5"
            >
              <div>
                <p className="font-display text-lg text-ink">{cert.short}</p>
                <p className="text-xs text-ink-soft">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <span className="text-rust-text opacity-60 group-hover:opacity-100">↗</span>
            </CertLink>
          ))}
        </div>
      </div>
    </section>
  );
}
