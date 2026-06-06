const declarations = [
  "You've shipped something real before",
  "You don't need a manager to start",
  'You think about your work at 2am without being asked',
  "You're building something in Jaipur that shouldn't stay in Jaipur",
  'You want co-conspirators, not colleagues',
  "You're done waiting for the right environment — you want to make it",
]

export function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="font-display text-4xl text-[#000000] md:text-[40px]"
          style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
        >
          You belong here if —
        </h2>

        <ul className="mx-auto mt-12 max-w-[600px] space-y-2 text-left sm:text-center">
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
          And if you&apos;ve never shipped but you&apos;re burning to — we still
          want to talk.
        </p>
      </div>
    </section>
  )
}
