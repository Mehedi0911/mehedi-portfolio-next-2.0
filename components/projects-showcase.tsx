'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

const projects = [
  {
    id: 1,
    title: 'Martzlab Ecommerce CMS',
    description:
      'Full ecommerce platform with storefront and admin dashboard. Built product, inventory, category, and CMS modules with advanced search, filtering, and analytics dashboards on a scalable frontend architecture.',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Firebase', 'MUI', 'React Hook Form'],
    impact: 'Storefront + Admin CMS',
    role: 'Full Stack Developer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Hello Doorstep',
    description:
      'Property-focused garbage collection app connecting residents, property managers, and pickup workflows. Built scheduling, service requests, and status tracking for reliable on-demand waste management.',
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    tech: ['React Native', 'TypeScript', 'Expo', 'REST APIs', 'Firebase'],
    impact: 'Property + Pickup Ops',
    role: 'Mobile App Developer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 3,
    title: 'University Management System',
    description:
      'Multi-role university platform with dedicated dashboards for admins, faculty, and students. Implemented role-based access, academic records, enrollment flows, and centralized administration tools.',
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    tech: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
    impact: 'Admin · Faculty · Student',
    role: 'Full Stack Developer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
];

const toProjectSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function ProjectsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <Code2 size={16} className="text-accent" />
            <span className="text-sm command-text text-accent">$ ls -la projects/</span>
          </div>
          <SectionHeading index="02">Featured Projects</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production applications spanning ecommerce, property services, education platforms, and
            scalable web systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="glass rounded-xl overflow-hidden h-full flex flex-col glow-primary hover:border-white/20 transition-all duration-300">
                {/* Project Image Area */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  {/* Terminal header overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    <Code2 size={48} className="text-foreground" />
                  </div>

                  {/* Animated grid */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & description */}
                  <div className="mb-4 flex-1 space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary/65 command-text">
                      // project.manifest
                    </p>
                    <div className="space-y-1">
                      <p className="text-[11px] command-text">
                        <span className="text-accent">import</span>{' '}
                        <span className="text-primary">Project</span>
                        <span className="text-foreground/45"> from </span>
                        <span className="text-foreground/75">
                          &apos;./{toProjectSlug(project.title)}&apos;
                        </span>
                      </p>
                      <h3 className="font-mono text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                    </div>
                    <div className="rounded-md border border-primary/15 bg-black/30 px-3 py-2.5">
                      <p className="mb-1.5 text-[10px] text-accent/80 command-text">/**</p>
                      <p className="font-mono text-sm leading-relaxed text-foreground/88">
                        {project.description}
                      </p>
                      <p className="mt-1.5 text-right text-[10px] text-accent/80 command-text">
                        */
                      </p>
                    </div>
                  </div>

                  {/* Impact & Role */}
                  <div className="space-y-3 mb-4 pb-4 border-t border-white/5 pt-3">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="shrink-0 text-muted-foreground command-text">Scope:</span>
                      <span className="inline-flex max-w-[70%] items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-right text-[11px] font-medium text-accent">
                        {project.impact}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="shrink-0 text-muted-foreground command-text">Role:</span>
                      <span className="inline-flex max-w-[70%] items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-right text-[11px] font-medium text-primary command-text">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4 space-y-2">
                    <div className="text-xs text-muted-foreground command-text">$ stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-card/60 border border-border/70 text-muted-foreground rounded hover:border-primary/50 hover:text-primary transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={`${project.id}-${link.href}-${index}`}
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 border-border/70 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all"
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <Icon size={16} />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
