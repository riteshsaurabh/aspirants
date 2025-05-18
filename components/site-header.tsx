import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { GlobalSearch } from "@/components/global-search"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo className="mr-4" />
        <MainNav className="mx-6 hidden md:flex" />
        <MobileNav className="md:hidden" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden sm:flex">
            <GlobalSearch />
          </div>
          <div className="flex items-center space-x-1">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}
