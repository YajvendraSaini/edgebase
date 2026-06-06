const features = [
  {
    index: '01',
    label: 'The Calibration',
    description:
      'Being around people who operate 10x faster permanently recalibrates your baseline of what is possible.',
  },
  {
    index: '02',
    label: 'The Feedback Loop',
    description:
      'Brutal, instant critiques from operators who actually know what they are talking about. No sugarcoating.',
  },
  {
    index: '03',
    label: 'The Frictionless State',
    description:
      'Fast internet, zero lease paperwork, no distractions. Just sit down and execute.',
  },
  {
    index: '04',
    label: 'The Network Density',
    description:
      "You don't need to fly to Bangalore to find your co-founder or early users. They are at the table next to you.",
  },
]

export function TheHouseSection() {
  return (
    <section
      id="the-residency"
      className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F]">
              The Residency
            </p>

            <h2
              className="mt-4 font-display text-4xl text-[#000000] md:text-[44px]"
              style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
            >
              More than a room of 12 people.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-[1.8] text-[#6F6F6F]">
              <p>
                If you put 12 average people in a room, you get a coworking space.
                If you put 12 outliers in a room, you get an anomaly.
              </p>
              <p>
                Edge Base isn&apos;t just about real estate; it&apos;s engineered
                density. It is a psychological lever designed to make you deeply
                uncomfortable with moving slow. When the person sitting next to you
                scales a startup, fixes a fatal backend error, or redesigns an
                entire user flow in an afternoon, your excuses evaporate. We
                provide the space; the room provides the pressure.
              </p>
            </div>

            <div className="mt-10 border border-[#E5E5E5] px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#6F6F6F]">
                The only metric:
              </p>
              <p className="mt-2 font-display text-xl text-[#000000]">
                What did you ship today?
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.label}
                className="group relative overflow-hidden border border-[#E5E5E5] bg-[#FFFFFF] p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#000000] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-3 font-display text-[72px] leading-none text-[#F3F3F3] transition-colors duration-300 group-hover:text-[#EBEBEB]"
                >
                  {feature.index}
                </span>

                <div className="relative">
                  <div className="mb-4 h-px w-8 bg-[#000000] transition-all duration-300 group-hover:w-12" />
                  <h3 className="font-display text-xl text-[#000000]">
                    {feature.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6F6F6F]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
