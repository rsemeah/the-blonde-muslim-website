import Link from "next/link"
import { 
  InstagramIcon, 
  TikTokIcon, 
  YouTubeIcon, 
  TwitterXIcon, 
  FacebookIcon, 
  PinterestIcon, 
  ThreadsIcon,
  VerifiedBadge,
  EmailIcon
} from "./social-icons"

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/theblondemuslim", icon: InstagramIcon },
  { name: "TikTok", href: "https://tiktok.com/@theblondemuslim", icon: TikTokIcon },
  { name: "YouTube", href: "https://youtube.com/@TheBlondeMuslim", icon: YouTubeIcon },
  { name: "X", href: "https://twitter.com/theblondemuslim", icon: TwitterXIcon },
  { name: "Facebook", href: "https://facebook.com/theblondemuslim", icon: FacebookIcon },
  { name: "Pinterest", href: "https://pinterest.com/theblondemuslim", icon: PinterestIcon },
  { name: "Threads", href: "https://threads.net/@theblondemuslim", icon: ThreadsIcon },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/circle", label: "The Circle" },
  { href: "/muslim-texas", label: "Muslim Texas" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/vision", label: "Vision" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/press", label: "Press Kit" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-serif text-2xl tracking-wide text-foreground">
                The Blonde Muslim
              </span>
              <VerifiedBadge className="h-5 w-5 text-accent" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A trusted voice for Muslim women seeking beauty, depth, and belonging. 
              Faith. Culture. Community.
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl text-foreground">603K+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Combined Reach
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">3</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Platforms
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Explore
            </p>
            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Legal
            </p>
            <ul className="mt-6 space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Connect
            </p>
            
            {/* Social Grid */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-foreground hover:text-background"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
              <Link
                href="mailto:hello@theblondemuslim.com"
                className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-foreground hover:text-background"
                aria-label="Email"
              >
                <EmailIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Email */}
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Business Inquiries
              </p>
              <a 
                href="mailto:partnerships@theblondemuslim.com"
                className="mt-1 block text-sm text-foreground transition-colors duration-300 hover:text-accent"
              >
                partnerships@theblondemuslim.com
              </a>
            </div>

            {/* Location */}
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Based In
              </p>
              <p className="mt-1 text-sm text-foreground">
                Irvine, California
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              &copy; {new Date().getFullYear()} The Blonde Muslim &middot; All rights reserved
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Content Creator
              </span>
              <span className="text-muted-foreground/30">|</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Community Voice
              </span>
              <span className="text-muted-foreground/30">|</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Brand Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
