'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Github, ExternalLink, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const typingTexts = [
  'Building SaaS',
  'Crafting Mobile Apps',
  'Designing Developer Systems',
  'Shipping AI Products',
];

const navItems = [
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export function HeroPremium() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const text = typingTexts[currentText];
        if (!isDeleting) {
          if (displayText.length < text.length) {
            setDisplayText(text.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentText((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 overflow-hidden relative bg-background"
    >
      {/* Magenta Orb Grid Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: isMounted ? backgroundY : 0,
          background: 'hsl(var(--background))',
          backgroundImage: `
            linear-gradient(to right, hsl(var(--muted-foreground) / 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.14) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, hsl(var(--secondary) / 0.18) 0%, hsl(var(--primary) / 0.08) 40%, transparent 70%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 100% 100%',
        }}
      />
      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={isMounted ? { y: contentY, opacity: contentOpacity } : { y: 0, opacity: 1 }}
      >
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="glass rounded-full px-2 py-2 flex items-center gap-1 border border-border/70">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-xs sm:text-sm command-text text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Terminal Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm command-text text-primary">
              <Code2 size={14} />$ whoami
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Software Engineer
                <br />
                <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Building Scale
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Full Stack Engineer specializing in React, React Native, Next.js, TypeScript,
                Golang, AI-powered apps, and scalable product engineering.
              </p>
            </div>

            {/* Typing animation */}
            <div className="flex items-center gap-2 text-xl command-text">
              <span className="text-accent">{'>'}</span>
              <span className="text-foreground">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-accent"
              >
                |
              </motion.span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="btn-primary gap-2 group relative shadow-xl shadow-primary/30 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ExternalLink
                      size={18}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="btn-primary-outline gap-2 group relative shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Github size={18} />
                    Contact Me
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground command-text">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground command-text">Projects Built</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground command-text">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Code Editor UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main editor window */}
            <div className="glass rounded-xl overflow-hidden glow-primary">
              {/* Header */}
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                </div>
                <div className="ml-3 text-xs text-muted-foreground command-text flex-1">
                  portfolio.tsx
                </div>
              </div>

              {/* Code content */}
              <div className="bg-card/50 p-6 space-y-3 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-accent"
                >
                  {'export const Portfolio = () => {'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="ml-4 text-muted-foreground"
                >
                  <span className="text-secondary">return</span> {`(`}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="ml-8 text-muted-foreground"
                >
                  <span className="text-accent">{'<Section'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="ml-12 text-primary"
                >
                  title<span className="text-muted-foreground">={`"Elite Dev"`}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="ml-8 text-accent"
                >
                  {'/>'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="ml-4 text-muted-foreground"
                >
                  {')'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-accent"
                >
                  {'}'}
                </motion.div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 glass rounded-lg p-4 max-w-xs"
            >
              <div className="text-xs text-muted-foreground command-text mb-2">$ npm run dev</div>
              <div className="text-primary text-xs font-mono">✓ Ready at localhost:3000</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>

      {/* Smooth transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-b from-transparent via-background/80 to-background" />
    </section>
  );
}
