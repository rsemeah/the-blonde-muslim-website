import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl font-semibold tracking-wide text-foreground">
              The Blonde Muslim
            </Link>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Faith. Culture. Community.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#giving" className="transition-colors hover:text-primary">
              Giving Back
            </Link>
            <Link href="#muslim-texas" className="transition-colors hover:text-primary">
              Muslim Texas
            </Link>
            <Link href="#partner" className="transition-colors hover:text-primary">
              Partner
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Blonde Muslim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
