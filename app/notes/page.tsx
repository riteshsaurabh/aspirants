"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Search, FolderOpen, Clock, StarIcon, FileEdit, BookOpen, Archive, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function NotesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreateNoteOpen, setIsCreateNoteOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Sample notes data
  const notes = [
    {
      id: "note1",
      title: "Indian Constitution - Key Features",
      preview: "The Indian Constitution is one of the longest written constitutions with originally 395 articles...",
      tags: ["Polity", "GS2", "Constitution"],
      lastEdited: "2 hours ago",
      isPinned: true,
    },
    {
      id: "note2",
      title: "Environmental Impact Assessment",
      preview:
        "EIA is a process of evaluating the likely environmental impacts of a proposed project or development...",
      tags: ["Environment", "GS3", "Current Affairs"],
      lastEdited: "Yesterday",
      isPinned: false,
    },
    {
      id: "note3",
      title: "Economic Survey Key Points 2023",
      preview: "The Economic Survey 2023 highlights several important aspects of the Indian economy...",
      tags: ["Economy", "GS3", "Current Affairs"],
      lastEdited: "3 days ago",
      isPinned: false,
    },
    {
      id: "note4",
      title: "International Organizations and India",
      preview: "India's role in various international organizations and forums has evolved significantly...",
      tags: ["International Relations", "GS2"],
      lastEdited: "1 week ago",
      isPinned: false,
    },
  ]

  // Sample folders
  const folders = [
    { id: "f1", name: "GS Paper 1", count: 24 },
    { id: "f2", name: "GS Paper 2", count: 36 },
    { id: "f3", name: "GS Paper 3", count: 42 },
    { id: "f4", name: "GS Paper 4", count: 18 },
    { id: "f5", name: "Current Affairs", count: 56 },
  ]

  // Sample tags
  const availableTags = [
    "Polity",
    "Economy",
    "Environment",
    "Geography",
    "History",
    "Science",
    "International Relations",
    "Current Affairs",
    "GS1",
    "GS2",
    "GS3",
    "GS4",
    "Constitution",
    "Important",
  ]

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to create a new note would go here
    setIsCreateNoteOpen(false)
    // Show success message or redirect
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes Manager</h1>
          <p className="text-muted-foreground">Create, organize, and revise your study notes</p>
        </div>
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search notes..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Dialog open={isCreateNoteOpen} onOpenChange={setIsCreateNoteOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Note
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Create New Note</DialogTitle>
                <DialogDescription>
                  Create a new study note. Add tags and select a folder to organize your content.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateNote}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Note title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Write your note content here..." className="min-h-[200px]" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="folder">Folder</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a folder" />
                      </SelectTrigger>
                      <SelectContent>
                        {folders.map((folder) => (
                          <SelectItem key={folder.id} value={folder.id}>
                            {folder.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      {availableTags.map((tag) => (
                        <div key={tag} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedTags([...selectedTags, tag])
                              } else {
                                setSelectedTags(selectedTags.filter((t) => t !== tag))
                              }
                            }}
                          />
                          <label
                            htmlFor={`tag-${tag}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Note</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-64 space-y-6">
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg">Folders</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="space-y-2">
                {folders.map((folder) => (
                  <Button key={folder.id} variant="ghost" className="w-full justify-start font-normal">
                    <FolderOpen className="mr-2 h-4 w-4" />
                    {folder.name}
                    <Badge variant="outline" className="ml-auto">
                      {folder.count}
                    </Badge>
                  </Button>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Folder
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer">
                    {tag}
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="mt-2">
                  <PlusCircle className="mr-2 h-3 w-3" />
                  New Tag
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Notes</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="pinned">Pinned</TabsTrigger>
              <TabsTrigger value="flashcards">With Flashcards</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredNotes.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No notes found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or create a new note</p>
                  <Button className="mt-4" onClick={() => setIsCreateNoteOpen(true)}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Note
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredNotes.map((note) => (
                    <Card key={note.id} className={note.isPinned ? "border-primary/20" : ""}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                          {note.isPinned && <StarIcon className="h-4 w-4 text-primary" />}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground line-clamp-3">{note.preview}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-2 flex justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {note.lastEdited}
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" title="Edit Note">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Create Flashcards">
                            <BookOpen className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Move to Archive">
                            <Archive className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes
                  .filter((note) => note.lastEdited.includes("hour") || note.lastEdited.includes("Yesterday"))
                  .map((note) => (
                    <Card key={note.id} className={note.isPinned ? "border-primary/20" : ""}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                          {note.isPinned && <StarIcon className="h-4 w-4 text-primary" />}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground line-clamp-3">{note.preview}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-2 flex justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {note.lastEdited}
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <BookOpen className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="pinned" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes
                  .filter((note) => note.isPinned)
                  .map((note) => (
                    <Card key={note.id} className="border-primary/20">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                          <StarIcon className="h-4 w-4 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground line-clamp-3">{note.preview}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-2 flex justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {note.lastEdited}
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <BookOpen className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="flashcards" className="mt-6">
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No flashcard notes yet</h3>
                <p className="text-muted-foreground mt-2">Notes with flashcards will appear here</p>
                <Button className="mt-4" onClick={() => setIsCreateNoteOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Note with Flashcards
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
