import { About } from '@/components/sections/about'
import { Achievements } from '@/components/sections/achievements'
import { Contact } from '@/components/sections/contact'
import { DesktopDev } from '@/components/sections/desktop-dev'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { FAQ } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { MobileDev } from '@/components/sections/mobile-dev'
import { Pricing } from '@/components/sections/pricing'
import { Projects } from '@/components/sections/projects'
import { Technologies } from '@/components/sections/technologies'
import { Testimonials } from '@/components/sections/testimonials'

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<Hero />
			<About />
			<Technologies />
			<Education />
			<Experience />
			<Achievements />
			<MobileDev />
			<DesktopDev />
			<Projects />
			<Testimonials />
			<Pricing />
			<FAQ />
			<Contact />
		</main>
	)
}
