import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - UPSC Aspirants AI",
  description: "Frequently Asked Questions about UPSC Aspirants AI",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is UPSC Aspirants AI?",
      answer:
        "UPSC Aspirants AI is an AI-powered platform designed to help UPSC aspirants prepare more efficiently. It uses artificial intelligence to extract relevant information from daily news, create smart flashcards, map current affairs to previous year questions, and provide personalized learning experiences.",
    },
    {
      question: "How does the AI news extraction work?",
      answer:
        "Our AI automatically scans multiple news sources daily, identifies UPSC-relevant content, categorizes it according to the syllabus, and makes it searchable. This saves you hours of manual reading and note-taking, allowing you to focus on what's important for your exam.",
    },
    {
      question: "What is the smart flashcard system?",
      answer:
        "Our smart flashcard system uses scientifically-proven spaced repetition algorithms to help you retain information more effectively. The system adapts to your learning patterns, focusing more on concepts you find difficult and less on those you've mastered.",
    },
    {
      question: "How does PYQ mapping help my preparation?",
      answer:
        "PYQ (Previous Year Questions) mapping analyzes current news topics and connects them to related questions from past UPSC exams. This helps you identify patterns and focus on high-probability topics, making your preparation more strategic and effective.",
    },
    {
      question: "Is UPSC Aspirants AI suitable for beginners?",
      answer:
        "Yes, UPSC Aspirants AI is designed for aspirants at all stages of preparation. Beginners can benefit from the structured approach to current affairs and syllabus coverage, while advanced students can leverage the analytics and pattern recognition features to refine their strategy.",
    },
    {
      question: "How much does it cost to use UPSC Aspirants AI?",
      answer:
        "We offer various subscription plans to suit different needs. Currently, we're running a beta program where selected users get 2 months of free access in exchange for feedback. After the beta period, we'll offer competitive pricing with special discounts for early adopters.",
    },
    {
      question: "Can I access UPSC Aspirants AI on mobile devices?",
      answer:
        "Yes, UPSC Aspirants AI is fully responsive and works on all devices including smartphones and tablets. We also plan to release dedicated mobile apps for Android and iOS in the near future for an even better mobile experience.",
    },
    {
      question: "How is my data protected on the platform?",
      answer:
        "We take data security very seriously. All your study data is encrypted and securely stored. We never share your personal information with third parties. You have complete control over your data and can export or delete it at any time.",
    },
    {
      question: "Can I share my flashcards with friends?",
      answer:
        "Yes, you can create and share flashcard decks with other users on the platform. This collaborative feature allows study groups to work together more effectively. You can choose to make your decks private or public.",
    },
    {
      question: "How often is the content updated?",
      answer:
        "Our news extraction system runs daily, ensuring you always have access to the latest relevant information. Our syllabus content and PYQ database are regularly updated to reflect any changes in the UPSC examination pattern or syllabus.",
    },
    {
      question: "Do you offer personalized study plans?",
      answer:
        "Yes, based on your performance and learning patterns, our AI generates personalized study recommendations and schedules. These adapt over time as you progress, ensuring you're always focusing on the most important areas for improvement.",
    },
    {
      question: "How can I join the beta program?",
      answer:
        "You can apply to join our beta program by filling out the form on our homepage. Due to high demand, we're accepting users in batches. Priority is given to early applicants and those who provide detailed information about their UPSC preparation journey.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about UPSC Aspirants AI.</p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question, feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
