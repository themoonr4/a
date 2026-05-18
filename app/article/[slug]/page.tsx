'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Eye, Clock, Share2, Bookmark, Heart, MessageCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

const getArticle = (slug: string) => ({
  id: "1",
  title: "The Dawn of Artificial General Intelligence",
  content: `
    <p>Artificial General Intelligence (AGI) represents one of the most significant technological frontiers of our time.</p>
    <h2>The Breakthrough</h2>
    <p>Researchers have achieved a major milestone in developing systems that can learn, adapt, and reason.</p>
    <h2>Implications for Society</h2>
    <p>The implications of AGI extend far beyond technology.</p>
  `,
  coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  category: "Technology",
  views: 15420,
  readingTime: 8,
  publishedAt: new Date().toISOString(),
  author: { name: "Dr. Sarah Chen", bio: "AI researcher" }
})

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug as string)

  return (
    <article className="container-custom py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-moon-gray mb-4">
          <span className="text-moon-blue">{article.category}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{article.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>

        <div className="flex items-center justify-between py-4 border-y border-moon-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-moon-blue/20 flex items-center justify-center">
              <span className="text-lg">👩‍🔬</span>
            </div>
            <div>
              <div className="font-semibold">{article.author.name}</div>
              <div className="text-xs text-moon-gray">{article.author.bio}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-white/10"><Heart className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-white/10"><Bookmark className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-white/10"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
