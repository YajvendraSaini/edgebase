export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-display text-lg text-[#000000]">Edge Base</p>
          <p className="text-[13px] text-[#6F6F6F]">Built in Rajasthan.</p>
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[11px] text-[#6F6F6F]">© 2025 Edge Base</p>
          <a
            href="https://x.com/yajvendrasaini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#000000] transition-opacity hover:underline hover:opacity-70"
          >
            @yajvendrasaini
          </a>
        </div>
      </div>
    </footer>
  )
}
