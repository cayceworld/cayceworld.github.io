import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrls?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featuresDesc?: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrls,
  liveUrl,
  githubUrl,
  featuresDesc,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = imageUrls && imageUrls.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? imageUrls.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent/50">
      {/* Image placeholder or actual image */}
      <div className="relative h-96 w-full bg-secondary/50 overflow-hidden group border flex justify-center ">
        {hasImages && imageUrls[currentImageIndex] ? (
          <img
            src={imageUrls[currentImageIndex] + ".png"}
            alt={`${title} screenshot`}
            className="h-full object-cover basis-auto"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-center">
              <p className="text-lg font-semibold text-muted-foreground mb-2">
                Screenshot {currentImageIndex + 1}/
                {hasImages ? imageUrls.length : 1}
              </p>
              <p className="text-sm text-muted-foreground">placeholder</p>
            </div>
          </div>
        )}

        {/* Image Navigation */}
        {hasImages && imageUrls.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
              {currentImageIndex + 1} / {imageUrls.length}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {featuresDesc && (
          <>
            <h5>Key features: </h5>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {featuresDesc.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 rounded-md bg-secondary/60 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
