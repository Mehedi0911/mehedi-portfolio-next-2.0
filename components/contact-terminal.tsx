'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';
import { SOCIAL_LINKS } from '@/lib/social-links';

export function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: SOCIAL_LINKS.github },
    { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { icon: Mail, label: 'Email', href: 'mailto:mehedi.mosh@gmail.com' },
    { icon: Phone, label: 'Phone', href: 'tel:+8801846249631' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <Terminal size={16} className="text-accent" />
            <span className="text-sm command-text text-accent">$ send-message --to="me"</span>
          </div>
          <SectionHeading index="05">Let&apos;s Build Together</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an idea? Want to collaborate? Let&apos;s connect and create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl overflow-hidden glow-primary">
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                </div>
                <div className="ml-3 text-xs text-muted-foreground command-text flex-1">
                  contact.ts
                </div>
              </div>

              {/* Form */}
              <div className="p-8 space-y-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <motion.div
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl"
                    >
                      ✓
                    </motion.div>
                    <div className="text-primary command-text">Message sent successfully!</div>
                    <div className="text-sm text-muted-foreground">
                      I&apos;ll get back to you as soon as possible.
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground command-text flex items-center gap-2">
                        <span className="text-primary">{'>'}</span>
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-card/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 font-mono text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground command-text flex items-center gap-2">
                        <span className="text-primary">{'>'}</span>
                        Your Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-card/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 font-mono text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground command-text flex items-center gap-2">
                        <span className="text-primary">{'>'}</span>
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="bg-card/60 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 font-mono text-sm resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      className="w-full btn-primary gap-2 group relative shadow-xl shadow-primary/30"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </Button>
                  </form>
                )}

                {/* Terminal response */}
                {!submitted && (
                  <div className="border-t border-border/40 pt-6 space-y-2">
                    <div className="text-xs text-muted-foreground command-text">
                      {'>'} response_time: instant
                    </div>
                    <div className="text-xs text-primary command-text">{'>'} status: ready</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right - Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="glass rounded-xl p-8 glow-primary">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Terminal size={20} className="text-accent" />
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <div className="glass rounded-lg p-4 flex items-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                          <Icon size={20} className="text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.label}
                          </div>
                          <div className="text-xs text-muted-foreground command-text">
                            {'$ open'} {link.label}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Background profile */}
            <div className="glass overflow-hidden rounded-xl glow-primary">
              <div className="border-b border-border/40 bg-black/35 px-4 py-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-primary command-text">
                      profile.online
                    </span>
                  </div>
                  <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] command-text text-accent">
                    v2.1
                  </span>
                </div>
                <p className="truncate text-[11px] command-text text-muted-foreground">
                  <span className="code-bracket">{'<'}</span>
                  ~/profile/background.json
                  <span className="code-bracket">{'/>'}</span>
                </p>
                <div
                  className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-border/50"
                  role="presentation"
                  aria-hidden
                >
                  <div className="h-full w-full bg-gradient-to-r from-primary/30 via-primary to-accent" />
                </div>
                <p className="mt-1.5 text-right text-[10px] text-primary/45 command-text">
                  load_complete · 100%
                </p>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-xs command-text text-primary">
                  <span className="text-muted-foreground">$</span> cat profile.json
                </p>

                <div className="terminal-line rounded-r-md border-primary/40 bg-primary/5 py-3 pr-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 command-text">
                    education::degree
                  </p>
                  <p className="mt-1.5 text-sm text-foreground">
                    Bachelor of Business Administration (Marketing)
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground command-text">
                    {`period: "2011 – 2016"`}
                  </p>
                </div>

                <div className="terminal-line rounded-r-md border-accent/40 bg-accent/5 py-3 pr-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent/70 command-text">
                    languages::stack
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground command-text">
                    <span className="text-foreground">Bangla</span>
                    <span className="text-primary/80"> (native)</span>
                    <span className="text-muted-foreground/60"> · </span>
                    <span className="text-foreground">English</span>
                    <span className="text-primary/80"> (professional)</span>
                  </p>
                </div>

                <div className="rounded-lg border border-border/50 bg-background/40 p-4 space-y-2.5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground command-text">
                    contact::channels
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs command-text">
                    <span className="text-muted-foreground">email:</span>
                    <a
                      href="mailto:mehedi.mosh@gmail.com"
                      className="font-semibold text-accent transition-colors hover:text-accent/80"
                    >
                      mehedi.mosh@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs command-text">
                    <span className="text-muted-foreground">phone:</span>
                    <a
                      href="tel:+8801846249631"
                      className="font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      01846249631
                    </a>
                  </div>
                  <p className="pt-1 text-[10px] text-primary/50 command-text">
                    {'>'} status: channels_active
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px hsl(var(--primary) / 0.3)',
                  '0 0 40px hsl(var(--primary) / 0.6)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass rounded-xl p-6 border-accent/50"
            >
              <div className="text-sm text-muted-foreground command-text mb-2">{`$ echo "Let's build something epic"`}</div>
              <p className="text-lg font-semibold text-accent">Ready to collaborate?</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
