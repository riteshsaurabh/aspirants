"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  BarChart2,
  CheckCircle2,
  XCircle,
  Newspaper,
  Tag,
  Search,
  Calendar,
  ArrowUpRight,
  BrainCircuit,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function UserDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for demonstration
  const userStats = {
    studyTime: {
      today: 2.5,
      week: 14.3,
      month: 58.7,
    },
    syllabus: {
      overall: 42,
      bySubject: [
        { name: "History", progress: 65 },
        { name: "Geography", progress: 48 },
        { name: "Polity", progress: 72 },
        { name: "Economy", progress: 38 },
        { name: "Science", progress: 25 },
        { name: "Environment", progress: 55 },
      ],
    },
    performance: {
      correct: 68,
      incorrect: 32,
      streak: 7,
    },
    strengths: ["Indian Polity", "Modern History", "International Relations"],
    weaknesses: ["Economy", "Science & Technology", "Environment"],
    flashcards: {
      total: 1250,
      mastered: 420,
      learning: 680,
      new: 150,
      public: 3,
    },
    recentActivity: [
      { type: "flashcard", title: "Completed Economy flashcards", time: "2 hours ago" },
      { type: "news", title: "Read 5 articles on International Relations", time: "Yesterday" },
      { type: "note", title: "Created notes on Environmental Conventions", time: "2 days ago" },
      { type: "flashcard", title: "Created new Geography flashcards", time: "3 days ago" },
    ],
  }

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your UPSC preparation.</p>
        </div>
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search notes, flashcards..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Study Plan
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.studyTime.today} hours</div>
            <p className="text-xs text-muted-foreground">Today ({userStats.studyTime.week} hrs this week)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Syllabus Coverage</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.syllabus.overall}%</div>
            <Progress value={userStats.syllabus.overall} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm">{userStats.performance.correct}%</span>
              </div>
              <div className="flex items-center">
                <XCircle className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm">{userStats.performance.incorrect}%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{userStats.performance.streak} day streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flashcards</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.flashcards.total}</div>
            <p className="text-xs text-muted-foreground">
              {userStats.flashcards.mastered} mastered • {userStats.flashcards.learning} learning
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Syllabus Progress by Subject</CardTitle>
                <CardDescription>Track your progress across different UPSC subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userStats.syllabus.bySubject.map((subject) => (
                    <div key={subject.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">{subject.name}</div>
                        <div className="text-sm text-muted-foreground">{subject.progress}%</div>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strengths & Weaknesses</CardTitle>
                <CardDescription>Based on your performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                      Strengths
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {userStats.strengths.map((item, index) => (
                        <Badge key={index} variant="outline" className="bg-green-500/10">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <XCircle className="h-4 w-4 text-red-500 mr-1" />
                      Needs Improvement
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {userStats.weaknesses.map((item, index) => (
                        <Badge key={index} variant="outline" className="bg-red-500/10">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Recent News</CardTitle>
                <CardDescription>Latest UPSC-relevant news extracted by our AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-muted flex items-center justify-center shrink-0">
                        <Newspaper className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">India announces new climate action plan at COP28</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Environment
                          </Badge>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/news">View All News</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flashcard Stats</CardTitle>
                <CardDescription>Your flashcard learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Mastered</div>
                    <div className="text-sm font-medium">{userStats.flashcards.mastered}</div>
                  </div>
                  <Progress
                    value={(userStats.flashcards.mastered / userStats.flashcards.total) * 100}
                    className="h-2 bg-muted"
                  />

                  <div className="flex items-center justify-between">
                    <div className="text-sm">Learning</div>
                    <div className="text-sm font-medium">{userStats.flashcards.learning}</div>
                  </div>
                  <Progress
                    value={(userStats.flashcards.learning / userStats.flashcards.total) * 100}
                    className="h-2 bg-muted"
                  />

                  <div className="flex items-center justify-between">
                    <div className="text-sm">New</div>
                    <div className="text-sm font-medium">{userStats.flashcards.new}</div>
                  </div>
                  <Progress
                    value={(userStats.flashcards.new / userStats.flashcards.total) * 100}
                    className="h-2 bg-muted"
                  />

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/flashcards">Study Flashcards</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Study Time Distribution</CardTitle>
                <CardDescription>Hours spent studying by subject over the past month</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Study Time Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Your accuracy over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Performance Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retention Analysis</CardTitle>
                <CardDescription>How well you remember information over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Retention Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Subject Performance Comparison</CardTitle>
                <CardDescription>How you're performing across different subjects</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                  <BarChart2 className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Subject Performance Chart</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {userStats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-0.5">
                      {activity.type === "flashcard" && <BookOpen className="h-5 w-5 text-primary" />}
                      {activity.type === "news" && <Newspaper className="h-5 w-5 text-primary" />}
                      {activity.type === "note" && <Tag className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recently Viewed Articles</CardTitle>
                <CardDescription>News articles you've read recently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center shrink-0">
                        <Newspaper className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">New agricultural reforms announced by government</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Agriculture
                          </Badge>
                          <span className="text-xs text-muted-foreground">Read 3 hours ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recently Created Notes</CardTitle>
                <CardDescription>Notes you've created recently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center shrink-0">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Constitutional amendments and their significance</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Polity
                          </Badge>
                          <span className="text-xs text-muted-foreground">Created 1 day ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Study Focus</CardTitle>
                <CardDescription>Based on your performance and syllabus coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userStats.weaknesses.map((topic, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center shrink-0">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Focus on {topic}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          This is one of your weaker areas. We recommend spending at least 2 hours this week on this
                          topic.
                        </p>
                        <Button variant="link" className="h-auto p-0 text-xs" asChild>
                          <Link href={`/flashcards?topic=${topic.toLowerCase().replace(/\s+/g, "-")}`}>
                            Study Flashcards <ArrowUpRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>High-Probability Topics</CardTitle>
                <CardDescription>Topics likely to appear in upcoming exams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center shrink-0">
                        <BarChart2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          {["Climate Change Policy", "Federal Structure", "Economic Reforms"][index]}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="text-xs bg-primary/20 text-primary">High Probability</Badge>
                          <Badge variant="outline" className="text-xs">
                            {["Environment", "Polity", "Economy"][index]}
                          </Badge>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-xs mt-1" asChild>
                          <Link href="/pyq-mapping">
                            View PYQ Mapping <ArrowUpRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Recommended Reading</CardTitle>
                <CardDescription>Articles and resources tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-muted flex items-center justify-center shrink-0">
                        <Newspaper className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          {
                            [
                              "Understanding the New Education Policy",
                              "India's Foreign Policy Challenges",
                              "Environmental Impact Assessment",
                              "Economic Survey Highlights",
                            ][index]
                          }
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {["Education", "International Relations", "Environment", "Economy"][index]}
                          </Badge>
                          <span className="text-xs text-muted-foreground">10 min read</span>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-xs mt-1">
                          Read Article <ArrowUpRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
