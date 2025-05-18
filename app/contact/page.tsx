import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - UPSC Aspirants AI",
  description: "Get in touch with the UPSC Aspirants AI team",
}

export default function ContactPage() {
  return <ContactPageClient />
}
