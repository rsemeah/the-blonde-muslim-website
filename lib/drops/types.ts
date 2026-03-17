export type BrandCard = {
  id: string
  name: string
  description: string
  image: string
  ctaLabel: string
  ctaHref: string
  featured: boolean
}

export type DropSection = {
  title: string
  description?: string
  brands: BrandCard[]
}

export type ReflectionBlock = {
  insight: string
  question: string
  reference?: string
}

export type DropCategory = 'lifestyle' | 'fashion' | 'food' | 'spiritual'

export type Drop = {
  slug: string
  title: string
  subtitle: string
  category: DropCategory
  coverImage: string
  publishedAt: string
  intro: string
  sections: DropSection[]
  reflection: ReflectionBlock
  ctaText: string
  ctaHref: string
  featured: boolean
}
