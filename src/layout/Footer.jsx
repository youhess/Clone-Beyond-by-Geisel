import { Fingerprint, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import {
  footerBrand,
  footerBrandNavs,
  footerBrandOverview,
  footerPartnerLogos,
  footerUmbrella,
} from "../data/sections";

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt,
  )}`;

export default function Footer() {
  return (
    <footer className="bg-[#0f0c0a] text-white">
      <div className="bg-grid-faint bg-[length:40px_40px]">
        <Container className="py-14">
          <h2 className="text-[18px] font-semibold uppercase tracking-[0.28em] text-white">
            {footerBrand.title}
          </h2>
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="text-[14px] leading-7 text-white/80 lg:w-[28%]">
              <p className="space-y-2">
                {footerBrand.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={`mailto:${footerBrand.email}`}
                className="mt-3 inline-block text-white/90 underline underline-offset-4"
              >
                {footerBrand.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-8 lg:w-[44%]">
              {footerBrandNavs.map((nav) => (
                <div key={nav.id} className="w-full sm:w-1/3">
                  <h3 className="text-[13px] uppercase tracking-[0.24em] text-white/70">
                    {nav.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-[14px] text-white/75">
                    {nav.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          className="transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:w-[28%]">
              {footerPartnerLogos.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.href}
                  className="inline-flex items-center justify-start"
                >
                  <img
                    src={buildImageUrl(logo.imagePrompt)}
                    alt={logo.label}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#f1eeee] text-[#2c2722]">
        <Container className="py-12">
          <div className="text-[20px] uppercase  text-[#2c2722]">
            {footerUmbrella.title}
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            {footerUmbrella.navs.map((nav) => (
              <div key={nav.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <h3 className="text-[18px] uppercase text-[#2c2722]/70">
                  {nav.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[14px] text-[#2c2722]/80">
                  {nav.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="transition hover:text-[#2c2722]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div
        className="bg-[#e7e2dd] bg-cover bg-center"
        style={{
          backgroundImage: `url(${buildImageUrl(
            footerBrandOverview.backgroundPrompt,
          )})`,
        }}
      >
        <div className="bg-white/70">
          <Container className="py-10">
            <div className="flex flex-wrap items-center justify-center gap-10">
              {footerBrandOverview.logos.map((logo) => (
                <a key={logo.id} href={logo.href} className="inline-flex">
                  <img
                    src={buildImageUrl(logo.imagePrompt)}
                    alt={logo.label}
                    className="h-[150px] w-[150px] w-auto object-contain text-black"
                  />
                </a>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-[80]">
        <a
          href="#usercentrics"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2c2722] text-white shadow-lg transition hover:scale-[1.02]"
          aria-label="Usercentrics"
        >
          <Fingerprint className="h-6 w-6" />
        </a>
      </div>
      <div className="fixed bottom-4 right-4 z-[80]">
        <a
          href="#whatsapp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-[1.02]"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}