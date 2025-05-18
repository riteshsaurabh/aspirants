"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BrainCircuit,
  Send,
  Sparkles,
  BookOpen,
  Clock,
  Lightbulb,
  History,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { AIKnowledgeBase } from "@/components/ai-knowledge-base"
import { AIStudyRecommendations } from "@/components/ai-study-recommendations"

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string; timestamp: Date }>>([
    {
      role: "assistant",
      content:
        "Hello! I'm your UPSC AI Assistant. I can help answer your questions about UPSC preparation, provide study guidance, explain concepts, or suggest resources. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sample frequently asked questions
  const suggestedQuestions = [
    "How should I start my UPSC preparation?",
    "What are the most important topics for Prelims?",
    "How to improve my answer writing for Mains?",
    "Recommend books for Indian Polity",
    "Tips for time management during preparation",
  ]

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: inputValue,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    // Generate AI response based on user input
    const aiResponse = generateAIResponse(inputValue)

    // Add AI response
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      },
    ])
    setIsTyping(false)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
  }

  const generateAIResponse = (query: string): string => {
    // This is a simplified response generation function
    // In a real application, this would call an actual AI service

    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("start") && lowerQuery.includes("preparation")) {
      return "To start your UPSC preparation, I recommend following these steps:\n\n1. **Understand the syllabus** thoroughly - The UPSC syllabus is vast but finite. Download it from the official website and analyze it.\n\n2. **Read NCERTs** - Begin with NCERT textbooks from Class 6-12 for subjects like History, Geography, Polity, Economics, and Science.\n\n3. **Follow a good newspaper** - The Hindu or Indian Express are recommended for current affairs.\n\n4. **Make notes** - Develop a habit of making concise notes as you study.\n\n5. **Join test series** - After covering basics, join a good test series for practice.\n\n6. **Develop answer writing skills** - Practice writing answers regularly for the Mains examination.\n\nWould you like me to elaborate on any of these points?"
    }

    if (lowerQuery.includes("prelims") && (lowerQuery.includes("topics") || lowerQuery.includes("important"))) {
      return "For UPSC Prelims, focus on these important areas:\n\n1. **Current Affairs** - Last 12-18 months are crucial\n\n2. **Indian Polity** - Constitution, amendments, governance\n\n3. **Economic Survey & Budget** - Key economic concepts and recent developments\n\n4. **Geography** - Physical, Indian, and World Geography\n\n5. **Environment & Ecology** - Conservation, biodiversity, climate change\n\n6. **History** - Ancient, Medieval, Modern with focus on freedom struggle\n\n7. **Science & Technology** - Basic concepts and recent developments\n\nThe key is to focus on factual information and practice multiple-choice questions regularly. Would you like specific book recommendations for any of these subjects?"
    }

    if (lowerQuery.includes("answer writing") || (lowerQuery.includes("mains") && lowerQuery.includes("improve"))) {
      return "To improve your answer writing for UPSC Mains:\n\n1. **Understand the demand of the question** - Identify the directive words (discuss, analyze, examine, etc.)\n\n2. **Structure your answer** - Introduction, body (with subheadings), and conclusion\n\n3. **Use the 3-component approach** - Explanation, examples/evidence, and evaluation\n\n4. **Practice regularly** - Write at least 1-2 answers daily\n\n5. **Get feedback** - Have your answers evaluated by mentors or peers\n\n6. **Study model answers** - Analyze toppers' answers to understand the approach\n\n7. **Time management** - Practice writing within time constraints (7-8 minutes per question)\n\n8. **Diagrams and flowcharts** - Use them where relevant to enhance your answers\n\nWould you like me to provide a sample answer structure for practice?"
    }

    if (lowerQuery.includes("polity") && lowerQuery.includes("books")) {
      return "For Indian Polity, I recommend these books:\n\n1. **Indian Polity by M. Laxmikanth** - The bible for UPSC Polity preparation, covers almost everything\n\n2. **Introduction to the Constitution of India by D.D. Basu** - For deeper understanding of constitutional provisions\n\n3. **NCERT Political Science textbooks** (Class 9-12) - For building basics\n\n4. **Indian Polity: For Civil Services Examinations by Subhash Kashyap** - Alternative perspective\n\n5. **Our Constitution by Subhash Kashyap** - For additional insights\n\nStart with NCERTs, then move to Laxmikanth. Supplement with current affairs related to polity from newspapers. Would you like recommendations for any other subject?"
    }

    if (lowerQuery.includes("time management") || lowerQuery.includes("manage time")) {
      return "Effective time management for UPSC preparation:\n\n1. **Create a realistic timetable** - Allocate time based on your strengths and weaknesses\n\n2. **Use the 50-10 rule** - Study for 50 minutes, take a 10-minute break\n\n3. **Prioritize subjects** - Give more time to high-weightage and difficult subjects\n\n4. **Combine static and current affairs** - Study related current affairs right after covering a static topic\n\n5. **Early morning studies** - Utilize early morning hours (4-7 AM) for difficult topics requiring concentration\n\n6. **Regular revision** - Allocate specific time for revision (weekly and monthly)\n\n7. **Eliminate distractions** - Limit social media and other distractions\n\n8. **Use 'dead time'** - Utilize commute or waiting time for light reading or revision\n\n9. **Track progress** - Maintain a journal to track daily progress\n\nRemember, consistency is more important than studying for long hours. Would you like a sample daily schedule?"
    }

    // Default response for other queries
    return "That's an interesting question about UPSC preparation. While I don't have specific information on that particular topic, I can help you with study strategies, exam pattern information, or recommend resources. Could you provide more details about what you're looking for, or would you like me to suggest some general preparation tips?"
  }

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-6">AI Assistant</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="chat" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chat">
                <BrainCircuit className="mr-2 h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="knowledge">
                <BookOpen className="mr-2 h-4 w-4" />
                Knowledge Base
              </TabsTrigger>
              <TabsTrigger value="recommendations">
                <Lightbulb className="mr-2 h-4 w-4" />
                Study Recommendations
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="border rounded-md">
              <Card className="border-0 shadow-none">
                <CardHeader className="px-4 pt-4 pb-2">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">UPSC AI Assistant</CardTitle>
                      <CardDescription>Powered by advanced AI</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-auto bg-green-50 text-green-700 hover:bg-green-50">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px] px-4">
                    <div className="space-y-4 pt-2 pb-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <div className="mb-1 flex items-center">
                              {message.role === "assistant" && (
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="AI" />
                                  <AvatarFallback>AI</AvatarFallback>
                                </Avatar>
                              )}
                              <span className="text-xs opacity-70">
                                {message.role === "user" ? "You" : "AI Assistant"} •{" "}
                                {message.timestamp.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                            <div className="whitespace-pre-line">{message.content}</div>
                            {message.role === "assistant" && (
                              <div className="mt-2 flex items-center justify-end space-x-2">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <ThumbsUp className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <ThumbsDown className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <Bookmark className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                            <div className="flex items-center space-x-2">
                              <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="px-4 py-3 border-t">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSendMessage()
                    }}
                    className="flex w-full items-center space-x-2"
                  >
                    <Input
                      placeholder="Type your question here..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="knowledge">
              <AIKnowledgeBase />
            </TabsContent>
            <TabsContent value="recommendations">
              <AIStudyRecommendations />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Suggested Questions</CardTitle>
              <CardDescription>Try asking the AI assistant these questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 px-3"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
            <Separator />
            <CardHeader className="pt-4 pb-2">
              <CardTitle className="text-lg">Recent Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-2 px-3">
                <History className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">UPSC Syllabus Overview</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-2 px-3">
                <History className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Economics Preparation</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-2 px-3">
                <History className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Current Affairs Strategy</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </Button>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Clock className="h-4 w-4 mr-2" />
                View All History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
