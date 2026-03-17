"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { InstagramIcon, TikTokIcon, YouTubeIcon, VerifiedBadge } from "./social-icons"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/circle", label: "The Circle" },
  { href: "/companion", label: "Amina" },
  { href: "/mslm", label: "MSLM" },
  { href: "/muslim-texas", label: "Muslim Texas" },
  { href: "/saudi", label: "Saudi Journey" },
  { href: "/partnerships", label: "Partnerships" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/98 backdrop-blur-sm shadow-sm" 
            : "bg-gradient-to-b from-black/40 via-black/20 to-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link 
              href="/" 
              className={`inline-flex items-center gap-2 font-serif text-lg tracking-wide transition-all hover:opacity-80 md:text-xl ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
            >
              The Blonde Muslim
              <VerifiedBadge className="h-4 w-4" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isScrolled 
                      ? pathname === link.href 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                      : "text-white drop-shadow-md hover:text-sky-blue"
                  } ${pathname === link.href ? "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-sky-blue" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isScrolled 
                    ? "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    : "bg-sky-blue/90 text-white hover:bg-sky-blue shadow-md"
                }`}
              >
                Connect
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`flex h-10 w-10 items-center justify-center lg:hidden ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl transition-all duration-300 hover:text-accent ${
                pathname === link.href ? "text-foreground" : "text-foreground/70"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s ease ${index * 0.1}s`
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 border border-foreground/20 px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Connect
          </Link>
          
          {/* Social Icons in Mobile Menu */}
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="https://instagram.com/theblondemuslim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://tiktok.com/@theblondemuslim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://youtube.com/@TheBlondeMuslim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
