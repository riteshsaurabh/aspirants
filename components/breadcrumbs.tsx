"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split("/").filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-foreground flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`
          const isLast = index === paths.length - 1

          // Format the path for display
          const formattedPath = path
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          return (
            <li key={path} className="flex items-center">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="ml-2 font-medium text-foreground" aria-current="page">
                  {formattedPath}
                </span>
              ) : (
                <Link href={href} className="ml-2 hover:text-foreground">
                  {formattedPath}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
