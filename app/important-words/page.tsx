import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Tag, BarChart2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Important Words & Datasets - UPSC Aspirants AI",
  description: "Daily important words and datasets for UPSC Mains preparation",
}

export default function ImportantWordsPage() {
  // Sample data for demonstration
  const importantWords = [
    {
      word: "Multilateralism",
      meaning:
        "The practice of coordinating national policies in groups of three or more states, often through international organizations",
      context: "India's commitment to multilateralism was evident in its recent diplomatic initiatives.",
      tags: ["International Relations", "Diplomacy", "Global Governance"],
    },
    {
      word: "Fiscal Consolidation",
      meaning: "Government policies intended to reduce deficits and the accumulation of debt",
      context: "The budget emphasized fiscal consolidation while maintaining growth momentum.",
      tags: ["Economy", "Budget", "Public Finance"],
    },
    {
      word: "Carbon Sequestration",
      meaning: "The process of capturing and storing atmospheric carbon dioxide to mitigate climate change",
      context: "The new environmental policy focuses on carbon sequestration through afforestation.",
      tags: ["Environment", "Climate Change", "Ecology"],
    },
    {
      word: "Judicial Review",
      meaning:
        "The power of courts to examine legislative and executive acts and to invalidate those that conflict with the Constitution",
      context: "The Supreme Court exercised judicial review to strike down the controversial amendment.",
      tags: ["Polity", "Constitution", "Judiciary"],
    },
    {
      word: "Demographic Dividend",
      meaning: "Economic growth potential resulting from shifts in a population's age structure",
      context: "India needs to capitalize on its demographic dividend through skill development initiatives.",
      tags: ["Economy", "Population", "Development"],
    },
  ]

  const datasets = [
    {
      title: "GDP Growth Rate (2022-23)",
      data: "7.2% annual growth",
      significance: "Indicates India's economic resilience despite global challenges",
      tags: ["Economy", "Growth", "Development"],
    },
    {
      title: "Renewable Energy Capacity",
      data: "175 GW target by 2022, achieved 157 GW",
      significance: "Shows progress in India's clean energy transition",
      tags: ["Environment", "Energy", "Sustainability"],
    },
    {
      title: "Poverty Reduction (2015-2023)",
      data: "415 million people lifted out of poverty",
      significance: "Demonstrates effectiveness of welfare schemes and economic policies",
      tags: ["Social Issues", "Poverty", "Development"],
    },
    {
      title: "Forest Cover (2023)",
      data: "24.62% of geographical area",
      significance: "Relevant for environmental conservation discussions",
      tags: ["Environment", "Biodiversity", "Conservation"],
    },
    {
      title: "Digital Transactions (2022-23)",
      data: "88.4 billion transactions worth ₹126 trillion",
      significance: "Highlights India's digital transformation journey",
      tags: ["Economy", "Technology", "Governance"],
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
          <span className="text-xs">Coming Soon</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Important Words & Datasets</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Daily curated words and datasets from current affairs for UPSC Mains preparation
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">May 10, 2025</span>
        </div>
        <Button variant="outline" className="gap-2">
          <BookOpen className="h-4 w-4" />
          View Archives
        </Button>
      </div>

      <Tabs defaultValue="words" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="words">Important Words</TabsTrigger>
          <TabsTrigger value="datasets">Key Datasets</TabsTrigger>
        </TabsList>

        <TabsContent value="words" className="mt-0 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {importantWords.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{item.word}</span>
                    <Button variant="ghost" size="icon">
                      <BookOpen className="h-4 w-4" />
                      <span className="sr-only">Add to flashcards</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>{item.meaning}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Context: </span>
                    {item.context}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add to My Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button>View All Important Words</Button>
          </div>
        </TabsContent>

        <TabsContent value="datasets" className="mt-0 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {datasets.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{item.title}</span>
                    <Button variant="ghost" size="icon">
                      <BarChart2 className="h-4 w-4" />
                      <span className="sr-only">View chart</span>
                    </Button>
                  </CardTitle>
                  <CardDescription className="font-mono text-lg">{item.data}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Significance: </span>
                    {item.significance}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add to Notes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button>View All Datasets</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-muted rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Daily Updates</h2>
        <p className="max-w-[600px] mx-auto mb-6 text-muted-foreground">
          Get important words and datasets delivered to your inbox every morning to stay updated with UPSC-relevant
          information.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/auth/register">
            <Button>Sign Up Now</Button>
          </Link>
          <Link href="/docs/important-words">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
