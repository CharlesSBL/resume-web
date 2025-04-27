import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github: string | null
  demo: string | null
  category: string
  features: string[]
  technologies: string[]
}

// This would typically come from a database or API
const projects: Project[] = [
  {
    id: "rust-cli-tools",
    title: "Rust CLI Tools & System Experiments",
    description: "Command-line tools and experiments with Rust's performance and memory management.",
    longDescription:
      "A collection of command-line tools built with Rust to explore the language's capabilities for systems programming. This project focuses on performance optimization, memory safety, and exploring Rust's unique features like ownership and borrowing. The tools range from simple utilities to more complex system interaction programs.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Rust", "CLI", "Systems Programming", "Linux"],
    github: "https://github.com/CharlesSBL/rust-cli-tools",
    demo: null,
    category: "systems",
    features: [
      "File system operations with safety guarantees",
      "Memory-efficient data processing",
      "Concurrent task execution with Rust's threading model",
      "Command-line argument parsing with clap",
      "Error handling patterns using Result and Option types",
    ],
    technologies: [
      "Rust",
      "Cargo",
      "clap (Command Line Argument Parser)",
      "serde for serialization",
      "tokio for async runtime",
      "Linux APIs",
    ],
  },
  {
    id: "data-dashboard",
    title: "Personal Data Dashboard",
    description: "React + Python backend dashboard that scrapes and visualizes structured data for analysis.",
    longDescription:
      "A full-stack application that collects, processes, and visualizes personal data from various sources. The frontend is built with React and provides interactive charts and filters for data exploration. The Python backend handles data collection, processing, and storage, with scheduled jobs to keep the data up-to-date.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Python", "Data Visualization", "Dashboard"],
    github: "https://github.com/CharlesSBL/data-dashboard",
    demo: "https://data-dashboard-demo.vercel.app",
    category: "data",
    features: [
      "Interactive data visualization with recharts",
      "Customizable dashboard layouts",
      "Data filtering and sorting capabilities",
      "Automated data collection from multiple sources",
      "RESTful API for data access",
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Pandas", "DuckDB", "recharts", "Docker"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Fully responsive personal site built with React and Tailwind, showcasing projects and blog posts.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. The site showcases my projects, skills, and professional experience in an elegant and user-friendly interface. It features a dark mode toggle, responsive design for all devices, and optimized performance.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/CharlesSBL/portfolio",
    demo: "https://karol-sobolewski.com",
    category: "web",
    features: [
      "Responsive design for all device sizes",
      "Dark mode support",
      "Project showcase with filtering",
      "Blog section with MDX support",
      "Contact form with validation",
      "SEO optimization",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel deployment"],
  },
  {
    id: "music-production",
    title: "Music Production Portfolio",
    description: "Collection of electronic music tracks and sound design experiments.",
    longDescription:
      "A showcase of my electronic music production and sound design work. This portfolio includes original tracks, remixes, and sound design experiments created using various digital audio workstations and virtual instruments. The project demonstrates my skills in arrangement, mixing, mastering, and creative sound design.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["FL Studio", "Ableton", "Sound Design", "Electronic Music"],
    github: null,
    demo: "https://soundcloud.com/karol-sobolewski",
    category: "music",
    features: [
      "Original electronic music compositions",
      "Sound design experiments",
      "Remixes and reinterpretations",
      "Audio processing techniques",
      "Collaborative projects with other artists",
    ],
    technologies: [
      "FL Studio",
      "Ableton Live",
      "Reaper",
      "Various VST plugins",
      "Hardware synthesizers",
      "Audio processing tools",
    ],
  },
  {
    id: "linux-config",
    title: "Linux Configuration",
    description: "Personal Linux configuration files and scripts for system customization.",
    longDescription:
      "A collection of dotfiles, scripts, and configuration files for customizing Linux environments. This project includes window manager configurations, shell customizations, and utility scripts to enhance productivity and create a personalized computing environment. The configurations are designed to be modular and adaptable to different Linux distributions.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Linux", "Bash", "Nix", "Configuration"],
    github: "https://github.com/CharlesSBL/dotfiles",
    demo: null,
    category: "systems",
    features: [
      "Window manager configurations (i3, sway)",
      "Shell customizations (zsh, bash)",
      "Vim/Neovim setup",
      "System utility scripts",
      "Theming and appearance customizations",
      "Nix configurations",
    ],
    technologies: ["Bash", "Nix", "i3/Sway window managers", "Zsh", "Vim/Neovim", "Various Linux utilities"],
  },
  {
    id: "etl-pipeline",
    title: "ETL Pipeline Framework",
    description: "Reusable ETL pipeline framework built with Python, Airflow, and Docker.",
    longDescription:
      "A flexible and reusable framework for building ETL (Extract, Transform, Load) pipelines. Built with Python, Apache Airflow, and Docker, this framework provides a solid foundation for data engineering projects. It includes modular components for data extraction from various sources, transformation using Pandas and DuckDB, and loading into different storage systems.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Python", "Apache Airflow", "Docker", "ETL", "Data Engineering"],
    github: "https://github.com/CharlesSBL/etl-framework",
    demo: null,
    category: "data",
    features: [
      "Modular pipeline components",
      "Support for multiple data sources and destinations",
      "Scheduled and triggered pipeline execution",
      "Error handling and retry mechanisms",
      "Monitoring and logging",
      "Containerized deployment",
    ],
    technologies: ["Python", "Apache Airflow", "Pandas", "DuckDB", "PyArrow", "Docker", "Docker Compose"],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed">{project.description}</p>
            <p className="leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button asChild variant="outline">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group block overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
