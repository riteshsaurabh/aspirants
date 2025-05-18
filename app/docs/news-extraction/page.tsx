import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News Extraction - Documentation",
  description: "Learn how our AI extracts UPSC-relevant content from daily newspapers",
}

export default function NewsExtractionPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">AI-Powered News Extraction</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our AI-powered news extraction system automatically identifies and extracts UPSC-relevant content from daily
        newspapers, saving you hours of manual reading and note-taking.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">The news extraction process involves several steps:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>Source Selection:</strong> Our AI crawls multiple trusted news sources daily, including The Hindu,
          Indian Express, PIB, and more.
        </li>
        <li>
          <strong>Content Extraction:</strong> Using advanced natural language processing, the AI identifies and
          extracts UPSC-relevant content.
        </li>
        <li>
          <strong>Categorization:</strong> The extracted content is automatically categorized according to the UPSC
          syllabus.
        </li>
        <li>
          <strong>Tagging:</strong> Each article is tagged with relevant keywords for easy searching and filtering.
        </li>
        <li>
          <strong>Summarization:</strong> The AI generates concise summaries of each article, highlighting the key
          points.
        </li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="News Extraction Process" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Benefits
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Save 2-3 hours daily on newspaper reading</li>
        <li>Never miss important news relevant to UPSC</li>
        <li>Focus only on what matters for your exam</li>
        <li>Access historical news archives for comprehensive revision</li>
        <li>Search and filter news by topic, date, or keyword</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Using the News Extraction Feature
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To access the news extraction feature:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Log in to your UPSC Aspirants AI account</li>
        <li>Navigate to the "News" section from the main dashboard</li>
        <li>Browse the latest extracted news articles</li>
        <li>Use the filters to narrow down by category, date, or keyword</li>
        <li>Save important articles to your personal collection</li>
        <li>Create flashcards directly from news articles with one click</li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="News Dashboard Interface" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Customization Options
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can customize your news feed according to your preferences:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Select preferred news sources</li>
        <li>Prioritize specific categories or topics</li>
        <li>Set up daily email digests of important news</li>
        <li>Adjust the level of detail in summaries</li>
        <li>Create custom tags for personal organization</li>
      </ul>
    </div>
  )
}
