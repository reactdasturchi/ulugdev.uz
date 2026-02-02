import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/projects-data";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  Trophy,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Loyiha topilmadi" };
  return {
    title: `${project.title} — Case Study | ulugdev.uz`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const caseStudy = project.caseStudy;

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Back link */}
      <div className="border-b border-zinc-800/50 bg-zinc-950/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-32 py-6">
          <Button variant="ghost" size="sm" asChild className="text-zinc-400 hover:text-white">
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Barcha loyihalar
            </Link>
          </Button>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-400 mb-6 max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </header>

        {caseStudy ? (
          <>
            {/* Problem → Solution → Result */}
            <div className="space-y-12 sm:space-y-16 mb-16">
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Muammo
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </section>

              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Yechim
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </section>

              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Natija
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {caseStudy.result}
                </p>
              </section>
            </div>

            {/* Screenshots */}
            {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
              <section className="mb-16">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {caseStudy.screenshots.map((img) => (
                    <div
                      key={img.alt}
                      className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Demo Video */}
            {caseStudy.demoVideoUrl && (
              <section className="mb-16">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Video className="h-6 w-6 text-violet-400" />
                  Demo video
                </h2>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                  <iframe
                    src={caseStudy.demoVideoUrl}
                    title="Demo video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            )}
          </>
        ) : (
          <p className="text-zinc-500 py-8">
            Ushbu loyiha uchun case study hali qo'shilmagan.
          </p>
        )}

        {/* CTA */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 text-center">
          <p className="text-zinc-400 mb-4">
            O'xshash loyiha yoki boshqa xizmat kerakmi?
          </p>
          <Button asChild size="lg" className="rounded-xl bg-white text-black hover:bg-zinc-200">
            <Link href="/#contact">Bog'lanish</Link>
          </Button>
        </div>
      </article>
    </main>
  );
}
