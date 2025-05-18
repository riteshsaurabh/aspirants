"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface MobileNavProps {
  mainItems?: {
    title: string
    href: string
    icon?: React.ReactNode
    items?: {
      title: string
      href: string
      description?: string
    }[]
  }[]
}

export function MobileNav({ mainItems }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
              <span className="font-bold">Home</span>
            </Link>
            {/* Render mainItems if provided */}
            {mainItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 ${pathname === item.href ? 'font-bold' : ''}`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
