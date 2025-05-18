"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Settings,
  Users,
  Database,
  FileText,
  PiIcon as Api,
  BarChart3,
  Globe,
  User,
  BarChart2,
  BookOpen,
  Newspaper,
  Layers,
  FileQuestion,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarNavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  variant: "default" | "ghost"
  section?: string
}

export function AdminSidebar() {
  const pathname = usePathname()

  const adminItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      variant: "default",
      section: "admin",
    },
    {
      title: "API Management",
      href: "/admin/api-management",
      icon: Api,
      variant: "ghost",
      section: "admin",
    },
    {
      title: "Source Management",
      href: "/admin/source-management",
      icon: FileText,
      variant: "ghost",
      section: "admin",
    },
    {
      title: "Database Config",
      href: "/admin/database",
      icon: Database,
      variant: "ghost",
      section: "admin",
    },
    {
      title: "User Management",
      href: "/admin/users",
      icon: Users,
      variant: "ghost",
      section: "admin",
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      variant: "ghost",
      section: "admin",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      variant: "ghost",
      section: "admin",
    },
  ]

  const publicItems: SidebarNavItem[] = [
    {
      title: "Homepage",
      href: "/",
      icon: Globe,
      variant: "ghost",
      section: "public",
    },
    {
      title: "News",
      href: "/news",
      icon: FileText,
      variant: "ghost",
      section: "public",
    },
    {
      title: "Public Flashcards",
      href: "/public-flashcards",
      icon: FileText,
      variant: "ghost",
      section: "public",
    },
    {
      title: "PYQ Mapping",
      href: "/pyq-mapping",
      icon: FileText,
      variant: "ghost",
      section: "public",
    },
    {
      title: "Documentation",
      href: "/docs",
      icon: FileText,
      variant: "ghost",
      section: "public",
    },
  ]

  const userItems: SidebarNavItem[] = [
    {
      title: "User Dashboard",
      href: "/user-dashboard",
      icon: User,
      variant: "ghost",
      section: "user",
    },
  ]

  return (
    <div className="hidden border-r bg-background md:block w-64">
      <ScrollArea className="h-full py-6">
        <div className="pb-12">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <Button
                  variant={pathname === "/admin" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/analytics" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/analytics">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Analytics
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/settings" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Content Management</h2>
              <div className="space-y-1">
                <Button
                  variant={pathname === "/admin/source-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/source-management">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Source Management
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/news-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/news-management">
                    <Newspaper className="mr-2 h-4 w-4" />
                    News Management
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/flashcard-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/flashcard-management">
                    <Layers className="mr-2 h-4 w-4" />
                    Flashcards
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/pyq-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/pyq-management">
                    <FileQuestion className="mr-2 h-4 w-4" />
                    PYQ Database
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/notes-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/notes-management">
                    <FileText className="mr-2 h-4 w-4" />
                    Notes Management
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/tags-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/tags-management">
                    <Tag className="mr-2 h-4 w-4" />
                    Tags & Categories
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">System</h2>
              <div className="space-y-1">
                <Button
                  variant={pathname === "/admin/api-management" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/api-management">
                    <Globe className="mr-2 h-4 w-4" />
                    API Management
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/database" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/database">
                    <Database className="mr-2 h-4 w-4" />
                    Database
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/admin/users" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/admin/users">
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
