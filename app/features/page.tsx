import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Newspaper, BookOpen, BarChart3, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Features - UPSC Aspirants AI",
  description: "Explore the features of UPSC Aspirants AI",
}

export default function FeaturesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Features</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Discover how UPSC Aspirants AI can transform your preparation strategy with these powerful features.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">News Extraction</CardTitle>
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>AI-powered extraction of UPSC-relevant content from daily newspapers</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our system automatically processes multiple news sources to extract and summarize content relevant to UPSC
              preparation, saving you hours of reading time.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/news-extraction" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Smart Flashcards</CardTitle>
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Automated flashcard generation with spaced repetition</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Convert news articles and study materials into smart flashcards that adapt to your learning patterns using
              proven spaced repetition techniques.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/flashcards" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">News Trend Analysis</CardTitle>
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Identify important topics and trends in current affairs</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our AI analyzes news patterns to identify trending topics and important themes that are likely to appear
              in the UPSC examination.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/news-trend-analysis" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">PYQ Mapping</CardTitle>
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Connect current affairs to previous year questions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our system automatically maps current news articles to relevant previous year questions, helping you
              understand the examination pattern.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/pyq-mapping" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Categorization</CardTitle>
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Automatic categorization and tagging of content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              All content is automatically categorized and tagged according to UPSC syllabus topics, making it easy to
              find relevant information.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/categorization" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Revision System</CardTitle>
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Smart revision reminders based on forgetting curves</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our intelligent revision system reminds you to review content at optimal intervals based on cognitive
              science principles.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/revision-system" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to transform your UPSC preparation?</h2>
        <p className="max-w-[600px] mx-auto mb-8 text-muted-foreground">
          Join our beta program today and experience the power of AI-assisted learning.
        </p>
        <Link href="/beta-signup">
          <Button size="lg">Join Beta Program</Button>
        </Link>
      </div>
    </div>
  )
}
