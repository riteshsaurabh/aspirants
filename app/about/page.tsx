import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Users, BookOpen, Award, Lightbulb, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - UPSC Aspirants AI",
  description: "Learn about the team behind UPSC Aspirants AI and our mission",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About UPSC Aspirants AI</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          We're on a mission to transform UPSC preparation through AI-powered learning tools.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            UPSC Aspirants AI was founded with a clear mission: to make UPSC preparation more efficient, effective, and
            accessible for all aspirants.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            We believe that by leveraging the power of artificial intelligence, we can help aspirants save time, improve
            retention, and focus on what truly matters for their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/beta-signup">Join Our Beta</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="UPSC Aspirants AI Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible with AI to create better learning experiences.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe quality UPSC preparation should be accessible to aspirants from all backgrounds.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in our content, ensuring accuracy and relevance for UPSC exams.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from our technology to our customer support.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptability</h3>
                <p className="text-muted-foreground">
                  We continuously adapt our platform based on user feedback and changing examination patterns.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  We help aspirants make the most of their study time through smart, AI-powered tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden">
                <img
                  src={`/team-member-icon.png?height=128&width=128&text=Team+Member+${i + 1}`}
                  alt={`Team Member ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Team Member {i + 1}</h3>
              <p className="text-primary mb-2">{["Founder & CEO", "CTO", "Head of Content", "Lead AI Engineer"][i]}</p>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Journey</h2>
        <p className="max-w-[700px] mx-auto text-lg text-muted-foreground mb-6">
          We're just getting started on our mission to transform UPSC preparation. Join our beta program today and be
          part of this exciting journey.
        </p>
        <Button size="lg" asChild>
          <Link href="/beta-signup">Join Beta Program</Link>
        </Button>
      </div>
    </div>
  )
}
