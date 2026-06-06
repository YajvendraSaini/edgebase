export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-3">
        <p className="text-center font-display text-lg text-[#000000] md:text-left">
          Edge Base <span className="text-[#6F6F6F]">| © 2026</span>
        </p>

        <p className="text-center text-[13px] italic leading-relaxed text-[#6F6F6F]">
          The world is built in quiet rooms by people who refuse to stop.
        </p>

        <p className="text-center text-[13px] text-[#6F6F6F] md:text-right">
          Follow{' '}
          <a
            href="https://x.com/yajvendrasaini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] transition-opacity hover:underline hover:opacity-70"
          >
            @yajvendrasaini
          </a>
        </p>
      </div>
    </footer>
  )
}
