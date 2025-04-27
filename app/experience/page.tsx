import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h1>
          <p className="text-xl text-muted-foreground">My career journey and professional achievements</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {/* Experience 1 */}
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                <div>
                  <CardTitle className="text-2xl">ETL & Data Engineering Intern</CardTitle>
                  <CardDescription className="text-lg">BelBiGroup, Belarus</CardDescription>
                </div>
                <Badge className="w-fit">2023 – 2024</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Worked on building and maintaining data pipelines for collecting, processing, and analyzing data from
                online platforms.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>
                    Built and maintained data pipelines to collect, process, and analyze data from online platforms.
                  </li>
                  <li>Used Python with Pandas, DuckDB, and PyArrow to process and transform large datasets.</li>
                  <li>Orchestrated workflows using Apache Airflow.</li>
                  <li>Containerized the project with Docker and Docker Compose for deployment.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">DuckDB</Badge>
                  <Badge variant="outline">PyArrow</Badge>
                  <Badge variant="outline">Apache Airflow</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Docker Compose</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience 2 */}
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                <div>
                  <CardTitle className="text-2xl">Java Backend Intern</CardTitle>
                  <CardDescription className="text-lg">itoverflow, Belarus</CardDescription>
                </div>
                <Badge className="w-fit">2022</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Developed backend API components for an e-commerce platform, focusing on data models and business logic.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Developed a backend API for an e-commerce site using Java and PostgreSQL.</li>
                  <li>Designed and implemented data models and business logic for shopping and payment systems.</li>
                  <li>Gained experience in working with version control and agile development environments.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">REST APIs</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Agile</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience 3 */}
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                <div>
                  <CardTitle className="text-2xl">Freelance Frontend Developer</CardTitle>
                  <CardDescription className="text-lg">Remote</CardDescription>
                </div>
                <Badge className="w-fit">2021 – Present</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Independently developed responsive and dynamic websites for various clients, managing the entire
                development process.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Built responsive and dynamic websites for clients using React, TypeScript, HTML/CSS.</li>
                  <li>Translated client requirements into clean UI/UX experiences.</li>
                  <li>Delivered projects independently, managing timelines and communication.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience 4 */}
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                <div>
                  <CardTitle className="text-2xl">HR Specialist & Manager</CardTitle>
                  <CardDescription className="text-lg">
                    Private Nursing Home / Medicinae Pro Omnibus Foundation, Warsaw, Poland
                  </CardDescription>
                </div>
                <Badge className="w-fit">2019 – 2021</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Managed HR operations and represented the foundation in external meetings with various institutions.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Managed HR operations, hiring, staff scheduling, and conflict resolution.</li>
                  <li>
                    Represented the foundation in meetings with hospitals, city institutions, and other care homes.
                  </li>
                  <li>Coordinated with multiple eldercare facilities across Poland.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Skills Developed:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">HR Management</Badge>
                  <Badge variant="outline">Conflict Resolution</Badge>
                  <Badge variant="outline">Institutional Coordination</Badge>
                  <Badge variant="outline">Staff Scheduling</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education & Training</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <CardTitle className="text-xl">Self-Taught Developer</CardTitle>
                  </div>
                  <Badge className="w-fit">Ongoing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  4+ years of continuous learning through projects, internships, and freelance work. Focus areas:
                  Full-stack development, data engineering, Linux systems, Rust, systems programming.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <CardTitle className="text-xl">Music Production & Sound Engineering Studies</CardTitle>
                    <CardDescription>Private Courses & Self-Study</CardDescription>
                  </div>
                  <Badge className="w-fit">2017 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep knowledge of arrangement, mixing, mastering, and DAW workflows. Tools: FL Studio, Ableton Live,
                  Reaper, wide range of VST plugins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
