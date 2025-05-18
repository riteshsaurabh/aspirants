import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flashcards - Documentation",
  description: "Learn how our smart flashcard system helps you retain information effectively",
}

export default function FlashcardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Smart Flashcards & Spaced Repetition
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our smart flashcard system uses scientifically-proven spaced repetition algorithms to help you retain
        information more effectively with less time investment.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The flashcard system works through several integrated processes:
      </p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>Automatic Generation:</strong> Flashcards are automatically generated from news articles, notes, and
          study materials.
        </li>
        <li>
          <strong>Spaced Repetition:</strong> The system schedules reviews at optimal intervals to maximize retention.
        </li>
        <li>
          <strong>Difficulty Tracking:</strong> Cards are categorized by difficulty based on your performance.
        </li>
        <li>
          <strong>Adaptive Learning:</strong> The system adapts to your learning patterns and focuses on your weak
          areas.
        </li>
        <li>
          <strong>Progress Monitoring:</strong> Detailed statistics track your progress and retention rates.
        </li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="Spaced Repetition System" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Benefits
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Improve retention by up to 300% compared to traditional methods</li>
        <li>Reduce study time while increasing effectiveness</li>
        <li>Focus on difficult concepts that need more attention</li>
        <li>Track your progress with detailed analytics</li>
        <li>Study anywhere, anytime with mobile-friendly flashcards</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Using the Flashcard Feature
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To use the flashcard feature effectively:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Log in to your UPSC Aspirants AI account</li>
        <li>Navigate to the "Flashcards" section from the main dashboard</li>
        <li>Choose from automatically generated decks or create your own</li>
        <li>Start a study session based on the system's recommendations</li>
        <li>Rate your confidence level after each card to help the system adapt</li>
        <li>Review your progress in the analytics section</li>
      </ol>

      <div className="my-6 w-full overflow-y-auto">
        <img src="/placeholder.svg?height=400&width=800" alt="Flashcard Interface" className="rounded-md border" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Creating Custom Flashcards
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        While our system automatically generates flashcards, you can also create your own:
      </p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Click on "Create New Deck" in the Flashcards section</li>
        <li>Name your deck and assign it to a category</li>
        <li>Add cards with questions on the front and answers on the back</li>
        <li>Include images, diagrams, or formatting as needed</li>
        <li>Set the initial difficulty level for each card</li>
        <li>Choose whether to make the deck private or share it with the community</li>
      </ol>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Advanced Features
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Cloze Deletion:</strong> Create fill-in-the-blank style cards for more effective learning
        </li>
        <li>
          <strong>Image Occlusion:</strong> Hide parts of diagrams or maps to test your knowledge
        </li>
        <li>
          <strong>Voice Recording:</strong> Record pronunciations for language-related content
        </li>
        <li>
          <strong>Collaborative Decks:</strong> Work with study partners on shared decks
        </li>
        <li>
          <strong>Import/Export:</strong> Import existing flashcards or export your decks
        </li>
      </ul>
    </div>
  )
}
