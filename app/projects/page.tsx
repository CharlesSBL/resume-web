import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const projects = [
    {
      id: "rust-cli-tools",
      title: "Rust CLI Tools & System Experiments",
      description: "Command-line tools and experiments with Rust's performance and memory management.",
      image: "/images/pixel-cityscape.jpeg",
      tags: ["Rust", "CLI", "Systems Programming", "Linux"],
      github: "https://github.com/CharlesSBL/rust-cli-tools",
      demo: null,
      category: "systems",
    },
    {
      id: "data-dashboard",
      title: "Personal Data Dashboard",
      description: "React + Python backend dashboard that scrapes and visualizes structured data for analysis.",
      image: "/images/cosmic-swirl.jpeg",
      tags: ["React", "Python", "Data Visualization", "Dashboard"],
      github: "https://github.com/CharlesSBL/data-dashboard",
      demo: "https://data-dashboard-demo.vercel.app",
      category: "data",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "Fully responsive personal site built with React and Tailwind, showcasing projects and blog posts.",
      image: "/images/topographic-pattern.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/CharlesSBL/portfolio",
      demo: "https://karol-sobolewski.com",
      category: "web",
    },
    {
      id: "music-production",
      title: "Music Production Portfolio",
      description: "Collection of electronic music tracks and sound design experiments.",
      image: "/images/night-cottage.jpeg",
      tags: ["FL Studio", "Ableton", "Sound Design", "Electronic Music"],
      github: null,
      demo: "https://soundcloud.com/karol-sobolewski",
      category: "music",
    },
    {
      id: "linux-config",
      title: "Linux Configuration",
      description: "Personal Linux configuration files and scripts for system customization.",
      image: "/images/pixel-village.png",
      tags: ["Linux", "Bash", "Nix", "Configuration"],
      github: "https://github.com/CharlesSBL/dotfiles",
      demo: null,
      category: "systems",
    },
    {
      id: "etl-pipeline",
      title: "ETL Pipeline Framework",
      description: "Reusable ETL pipeline framework built with Python, Airflow, and Docker.",
      image: "/images/cosmic-swirl.jpeg",
      tags: ["Python", "Apache Airflow", "Docker", "ETL", "Data Engineering"],
      github: "https://github.com/CharlesSBL/etl-framework",
      demo: null,
      category: "data",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my work in software development, data engineering, and more
          </p>
          <div className="section-divider"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/80">
              <TabsTrigger value="all" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="systems" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Systems
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Data
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Web
              </TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Music
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="systems" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "systems")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="data" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "data")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "web")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "music")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github: string | null
  demo: string | null
  category: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full card-hover-effect">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-teal-600 dark:text-teal-400">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-teal-500 text-teal-600 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30"
          >
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-teal-500 text-teal-600 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30"
        >
          <Link href={`/projects/${project.id}`}>
            Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
