import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsPage() {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
    { name: "Rust", level: 65 },
    { name: "HTML/CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "REST APIs", level: 85 },
  ]

  const dataEngineeringSkills = [
    { name: "Apache Airflow", level: 75 },
    { name: "Pandas", level: 85 },
    { name: "DuckDB", level: 80 },
    { name: "PyArrow", level: 75 },
    { name: "ETL Pipelines", level: 80 },
    { name: "Data Processing", level: 85 },
  ]

  const devOpsSkills = [
    { name: "Docker", level: 85 },
    { name: "Docker Compose", level: 80 },
    { name: "Podman", level: 75 },
    { name: "Git", level: 90 },
    { name: "Bash", level: 80 },
    { name: "Nix/NixOS", level: 70 },
    { name: "Linux", level: 85 },
  ]

  const musicSkills = [
    { name: "FL Studio", level: 90 },
    { name: "Ableton Live", level: 80 },
    { name: "Reaper", level: 75 },
    { name: "Mixing", level: 85 },
    { name: "Mastering", level: 80 },
    { name: "Sound Design", level: 75 },
  ]

  return (
    <div className="pixel-village min-h-screen py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="content-above-pattern mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
            <div className="section-divider"></div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Programming Languages & Frontend</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {technicalSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden card-hover-effect">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
                        {skill.level}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={skill.level} className="h-2 bg-teal-100 dark:bg-teal-950">
                      <div className="h-full bg-teal-500 transition-all" style={{ width: `${skill.level}%` }} />
                    </Progress>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Engineering Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Data Engineering</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {dataEngineeringSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden card-hover-effect">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
                        {skill.level}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={skill.level} className="h-2 bg-teal-100 dark:bg-teal-950">
                      <div className="h-full bg-teal-500 transition-all" style={{ width: `${skill.level}%` }} />
                    </Progress>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">DevOps & Tools</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {devOpsSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden card-hover-effect">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
                        {skill.level}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={skill.level} className="h-2 bg-teal-100 dark:bg-teal-950">
                      <div className="h-full bg-teal-500 transition-all" style={{ width: `${skill.level}%` }} />
                    </Progress>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Music Production Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Music Production & Sound Engineering
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {musicSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden card-hover-effect">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
                        {skill.level}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={skill.level} className="h-2 bg-teal-100 dark:bg-teal-950">
                      <div className="h-full bg-teal-500 transition-all" style={{ width: `${skill.level}%` }} />
                    </Progress>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Professional Skills</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">Leadership</CardTitle>
                  <CardDescription>Experience managing teams and coordinating projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Team management</li>
                    <li>Project coordination</li>
                    <li>Conflict resolution</li>
                    <li>Strategic planning</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">Communication</CardTitle>
                  <CardDescription>Effective communication across different stakeholders</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Technical documentation</li>
                    <li>Client presentations</li>
                    <li>Cross-team collaboration</li>
                    <li>Requirements gathering</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">Problem Solving</CardTitle>
                  <CardDescription>Analytical approach to complex challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Critical thinking</li>
                    <li>Debugging</li>
                    <li>System architecture</li>
                    <li>Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications & Learning */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Continuous Learning</h2>
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="text-teal-600 dark:text-teal-400">Current Learning Focus</CardTitle>
                <CardDescription>Areas I'm currently expanding my knowledge in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Rust Ecosystem</Badge>
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Systems Programming</Badge>
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Kernel Development</Badge>
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Wayland</Badge>
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Advanced Data Engineering</Badge>
                  <Badge className="px-3 py-1 bg-teal-500 hover:bg-teal-600">Distributed Systems</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
