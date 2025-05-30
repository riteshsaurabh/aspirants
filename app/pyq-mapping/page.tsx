"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Pagination } from "@/components/pagination"
import { Bookmark, ExternalLink, FileText } from "lucide-react"

// Mock data for PYQ mapping
const mockPYQs = Array.from({ length: 50 }).map((_, i) => ({
  id: `pyq-${i + 1}`,
  question: `${
    i % 5 === 0
      ? "Discuss the role of civil society in strengthening democracy in India."
      : i % 5 === 1
        ? "Critically examine the impact of climate change on Indian agriculture."
        : i % 5 === 2
          ? "Analyze the challenges and opportunities in India's neighborhood policy."
          : i % 5 === 3
            ? "Evaluate the effectiveness of government schemes in addressing rural poverty."
            : "Examine the ethical concerns related to artificial intelligence and suggest measures to address them."
  }`,
  year: 2010 + (i % 13),
  examType: i % 3 === 0 ? "mains" : i % 3 === 1 ? "prelims" : "essay",
  paper: i % 5 === 0 ? "GS-2" : i % 5 === 1 ? "GS-3" : i % 5 === 2 ? "GS-2" : i % 5 === 3 ? "GS-3" : "GS-4",
  topic:
    i % 5 === 0
      ? "Governance"
      : i % 5 === 1
        ? "Environment"
        : i % 5 === 2
          ? "International Relations"
          : i % 5 === 3
            ? "Economy"
            : "Ethics",
  relatedNewsCount: Math.floor(Math.random() * 5) + 1,
  tags: [
    i % 5 === 0
      ? "Democracy"
      : i % 5 === 1
        ? "Climate Change"
        : i % 5 === 2
          ? "Foreign Policy"
          : i % 5 === 3
            ? "Poverty"
            : "Technology",
    "UPSC",
    i % 2 === 0 ? "Important" : "Conceptual",
  ],
}))

interface PYQ {
  id: string
  question: string
  year: number
  examType: string
  paper: string
  topic: string
  relatedNewsCount: number
  tags: string[]
}

export default function PYQMappingPage() {
  const searchParams = useSearchParams()
  const currentPage = Number((searchParams && searchParams.get('page')) || '1')
  const [activeTab, setActiveTab] = useState<string>("all")
  const [filteredPYQs, setFilteredPYQs] = useState<PYQ[]>([])
  const [savedPYQs, setSavedPYQs] = useState<Set<string>>(new Set())
  const [newsDialogOpen, setNewsDialogOpen] = useState<boolean>(false)
  const [currentPYQ, setCurrentPYQ] = useState<PYQ | null>(null)
  const [noteDialogOpen, setNoteDialogOpen] = useState<boolean>(false)
  const [noteContent, setNoteContent] = useState<string>("")
  const [noteTags, setNoteTags] = useState<string>("")
  const [questionDialogOpen, setQuestionDialogOpen] = useState(false)
  const [prelimsQuestions, setPrelimsQuestions] = useState<any[]>([])
  const [mainsQuestions, setMainsQuestions] = useState<string[]>([])
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)
  
  const ITEMS_PER_PAGE = 10
  
  // Mock related news for a PYQ
  const mockRelatedNews = [
    {
      id: 'news-1',
      title: 'Government Launches New Initiative to Strengthen Civil Society Organizations',
      source: 'The Hindu',
      date: '15 May 2023',
      url: 'https://example.com/news/1'
    },
    {
      id: 'news-2',
      title: 'Study Shows Increasing Role of NGOs in Policy Making',
      source: 'Indian Express',
      date: '23 June 2023',
      url: 'https://example.com/news/2'
    },
    {
      id: 'news-3',
      title: 'Civil Society Groups Demand More Transparency in Governance',
      source: 'The Times of India',
      date: '7 July 2023',
      url: 'https://example.com/news/3'
    },
    {
      id: 'news-4',
      title: 'How Grassroots Organizations Are Changing Rural Governance',
      source: 'Down To Earth',
      date: '12 August 2023',
      url: 'https://example.com/news/4'
    }
  ]
  
  useEffect(() => {
    // Filter PYQs based on active tab
    if (activeTab === "all") {
      setFilteredPYQs(mockPYQs)
    } else {
      setFilteredPYQs(mockPYQs.filter(pyq => 
        pyq.examType === activeTab || pyq.paper.toLowerCase() === activeTab
      ))
    }
  }, [activeTab])
  
  const paginatedPYQs = filteredPYQs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  
  const toggleSavePYQ = (id: string) => {
    const newSavedPYQs = new Set(savedPYQs)
    if (newSavedPYQs.has(id)) {
      newSavedPYQs.delete(id)
    } else {
      newSavedPYQs.add(id)
    }
    setSavedPYQs(newSavedPYQs)
  }
  
  const openNewsDialog = (pyq: PYQ) => {
    setCurrentPYQ(pyq)
    setNewsDialogOpen(true)
  }
  
  const openNoteDialog = (pyq: PYQ) => {
    setCurrentPYQ(pyq)
    setNoteDialogOpen(true)
  }
  
  const saveNote = () => {
    // In a real app, this would save the note to a database
    console.log(`Saving note for PYQ ${currentPYQ?.id}:`, noteContent)
    console.log(`Tags:`, noteTags.split(',').map(tag => tag.trim()))
    setNoteDialogOpen(false)
    setNoteContent("")
    setNoteTags("")
  }
  
  const generateQuestions = async (pyq: PYQ) => {
    setCurrentPYQ(pyq)
    setIsGeneratingQuestions(true)
    setQuestionDialogOpen(true)
    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article: pyq.question }),
      })
      const data = await res.json()
      if (res.ok) {
        setPrelimsQuestions(data.prelims || [])
        setMainsQuestions(data.mains || [])
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
    if (currentPYQ) generateQuestions(currentPYQ)
  }
  
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">PYQ Mapping</h1>
          <p className="text-muted-foreground">
            Explore previous years' questions and their connections to current affairs.
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="prelims">Prelims</TabsTrigger>
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="essay">Essay</TabsTrigger>
            <TabsTrigger value="gs-1">GS-1</TabsTrigger>
            <TabsTrigger value="gs-2">GS-2</TabsTrigger>
            <TabsTrigger value="gs-3">GS-3</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6">
              {(paginatedPYQs || []).map((pyq) => (
                <Card key={pyq.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{pyq.year}</Badge>
                          <Badge variant="outline" className="capitalize">{pyq.examType}</Badge>
                          <Badge variant="outline">{pyq.paper}</Badge>
                        </div>
                        <CardTitle className="text-xl">{pyq.question}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(pyq.tags || []).map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Topic: {pyq.topic}</span>
                      <span>•</span>
                      <span>{pyq.relatedNewsCount} related news articles</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => openNewsDialog(pyq)}>
                        View Related News
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => openNoteDialog(pyq)}>
                        <FileText className="h-4 w-4 mr-2" />
                        Add Notes
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => generateQuestions(pyq)}>
                        Generate Questions
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => toggleSavePYQ(pyq.id)}
                        className={savedPYQs.has(pyq.id) ? 'text-primary' : ''}
                        title="Save PYQ"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Pagination 
              totalItems={filteredPYQs.length} 
              itemsPerPage={ITEMS_PER_PAGE} 
              currentPage={currentPage} 
            />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related News Dialog */}
      <Dialog open={newsDialogOpen} onOpenChange={setNewsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Related News Articles</DialogTitle>
            <DialogDescription>
              News articles related to the question: {currentPYQ?.question}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              {(mockRelatedNews || []).map((news) => (
                <Card key={news.id}>
                  <CardHeader className="py-3">
                    <CardTitle className="text-base">{news.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <span>{news.source}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="py-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={news.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setNewsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Note Dialog */}
      <Dialog open={noteDialogOpen} onOpenChange={setNoteDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Notes</DialogTitle>
            <DialogDescription>
              Add notes for the question: {currentPYQ?.question}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Enter your notes here..."
              className="w-full h-32 p-2 border rounded-md"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {(noteTags ? noteTags.split(',') : []).map((tag) => (
                <Badge key={tag} variant="secondary">{tag.trim()}</Badge>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={saveNote}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Question Dialog */}
      <Dialog open={questionDialogOpen} onOpenChange={setQuestionDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Generated Questions</DialogTitle>
            <DialogDescription>UPSC-level questions based on this PYQ.</DialogDescription>
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
                    <div key={i} className="h-12 w-full bg-gray-200 rounded animate-pulse" />
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
                            {Object.entries(q.options)
                              .filter(([_key, val]) => typeof val === 'string')
                              .map(([key, val]) => (
                                <li key={key}><b>{key}.</b> {val as string}</li>
                              ))}
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
                      {mainsQuestions.map((question: string, i: number) => (
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
