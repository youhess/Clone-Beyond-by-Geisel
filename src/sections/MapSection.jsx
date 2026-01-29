import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Container from "../ui/Container";
import { socialLinks } from "../data/sections";

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

export default function MapSection() {
  return (
    <section className="bg-[#efeae6] text-[#2c2722]">
      <Container className="flex flex-col gap-10 py-10 md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.26em]">
            Folgen Sie uns
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#2c2722] transition hover:text-brand-gold"
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:text-left">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.26em]">
            Newsletter abonnieren
          </h2>
          <a
            href="#newsletter"
            className="mt-5 inline-flex h-10 items-center justify-center border border-brand-gold bg-white px-10 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#2c2722] transition hover:bg-white/90"
          >
            Anmeldung
          </a>
        </div>
      </Container>
    </section>
  );
}