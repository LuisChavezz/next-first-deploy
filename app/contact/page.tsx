import type { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'The contact page of my first Next app',
  keywords: ['contact', 'us', 'support'],
}

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl ">Contact Page</span>
    </main>
  )
}