import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, FileQuestion, Filter, Plus, Search, Upload } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function PyqManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PYQ Management</h1>
          <p className="text-muted-foreground">Manage Previous Year Questions database for UPSC preparation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Questions
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Question
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search questions..." className="w-full bg-background pl-8 shadow-none" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Exam Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Exams</SelectItem>
            <SelectItem value="prelims">Prelims</SelectItem>
            <SelectItem value="mains">Mains</SelectItem>
            <SelectItem value="essay">Essay</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-years">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-years">All Years</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="older">2019 & Older</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="database" className="space-y-4">
        <TabsList>
          <TabsTrigger value="database">PYQ Database</TabsTrigger>
          <TabsTrigger value="analysis">Question Analysis</TabsTrigger>
          <TabsTrigger value="mapping">News Mapping</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Previous Year Questions</CardTitle>
              <CardDescription>Database of questions from UPSC exams</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Question</TableHead>
                    <TableHead>Exam</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Topics</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      question:
                        "Discuss the factors responsible for the origin of ocean currents. How do they influence regional climates, fishing and navigation?",
                      exam: "Mains",
                      year: "2022",
                      subject: "Geography",
                      topics: ["Oceanography", "Climate"],
                    },
                    {
                      question:
                        "Examine the uniqueness of tribal knowledge system when compared with mainstream knowledge and cultural systems.",
                      exam: "Mains",
                      year: "2021",
                      subject: "Society",
                      topics: ["Tribal Issues", "Culture"],
                    },
                    {
                      question:
                        "What are the main constraints in transport and marketing of agricultural produce in India?",
                      exam: "Mains",
                      year: "2020",
                      subject: "Economy",
                      topics: ["Agriculture", "Infrastructure"],
                    },
                    {
                      question:
                        "The emergence of the Fourth Industrial Revolution has given fillip to the growth of Artificial Intelligence. In light of this, examine the challenges to personal choices in the digital era.",
                      exam: "Mains",
                      year: "2022",
                      subject: "Science & Technology",
                      topics: ["AI", "Ethics", "Privacy"],
                    },
                    {
                      question:
                        "Disaster preparedness is the first step in any disaster management process. Explain how hazard zonation mapping will help disaster mitigation in the case of landslides.",
                      exam: "Mains",
                      year: "2019",
                      subject: "Disaster Management",
                      topics: ["Landslides", "Mitigation"],
                    },
                  ].map((question, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium line-clamp-2">{question.question}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={question.exam === "Mains" ? "default" : "secondary"}>{question.exam}</Badge>
                      </TableCell>
                      <TableCell>{question.year}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{question.subject}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {question.topics.map((topic, j) => (
                            <Badge key={j} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-4">
              <div className="text-sm text-muted-foreground">Showing 5 of 2,543 questions</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Question Analysis</CardTitle>
              <CardDescription>Detailed analysis of question patterns and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Subject-wise Distribution</h3>
                  <div className="space-y-4">
                    {[
                      { subject: "Polity", percentage: 18, count: 458 },
                      { subject: "Economy", percentage: 22, count: 562 },
                      { subject: "History", percentage: 15, count: 384 },
                      { subject: "Geography", percentage: 20, count: 510 },
                      { subject: "Science & Technology", percentage: 12, count: 307 },
                      { subject: "Environment", percentage: 13, count: 332 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{item.subject}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.percentage}% ({item.count})
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Year-wise Trends</CardTitle>
                      <CardDescription>Question distribution by year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                        <FileQuestion className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Year-wise chart</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Difficulty Analysis</CardTitle>
                      <CardDescription>Question difficulty trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                        <FileQuestion className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Difficulty chart</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Topic Hotspots (Last 3 Years)</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { topic: "Climate Change", count: 32 },
                      { topic: "Constitutional Amendments", count: 28 },
                      { topic: "International Relations", count: 24 },
                      { topic: "Artificial Intelligence", count: 18 },
                      { topic: "Federal Structure", count: 17 },
                      { topic: "Banking Reforms", count: 15 },
                      { topic: "Biodiversity", count: 14 },
                      { topic: "Urban Planning", count: 13 },
                    ].map((topic, i) => (
                      <div key={i} className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {topic.topic}
                        <Badge variant="secondary" className="rounded-full">
                          {topic.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Comprehensive Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="mapping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>News to PYQ Mapping</CardTitle>
              <CardDescription>Map current news articles to related previous year questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    news: "India Signs New Climate Agreement at COP28",
                    date: "December 5, 2023",
                    questions: [
                      {
                        text: "Discuss the challenges faced by India in meeting its climate commitments. Suggest measures to overcome these challenges.",
                        year: "2022",
                      },
                      {
                        text: "What are the major factors responsible for climate change? How does it impact Indian agriculture?",
                        year: "2021",
                      },
                    ],
                  },
                  {
                    news: "Supreme Court Judgment on Privacy as Fundamental Right",
                    date: "November 18, 2023",
                    questions: [
                      {
                        text: "The right to privacy in India has evolved through judicial pronouncements. Discuss the constitutional basis and scope of this right.",
                        year: "2020",
                      },
                      {
                        text: "Examine the recent Supreme Court rulings on the right to privacy and its implications on governance.",
                        year: "2019",
                      },
                    ],
                  },
                  {
                    news: "New National Education Policy Implementation",
                    date: "October 30, 2023",
                    questions: [
                      {
                        text: "Discuss the key features of the New Education Policy 2020 and its potential to transform the education system in India.",
                        year: "2021",
                      },
                      {
                        text: "Education is the most powerful tool for social transformation. Examine the role of education in creating an inclusive society.",
                        year: "2018",
                      },
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-background">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{item.news}</h3>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3" /> {item.date}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Article
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border-t bg-muted/30">
                      <h4 className="text-sm font-medium mb-2">Related PYQs:</h4>
                      <div className="space-y-3">
                        {item.questions.map((q, j) => (
                          <div key={j} className="bg-background p-3 rounded-md">
                            <p className="text-sm">{q.text}</p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline">UPSC Mains {q.year}</Badge>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 border-t flex justify-end">
                      <Button variant="ghost" size="sm">
                        Find More Related Questions
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Run Auto-Mapping on Latest News</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Topic Trends Analysis</CardTitle>
              <CardDescription>Analyze trends in UPSC question patterns over the years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
                  <FileQuestion className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Topic trend analysis chart</span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Rising Topics</CardTitle>
                      <CardDescription>Topics with increasing appearance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { topic: "Artificial Intelligence & Ethics", change: "+128%" },
                          { topic: "Climate Action & Sustainability", change: "+87%" },
                          { topic: "Digital Governance", change: "+62%" },
                          { topic: "Geo-Politics & New World Order", change: "+54%" },
                          { topic: "Disaster Resilience", change: "+41%" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{item.topic}</span>
                            <Badge className="bg-green-500">{item.change}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Declining Topics</CardTitle>
                      <CardDescription>Topics with decreasing appearance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { topic: "Traditional Agricultural Practices", change: "-35%" },
                          { topic: "Historical Monuments", change: "-32%" },
                          { topic: "Conventional Energy Sources", change: "-28%" },
                          { topic: "Colonial History", change: "-24%" },
                          { topic: "Traditional Industries", change: "-18%" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{item.topic}</span>
                            <Badge className="bg-red-500">{item.change}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Predicted Focus Areas (2024)</CardTitle>
                    <CardDescription>AI-predicted focus areas for upcoming exams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        { area: "Climate Adaptation Strategies", confidence: "High" },
                        { area: "Digital Currency & Fintech Revolution", confidence: "Medium" },
                        { area: "Space Economy & Commercialization", confidence: "Medium" },
                        { area: "Artificial Intelligence Governance", confidence: "High" },
                        { area: "Pandemic Preparedness & Global Health", confidence: "High" },
                        { area: "Renewable Energy Transition", confidence: "Medium" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 border rounded-md">
                          <div
                            className={`h-3 w-3 rounded-full ${
                              item.confidence === "High"
                                ? "bg-green-500"
                                : item.confidence === "Medium"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }`}
                          ></div>
                          <div>
                            <div className="font-medium text-sm">{item.area}</div>
                            <div className="text-xs text-muted-foreground">Confidence: {item.confidence}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Strategy Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
