import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Share2, ThumbsUp, ThumbsDown } from "lucide-react"

interface AIAssistantResponseProps {
  question: string
  answer: string
  category: string
  timestamp: Date
}

export function AIAssistantResponse({ question, answer, category, timestamp }: AIAssistantResponseProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{question}</CardTitle>
            <CardDescription>
              {timestamp.toLocaleDateString()} at{" "}
              {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </CardDescription>
          </div>
          <Badge>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="whitespace-pre-line">{answer}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Helpful
          </Button>
          <Button variant="outline" size="sm">
            <ThumbsDown className="h-4 w-4 mr-2" />
            Not Helpful
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
