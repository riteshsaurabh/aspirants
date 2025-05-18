import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeedbackForm } from "@/components/feedback-form"

export const metadata = {
  title: "Feedback & Feature Requests",
  description: "Submit feedback or request new features for UPSC Aspirants AI",
}

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Feedback & Feature Requests</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We're continuously working to improve UPSC Aspirants AI. Your feedback and feature requests help us prioritize
        development and create a better learning experience for all aspirants.
      </p>

      <div className="mt-8">
        <Tabs defaultValue="feedback" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feedback">Submit Feedback</TabsTrigger>
            <TabsTrigger value="feature">Request a Feature</TabsTrigger>
          </TabsList>
          <TabsContent value="feedback" className="mt-6">
            <FeedbackForm
              title="Submit Feedback"
              description="Share your thoughts about UPSC Aspirants AI"
              type="feedback"
              buttonText="Submit Feedback"
            />
          </TabsContent>
          <TabsContent value="feature" className="mt-6">
            <FeedbackForm
              title="Request a Feature"
              description="Let us know what features you'd like to see"
              type="feature"
              buttonText="Submit Feature Request"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-10 bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-background rounded-md">
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground">
              For urgent queries or detailed discussions, reach out to our support team at{" "}
              <a href="mailto:support@upscaspirantsai.com" className="text-primary hover:underline">
                support@upscaspirantsai.com
              </a>
            </p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
            <p className="text-muted-foreground">
              Join our community forum to discuss features, share insights, and connect with other aspirants.
            </p>
            <a href="#" className="text-primary hover:underline">
              Visit Forum →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
