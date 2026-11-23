import { CERTS } from "@/lib/certs";

// Compact cert pills in the home hero, visible above the fold. Each pill
// links to the cert's public verification page; full names and issuers
// live on About.
export function CertPills() {
  return (
    <div className="mt-2 flex flex-col items-center gap-2">
      <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40">Certified</p>
      <div className="flex flex-wrap justify-center gap-2">
        {CERTS.map((cert) => {
          const content = (
            <>
              <span className="text-rust">✓</span>
              {cert.short}
              {cert.url && <span className="text-cream/40 group-hover:text-rust">↗</span>}
            </>
          );
          const className =
            "group flex items-center gap-1.5 rounded-full border border-rust/50 bg-rust/10 px-3 py-1 text-xs font-medium text-cream transition-colors hover:border-rust hover:bg-rust/20";
          return cert.url ? (
            <a
              key={cert.short}
              href={cert.url}
              target="_blank"
              rel="noreferrer noopener"
              title={`Verify ${cert.short} — ${cert.name} (${cert.issuer})`}
              className={className}
            >
              {content}
            </a>
          ) : (
            <span key={cert.short} title={`${cert.name} (${cert.issuer})`} className={className}>
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}
