export function Concept({ children }: { children: React.ReactNode }) {
  return (
    <div className="concept-box">
      <div className="concept-label">Concept</div>
      <p>{children}</p>
    </div>
  );
}
