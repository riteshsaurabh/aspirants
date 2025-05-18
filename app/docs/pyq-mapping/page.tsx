import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PYQ Mapping - Documentation",
  description: "Learn how our system maps current affairs to previous year questions",
}

export default function PYQMappingPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">PYQ Mapping & Trend Analysis</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our PYQ (Previous Year Questions) mapping system analyzes current news topics and maps them to previous year
        questions, helping you identify patterns and focus on high-probability topics.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The PYQ mapping process involves several sophisticated steps:
      </p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>Database Creation:</strong> We've created a comprehensive database of UPSC questions from the past 10+
          years.
        </li>
        <li>
          <strong>Topic Extraction:</strong> Each question is analyzed to extract key topics, themes, and concepts.
        </li>
        <li>
          <strong>Pattern Recognition:</strong> Our AI identifies recurring patterns, themes, and question types.
        </li>
        <li>
          <strong>Current Affairs Mapping:</strong> New content is automatically mapped to related previous questions.
        </li>
        <li>
          <strong>Probability Analysis:</strong> The system calculates the likelihood of topics appearing in future
          exams.
        </li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="PYQ Mapping Process" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Benefits
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Identify high-probability topics for upcoming exams</li>
        <li>Understand the UPSC's questioning patterns and preferences</li>
        <li>Focus your study time on topics most likely to appear</li>
        <li>See connections between current affairs and historical questions</li>
        <li>Prepare more strategically with data-driven insights</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Using the PYQ Mapping Feature
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To use the PYQ mapping feature effectively:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Log in to your UPSC Aspirants AI account</li>
        <li>Navigate to the "PYQ Mapping" section from the main dashboard</li>
        <li>Browse current news articles with PYQ connections highlighted</li>
        <li>Click on any highlighted topic to see related previous questions</li>
        <li>View probability scores for different topics</li>
        <li>Use the insights to prioritize your study plan</li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="PYQ Mapping Interface" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Topic Probability Analysis
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our system provides detailed probability analysis for different topics:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>High Probability:</strong> Topics that have appeared frequently and have current relevance
        </li>
        <li>
          <strong>Medium Probability:</strong> Topics with moderate historical frequency or current importance
        </li>
        <li>
          <strong>Low Probability:</strong> Topics with minimal historical presence but some current relevance
        </li>
        <li>
          <strong>Trending:</strong> New topics with significant current importance but no historical data
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Advanced Features
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Question Type Analysis:</strong> Understand what types of questions (factual, analytical, etc.) are
          common for each topic
        </li>
        <li>
          <strong>Subject-wise Breakdown:</strong> See how topics are distributed across different UPSC subjects
        </li>
        <li>
          <strong>Temporal Analysis:</strong> Track how question patterns have evolved over time
        </li>
        <li>
          <strong>Custom Alerts:</strong> Get notified when high-probability topics appear in the news
        </li>
        <li>
          <strong>Mock Questions:</strong> Generate practice questions based on historical patterns
        </li>
      </ul>
    </div>
  )
}
