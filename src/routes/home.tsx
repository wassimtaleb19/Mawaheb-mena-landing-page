import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="MAWAHEB MENA < SOON... >"
        content="For both Employers and freelances. Whether you're hiring or searching for Jobs. MAWAHEB MENA will be here to serve you!"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
