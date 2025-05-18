import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service - UPSC Aspirants AI",
  description: "Terms of Service for UPSC Aspirants AI platform",
}

export default function TermsOfServicePage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: May 10, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Welcome to UPSC Aspirants AI. These Terms of Service ("Terms") govern your access to and use of the UPSC
            Aspirants AI platform, including any websites, mobile applications, and services (collectively, the
            "Service").
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms,
            you may not access or use the Service.
          </p>

          <h2>1. Account Registration</h2>
          <p>
            To access certain features of the Service, you may be required to register for an account. You agree to
            provide accurate, current, and complete information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2>2. User Content</h2>
          <p>
            The Service may allow you to create, upload, post, send, receive, and store content, including text, images,
            and other materials ("User Content"). You retain all rights in and to your User Content, and you grant us a
            non-exclusive, royalty-free, worldwide, transferable license to use, store, display, reproduce, modify,
            create derivative works, perform, and distribute your User Content solely for the purpose of operating and
            improving the Service.
          </p>

          <h2>3. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Violate or infringe other people's intellectual property, privacy, or other rights</li>
            <li>
              Post, upload, or distribute any content that is unlawful, defamatory, libelous, inaccurate, or that a
              reasonable person could deem to be objectionable
            </li>
            <li>
              Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity
            </li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
            <li>Attempt to gain unauthorized access to the Service or other user accounts</li>
            <li>Use any robot, spider, crawler, scraper, or other automated means to access the Service</li>
            <li>Reverse engineer any aspect of the Service or do anything that might discover source code</li>
          </ul>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are owned by UPSC Aspirants AI and are
            protected by international copyright, trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>

          <h2>5. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
            limited to a breach of the Terms.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall UPSC Aspirants AI, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
            access to or use of or inability to access or use the Service.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:legal@upscaspirantsai.com" className="text-primary hover:underline">
              legal@upscaspirantsai.com
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
