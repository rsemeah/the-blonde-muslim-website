import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-left">
            <Link href="/" className="font-serif text-2xl tracking-wide text-foreground">
              The Blonde Muslim
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Faith. Culture. Community.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[
              { href: "#about", label: "About" },
              { href: "#circle", label: "The Circle" },
              { href: "#muslim-texas", label: "Muslim Texas" },
              { href: "#partnerships", label: "Partnerships" },
              { href: "#vision", label: "Vision" },
              { href: "#contact", label: "Connect" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            &copy; {new Date().getFullYear()} The Blonde Muslim &middot; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
