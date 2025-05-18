"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GoogleSignInButton } from "@/components/google-sign-in-button"
import { Icons } from "@/components/icons"

interface AuthModalProps {
  defaultTab?: "signin" | "signup"
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AuthModal({ defaultTab = "signin", trigger, open, onOpenChange }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<"signin" | "signup">(defaultTab)
  const router = useRouter()

  // User credentials
  const [email, setEmail] = useState("test@upscai.com")
  const [password, setPassword] = useState("test123")
  const [name, setName] = useState("Test User")

  // Admin credentials
  const [adminEmail, setAdminEmail] = useState("admin@upsc-ai.com")
  const [adminPassword, setAdminPassword] = useState("admin123")

  async function onSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/user-dashboard")
    }, 1000)
  }

  async function onAdminSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin")
    }, 1000)
  }

  async function onSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/user-dashboard")
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight">
            {activeTab === "signin" ? "Welcome back" : "Create an account"}
          </DialogTitle>
          <DialogDescription>
            {activeTab === "signin"
              ? "Enter your credentials to access your account"
              : "Enter your details to create your account"}
          </DialogDescription>
        </DialogHeader>

        {activeTab === "signin" ? (
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user">User Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <Card className="border-0 shadow-none">
                <CardContent className="px-0 pt-4 pb-0">
                  <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" className="w-full" onClick={() => router.push("/user-dashboard")}>
                      <GoogleSignInButton />
                    </Button>
                  </div>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <form onSubmit={onSignIn}>
                    <div className="grid gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="current-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground p-1 border rounded bg-muted mt-2">
                        <p>
                          <strong>Test user credentials:</strong>
                        </p>
                        <p>Email: test@upscai.com</p>
                        <p>Password: test123</p>
                      </div>
                      <Button className="mt-2" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="px-0 pt-4 pb-0 flex justify-center">
                  <Button variant="link" className="px-0" onClick={() => setActiveTab("signup")}>
                    Don&apos;t have an account? Sign up
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="admin">
              <Card className="border-0 shadow-none">
                <CardContent className="px-0 pt-4 pb-0">
                  <form onSubmit={onAdminSignIn}>
                    <div className="grid gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="admin-email">Email</Label>
                        <Input
                          id="admin-email"
                          placeholder="admin@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="admin-password">Password</Label>
                        <Input
                          id="admin-password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="current-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground p-1 border rounded bg-muted mt-2">
                        <p>
                          <strong>Admin credentials:</strong>
                        </p>
                        <p>Email: admin@upsc-ai.com</p>
                        <p>Password: admin123</p>
                      </div>
                      <Button className="mt-2" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          "Admin Sign In"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="px-0 pt-4 pb-0">
                  <p className="text-xs text-muted-foreground text-center w-full">
                    Admin access is restricted to authorized personnel only.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <Card className="border-0 shadow-none">
            <CardContent className="px-0 pt-4 pb-0">
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="w-full" onClick={() => router.push("/user-dashboard")}>
                  <GoogleSignInButton />
                </Button>
              </div>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <form onSubmit={onSignUp}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-xs text-muted-foreground p-1 border rounded bg-muted">
                    <p>
                      <strong>Test user credentials:</strong>
                    </p>
                    <p>Name: Test User</p>
                    <p>Email: test@upscai.com</p>
                    <p>Password: test123</p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create account"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="px-0 pt-4 pb-0 flex justify-center">
              <Button variant="link" className="px-0" onClick={() => setActiveTab("signin")}>
                Already have an account? Sign in
              </Button>
            </CardFooter>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  )
}
