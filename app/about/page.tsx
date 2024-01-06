import type { Metadata } from "next"


export const metadata: Metadata = {
  title: 'About Page',
  description: 'The about page of my first Next app',
  keywords: ['about', 'us', 'support'],
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl ">About Page</span>
    </main>
  )
}