'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Cloud, Wrench, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/section-heading';

const skillCategories = [
  {
    name: 'Frontend',
    module: 'frontend.mod.ts',
    hex: '0xA7F2',
    icon: Code2,
    skills: [
      'React Native',
      'Expo',
      'TypeScript',
      'Android Studio',
      'Xcode',
      'Next.js',
      'Redux Toolkit',
      'Zustand',
    ],
    color: 'from-primary to-secondary',
  },
  {
    name: 'Backend',
    module: 'backend.mod.ts',
    hex: '0xB3C1',
    icon: Cloud,
    skills: ['Golang', 'Node.js', 'Express.js', 'NestJS', 'Prisma', 'Redis'],
    color: 'from-primary to-accent',
  },
  {
    name: 'Databases',
    module: 'data.mod.ts',
    hex: '0xD8E4',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
    color: 'from-secondary to-primary',
  },
  {
    name: 'Tools',
    module: 'toolchain.mod.ts',
    hex: '0xF2A9',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'REST APIs',
      'Postman',
      'Agile',
      'Play Store Deployment',
      'App Store Deployment',
      'Expo Build',
      'TestFlight',
    ],
    color: 'from-secondary to-accent',
  },
];

const rotatingMainSkills = [
  'React Native',
  'TypeScript',
  'Next.js',
  'Golang',
  'Redux Toolkit',
  'Expo',
];

const threadWaveLow = (offset: number) =>
  `M0 ${8 + offset} Q12 ${3 + offset} 24 ${8 + offset} Q36 ${13 + offset} 48 ${8 + offset}`;
const threadWaveHigh = (offset: number) =>
  `M0 ${8 + offset} Q12 ${13 + offset} 24 ${8 + offset} Q36 ${3 + offset} 48 ${8 + offset}`;

const threadLayers = [
  { offset: 0, width: 1.65, opacity: 1, glow: true, dash: true },
  { offset: 0.9, width: 1.05, opacity: 0.55, glow: false, dash: false },
  { offset: -0.9, width: 0.8, opacity: 0.32, glow: false, dash: false },
] as const;

function ThreadWave({ id }: { id: string }) {
  const gradId = `thread-wave-${id}`;
  const glowId = `thread-glow-${id}`;

  return (
    <div
      className="relative flex h-5 w-[3.35rem] shrink-0 items-center justify-center overflow-hidden rounded-md border border-primary/30 bg-gradient-to-br from-primary/15 via-background/20 to-accent/15 px-1 shadow-[0_0_18px_-6px_hsl(var(--primary)/0.55)]"
      aria-hidden
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.28),transparent_72%)]"
        animate={{ opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 w-5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        initial={{ left: '-25%' }}
        animate={{ left: ['-25%', '115%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg
        viewBox="0 0 48 16"
        className="relative z-[1] h-4 w-full overflow-visible"
        role="presentation"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="70%" stopColor="hsl(var(--secondary))" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <filter id={glowId} x="-25%" y="-100%" width="150%" height="300%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {threadLayers.map((thread, index) => (
          <motion.path
            key={index}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={thread.width}
            strokeLinecap="round"
            strokeDasharray={thread.dash ? '3 6' : undefined}
            opacity={thread.opacity}
            filter={thread.glow ? `url(#${glowId})` : undefined}
            animate={{
              d: [
                threadWaveLow(thread.offset),
                threadWaveHigh(thread.offset),
                threadWaveLow(thread.offset),
              ],
              ...(thread.dash ? { strokeDashoffset: [0, -24] } : {}),
            }}
            transition={{
              d: {
                duration: 2.15 + index * 0.28,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              },
              strokeDashoffset: {
                duration: 1.05,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />
        ))}

        <motion.circle
          r={1.5}
          fill="hsl(var(--accent))"
          animate={{
            cx: [4, 24, 44, 24, 4],
            cy: [8, 4.5, 8, 11.5, 8],
            opacity: [0.55, 1, 0.55, 1, 0.55],
          }}
          transition={{ duration: 2.35, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 4px hsl(var(--accent)))' }}
        />
      </svg>
    </div>
  );
}

export function SkillsDashboard() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundTextY = useTransform(scrollYProgress, [0, 1], [-50, 430]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % rotatingMainSkills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden isolate mt-12"
    >
      {/* Decorative rotating background skill text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        style={{ y: backgroundTextY }}
        className="pointer-events-none absolute left-1/2 -top-4 -translate-x-1/2 text-center -z-10"
      >
        <motion.span
          animate={{ opacity: [0.12, 0.24, 0.12] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative inline-block w-[min(96vw,1160px)] h-[clamp(6rem,19vw,14rem)] select-none whitespace-nowrap font-mono"
        >
          <svg
            viewBox="0 0 1000 220"
            className="w-full h-full overflow-visible"
            role="presentation"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="skills-stroke-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.9)" />
                <stop offset="50%" stopColor="hsl(var(--accent) / 0.9)" />
                <stop offset="100%" stopColor="hsl(var(--secondary) / 0.9)" />
              </linearGradient>
              <filter id="skills-stroke-glow" x="-20%" y="-50%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <AnimatePresence mode="wait">
              <motion.text
                key={rotatingMainSkills[activeSkillIndex]}
                x="500"
                y="150"
                textAnchor="middle"
                fill="none"
                stroke="url(#skills-stroke-gradient)"
                strokeWidth="3.2"
                filter="url(#skills-stroke-glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                style={{
                  fontSize: '190px',
                  fontWeight: 900,
                  letterSpacing: '0.015em',
                  fontFamily:
                    '"JetBrains Mono", "Fira Code", "Cascadia Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
              >
                {rotatingMainSkills[activeSkillIndex]}
              </motion.text>
            </AnimatePresence>
          </svg>
        </motion.span>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Zap size={16} className="text-primary" />
            <span className="text-sm command-text text-primary">$ stack --show all</span>
          </div>
          <SectionHeading index="01">Technical Toolkit</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Frontend, backend, database, and deployment tools for production mobile and web
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isLastCard = index === skillCategories.length - 1;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className={`group w-full max-w-sm ${isLastCard ? 'md:max-w-sm lg:col-start-2' : ''}`}
              >
                <div className="glass glow-primary relative h-full overflow-hidden rounded-xl border-primary/20 transition-all duration-300 hover:border-white/20 group-hover:shadow-[0_0_28px_-8px_hsl(var(--primary)/0.35)]">
                  {/* Corner brackets */}
                  <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-primary/50" />
                  <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-primary/50" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-accent/40" />
                  <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-accent/40" />

                  {/* Grid texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  />

                  {/* Top accent */}
                  <div
                    className={`h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent`}
                  />

                  {/* Module link bar */}
                  <div className="flex items-center gap-3 border-b border-primary/15 bg-black/40 px-3 py-2">
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-sm border border-primary/35 bg-primary/10 px-1.5 py-0.5 text-[10px] font-mono tracking-wider text-primary command-text">
                        {category.hex}
                      </span>
                      <ThreadWave id={category.name} />
                    </div>
                    <span className="min-w-0 flex-1 truncate text-[11px] text-muted-foreground command-text">
                      ~/stack/{category.module}
                    </span>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_hsl(var(--accent))]"
                        animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.15, 0.9] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <span className="text-[10px] text-accent/90 command-text">link::active</span>
                    </div>
                  </div>

                  <div className="relative p-5">
                    {/* Module header */}
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-gradient-to-br ${category.color} shadow-inner`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 command-text">
                          export module
                        </p>
                        <h3 className="truncate font-mono text-base font-semibold text-foreground">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-3 border-l-2 border-primary/40 pl-3">
                      <p className="text-[11px] command-text">
                        <span className="text-accent">const</span>{' '}
                        <span className="text-primary">stack</span>
                        <span className="text-foreground/85"> = [</span>
                      </p>
                    </div>

                    {/* Skills */}
                    <ul className="space-y-1.5 font-mono text-sm">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-center gap-2.5 rounded px-1.5 py-1 text-foreground/90 transition-colors hover:bg-primary/10 hover:text-foreground"
                        >
                          <span className="w-5 shrink-0 text-right text-[10px] tabular-nums text-primary/60">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-accent">&quot;</span>
                          <span className="truncate font-medium text-foreground">{skill}</span>
                          <span className="text-accent">
                            &quot;{idx < category.skills.length - 1 ? ',' : ''}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <p className="mt-3 text-[11px] command-text">
                      <span className="text-foreground/85">];</span>
                      <span className="ml-2 text-primary/75">// loaded</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass rounded-xl p-6 border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground command-text">$ system status</div>
              <div className="text-foreground font-semibold">All systems operational</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Experience', value: '4+' },
                { label: 'Platforms', value: 'iOS/Android' },
                { label: 'Stores', value: 'Play/App' },
                { label: 'Languages', value: '2' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
