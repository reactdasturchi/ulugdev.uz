"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Palette,
  Server,
  Database,
  CheckCircle2,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  DollarSign,
  Clock,
  Sparkles,
} from "lucide-react";

// Service data
const servicesData = {
  "Web Development": {
    icon: Globe,
    color: "cyan",
    description: "Zamonaviy, tez va responsive web saytlar yaratish",
    features: [
      "React / Next.js asosida",
      "SEO optimizatsiya",
      "Mobile responsive",
      "Tez yuklash",
    ],
    priceRange: "$300 - $2000+",
    duration: "2-6 hafta",
  },
  "Mobile Apps": {
    icon: Smartphone,
    color: "violet",
    description: "iOS va Android uchun cross-platform ilovalar",
    features: [
      "React Native / Expo",
      "Native performance",
      "Push notifications",
      "Offline support",
    ],
    priceRange: "$500 - $5000+",
    duration: "4-12 hafta",
  },
  "UI/UX Design": {
    icon: Palette,
    color: "pink",
    description: "Foydalanuvchi tajribasiga yo'naltirilgan dizayn",
    features: [
      "User research",
      "Wireframes & Prototypes",
      "Design system",
      "Usability testing",
    ],
    priceRange: "$200 - $1500+",
    duration: "1-4 hafta",
  },
  "API Integration": {
    icon: Server,
    color: "emerald",
    description: "Turli xil API'lar bilan integratsiya qilish",
    features: [
      "REST / GraphQL",
      "Third-party APIs",
      "Payment gateways",
      "Authentication",
    ],
    priceRange: "$150 - $800+",
    duration: "1-3 hafta",
  },
  "Database Design": {
    icon: Database,
    color: "amber",
    description: "Samarali va optimallashtirilgan ma'lumotlar bazasi",
    features: [
      "PostgreSQL / MongoDB",
      "Data modeling",
      "Query optimization",
      "Backup strategies",
    ],
    priceRange: "$200 - $1000+",
    duration: "1-3 hafta",
  },
};

type ServiceKey = keyof typeof servicesData;

const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak")
    .max(50, "Ism 50 ta belgidan oshmasligi kerak"),
  email: z.string().email("Noto'g'ri email manzil"),
  phone: z
    .string()
    .min(9, "Telefon raqam noto'g'ri")
    .max(15, "Telefon raqam noto'g'ri"),
  budget: z.string().min(1, "Byudjetni tanlang"),
  deadline: z.string().min(1, "Muddatni tanlang"),
  message: z
    .string()
    .min(10, "Xabar kamida 10 ta belgidan iborat bo'lishi kerak")
    .max(1000, "Xabar 1000 ta belgidan oshmasligi kerak"),
});

type OrderFormData = z.infer<typeof orderSchema>;

const budgetOptions = [
  { value: "100-300", label: "$100 - $300" },
  { value: "300-500", label: "$300 - $500" },
  { value: "500-1000", label: "$500 - $1000" },
  { value: "1000-2000", label: "$1000 - $2000" },
  { value: "2000+", label: "$2000+" },
];

const deadlineOptions = [
  { value: "1-2-hafta", label: "1-2 hafta" },
  { value: "2-4-hafta", label: "2-4 hafta" },
  { value: "1-2-oy", label: "1-2 oy" },
  { value: "2-3-oy", label: "2-3 oy" },
  { value: "shoshilinch-emas", label: "Shoshilinch emas" },
];

interface ServiceOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceKey | null;
}

export function ServiceOrderModal({
  isOpen,
  onClose,
  service,
}: ServiceOrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      deadline: "",
      message: "",
    },
  });

  const serviceData = service ? servicesData[service] : null;

  const colorClasses = {
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      ring: "ring-cyan-500/20",
    },
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
      ring: "ring-violet-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      text: "text-pink-400",
      ring: "ring-pink-500/20",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      ring: "ring-emerald-500/20",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      ring: "ring-amber-500/20",
    },
  };

  const colors = serviceData
    ? colorClasses[serviceData.color as keyof typeof colorClasses]
    : colorClasses.cyan;

  async function onSubmit(data: OrderFormData) {
    if (!service) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/service-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          service,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        form.reset();
        toast.success("Buyurtma yuborildi!", {
          description: "Tez orada siz bilan bog'lanaman.",
        });
      } else {
        throw new Error(result.error || "Xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xatolik yuz berdi", {
        description: "Iltimos, qaytadan urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    setIsSuccess(false);
    form.reset();
    onClose();
  }

  if (!serviceData) return null;

  const ServiceIcon = serviceData.icon;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-950 border-zinc-800 p-0">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-2 ring-emerald-500/20">
              <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Buyurtma qabul qilindi!
            </h3>
            <p className="text-zinc-400 mb-6 max-w-sm">
              Rahmat! Men sizning so'rovingizni ko'rib chiqdim va 24 soat ichida
              javob beraman.
            </p>
            <Button onClick={handleClose} variant="outline" className="border-zinc-700">
              Yopish
            </Button>
          </div>
        ) : (
          <>
            {/* Header with service info */}
            <div className={`relative p-6 ${colors.bg} border-b ${colors.border}`}>
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.bg} ${colors.border} border`}
                >
                  <ServiceIcon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <div className="flex-1">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-xl font-bold text-white">
                      {service}
                    </DialogTitle>
                    <DialogDescription className="text-zinc-400">
                      {serviceData.description}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              {/* Features */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {serviceData.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <Sparkles className={`h-3.5 w-3.5 ${colors.text}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price & Duration */}
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className={`h-4 w-4 ${colors.text}`} />
                  <span className="text-zinc-400">Narx:</span>
                  <span className="font-medium text-white">
                    {serviceData.priceRange}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className={`h-4 w-4 ${colors.text}`} />
                  <span className="text-zinc-400">Muddat:</span>
                  <span className="font-medium text-white">
                    {serviceData.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-5">
              {/* Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <User className="h-4 w-4 text-zinc-500" />
                    Ismingiz *
                  </label>
                  <input
                    {...form.register("name")}
                    placeholder="Ismingizni kiriting"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all"
                  />
                  {form.formState.errors.name && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-zinc-500" />
                    Email *
                  </label>
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all"
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-zinc-500" />
                  Telefon raqam *
                </label>
                <input
                  {...form.register("phone")}
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all"
                />
                {form.formState.errors.phone && (
                  <p className="text-xs text-red-400">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              {/* Budget & Deadline */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zinc-500" />
                    Byudjet *
                  </label>
                  <select
                    {...form.register("budget")}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900">
                      Byudjetni tanlang
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-zinc-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.budget && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.budget.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zinc-500" />
                    Muddat *
                  </label>
                  <select
                    {...form.register("deadline")}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900">
                      Muddatni tanlang
                    </option>
                    {deadlineOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-zinc-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.deadline && (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.deadline.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-zinc-500" />
                  Loyiha haqida batafsil *
                </label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  placeholder="Loyihangiz haqida batafsil ma'lumot bering: nimani qilmoqchisiz, qanday funksiyalar kerak, boshqa muhim tafsilotlar..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-800 transition-all"
                />
                {form.formState.errors.message && (
                  <p className="text-xs text-red-400">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-12 rounded-xl ${colors.bg} hover:opacity-90 ${colors.text} border ${colors.border} text-sm font-semibold transition-all`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Buyurtma yuborish
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-zinc-500">
                Yuborilgandan so'ng 24 soat ichida javob olasiz
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
