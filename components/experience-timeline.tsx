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
    <section id="experience" className="py-20 px-4 relative bg-black overflow-hidden">
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

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <GitBranch size={16} className="text-accent" />
            <span className="text-sm command-text text-accent">$ git log --oneline</span>
          </div>
          <SectionHeading index="03">Professional Journey</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cross-platform mobile and full-stack engineering roles across product, education, and
            enterprise teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-secondary"
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex items-start gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content - Left/Right based on index */}
                <div className="flex-1">
                  <div className="glass rounded-xl p-6 glow-primary">
                    {/* Terminal header simulation */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/40">
                      <Code2 size={16} className="text-primary" />
                      <div className="text-xs text-muted-foreground command-text">
                        $ git commit -m "{exp.role}"
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border/40 bg-background/60 p-1.5">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            sizes="44px"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary command-text text-sm">{exp.company}</p>
                          <p className="text-muted-foreground text-xs mt-1">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground command-text">achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5">›</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded command-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
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
                  className="w-6 h-6 rounded-full bg-primary border-2 border-background flex-shrink-0 relative z-10"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                </motion.div>

                {/* Empty space */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
