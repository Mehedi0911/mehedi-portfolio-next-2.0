'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Cpu, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    color: 'from-primary to-secondary',
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Swift', 'Kotlin'],
    color: 'from-accent to-primary',
  },
  {
    name: 'Backend',
    icon: Cloud,
    skills: ['Node.js', 'Express', 'Golang', 'Prisma', 'GraphQL'],
    color: 'from-primary to-accent',
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Redis'],
    color: 'from-secondary to-primary',
  },
  {
    name: 'DevOps',
    icon: Cloud,
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Linux'],
    color: 'from-secondary to-accent',
  },
  {
    name: 'AI/ML',
    icon: Cpu,
    skills: ['OpenAI APIs', 'Prompt Engineering', 'LangChain', 'TensorFlow'],
    color: 'from-primary to-secondary',
  },
];

const rotatingMainSkills = ['React', 'Next.js', 'TypeScript', 'Golang', 'React Native', 'OpenAI'];

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
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative overflow-hidden isolate">
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
          <h2 className="text-5xl font-bold text-foreground mb-4">Technical Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive stack of technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} variants={itemVariants} className="group">
                <div className="glass rounded-xl p-6 h-full hover:border-white/20 transition-all duration-300 glow-primary">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <div className="text-xs text-muted-foreground command-text">
                        {`$ init ${category.name.toLowerCase()}`}
                      </div>
                    </div>
                  </div>

                  {/* Terminal separator */}
                  <div className="border-t border-white/5 my-4" />

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group/skill"
                      >
                        <span className="text-primary group-hover/skill:text-accent transition-colors">
                          {'>'}
                        </span>
                        <span className="group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom glowing line */}
                  <motion.div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                { label: 'Languages', value: '8+' },
                { label: 'Frameworks', value: '12+' },
                { label: 'Tools', value: '20+' },
                { label: 'Expertise', value: 'Expert' },
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
