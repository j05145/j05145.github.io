/**
 * Diagrama de flujo genérico para las cadenas de ataque de los write-ups.
 * Reemplaza los SVG hardcodeados (azul/ámbar/coral/rojo) del blog viejo por
 * uno data-driven que usa los tokens de color de la marca (rust/mustard) —
 * sin rojo, igual que el resto del sitio.
 */
type Tone = "neutral" | "warn" | "critical";

export interface FlowStep {
  label: string;
  title: string;
  subtitle: string;
  tone?: Tone;
}

const TONE_STYLES: Record<Tone, { fill: string; stroke: string; title: string }> = {
  neutral: { fill: "var(--color-paper-dark)", stroke: "var(--color-paper-line)", title: "var(--color-ink)" },
  warn: { fill: "var(--color-mustard-dark)", stroke: "var(--color-mustard)", title: "var(--color-ink)" },
  critical: { fill: "var(--color-mustard)", stroke: "var(--color-mustard)", title: "var(--color-leather-dark)" },
};

const BOX_H = 56;
const GAP = 34;
const BOX_W = 460;
const X = 110;

export function FlowChart({ title, steps }: { title: string; steps: FlowStep[] }) {
  const width = X * 2 + BOX_W;
  const height = steps.length * (BOX_H + GAP) - GAP + 20;

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img">
      <title>{title}</title>
      <defs>
        <marker id="fc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      {steps.map((step, i) => {
        const tone = TONE_STYLES[step.tone ?? "neutral"];
        const y = i * (BOX_H + GAP) + 10;
        const cy = y + BOX_H / 2;
        return (
          <g key={i}>
            {i > 0 && (
              <line
                x1={X + BOX_W / 2}
                y1={y - GAP}
                x2={X + BOX_W / 2}
                y2={y}
                stroke="var(--color-ink-soft)"
                strokeWidth={1.5}
                markerEnd="url(#fc-arrow)"
              />
            )}
            <rect x={X} y={y} width={BOX_W} height={BOX_H} rx={8} fill={tone.fill} stroke={tone.stroke} strokeWidth={1} />
            <text x={X + BOX_W / 2} y={cy - 8} textAnchor="middle" fontSize={14} fontWeight={500} fill={tone.title}>
              {step.title}
            </text>
            <text x={X + BOX_W / 2} y={cy + 12} textAnchor="middle" fontSize={12} fill={tone.title} opacity={0.75}>
              {step.subtitle}
            </text>
            <text x={16} y={cy} textAnchor="start" fontSize={12} fill="var(--color-ink-soft)">
              {step.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
