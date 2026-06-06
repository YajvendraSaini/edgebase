const stats = [
  { label: 'Capacity', value: '12 Residents max' },
  { label: 'Location', value: 'Jaipur, Rajasthan' },
  { label: 'Status', value: 'Applications open' },
]

export function ManifestoSection() {
  return (
    <section id="about" className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[55%_45%] md:gap-16">
          <blockquote
            className="font-display text-2xl leading-[1.5] text-[#000000] md:text-[32px]"
          >
            <em>
              Every great company started somewhere small. A garage. A dorm room. A
              late night with the right people. Edge Base is that room in Jaipur.
            </em>
          </blockquote>

          <div className="space-y-6 text-base leading-[1.8] text-[#6F6F6F]">
            <p>
              Jaipur is building. The talent is here. The ambition is here.
              What&apos;s been missing is a place to concentrate it — a house
              where founders live next to engineers, where a conversation at 2am
              becomes a company by morning.
            </p>
            <p>
              Edge Base is that place. We don&apos;t host events. We don&apos;t
              run workshops. We give you a room, a network, and an expectation:
              ship something real.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#6F6F6F]">
                {stat.label}
              </p>
              <p className="mt-3 font-display text-2xl text-[#000000] md:text-[28px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
