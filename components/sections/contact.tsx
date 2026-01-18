'use client'

import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import { zodResolver } from '@hookform/resolvers/zod'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	ArrowUpRight,
	CheckCircle2,
	Loader2,
	Mail,
	MapPin,
	Phone,
	Send,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si'
import { toast } from 'sonner'
import { z } from 'zod'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const contactSchema = z.object({
	name: z
		.string()
		.min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak")
		.max(50, 'Ism 50 ta belgidan oshmasligi kerak'),
	email: z.string().email("Noto'g'ri email manzil"),
	phone: z
		.string()
		.optional()
		.refine(
			val => !val || /^\+?[0-9]{9,15}$/.test(val),
			"Noto'g'ri telefon raqam"
		),
	subject: z
		.string()
		.min(5, "Mavzu kamida 5 ta belgidan iborat bo'lishi kerak")
		.max(100, 'Mavzu 100 ta belgidan oshmasligi kerak'),
	message: z
		.string()
		.min(10, "Xabar kamida 10 ta belgidan iborat bo'lishi kerak")
		.max(1000, 'Xabar 1000 ta belgidan oshmasligi kerak'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'ulugbekeshnazarov42@gmail.com',
		href: 'mailto:ulugbekeshnazarov42@gmail.com',
	},
	{
		icon: SiTelegram,
		label: 'Telegram',
		value: '@ulugdev',
		href: 'https://t.me/ulugdev',
	},
	{
		icon: Phone,
		label: 'Telefon',
		value: '+998 90 123 45 67',
		href: 'tel:+998901234567',
	},
	{
		icon: MapPin,
		label: 'Manzil',
		value: "Toshkent, O'zbekiston",
		href: null,
	},
]

const socialLinks = [
	{
		icon: SiGithub,
		label: 'GitHub',
		href: 'https://github.com/reactdasturchi',
	},
	{
		icon: SiLinkedin,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/reactnenjauz',
	},
	{
		icon: SiTelegram,
		label: 'Telegram Kanal',
		href: 'https://t.me/ulugdev',
	},
]

// Floating label input component
function FloatingInput({
	label,
	type = 'text',
	error,
	...props
}: {
	label: string
	type?: string
	error?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
	const [isFocused, setIsFocused] = useState(false)
	const hasValue = props.value && String(props.value).length > 0

	return (
		<div className='relative'>
			<input
				type={type}
				className={`peer w-full rounded-xl border bg-zinc-900/50 px-4 pb-2 pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:ring-2 ${
					error
						? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
						: 'border-zinc-800 focus:border-white/30 focus:ring-white/10'
				}`}
				placeholder={label}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				{...props}
			/>
			<label
				className={`pointer-events-none absolute left-4 transition-all duration-300 ${
					isFocused || hasValue
						? 'top-2 text-xs text-zinc-400'
						: 'top-1/2 -translate-y-1/2 text-sm text-zinc-500'
				}`}
			>
				{label}
			</label>
			{error && <p className='mt-1.5 text-xs text-red-400'>{error}</p>}
		</div>
	)
}

// Floating label textarea component
function FloatingTextarea({
	label,
	error,
	...props
}: {
	label: string
	error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
	const [isFocused, setIsFocused] = useState(false)
	const hasValue = props.value && String(props.value).length > 0

	return (
		<div className='relative'>
			<textarea
				className={`peer w-full resize-none rounded-xl border bg-zinc-900/50 px-4 pb-3 pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:ring-2 ${
					error
						? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
						: 'border-zinc-800 focus:border-white/30 focus:ring-white/10'
				}`}
				placeholder={label}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				rows={4}
				{...props}
			/>
			<label
				className={`pointer-events-none absolute left-4 transition-all duration-300 ${
					isFocused || hasValue
						? 'top-2 text-xs text-zinc-400'
						: 'top-4 text-sm text-zinc-500'
				}`}
			>
				{label}
			</label>
			{error && <p className='mt-1.5 text-xs text-red-400'>{error}</p>}
		</div>
	)
}

export function Contact() {
	const sectionRef = useRef<HTMLElement>(null)
	const titleRef = useRef<HTMLDivElement>(null)
	const formRef = useRef<HTMLDivElement>(null)
	const infoRef = useRef<HTMLDivElement>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		},
	})

	useGSAP(
		() => {
			// Title animation
			const h2Element = titleRef.current?.querySelector('h2')
			const pElement = titleRef.current?.querySelector('p')

			if (h2Element) {
				const titleTl = gsap.timeline({
					scrollTrigger: {
						trigger: titleRef.current,
						start: 'top 85%',
					},
				})

				titleTl.from(h2Element, {
					y: 60,
					opacity: 0,
					duration: 0.8,
					ease: 'power3.out',
				})

				if (pElement) {
					titleTl.from(
						pElement,
						{
							y: 40,
							opacity: 0,
							duration: 0.6,
							ease: 'power3.out',
						},
						'-=0.4'
					)
				}
			}

			// Form animation
			if (formRef.current) {
				gsap.fromTo(
					formRef.current,
					{
						x: -60,
						opacity: 0,
					},
					{
						scrollTrigger: {
							trigger: formRef.current,
							start: 'top 80%',
						},
						x: 0,
						opacity: 1,
						duration: 0.8,
						ease: 'power3.out',
						clearProps: 'all',
					}
				)
			}

			// Info cards animation
			if (infoRef.current?.children) {
				gsap.fromTo(
					infoRef.current.children,
					{
						x: 60,
						opacity: 0,
					},
					{
						scrollTrigger: {
							trigger: infoRef.current,
							start: 'top 80%',
						},
						x: 0,
						opacity: 1,
						duration: 0.6,
						stagger: 0.1,
						ease: 'power3.out',
						clearProps: 'all',
					}
				)
			}
		},
		{ scope: sectionRef }
	)

	async function onSubmit(data: ContactFormData) {
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			const result = await response.json()

			if (response.ok && result.success) {
				setIsSuccess(true)
				form.reset()
				toast.success('Xabar yuborildi!', {
					description: 'Tez orada siz bilan bog\'lanaman.',
				})
				setTimeout(() => setIsSuccess(false), 5000)
			} else {
				throw new Error(result.error || 'Xabar yuborishda xatolik')
			}
		} catch (error) {
			console.error('Error:', error)
			toast.error('Xatolik yuz berdi', {
				description: 'Iltimos, qaytadan urinib ko\'ring yoki Telegram orqali yozing.',
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section ref={sectionRef} id='contact' className='px-4 py-24 sm:px-6'>
			<div className='mx-auto max-w-6xl'>
				{/* Header */}
				<div ref={titleRef} className='mb-16 text-center'>
					<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
						Bog'lanish
					</h2>
					<p className='mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg'>
						Loyiha yoki hamkorlik haqida gaplashmoqchimisiz? Xabar yuboring — 24
						soat ichida javob beraman!
					</p>
				</div>

				<div className='grid gap-8 lg:grid-cols-5'>
					{/* Contact Form */}
					<div
						ref={formRef}
						className='order-2 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur-sm sm:p-6 lg:order-1 lg:col-span-3'
					>
						<h3 className='mb-4 text-lg font-semibold text-white sm:text-xl'>
							Xabar yuborish
						</h3>

						{isSuccess ? (
							<div className='flex flex-col items-center justify-center py-8 text-center'>
								<div className='mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20'>
									<CheckCircle2 className='h-8 w-8 text-emerald-400' />
								</div>
								<h4 className='text-xl font-semibold text-white'>
									Xabar yuborildi!
								</h4>
								<p className='mt-1.5 text-sm text-zinc-400'>
									Tez orada siz bilan bog'lanaman.
								</p>
							</div>
						) : (
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-4'
							>
								<div className='grid gap-4 sm:grid-cols-2'>
									<FloatingInput
										label='Ismingiz *'
										{...form.register('name')}
										value={form.watch('name')}
										error={form.formState.errors.name?.message}
									/>
									<FloatingInput
										label='Email *'
										type='email'
										{...form.register('email')}
										value={form.watch('email')}
										error={form.formState.errors.email?.message}
									/>
								</div>

								<div className='grid gap-4 sm:grid-cols-2'>
									<FloatingInput
										label='Telefon'
										type='tel'
										{...form.register('phone')}
										value={form.watch('phone')}
										error={form.formState.errors.phone?.message}
									/>
									<FloatingInput
										label='Mavzu *'
										{...form.register('subject')}
										value={form.watch('subject')}
										error={form.formState.errors.subject?.message}
									/>
								</div>

								<FloatingTextarea
									label='Xabaringiz *'
									{...form.register('message')}
									value={form.watch('message')}
									error={form.formState.errors.message?.message}
								/>

								<Button
									type='submit'
									size='lg'
									className='group relative w-full overflow-hidden rounded-xl bg-white py-5 text-base font-semibold text-black transition-all duration-300 hover:bg-zinc-200'
									disabled={isSubmitting}
								>
									<span className='relative z-10 flex items-center justify-center gap-2'>
										{isSubmitting ? (
											<>
												<Loader2 className='h-5 w-5 animate-spin' />
												Yuborilmoqda...
											</>
										) : (
											<>
												<Send className='h-5 w-5 transition-transform duration-300 group-hover:rotate-12' />
												Yuborish
											</>
										)}
									</span>
								</Button>
							</form>
						)}
					</div>

					{/* Contact Info */}
					<div
						ref={infoRef}
						className='order-1 space-y-4 lg:order-2 lg:col-span-2'
					>
						{/* Contact Details Card */}
						<div className='rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm'>
							<h3 className='mb-5 text-lg font-semibold text-white'>
								Kontakt ma'lumotlari
							</h3>
							<div className='space-y-4'>
								{contactInfo.map(item => (
									<div
										key={item.label}
										className='group flex items-center gap-4'
									>
										<div className='flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5'>
											<item.icon className='h-5 w-5 text-zinc-400 transition-colors group-hover:text-white' />
										</div>
										<div>
											<p className='text-xs text-zinc-500'>{item.label}</p>
											{item.href ? (
												<a
													href={item.href}
													target={
														item.href.startsWith('http') ? '_blank' : undefined
													}
													rel={
														item.href.startsWith('http')
															? 'noopener noreferrer'
															: undefined
													}
													className='font-medium text-white transition-colors hover:text-zinc-300'
												>
													{item.value}
												</a>
											) : (
												<p className='font-medium text-white'>{item.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Social Links Card */}
						<div className='rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm'>
							<h3 className='mb-4 text-lg font-semibold text-white'>
								Ijtimoiy tarmoqlar
							</h3>
							<div className='flex gap-3'>
								{socialLinks.map(link => (
									<a
										key={link.label}
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='group flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white'
									>
										<link.icon className='h-5 w-5' />
									</a>
								))}
							</div>
						</div>

						{/* CTA Card */}
						<div className='group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 p-4 transition-all duration-500 hover:border-purple-500/30 sm:rounded-2xl sm:p-6'>
							<div className='absolute right-0 top-0 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20 sm:h-32 sm:w-32 sm:blur-3xl' />
							<div className='relative'>
								<h4 className='text-base font-semibold text-white sm:text-lg'>
									Loyiha boshlashni xohlaysizmi?
								</h4>
								<p className='mt-1.5 text-xs text-zinc-400 sm:mt-2 sm:text-sm'>
									Konsultatsiya uchun bog'laning — bepul!
								</p>
								<a
									href='https://t.me/ulugdev'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 transition-colors hover:text-purple-300 sm:mt-4 sm:gap-2 sm:text-sm'
								>
									Telegram orqali yozish
									<ArrowUpRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 sm:h-4 sm:w-4' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
