'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Cpu, Zap } from 'lucide-react';

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

export function SkillsDashboard() {
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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
              >
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
                        <span className="group-hover/skill:text-foreground transition-colors">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom glowing line */}
                  <motion.div
                    className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
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
