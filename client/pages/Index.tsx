import { Github, Linkedin, ChevronDown } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import FeaturedProjectCard from "@/components/FeaturedProjectCard.tsx";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-foreground">
              Frontend Developer Portfolio
            </a>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/cayceworld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vladyslav-sydorenko-5b4301151/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-73px)] flex items-center justify-center py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/profile.jpg"
                alt="Portrait of Vladyslav Sydorenko"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Hi, I'm Vlad, a{" "}
              <span className="text-accent">Frontend Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I enjoy crafting modern, user-friendly web applications and
              continuously improving my frontend skills. Passionate about clean
              code, performance, and learning new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                View My Work
              </button>
              <a
                href="mailto:cayceworld@outlook.com"
                className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
            {/* Scroll indicator */}
            <button
              onClick={() => scrollToSection("about")}
              className="mx-auto mt-12 animate-bounce"
            >
              <ChevronDown size={24} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 border-t border-border bg-secondary/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              About Me
            </h2>
            <h4 className="font-bold mb-2">
              To give you an idea of who I am, here are brief answers to some
              important questions:
            </h4>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h5 className="font-bold">
                  What is programming, and what is a software engineer?
                </h5>
                <p>
                  Programming is the skill of solving problems using modern
                  tools and technologies. A software engineer thinks critically
                  and systematically: analyzes problems, considers options,
                  chooses the best solution, and implements it.
                </p>
              </div>

              <div>
                <h5 className="font-bold">What is discipline?</h5>
                <p>
                  Discipline is the ability to focus on what matters and follow
                  through on decisions. It’s about doing the work consistently,
                  managing your time and attention, and maintaining healthy
                  habits to stay effective.
                </p>
              </div>

              <div>
                <h5 className="font-bold">Why programming?</h5>
                <p>
                  I chose this field intentionally: beyond a natural interest in
                  technology, I have ambitions to be part of something big and
                  to become a professional. Programming allows me to achieve
                  both career and personal goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              Featured project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Career / Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A real company experience where I took ownership of the frontend
              and grew as a developer.
            </p>
          </div>

          <FeaturedProjectCard
            title="Dogether"
            subtitle="Frontend Developer"
            duration="~2 Years (2023-2025)"
            description="Dogether was a product startup platform focused on online donations and campaigns, developed by a small cross-functional team. I worked on building and maintaining the frontend application, taking ownership of core architecture and features."
            role="Frontend Developer responsible for designing and implementing the UI, integrating GraphQL APIs, implementing payment workflows, adding multi-language support, and contributing to new product directions. Worked closely with backend and product teams, ensuring code quality and feature delivery."
            highlights={[
              "Designed and built the frontend from scratch using React, TypeScript, and SCSS",
              "Implemented donation and subscription flows with Fondy payment integration",
              "Integrated GraphQL APIs using Relay (queries, mutations, reusable fragments)",
              "Added full multi-language support with i18next",
              "Contributed to a new product direction: events and online ticket sales",
            ]}
            technologies={[
              "React",
              "TypeScript",
              "GraphQL",
              "Relay",
              "SCSS",
              "HTML",
              "Webpack",
              "i18next",
            ]}
            imageUrls={["one", "two", "three", "four", "five"]}
          />
        </div>
      </section>

      {/* Freelance Projects */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Freelance Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Freelance projects created on demand for clients, focusing on
              delivering clean, responsive, and functional web interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Transport Company Landing Page"
              description="A static landing website built for a transport company, focused on clean design and user-friendly functionality. The project demonstrates practical frontend skills with React, SCSS, and modern development tooling."
              technologies={["JavaScript", "HTML", "SCSS"]}
              githubUrl="https://github.com/cayceworld/transport-company-website"
              imageUrls={[
                "moversbonn/one",
                "moversbonn/two",
                "moversbonn/three",
                "moversbonn/four",
                "moversbonn/five",
              ]}
              featuresDesc={[
                "Google Maps integration to display company location",
                "Automatic fetching and displaying of Google Reviews with live updates",
                "Contact form for customer inquiries",
                "Full desktop and mobile responsiveness",
              ]}
            />

            <ProjectCard
              title="Legalization Company"
              description="A responsive landing website for a legal services platform, designed to clearly present information and engage visitors. The project emphasizes clear structure, user-friendly navigation, and accessibility across devices."
              technologies={["JavaScript", "HTML", "SCSS"]}
              liveUrl="https://work-legal-in.com/#/main"
              imageUrls={[
                "legalin/one",
                "legalin/two",
                "legalin/three",
                "legalin/four",
                "legalin/five",
              ]}
              featuresDesc={[
                "Multi-section landing page with smooth navigation",
                "Interactive forms for user inquiries",
                "Responsive design optimized for desktop and mobile",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "HTML", "CSS", "Sass"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/70 text-foreground text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Vue.js", "React Router", "Redux"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/70 text-foreground text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "Webpack", "Vite", "Figma", "REST APIs"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/70 text-foreground text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        email="cayceworld@outlook.com"
        location="Wroclaw, Poland"
        githubUrl="https://github.com/cayceworld"
        linkedinUrl="https://www.linkedin.com/in/vladyslav-sydorenko-5b4301151/"
      />
    </div>
  );
}
