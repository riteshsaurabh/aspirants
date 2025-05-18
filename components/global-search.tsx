"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { DialogProps } from "@radix-ui/react-dialog"
import { File, Newspaper, BookOpen, Tag, BarChart2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/search"

export function GlobalSearch({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="News">
            {["India's Foreign Policy", "Environmental Regulations", "Economic Survey"].map((item) => (
              <CommandItem key={item} onSelect={() => runCommand(() => router.push("/news"))}>
                <Newspaper className="mr-2 h-4 w-4" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Flashcards">
            {["Indian Polity", "Modern History", "Geography"].map((item) => (
              <CommandItem key={item} onSelect={() => runCommand(() => router.push("/flashcards"))}>
                <BookOpen className="mr-2 h-4 w-4" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Notes">
            {["Constitutional Amendments", "Environmental Conventions", "Economic Reforms"].map((item) => (
              <CommandItem key={item} onSelect={() => runCommand(() => router.push("/notes"))}>
                <File className="mr-2 h-4 w-4" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tags">
            {["Polity", "Economy", "Environment", "International Relations"].map((item) => (
              <CommandItem key={item} onSelect={() => runCommand(() => router.push(`/tags/${item.toLowerCase()}`))}>
                <Tag className="mr-2 h-4 w-4" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Analytics">
            {["Performance", "Study Time", "Syllabus Coverage"].map((item) => (
              <CommandItem key={item} onSelect={() => runCommand(() => router.push("/analytics"))}>
                <BarChart2 className="mr-2 h-4 w-4" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
