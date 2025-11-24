import { Button } from "@/components/ui/3d-button"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <span className="font-serif">Johuniq</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-sm text-foreground hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
          </nav>

          {/* CTA Button */}
          <Button size="lg" className="rounded-full px-8 text-base">
           <Link href="https://cal.com/johuniq/15min">
            Book a 15-min Call 📞
           </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
