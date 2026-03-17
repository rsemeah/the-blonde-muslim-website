import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { 
  DropHero, 
  DropIntro, 
  DropSection, 
  ReflectionBlock, 
  DropCTA,
  DropsPreview 
} from '@/components/drops'
import { getDropBySlug, getAllDropSlugs, allDrops } from '@/lib/drops'

export function generateStaticParams() {
  return getAllDropSlugs().map((slug) => ({ slug }))
}

interface DropPageProps {
  params: Promise<{ slug: string }>
}

export default async function DropPage({ params }: DropPageProps) {
  const { slug } = await params
  const drop = getDropBySlug(slug)
  
  if (!drop) {
    notFound()
  }
  
  // Get other drops for the "More Drops" section
  const otherDrops = allDrops.filter(d => d.slug !== slug).slice(0, 2)

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <DropHero
          title={drop.title}
          subtitle={drop.subtitle}
          category={drop.category}
          coverImage={drop.coverImage}
        />
        
        {/* Intro */}
        <DropIntro intro={drop.intro} />
        
        {/* Sections */}
        {drop.sections.map((section, index) => (
          <DropSection 
            key={section.title} 
            section={section} 
            index={index} 
          />
        ))}
        
        {/* Reflection */}
        <ReflectionBlock reflection={drop.reflection} />
        
        {/* CTA */}
        <DropCTA ctaText={drop.ctaText} ctaHref={drop.ctaHref} />
        
        {/* More Drops */}
        {otherDrops.length > 0 && (
          <DropsPreview
            drops={otherDrops}
            title="More Drops"
            ctaLabel="See All Drops"
            ctaHref="/drops"
          />
        )}
      </main>
      <Footer />
    </>
  )
}
