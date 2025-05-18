import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "API Documentation - UPSC Aspirants AI",
  description: "Comprehensive documentation on the UPSC Aspirants AI API functions and endpoints",
}

export default function ApiDocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">API Documentation</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This page provides comprehensive documentation for all API functions and endpoints available in the UPSC
        Aspirants AI platform.
      </p>

      <Tabs defaultValue="overview">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="news">News API</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards API</TabsTrigger>
          <TabsTrigger value="pyq">PYQ Mapping API</TabsTrigger>
          <TabsTrigger value="user">User API</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            API Overview
          </h2>
          <p className="leading-7">
            The UPSC Aspirants AI platform provides a comprehensive set of RESTful APIs that enable developers to
            integrate with and extend the platform's functionality.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Base URL</h3>
          <p className="leading-7 mt-4">All API URLs referenced in this documentation have the following base:</p>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <code>https://api.upscaspirantsai.com/v1</code>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Versioning</h3>
          <p className="leading-7 mt-4">
            Our API uses versioning to ensure backward compatibility as we add new features. The current version is{" "}
            <code>v1</code>.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Response Format</h3>
          <p className="leading-7 mt-4">All API responses are returned in JSON format with a consistent structure:</p>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <pre>{`{
  "success": true,
  "data": { ... },
  "meta": {
    "pagination": {
      "total": 100,
      "page": 1,
      "per_page": 20,
      "total_pages": 5
    }
  }
}`}</pre>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Error Handling</h3>
          <p className="leading-7 mt-4">
            When an error occurs, the API returns a JSON response with the following structure:
          </p>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <pre>{`{
  "success": false,
  "error": {
    "code": "error_code",
    "message": "A human-readable error message",
    "details": { ... }
  }
}`}</pre>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Rate Limiting</h3>
          <p className="leading-7 mt-4">
            API requests are subject to rate limiting to ensure fair usage. The current limits are:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Free Tier:</strong> 100 requests per hour
            </li>
            <li>
              <strong>Basic Tier:</strong> 1,000 requests per hour
            </li>
            <li>
              <strong>Premium Tier:</strong> 10,000 requests per hour
            </li>
            <li>
              <strong>Enterprise Tier:</strong> Custom limits
            </li>
          </ul>
          <p className="leading-7">Rate limit information is included in the response headers:</p>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <code>X-RateLimit-Limit: 100</code>
            <br />
            <code>X-RateLimit-Remaining: 95</code>
            <br />
            <code>X-RateLimit-Reset: 1605108000</code>
          </div>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Authentication
          </h2>
          <p className="leading-7">
            All API requests require authentication. The platform supports several authentication methods.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Keys</h3>
          <p className="leading-7 mt-4">
            The primary authentication method is via API keys. To authenticate using an API key:
          </p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Generate an API key from your dashboard</li>
            <li>Include the API key in the request header</li>
          </ol>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <code>X-API-Key: your_api_key_here</code>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bearer Token Authentication</h3>
          <p className="leading-7 mt-4">For user-specific operations, use bearer token authentication:</p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Obtain a JWT token by authenticating the user</li>
            <li>Include the token in the Authorization header</li>
          </ol>
          <div className="my-6 w-full overflow-y-auto rounded-md bg-muted p-4">
            <code>Authorization: Bearer your_jwt_token_here</code>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">OAuth 2.0</h3>
          <p className="leading-7 mt-4">For third-party applications, we support OAuth 2.0:</p>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Register your application to obtain client credentials</li>
            <li>Implement the OAuth 2.0 authorization flow</li>
            <li>Use the access token to authenticate API requests</li>
          </ol>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Key Management</h3>
          <p className="leading-7 mt-4">Best practices for API key management:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Never expose API keys in client-side code</li>
            <li>Use different API keys for development and production</li>
            <li>Rotate API keys periodically for enhanced security</li>
            <li>Set appropriate permissions for each API key</li>
            <li>Monitor API key usage for unusual activity</li>
          </ul>
        </TabsContent>

        <TabsContent value="news" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            News API
          </h2>
          <p className="leading-7">
            The News API provides access to current affairs articles, categorized and tagged specifically for UPSC
            preparation.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Endpoints</h3>

          <div className="space-y-6 mt-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/news</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves a list of news articles based on various filters and parameters.</p>
              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>page</code>: Page number for pagination (default: 1)
                </li>
                <li>
                  <code>limit</code>: Number of items per page (default: 20, max: 100)
                </li>
                <li>
                  <code>category</code>: Filter by news category (e.g., "polity", "economy", "environment")
                </li>
                <li>
                  <code>tag</code>: Filter by specific tags
                </li>
                <li>
                  <code>date_from</code>: Filter articles published after this date (format: YYYY-MM-DD)
                </li>
                <li>
                  <code>date_to</code>: Filter articles published before this date (format: YYYY-MM-DD)
                </li>
                <li>
                  <code>source</code>: Filter by news source
                </li>
                <li>
                  <code>search</code>: Search within article title and content
                </li>
              </ul>

              <h4 className="text-sm font-semibold mb-2">Example Request</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <code>GET /news?category=polity&limit=10&page=1</code>
              </div>

              <h4 className="text-sm font-semibold mb-2">Example Response</h4>
              <div className="bg-muted p-3 rounded-md">
                <pre>{`{
  "success": true,
  "data": [
    {
      "id": "news123",
      "title": "Supreme Court Verdict on Article 370",
      "summary": "Analysis of the landmark judgment and its implications for Indian federalism.",
      "content": "...",
      "published_at": "2023-10-20T10:30:00Z",
      "source": "Indian Express",
      "url": "https://example.com/article",
      "category": "polity",
      "tags": ["constitution", "federalism", "supreme court"],
      "related_pyqs": ["pyq123", "pyq456"]
    },
    ...
  ],
  "meta": {
    "pagination": {
      "total": 45,
      "page": 1,
      "per_page": 10,
      "total_pages": 5
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/news/{"{id}"}</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves detailed information about a specific news article.</p>

              <h4 className="text-sm font-semibold mb-2">Path Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>id</code>: Unique identifier of the news article
                </li>
              </ul>

              <h4 className="text-sm font-semibold mb-2">Example Response</h4>
              <div className="bg-muted p-3 rounded-md">
                <pre>{`{
  "success": true,
  "data": {
    "id": "news123",
    "title": "Supreme Court Verdict on Article 370",
    "summary": "Analysis of the landmark judgment and its implications for Indian federalism.",
    "content": "Full article content goes here...",
    "published_at": "2023-10-20T10:30:00Z",
    "source": "Indian Express",
    "url": "https://example.com/article",
    "category": "polity",
    "tags": ["constitution", "federalism", "supreme court"],
    "related_pyqs": [
      {
        "id": "pyq123",
        "question": "Discuss the constitutional provisions regarding the relationship between the Centre and States.",
        "year": 2019,
        "paper": "GS-II"
      },
      ...
    ],
    "suggested_questions": [
      "What are the key constitutional arguments in the Article 370 judgment?",
      "How does this verdict impact the federal structure of India?",
      ...
    ]
  }
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/news/{"{id}"}/generate-questions</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Generates practice questions based on a specific news article.</p>

              <h4 className="text-sm font-semibold mb-2">Path Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>id</code>: Unique identifier of the news article
                </li>
              </ul>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "question_type": "mcq", // or "descriptive"
  "count": 5, // number of questions to generate
  "difficulty": "medium" // "easy", "medium", or "hard"
}`}</pre>
              </div>

              <h4 className="text-sm font-semibold mb-2">Example Response</h4>
              <div className="bg-muted p-3 rounded-md">
                <pre>{`{
  "success": true,
  "data": {
    "questions": [
      {
        "id": "q123",
        "type": "mcq",
        "question": "Which of the following statements is NOT correct regarding Article 370?",
        "options": [
          "It granted special autonomous status to Jammu and Kashmir",
          "It was a temporary provision in the Indian Constitution",
          "It allowed the state to have its own constitution",
          "It was abolished through a constitutional amendment passed by 2/3rd majority"
        ],
        "correct_answer": 3,
        "explanation": "Article 370 was abrogated through a Presidential Order, not through a constitutional amendment."
      },
      ...
    ]
  }
}`}</pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Flashcards API
          </h2>
          <p className="leading-7">
            The Flashcards API allows you to create, manage, and study flashcards for UPSC preparation.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Endpoints</h3>

          <div className="space-y-6 mt-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/flashcards</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves a list of flashcard decks based on various filters.</p>

              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>page</code>: Page number for pagination (default: 1)
                </li>
                <li>
                  <code>limit</code>: Number of items per page (default: 20, max: 100)
                </li>
                <li>
                  <code>category</code>: Filter by category (e.g., "gs1", "gs2", "gs3", "gs4")
                </li>
                <li>
                  <code>tag</code>: Filter by specific tags
                </li>
                <li>
                  <code>visibility</code>: Filter by visibility ("public" or "private")
                </li>
                <li>
                  <code>search</code>: Search within deck title and description
                </li>
                <li>
                  <code>sort_by</code>: Sort results ("created_at", "popularity", "cards_count")
                </li>
                <li>
                  <code>sort_order</code>: Sort order ("asc" or "desc")
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/flashcards</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Creates a new flashcard deck.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "title": "Indian Economy Basics",
  "description": "Essential concepts for UPSC prelims and mains",
  "category": "gs3",
  "tags": ["economy", "basics", "concepts"],
  "visibility": "public",
  "cards": [
    {
      "front": "What is GDP?",
      "back": "Gross Domestic Product (GDP) is the total monetary value of all final goods and services produced within a country's borders in a specific time period."
    },
    ...
  ]
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/flashcards/{"{deck_id}"}</code>
                </div>
                <Badge variant="outline">Public/Authenticated</Badge>
              </div>
              <p className="mb-4">Retrieves a specific flashcard deck including all cards.</p>

              <h4 className="text-sm font-semibold mb-2">Path Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>deck_id</code>: Unique identifier of the flashcard deck
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/flashcards/{"{deck_id}"}/study-session</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Creates and initializes a new study session for a flashcard deck.</p>

              <h4 className="text-sm font-semibold mb-2">Path Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>deck_id</code>: Unique identifier of the flashcard deck
                </li>
              </ul>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "algorithm": "spaced_repetition", // or "sequential", "random"
  "card_limit": 20 // optional, limit the number of cards in this session
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/flashcards/auto-generate</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Auto-generates flashcards from provided text or source material.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "title": "Environmental Issues",
  "source_type": "text", // "text", "url", or "news_id"
  "source_content": "...", // text content, URL, or news article ID
  "category": "gs3",
  "card_count": 10, // desired number of flashcards to generate
  "visibility": "private"
}`}</pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pyq" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            PYQ Mapping API
          </h2>
          <p className="leading-7">
            The PYQ Mapping API provides access to previous year questions and their connections to current affairs.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Endpoints</h3>

          <div className="space-y-6 mt-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/pyq</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves a list of previous year questions based on various filters.</p>

              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>page</code>: Page number for pagination (default: 1)
                </li>
                <li>
                  <code>limit</code>: Number of items per page (default: 20, max: 100)
                </li>
                <li>
                  <code>year</code>: Filter by exam year (e.g., 2022, 2021)
                </li>
                <li>
                  <code>paper</code>: Filter by paper type (e.g., "prelims", "mains-gs1")
                </li>
                <li>
                  <code>topic</code>: Filter by topic
                </li>
                <li>
                  <code>subtopic</code>: Filter by subtopic
                </li>
                <li>
                  <code>difficulty</code>: Filter by difficulty level ("easy", "medium", "hard")
                </li>
                <li>
                  <code>search</code>: Search within question text
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/pyq/{"{id}"}</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves detailed information about a specific previous year question.</p>

              <h4 className="text-sm font-semibold mb-2">Path Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>id</code>: Unique identifier of the question
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/pyq/themes</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves ongoing themes identified from previous year questions.</p>

              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>importance</code>: Filter by importance level ("high", "medium", "low")
                </li>
                <li>
                  <code>category</code>: Filter by category (e.g., "gs1", "gs2")
                </li>
                <li>
                  <code>min_questions</code>: Minimum number of related questions
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/pyq/probability-analysis</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Retrieves probability analysis for different topics appearing in upcoming exams.</p>

              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>probability</code>: Filter by probability level ("high", "medium", "low", "trending")
                </li>
                <li>
                  <code>category</code>: Filter by category (e.g., "gs1", "gs2")
                </li>
                <li>
                  <code>limit</code>: Number of topics to return (default: 20)
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/pyq/analyze-content</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Analyzes provided content to identify connections with previous year questions.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "content": "Text content to analyze...",
  "content_type": "article", // "article", "notes", "question"
  "min_confidence": 0.7 // minimum confidence score for matches
}`}</pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="user" className="space-y-4 mt-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            User API
          </h2>
          <p className="leading-7">
            The User API provides endpoints for user management, authentication, and personalization.
          </p>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Endpoints</h3>

          <div className="space-y-6 mt-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/user/register</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Registers a new user account.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "confirm_password": "securePassword123"
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/user/login</code>
                </div>
                <Badge variant="outline">Public</Badge>
              </div>
              <p className="mb-4">Authenticates a user and returns a JWT token.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}`}</pre>
              </div>

              <h4 className="text-sm font-semibold mb-2">Example Response</h4>
              <div className="bg-muted p-3 rounded-md">
                <pre>{`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "subscription_tier": "basic"
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/user/profile</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Retrieves the current user's profile information.</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">PUT</Badge>
                  <code>/user/profile</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Updates the current user's profile information.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "name": "John Smith",
  "avatar_url": "https://example.com/avatar.jpg",
  "study_preferences": {
    "daily_goal_minutes": 120,
    "preferred_subjects": ["polity", "economy", "environment"],
    "reminder_time": "18:00"
  }
}`}</pre>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">GET</Badge>
                  <code>/user/progress</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Retrieves the user's study progress and analytics.</p>

              <h4 className="text-sm font-semibold mb-2">Query Parameters</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <code>period</code>: Time period for progress data ("daily", "weekly", "monthly", "all")
                </li>
                <li>
                  <code>category</code>: Filter by content category
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Badge className="mr-2">POST</Badge>
                  <code>/user/subscriptions</code>
                </div>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <p className="mb-4">Creates or updates a user's subscription.</p>

              <h4 className="text-sm font-semibold mb-2">Request Body</h4>
              <div className="bg-muted p-3 rounded-md mb-4">
                <pre>{`{
  "plan_id": "premium_monthly",
  "payment_method_id": "pm_123456789"
}`}</pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
