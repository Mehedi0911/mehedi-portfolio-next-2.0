'use client';

import { motion } from 'framer-motion';
import { Code2, GitBranch } from 'lucide-react';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';

const noiseDotLayers = [
  {
    color: 'rgba(139, 92, 246, 0.34)',
    size: '20px 20px',
    position: '0 0',
    duration: 2.4,
    delay: 0,
  },
  {
    color: 'rgba(59, 130, 246, 0.3)',
    size: '30px 30px',
    position: '10px 10px',
    duration: 3.2,
    delay: 0.6,
  },
  {
    color: 'rgba(236, 72, 153, 0.27)',
    size: '25px 25px',
    position: '15px 5px',
    duration: 2.8,
    delay: 1.2,
  },
];

const experiences = [
  {
    id: 1,
    role: 'Mobile App Developer L3',
    company: 'ShareViral',
    logo: '/shareviral.png',
    duration: 'May 2026 – Present',
    achievements: [
      'Developed and maintained production React Native apps (Android & iOS) with 99%+ crash-free sessions',
      'Built reusable TypeScript component system, reducing feature development time by ~30%',
      'Integrated multiple backend services and third-party APIs, reducing API failure handling issues by ~25%',
      'Collaborated with product and backend teams in agile sprint cycles (1–2 weeks delivery cadence)',
      'Improved app performance through rendering optimization, reducing screen load time by ~20–35% in key modules',
    ],
    tech: ['React Native', 'TypeScript', 'iOS', 'Android', 'REST APIs', 'Supabase', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Codinism',
    logo: '/codinism.avif',
    duration: 'Dec 2022 – April 2026',
    achievements: [
      'Built and maintained production-grade mobile and web apps using React Native, React, Next.js, and TypeScript',
      'Contributed to education-platform-scale apps with consistent feature releases and maintenance cycles',
      'Reduced UI lag and unnecessary re-renders using Redux Toolkit + Zustand optimization patterns',
      'Designed scalable API integration layers, reducing redundant network calls by ~25–40%',
      'Delivered full release pipelines to Google Play Store and Apple App Store',
      'Worked cross-functionally (design, backend, QA) with weekly/monthly release cadence',
    ],
    tech: ['React Native', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Zustand'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Ajax Business Solutions',
    logo: '/ajax.png',
    duration: 'Aug 2021 – Sep 2022',
    achievements: [
      'Developed enterprise-grade React dashboards for internal business operations',
      'Built reusable UI component system, reducing development duplication by ~30%',
      'Implemented advanced table systems (search, filter, sort, pagination) for large datasets',
      'Improved frontend performance through code-splitting and memoization, reducing page load time by ~20%',
      'Integrated REST APIs with structured error handling, reducing frontend API-related production issues',
    ],
    tech: ['React', 'TypeScript', 'REST APIs', 'Redux'],
  },
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-x-clip bg-black px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Dark Noise Colored Background */}
      <div className="absolute inset-0 z-0 bg-black" />
      {noiseDotLayers.map((layer) => (
        <motion.div
          key={layer.position}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${layer.color} 1px, transparent 0)`,
            backgroundSize: layer.size,
            backgroundPosition: layer.position,
          }}
          animate={{ opacity: [0.45, 1, 0.5] }}
          transition={{
            duration: layer.duration,
            delay: layer.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-0 z-0 bg-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-4xl lg:max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 sm:mb-4 sm:px-4 sm:py-2">
            <GitBranch size={14} className="shrink-0 text-accent sm:h-4 sm:w-4" />
            <span className="text-xs command-text text-accent sm:text-sm">$ git log --oneline</span>
          </div>
          <SectionHeading index="03">Professional Journey</SectionHeading>
          <p className="mx-auto max-w-2xl px-1 text-sm text-muted-foreground sm:text-base">
            Cross-platform mobile and full-stack engineering roles across product, education, and
            enterprise teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 top-0 left-4 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary sm:left-5 sm:w-0.5 lg:left-1/2 lg:w-1"
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={`relative pl-11 sm:pl-14 lg:flex lg:items-start lg:gap-10 lg:pl-0 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 hsl(var(--primary) / 0.4)',
                      '0 0 0 10px hsl(var(--primary) / 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-4 top-7 z-10 h-4 w-4 shrink-0 rounded-full border-2 border-background bg-primary sm:left-5 sm:top-8 sm:h-5 sm:w-5 lg:left-1/2 lg:top-9 lg:h-6 lg:w-6 lg:-translate-x-1/2"
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                </motion.div>

                <div className="min-w-0 w-full lg:flex-1">
                  <div className="glass glow-primary rounded-xl p-4 sm:p-5 lg:p-6">
                    <div className="mb-3 flex min-w-0 items-center gap-2 border-b border-border/40 pb-3 sm:mb-4 sm:pb-4">
                      <Code2 size={14} className="shrink-0 text-primary sm:h-4 sm:w-4" />
                      <p className="min-w-0 break-words text-[10px] text-muted-foreground command-text sm:text-xs">
                        $ git commit -m &quot;{exp.role}&quot;
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border/40 bg-background/60 p-1.5 sm:h-11 sm:w-11">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            sizes="(max-width: 640px) 40px, 44px"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg lg:text-xl">
                            {exp.role}
                          </h3>
                          <p className="text-xs text-primary command-text sm:text-sm">
                            {exp.company}
                          </p>
                          <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[10px] text-muted-foreground command-text sm:text-xs">
                          achievements:
                        </p>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                            >
                              <span className="mt-0.5 shrink-0 text-accent">›</span>
                              <span className="min-w-0 break-words">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 sm:gap-2 sm:pt-4">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary command-text sm:px-2 sm:py-1 sm:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden min-w-0 lg:block lg:flex-1" aria-hidden />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
