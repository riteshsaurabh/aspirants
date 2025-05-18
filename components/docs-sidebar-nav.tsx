"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DocsSidebarNavProps {
  className?: string
}

export function DocsSidebarNav({ className }: DocsSidebarNavProps) {
  const pathname = usePathname()

  const items = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Features Overview",
          href: "/docs/features-overview",
          items: [],
        },
        {
          title: "User Accounts",
          href: "/docs/accounts",
          items: [],
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: "News Extraction",
          href: "/docs/news-extraction",
          items: [],
        },
        {
          title: "Flashcards",
          href: "/docs/flashcards",
          items: [],
        },
        {
          title: "PYQ Mapping",
          href: "/docs/pyq-mapping",
          items: [],
        },
        {
          title: "Analytics",
          href: "/docs/analytics",
          items: [],
        },
        {
          title: "Notes Manager",
          href: "/docs/notes",
          items: [],
        },
      ],
    },
    {
      title: "Technical",
      items: [
        {
          title: "API Reference",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Admin Guide",
          href: "/docs/admin",
          items: [],
        },
      ],
    },
    {
      title: "Help & Support",
      items: [
        {
          title: "Feedback & Requests",
          href: "/docs/feedback",
          items: [],
        },
        {
          title: "Future Improvements",
          href: "/docs/roadmap",
          items: [],
        },
      ],
    },
  ]

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.title} className="space-y-2">
            <h4 className="font-medium">{item.title}</h4>
            {item.items?.length > 0 && (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
                      "bg-muted": pathname === subItem.href,
                    })}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
