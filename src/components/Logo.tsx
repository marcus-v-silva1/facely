/**
 * Logo oficial vetorizada (public/brand). Pintada via máscara CSS para herdar `currentColor`
 * e funcionar em fundo claro ou escuro com o mesmo arquivo.
 */
const files = {
  full: { src: "/brand/logo-facely.svg", ratio: "430 / 320" },
  monogram: { src: "/brand/monogram.svg", ratio: "300 / 298" },
};

export function Logo({ variant = "monogram", className = "" }: { variant?: keyof typeof files; className?: string }) {
  const { src, ratio } = files[variant];
  return (
    <span
      role="img"
      aria-label="Facely Estética Avançada"
      className={`inline-block bg-current ${className}`}
      style={{ aspectRatio: ratio, mask: `url(${src}) center / contain no-repeat`, WebkitMask: `url(${src}) center / contain no-repeat` }}
    />
  );
}
