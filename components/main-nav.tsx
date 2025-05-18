"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link
        href="/news"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/news" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        News
      </Link>
      <Link
        href="/public-flashcards"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/public-flashcards" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Public Flashcards
      </Link>
      <Link
        href="/pyq-mapping"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/pyq-mapping" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        PYQ Mapping
      </Link>
      <Link
        href="/notes"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/notes" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Notes
      </Link>
      <Link
        href="/docs"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/docs" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Docs
      </Link>
    </nav>
  )
}
