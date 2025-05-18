"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, BookOpen, FileText, BookMarked, GraduationCap, Globe } from "lucide-react"
import { useState } from "react"

export function AIKnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample knowledge base categories and articles
  const knowledgeBase = {
    syllabus: [
      { title: "UPSC CSE Prelims Syllabus", description: "Comprehensive overview of the Prelims examination syllabus" },
      { title: "UPSC CSE Mains Syllabus", description: "Detailed breakdown of all GS and optional papers for Mains" },
      { title: "UPSC CSE Interview Process", description: "What to expect in the personality test round" },
      { title: "CSAT Requirements", description: "Understanding the Civil Services Aptitude Test requirements" },
      { title: "Optional Subject Selection Guide", description: "How to choose the right optional subject for Mains" },
    ],
    subjects: [
      { title: "Indian Polity", description: "Constitutional framework, governance, and political system" },
      { title: "Indian History", description: "Ancient, medieval, modern, and post-independence history" },
      { title: "Geography", description: "Physical, Indian, and world geography concepts" },
      { title: "Economy", description: "Indian economy, economic development, and policies" },
      { title: "Science & Technology", description: "Basic concepts and current developments" },
      {
        title: "Environment & Ecology",
        description: "Environmental issues, conservation, and sustainable development",
      },
    ],
    strategy: [
      { title: "1-Year Preparation Plan", description: "Strategic approach for completing preparation in 12 months" },
      { title: "3-Month Revision Strategy", description: "How to effectively revise the entire syllabus in 3 months" },
      { title: "Answer Writing Framework", description: "Structured approach to writing effective Mains answers" },
      { title: "Newspaper Reading Strategy", description: "How to efficiently extract UPSC-relevant news" },
      { title: "Test Series Approach", description: "Making the most of mock tests and practice papers" },
    ],
    resources: [
      { title: "Essential Books List", description: "Must-have books for UPSC preparation by subject" },
      { title: "Recommended Newspapers", description: "Best newspapers and magazines for current affairs" },
      {
        title: "Online Resources Guide",
        description: "Curated list of websites, YouTube channels, and online courses",
      },
      { title: "Previous Year Papers", description: "Analysis and patterns from past examination papers" },
      { title: "Free Study Material", description: "Quality resources available without cost" },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Base</CardTitle>
        <CardDescription>Access curated information about UPSC preparation</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search knowledge base..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="syllabus">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="syllabus">
              <FileText className="h-4 w-4 mr-2" />
              Syllabus
            </TabsTrigger>
            <TabsTrigger value="subjects">
              <BookOpen className="h-4 w-4 mr-2" />
              Subjects
            </TabsTrigger>
            <TabsTrigger value="strategy">
              <GraduationCap className="h-4 w-4 mr-2" />
              Strategy
            </TabsTrigger>
            <TabsTrigger value="resources">
              <Globe className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>
          {Object.entries(knowledgeBase).map(([category, items]) => (
            <TabsContent key={category} value={category} className="border-0 p-0">
              <ScrollArea className="h-[400px]">
                <div className="p-4 space-y-4">
                  {items
                    .filter((item) =>
                      searchQuery
                        ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
                        : true,
                    )
                    .map((item, index) => (
                      <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button variant="outline" className="w-full">
          <BookMarked className="h-4 w-4 mr-2" />
          Browse All Articles
        </Button>
      </CardFooter>
    </Card>
  )
}
