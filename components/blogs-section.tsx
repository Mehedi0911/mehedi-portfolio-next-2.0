'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, Clock3, Binary } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

const blogs = [
  {
    id: 1,
    title: 'Ship Faster with Clean Architecture in Next.js',
    excerpt:
      'A practical system for scaling feature delivery without turning your frontend into a dependency maze.',
    date: 'Apr 10, 2026',
    readTime: '8 min read',
    tags: ['Next.js', 'Architecture', 'TypeScript'],
    command: 'npx create-next-app@latest --typescript',
  },
  {
    id: 2,
    title: 'Building Realtime UX Without Sacrificing Performance',
    excerpt:
      'How I design websocket-powered interfaces that stay responsive under production-level traffic.',
    date: 'Mar 28, 2026',
    readTime: '7 min read',
    tags: ['WebSocket', 'React', 'Performance'],
    command: 'pnpm add socket.io-client',
  },
  {
    id: 3,
    title: 'Designing Premium Developer Portfolios That Convert',
    excerpt:
      'A framework for crafting coding-focused personal sites that feel futuristic while staying conversion-driven.',
    date: 'Mar 04, 2026',
    readTime: '6 min read',
    tags: ['UI Engineering', 'Branding', 'Conversion'],
    command: 'pnpm dlx shadcn@latest add card button',
  },
  {
    id: 4,
    title: 'Production-Ready AI Features: From Prompt to Product',
    excerpt:
      'Patterns for integrating LLM workflows into real user journeys with clear guardrails and monitoring.',
    date: 'Feb 15, 2026',
    readTime: '10 min read',
    tags: ['AI Product', 'Observability', 'OpenAI'],
    command: 'pnpm add @vercel/ai zod',
  },
  {
    id: 5,
    title: 'Advanced Framer Motion Patterns for SaaS Interfaces',
    excerpt:
      'Micro-interactions, state transitions, and loading choreography that make modern UIs feel premium.',
    date: 'Jan 27, 2026',
    readTime: '9 min read',
    tags: ['Framer Motion', 'UX', 'SaaS'],
    command: 'pnpm add framer-motion',
  },
];

export function BlogsSection() {
  return (
    <section id="blogs" className="relative py-20 px-4">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.10),transparent_45%),radial-gradient(circle_at_80%_0%,hsl(var(--secondary)/0.12),transparent_35%)]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 mb-4">
            <Binary size={16} className="text-primary" />
            <span className="command-text text-primary">$ ls content/blogs/</span>
          </div>
          <SectionHeading index="04" className="mb-3">
            Technical Blogs
          </SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering notes on architecture, product development, and high-impact frontend
            systems.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full px-2 sm:px-12"
          aria-label="Blog posts carousel"
        >
          <CarouselContent className="items-stretch">
            {blogs.map((blog) => (
              <CarouselItem key={blog.id} className="flex md:basis-1/2 xl:basis-1/3">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="group flex h-full w-full flex-col rounded-2xl border border-primary/20 bg-linear-to-br from-card via-card to-primary/5 px-5 py-8 glass glow-primary"
                >
                  <div className="flex flex-1 flex-col">
                    <div className="terminal-header rounded-t-lg -mx-5 -mt-8 mb-6">
                      <span className="terminal-dot bg-card-foreground/20 shadow-sm shadow-card-foreground/25" />
                      <span className="terminal-dot bg-card-foreground/20 shadow-sm shadow-card-foreground/25" />
                      <span className="terminal-dot bg-card-foreground/20 shadow-sm shadow-card-foreground/25" />
                      <span className="ml-2 text-xs command-text text-muted-foreground">
                        ~/blog/{blog.id.toString().padStart(2, '0')}.md
                      </span>
                    </div>

                    <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground command-text">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} />
                        {blog.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-primary">
                        <Clock3 size={13} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold leading-tight mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {blog.excerpt}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="border border-primary/30 bg-background/55 text-muted-foreground backdrop-blur-xs transition-all duration-200 hover:border-primary/45 hover:bg-primary/10 hover:text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3 pt-2">
                    <div className="rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-xs command-text text-primary">
                      <span className="text-muted-foreground">$</span> {blog.command}
                    </div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-between rounded-md border border-border/80 bg-card/70 px-3 py-2 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
                    >
                      Read article
                      <ArrowUpRight size={16} className="text-primary" />
                    </button>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 border-primary/40 bg-background/80 text-primary hover:bg-primary/10" />
          <CarouselNext className="right-0 border-primary/40 bg-background/80 text-primary hover:bg-primary/10" />
        </Carousel>
      </div>
    </section>
  );
}
