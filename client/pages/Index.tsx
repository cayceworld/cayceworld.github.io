import { Github, Linkedin, ChevronDown } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

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
              Frontend Developer
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
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
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Hi, I'm a{" "}
              <span className="text-accent">Frontend Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Crafting beautiful, responsive web experiences with modern technologies. 2+ years of experience building scalable applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                View My Work
              </button>
              <a
                href="mailto:hello@example.com"
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
      <section id="about" className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              About Me
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate frontend developer with 2+ years of hands-on experience building responsive, user-centric web applications. I specialize in creating intuitive interfaces using modern React-based technologies and CSS frameworks, with a keen attention to performance and accessibility.
              </p>

              <p>
                My approach combines solid software engineering principles with a deep understanding of user experience. I thrive in collaborative environments where I can work with designers, backend developers, and stakeholders to deliver polished products that users love.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new frontend frameworks, contributing to open-source projects, and staying updated with the latest web technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Commercial Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Professional projects built for clients and companies, showcasing real-world application development and problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-featured e-commerce platform with product catalog, shopping cart, and checkout flow. Implemented responsive design with real-time inventory updates and secure payment integration."
              technologies={["React", "TypeScript", "TailwindCSS", "Redux"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="SaaS Dashboard"
              description="Analytics dashboard for a B2B SaaS platform. Built with modern React patterns, featuring data visualization, user management, and real-time notifications with WebSocket integration."
              technologies={["React", "Next.js", "Chart.js", "WebSockets"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="Mobile App (React Native)"
              description="Cross-platform mobile application for iOS and Android. Implemented native-like performance with offline capabilities and smooth animations using React Native best practices."
              technologies={["React Native", "Redux", "Firebase", "Expo"]}
              githubUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Learning & Side Projects Section */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Learning & Side Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Personal projects built to explore new technologies, experiment with ideas, and contribute to the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Component Library"
              description="Open-source React component library with 30+ reusable UI components. Includes comprehensive documentation, Storybook integration, and TypeScript support."
              technologies={["React", "TypeScript", "Storybook", "Jest"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="Web Performance Toolkit"
              description="Collection of tools and utilities for analyzing and improving web performance. Includes metrics dashboard, automated testing, and optimization recommendations."
              technologies={["Vue.js", "Vite", "Web APIs", "Chart.js"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="Design System Documentation"
              description="Comprehensive design system documentation with interactive component previews. Built with modern tooling to showcase design tokens and implementation patterns."
              technologies={["Astro", "React", "MDX", "CSS Modules"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
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
                  )
                )}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "React Router",
                  "Redux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary/70 text-foreground text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "Webpack",
                  "Vite",
                  "Figma",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary/70 text-foreground text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        email="hello@example.com"
        location="San Francisco, CA"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
      />
    </div>
  );
}
