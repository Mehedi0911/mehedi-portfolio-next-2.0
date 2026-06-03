'use client';

import { Code2, Database, Zap, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Palette,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'GSAP'],
    color: 'text-primary',
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'GraphQL', 'REST APIs'],
    color: 'text-accent',
  },
  {
    name: 'Tools & DevOps',
    icon: Code2,
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Webpack'],
    color: 'text-secondary',
  },
  {
    name: 'Performance',
    icon: Zap,
    skills: ['Web Vitals', 'SEO', 'Optimization', 'Accessibility', 'Testing', 'Monitoring'],
    color: 'text-primary',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <span className="code-bracket">{`</`}</span>
            <span className="command-text text-sm uppercase">skills</span>
            <span className="code-bracket">{`>`}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and practices for building exceptional
            digital products
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.name}
                className="bg-card border-border hover:border-accent/50 transition-colors duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-card border border-border group-hover:border-accent transition-colors ${category.color}`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-medium command-text bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 text-primary rounded-full hover:border-primary hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Terminal box - stats */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6 command-text">
          <div className="flex items-center gap-2 text-accent mb-4">
            <span>$</span>
            <span>whoami</span>
            <span className="animate-pulse">_</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
