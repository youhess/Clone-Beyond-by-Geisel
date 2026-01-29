import Container from "../ui/Container";
import { awardsIntro, suitesHeroImage, suitesIntro } from "../data/sections";

export default function SuitesSection() {
  return (
    <section className="bg-[#1f1f1f] text-[#f4f1ec]">
      <Container className="py-16 text-center">
        <span className="text-[12px] uppercase tracking-[0.36em] text-white/50">
          {suitesIntro.flagline}
        </span>
        <h2 className="mt-3 text-[25px] uppercase tracking-[0.26em] text-white sm:text-[30px] md:text-[34px]">
          {suitesIntro.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-[13px] leading-7 text-white/80">
          {suitesIntro.body}
        </p>
        <a
          href={suitesIntro.ctaHref}
          className="mt-8 inline-flex h-10 items-center justify-center border border-brand-gold bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#2c2722] transition hover:bg-white/90"
        >
          {suitesIntro.ctaLabel}
        </a>
      </Container>

      <div className="mx-auto w-full max-w-[1492px] px-4 sm:px-6 lg:px-8">
        <div className="aspect-[1492/591] w-full overflow-hidden bg-black/10">
          <img
            src={`https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=${encodeURIComponent(suitesHeroImage.imagePrompt)}`}
            alt={suitesHeroImage.alt}
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      <Container className="pb-16 pt-14 text-center">
        <span className="text-[12px] uppercase tracking-[0.36em] text-white/50">
          {awardsIntro.flagline}
        </span>
        <h3 className="mt-3 font-display text-[22px] uppercase tracking-[0.26em] text-white sm:text-[26px]">
          {awardsIntro.headline}
        </h3>
        <p className="mx-auto mt-6 max-w-[680px] text-[13px] leading-7 text-white/80">
          {awardsIntro.body}
        </p>
        <a
          href={awardsIntro.ctaHref}
          className="mt-8 inline-flex h-10 items-center justify-center border border-brand-gold bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#2c2722] transition hover:bg-white/90"
        >
          {awardsIntro.ctaLabel}
        </a>
      </Container>
    </section>
  );
}