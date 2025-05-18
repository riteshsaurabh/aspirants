import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - UPSC Aspirants AI",
  description: "Privacy Policy for UPSC Aspirants AI platform",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: May 10, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            At UPSC Aspirants AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our platform.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Personal information (name, email address, phone number)</li>
            <li>Account credentials</li>
            <li>Profile information</li>
            <li>Study preferences and learning data</li>
            <li>Payment information</li>
          </ul>

          <p>We also automatically collect certain information when you use our platform:</p>
          <ul>
            <li>Usage data (features accessed, time spent, interactions)</li>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving our platform</li>
            <li>Personalizing your learning experience</li>
            <li>Processing transactions</li>
            <li>Sending administrative messages and updates</li>
            <li>Responding to your comments and questions</li>
            <li>Analyzing usage patterns to improve our services</li>
            <li>Protecting against fraudulent or illegal activity</li>
          </ul>

          <h2>Data Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
            However, no method of transmission over the internet or method of electronic storage is completely secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to
            object to or restrict certain processing of your information. To exercise these rights, please contact us at
            [email protected]
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on our platform and update the
            "Last updated" date above.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [email protected]</p>
        </div>
      </div>
    </div>
  )
}
