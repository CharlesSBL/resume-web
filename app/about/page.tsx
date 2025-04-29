import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Multidisciplinary developer with a passion for technology and
            problem-solving
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a multidisciplinary developer with  hands-on
              experience in software development, data engineering, and frontend
              technologies. Backend systems, ETL
              pipelines, containerization, and modern frontend frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about Rust, Linux, systems programming, and open
              source. My background also includes music production and sound
              engineering, alongside leadership roles in healthcare management
              and nonprofit operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-teal-500">
                JavaScript
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                TypeScript
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                Python
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                Java
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                Rust
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                React
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                Data Engineering
              </Badge>
              <Badge variant="outline" className="border-teal-500">
                Linux
              </Badge>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-teal-500 text-teal-600 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/30"
              >
                <Link href="/resume.pdf" target="_blank">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 shadow-xl">
              <img
                src="/me.jpg?height=400&width=400"
                alt="Karol Sobolewski"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Experience Timeline with Topographic Pattern */}
        <div className="hero-pattern rounded-xl p-8 relative">
          <div className="content-above-pattern space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Professional Journey
            </h2>
            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="relative border-l border-teal-500 pl-8 pb-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      ETL & Data Engineering Intern
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        BelBiGroup, Belarus
                      </span>
                      <span className="text-sm text-muted-foreground">
                        2023 – 2024
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Built and maintained data pipelines to collect, process,
                      and analyze data from online platforms.
                    </li>
                    <li>
                      Used Python with Pandas, DuckDB, and PyArrow to process
                      and transform large datasets.
                    </li>
                    <li>Orchestrated workflows using Apache Airflow.</li>
                    <li>
                      Containerized the project with Docker and Docker Compose
                      for deployment.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative border-l border-teal-500 pl-8 pb-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      Java Backend Intern
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        itoverflow, Belarus
                      </span>
                      <span className="text-sm text-muted-foreground">
                        2022
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Developed a backend API for an e-commerce site using Java
                      and PostgreSQL.
                    </li>
                    <li>
                      Designed and implemented data models and business logic
                      for shopping and payment systems.
                    </li>
                    <li>
                      Gained experience in working with version control and
                      agile development environments.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative border-l border-teal-500 pl-8 pb-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      Freelance Frontend Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Remote
                      </span>
                      <span className="text-sm text-muted-foreground">
                        2021 – Present
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Built responsive and dynamic websites for clients using
                      React, TypeScript, HTML/CSS.
                    </li>
                    <li>
                      Translated client requirements into clean UI/UX
                      experiences.
                    </li>
                    <li>
                      Delivered projects independently, managing timelines and
                      communication.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative border-l border-teal-500 pl-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      HR Specialist & Manager
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Private Nursing Home / Medicinae Pro Omnibus Foundation
                      </span>
                      <span className="text-sm text-muted-foreground">
                        2019 – 2021
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Managed HR operations, hiring, staff scheduling, and
                      conflict resolution.
                    </li>
                    <li>
                      Represented the foundation in meetings with hospitals,
                      city institutions, and other care homes.
                    </li>
                    <li>
                      Coordinated with multiple eldercare facilities across
                      Poland.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education with Pixel Village */}
        <div className="pixel-village rounded-xl p-8 relative">
          <div className="content-above-pattern space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Education
            </h2>
            <div className="space-y-8">
              <div className="relative border-l border-teal-500 pl-8 pb-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      Self-Taught Developer
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    4+ years of continuous learning through projects,
                    internships, and freelance work. Focus areas: Full-stack
                    development, data engineering, Linux systems, Rust, systems
                    programming.
                  </p>
                </div>
              </div>

              <div className="relative border-l border-teal-500 pl-8">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-background">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">
                      Music Production & Sound Engineering Studies
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Private Courses & Self-Study
                      </span>
                      <span className="text-sm text-muted-foreground">
                        2017 – Present
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Deep knowledge of arrangement, mixing, mastering, and DAW
                    workflows. Tools: FL Studio, Ableton Live, Reaper, wide
                    range of VST plugins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests with Night Cottage */}
        <div className="night-cottage rounded-xl p-8 relative">
          <div className="content-above-pattern space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Interests & Hobbies
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
                <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
                  Technology
                </h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>
                    Linux customization, window managers, and system internals
                  </li>
                  <li>Kernel and Wayland development (learning)</li>
                  <li>Open-source software</li>
                  <li>UI/UX design and visual aesthetics</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
                <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
                  Music
                </h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Electronic music production</li>
                  <li>Audio engineering</li>
                  <li>Sound design</li>
                  <li>Digital audio workstations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            Languages
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Polish</h3>
                <Badge className="bg-teal-500 hover:bg-teal-600">Native</Badge>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-md card-hover-effect">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">English</h3>
                <Badge className="bg-teal-500 hover:bg-teal-600">
                  Professional Working Proficiency
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
