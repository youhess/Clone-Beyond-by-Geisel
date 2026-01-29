import Container from "../ui/Container";

const buildImageUrl = (prompt) =>
  `https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(
    prompt
  )}`;

const ctaImagePrompt =
  "Macro photo of a black pencil with gold logo resting on a notebook, warm amber lighting, soft bokeh background, luxury hotel stationery, cinematic shallow depth of field";

export default function CtaBanner() {
  return (
    <section className="bg-neutral-900">
      <div className="relative h-[360px] w-full overflow-hidden md:h-[420px]">
        <img
          src={buildImageUrl(ctaImagePrompt)}
          alt="Beyond by Geisel desk detail"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-[13px] uppercase tracking-[0.36em] text-white">
            Auf einen Blick
          </h3>
          <a
            href="#services"
            className="inline-flex h-10 items-center justify-center border border-brand-gold bg-white px-10 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#2c2722] transition hover:bg-white/90"
          >
            Services
          </a>
        </Container>
      </div>
    </section>
  );
}