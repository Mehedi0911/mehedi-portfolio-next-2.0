'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack marketplace with real-time inventory management and payment processing',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    color: 'from-primary/20 to-secondary/20',
    accentColor: 'text-primary',
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'WebSocket-powered messaging platform with user authentication and file sharing',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    color: 'from-secondary/20 to-accent/20',
    accentColor: 'text-secondary',
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard with real-time data visualization and custom reporting',
    tags: ['React', 'D3.js', 'GraphQL', 'AWS'],
    color: 'from-accent/20 to-primary/20',
    accentColor: 'text-accent',
  },
  {
    id: 4,
    title: 'Mobile App for iOS',
    description: 'Native iOS application with offline capabilities and cloud synchronization',
    tags: ['Swift', 'Firebase', 'CoreData', 'SwiftUI'],
    color: 'from-primary/20 to-accent/20',
    accentColor: 'text-primary',
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Headless CMS with API-first architecture and multi-language support',
    tags: ['Next.js', 'Headless CMS', 'TypeScript', 'REST API'],
    color: 'from-secondary/20 to-primary/20',
    accentColor: 'text-secondary',
  },
  {
    id: 6,
    title: 'AI-Powered Search Engine',
    description: 'Intelligent search platform with machine learning recommendations',
    tags: ['Python', 'ML', 'ElasticSearch', 'FastAPI'],
    color: 'from-primary/20 to-secondary/20',
    accentColor: 'text-primary',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.05)_25%,hsl(var(--primary)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.05)_75%,hsl(var(--primary)/0.05))] bg-size-[40px_40px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <span className="code-bracket">{`<`}</span>
            <span className="command-text text-sm uppercase">projects</span>
            <span className="code-bracket">{`>`}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked projects showcasing my expertise in full-stack development and problem-solving
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Project header background */}
              <div className={`h-2 bg-linear-to-r ${project.color}`} />

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium command-text bg-linear-to-r from-primary/25 to-primary/15 hover:from-primary/35 hover:to-primary/25 text-primary border border-primary/40 hover:border-primary/60 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project code snippet */}
                <div className="bg-linear-to-r from-primary/10 to-primary/5 border border-primary/30 rounded px-3 py-2 command-text text-xs text-muted-foreground group-hover:border-primary/50 group-hover:from-primary/15 group-hover:to-primary/10 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20">
                  <span className="text-primary">→</span> <span>Learn more</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal footer */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6 command-text text-center">
          <div className="flex items-center justify-center gap-2 text-accent mb-3">
            <span>$</span>
            <span>ls projects/</span>
            <span className="animate-pulse">_</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Interested in discussing how I can help with your project?
          </p>
          <div className="mt-4 text-accent font-medium">
            {'>'} Contact me
          </div>
        </div>
      </div>
    </section>
  );
}
