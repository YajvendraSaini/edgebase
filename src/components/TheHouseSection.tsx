const features = [
  {
    label: 'The Calibration',
    description:
      'Being around people who operate 10x faster permanently recalibrates your baseline of what is possible.',
  },
  {
    label: 'The Feedback Loop',
    description:
      'Brutal, instant critiques from operators who actually know what they are talking about. No sugarcoating.',
  },
  {
    label: 'The Frictionless State',
    description:
      'Fast internet, zero lease paperwork, no distractions. Just sit down and execute.',
  },
  {
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
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div>
          <h2
            className="font-display text-4xl text-[#000000]"
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
              entire user flow in an afternoon, your excuses evaporate. We provide
              the space; the room provides the pressure.
            </p>
          </div>
        </div>

        <div>
          {features.map((feature) => (
            <div
              key={feature.label}
              className="border-t border-[#E5E5E5] py-6 first:border-t first:pt-0"
            >
              <p className="font-display text-[15px] text-[#000000]">
                {feature.label}
              </p>
              <p className="mt-2 text-sm text-[#6F6F6F]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
