"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusCircle, Upload, Globe, BarChart2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminQuickActions() {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <PlusCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Quick Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/admin/source-management")}>
          <Upload className="mr-2 h-4 w-4" />
          <span>Upload New File</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/admin/api-management")}>
          <Globe className="mr-2 h-4 w-4" />
          <span>Add API</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/admin/analytics")}>
          <BarChart2 className="mr-2 h-4 w-4" />
          <span>View Analytics</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
