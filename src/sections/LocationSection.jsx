import Container from "../ui/Container";
import { locationSection } from "../data/sections";

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt
  )}`;

export default function LocationSection() {
  return (
    <section className="bg-white text-[#2c2722]">
      <Container className="flex flex-col items-start gap-10 py-16 lg:flex-row">
        <div className="w-full overflow-hidden lg:w-[560px] lg:flex-none">
          <div className="aspect-[5/4] w-full overflow-hidden bg-black/5">
            <img
              src={buildImageUrl(locationSection.image.imagePrompt)}
              alt={locationSection.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 font-['Rehn',sans-serif] lg:flex-1">
          <h3 className="text-[23px] font-semibold uppercase tracking-[0.22em] text-[#2c2722]">
            {locationSection.title}
          </h3>
          <p className="text-[20px] leading-8 text-[#2c2722]">
            {locationSection.lead}
          </p>
          <div className="space-y-5 text-[20px] leading-8 text-[#2c2722]">
            {locationSection.highlights.map((item) => (
              <p key={item.id}>
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}