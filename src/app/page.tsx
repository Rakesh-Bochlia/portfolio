import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import MarqueeBanner from "@/components/marquee-banner";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BlogSection } from "@/components/blog-section";
// import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      {/* <ContactSection /> */}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
