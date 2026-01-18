import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { DesktopDev } from '@/components/sections/desktop-dev'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { MobileDev } from '@/components/sections/mobile-dev'
import { Projects } from '@/components/sections/projects'
import { Technologies } from '@/components/sections/technologies'

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<Hero />
			<About />
			<Technologies />
			<Education />
			<Experience />
			<MobileDev />
			<DesktopDev />
			<Projects />
			<Contact />
		</main>
	)
}
