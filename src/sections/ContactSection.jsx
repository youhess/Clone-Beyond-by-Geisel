import Container from "../ui/Container";
import { contactActions, contactSection } from "../data/sections";

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt
  )}`;

export default function ContactSection() {
  return (
    <section className="bg-white text-[#2c2722]">
      <Container className="py-16">
        <div className="mx-auto flex max-w-[520px] flex-col items-center text-center">
          <div className="relative w-full">
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <img
                  src={buildImageUrl(contactSection.image.imagePrompt)}
                  alt={contactSection.image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-14 border border-black/30 px-10 pb-8 pt-16">
              <h3 className="text-[18px] font-semibold uppercase tracking-[0.24em]">
                {contactSection.title}
              </h3>
              <div className="mt-4 space-y-2 text-[16px] leading-7 text-[#2c2722]">
                {contactSection.subtitle.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {contactActions.map((action) => (
                  <a
                    key={action.id}
                    href={action.href}
                    className="inline-flex h-10 min-w-[180px] items-center justify-center border border-brand-gold bg-white px-6 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#2c2722] transition hover:bg-white/90"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}