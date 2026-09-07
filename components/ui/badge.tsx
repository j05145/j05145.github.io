export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-paper-line bg-paper-dark px-2.5 py-0.5 text-xs text-ink-soft">
      {children}
    </span>
  );
}
