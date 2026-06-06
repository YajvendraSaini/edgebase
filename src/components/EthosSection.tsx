const declarations = [
  "You've shipped real code, clean interfaces, or actual revenue before.",
  'You think about your work at 2am without being asked.',
  "You're building something in Jaipur that shouldn't stay in Jaipur.",
  'You are terrified of spending another year building something nobody cares about.',
  'You realize that being the smartest person in your bedroom is a liability, not an asset.',
  'You are entirely done waiting for the "right environment."',
]

export function EthosSection() {
  return (
    <section
      id="ethos"
      className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="font-display text-4xl text-[#000000] md:text-[40px]"
          style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
        >
          Don&apos;t apply if you&apos;re waiting for the &quot;right time.&quot;
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6F6F6F]">
          This room is strictly for high-agency builders—the 1% of Jaipur&apos;s
          builders. You only belong here if:
        </p>

        <ul className="mx-auto mt-10 max-w-[600px] space-y-2 text-left sm:text-center">
          {declarations.map((item) => (
            <li
              key={item}
              className="text-lg font-medium leading-[2.2] text-[#000000]"
            >
              <span className="text-[#6F6F6F]">— </span>
              {item}
            </li>
          ))}
        </ul>

        <hr className="mx-auto mt-16 max-w-md border-[#E5E5E5]" />

        <p className="mx-auto mt-10 max-w-lg font-display text-lg italic text-[#6F6F6F]">
          If you&apos;ve never shipped but you&apos;re burning to—and you can
          prove it—we still want to talk.
        </p>
      </div>
    </section>
  )
}
