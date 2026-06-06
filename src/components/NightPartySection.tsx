const timeline = [
  {
    time: '8:00 PM',
    title: 'Doors open',
    description: 'Chai, introductions, no agenda yet',
  },
  {
    time: '9:00 PM',
    title: '60-second pitches',
    description:
      'Anyone with an idea stands up. One minute. Then people pick what to build',
  },
  {
    time: '9:30 PM',
    title: 'Build starts',
    description: 'Teams form or you go solo. The room goes quiet',
  },
  {
    time: '1:00 AM',
    title: 'Midnight checkpoint',
    description:
      'Two sentences each: where are you. Not a demo. Just pulse',
  },
  {
    time: '5:00 AM',
    title: 'Final push',
    description: 'Two hours left. Cut scope, not quality',
  },
  {
    time: '7:00 AM',
    title: 'Demo morning',
    description:
      '5 minutes each. Show what runs. Kachori and paratha. Sun is up',
  },
]

export function NightPartySection() {
  return (
    <section id="the-night" className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#000000]">
          First Event
        </p>

        <h2
          className="mt-4 font-display text-[44px] text-[#000000]"
          style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
        >
          Night Party.
        </h2>

        <p className="mt-4 text-lg italic text-[#6F6F6F]">
          8pm to sunrise. 12 builders. One room. Something ships.
        </p>

        <div className="mt-10 max-w-[560px] space-y-6 text-base leading-[1.8] text-[#6F6F6F]">
          <p>
            Before the residency, before the house, before all of it — there&apos;s
            one night. Night Party is how Edge Base begins. You come with an idea.
            You find people who get it. You build until the sun comes up. At 7am
            you demo what you made — not a slide, not a plan — something that
            runs.
          </p>
          <p>
            This is Night Zero. If the vibe at 3am is right, we know the house
            works.
          </p>
        </div>

        <div className="relative mt-16 max-w-xl border-l border-[#E5E5E5] pl-8">
          {timeline.map((entry) => (
            <div key={entry.time} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-[#000000]" />
              <p className="font-display text-[15px] text-[#000000]">
                {entry.time}
              </p>
              <p className="mt-1 text-sm font-medium text-[#000000]">
                {entry.title}
              </p>
              <p className="mt-1 text-[13px] text-[#6F6F6F]">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
