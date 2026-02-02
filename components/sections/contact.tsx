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
		shortValue: 'ulugbek...@gmail.com',
		href: 'mailto:ulugbekeshnazarov42@gmail.com',
	},
	{
		icon: SiTelegram,
		label: 'Telegram',
		value: '@ulugdev',
		shortValue: '@ulugdev',
		href: 'https://t.me/ulugdev',
	},
	{
		icon: Phone,
		label: 'Telefon',
		value: '+998 90 123 45 67',
		shortValue: '+998 90 123 45 67',
		href: 'tel:+998901234567',
	},
	{
		icon: MapPin,
		label: 'Manzil',
		value: "Toshkent, O'zbekiston",
		shortValue: "Toshkent",
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
				className={`peer w-full rounded-lg border bg-white/5 px-3 pb-1.5 pt-5 min-h-[46px] text-sm text-white outline-none transition-all duration-300 placeholder:text-transparent focus:ring-2 ${
					error
						? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
						: 'border-white/10 focus:border-white/30 focus:ring-white/10'
				}`}
				placeholder={label}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				{...props}
			/>
			<label
				className={`pointer-events-none absolute left-3 transition-all duration-300 ${
					isFocused || hasValue
						? 'top-1 text-[9px] text-white/50'
						: 'top-1/2 -translate-y-1/2 text-xs text-white/40'
				}`}
			>
				{label}
			</label>
			{error && <p className='mt-1 text-[10px] text-red-400'>{error}</p>}
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
				className={`peer w-full resize-none rounded-lg border bg-white/5 px-3 pb-2 pt-5 min-h-[90px] text-sm text-white outline-none transition-all duration-300 placeholder:text-transparent focus:ring-2 ${
					error
						? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
						: 'border-white/10 focus:border-white/30 focus:ring-white/10'
				}`}
				placeholder={label}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				rows={3}
				{...props}
			/>
			<label
				className={`pointer-events-none absolute left-3 transition-all duration-300 ${
					isFocused || hasValue
						? 'top-1 text-[9px] text-white/50'
						: 'top-3 text-xs text-white/40'
				}`}
			>
				{label}
			</label>
			{error && <p className='mt-1 text-[10px] text-red-400'>{error}</p>}
		</div>
	)
}

export function Contact() {
	const sectionRef = useRef<HTMLElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
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
			gsap.from(".contact-header", {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
				y: 40,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
			});

			gsap.from(".contact-card", {
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 85%",
				},
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.7,
				ease: "power3.out",
			});
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
		<section ref={sectionRef} id='contact' className='py-16 pb-28 sm:py-24 sm:pb-24 px-3 sm:px-6'>
			<div className='mx-auto max-w-6xl'>
				{/* Header */}
				<div className='contact-header text-center mb-8 sm:mb-16'>
					<h2 className='text-xl font-bold tracking-tight text-white min-[320px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>
						Bog'lanish
					</h2>
					<p className='mx-auto mt-2 sm:mt-4 max-w-xl text-[11px] sm:text-base text-white/50 px-2'>
						Loyiha yoki hamkorlik haqida gaplashmoqchimisiz? Xabar yuboring!
					</p>
				</div>

				<div ref={contentRef} className='grid gap-4 sm:gap-8 lg:grid-cols-5'>
					{/* Contact Form */}
					<div className='contact-card order-2 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-6 lg:order-1 lg:col-span-3'>
						<h3 className='mb-3 sm:mb-4 text-sm sm:text-xl font-semibold text-white'>
							Xabar yuborish
						</h3>

						{isSuccess ? (
							<div className='flex flex-col items-center justify-center py-6 text-center'>
								<div className='mb-3 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20'>
									<CheckCircle2 className='h-6 w-6 sm:h-8 sm:w-8 text-emerald-400' />
								</div>
								<h4 className='text-base sm:text-xl font-semibold text-white'>
									Xabar yuborildi!
								</h4>
								<p className='mt-1 text-[11px] sm:text-sm text-white/50'>
									Tez orada siz bilan bog'lanaman.
								</p>
							</div>
						) : (
							<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2.5 sm:space-y-4'>
								<div className='grid gap-2.5 sm:gap-4 grid-cols-1 min-[400px]:grid-cols-2'>
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

								<div className='grid gap-2.5 sm:gap-4 grid-cols-1 min-[400px]:grid-cols-2'>
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
									className='w-full h-11 sm:h-12 rounded-lg bg-white text-black hover:bg-white/90 text-xs sm:text-base font-semibold active:scale-[0.98] touch-manipulation'
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<Loader2 className='h-4 w-4 animate-spin mr-2' />
											Yuborilmoqda...
										</>
									) : (
										<>
											<Send className='h-4 w-4 mr-2' />
											Yuborish
										</>
									)}
								</Button>
							</form>
						)}
					</div>

					{/* Contact Info */}
					<div className='order-1 space-y-3 sm:space-y-4 lg:order-2 lg:col-span-2'>
						{/* Contact Details Card */}
						<div className='contact-card rounded-xl border border-white/10 bg-white/5 p-3 sm:p-6'>
							<h3 className='mb-3 sm:mb-5 text-sm sm:text-lg font-semibold text-white'>
								Kontakt ma'lumotlari
							</h3>
							<div className='space-y-2.5 sm:space-y-4'>
								{contactInfo.map(item => (
									<div key={item.label} className='group flex items-center gap-2.5 sm:gap-4'>
										<div className='flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 shrink-0 transition-colors group-hover:bg-white/10'>
											<item.icon className='h-4 w-4 sm:h-5 sm:w-5 text-white/60 group-hover:text-white' />
										</div>
										<div className='min-w-0 flex-1'>
											<p className='text-[9px] sm:text-xs text-white/40'>{item.label}</p>
											{item.href ? (
												<a
													href={item.href}
													target={item.href.startsWith('http') ? '_blank' : undefined}
													rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
													className='block text-xs sm:text-base font-medium text-white truncate hover:text-white/80'
												>
													<span className='hidden min-[400px]:inline'>{item.value}</span>
													<span className='min-[400px]:hidden'>{item.shortValue}</span>
												</a>
											) : (
												<p className='text-xs sm:text-base font-medium text-white truncate'>
													<span className='hidden min-[400px]:inline'>{item.value}</span>
													<span className='min-[400px]:hidden'>{item.shortValue}</span>
												</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Social Links Card */}
						<div className='contact-card rounded-xl border border-white/10 bg-white/5 p-3 sm:p-6'>
							<h3 className='mb-2.5 sm:mb-4 text-sm sm:text-lg font-semibold text-white'>
								Ijtimoiy tarmoqlar
							</h3>
							<div className='flex gap-2 sm:gap-3'>
								{socialLinks.map(link => (
									<a
										key={link.label}
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation transition-all'
									>
										<link.icon className='h-4 w-4 sm:h-5 sm:w-5' />
									</a>
								))}
							</div>
						</div>

						{/* CTA Card */}
						<div className='contact-card group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 p-3 sm:p-6'>
							<div className='absolute right-0 top-0 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-purple-500/10 blur-2xl' />
							<div className='relative'>
								<h4 className='text-xs sm:text-lg font-semibold text-white'>
									Loyiha boshlashni xohlaysizmi?
								</h4>
								<p className='mt-1 text-[10px] sm:text-sm text-white/50'>
									Konsultatsiya uchun bog'laning — bepul!
								</p>
								<a
									href='https://t.me/ulugdev'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-2 sm:mt-4 inline-flex items-center gap-1.5 text-[10px] sm:text-sm font-medium text-purple-400 hover:text-purple-300 min-h-[36px] touch-manipulation'
								>
									Telegram orqali yozish
									<ArrowUpRight className='h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:rotate-45' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
