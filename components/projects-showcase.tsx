'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'AI Learning Platform',
    description: 'Full-stack SaaS platform for AI-powered language learning with real-time progress tracking and personalized curriculum.',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Stripe', 'Supabase'],
    impact: '50K+ active users',
    role: 'Founder & Lead Engineer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Mobile Commerce App',
    description: 'Cross-platform e-commerce mobile app with offline-first architecture, real-time inventory sync, and native performance.',
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    tech: ['React Native', 'Expo', 'Firebase', 'Redux', 'Node.js'],
    impact: '$5M revenue',
    role: 'Mobile Lead',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 3,
    title: 'Developer Dashboard',
    description: 'Real-time analytics dashboard for API monitoring, metrics visualization, and performance optimization insights.',
    image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    tech: ['React', 'GraphQL', 'PostgreSQL', 'Golang', 'WebSocket'],
    impact: '10K+ developers',
    role: 'Full Stack Engineer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 4,
    title: 'Infrastructure Automation',
    description: 'DevOps platform for automated deployment, scaling, and monitoring with multi-cloud support and disaster recovery.',
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    tech: ['Docker', 'Kubernetes', 'Go', 'AWS', 'Terraform'],
    impact: '99.99% uptime',
    role: 'Infrastructure Engineer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 5,
    title: 'Content AI Assistant',
    description: 'Intelligent content generation tool with multi-modal support, style transfer, and real-time collaboration features.',
    image: 'bg-gradient-to-br from-secondary/20 to-primary/20',
    tech: ['Next.js', 'OpenAI', 'Vercel AI', 'Prisma', 'Redis'],
    impact: '100K+ generations',
    role: 'AI Product Engineer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
  {
    id: 6,
    title: 'Real-time Communication',
    description: 'Enterprise messaging platform with E2E encryption, file sharing, and video conferencing built with WebRTC.',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    tech: ['Socket.io', 'WebRTC', 'Node.js', 'MongoDB', 'React'],
    impact: '1M+ messages/day',
    role: 'Backend Engineer',
    links: [
      { icon: Github, href: '#' },
      { icon: ExternalLink, href: '#' },
    ],
  },
];

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
    <section className="py-20 px-4">
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
          <h2 className="text-5xl font-bold text-foreground mb-4">Elite Project Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects representing my expertise in full-stack development, scalable architecture, and product engineering.
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
                <div
                  className={`h-48 ${project.image} relative overflow-hidden`}
                >
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
                      backgroundImage: 'linear-gradient(45deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>

                  {/* Impact & Role */}
                  <div className="space-y-2 mb-4 pb-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs pt-3">
                      <span className="text-muted-foreground command-text">Impact:</span>
                      <span className="text-primary font-semibold">{project.impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground command-text">Role:</span>
                      <span className="text-secondary">{project.role}</span>
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
                    {project.links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={link.href}
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
