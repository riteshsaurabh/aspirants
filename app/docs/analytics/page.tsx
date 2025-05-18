import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics - Documentation",
  description: "Learn how our analytics dashboard helps you track your progress and optimize your study strategy",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Analytics Dashboard</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our comprehensive analytics dashboard provides detailed insights into your study patterns, progress, strengths,
        and weaknesses, helping you optimize your preparation strategy.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Key Metrics Tracked
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The analytics dashboard tracks a wide range of metrics to give you a complete picture of your preparation:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Study Time:</strong> Total time spent studying, broken down by subject, topic, and time period
        </li>
        <li>
          <strong>Flashcard Performance:</strong> Retention rates, accuracy, and progress across different decks
        </li>
        <li>
          <strong>Syllabus Coverage:</strong> Percentage of the UPSC syllabus covered in your studies
        </li>
        <li>
          <strong>Strengths & Weaknesses:</strong> Subject-wise and topic-wise performance analysis
        </li>
        <li>
          <strong>Learning Patterns:</strong> Optimal study times, learning pace, and retention patterns
        </li>
      </ul>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="Analytics Dashboard" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Dashboard Sections
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The analytics dashboard is divided into several key sections:
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">1. Overview</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        The overview section provides a high-level summary of your preparation status, including:
      </p>
      <ul className="my-2 ml-6 list-disc [&>li]:mt-1">
        <li>Total study hours this week/month</li>
        <li>Current syllabus coverage</li>
        <li>Flashcard retention rate</li>
        <li>Recent activity summary</li>
        <li>Upcoming review recommendations</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">2. Subject Performance</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-2">This section breaks down your performance by subject area:</p>
      <ul className="my-2 ml-6 list-disc [&>li]:mt-1">
        <li>Subject-wise strength and weakness analysis</li>
        <li>Comparative performance across subjects</li>
        <li>Progress tracking over time</li>
        <li>Topic-wise breakdown within each subject</li>
        <li>Recommended focus areas</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">3. Study Patterns</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-2">This section analyzes your study habits and patterns:</p>
      <ul className="my-2 ml-6 list-disc [&>li]:mt-1">
        <li>Daily/weekly study time distribution</li>
        <li>Optimal study times based on performance</li>
        <li>Study consistency metrics</li>
        <li>Session duration analysis</li>
        <li>Break pattern recommendations</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">4. Flashcard Analytics</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-2">Detailed analysis of your flashcard performance:</p>
      <ul className="my-2 ml-6 list-disc [&>li]:mt-1">
        <li>Retention rates over time</li>
        <li>Difficult vs. easy cards</li>
        <li>Review efficiency metrics</li>
        <li>Forgetting curve analysis</li>
        <li>Spaced repetition optimization</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Using the Analytics Dashboard
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To make the most of the analytics dashboard:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Log in to your UPSC Aspirants AI account</li>
        <li>Navigate to the "Analytics" section from the main dashboard</li>
        <li>Review your overall progress in the Overview section</li>
        <li>Drill down into specific subjects or topics to identify strengths and weaknesses</li>
        <li>Analyze your study patterns to optimize your schedule</li>
        <li>Check flashcard performance to focus on challenging areas</li>
        <li>Use the recommendations to adjust your study plan</li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Using Analytics Dashboard"
          className="rounded-md border"
        />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Data Privacy and Security
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">We take your data privacy and security seriously:</p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>All your study data is encrypted and securely stored</li>
        <li>Your performance metrics are never shared with third parties</li>
        <li>You can export or delete your data at any time</li>
        <li>Anonymized aggregate data may be used to improve the platform</li>
        <li>You have complete control over what data is collected</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Advanced Analytics Features
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Predictive Analysis:</strong> AI-powered predictions about your future performance
        </li>
        <li>
          <strong>Comparative Metrics:</strong> Compare your performance with anonymized peer data
        </li>
        <li>
          <strong>Custom Reports:</strong> Generate specialized reports for specific aspects of your preparation
        </li>
        <li>
          <strong>Goal Tracking:</strong> Set and monitor progress toward custom study goals
        </li>
        <li>
          <strong>Export Capabilities:</strong> Download your analytics data in various formats
        </li>
      </ul>
    </div>
  )
}
