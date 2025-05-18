import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notes Manager - UPSC Aspirants AI",
  description: "Documentation for the Notes Manager feature in UPSC Aspirants AI",
}

export default function NotesDocPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Notes Manager</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The Notes Manager is a powerful tool that helps you organize your study notes, create connections between
        different topics, and enhance your revision process.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Key Features
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div>
          <h3 className="text-lg font-semibold">Create & Edit Notes</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Rich text editor with formatting options</li>
            <li>Support for images, tables, and diagrams</li>
            <li>Auto-save functionality</li>
            <li>Version history and change tracking</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Organize with Tags</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Create custom tags for categorization</li>
            <li>Filter notes by multiple tags</li>
            <li>Tag suggestions based on content</li>
            <li>Color-coding for visual organization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Connect to Content</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Link notes to news articles</li>
            <li>Connect notes to PYQs</li>
            <li>Associate with flashcards</li>
            <li>Create study guides from multiple notes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI-Powered Features</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Generate flashcards from notes</li>
            <li>Create practice questions</li>
            <li>Summarize long notes</li>
            <li>Identify key concepts and terms</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Creating Notes
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">You can create notes in several ways:</p>

      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>From scratch</strong> - Create a new note in the Notes Manager
        </li>
        <li>
          <strong>From news articles</strong> - Click the "Create Note" button on any news article to start a note with
          pre-filled content from the article
        </li>
        <li>
          <strong>From PYQs</strong> - Create notes directly from previous year questions to build answer frameworks
        </li>
        <li>
          <strong>Import</strong> - Upload existing notes from Word, PDF, or plain text files
        </li>
      </ol>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Tagging System
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The tagging system allows you to organize your notes in a flexible, non-hierarchical way:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Create tags</strong> - Add custom tags to categorize your notes by subject, topic, importance, etc.
        </li>
        <li>
          <strong>Filter by tags</strong> - Use the tag filter to quickly find relevant notes
        </li>
        <li>
          <strong>Smart tagging</strong> - AI-suggested tags based on note content
        </li>
        <li>
          <strong>Tag management</strong> - Rename, merge, or delete tags as your organization system evolves
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Study Features
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The Notes Manager includes several features to enhance your study process:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Flashcard generation</strong> - Convert your notes into flashcards for spaced repetition study
        </li>
        <li>
          <strong>Question generation</strong> - Create UPSC-style questions from your notes to test your understanding
        </li>
        <li>
          <strong>Mind maps</strong> - Visualize connections between different notes and topics
        </li>
        <li>
          <strong>Revision reminders</strong> - Set up scheduled reminders to review specific notes
        </li>
        <li>
          <strong>Progress tracking</strong> - Monitor which notes you've reviewed and how well you understand the
          content
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Sharing & Collaboration
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Share your notes with other UPSC aspirants:</p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Public/private settings</strong> - Choose which notes to share publicly
        </li>
        <li>
          <strong>Export options</strong> - Download notes in various formats (PDF, Word, HTML)
        </li>
        <li>
          <strong>Collaborative editing</strong> - Work on notes with study partners (premium feature)
        </li>
        <li>
          <strong>Comments</strong> - Leave and receive feedback on shared notes
        </li>
      </ul>

      <div className="my-6 w-full overflow-y-auto">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="UPSC Aspirants AI Notes Manager"
          className="rounded-md border"
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The Notes Manager is designed to be a central hub for your UPSC preparation, helping you organize your thoughts,
        connect different pieces of information, and optimize your revision process.
      </p>
    </div>
  )
}
