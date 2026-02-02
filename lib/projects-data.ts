export type ProjectSize = "large" | "medium" | "small";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  result: string;
  screenshots?: { src: string; alt: string }[];
  demoVideoUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  stars: number;
  forks: number;
  featured: boolean;
  size: ProjectSize;
  gradient: string;
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "shopflow-ecommerce",
    title: "ShopFlow E-commerce",
    description:
      "To'liq funksional e-commerce platforma. Stripe to'lov tizimi, admin panel, buyurtmalarni kuzatish.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/ulugdev/shopflow",
    demo: "https://shopflow.ulugdev.uz",
    stars: 128,
    forks: 34,
    featured: true,
    size: "large",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    caseStudy: {
      problem:
        "Mijozlar oddiy va tez onlayn xarid qilishni xohlardi. Mavjud yechimlar murakkab va qimmat edi.",
      solution:
        "Next.js 14 va Stripe bilan to'liq responsive e-commerce platforma. Admin panel orqali mahsulotlar, buyurtmalar va mijozlarni boshqarish. Real-time inventar va xavfsiz to'lov.",
      result:
        "3 oy ichida 500+ mahsulot qo'shildi, oylik 2000+ buyurtma. Mijozlar qayta xarid qilish darajasi 40% ga oshdi.",
      screenshots: [
        { src: "/najot-talim.jpg", alt: "ShopFlow bosh sahifa" },
        { src: "/najot-talim.jpg", alt: "Mahsulotlar" },
        { src: "/najot-talim.jpg", alt: "Checkout" },
      ],
    },
  },
  {
    slug: "taskmaster-pro",
    title: "TaskMaster Pro",
    description:
      "Jamoa uchun vazifalarni boshqarish. Kanban board va real-time hamkorlik.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/ulugdev/taskmaster",
    demo: "https://taskmaster.ulugdev.uz",
    stars: 89,
    forks: 21,
    featured: true,
    size: "medium",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    caseStudy: {
      problem:
        "Startup jamoasi vazifalarni boshqarishda chalkashlik va kechikishlar bilan yuzlashardi.",
      solution:
        "Kanban board, drag-and-drop, real-time Socket.io orqali bir nechta foydalanuvchilar bir vaqtda ishlashi. MongoDB bilan tez ma'lumotlar.",
      result:
        "Vazifa bajarilish vaqti 30% qisqardi. 50+ jamoa foydalanmoqda.",
      screenshots: [
        { src: "/najot-talim.jpg", alt: "Kanban board" },
        { src: "/najot-talim.jpg", alt: "Vazifa detali" },
      ],
    },
  },
  {
    slug: "ai-assistant-bot",
    title: "AI Assistant Bot",
    description:
      "OpenAI GPT-4 asosida chat bot. Ko'p tilli qo'llab-quvvatlash.",
    tags: ["Python", "FastAPI", "OpenAI", "LangChain"],
    github: "https://github.com/ulugdev/ai-assistant",
    demo: "https://ai.ulugdev.uz",
    stars: 256,
    forks: 67,
    featured: true,
    size: "medium",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    caseStudy: {
      problem:
        "Kompaniya mijozlar xizmati uchun 24/7 javob beradigan yechim kerak edi.",
      solution:
        "GPT-4 va LangChain bilan maxsus promptlar. UZ, EN, RU tillarida. FastAPI orqali tez API.",
      result:
        "Mijozlar xizmati xarajatlari 60% kamaydi. O'rtacha javob vaqti 2 soniyadan kam.",
      demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    slug: "devconnect-social",
    title: "DevConnect Social",
    description:
      "Dasturchilar uchun ijtimoiy tarmoq. Portfolio va blog.",
    tags: ["Next.js", "GraphQL", "Supabase"],
    github: "https://github.com/ulugdev/devconnect",
    demo: "https://devconnect.ulugdev.uz",
    stars: 74,
    forks: 18,
    featured: false,
    size: "small",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    caseStudy: {
      problem:
        "Dasturchilar o'z portfoliolarini va loyihalarini bir joyda ko'rsatishni xohlardi.",
      solution:
        "LinkedIn uslubidagi profil, loyihalar galereyasi, blog. GraphQL API, Supabase auth va real-time.",
      result:
        "1000+ ro'yxatdan o'tgan dasturchi. Oylik 5000+ profil ko'rilishi.",
    },
  },
  {
    slug: "clouddeploy-cli",
    title: "CloudDeploy CLI",
    description:
      "Serverless deploy qilish CLI. AWS, Vercel integratsiyasi.",
    tags: ["Node.js", "TypeScript", "AWS SDK"],
    github: "https://github.com/ulugdev/clouddeploy",
    demo: null,
    stars: 312,
    forks: 45,
    featured: false,
    size: "small",
    gradient: "from-rose-500/20 via-pink-500/10 to-red-500/20",
    caseStudy: {
      problem:
        "Developerlarning deploy jarayoni uzoq va xatolarga moyil edi.",
      solution:
        "Bitta buyruq bilan AWS Lambda yoki Vercel ga deploy. Environment variables, rollback qo'llab-quvvatlash.",
      result:
        "Deploy vaqti 15 daqiqadan 2 daqiqaga tushdi. 2000+ yuklab olish.",
    },
  },
  {
    slug: "fintrack-dashboard",
    title: "FinTrack Dashboard",
    description:
      "Moliyaviy analitika. Real-time grafiklar va hisobotlar.",
    tags: ["React", "D3.js", "PostgreSQL"],
    github: "https://github.com/ulugdev/fintrack",
    demo: "https://fintrack.ulugdev.uz",
    stars: 156,
    forks: 38,
    featured: false,
    size: "small",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    caseStudy: {
      problem:
        "Kichik bizneslar o'z moliyasini vizual kuzatishni xohlardi.",
      solution:
        "D3.js bilan interaktiv grafiklar, xarajatlar/kirim by category. Export PDF/Excel. Real-time sync.",
      result:
        "300+ aktiv foydalanuvchi. O'rtacha 20% xarajatlar optimizatsiyasi.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
