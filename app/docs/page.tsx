import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, FileText, FlaskConical, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for UPSC Aspirants AI",
}

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Documentation</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to the UPSC Aspirants AI documentation. This guide will help you understand how to use our AI-powered
        study assistant effectively.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Overview
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        UPSC Aspirants AI is an AI-powered tool that organizes and personalizes daily news and study materials for UPSC
        aspirants, saving time and improving learning efficiency.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Extraction</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AI-Powered</div>
            <p className="text-xs text-muted-foreground">Extracts and categorizes news from trusted sources</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/news-extraction" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flashcards</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Smart Revision</div>
            <p className="text-xs text-muted-foreground">Generate and study with AI-powered flashcards</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/flashcards" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PYQ Mapping</CardTitle>
            <FlaskConical className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pattern Analysis</div>
            <p className="text-xs text-muted-foreground">Connect current affairs to previous year questions</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/pyq-mapping" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analytics</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Insights</div>
            <p className="text-xs text-muted-foreground">Track your progress and identify patterns</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/analytics" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notes Manager</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Organize</div>
            <p className="text-xs text-muted-foreground">Create, manage, and tag your study notes</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/notes" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Accounts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Personalized</div>
            <p className="text-xs text-muted-foreground">Access your content from anywhere</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/accounts" className="text-xs text-blue-600 hover:underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        New Features
      </h2>
      <div className="grid gap-4 mt-6">
        <div className="flex items-start space-x-4">
          <Badge className="mt-0.5">New</Badge>
          <div>
            <h3 className="font-semibold">Paper-wise Filtering</h3>
            <p className="text-sm text-muted-foreground">
              Filter news and content by paper type (GS1, GS2, GS3, GS4, Prelims, Current Affairs)
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Badge className="mt-0.5">New</Badge>
          <div>
            <h3 className="font-semibold">Question Generation</h3>
            <p className="text-sm text-muted-foreground">
              Generate UPSC-style questions from news articles and study materials
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Badge className="mt-0.5">New</Badge>
          <div>
            <h3 className="font-semibold">Interactive Flashcards</h3>
            <p className="text-sm text-muted-foreground">
              Study with interactive flashcards that adapt to your learning pace
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Badge className="mt-0.5">New</Badge>
          <div>
            <h3 className="font-semibold">Notes with Tags</h3>
            <p className="text-sm text-muted-foreground">
              Create and organize notes with custom tags for better organization
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Badge className="mt-0.5">New</Badge>
          <div>
            <h3 className="font-semibold">Save & Mark Features</h3>
            <p className="text-sm text-muted-foreground">Save articles for later reading or mark them as irrelevant</p>
          </div>
        </div>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Getting Started
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To get started with UPSC Aspirants AI, follow these steps:</p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Sign up for an account (via email or Google)</li>
        <li>Complete your profile with your study preferences</li>
        <li>Explore the dashboard to access news, flashcards, and analytics</li>
        <li>Set up your daily study schedule</li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="UPSC Aspirants AI Dashboard"
          className="rounded-md border"
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Check out the sidebar for detailed documentation on each feature.
      </p>
    </div>
  )
}
