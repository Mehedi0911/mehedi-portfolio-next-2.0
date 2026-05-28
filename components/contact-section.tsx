'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <span className="code-bracket">{`</`}</span>
            <span className="command-text text-sm uppercase">contact</span>
            <span className="code-bracket">{`>`}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div className="space-y-2">
                  <label className="text-sm command-text text-accent">
                    <span className="code-bracket">{'$'}</span> name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-primary/5 border-primary/20 text-foreground placeholder:text-muted-foreground command-text focus:border-accent transition-colors"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-sm command-text text-accent">
                    <span className="code-bracket">{'$'}</span> email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-primary/5 border-primary/20 text-foreground placeholder:text-muted-foreground command-text focus:border-accent transition-colors"
                    required
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-sm command-text text-accent">
                    <span className="code-bracket">{'$'}</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground command-text rounded-md px-3 py-2 focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full btn-accent font-medium command-text group relative shadow-lg shadow-accent/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                  </span>
                </Button>
              </form>

              {/* Terminal response */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="bg-primary/5 border border-primary/20 rounded p-4 command-text text-sm space-y-1">
                  <div className="text-accent">
                    <span className="text-muted-foreground">&gt;</span> await sendEmail()
                  </div>
                  <div className="text-primary text-xs ml-2">
                    ✓ Connection established
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Quick contact */}
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <Mail size={20} className="text-accent group-hover:text-secondary transition-colors" />
                    <div>
                      <div className="text-xs command-text text-muted-foreground">Email</div>
                      <a href="mailto:hello@example.com" className="text-foreground hover:text-accent transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Follow My Work</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 rounded hover:border-primary hover:bg-gradient-to-br hover:from-primary/30 hover:to-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        <IconComponent size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </span>
                      <span className="text-sm command-text text-foreground relative z-10">{link.label}</span>
                      <ExternalLink size={14} className="text-muted-foreground group-hover:text-white transition-colors duration-300 ml-auto opacity-0 group-hover:opacity-100 relative z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Terminal status */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 command-text text-sm space-y-2">
              <div className="text-muted-foreground">
                <span className="text-accent">$</span> status
              </div>
              <div className="text-primary ml-2">
                ✓ Ready to collaborate
              </div>
              <div className="text-primary ml-2">
                ✓ Open to opportunities
              </div>
              <div className="text-primary ml-2">
                ✓ Available for freelance
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="command-text text-muted-foreground text-sm mb-4">
              <span className="text-accent">// </span> Built with passion & code
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
