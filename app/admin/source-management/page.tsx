"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Upload, Rss, Database, Trash2, Eye, Download } from "lucide-react"

// Sample data
const initialSources = [
  {
    id: 1,
    name: "The Hindu RSS Feed",
    type: "rss",
    url: "https://www.thehindu.com/news/national/feeder/default.rss",
    status: "active",
    lastSync: "2023-05-10T08:30:00Z",
    category: "News",
  },
  {
    id: 2,
    name: "Indian Express API",
    type: "api",
    url: "https://api.indianexpress.com/news",
    status: "active",
    lastSync: "2023-05-10T09:15:00Z",
    category: "News",
  },
  {
    id: 3,
    name: "PIB Press Releases",
    type: "rss",
    url: "https://pib.gov.in/rss/rssfeeds.aspx",
    status: "paused",
    lastSync: "2023-05-09T14:20:00Z",
    category: "Government",
  },
  {
    id: 4,
    name: "Economic Survey Data",
    type: "api",
    url: "https://api.example.com/economic-survey",
    status: "active",
    lastSync: "2023-05-08T11:45:00Z",
    category: "Economy",
  },
  {
    id: 5,
    name: "UPSC Previous Year Questions",
    type: "file",
    url: "upsc_pyq_2022.csv",
    status: "active",
    lastSync: "2023-05-01T10:00:00Z",
    category: "Exams",
  },
]

const initialFiles = [
  {
    id: 1,
    name: "UPSC Syllabus 2023.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadDate: "2023-05-01T10:00:00Z",
    tags: ["Syllabus", "UPSC", "2023"],
    status: "active",
  },
  {
    id: 2,
    name: "Indian Polity Notes.docx",
    type: "docx",
    size: "1.8 MB",
    uploadDate: "2023-05-02T14:30:00Z",
    tags: ["Notes", "Polity", "Constitution"],
    status: "active",
  },
  {
    id: 3,
    name: "Economic Survey Data.csv",
    type: "csv",
    size: "4.2 MB",
    uploadDate: "2023-05-03T09:15:00Z",
    tags: ["Economy", "Data", "Survey"],
    status: "active",
  },
  {
    id: 4,
    name: "Geography Maps Collection.zip",
    type: "zip",
    size: "15.7 MB",
    uploadDate: "2023-05-04T11:45:00Z",
    tags: ["Geography", "Maps", "Visual"],
    status: "paused",
  },
  {
    id: 5,
    name: "Current Affairs May 2023.xlsx",
    type: "xlsx",
    size: "3.1 MB",
    uploadDate: "2023-05-05T16:20:00Z",
    tags: ["Current Affairs", "Monthly", "2023"],
    status: "active",
  },
]

export default function SourceManagementPage() {
  const [sources, setSources] = useState(initialSources)
  const [files, setFiles] = useState(initialFiles)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [uploadFormData, setUploadFormData] = useState({
    subject: "",
    section: "",
    tags: "",
  })

  const filteredSources = sources.filter(
    (source) =>
      source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredFiles = files.filter(
    (file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleToggleSourceStatus = (id: number) => {
    setSources(
      sources.map((source) =>
        source.id === id ? { ...source, status: source.status === "active" ? "paused" : "active" } : source,
      ),
    )
  }

  const handleToggleFileStatus = (id: number) => {
    setFiles(
      files.map((file) =>
        file.id === id ? { ...file, status: file.status === "active" ? "paused" : "active" } : file,
      ),
    )
  }

  const handleDeleteSource = (id: number) => {
    setSources(sources.filter((source) => source.id !== id))
  }

  const handleDeleteFile = (id: number) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // In a real implementation, we would process the dropped files here
    alert("File upload functionality would be implemented here")
  }

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, we would process the form data and file upload here
    alert("File upload with metadata would be processed here")
    setUploadFormData({
      subject: "",
      section: "",
      tags: "",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Source & File Management</h1>
        <p className="text-muted-foreground">Manage data sources and uploaded files for the platform.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search sources and files..."
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
      </div>

      <Tabs defaultValue="sources" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sources">Data Sources</TabsTrigger>
          <TabsTrigger value="files">Uploaded Files</TabsTrigger>
          <TabsTrigger value="upload">Upload New Files</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>URL/Path</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSources.map((source) => (
                  <TableRow key={source.id}>
                    <TableCell className="font-medium">{source.name}</TableCell>
                    <TableCell>
                      {source.type === "api" && <Database className="h-4 w-4 inline mr-1" />}
                      {source.type === "rss" && <Rss className="h-4 w-4 inline mr-1" />}
                      {source.type === "file" && <FileText className="h-4 w-4 inline mr-1" />}
                      {source.type}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{source.url}</TableCell>
                    <TableCell>{source.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={source.status === "active"}
                          onCheckedChange={() => handleToggleSourceStatus(source.id)}
                        />
                        <Badge variant={source.status === "active" ? "default" : "secondary"}>
                          {source.status === "active" ? "Active" : "Paused"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{new Date(source.lastSync).toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteSource(source.id)}>
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

        <TabsContent value="files" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFiles.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="font-medium">{file.name}</TableCell>
                    <TableCell>{file.type.toUpperCase()}</TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {file.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={file.status === "active"}
                          onCheckedChange={() => handleToggleFileStatus(file.id)}
                        />
                        <Badge variant={file.status === "active" ? "default" : "secondary"}>
                          {file.status === "active" ? "Active" : "Paused"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{new Date(file.uploadDate).toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteFile(file.id)}>
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

        <TabsContent value="upload" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
                <CardDescription>
                  Drag and drop files or click to browse. Supported formats: PDF, DOCX, CSV, XLSX, ZIP.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${
                    isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/25"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Drag files here or click to browse</p>
                      <p className="text-xs text-muted-foreground mt-1">Upload files up to 50MB each</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>File Metadata</CardTitle>
                <CardDescription>Add metadata to your files for better organization and searchability.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFileUpload} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={uploadFormData.subject}
                      onValueChange={(value) => setUploadFormData({ ...uploadFormData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="geography">Geography</SelectItem>
                        <SelectItem value="polity">Polity</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="science">Science & Technology</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="section">Section</Label>
                    <Select
                      value={uploadFormData.section}
                      onValueChange={(value) => setUploadFormData({ ...uploadFormData, section: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notes">Notes</SelectItem>
                        <SelectItem value="questions">Questions</SelectItem>
                        <SelectItem value="syllabus">Syllabus</SelectItem>
                        <SelectItem value="current_affairs">Current Affairs</SelectItem>
                        <SelectItem value="reference">Reference Material</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={uploadFormData.tags}
                      onChange={(e) => setUploadFormData({ ...uploadFormData, tags: e.target.value })}
                      placeholder="e.g., UPSC, Civil Services, 2023"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Upload Files
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                <p>
                  You can also bulk import files using CSV or JSON format with metadata.
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Download template
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
