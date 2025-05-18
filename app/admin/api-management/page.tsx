"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash2 } from "lucide-react"

// Sample data
const initialApis = [
  {
    id: 1,
    name: "News API",
    endpoint: "https://api.example.com/news",
    status: "active",
    authType: "apiKey",
    tags: ["News", "Current Affairs"],
  },
  {
    id: 2,
    name: "PYQ Database",
    endpoint: "https://api.example.com/pyq",
    status: "active",
    authType: "oauth",
    tags: ["Questions", "Exams"],
  },
  {
    id: 3,
    name: "Weather Data",
    endpoint: "https://api.example.com/weather",
    status: "paused",
    authType: "apiKey",
    tags: ["Geography", "Environment"],
  },
  {
    id: 4,
    name: "Economic Indicators",
    endpoint: "https://api.example.com/economy",
    status: "active",
    authType: "oauth",
    tags: ["Economy", "Finance"],
  },
  {
    id: 5,
    name: "Historical Archives",
    endpoint: "https://api.example.com/history",
    status: "paused",
    authType: "apiKey",
    tags: ["History", "Culture"],
  },
]

export default function ApiManagementPage() {
  const [apis, setApis] = useState(initialApis)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentApi, setCurrentApi] = useState<any>(null)
  const [newApi, setNewApi] = useState({
    name: "",
    endpoint: "",
    authType: "apiKey",
    tags: "",
  })

  const filteredApis = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.endpoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleAddApi = () => {
    const newId = Math.max(...apis.map((api) => api.id)) + 1
    const apiToAdd = {
      id: newId,
      name: newApi.name,
      endpoint: newApi.endpoint,
      status: "active",
      authType: newApi.authType,
      tags: newApi.tags.split(",").map((tag) => tag.trim()),
    }
    setApis([...apis, apiToAdd])
    setNewApi({ name: "", endpoint: "", authType: "apiKey", tags: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditApi = () => {
    const updatedApis = apis.map((api) =>
      api.id === currentApi.id
        ? {
            ...api,
            name: currentApi.name,
            endpoint: currentApi.endpoint,
            authType: currentApi.authType,
            tags:
              typeof currentApi.tags === "string"
                ? currentApi.tags.split(",").map((tag: string) => tag.trim())
                : currentApi.tags,
          }
        : api,
    )
    setApis(updatedApis)
    setIsEditDialogOpen(false)
  }

  const handleDeleteApi = (id: number) => {
    setApis(apis.filter((api) => api.id !== id))
  }

  const handleToggleStatus = (id: number) => {
    setApis(
      apis.map((api) => (api.id === id ? { ...api, status: api.status === "active" ? "paused" : "active" } : api)),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API Management</h1>
          <p className="text-muted-foreground">Manage external API integrations for data sources.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New API
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New API</DialogTitle>
              <DialogDescription>Add a new API integration to the platform.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">API Name</Label>
                <Input
                  id="name"
                  value={newApi.name}
                  onChange={(e) => setNewApi({ ...newApi, name: e.target.value })}
                  placeholder="e.g., News API"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="endpoint">Base URL</Label>
                <Input
                  id="endpoint"
                  value={newApi.endpoint}
                  onChange={(e) => setNewApi({ ...newApi, endpoint: e.target.value })}
                  placeholder="https://api.example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="authType">Authentication Type</Label>
                <Select value={newApi.authType} onValueChange={(value) => setNewApi({ ...newApi, authType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select authentication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apiKey">API Key</SelectItem>
                    <SelectItem value="oauth">OAuth</SelectItem>
                    <SelectItem value="basic">Basic Auth</SelectItem>
                    <SelectItem value="none">No Authentication</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={newApi.tags}
                  onChange={(e) => setNewApi({ ...newApi, tags: e.target.value })}
                  placeholder="e.g., News, Current Affairs"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddApi}>Add API</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search APIs..."
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

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Endpoint</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Auth Type</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApis.map((api) => (
              <TableRow key={api.id}>
                <TableCell className="font-medium">{api.name}</TableCell>
                <TableCell>{api.endpoint}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Switch checked={api.status === "active"} onCheckedChange={() => handleToggleStatus(api.id)} />
                    <Badge variant={api.status === "active" ? "default" : "secondary"}>
                      {api.status === "active" ? "Active" : "Paused"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{api.authType}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {api.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setCurrentApi({
                          ...api,
                          tags: Array.isArray(api.tags) ? api.tags.join(", ") : api.tags,
                        })
                        setIsEditDialogOpen(true)
                      }}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteApi(api.id)}>
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit API</DialogTitle>
            <DialogDescription>Modify the API integration details.</DialogDescription>
          </DialogHeader>
          {currentApi && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">API Name</Label>
                <Input
                  id="edit-name"
                  value={currentApi.name}
                  onChange={(e) => setCurrentApi({ ...currentApi, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-endpoint">Base URL</Label>
                <Input
                  id="edit-endpoint"
                  value={currentApi.endpoint}
                  onChange={(e) => setCurrentApi({ ...currentApi, endpoint: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-authType">Authentication Type</Label>
                <Select
                  value={currentApi.authType}
                  onValueChange={(value) => setCurrentApi({ ...currentApi, authType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select authentication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apiKey">API Key</SelectItem>
                    <SelectItem value="oauth">OAuth</SelectItem>
                    <SelectItem value="basic">Basic Auth</SelectItem>
                    <SelectItem value="none">No Authentication</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-tags">Tags (comma separated)</Label>
                <Input
                  id="edit-tags"
                  value={currentApi.tags}
                  onChange={(e) => setCurrentApi({ ...currentApi, tags: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditApi}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
