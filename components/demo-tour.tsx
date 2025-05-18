"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface DemoTourProps {
  onClose: () => void
}

export function DemoTour({ onClose }: DemoTourProps) {
  const [step, setStep] = useState(0)

  const demoSteps = [
    {
      title: "Welcome to UPSC Aspirants AI",
      description: "This interactive demo will guide you through the key features of our platform.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "AI-Powered News Extraction",
      description:
        "Our AI automatically extracts UPSC-relevant content from daily newspapers, categorizes it, and makes it searchable.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Smart Flashcards",
      description:
        "Automatically generated flashcards with spaced repetition algorithms ensure maximum retention with minimum time investment.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "PYQ Mapping",
      description:
        "Our system analyzes current news topics and maps them to previous year questions, helping you identify patterns and focus on high-probability topics.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track your progress, identify strengths and weaknesses, and optimize your study strategy with our comprehensive analytics.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const handleNext = () => {
    if (step < demoSteps.length - 1) {
      setStep(step + 1)
    } else {
      onClose()
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-4xl mx-4">
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={demoSteps[step].image || "/placeholder.svg"}
                alt={demoSteps[step].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-2 max-w-2xl">
              <h3 className="text-2xl font-bold">{demoSteps[step].title}</h3>
              <p className="text-muted-foreground">{demoSteps[step].description}</p>
            </div>
            <div className="flex items-center justify-between w-full pt-4">
              <Button variant="outline" onClick={handlePrevious} disabled={step === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {demoSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === step ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <Button onClick={handleNext}>
                {step === demoSteps.length - 1 ? "Finish" : "Next"}
                {step !== demoSteps.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
