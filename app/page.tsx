import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section with Topographic Pattern */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="container px-4 md:px-6 relative">
          <div className="content-above-pattern grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Karol Sobolewski</h1>
                <p className="text-xl text-muted-foreground">Multidisciplinary Developer & Data Engineer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                With 4+ years of experience in software development, data engineering, and frontend technologies.
                Passionate about Rust, Linux, systems programming, and open source.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-sm">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Python
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Rust
                </Badge>
                <Badge variant="outline" className="text-sm">
                  React
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Data Engineering
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Linux
                </Badge>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://github.com/CharlesSBL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/karol-s-802755258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:karl.sobolewski@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Karol Sobolewski"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Pixel Cityscape */}
      <section className="pixel-cityscape py-16">
        <div className="container px-4 md:px-6 relative">
          <div className="content-above-pattern flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of my recent work in software development and data engineering
              </p>
            </div>
          </div>
          <div className="content-above-pattern mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl card-hover-effect">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Rust CLI Tools"
                  width={600}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Rust CLI Tools & System Experiments</h3>
                <p className="mt-2 text-muted-foreground">
                  Command-line tools and experiments with Rust's performance and memory management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-teal-500 hover:bg-teal-600">Rust</Badge>
                  <Badge className="bg-teal-500 hover:bg-teal-600">CLI</Badge>
                  <Badge className="bg-teal-500 hover:bg-teal-600">Systems Programming</Badge>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/projects/rust-cli-tools">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl card-hover-effect">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Personal Data Dashboard"
                  width={600}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Personal Data Dashboard</h3>
                <p className="mt-2 text-muted-foreground">
                  React + Python backend dashboard that scrapes and visualizes structured data for analysis.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-teal-500 hover:bg-teal-600">React</Badge>
                  <Badge className="bg-teal-500 hover:bg-teal-600">Python</Badge>
                  <Badge className="bg-teal-500 hover:bg-teal-600">Data Visualization</Badge>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/projects/data-dashboard">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="content-above-pattern flex justify-center">
            <Button asChild variant="outline" className="bg-background">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview Section with Cosmic Swirl */}
      <section className="cosmic-pattern py-16">
        <div className="container px-4 md:px-6 relative">
          <div className="content-above-pattern flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills Overview</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My technical expertise and professional capabilities
              </p>
            </div>
          </div>
          <div className="content-above-pattern mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            {/* Technical Skills */}
            <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    TypeScript
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    Java
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Rust
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    HTML/CSS
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    Node.js
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    REST APIs
                  </Badge>
                </li>
              </ul>
            </div>

            {/* Data Engineering */}
            <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">Data Engineering</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Apache Airflow
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Pandas
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    DuckDB
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    PyArrow
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    ETL Pipelines
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Data Processing
                  </Badge>
                </li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">DevOps & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    Podman
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    Bash
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Nix/NixOS
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Linux
                  </Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="border-teal-500">
                    Fedora
                  </Badge>
                  <Badge variant="outline" className="border-teal-500">
                    Ubuntu
                  </Badge>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-above-pattern flex justify-center">
            <Button asChild variant="outline" className="bg-background">
              <Link href="/skills">
                Explore All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action with Night Cottage */}
      <section className="night-cottage py-16">
        <div className="container px-4 md:px-6 relative">
          <div className="content-above-pattern flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaborating on a project or discussing opportunities?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
