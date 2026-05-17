"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Brain, Sparkles, Box } from "lucide-react";
import { projects } from "@/lib/data";
import { useState } from "react";

const categoryIcons = {
  "AI/ML": <Brain className="h-5 w-5" />,
  "Web": <Sparkles className="h-5 w-5" />,
  "Full Stack": <Box className="h-5 w-5" />,
  "Security": <Sparkles className="h-5 w-5" />,
};

const categoryColors = {
  "AI/ML": "from-purple-500 to-indigo-600",
  "Web": "from-cyan-500 to-blue-600",
  "Full Stack": "from-green-500 to-emerald-600",
  "Security": "from-red-500 to-orange-600",
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card
            className="h-full cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px)`
                : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${categoryColors[project.category]}`}
                >
                  {categoryIcons[project.category]}
                </div>
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
                    Featured
                  </span>
                )}
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-secondary text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs text-gray-500">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-center mt-4 text-sm text-gray-500 group-hover:text-primary transition-colors">
                View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center mb-4`}
            >
              {categoryIcons[project.category]}
            </div>
            <CardTitle className="text-2xl">{project.title}</CardTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Description</h4>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-primary/20 text-primary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              {project.github && (
                <Button variant="default" asChild className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" asChild className="flex-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in AI/ML, Web Development, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6">
            Want to see more of my work? Check out my GitHub profile.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Rajeev91691?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Repositories
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}