'use client';

import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.08)_1px,transparent_1px)] bg-size-[40px_40px] -z-10" />

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Terminal header */}
            <div className="flex items-center gap-2 text-muted-foreground command-text">
              <Terminal size={16} />
              <span className="text-xs uppercase tracking-widest">~/portfolio</span>
            </div>

            {/* Main heading with code styling */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-2 text-accent">
                <span className="code-bracket">{`<`}</span>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">Developer</h1>
              </div>
              <div className="flex items-baseline gap-2 text-foreground">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">Portfolio</h1>
                <span className="code-bracket">{`/>`}</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting elegant solutions through code. Full-stack developer passionate about
              building performant, accessible web experiences.
            </p>

            {/* Code snippet style */}
            <div className="bg-card border border-border rounded-lg p-4 command-text">
              <div className="flex items-center gap-2 text-accent">
                <span>$</span>
                <span>npm run create</span>
                <span className="animate-pulse">_</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                <span className="text-accent">&gt;</span> amazing projects
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="btn-primary gap-2 group relative shadow-xl shadow-primary/30"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
              </Button>
              <Button
                size="lg"
                className="btn-primary-outline gap-2 group relative shadow-lg shadow-primary/20"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 size={18} />
                  Get In Touch
                </span>
              </Button>
            </div>
          </div>

          {/* Right Visual - Code editor mockup */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Code editor window */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl glow-accent">
                {/* Editor header */}
                <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="command-text text-xs">portfolio.tsx</span>
                </div>

                {/* Editor content */}
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="text-accent">
                    <span className="text-muted-foreground">1</span>
                    <span className="ml-4">{'const'}</span> portfolio{' '}
                    <span className="text-accent">=</span> {'{'}
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-accent">2</span>
                    <span className="ml-4 text-foreground">
                      skills: {`['React', 'Next.js', 'TypeScript']`}
                    </span>
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-accent">3</span>
                    <span className="ml-4 text-foreground">
                      projects: <span className="text-accent">5+</span>
                    </span>
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-accent">4</span>
                    <span className="ml-4 text-foreground">
                      passion: <span className="text-secondary">'endless'</span>
                    </span>
                  </div>
                  <div className="text-accent">
                    <span className="text-muted-foreground">5</span>
                    <span className="ml-4">{'}'};</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent lines */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
