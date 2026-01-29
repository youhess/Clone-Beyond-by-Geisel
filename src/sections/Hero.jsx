import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="bg-neutral-950">
      <div className="relative h-[750px] w-full min-h-[360px] max-h-[80vh] overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="https://www.geisel-privathotels.de/assets/beyond/video/video-header-home-beyond-1920x760-pixel.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="bg-white">
        <Container className="flex h-[220px] w-full flex-col items-center justify-center gap-3 text-center font-['Rehn',sans-serif] text-[23px] font-bold uppercase tracking-[0.16em] text-[#2c2722]">
          <span>BEYOND BY GEISEL - LUXUS BOUTIQUE HOTEL IN MÜNCHEN</span>
          <span>您的奢华避风港，坐落于慕尼黑核心地带。</span>
        </Container>
      </div>
    </section>
  );
}
