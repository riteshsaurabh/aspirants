import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Filter, Plus, Search, Upload } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function NotesManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes Management</h1>
          <p className="text-muted-foreground">Manage study notes and revision materials for UPSC preparation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Notes
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Note
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search notes..." className="w-full bg-background pl-8 shadow-none" />
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

      <Tabs defaultValue="all-notes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all-notes">All Notes</TabsTrigger>
          <TabsTrigger value="user-notes">User Notes</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="shared">Shared Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="all-notes" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Notes Collection</CardTitle>
              <CardDescription>Manage all study notes in the system</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      title: "Indian Constitution: Fundamental Rights",
                      category: "Polity",
                      created: "May 15, 2023",
                      author: "Admin",
                      isPublic: true,
                    },
                    {
                      title: "Economic Reforms Since 1991",
                      category: "Economy",
                      created: "May 12, 2023",
                      author: "Admin",
                      isPublic: true,
                    },
                    {
                      title: "Climate Change and Its Impact",
                      category: "Geography",
                      created: "May 10, 2023",
                      author: "RajeshK",
                      isPublic: false,
                    },
                    {
                      title: "Modern Indian History Timeline",
                      category: "History",
                      created: "May 5, 2023",
                      author: "PriyaS",
                      isPublic: true,
                    },
                    {
                      title: "Important Science & Tech Developments",
                      category: "Science & Tech",
                      created: "May 3, 2023",
                      author: "Admin",
                      isPublic: false,
                    },
                  ].map((note, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{note.title}</div>
                        <div className="text-sm text-muted-foreground">
                          Last updated: {new Date().toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{note.category}</Badge>
                      </TableCell>
                      <TableCell>{note.created}</TableCell>
                      <TableCell>{note.author}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={note.isPublic} />
                          <Label>{note.isPublic ? "Public" : "Private"}</Label>
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
              <div className="text-sm text-muted-foreground">Showing 5 of 124 notes</div>
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
        <TabsContent value="user-notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Notes</CardTitle>
              <CardDescription>Notes created by users of the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-background">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Geography: Indian Rivers and Their Economic Importance</h3>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <span className="text-muted-foreground">Created by: Amit_{i}</span>
                            <span className="text-muted-foreground flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              May {10 + i}, 2023
                            </span>
                          </div>
                        </div>
                        <Badge variant={i % 2 === 0 ? "outline" : "secondary"}>
                          {i % 2 === 0 ? "Private" : "Shared"}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 border-t bg-muted/30">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        This comprehensive note covers all major rivers of India, their tributaries, economic
                        significance, and environmental challenges. It includes maps, diagrams, and comparative analyses
                        of river basins...
                      </p>
                    </div>
                    <div className="p-3 border-t flex justify-between">
                      <div className="flex gap-1">
                        <Badge variant="secondary">Geography</Badge>
                        <Badge variant="secondary">Rivers</Badge>
                        <Badge variant="secondary">Economy</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Review
                        </Button>
                        <Button variant="ghost" size="sm">
                          Make Public
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View All User Notes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Note Templates</CardTitle>
              <CardDescription>Templates for various types of study notes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Topic Overview",
                    description: "Template for comprehensive overview of a UPSC topic",
                    sections: [
                      "Definition",
                      "Key Concepts",
                      "Historical Background",
                      "Recent Developments",
                      "UPSC Relevance",
                    ],
                  },
                  {
                    name: "Concept Analysis",
                    description: "Template for in-depth analysis of important concepts",
                    sections: [
                      "Concept Introduction",
                      "Theoretical Framework",
                      "Practical Applications",
                      "Case Studies",
                      "Critical Analysis",
                    ],
                  },
                  {
                    name: "Current Affairs Note",
                    description: "Template for current affairs and their UPSC significance",
                    sections: [
                      "Event Details",
                      "Background Context",
                      "Stakeholders",
                      "Impact Analysis",
                      "UPSC Perspective",
                    ],
                  },
                  {
                    name: "Revision Note",
                    description: "Concise template for quick revision before exams",
                    sections: [
                      "Key Points",
                      "Important Facts & Figures",
                      "Previous Year Questions",
                      "Quick Diagrams",
                      "Memory Aids",
                    ],
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
                      <h4 className="text-sm font-medium mb-2">Template Sections</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {template.sections.map((section, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-sm">{section}</span>
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
        <TabsContent value="shared" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shared Notes</CardTitle>
              <CardDescription>Notes shared among users for collaborative learning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search shared notes..."
                      className="w-full bg-background pl-8 shadow-none"
                    />
                  </div>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rated">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-background">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Comprehensive Analysis of Article 370</h3>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <span className="text-muted-foreground">Shared by: Expert_{i}</span>
                            <span className="text-muted-foreground flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              May {5 + i}, 2023
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{42 + i} users</Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t bg-muted/30">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        This collaborative note provides a detailed analysis of Article 370, its historical context,
                        recent developments, and constitutional implications. It includes expert annotations and
                        references...
                      </p>
                    </div>
                    <div className="p-3 border-t flex justify-between">
                      <div className="flex gap-1">
                        <Badge variant="secondary">Polity</Badge>
                        <Badge variant="secondary">Constitution</Badge>
                        <Badge variant="secondary">Current Affairs</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Feature
                        </Button>
                        <Button variant="ghost" size="sm">
                          Moderate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Manage Sharing Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
