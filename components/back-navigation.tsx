import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackNavigationProps {
  href: string
  label: string
}

export function BackNavigation({ href, label }: BackNavigationProps) {
  return (
    <div className="mb-4">
      <Button variant="ghost" size="sm" asChild className="gap-1">
        <Link href={href}>
          <ChevronLeft className="h-4 w-4" />
          {label}
        </Link>
      </Button>
    </div>
  )
}
