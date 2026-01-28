import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface FeaturedProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  highlights: string[];
  imageUrls?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function FeaturedProjectCard({
  title,
  subtitle,
  description,
  role,
  duration,
  technologies,
  highlights,
  imageUrls,
}: FeaturedProjectCardProps) {
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
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image Section with Carousel */}
      <div className="relative h-96 w-full bg-secondary/50 overflow-hidden group border flex justify-center ">
        {hasImages && imageUrls[currentImageIndex] ? (
          <>
            <img
              src={"/dogether/desktop/" + imageUrls[currentImageIndex] + ".png"}
              alt={`${title} screenshot`}
              className="h-full object-cover basis-auto"
            />

            <img
              src={"/dogether/mobile/" + imageUrls[currentImageIndex] + ".png"}
              alt={`${title} screenshot`}
              className="h-full object-cover hidden md:block w-40"
            />
          </>
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

      {/* Content Section */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-xl text-accent font-semibold mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>

        {/* Role */}
        <div className="mb-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
          <h3 className="text-sm font-semibold text-accent mb-2">My Role</h3>
          <p className="text-sm text-foreground">{role}</p>
        </div>

        {/* Description */}
        <p className="text-foreground leading-relaxed mb-6">{description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">
            Key Achievements
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="font-semibold text-foreground mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold border border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
