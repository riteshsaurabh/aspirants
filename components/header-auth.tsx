"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"

export function HeaderAuth() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")

  const handleSignInClick = () => {
    setActiveTab("signin")
    setOpen(true)
  }

  const handleSignUpClick = () => {
    setActiveTab("signup")
    setOpen(true)
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={handleSignInClick}>
        Sign In
      </Button>
      <Button variant="default" size="sm" onClick={handleSignUpClick}>
        Sign Up
      </Button>
      <AuthModal defaultTab={activeTab} open={open} onOpenChange={setOpen} />
    </div>
  )
}
