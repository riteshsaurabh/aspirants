"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle2 } from "lucide-react"

interface FeedbackFormProps {
  title: string
  description: string
  type: "feature" | "feedback"
  buttonText: string
}

export function FeedbackForm({ title, description, type, buttonText }: FeedbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Success",
      description: type === "feature" ? "Feature request submitted successfully" : "Feedback submitted successfully",
      action: (
        <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
        </div>
      ),
    })
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
          <CardDescription>
            {type === "feature"
              ? "Your feature request has been submitted successfully."
              : "Your feedback has been submitted successfully."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6 space-y-2">
            <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-center">
              {type === "feature"
                ? "We'll review your request and consider it for future updates."
                : "Your insights help us improve the platform for everyone."}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
            Submit Another {type === "feature" ? "Request" : "Feedback"}
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email address" required />
          </div>
          {type === "feature" && (
            <div className="space-y-2">
              <Label htmlFor="feature-title">Feature Title</Label>
              <Input id="feature-title" placeholder="A short title for your feature request" required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="message">{type === "feature" ? "Feature Description" : "Your Feedback"}</Label>
            <Textarea
              id="message"
              placeholder={
                type === "feature"
                  ? "Please describe the feature you'd like to see..."
                  : "Tell us what you think about our platform..."
              }
              rows={5}
              required
            />
          </div>
          {type === "feature" && (
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <select
                id="priority"
                className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : buttonText}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
