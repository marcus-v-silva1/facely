import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-cream/60 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <Logo variant="full" className="h-28 text-cream/80" />
        <p className="text-sm font-light">{site.tagline}</p>
        <div className="flex flex-col items-center gap-2 text-sm md:items-end">
          <a href={site.contact.instagram} target="_blank" rel="noopener" className="hover:text-cream">
            Instagram @facely.ea
          </a>
          <span>© {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
