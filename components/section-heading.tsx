'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  children: React.ReactNode;
  /** Optional zero-padded section index, e.g. "01" */
  index?: string;
  className?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const rule = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut', delay: 0.1 },
  },
};

export function SectionHeading({ children, index, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn('mb-4', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      <motion.h2 className="section-heading" variants={container}>
        {index ? (
          <motion.span className="section-heading-index" variants={item}>
            {index}
          </motion.span>
        ) : null}
        <motion.span className="section-heading-bracket" variants={item} aria-hidden>
          {'<'}
        </motion.span>
        <motion.span
          className="section-heading-text inline-block bg-gradient-to-b from-foreground from-[20%] via-foreground/70 to-transparent bg-clip-text text-transparent"
          variants={item}
        >
          {children}
        </motion.span>
        <motion.span className="section-heading-bracket" variants={item} aria-hidden>
          {'/>'}
        </motion.span>
      </motion.h2>
      <motion.div className="section-heading-rule origin-center" variants={rule} aria-hidden />
    </motion.div>
  );
}
