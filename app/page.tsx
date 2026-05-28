import { AnimatedBackground } from '@/components/animated-background';
import { HeroPremium } from '@/components/hero-premium';
import { SkillsDashboard } from '@/components/skills-dashboard';
import { ProjectsShowcase } from '@/components/projects-showcase';
import { BlogsSection } from '@/components/blogs-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ContactTerminal } from '@/components/contact-terminal';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedBackground />
      <HeroPremium />
      <SkillsDashboard />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <BlogsSection />
      <ContactTerminal />
    </main>
  );
}
