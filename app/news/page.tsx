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

// Keyword sets for each tab
const KEYWORDS: { [key: string]: string[] } = {
  all: [
    "UPSC",
    "Civil Services",
    "IAS",
    "Current Affairs",
    "Indian Government",
    "Parliament",
    "Supreme Court",
    "Economy",
    "Environment",
    "Science and Technology",
    "International Relations",
    "Social Justice",
    "Policy",
    "Reforms"
  ],
  "current-affairs": [
    "UPSC Current Affairs",
    "National News",
    "International News",
    "Government Schemes",
    "Policy Updates",
    "Major Events"
  ],
  prelims: [
    "UPSC Prelims",
    "General Studies",
    "Current Events",
    "Geography",
    "History",
    "Science and Tech",
    "Environment"
  ],
  "gs-1": [
    "Indian Society",
    "Indian History",
    "Art and Culture",
    "World History",
    "Geography of India",
    "Population Issues",
    "Urbanization"
  ],
  "gs-2": [
    "Indian Polity",
    "Governance",
    "Constitution",
    "International Relations",
    "Social Justice",
    "Welfare Schemes",
    "Judiciary"
  ],
  "gs-3": [
    "Indian Economy",
    "Agriculture",
    "Environment",
    "Biodiversity",
    "Science and Technology",
    "Security",
    "Disaster Management",
    "Infrastructure"
  ],
  "gs-4": [
    "Ethics",
    "Integrity",
    "Aptitude",
    "Case Studies",
    "Moral Thinkers",
    "Public Administration"
  ]
};

function pickRandomKeywords(keywords: string[], count = 3): string[] {
  const shuffled = [...keywords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

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
  const currentPage = Number((searchParams && searchParams.get("page")) || "1")
  const [activeTab, setActiveTab] = useState<string>("all")
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([])
  const [savedArticles, setSavedArticles] = useState<Set<string>>(new Set())
  const [irrelevantArticles, setIrrelevantArticles] = useState<Set<string>>(new Set())
  const [noteDialogOpen, setNoteDialogOpen] = useState<boolean>(false)
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null)
  const [noteContent, setNoteContent] = useState<string>("")
  const [noteTags, setNoteTags] = useState<string>("")
  const [questionDialogOpen, setQuestionDialogOpen] = useState<boolean>(false)
  const [prelimsQuestions, setPrelimsQuestions] = useState<any[]>([])
  const [mainsQuestions, setMainsQuestions] = useState<string[]>([])
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const ITEMS_PER_PAGE = 10

  // Helper to get current keywords
  const getCurrentKeywords = () => pickRandomKeywords(KEYWORDS[activeTab] || KEYWORDS.all, 3)

  // Helper to get date range for last 7 days
  function getLast7DaysRange() {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - 7);
    return {
      from_date: from.toISOString().slice(0, 10),
      to_date: to.toISOString().slice(0, 10)
    };
  }

  // Fetch news, with optional refresh
  const fetchNews = async (forceRefresh = false) => {
    setLoading(true)
    if (forceRefresh) setRefreshing(true)
    const keywords = getCurrentKeywords()
    const q = keywords.join(",")
    const { from_date, to_date } = getLast7DaysRange();
    let articles: any[] = [];
    try {
      const res = await fetch(`/api/fetch-news?keyword=${encodeURIComponent(q)}&from_date=${from_date}&to_date=${to_date}${forceRefresh ? "&refresh=true" : ""}`)
      const data = await res.json()
      if (data.articles) {
        articles = data.articles
      }
      // If less than 3 news, try fallback with 'UPSC' and 'Current Affairs'
      if ((!articles || articles.length < 3) && q !== 'UPSC,Current Affairs') {
        const fallbackRes = await fetch(`/api/fetch-news?keyword=UPSC,Current Affairs&from_date=${from_date}&to_date=${to_date}${forceRefresh ? "&refresh=true" : ""}`)
        const fallbackData = await fallbackRes.json()
        if (fallbackData.articles) {
          articles = fallbackData.articles
        }
      }
      setFilteredNews(
        (articles || []).slice(0, 4).map((a: any, i: number) => ({
          id: a.link || `news-${i + 1}`,
          title: a.title,
          description: a.description,
          source: a.source,
          date: a.date,
          url: a.link,
          category: activeTab,
          tags: (a.category ? a.category.split(",") : keywords)
        }))
      )
    } catch (e) {
      setFilteredNews([])
    }
    setLoading(false)
    setRefreshing(false)
  }

  useEffect(() => {
    fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const generateQuestions = async (id: string) => {
    setCurrentArticleId(id)
    setIsGeneratingQuestions(true)
    setQuestionDialogOpen(true)

    const article = filteredNews.find((a) => a.id === id)
    if (!article) {
      setPrelimsQuestions([])
      setMainsQuestions(["Article not found."])
      setIsGeneratingQuestions(false)
      return
    }
    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article: article.description }),
      })
      const data = await res.json()
      if (res.ok) {
        setPrelimsQuestions(data.prelims || [])
        setMainsQuestions(Array.isArray(data.mains) ? data.mains.filter((q: any) => typeof q === "string") : [])
      } else {
        setPrelimsQuestions([])
        setMainsQuestions([data.error || "Failed to generate questions."])
      }
    } catch (err) {
      setPrelimsQuestions([])
      setMainsQuestions(["Network error."])
    }
    setIsGeneratingQuestions(false)
  }

  const handleGenerateMoreQuestions = () => {
    if (currentArticleId) generateQuestions(currentArticleId)
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">News & Current Affairs</h1>
              <p className="text-muted-foreground">
                Stay updated with the latest news and current affairs relevant to UPSC examination.
              </p>
            </div>
            <Button onClick={() => fetchNews(true)} disabled={refreshing || loading} variant="outline">
              {refreshing ? "Refreshing..." : "Refresh"}
            </Button>
          </div>
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
              {loading ? (
                <div>Loading news...</div>
              ) : paginatedNews.length === 0 ? (
                <div>No news found for these keywords.</div>
              ) : (
                paginatedNews.map((article) => (
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
                ))
              )}
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
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Generated Questions</DialogTitle>
            <DialogDescription>
              UPSC-level questions generated from this article.
              {currentArticleId && (
                <div className="mt-2 text-xs text-muted-foreground">
                  Tags: {filteredNews.find(a => a.id === currentArticleId)?.tags?.join(", ")}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">Prelims Questions</h3>
                  {prelimsQuestions.length === 0 ? (
                    <div className="text-muted-foreground">No Prelims questions generated.</div>
                  ) : (
                    <ul className="space-y-4">
                      {prelimsQuestions.map((q, i) => (
                        <li key={i} className="border rounded p-3 bg-muted">
                          <div className="font-medium mb-1">{i + 1}. {q.question}</div>
                          <ul className="ml-4 space-y-1">
                            {q.options && typeof q.options === "object"
                              ? Object.entries(q.options as Record<string, string>).map(([key, val]) => (
                                  <li key={key}><b>{key}.</b> {val}</li>
                                ))
                              : null}
                          </ul>
                          <div className="mt-1 text-xs text-green-700">Answer: <b>{q.answer}</b></div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <h3 className="font-medium mb-2">Mains Questions</h3>
                  {mainsQuestions.length === 0 ? (
                    <div className="text-muted-foreground">No Mains questions generated.</div>
                  ) : (
                    <ul className="space-y-4 list-decimal pl-5">
                      {mainsQuestions.map((question, i) => (
                        <li key={i}>{question}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
          <DialogFooter className="flex flex-col md:flex-row md:justify-between gap-2">
            <Button variant="outline" onClick={handleGenerateMoreQuestions} disabled={isGeneratingQuestions}>
              {isGeneratingQuestions ? "Generating..." : "Generate More Questions"}
            </Button>
            <Button onClick={() => setQuestionDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
