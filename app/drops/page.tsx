'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DropsGrid } from '@/components/drops'
import { allDrops, DropCategory } from '@/lib/drops'

const categories: { label: string; value: DropCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Lifestyle', value: 'lifestyle' },
  { label: 'Fashion', value: 'fashion' },
  { label: 'Food', value: 'food' },
  { label: 'Spiritual', value: 'spiritual' },
]

export default function DropsPage() {
  const [selectedCategory, setSelectedCategory] = useState<DropCategory | 'all'>('all')
  
  const filteredDrops = selectedCategory === 'all' 
    ? allDrops 
    : allDrops.filter(drop => drop.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-secondary/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Curated by Candace
            </p>
            <h1 className="mt-4 font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Drops
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Curated collections for Muslim women — brands, products, and experiences worth your attention.
            </p>
            
            {/* Category Filters */}
            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-foreground text-background'
                      : 'bg-background text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Drops Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <DropsGrid drops={filteredDrops} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
