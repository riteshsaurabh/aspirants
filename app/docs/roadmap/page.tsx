import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Future Improvements - UPSC Aspirants AI",
  description: "Roadmap and future improvements for UPSC Aspirants AI platform",
}

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Future Improvements</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We are continuously working to enhance the UPSC Aspirants AI platform. This roadmap outlines our planned
        improvements and future features to make the platform smarter, stronger, and more functional.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        AI and Machine Learning Enhancements
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Personalized Learning Paths</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              AI-generated personalized learning paths based on user performance, strengths, and weaknesses. The system
              will adapt to each user's learning style and pace, suggesting optimal study materials and schedules.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Advanced Question Generation</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Enhanced AI algorithms to generate more accurate UPSC-style questions with varying difficulty levels.
              Questions will be tailored to specific exam patterns and updated based on the latest trends in UPSC exams.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Predictive Topic Analysis</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              AI-powered prediction of potential UPSC exam topics based on current affairs trends, historical patterns,
              and government priorities. This will help users focus on high-probability topics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">AI Study Assistant</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              An interactive AI assistant that can answer questions, explain concepts, and provide guidance in
              real-time. The assistant will use natural language processing to understand and respond to complex
              queries.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Content and Learning Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Interactive Mind Maps</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Visual mind maps for complex topics that allow users to explore connections between different concepts.
              These will be interactive, allowing users to expand, collapse, and navigate through related topics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Video Lectures Integration</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Integration with curated video lectures from top educators, with AI-powered timestamps and summaries.
              Videos will be categorized by topic and difficulty level for easy access.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Mock Interview Simulator</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              AI-powered mock interview simulator for UPSC personality tests, with feedback on answers, body language,
              and communication skills. The simulator will adapt questions based on the user's background and responses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Collaborative Study Groups</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Virtual study groups where users can collaborate, share notes, discuss topics, and quiz each other. Groups
              can be formed based on similar study patterns, goals, or geographic locations.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        User Experience Improvements
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Mobile Application</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Native mobile applications for iOS and Android with offline study capabilities. The app will sync with the
              web platform and provide push notifications for study reminders and important updates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Voice Commands</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Voice command functionality for hands-free navigation and content consumption. Users will be able to
              search for topics, create notes, and navigate through the platform using voice commands.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Dark Mode Optimization</CardTitle>
            <Badge variant="outline" className="ml-2">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Implemented
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Enhanced dark mode with customizable color schemes for reduced eye strain during night study sessions.
              Users can set automatic switching based on time of day or system preferences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Accessibility Enhancements</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Comprehensive accessibility improvements including screen reader support, keyboard navigation, and
              adjustable font sizes. These enhancements will make the platform usable for all aspirants.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Technical Enhancements
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Offline Mode</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Offline access to downloaded content for studying without an internet connection. The system will
              automatically sync changes when the connection is restored.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">API Ecosystem</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Public API for third-party developers to build complementary tools and integrations. This will create an
              ecosystem of UPSC preparation tools that work seamlessly with our platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Enhanced Data Security</CardTitle>
            <Badge variant="outline" className="ml-2">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Implemented
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Advanced encryption and security measures to protect user data and content. Regular security audits and
              compliance with data protection regulations will be maintained.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Performance Optimization</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Continuous performance improvements for faster page loads and smoother interactions. This includes code
              splitting, lazy loading, and optimized database queries.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Community and Social Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Discussion Forums</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Topic-based discussion forums for aspirants to share insights, ask questions, and help each other. Forums
              will be moderated to ensure high-quality discussions and prevent misinformation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Expert Connect</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Platform for connecting with subject matter experts and successful candidates for guidance and mentorship.
              This will include scheduled AMAs (Ask Me Anything) sessions and one-on-one consultations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Content Sharing</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ability to share notes, flashcards, and study materials with other users. Content creators will receive
              recognition and feedback from the community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Gamification Elements</CardTitle>
            <Badge variant="outline" className="ml-2">
              <Clock className="h-3 w-3 mr-1" />
              Planned
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Achievement badges, leaderboards, and rewards to motivate consistent study habits. Users will earn points
              for completing study goals, helping others, and contributing quality content.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 p-6 border rounded-lg bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">Have a Suggestion?</h3>
        <p className="mb-4">
          We value your input! If you have ideas for features or improvements that would enhance your UPSC preparation
          experience, please share them with us.
        </p>
        <div className="flex justify-start">
          <Link
            href="/docs/feedback"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Submit Feedback
          </Link>
        </div>
      </div>
    </div>
  )
}
