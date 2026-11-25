import type { SVGProps } from "react";

/** Elemento gráfico recorrente: arco em traço fino (referência às linhas finas do monograma e às artes de parede da clínica). */
export function ArchLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 180" fill="none" aria-hidden {...props}>
      <path d="M10 180V60a50 50 0 0 1 100 0v120" stroke="currentColor" strokeWidth="0.75" vectorEffect="non-scaling-stroke" />
      <path d="M26 180V64a34 34 0 0 1 68 0v116" stroke="currentColor" strokeWidth="0.75" vectorEffect="non-scaling-stroke" opacity=".5" />
    </svg>
  );
}
