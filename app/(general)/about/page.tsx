import type { Metadata } from "next"


export const metadata: Metadata = {
  title: 'About Page',
  description: 'The about page of my first Next app',
  keywords: ['about', 'us', 'support'],
}

export default function AboutPage() {
  return (
    <span className="text-5xl">About Page</span>
  )
}