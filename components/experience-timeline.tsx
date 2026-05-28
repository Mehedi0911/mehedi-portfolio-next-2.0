'use client';

import { motion } from 'framer-motion';
import { Code2, GitBranch } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Engineer',
    company: 'Tech Startup',
    duration: '2023 - Present',
    achievements: [
      'Led migration of monolith to microservices architecture',
      'Increased platform performance by 60% through optimization',
      'Built AI-powered features serving 100K+ users',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'OpenAI'],
  },
  {
    id: 2,
    role: 'Full Stack Engineer',
    company: 'Digital Agency',
    duration: '2021 - 2023',
    achievements: [
      'Developed 15+ client projects from concept to production',
      'Implemented real-time features using WebSocket',
      'Mentored 3 junior developers',
    ],
    tech: ['Next.js', 'GraphQL', 'Firebase', 'React Native'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'E-commerce Platform',
    duration: '2020 - 2021',
    achievements: [
      'Built responsive interfaces for 50K+ daily users',
      'Improved Core Web Vitals by 45%',
      'Led design system implementation',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Redux'],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
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
          <h2 className="text-5xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career growth, technical achievements, and impactful projects.
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
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-primary command-text text-sm">{exp.company}</p>
                        <p className="text-muted-foreground text-xs mt-1">{exp.duration}</p>
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
