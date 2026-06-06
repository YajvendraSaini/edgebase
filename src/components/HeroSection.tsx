export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-32 text-center">
      <p
        className="animate-fade-rise text-[11px] uppercase tracking-[0.2em] text-[#000000] opacity-0"
        style={{ letterSpacing: '0.2em' }}
      >
        Jaipur · Hacker House · Est. 2025
      </p>

      <h1
        className="animate-fade-rise-delay mt-6 max-w-5xl font-display text-[44px] font-normal text-[#000000] opacity-0 sm:text-6xl md:text-7xl lg:text-[72px]"
        style={{ lineHeight: 1.05, letterSpacing: '-2.46px' }}
      >
        Where Jaipur&apos;s most ambitious people come to build.
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-[480px] text-base leading-relaxed text-[#6F6F6F] opacity-0 sm:text-lg">
        Edge Base is a hacker house and startup residency for founders, engineers,
        and researchers who can&apos;t stop building. We start with one night.
      </p>

      <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row">
        <a
          href="#apply"
          className="rounded-full bg-[#000000] px-10 py-4 text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03] sm:px-14 sm:py-5 sm:text-base"
        >
          Apply for Night Party
        </a>
        <a
          href="#about"
          className="rounded-full border border-[#000000] bg-transparent px-10 py-4 text-sm text-[#000000] transition-transform hover:scale-[1.03] sm:px-14 sm:py-5 sm:text-base"
        >
          What is Edge Base?
        </a>
      </div>

      <p className="animate-fade-rise-delay-2 mt-10 text-[13px] text-[#6F6F6F] opacity-0">
        12 seats · Jaipur, Rajasthan · Applications open now
      </p>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[120px] text-[#F0F0F0] sm:text-[150px] md:text-[180px]"
      >
        EDGE BASE
      </div>
    </section>
  )
}
