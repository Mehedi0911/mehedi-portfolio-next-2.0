'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Github, Linkedin, ExternalLink, ArrowDown, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/social-links';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef, useMemo } from 'react';

const typingTexts = [
  'Building React Native Apps',
  'Shipping to App Store & Play Store',
  'Crafting Scalable Frontends',
  'Integrating APIs & Backend Services',
];

const navItems = [
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const pickRandomIndices = (total: number, min: number, max: number) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const pool = Array.from({ length: total }, (_, i) => i);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return new Set(pool.slice(0, count));
};

export function HeroPremium() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeVerticalBatch, setActiveVerticalBatch] = useState<Set<number>>(new Set());
  const [activeHorizontalBatch, setActiveHorizontalBatch] = useState<Set<number>>(new Set());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bottomBlur = useTransform(scrollYProgress, [0, 0.2, 0.55, 1], [0, 5, 14, 24]);
  const bottomBlurFilter = useTransform(bottomBlur, (value) => `blur(${value}px)`);
  const bottomScrimOpacity = useTransform(scrollYProgress, [0, 0.12, 0.45, 1], [0, 0.35, 0.7, 1]);
  const verticalPulseLines = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        position: ((i * 17 + 11) % 100) + '%',
        delay: ((i * 29) % 23) / 10,
        duration: 1.8 + ((i * 13) % 11) / 10,
      })),
    [],
  );
  const horizontalPulseLines = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        position: ((i * 23 + 7) % 100) + '%',
        delay: ((i * 31) % 19) / 10,
        duration: 2 + ((i * 7) % 12) / 10,
      })),
    [],
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const runBatch = () => {
      setActiveVerticalBatch(pickRandomIndices(verticalPulseLines.length, 3, 7));
      setActiveHorizontalBatch(pickRandomIndices(horizontalPulseLines.length, 2, 5));
    };

    runBatch();
    const interval = setInterval(runBatch, 1100);

    return () => clearInterval(interval);
  }, [verticalPulseLines.length, horizontalPulseLines.length]);

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
          backgroundImage:
            'radial-gradient(circle at 50% 60%, hsl(var(--secondary) / 0.18) 0%, hsl(var(--primary) / 0.08) 40%, transparent 70%)',
          backgroundSize: '100% 100%',
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: isMounted ? backgroundY : 0,
          backgroundSize: '100% 100%',
        }}
        animate={{
          opacity: [0, 0.7, 0],
          backgroundImage: [
            'radial-gradient(circle at 50% 60%, hsl(var(--primary) / 0.144) 0%, hsl(var(--accent) / 0.084) 42%, transparent 72%)',
            'radial-gradient(circle at 58% 52%, hsl(var(--primary) / 0.18) 0%, hsl(var(--accent) / 0.096) 42%, transparent 72%)',
            'radial-gradient(circle at 43% 66%, hsl(var(--primary) / 0.132) 0%, hsl(var(--accent) / 0.072) 42%, transparent 72%)',
            'radial-gradient(circle at 50% 60%, hsl(var(--primary) / 0.144) 0%, hsl(var(--accent) / 0.084) 42%, transparent 72%)',
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: isMounted ? backgroundY : 0,
          backgroundImage:
            'linear-gradient(to right, hsl(var(--muted-foreground) / 0.11) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.11) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {verticalPulseLines.map((line, index) => (
          <motion.div
            key={`v-line-${line.position}-${index}`}
            className="absolute top-0 bottom-0 w-px bg-muted-foreground/35"
            style={{ left: line.position }}
            animate={{ opacity: activeVerticalBatch.has(index) ? 0.42 : 0.06 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
        {horizontalPulseLines.map((line, index) => (
          <motion.div
            key={`h-line-${line.position}-${index}`}
            className="absolute left-0 right-0 h-px bg-muted-foreground/30"
            style={{ top: line.position }}
            animate={{ opacity: activeHorizontalBatch.has(index) ? 0.34 : 0.05 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <motion.div
        className="container mx-auto px-4 relative z-10 will-change-transform"
        style={isMounted ? { y: contentY } : { y: 0 }}
      >
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-0 right-4 sm:right-6 lg:right-8 z-20"
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
            <div className="space-y-8">
              {/* Terminal label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm command-text text-primary">
                <Code2 size={14} />$ whoami
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="space-y-2 leading-tight">
                  <span className="block text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
                    Mehedi Mosharrof
                  </span>
                  <span className="block font-mono text-2xl font-semibold uppercase tracking-[0.12em] text-primary sm:text-3xl lg:text-4xl">
                    <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                      Software Engineer
                    </span>
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Mobile App Developer with 4+ years of experience building production-grade mobile
                  and web applications using React Native, TypeScript, React, and Next.js. Strong
                  focus on scalable frontend architecture, performance optimization, and
                  product-driven development — expanding backend expertise with Golang, PostgreSQL,
                  and scalable API systems.
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
              <div className="flex flex-col gap-4 pt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="btn-primary gap-2 group relative shadow-xl shadow-primary/30 w-full sm:w-auto"
                      onClick={() => scrollToSection('projects')}
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
                      variant="ghost"
                      size="lg"
                      className="border-2 border-primary bg-transparent text-primary hover:bg-transparent hover:text-primary gap-2 group relative shadow-lg shadow-primary/20 w-full sm:w-auto"
                      onClick={() => scrollToSection('contact')}
                    >
                      <span className="relative z-10 flex items-center gap-2">Contact Me</span>
                    </Button>
                  </motion.div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground command-text">
                    $ social --connect
                  </span>
                  <motion.a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition-colors hover:border-primary/60 hover:bg-primary/20"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent transition-colors hover:border-accent/60 hover:bg-accent/20"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative z-20 pt-6"
            >
              <div className="glass rounded-xl border border-border/60 bg-card/50 backdrop-blur-md px-4 py-5 shadow-lg shadow-primary/5">
                <div className="grid grid-cols-3 gap-4 divide-x divide-border/50">
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-foreground/80 command-text mt-1">Years</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-foreground/80 command-text mt-1">Projects</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-secondary">10000+</div>
                    <div className="text-sm text-foreground/80 command-text mt-1">Users</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  resume.tsx
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
                  {'export const downloadResume = () => {'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="ml-4 text-muted-foreground"
                >
                  {'const link = document.createElement("a")'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="ml-4 text-muted-foreground"
                >
                  {"link.href = '/resume.pdf'"}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="ml-4 text-muted-foreground"
                >
                  {"link.download = 'Mehedi-Mosharrof-Resume.pdf'"}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="ml-4 text-muted-foreground"
                >
                  {'link.click()'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-accent"
                >
                  {'}'}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="pt-2"
                >
                  <Button
                    variant="outline"
                    asChild
                    className="inline-flex border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:text-primary command-text"
                  >
                    <a href="/Mehedi_Mosharrof_Resume.pdf" download="Mehedi_Mosharrof_Resume.pdf">
                      <Download size={16} className="mr-2" />
                      Download Resume
                    </a>
                  </Button>
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

      {/* Bottom-only scroll blur + fade (top of hero stays sharp) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[min(52%,420px)]"
        style={
          isMounted
            ? {
                opacity: bottomScrimOpacity,
                backdropFilter: bottomBlurFilter,
                WebkitBackdropFilter: bottomBlurFilter,
                maskImage:
                  'linear-gradient(to top, black 30%, rgba(0,0,0,0.65) 55%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to top, black 30%, rgba(0,0,0,0.65) 55%, transparent 100%)',
                background:
                  'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.75) 28%, transparent 100%)',
              }
            : { opacity: 0, backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)' }
        }
      />

      {/* Smooth transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-b from-transparent via-background/45 to-background" />
    </section>
  );
}
