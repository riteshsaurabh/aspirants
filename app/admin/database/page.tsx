"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Plus, Trash2, Edit, Eye, RefreshCw, Download, Upload, CheckCircle, AlertCircle } from "lucide-react"

// Sample data
const initialCollections = [
  {
    id: 1,
    name: "users",
    records: 12345,
    size: "45.2 MB",
    lastUpdated: "2023-05-10T08:30:00Z",
  },
  {
    id: 2,
    name: "news_articles",
    records: 87654,
    size: "156.7 MB",
    lastUpdated: "2023-05-10T09:15:00Z",
  },
  {
    id: 3,
    name: "flashcards",
    records: 34567,
    size: "28.9 MB",
    lastUpdated: "2023-05-09T14:20:00Z",
  },
  {
    id: 4,
    name: "pyq_questions",
    records: 15678,
    size: "12.4 MB",
    lastUpdated: "2023-05-08T11:45:00Z",
  },
  {
    id: 5,
    name: "analytics_data",
    records: 98765,
    size: "234.5 MB",
    lastUpdated: "2023-05-01T10:00:00Z",
  },
]

const initialRecords = [
  {
    id: 1,
    title: "Recent Economic Reforms in India",
    category: "Economy",
    source: "The Hindu",
    date: "2023-05-10T08:30:00Z",
    tags: ["Economy", "Reforms", "India"],
  },
  {
    id: 2,
    title: "Climate Change Impact on Agriculture",
    category: "Environment",
    source: "Indian Express",
    date: "2023-05-09T09:15:00Z",
    tags: ["Climate", "Agriculture", "Environment"],
  },
  {
    id: 3,
    title: "Constitutional Amendments Overview",
    category: "Polity",
    source: "PIB",
    date: "2023-05-08T14:20:00Z",
    tags: ["Constitution", "Amendments", "Polity"],
  },
  {
    id: 4,
    title: "India's Foreign Policy Challenges",
    category: "International Relations",
    source: "The Hindu",
    date: "2023-05-07T11:45:00Z",
    tags: ["Foreign Policy", "Diplomacy", "International"],
  },
  {
    id: 5,
    title: "Modern Indian History Timeline",
    category: "History",
    source: "NCERT",
    date: "2023-05-06T10:00:00Z",
    tags: ["History", "Modern India", "Timeline"],
  },
]

export default function DatabasePage() {
  const [collections, setCollections] = useState(initialCollections)
  const [records, setRecords] = useState(initialRecords)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("news_articles")
  const [isAddRecordDialogOpen, setIsAddRecordDialogOpen] = useState(false)
  const [newRecord, setNewRecord] = useState({
    title: "",
    category: "",
    source: "",
    tags: "",
  })
  const [isHealthy, setIsHealthy] = useState(true)

  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredRecords = records.filter(
    (record) =>
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleAddRecord = () => {
    const newId = Math.max(...records.map((record) => record.id)) + 1
    const recordToAdd = {
      id: newId,
      title: newRecord.title,
      category: newRecord.category,
      source: newRecord.source,
      date: new Date().toISOString(),
      tags: newRecord.tags.split(",").map((tag) => tag.trim()),
    }
    setRecords([...records, recordToAdd])
    setNewRecord({ title: "", category: "", source: "", tags: "" })
    setIsAddRecordDialogOpen(false)
  }

  const handleDeleteRecord = (id: number) => {
    setRecords(records.filter((record) => record.id !== id))
  }

  const handleHealthCheck = () => {
    // Simulate a health check
    setIsHealthy(Math.random() > 0.2) // 80% chance of being healthy
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Database Configuration</h1>
        <p className="text-muted-foreground">Manage database collections and records.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connection Status</CardTitle>
            {isHealthy ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isHealthy ? "Connected" : "Error"}</div>
            <p className="text-xs text-muted-foreground">Last checked: {new Date().toLocaleTimeString()}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" onClick={handleHealthCheck}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Health Check
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{collections.length}</div>
            <p className="text-xs text-muted-foreground">Across all databases</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {collections.reduce((acc, collection) => acc + collection.records, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Across all collections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database Size</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">477.7 MB</div>
            <p className="text-xs text-muted-foreground">Total storage used</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search collections and records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Backup
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Restore
          </Button>
        </div>
      </div>

      <Tabs defaultValue="collections" className="space-y-4">
        <TabsList>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="records">Records</TabsTrigger>
        </TabsList>

        <TabsContent value="collections" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Records</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCollections.map((collection) => (
                  <TableRow key={collection.id}>
                    <TableCell className="font-medium">{collection.name}</TableCell>
                    <TableCell>{collection.records.toLocaleString()}</TableCell>
                    <TableCell>{collection.size}</TableCell>
                    <TableCell>{new Date(collection.lastUpdated).toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedCollection(collection.name)}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="records" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">Collection: {selectedCollection}</h3>
              <Badge variant="outline">{records.length} records</Badge>
            </div>
            <Dialog open={isAddRecordDialogOpen} onOpenChange={setIsAddRecordDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Record
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Record</DialogTitle>
                  <DialogDescription>Add a new record to the {selectedCollection} collection.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="title">Title</label>
                    <Input
                      id="title"
                      value={newRecord.title}
                      onChange={(e) => setNewRecord({ ...newRecord, title: e.target.value })}
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="category">Category</label>
                    <Input
                      id="category"
                      value={newRecord.category}
                      onChange={(e) => setNewRecord({ ...newRecord, category: e.target.value })}
                      placeholder="Enter category"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="source">Source</label>
                    <Input
                      id="source"
                      value={newRecord.source}
                      onChange={(e) => setNewRecord({ ...newRecord, source: e.target.value })}
                      placeholder="Enter source"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="tags">Tags (comma separated)</label>
                    <Input
                      id="tags"
                      value={newRecord.tags}
                      onChange={(e) => setNewRecord({ ...newRecord, tags: e.target.value })}
                      placeholder="e.g., Economy, Reforms, India"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddRecordDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddRecord}>Add Record</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.title}</TableCell>
                    <TableCell>{record.category}</TableCell>
                    <TableCell>{record.source}</TableCell>
                    <TableCell>{new Date(record.date).toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {record.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteRecord(record.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
