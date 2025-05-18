import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Plus, Search, Settings, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function FlashcardManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Flashcard Management</h1>
          <p className="text-muted-foreground">Manage flashcards and revision cards for UPSC preparation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Generation Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Flashcard Set
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search flashcards..." className="w-full bg-background pl-8 shadow-none" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="polity">Polity</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="geography">Geography</SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="science">Science & Tech</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="sets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sets">Flashcard Sets</TabsTrigger>
          <TabsTrigger value="individual">Individual Cards</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="generation">AI Generation</TabsTrigger>
        </TabsList>
        <TabsContent value="sets" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Flashcard Sets</CardTitle>
              <CardDescription>Manage collections of flashcards grouped by topic</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Set Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Cards</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Indian Constitution Basics",
                      category: "Polity",
                      cards: 32,
                      date: "May 12, 2023",
                      public: true,
                    },
                    {
                      name: "Economic Reforms in India",
                      category: "Economy",
                      cards: 24,
                      date: "May 10, 2023",
                      public: true,
                    },
                    {
                      name: "Environmental Issues",
                      category: "Geography",
                      cards: 18,
                      date: "May 8, 2023",
                      public: false,
                    },
                    {
                      name: "Modern Indian History",
                      category: "History",
                      cards: 45,
                      date: "May 5, 2023",
                      public: true,
                    },
                    {
                      name: "International Relations",
                      category: "Polity",
                      cards: 28,
                      date: "May 3, 2023",
                      public: false,
                    },
                  ].map((set, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{set.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Last updated: {new Date().toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{set.category}</Badge>
                      </TableCell>
                      <TableCell>{set.cards} cards</TableCell>
                      <TableCell>{set.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={set.public} />
                          <Label>{set.public ? "Public" : "Private"}</Label>
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
              <div className="text-sm text-muted-foreground">Showing 5 of 24 flashcard sets</div>
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
        <TabsContent value="individual" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Fundamental Rights</CardTitle>
                    <Badge variant="outline">Polity</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/50">
                    <p className="font-medium">
                      What are the six fundamental rights guaranteed by the Indian Constitution?
                    </p>
                  </div>
                  <div className="p-4 border-t">
                    <p className="text-muted-foreground">
                      The six fundamental rights guaranteed by the Indian Constitution are: 1. Right to Equality 2.
                      Right to Freedom 3. Right against Exploitation 4. Right to Freedom of Religion 5. Cultural and
                      Educational Rights 6. Right to Constitutional Remedies
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="text-sm text-muted-foreground">Created: May {4 + i}, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Flashcards</Button>
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Flashcard Templates</CardTitle>
              <CardDescription>Pre-defined templates for different types of flashcards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Concept Definition",
                    description: "Template for defining UPSC concepts",
                    fields: ["Concept Name", "Definition", "Examples", "Related Concepts"],
                  },
                  {
                    name: "Topic Summary",
                    description: "Template for summarizing important topics",
                    fields: ["Topic", "Key Points", "Significance", "Previous Year Questions"],
                  },
                  {
                    name: "Comparison Card",
                    description: "Template for comparing two related concepts",
                    fields: ["Concept A", "Concept B", "Similarities", "Differences", "Examples"],
                  },
                  {
                    name: "Timeline Card",
                    description: "Template for historical events timeline",
                    fields: ["Period/Era", "Key Events", "Important Figures", "Significance"],
                  },
                ].map((template, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-background">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t bg-muted/30">
                      <h4 className="text-sm font-medium mb-2">Template Fields</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {template.fields.map((field, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-sm">{field}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create New Template
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="generation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Flashcard Generation</CardTitle>
              <CardDescription>Configure AI-powered flashcard generation settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="source-type">Source Type</Label>
                  <Select defaultValue="news">
                    <SelectTrigger id="source-type">
                      <SelectValue placeholder="Select source type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">News Articles</SelectItem>
                      <SelectItem value="notes">Study Notes</SelectItem>
                      <SelectItem value="documents">Uploaded Documents</SelectItem>
                      <SelectItem value="custom">Custom Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="medium">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="pyq">PYQ Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="categories">Categories to Generate</Label>
                  <div className="border rounded-md p-4 space-y-2">
                    {[
                      "Polity",
                      "Economy",
                      "Geography",
                      "History",
                      "Science & Technology",
                      "Environment",
                      "International Relations",
                    ].map((category, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`category-${i}`} defaultChecked={i < 3} />
                        <Label htmlFor={`category-${i}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-count">Number of Cards to Generate</Label>
                  <Input id="card-count" type="number" defaultValue="10" min="1" max="50" />
                  <p className="text-sm text-muted-foreground">Recommended: 5-20 cards per generation</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="custom-prompt">Custom AI Instructions (Optional)</Label>
                  <Textarea
                    id="custom-prompt"
                    placeholder="Add any specific instructions for the AI flashcard generator..."
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Generate Flashcards</Button>
              <p className="text-xs text-muted-foreground text-center">
                The AI will process your request and generate flashcards based on the specified settings. This may take
                a few minutes depending on the complexity.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
