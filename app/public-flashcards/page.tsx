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
import { Bookmark, RotateCw, Share2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data for flashcards
const mockFlashcards = Array.from({ length: 50 }).map((_, i) => ({
  id: `flashcard-${i + 1}`,
  title: `${i % 5 === 0 ? "Polity" : i % 5 === 1 ? "Economy" : i % 5 === 2 ? "Geography" : i % 5 === 3 ? "History" : "Science"} Concept ${i + 1}`,
  description: `This flashcard covers important concepts about ${i % 5 === 0 ? "Indian Constitution" : i % 5 === 1 ? "Economic Reforms" : i % 5 === 2 ? "Physical Geography" : i % 5 === 3 ? "Modern India" : "Environmental Science"}.`,
  category: i % 5 === 0 ? "gs-2" : i % 5 === 1 ? "gs-3" : i % 5 === 2 ? "gs-1" : i % 5 === 3 ? "gs-1" : "gs-3",
  subcategory:
    i % 5 === 0 ? "polity" : i % 5 === 1 ? "economy" : i % 5 === 2 ? "geography" : i % 5 === 3 ? "history" : "science",
  cardCount: Math.floor(Math.random() * 10) + 5,
  createdBy: "UPSC Aspirants AI",
  createdAt: new Date(2023, 11, 31 - (i % 30)).toLocaleDateString(),
  tags: [
    i % 5 === 0
      ? "Constitution"
      : i % 5 === 1
        ? "Economy"
        : i % 5 === 2
          ? "Geography"
          : i % 5 === 3
            ? "History"
            : "Science",
    "UPSC",
    i % 2 === 0 ? "Important" : "Conceptual",
    i % 3 === 0 ? "Prelims" : "Mains",
  ],
}))

interface Flashcard {
  id: string
  title: string
  description: string
  category: string
  subcategory: string
  cardCount: number
  createdBy: string
  createdAt: string
  tags: string[]
}

export default function PublicFlashcardsPage() {
  const searchParams = useSearchParams()
  const currentPage = Number((searchParams && searchParams.get("page")) || "1")
  const [activeTab, setActiveTab] = useState<string>("all")
  const [filteredFlashcards, setFilteredFlashcards] = useState<Flashcard[]>([])
  const [savedFlashcards, setSavedFlashcards] = useState<Set<string>>(new Set())
  const [studyDialogOpen, setStudyDialogOpen] = useState<boolean>(false)
  const [currentFlashcardSet, setCurrentFlashcardSet] = useState<Flashcard | null>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const [questionDialogOpen, setQuestionDialogOpen] = useState<boolean>(false)
  const [prelimsQuestions, setPrelimsQuestions] = useState<any[]>([])
  const [mainsQuestions, setMainsQuestions] = useState<string[]>([])
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState<boolean>(false)
  const [topic, setTopic] = useState<string>("")
  const [generatedFlashcards, setGeneratedFlashcards] = useState<any[]>([])
  const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState<boolean>(false)

  const ITEMS_PER_PAGE = 9

  // Mock flashcard content for study mode
  const mockFlashcardContent = [
    {
      front: "What is the significance of Article 32 of the Indian Constitution?",
      back: "Article 32 is a fundamental right that provides the right to constitutional remedies. It empowers citizens to move the Supreme Court for enforcement of their fundamental rights. Dr. B.R. Ambedkar called it the 'heart and soul' of the Constitution.",
    },
    {
      front: "Explain the concept of Judicial Review in the Indian context.",
      back: "Judicial Review is the power of the judiciary to examine the constitutionality of legislative enactments and executive orders. In India, it's derived from Articles 13, 32, 136, 226, and 227 of the Constitution. It ensures checks and balances in the democratic system.",
    },
    {
      front: "What are the key features of the 73rd Constitutional Amendment Act?",
      back: "The 73rd Amendment (1992) gave constitutional status to Panchayati Raj Institutions. Key features include: three-tier system, regular elections, reservation for SC/ST/women, State Election Commission, State Finance Commission, and devolution of powers to panchayats.",
    },
    {
      front: "Describe the concept of Collective Responsibility in the parliamentary system.",
      back: "Collective Responsibility means the Council of Ministers is collectively responsible to the Lok Sabha. If a no-confidence motion is passed against the government, all ministers must resign. It ensures cabinet solidarity and unified decision-making.",
    },
    {
      front: "What is the Anti-Defection Law and its significance?",
      back: "Introduced by the 52nd Amendment (1985), it disqualifies members who voluntarily give up party membership or vote against party directions. It aims to prevent political defections and ensure stability, though critics argue it undermines representative democracy and parliamentary deliberation.",
    },
    {
      front: "Explain the concept of Residuary Powers in the Indian federal structure.",
      back: "Residuary powers refer to legislative powers not enumerated in the Union, State, or Concurrent Lists. Under Article 248, these powers rest with the Parliament. This is unlike the US Constitution where residuary powers are with the states, reflecting India's leaning toward a stronger center.",
    },
    {
      front: "What is the doctrine of Basic Structure as established in the Kesavananda Bharati case?",
      back: "The Basic Structure doctrine (1973) holds that Parliament cannot amend the Constitution to alter its basic structure or essential features. These include supremacy of the Constitution, republican and democratic form of government, secularism, separation of powers, federalism, and judicial review.",
    },
  ]

  useEffect(() => {
    // Filter flashcards based on active tab
    if (activeTab === "all") {
      setFilteredFlashcards(mockFlashcards)
    } else {
      setFilteredFlashcards(
        mockFlashcards.filter((flashcard) => flashcard.category === activeTab || flashcard.subcategory === activeTab),
      )
    }
  }, [activeTab])

  const paginatedFlashcards = filteredFlashcards.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const toggleSaveFlashcard = (id: string) => {
    const newSavedFlashcards = new Set(savedFlashcards)
    if (newSavedFlashcards.has(id)) {
      newSavedFlashcards.delete(id)
    } else {
      newSavedFlashcards.add(id)
    }
    setSavedFlashcards(newSavedFlashcards)
  }

  const openStudyDialog = (flashcard: Flashcard) => {
    setCurrentFlashcardSet(flashcard)
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setStudyDialogOpen(true)
  }

  const nextCard = () => {
    if (currentCardIndex < mockFlashcardContent.length - 1) {
      setCurrentCardIndex((prev) => prev + 1)
      setIsFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1)
      setIsFlipped(false)
    }
  }

  const generateQuestions = async (flashcard: Flashcard) => {
    setCurrentFlashcardSet(flashcard)
    setIsGeneratingQuestions(true)
    setQuestionDialogOpen(true)

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article: flashcard.description }),
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
    if (currentFlashcardSet) generateQuestions(currentFlashcardSet)
  }

  const handleGenerateFlashcards = async () => {
    if (!topic.trim()) return;
    setIsGeneratingFlashcards(true);
    setGeneratedFlashcards([]);
    try {
      const res = await fetch("/api/generate-flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      if (res.ok && data.flashcards) {
        setGeneratedFlashcards(data.flashcards);
      } else {
        setGeneratedFlashcards([]);
      }
    } catch (err) {
      setGeneratedFlashcards([]);
    }
    setIsGeneratingFlashcards(false);
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Public Flashcards</h1>
          <p className="text-muted-foreground">Explore and study from our collection of UPSC-focused flashcards.</p>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              className="border rounded px-3 py-1 w-64"
              placeholder="Enter topic (e.g. Indian Constitution)"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
            <Button onClick={handleGenerateFlashcards} disabled={isGeneratingFlashcards || !topic.trim()}>
              {isGeneratingFlashcards ? "Generating..." : "Generate Flashcards"}
            </Button>
            {generatedFlashcards.length > 0 && (
              <Button variant="outline" onClick={() => setGeneratedFlashcards([])}>
                Clear
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="gs-1">GS-1</TabsTrigger>
            <TabsTrigger value="gs-2">GS-2</TabsTrigger>
            <TabsTrigger value="gs-3">GS-3</TabsTrigger>
            <TabsTrigger value="gs-4">GS-4</TabsTrigger>
            <TabsTrigger value="prelims">Prelims</TabsTrigger>
            <TabsTrigger value="current-affairs">Current Affairs</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isGeneratingFlashcards ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <Card key={i} className="h-40 animate-pulse bg-muted" />
                ))
              ) : generatedFlashcards.length > 0 ? (
                generatedFlashcards.map((fc, i) => (
                  <Card key={i} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">Flashcard {i + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2 font-semibold">Q: {fc.front}</div>
                      <div className="text-muted-foreground">A: {fc.back}</div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                paginatedFlashcards.map((flashcard) => (
                  <Card key={flashcard.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{flashcard.title}</CardTitle>
                        <Badge variant="outline" className="capitalize">
                          {flashcard.category.replace(/-/g, " ")}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span>{flashcard.cardCount} cards</span>
                        <span>•</span>
                        <span>By {flashcard.createdBy}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm">{flashcard.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {flashcard.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="default" size="sm" onClick={() => openStudyDialog(flashcard)}>
                          Study Now
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => generateQuestions(flashcard)}>
                          Generate Questions
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSaveFlashcard(flashcard.id)}
                          className={savedFlashcards.has(flashcard.id) ? "text-primary" : ""}
                          title="Save flashcard"
                        >
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Share flashcard">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>

            <Pagination
              totalItems={filteredFlashcards.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Study Dialog */}
      <Dialog open={studyDialogOpen} onOpenChange={setStudyDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentFlashcardSet?.title}</DialogTitle>
            <DialogDescription>
              Card {currentCardIndex + 1} of {mockFlashcardContent.length}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div
              style={{ perspective: 1000 }}
              className="w-full h-[300px] cursor-pointer flex items-center justify-center"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'none',
                }}
              >
                {/* Front */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <p className="text-xl font-medium text-center">{mockFlashcardContent[currentCardIndex].front}</p>
                </div>
                {/* Back */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-base">{mockFlashcardContent[currentCardIndex].back}</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">Click on the card to flip it</p>
          </div>
          <DialogFooter className="flex justify-between sm:justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={prevCard} disabled={currentCardIndex === 0}>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextCard}
                disabled={currentCardIndex === mockFlashcardContent.length - 1}
              >
                Next
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setCurrentCardIndex(0)
                  setIsFlipped(false)
                }}
                title="Reset"
              >
                <RotateCw className="h-4 w-4" />
              </Button>
              <Button onClick={() => setStudyDialogOpen(false)}>Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Question Generation Dialog */}
      <Dialog open={questionDialogOpen} onOpenChange={setQuestionDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Generated Questions</DialogTitle>
            <DialogDescription>
              UPSC-level questions based on {currentFlashcardSet?.title}.
            </DialogDescription>
            {currentFlashcardSet?.tags && (
              <div className="mt-2 text-xs text-muted-foreground">
                Tags: {currentFlashcardSet.tags.join(", ")}
              </div>
            )}
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
