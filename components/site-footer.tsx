import Link from "next/link"
import { BrainCircuit } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-10 bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <div className="flex items-center">
            <BrainCircuit className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold">UPSC Aspirants AI</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} UPSC Aspirants AI. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
          <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  )
}
