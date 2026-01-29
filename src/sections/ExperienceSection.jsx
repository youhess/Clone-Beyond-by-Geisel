import Container from "../ui/Container";
import { experienceCards } from "../data/sections";

const experienceHeadline =
  "Erleben Sie unvergessliche Momente im BEYOND. Ob exklusive Hotel-Angebote, massgeschneiderte Arrangements fuer internationale Messen und Top-Konzerte in Muenchen oder individuelle Arrangements fuer private Feiern.";

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt
  )}`;

export default function ExperienceSection() {
  return (
    <section className="bg-white text-[#2c2722]">
      <Container className="py-16">
        <div className="mx-auto max-w-[720px] text-left font-['Rehn',sans-serif] text-[15px] font-semibold uppercase leading-7 tracking-[0.22em] text-[#2c2722]">
          {experienceHeadline}
        </div>

        <div className="mt-16 flex flex-wrap gap-8">
          {experienceCards.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col items-center gap-6 md:w-[calc(33.333%-1.34rem)]"
            >
              <a href={item.href} className="block w-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                  <img
                    src={buildImageUrl(item.imagePrompt)}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>
              </a>
              <a
                href={item.href}
                className="inline-flex h-10 items-center justify-center border border-brand-gold px-8 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2c2722] transition hover:bg-brand-gold/10"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}