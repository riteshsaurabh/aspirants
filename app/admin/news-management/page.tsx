import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, Filter, Globe, Newspaper, Plus, Search, Upload } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function NewsManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">News Management</h1>
          <p className="text-muted-foreground">Manage news articles and extraction processes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Import News
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add News Manually
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news articles..."
            className="w-full bg-background pl-8 shadow-none"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="pending">Pending Extraction</TabsTrigger>
          <TabsTrigger value="processed">Processed</TabsTrigger>
          <TabsTrigger value="sources">News Sources</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>News Articles</CardTitle>
              <CardDescription>All news articles in the system (50 of 1,234)</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Government Announces New Policy for Civil Services</div>
                        <div className="text-sm text-muted-foreground">Changes in the exam pattern and syllabus...</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex items-center gap-1 w-fit">
                          <Globe className="h-3 w-3" />
                          The Hindu
                        </Badge>
                      </TableCell>
                      <TableCell>May 1{i}, 2023</TableCell>
                      <TableCell>
                        {i % 3 === 0 ? (
                          <Badge className="bg-yellow-500">Pending</Badge>
                        ) : i % 3 === 1 ? (
                          <Badge className="bg-green-500">Processed</Badge>
                        ) : (
                          <Badge className="bg-blue-500">Reviewing</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary">Polity</Badge>
                          <Badge variant="secondary">Governance</Badge>
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
              <div className="text-sm text-muted-foreground">Showing 10 of 1,234 news articles</div>
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
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Extraction</CardTitle>
              <CardDescription>News articles waiting to be processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted flex items-center justify-center rounded w-10 h-10">
                      <Newspaper className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">New Environmental Policy Announced</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Government introduces new measures to combat climate change...
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          The Indian Express
                        </Badge>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          May {10 + i}, 2023
                        </span>
                      </div>
                    </div>
                    <Button>Process Now</Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Process All Pending Articles</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="processed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Processed Articles</CardTitle>
              <CardDescription>News articles that have been processed by the AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-background">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">India Announces New Foreign Policy Framework</h3>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Globe className="h-3 w-3" />
                              The Economic Times
                            </Badge>
                            <span className="text-muted-foreground flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              May {8 + i}, 2023
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Original
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit Tags
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <h4 className="font-medium text-sm mb-2">Extracted Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">International Relations</Badge>
                        <Badge variant="secondary">Foreign Policy</Badge>
                        <Badge variant="secondary">Diplomacy</Badge>
                        <Badge variant="secondary">Global Politics</Badge>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <h4 className="font-medium text-sm mb-2">AI Summary</h4>
                      <p className="text-muted-foreground text-sm">
                        India has announced a new comprehensive foreign policy framework that focuses on strengthening
                        ties with neighboring countries while expanding strategic partnerships globally. The framework
                        emphasizes economic diplomacy, security cooperation, and cultural exchanges...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>News Sources</CardTitle>
              <CardDescription>Manage sources for news extraction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "The Hindu", active: true, articleCount: 356, priority: "High" },
                  { name: "Indian Express", active: true, articleCount: 283, priority: "Medium" },
                  { name: "Times of India", active: true, articleCount: 412, priority: "Medium" },
                  { name: "Hindustan Times", active: false, articleCount: 198, priority: "Low" },
                  { name: "Economic Times", active: true, articleCount: 245, priority: "High" },
                ].map((source, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted flex items-center justify-center rounded w-10 h-10">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{source.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {source.articleCount} articles | Priority: {source.priority}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Checkbox id={`active-${i}`} checked={source.active} />
                        <Label htmlFor={`active-${i}`}>Active</Label>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add New Source
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
