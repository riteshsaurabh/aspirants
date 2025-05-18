import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Calendar, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export function AIStudyRecommendations() {
  // Sample data for recommendations
  const recommendations = {
    daily: [
      {
        title: "Indian Polity: Constitutional Amendments",
        description: "Focus on important amendments and their implications",
        priority: "High",
        timeEstimate: "2 hours",
        resources: ["Laxmikanth Chapter 12", "The Hindu Editorial (May 15)"],
        progress: 0,
      },
      {
        title: "Environment: Climate Change Policies",
        description: "Study international agreements and India's commitments",
        priority: "Medium",
        timeEstimate: "1.5 hours",
        resources: ["NCERT Class 12 Chapter 16", "Down to Earth Magazine (Latest)"],
        progress: 0,
      },
      {
        title: "Current Affairs: International Relations",
        description: "Focus on India's relations with neighboring countries",
        priority: "High",
        timeEstimate: "1 hour",
        resources: ["The Hindu International Section", "MEA Website Updates"],
        progress: 0,
      },
    ],
    weekly: [
      {
        title: "Economy: Banking System and Reforms",
        description: "Complete overview of banking structure and recent reforms",
        priority: "Medium",
        timeEstimate: "5 hours",
        resources: ["Economic Survey Chapter 6", "RBI Annual Report"],
        progress: 35,
      },
      {
        title: "Modern History: Freedom Struggle (1920-1947)",
        description: "Focus on major movements and their significance",
        priority: "High",
        timeEstimate: "6 hours",
        resources: ["Spectrum Modern India Chapters 12-18", "NCERT Class 12"],
        progress: 60,
      },
      {
        title: "Geography: Agricultural Patterns in India",
        description: "Study crop patterns, irrigation, and agricultural policies",
        priority: "Medium",
        timeEstimate: "4 hours",
        resources: ["NCERT Class 12 Geography", "Indian Geography by Majid Husain"],
        progress: 25,
      },
    ],
    monthly: [
      {
        title: "Complete Revision: Indian Polity",
        description: "Comprehensive revision of all polity topics",
        priority: "High",
        timeEstimate: "15 hours",
        resources: ["Laxmikanth Complete Book", "Vision IAS Polity Notes"],
        progress: 40,
      },
      {
        title: "Answer Writing Practice: GS Paper 2",
        description: "Practice 20 questions with proper structure",
        priority: "High",
        timeEstimate: "10 hours",
        resources: ["Previous Year Questions", "Model Answers from Toppers"],
        progress: 15,
      },
      {
        title: "Mock Tests: Prelims Full Length",
        description: "Complete 4 full-length prelims mock tests",
        priority: "Medium",
        timeEstimate: "12 hours",
        resources: ["Vision IAS Test Series", "Forum IAS Test Series"],
        progress: 50,
      },
    ],
    weaknesses: [
      {
        title: "Economy: Fiscal Policy",
        description: "Strengthen understanding of budget, taxation, and expenditure",
        priority: "Critical",
        timeEstimate: "8 hours",
        resources: ["Indian Economy by Ramesh Singh", "Economic Survey"],
        progress: 10,
      },
      {
        title: "Science & Technology: Space Technology",
        description: "Focus on ISRO missions and their applications",
        priority: "High",
        timeEstimate: "6 hours",
        resources: ["Science Reporter Magazine", "ISRO Website"],
        progress: 5,
      },
      {
        title: "International Organizations",
        description: "Study structure, functions, and India's role in major organizations",
        priority: "Medium",
        timeEstimate: "7 hours",
        resources: ["International Relations by Pavneet Singh", "MEA Annual Report"],
        progress: 20,
      },
    ],
  }

  const renderRecommendationCard = (item: any, index: number) => (
    <Card key={index} className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </div>
          <Badge
            className={
              item.priority === "High"
                ? "bg-orange-100 text-orange-800"
                : item.priority === "Critical"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
            }
          >
            {item.priority} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center mb-2">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{item.timeEstimate}</span>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium">Resources:</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            {item.resources.map((resource: string, i: number) => (
              <li key={i}>• {resource}</li>
            ))}
          </ul>
        </div>
        {item.progress > 0 && (
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex space-x-2 w-full">
          <Button variant="outline" className="flex-1">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button className="flex-1">
            <BookOpen className="h-4 w-4 mr-2" />
            Start Studying
          </Button>
        </div>
      </CardFooter>
    </Card>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Study Recommendations</CardTitle>
        <CardDescription>AI-generated study plan based on your performance and goals</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="daily">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">Today</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="weaknesses">Focus Areas</TabsTrigger>
          </TabsList>
          {Object.entries(recommendations).map(([period, items]) => (
            <TabsContent key={period} value={period} className="border-0 p-0">
              <ScrollArea className="h-[500px]">
                <div className="p-4">
                  {period === "weaknesses" && (
                    <Card className="mb-4 border-red-200 bg-red-50">
                      <CardHeader className="pb-2">
                        <div className="flex items-start space-x-2">
                          <div className="mt-0.5">
                            <XCircle className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <CardTitle className="text-base">Improvement Areas</CardTitle>
                            <CardDescription>
                              Based on your performance, these topics need additional focus
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  )}

                  {period === "daily" && (
                    <Card className="mb-4 border-green-200 bg-green-50">
                      <CardHeader className="pb-2">
                        <div className="flex items-start space-x-2">
                          <div className="mt-0.5">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <CardTitle className="text-base">Today's Focus</CardTitle>
                            <CardDescription>
                              Complete these topics today to stay on track with your study plan
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  )}

                  {items.map(renderRecommendationCard)}

                  <div className="flex justify-center mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/user-dashboard">
                        View Complete Study Plan <ArrowUpRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
