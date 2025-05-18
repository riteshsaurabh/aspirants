import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - UPSC Aspirants AI",
  description: "Choose the right plan for your UPSC preparation journey",
}

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Choose the plan that fits your UPSC preparation needs. All plans include core features to boost your studies.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Basic</CardTitle>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">Free</span>
            </div>
            <CardDescription>Essential tools to start your UPSC journey</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <PricingItem>Access to public flashcard decks</PricingItem>
              <PricingItem>Daily news extraction (limited)</PricingItem>
              <PricingItem>Basic PYQ mapping</PricingItem>
              <PricingItem>Community forum access</PricingItem>
              <PricingItem>100 API requests per hour</PricingItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/auth/register" className="w-full">
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="flex flex-col relative border-primary">
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
              Most Popular
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Premium</CardTitle>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">₹499</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription>Advanced features for serious aspirants</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <PricingItem>Everything in Basic</PricingItem>
              <PricingItem>Unlimited news extraction</PricingItem>
              <PricingItem>Advanced PYQ mapping</PricingItem>
              <PricingItem>AI-generated practice questions</PricingItem>
              <PricingItem>Personal flashcard creation</PricingItem>
              <PricingItem>Progress tracking</PricingItem>
              <PricingItem>Revision reminders</PricingItem>
              <PricingItem>1,000 API requests per hour</PricingItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/auth/register?plan=premium" className="w-full">
              <Button className="w-full">Get Premium</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Pro</CardTitle>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">₹999</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription>Ultimate toolkit for UPSC toppers</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <PricingItem>Everything in Premium</PricingItem>
              <PricingItem>Personalized study plan</PricingItem>
              <PricingItem>AI tutor assistance</PricingItem>
              <PricingItem>Mock interviews</PricingItem>
              <PricingItem>Answer evaluation</PricingItem>
              <PricingItem>Priority content updates</PricingItem>
              <PricingItem>Expert webinars</PricingItem>
              <PricingItem>10,000 API requests per hour</PricingItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/auth/register?plan=pro" className="w-full">
              <Button variant="outline" className="w-full">
                Get Pro
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Usage-Based Options</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Pay As You Go */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Pay As You Go</CardTitle>
              <CardDescription>Perfect for occasional users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">News Extraction</p>
                  <p className="text-sm text-muted-foreground">₹2 per article</p>
                </div>
                <div>
                  <p className="font-medium">AI Question Generation</p>
                  <p className="text-sm text-muted-foreground">₹5 per set of 5 questions</p>
                </div>
                <div>
                  <p className="font-medium">Flashcard Generation</p>
                  <p className="text-sm text-muted-foreground">₹3 per deck (up to 20 cards)</p>
                </div>
                <div>
                  <p className="font-medium">PYQ Mapping</p>
                  <p className="text-sm text-muted-foreground">₹2 per content analysis</p>
                </div>
                <div>
                  <p className="font-medium">API Requests</p>
                  <p className="text-sm text-muted-foreground">₹0.50 per 100 requests</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/auth/register?plan=pay-as-you-go" className="w-full">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>Custom solutions for coaching institutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Custom Integration</p>
                  <p className="text-sm text-muted-foreground">Integrate with your existing systems</p>
                </div>
                <div>
                  <p className="font-medium">Bulk User Management</p>
                  <p className="text-sm text-muted-foreground">Manage accounts for all your students</p>
                </div>
                <div>
                  <p className="font-medium">White Labeling</p>
                  <p className="text-sm text-muted-foreground">Customize with your branding</p>
                </div>
                <div>
                  <p className="font-medium">Analytics Dashboard</p>
                  <p className="text-sm text-muted-foreground">Detailed insights into student performance</p>
                </div>
                <div>
                  <p className="font-medium">Dedicated Support</p>
                  <p className="text-sm text-muted-foreground">Priority technical assistance</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contact?subject=Enterprise" className="w-full">
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
          Have questions about our pricing? Here are some common inquiries.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="text-left">
            <h3 className="text-lg font-medium mb-2">Can I switch plans?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
              cycle.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium mb-2">Is there a refund policy?</h3>
            <p className="text-sm text-muted-foreground">
              We offer a 7-day money-back guarantee for all subscription plans.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium mb-2">Do you offer student discounts?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, students can get 20% off any plan with valid student ID verification.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-sm text-muted-foreground">
              We accept credit/debit cards, UPI, net banking, and various digital wallets.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-primary" />
      <span>{children}</span>
    </li>
  )
}
