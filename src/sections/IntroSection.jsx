import Container from "../ui/Container";
import { introHighlights, secondaryHighlights } from "../data/sections";

const introParagraphs = [
  "欢迎来到 BEYOND —— 慕尼黑最排外的私人奢华精品酒店。在这里，您不只是客人，更是老友。",
];

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt
  )}`;

export default function IntroSection() {
  return (
    <section className="min-h-[1173px] w-full bg-[#1f1f1f] text-[#f4f1ec]">
      <Container className="py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="text-[12px] uppercase tracking-[0.36em] text-white/50">
            Beyond by Geisel
          </span>
          <h2 className="mt-3 font-display text-[26px] uppercase tracking-[0.26em] text-white sm:text-[30px] md:text-[34px]">
            Luxus Boutique Hotel in München
          </h2>
          <div className="mt-6 space-y-4 text-[13px] leading-7 text-white/80">
            {introParagraphs.map((text, index) => (
              <p key={text}>
                {index === 1 ? (
                  <>
                    Ob Sie München zum ersten Mal besuchen oder bereits ein
                    Liebhaber der Stadt sind – das BEYOND by Geisel ist die
                    perfekte Adresse für Ihren Aufenthalt. Unser mehrfach{" "}
                    <a
                      href="#auszeichnungen"
                      className="text-white underline decoration-brand-gold/70 underline-offset-4 transition hover:text-white"
                    >
                      ausgezeichnetes Hotel
                    </a>{" "}
                    mit nur 19 stilvoll eingerichteten{" "}
                    <a
                      href="#zimmer"
                      className="text-white underline decoration-brand-gold/70 underline-offset-4 transition hover:text-white"
                    >
                      Zimmern und Suiten
                    </a>{" "}
                    bietet Ihnen ein unvergleichliches Erlebnis:
                    maßgeschneiderter Service und eine erstklassige Lage direkt
                    am Marienplatz.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-8">
          {introHighlights.map((item) => (
            <div
              key={item.id}
              className="group flex w-full flex-col gap-4 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={buildImageUrl(item.imagePrompt)}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <span className="text-center text-[12px] uppercase tracking-[0.36em] text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-8">
          {secondaryHighlights.map((item) => (
            <div
              key={item.id}
              className="group flex w-full flex-col gap-4 md:w-[calc(50%-1rem)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={buildImageUrl(item.imagePrompt)}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <span className="text-center text-[12px] uppercase tracking-[0.36em] text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}