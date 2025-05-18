import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "User Accounts - UPSC Aspirants AI",
  description: "Documentation for user accounts and authentication in UPSC Aspirants AI",
}

export default function AccountsDocPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">User Accounts</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        UPSC Aspirants AI provides a comprehensive user account system that allows you to access your personalized
        content, track your progress, and manage your study materials from anywhere.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Authentication Options
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">We offer multiple ways to create and access your account:</p>

      <Tabs defaultValue="signup" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Creating an Account</CardTitle>
              <CardDescription>You can create a new UPSC Aspirants AI account in two ways</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Registration</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Navigate to the <strong>Sign Up</strong> page
                  </li>
                  <li>Enter your full name, email address, and create a password</li>
                  <li>
                    Click <strong>Create account</strong>
                  </li>
                  <li>Verify your email address by clicking the link sent to your inbox</li>
                  <li>Complete your profile with study preferences</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Google Sign-Up</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Navigate to the <strong>Sign Up</strong> page
                  </li>
                  <li>
                    Click the <strong>Continue with Google</strong> button
                  </li>
                  <li>Select your Google account and authorize the application</li>
                  <li>Complete your profile with study preferences</li>
                </ol>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Test Account</AlertTitle>
                <AlertDescription>
                  For testing purposes, you can use: <br />
                  Email: <strong>test@upscai.com</strong> <br />
                  Password: <strong>test123</strong>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Accessing Your Account</CardTitle>
              <CardDescription>
                You can sign in to your existing UPSC Aspirants AI account in multiple ways
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Sign-In</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Navigate to the <strong>Sign In</strong> page
                  </li>
                  <li>Enter your email address and password</li>
                  <li>
                    Click <strong>Sign In</strong>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Google Sign-In</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Navigate to the <strong>Sign In</strong> page
                  </li>
                  <li>
                    Click the <strong>Continue with Google</strong> button
                  </li>
                  <li>Select your Google account</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Admin Sign-In</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Navigate to the <strong>Sign In</strong> page
                  </li>
                  <li>
                    Switch to the <strong>Admin Login</strong> tab
                  </li>
                  <li>Enter your admin email and password</li>
                  <li>
                    Click <strong>Admin Sign In</strong>
                  </li>
                </ol>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Test Accounts</AlertTitle>
                <AlertDescription>
                  For testing purposes, you can use: <br />
                  <strong>User Account:</strong> <br />
                  Email: <strong>test@upscai.com</strong> <br />
                  Password: <strong>test123</strong> <br />
                  <br />
                  <strong>Admin Account:</strong> <br />
                  Email: <strong>admin@upsc-ai.com</strong> <br />
                  Password: <strong>admin123</strong>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Account Types
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        UPSC Aspirants AI offers different account types with varying levels of access and capabilities:
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>User Account</CardTitle>
            <CardDescription>Standard account for UPSC aspirants</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access to personalized dashboard</li>
              <li>News filtering and categorization</li>
              <li>Flashcard creation and study</li>
              <li>PYQ mapping and analysis</li>
              <li>Notes creation and management</li>
              <li>Progress tracking and analytics</li>
              <li>Question generation from content</li>
              <li>Save articles and create custom tags</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Admin Account</CardTitle>
            <CardDescription>Administrative access for platform management</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>All user account features</li>
              <li>User management and administration</li>
              <li>Content management (News, Flashcards, PYQs, Notes)</li>
              <li>Tags and category management</li>
              <li>System configuration and settings</li>
              <li>Analytics and reporting dashboard</li>
              <li>API management and integration</li>
              <li>Database configuration and maintenance</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Account Security
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We take the security of your account seriously. Here are some security features and best practices:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Secure password storage with industry-standard encryption</li>
        <li>Two-factor authentication option for additional security</li>
        <li>Automatic session timeout after period of inactivity</li>
        <li>Account activity monitoring for suspicious behavior</li>
        <li>Password reset functionality via email</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        Account Management
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can manage various aspects of your account through the profile settings:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Update personal information</li>
        <li>Change password</li>
        <li>Connect or disconnect Google account</li>
        <li>Manage email preferences and notifications</li>
        <li>Update study preferences and focus areas</li>
        <li>View subscription details and billing information</li>
        <li>Download or delete your account data</li>
      </ul>
    </div>
  )
}
