'use client'

import { useParams } from 'next/navigation'
import { StoryCard } from '@/components/news/StoryCard'

const categoryArticles = [
  {
    id: "1",
    title: "Quantum Computing Breakthrough",
    excerpt: "Scientists achieve quantum supremacy.",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    slug: "quantum-breakthrough",
    category: "Technology",
    views: 15420,
    publishedAt: new Date().toISOString(),
    author: { name: "Dr. Emily Watson" }
  }
]

export default function CategoryPage() {
  const { slug } = useParams()
  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold capitalize mb-2">{slug}</h1>
      <p className="text-moon-gray mb-8">Latest news from {slug}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((article) => (
          <StoryCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
