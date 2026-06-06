const features = [
  {
    label: 'The room',
    description: 'Private space, fast internet, no lease paperwork',
  },
  {
    label: 'The network',
    description: '12 residents max, all actually building',
  },
  {
    label: 'The rhythm',
    description: 'Weekly demos, monthly operator dinners, daily noise',
  },
  {
    label: 'The location',
    description:
      "Jaipur. If you're from here, you know why. If you're not, you'll find out",
  },
]

export function TheHouseSection() {
  return (
    <section
      id="the-house"
      className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div>
          <h2
            className="font-display text-4xl text-[#000000]"
            style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
          >
            More than a space.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-[1.8] text-[#6F6F6F]">
            <p>
              Most coworking spaces give you a desk. Most accelerators give you a
              curriculum. Edge Base gives you something harder to find: a room
              full of people who are actually building, in a city that&apos;s
              waking up to what it can be.
            </p>
            <p>
              The residency is 3 to 12 months. You live here. You eat here. You
              ship from here. Residents are handpicked — not by credentials, but
              by evidence of building and an inability to stop.
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
