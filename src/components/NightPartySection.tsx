import night0Image from '../assets/night0.png'

export function NightPartySection() {
  return (
    <section id="night-0" className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#000000]">
            The Initiation
          </p>

          <h2
            className="mt-4 font-display text-[44px] text-[#000000]"
            style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
          >
            Night 0.
          </h2>

          <p className="mt-4 text-lg italic text-[#6F6F6F]">
            12 outliers. Extreme focus. Undeniable outcomes.
          </p>

          <div className="mt-10 space-y-6 text-base leading-[1.8] text-[#6F6F6F]">
            <p>
              Night 0 isn&apos;t a hackathon; it&apos;s an audit of your execution
              speed. You bring an idea, a stalled project, or a broken product. You
              sit shoulder-to-shoulder with the 1% of Jaipur&apos;s builders and
              founders.
            </p>
            <p>
              We remove the friction and supply the high-density environment. When
              your screen blurs and your energy crashes deep into the night, premium
              food drops in to keep the momentum brutal and unbroken. By sunrise,
              you don&apos;t leave with a slide deck or a participation certificate.
              You leave having achieved a month&apos;s worth of progress in a single
              session. You leave with an outcome.
            </p>
          </div>

          <a
            href="#apply"
            className="mt-10 inline-block rounded-full bg-[#000000] px-8 py-3.5 text-sm text-[#FFFFFF] transition-transform hover:scale-[1.03]"
          >
            Apply Now
          </a>
        </div>

        <div className="relative mx-auto w-[49%] lg:justify-self-center">
          <div className="overflow-hidden border border-[#E5E5E5] shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <img
              src={night0Image}
              alt="Edge Base Night 0 — apply for the initiation"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
