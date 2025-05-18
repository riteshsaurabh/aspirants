import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Plus, Search, Tag, Trash2, Edit, Bookmark } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function TagsManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tags & Categories Management</h1>
          <p className="text-muted-foreground">Manage tags, categories, and taxonomies for UPSC content.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Tag
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tags and categories..."
            className="w-full bg-background pl-8 shadow-none"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="tags">Tags</SelectItem>
            <SelectItem value="categories">Categories</SelectItem>
            <SelectItem value="subjects">Subjects</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="tags" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tags">Tags</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Operations</TabsTrigger>
        </TabsList>
        <TabsContent value="tags" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Tags Management</CardTitle>
              <CardDescription>Manage tags used across the platform</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Tag Name</TableHead>
                    <TableHead>Associated With</TableHead>
                    <TableHead>Usage Count</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Climate Change",
                      associatedWith: ["News", "Notes", "Flashcards"],
                      count: 256,
                      created: "Jan 15, 2023",
                      active: true,
                    },
                    {
                      name: "Constitutional Amendments",
                      associatedWith: ["Notes", "PYQs"],
                      count: 189,
                      created: "Feb 10, 2023",
                      active: true,
                    },
                    {
                      name: "Economic Reforms",
                      associatedWith: ["News", "Flashcards", "PYQs"],
                      count: 215,
                      created: "Mar 5, 2023",
                      active: true,
                    },
                    {
                      name: "Foreign Policy",
                      associatedWith: ["News", "Notes"],
                      count: 178,
                      created: "Apr 20, 2023",
                      active: false,
                    },
                    {
                      name: "Sustainable Development",
                      associatedWith: ["News", "Notes", "Flashcards", "PYQs"],
                      count: 302,
                      created: "May 8, 2023",
                      active: true,
                    },
                  ].map((tag, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{tag.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Slug: {tag.name.toLowerCase().replace(/ /g, "-")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {tag.associatedWith.map((type, j) => (
                            <Badge key={j} variant="outline">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{tag.count} items</TableCell>
                      <TableCell>{tag.created}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={tag.active} />
                          <Label>{tag.active ? "Active" : "Inactive"}</Label>
                        </div>
                      </TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Merge
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-4">
              <div className="text-sm text-muted-foreground">Showing 5 of 234 tags</div>
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
        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Polity",
                description: "Constitutional and political system of India",
                count: 567,
                subcategories: ["Constitution", "Parliament", "Judiciary", "Executive", "Local Government"],
                color: "bg-blue-500",
              },
              {
                name: "Economy",
                description: "Indian economy, policies, and global economics",
                count: 489,
                subcategories: ["Fiscal Policy", "Banking", "International Trade", "Agriculture", "Industry"],
                color: "bg-green-500",
              },
              {
                name: "Geography",
                description: "Physical, human, and economic geography",
                count: 412,
                subcategories: [
                  "Physical Geography",
                  "Indian Geography",
                  "World Geography",
                  "Environmental Geography",
                  "Economic Geography",
                ],
                color: "bg-purple-500",
              },
              {
                name: "History",
                description: "Ancient, medieval, modern, and world history",
                count: 534,
                subcategories: ["Ancient India", "Medieval India", "Modern India", "World History", "Art & Culture"],
                color: "bg-orange-500",
              },
              {
                name: "Science & Technology",
                description: "Scientific developments and technological advancements",
                count: 328,
                subcategories: ["Physics", "Chemistry", "Biology", "IT & Communications", "Space Technology"],
                color: "bg-red-500",
              },
              {
                name: "Environment",
                description: "Environmental issues and conservation",
                count: 387,
                subcategories: ["Biodiversity", "Climate Change", "Pollution", "Conservation", "Environmental Laws"],
                color: "bg-teal-500",
              },
            ].map((category, i) => (
              <Card key={i} className="overflow-hidden">
                <div className={`h-2 w-full ${category.color}`}></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{category.name}</CardTitle>
                    <Badge>{category.count} items</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-medium mb-2">Subcategories:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.subcategories.map((sub, j) => (
                      <Badge key={j} variant="secondary">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t">
                  <Button variant="ghost" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Subcategory
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Category
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="taxonomy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Taxonomy Management</CardTitle>
              <CardDescription>Manage relationships between categories and tags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">UPSC Content Hierarchy</h3>
                  <div className="bg-muted/50 p-4 rounded-md">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Bookmark className="h-5 w-5 text-primary" />
                        <span className="font-medium">Subject</span>
                        <span className="text-sm text-muted-foreground">(Top level category)</span>
                      </div>
                      <div className="border-l-2 border-dashed border-muted-foreground/50 ml-2.5 pl-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag className="h-4 w-4 text-primary" />
                            <span className="font-medium">Category</span>
                            <span className="text-sm text-muted-foreground">(Subject subdivision)</span>
                          </div>
                          <div className="border-l-2 border-dashed border-muted-foreground/50 ml-2 pl-6">
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Tag className="h-4 w-4 text-primary/80" />
                                <span className="font-medium">Subcategory</span>
                                <span className="text-sm text-muted-foreground">(Topic area)</span>
                              </div>
                              <div className="border-l-2 border-dashed border-muted-foreground/50 ml-2 pl-6">
                                <div className="flex items-center gap-2">
                                  <Tag className="h-3 w-3 text-primary/60" />
                                  <span className="font-medium">Tags</span>
                                  <span className="text-sm text-muted-foreground">(Specific concepts)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Create Relationship</CardTitle>
                      <CardDescription>Define relationships between taxonomy items</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="parent-type">Parent Type</Label>
                          <Select defaultValue="category">
                            <SelectTrigger id="parent-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="subject">Subject</SelectItem>
                              <SelectItem value="category">Category</SelectItem>
                              <SelectItem value="subcategory">Subcategory</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="parent-item">Parent Item</Label>
                          <Select defaultValue="economy">
                            <SelectTrigger id="parent-item">
                              <SelectValue placeholder="Select item" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="economy">Economy</SelectItem>
                              <SelectItem value="polity">Polity</SelectItem>
                              <SelectItem value="geography">Geography</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="child-type">Child Type</Label>
                          <Select defaultValue="subcategory">
                            <SelectTrigger id="child-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="category">Category</SelectItem>
                              <SelectItem value="subcategory">Subcategory</SelectItem>
                              <SelectItem value="tag">Tag</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="child-item">Child Item</Label>
                          <Select defaultValue="banking">
                            <SelectTrigger id="child-item">
                              <SelectValue placeholder="Select item" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="banking">Banking</SelectItem>
                              <SelectItem value="fiscal-policy">Fiscal Policy</SelectItem>
                              <SelectItem value="international-trade">International Trade</SelectItem>
                              <SelectItem value="agriculture">Agriculture</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full">Create Relationship</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Recent Relationships</CardTitle>
                      <CardDescription>Recently created taxonomy relationships</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { parent: "Polity", parentType: "Subject", child: "Constitution", childType: "Category" },
                          {
                            parent: "Constitution",
                            parentType: "Category",
                            child: "Fundamental Rights",
                            childType: "Subcategory",
                          },
                          { parent: "Economy", parentType: "Subject", child: "Banking", childType: "Category" },
                          { parent: "Environment", parentType: "Subject", child: "Climate Change", childType: "Tag" },
                          {
                            parent: "Science & Technology",
                            parentType: "Subject",
                            child: "Space Technology",
                            childType: "Category",
                          },
                        ].map((rel, i) => (
                          <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{rel.parentType}</Badge>
                              <span className="font-medium">{rel.parent}</span>
                              <span className="text-muted-foreground">→</span>
                              <Badge variant="outline">{rel.childType}</Badge>
                              <span className="font-medium">{rel.child}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Complete Taxonomy Map</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="bulk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Tag Operations</CardTitle>
              <CardDescription>Perform operations on multiple tags at once</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="operation">Operation Type</Label>
                  <Select defaultValue="merge">
                    <SelectTrigger id="operation">
                      <SelectValue placeholder="Select operation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="merge">Merge Tags</SelectItem>
                      <SelectItem value="categorize">Assign to Category</SelectItem>
                      <SelectItem value="status">Change Status</SelectItem>
                      <SelectItem value="delete">Delete Tags</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tag-selection">Select Tags</Label>
                  <Textarea
                    id="tag-selection"
                    placeholder="Enter tags separated by commas, or paste from CSV..."
                    rows={3}
                    defaultValue="Climate Change, Global Warming, Climate Crisis, Climate Action"
                  />
                  <p className="text-xs text-muted-foreground">
                    You can also upload a CSV file with tags and their details
                    <Button variant="link" size="sm" className="h-auto p-0 ml-1">
                      Upload CSV
                    </Button>
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Merge Options</h3>
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      <Label htmlFor="target-tag">Target Tag (all selected tags will merge into this)</Label>
                      <Select defaultValue="climate-change">
                        <SelectTrigger id="target-tag">
                          <SelectValue placeholder="Select target tag" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="climate-change">Climate Change</SelectItem>
                          <SelectItem value="global-warming">Global Warming</SelectItem>
                          <SelectItem value="climate-crisis">Climate Crisis</SelectItem>
                          <SelectItem value="climate-action">Climate Action</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-start space-x-2 mt-2">
                      <Checkbox id="redirect" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="redirect">Create redirects for merged tags</Label>
                        <p className="text-sm text-muted-foreground">
                          This will redirect URLs of merged tags to the target tag
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="update-content" defaultChecked />
                      <div className="grid gap-1.5">
                        <Label htmlFor="update-content">Update all content with new tag</Label>
                        <p className="text-sm text-muted-foreground">
                          This will update all items tagged with the merged tags to use the target tag
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300 p-3 rounded-md w-full flex items-start gap-2">
                <div className="mt-0.5">⚠️</div>
                <div>
                  <p className="text-sm font-medium">Warning: Bulk operations cannot be undone</p>
                  <p className="text-xs">Please review carefully before proceeding</p>
                </div>
              </div>
              <Button className="w-full">Preview Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
