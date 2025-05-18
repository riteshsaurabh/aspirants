"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  login: (email: string, password: string, isAdmin?: boolean) => Promise<boolean>
  logout: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      login: async (email: string, password: string, isAdmin = false) => {
        // In a real application, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // For demo purposes, use specific credentials for admin
        if (isAdmin) {
          // Check if using admin credentials
          if (email === "admin@upscai.com" && password === "admin123") {
            const user: User = {
              id: "admin123",
              name: "Admin User",
              email,
              role: "admin",
            }

            set({
              user,
              isAuthenticated: true,
              isAdmin: true,
            })
            return true
          }
          return false
        } else {
          // Regular user login - accept any credentials for demo
          const user: User = {
            id: "user123",
            name: email.split("@")[0],
            email,
            role: "user",
          }

          set({
            user,
            isAuthenticated: true,
            isAdmin: false,
          })
          return true
        }
      },
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isAdmin: false,
        })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
