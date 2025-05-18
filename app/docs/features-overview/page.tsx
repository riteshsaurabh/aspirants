import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Features Overview - UPSC Aspirants AI",
  description: "Comprehensive overview of all features in UPSC Aspirants AI platform",
}

export default function FeaturesOverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Features Overview</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This page provides a comprehensive overview of all features available in the UPSC Aspirants AI platform,
        organized by user type, page, and functionality.
      </p>

      <Tabs defaultValue="page-wise">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="page-wise">Page-wise Features</TabsTrigger>
          <TabsTrigger value="front-end">Frontend Components</TabsTrigger>
          <TabsTrigger value="back-end">Backend Services</TabsTrigger>
        </TabsList>

        <TabsContent value="page-wise" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold tracking-tight">Page-wise Feature Overview</h2>
          <p>Explore all features organized by main application pages.</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="dashboard">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">User Dashboard</span>
                  <Badge className="ml-3" variant="outline">
                    User
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">Overview Tab</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Study time tracking and visualization</li>
                      <li>Syllabus progress tracking by subject</li>
                      <li>Strengths and weaknesses analysis</li>
                      <li>Recent news feed with relevance tagging</li>
                      <li>Flashcard learning statistics</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Analytics Tab</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Study time distribution charts</li>
                      <li>Performance trend analysis</li>
                      <li>Retention analysis and memory curves</li>
                      <li>Subject performance comparison</li>
                      <li>Custom date range filtering</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Activity Tab</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Recent actions timeline</li>
                      <li>Recently viewed articles</li>
                      <li>Recently created notes</li>
                      <li>Study session history</li>
                      <li>Learning milestone tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Recommendations Tab</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>AI-powered study focus suggestions</li>
                      <li>High-probability exam topic identification</li>
                      <li>Personalized reading recommendations</li>
                      <li>Practice test suggestions</li>
                      <li>Revision schedule optimization</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="news">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">News Section</span>
                  <Badge className="ml-3" variant="outline">
                    Public
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">News Browsing</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>AI-curated news feed from trusted sources</li>
                      <li>Multi-dimensional filtering (category, date, source, tags)</li>
                      <li>UPSC relevance scoring for each article</li>
                      <li>Reading time estimation</li>
                      <li>Bookmark and save functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">News Analysis</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Key points extraction for each article</li>
                      <li>Subject-wise categorization</li>
                      <li>Automatic tagging with UPSC-relevant topics</li>
                      <li>PYQ connections and mapping</li>
                      <li>Important terms highlighting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Interactive Features</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>One-click flashcard generation from articles</li>
                      <li>AI-powered practice question generation</li>
                      <li>Note-taking integration</li>
                      <li>Share and export functionality</li>
                      <li>Reading progress tracking</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="flashcards">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Public Flashcards</span>
                  <Badge className="ml-3" variant="outline">
                    Public
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">Flashcard Library</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Browse public flashcard collections by topic</li>
                      <li>Filter by subject, difficulty, and popularity</li>
                      <li>Preview cards before starting a study session</li>
                      <li>Add entire collections to personal library</li>
                      <li>Community ratings and reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Study Features</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Interactive study mode with spaced repetition</li>
                      <li>Self-assessment of knowledge retention</li>
                      <li>Multiple study algorithms (spaced repetition, random, sequential)</li>
                      <li>Voice-enabled study mode</li>
                      <li>Time-based study sessions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Card Creation</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Create and edit custom flashcards</li>
                      <li>AI-assisted content generation</li>
                      <li>Import cards from various sources</li>
                      <li>Rich text formatting with images and diagrams</li>
                      <li>Organize cards into decks and sub-decks</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Testing & Assessment</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Generate practice tests from flashcard content</li>
                      <li>Track performance metrics</li>
                      <li>Identify knowledge gaps</li>
                      <li>Adaptive difficulty adjustment</li>
                      <li>Study schedule recommendations</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pyq-mapping">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">PYQ Mapping</span>
                  <Badge className="ml-3" variant="outline">
                    Public
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">PYQ Database</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Comprehensive collection of previous year questions</li>
                      <li>Multi-faceted filtering (year, paper, topic, difficulty)</li>
                      <li>Subject-wise organization</li>
                      <li>Difficulty rating for each question</li>
                      <li>Solved and unsolved question tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Trending Themes</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>AI-identified recurring themes across years</li>
                      <li>Importance rating for each theme</li>
                      <li>Connection with current affairs</li>
                      <li>Expected question prediction</li>
                      <li>Custom theme creation and tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Study Tools</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Note-taking for each PYQ and theme</li>
                      <li>Automatic answer framework generation</li>
                      <li>Resource recommendations for each question</li>
                      <li>Related flashcard creation</li>
                      <li>Similar question identification</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Analysis Features</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Year-wise question distribution charts</li>
                      <li>Topic frequency analysis</li>
                      <li>Pattern recognition for question types</li>
                      <li>Word cloud for important terms</li>
                      <li>Examiner focus and preference analysis</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="admin-dashboard">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Admin Dashboard</span>
                  <Badge className="ml-3" variant="outline">
                    Admin
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">Overview</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Platform usage metrics and visualization</li>
                      <li>User growth and engagement tracking</li>
                      <li>Feature popularity analysis</li>
                      <li>System health monitoring</li>
                      <li>Recent admin activities log</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">User Management</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>User account creation and editing</li>
                      <li>Role-based permission management</li>
                      <li>Subscription and billing oversight</li>
                      <li>User activity monitoring</li>
                      <li>Bulk user operations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Content Management</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>News source configuration</li>
                      <li>Content moderation tools</li>
                      <li>Tag and category management</li>
                      <li>PYQ database maintenance</li>
                      <li>Public flashcard review and approval</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">System Configuration</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>API integration management</li>
                      <li>Database configuration and maintenance</li>
                      <li>AI model optimization</li>
                      <li>Backup and recovery tools</li>
                      <li>Performance tuning options</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="notes-manager">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Notes Manager</span>
                  <Badge className="ml-3" variant="secondary">
                    User
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-6">
                  <div>
                    <h4 className="font-medium">Note Creation</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Rich text editor with markdown support</li>
                      <li>Tag-based organization system</li>
                      <li>Connect notes to news articles, PYQs, and flashcards</li>
                      <li>Multi-media attachment support</li>
                      <li>AI-assisted note summarization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Organization</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Hierarchical folder structure</li>
                      <li>Tag-based filtering and search</li>
                      <li>Subject-wise categorization</li>
                      <li>Custom collections and study guides</li>
                      <li>Revision scheduling</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Study Features</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>One-click flashcard generation from notes</li>
                      <li>AI-powered question generation</li>
                      <li>Mind map visualization</li>
                      <li>Revision reminders based on forgetting curve</li>
                      <li>Study progress tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Collaboration</h4>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Share notes with other users</li>
                      <li>Collaborative editing (premium feature)</li>
                      <li>Export to various formats (PDF, Word, HTML)</li>
                      <li>Version history and change tracking</li>
                      <li>Public/private visibility settings</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="front-end" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Frontend Components & Features</h2>
            <p>Detailed overview of frontend components, UI modules, and client-side functionality.</p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>UI Components</CardTitle>
                  <CardDescription>Reusable interface components used throughout the application</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">User Interface Kit</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Shadcn/UI-based component library</li>
                        <li>Responsive grid system</li>
                        <li>Themeable design system with dark mode</li>
                        <li>Accessible form controls and interactive elements</li>
                        <li>Animation and transition utilities</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Data Visualization</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Interactive charts and graphs</li>
                        <li>Progress indicators and gauges</li>
                        <li>Heatmaps and activity visualizations</li>
                        <li>Mind maps and relationship diagrams</li>
                        <li>Custom data presentation components</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Study Tools</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Flashcard component with flip animation</li>
                        <li>Interactive quiz renderer</li>
                        <li>Note-taking editor with rich text support</li>
                        <li>Study timer with Pomodoro technique</li>
                        <li>Focus mode with distraction blocking</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>State Management</CardTitle>
                  <CardDescription>Client-side state management and data handling</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">User State</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Authentication and session management</li>
                        <li>User preferences and settings</li>
                        <li>Study progress and activity tracking</li>
                        <li>Subscription and feature access control</li>
                        <li>Recently viewed and bookmarked content</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Application State</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Filter and search parameters</li>
                        <li>UI state (sidebar, modals, active tabs)</li>
                        <li>Form data and validation state</li>
                        <li>Error and notification handling</li>
                        <li>Cached responses and optimistic updates</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Data Caching</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Content caching for offline access</li>
                        <li>API response cache with TTL</li>
                        <li>Persistent storage for draft content</li>
                        <li>Study history and progress syncing</li>
                        <li>Optimized refetching strategies</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client-side Features</CardTitle>
                  <CardDescription>Browser-based functionality and enhancements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Offline Capabilities</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Service worker for offline content access</li>
                        <li>Background synchronization of study data</li>
                        <li>Offline-first flashcard study mode</li>
                        <li>Local storage for draft notes and answers</li>
                        <li>Network status monitoring and recovery</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Performance Optimizations</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Code splitting and lazy loading</li>
                        <li>Image optimization and responsive delivery</li>
                        <li>Component-level virtualization for long lists</li>
                        <li>Prefetching of likely navigation targets</li>
                        <li>Optimized rendering with memoization</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Accessibility</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Screen reader compatibility</li>
                        <li>Keyboard navigation support</li>
                        <li>High contrast mode</li>
                        <li>Reduced motion option</li>
                        <li>ARIA-compliant interactive components</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Navigation & Routing</CardTitle>
                  <CardDescription>Application structure and navigation systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Routing Structure</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Next.js App Router implementation</li>
                        <li>Role-based route protection</li>
                        <li>Dynamic route generation for content</li>
                        <li>Shallow routing for filter state</li>
                        <li>Custom loading states for routes</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Navigation Components</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Responsive main navigation</li>
                        <li>Collapsible sidebar with custom sections</li>
                        <li>Breadcrumb navigation system</li>
                        <li>Context-aware back navigation</li>
                        <li>Global search with keyboard shortcuts</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Layout System</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Nested layouts for section consistency</li>
                        <li>Responsive breakpoint handling</li>
                        <li>Role-specific layout variations</li>
                        <li>Context-preserving modals</li>
                        <li>Content-aware layout adjustments</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="back-end" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Backend Services & API</h2>
            <p>Comprehensive overview of server-side functionality, APIs, and data services.</p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>API Services</CardTitle>
                  <CardDescription>Core backend services and RESTful endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Authentication API</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>User registration and login</li>
                        <li>JWT token management</li>
                        <li>Role-based authorization</li>
                        <li>Password reset and account recovery</li>
                        <li>OAuth integration for social login</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Content API</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>News article extraction and processing</li>
                        <li>Flashcard CRUD operations</li>
                        <li>Note management endpoints</li>
                        <li>PYQ database access and filtering</li>
                        <li>Content recommendation engine</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">User Data API</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Study progress tracking</li>
                        <li>User preferences management</li>
                        <li>Analytics data collection</li>
                        <li>Subscription and billing integration</li>
                        <li>User activity logging</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI & Machine Learning</CardTitle>
                  <CardDescription>Intelligent services powering the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Content Processing</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Natural language processing for news extraction</li>
                        <li>Automatic categorization and tagging</li>
                        <li>Relevance scoring for UPSC preparation</li>
                        <li>Key point extraction and summarization</li>
                        <li>Entity recognition for important terms</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Question Generation</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>MCQ generation from content</li>
                        <li>Descriptive question formulation</li>
                        <li>Answer evaluation and feedback</li>
                        <li>Difficulty calibration</li>
                        <li>Question quality assessment</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Personalization</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Study recommendation engine</li>
                        <li>Adaptive learning path generation</li>
                        <li>Performance prediction models</li>
                        <li>Content similarity matching</li>
                        <li>User behavior analysis</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Database services and data processing pipelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Database Architecture</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Multi-database design with domain separation</li>
                        <li>High-performance query optimization</li>
                        <li>Scalable data storage for content</li>
                        <li>Time-series data for analytics</li>
                        <li>Caching layer for frequent queries</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">ETL Processes</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>News source ingestion pipeline</li>
                        <li>PYQ database maintenance workflow</li>
                        <li>Content enrichment processes</li>
                        <li>Analytics data aggregation</li>
                        <li>Data validation and cleaning</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Data Security</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>End-to-end encryption for sensitive data</li>
                        <li>Role-based access control</li>
                        <li>Regular security audits and testing</li>
                        <li>Compliance with data protection regulations</li>
                        <li>Backup and disaster recovery systems</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Infrastructure & DevOps</CardTitle>
                  <CardDescription>System architecture and operational services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Cloud Infrastructure</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Containerized microservices architecture</li>
                        <li>Auto-scaling compute resources</li>
                        <li>Global CDN for content delivery</li>
                        <li>Serverless functions for event processing</li>
                        <li>Multi-region deployment for reliability</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Monitoring & Observability</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Real-time system health monitoring</li>
                        <li>Performance metrics and tracing</li>
                        <li>Error tracking and alerting</li>
                        <li>Usage analytics and capacity planning</li>
                        <li>Security event monitoring</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Continuous Integration/Deployment</span>
                      <ul className="list-circle pl-6 text-sm text-muted-foreground">
                        <li>Automated testing pipeline</li>
                        <li>Zero-downtime deployment process</li>
                        <li>Feature flagging system</li>
                        <li>Rollback capabilities</li>
                        <li>Environment parity across staging/production</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
