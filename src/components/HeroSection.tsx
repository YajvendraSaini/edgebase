export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-32 text-center">
      <h1
        className="animate-fade-rise max-w-5xl font-display text-[44px] font-normal text-[#000000] opacity-0 sm:text-6xl md:text-7xl lg:text-[72px] [text-shadow:0_0_20px_rgba(255,255,255,0.95),0_0_40px_rgba(255,255,255,0.85)]"
        style={{ lineHeight: 1.05, letterSpacing: '-2.46px' }}
      >
        Where Jaipur&apos;s most ambitious people come to build.
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-[560px] text-base leading-relaxed text-[#000000] opacity-0 sm:text-lg [text-shadow:0_0_20px_rgba(255,255,255,0.95),0_0_40px_rgba(255,255,255,0.85)]">
        Edge Base is the proving ground where Jaipur&apos;s best engineers,
        designers, and founders finally sit side-by-side to execute.
      </p>

      <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row">
        <a
          href="#apply"
          className="rounded-full bg-[#000000] px-10 py-4 text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03] sm:px-14 sm:py-5 sm:text-base"
        >
          Apply for Night 0
        </a>
        <a
          href="#ethos"
          className="rounded-full border border-[#000000] bg-transparent px-10 py-4 text-sm text-[#000000] transition-transform hover:scale-[1.03] sm:px-14 sm:py-5 sm:text-base"
        >
          Read the Ethos
        </a>
      </div>
    </section>
  )
}
