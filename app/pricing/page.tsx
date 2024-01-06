import type { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'The pricing page of my first Next app',
  keywords: ['pricing', 'us', 'support'],
}

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl ">Pricing Page</span>
    </main>
  )
}