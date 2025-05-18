"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Pagination } from "@/components/pagination"
import { Bookmark, ExternalLink, FileText, ThumbsDown, TagIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data for news articles
const mockNewsArticles = Array.from({ length: 50 }).map((_, i) => ({
  id: `news-${i + 1}`,
  title: `UPSC News Article ${i + 1}`,
  description: `This is a sample news article about important UPSC topics. It covers various aspects of current affairs and exam preparation.`,
  source: `The Hindu`,
  date: new Date(2023, 11, 31 - (i % 30)).toLocaleDateString(),
  url: `https://example.com/news/${i + 1}`,
  category:
    i % 5 === 0
      ? "current-affairs"
      : i % 5 === 1
        ? "prelims"
        : i % 5 === 2
          ? "gs-1"
          : i % 5 === 3
            ? "gs-2"
            : i % 5 === 4
              ? "gs-3"
              : "gs-4",
  tags: [
    "UPSC",
    "Current Affairs",
    i % 2 === 0 ? "Economy" : "Environment",
    i % 3 === 0 ? "International Relations" : "Science & Technology",
  ],
}))

interface NewsArticle {
  id: string
  title: string
  description: string
  source: string
  date: string
  url: string
  category: string
  tags: string[]
}

export default function NewsPage() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page") || "1")
  const [activeTab, setActiveTab] = useState<string>("all")
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([])
  const [savedArticles, setSavedArticles] = useState<Set<string>>(new Set())
  const [irrelevantArticles, setIrrelevantArticles] = useState<Set<string>>(new Set())
  const [noteDialogOpen, setNoteDialogOpen] = useState<boolean>(false)
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null)
  const [noteContent, setNoteContent] = useState<string>("")
  const [noteTags, setNoteTags] = useState<string>("")
  const [questionDialogOpen, setQuestionDialogOpen] = useState<boolean>(false)
  const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([])
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState<boolean>(false)

  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    // Filter news based on active tab
    if (activeTab === "all") {
      setFilteredNews(mockNewsArticles)
    } else {
      setFilteredNews(mockNewsArticles.filter((article) => article.category === activeTab))
    }
  }, [activeTab])

  const paginatedNews = filteredNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const toggleSaveArticle = (id: string) => {
    const newSavedArticles = new Set(savedArticles)
    if (newSavedArticles.has(id)) {
      newSavedArticles.delete(id)
    } else {
      newSavedArticles.add(id)
    }
    setSavedArticles(newSavedArticles)
  }

  const toggleIrrelevantArticle = (id: string) => {
    const newIrrelevantArticles = new Set(irrelevantArticles)
    if (newIrrelevantArticles.has(id)) {
      newIrrelevantArticles.delete(id)
    } else {
      newIrrelevantArticles.add(id)
    }
    setIrrelevantArticles(newIrrelevantArticles)
  }

  const openNoteDialog = (id: string) => {
    setCurrentArticleId(id)
    setNoteDialogOpen(true)
  }

  const saveNote = () => {
    // In a real app, this would save the note to a database
    console.log(`Saving note for article ${currentArticleId}:`, noteContent)
    console.log(
      `Tags:`,
      noteTags.split(",").map((tag) => tag.trim()),
    )
    setNoteDialogOpen(false)
    setNoteContent("")
    setNoteTags("")
  }

  const generateQuestions = (id: string) => {
    setCurrentArticleId(id)
    setIsGeneratingQuestions(true)
    setQuestionDialogOpen(true)

    // Simulate API call to generate questions
    setTimeout(() => {
      const article = mockNewsArticles.find((a) => a.id === id)
      const questions = [
        `What are the key implications of ${article?.title.split(" ").slice(2).join(" ")} on India's foreign policy?`,
        `How does ${article?.title.split(" ").slice(2).join(" ")} impact the economic scenario in India?`,
        `Critically analyze the government's approach towards ${article?.title.split(" ").slice(2).join(" ")}.`,
        `Discuss the historical context of ${article?.title.split(" ").slice(2).join(" ")} and its evolution.`,
        `What are the ethical considerations related to ${article?.title.split(" ").slice(2).join(" ")}?`,
      ]
      setGeneratedQuestions(questions)
      setIsGeneratingQuestions(false)
    }, 2000)
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">News & Current Affairs</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest news and current affairs relevant to UPSC examination.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="current-affairs">Current Affairs</TabsTrigger>
            <TabsTrigger value="prelims">Prelims</TabsTrigger>
            <TabsTrigger value="gs-1">GS-1</TabsTrigger>
            <TabsTrigger value="gs-2">GS-2</TabsTrigger>
            <TabsTrigger value="gs-3">GS-3</TabsTrigger>
            <TabsTrigger value="gs-4">GS-4</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6">
              {paginatedNews.map((article) => (
                <Card key={article.id} className={`${irrelevantArticles.has(article.id) ? "opacity-50" : ""}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span>{article.source}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {article.category.replace(/-/g, " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{article.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read More
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => openNoteDialog(article.id)}>
                        <FileText className="h-4 w-4 mr-2" />
                        Add Notes
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => generateQuestions(article.id)}
                        title="Generate Questions"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-help-circle"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleSaveArticle(article.id)}
                        className={savedArticles.has(article.id) ? "text-primary" : ""}
                        title="Save for later"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleIrrelevantArticle(article.id)}
                        className={irrelevantArticles.has(article.id) ? "text-destructive" : ""}
                        title="Mark as irrelevant"
                      >
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Pagination totalItems={filteredNews.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Note Dialog */}
      <Dialog open={noteDialogOpen} onOpenChange={setNoteDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Notes</DialogTitle>
            <DialogDescription>Create notes for this article. Add tags to organize your notes.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Write your notes here..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              className="min-h-[200px]"
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="tags" className="text-sm font-medium flex items-center gap-2">
                <TagIcon className="h-4 w-4" />
                Tags (comma separated)
              </label>
              <Input
                id="tags"
                placeholder="UPSC, Current Affairs, Economy..."
                value={noteTags}
                onChange={(e) => setNoteTags(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNoteDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveNote}>Save Note</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Question Generation Dialog */}
      <Dialog open={questionDialogOpen} onOpenChange={setQuestionDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Generated Questions</DialogTitle>
            <DialogDescription>UPSC-level questions generated from this article.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isGeneratingQuestions ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                  <p>Generating questions...</p>
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Prelims Questions</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Which of the following statements is correct regarding {currentArticleId?.split("-")[1]}?</li>
                      <li>Consider the following statements and select the correct option:</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Mains Questions</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      {generatedQuestions.map((question, i) => (
                        <li key={i}>{question}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setQuestionDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
