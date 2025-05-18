"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"

interface EnhancedDemoTourProps {
  onClose: () => void
}

export function EnhancedDemoTour({ onClose }: EnhancedDemoTourProps) {
  const [step, setStep] = useState(0)

  const demoSteps = [
    {
      title: "Welcome to UPSC Aspirants AI",
      description: "This interactive demo will guide you through the key features of our platform.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      title: "AI-Powered News Extraction",
      description:
        "Our AI automatically extracts UPSC-relevant content from daily newspapers, categorizes it, and makes it searchable.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      title: "Smart Flashcards",
      description:
        "Automatically generated flashcards with spaced repetition algorithms ensure maximum retention with minimum time investment.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      title: "PYQ Mapping",
      description:
        "Our system analyzes current news topics and maps them to previous year questions, helping you identify patterns and focus on high-probability topics.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track your progress, identify strengths and weaknesses, and optimize your study strategy with our comprehensive analytics.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
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
      <Card className="w-full max-w-5xl mx-4 overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video bg-muted">
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                {demoSteps[step].video && (
                  <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
                    <Play className="h-6 w-6" />
                    <span className="sr-only">Play video</span>
                  </Button>
                )}
              </div>
              <img
                src={demoSteps[step].image || "/placeholder.svg"}
                alt={demoSteps[step].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{demoSteps[step].title}</h3>
                <p className="text-muted-foreground">{demoSteps[step].description}</p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {demoSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          index === step ? "bg-primary w-4" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Step {step + 1} of {demoSteps.length}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={handlePrevious} disabled={step === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button onClick={handleNext}>
                    {step === demoSteps.length - 1 ? "Finish" : "Next"}
                    {step !== demoSteps.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
