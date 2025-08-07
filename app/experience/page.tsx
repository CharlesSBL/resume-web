import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// --- Data is a blend of LinkedIn facts and CV achievements for maximum impact ---

const experienceData = [
  {
    title: "Coordinator & Foundation Representative",
    company: "Private Nursing Home / Medicinae Pro Omnibus Foundation",
    details: "Warsaw, Poland · Full-time",
    date: "Oct 2024 - Feb 2025 · 5 mos",
    // Descriptions are enhanced using the CV's action-oriented language
    responsibilities: [
      "Managed core HR operations, including hiring, staff scheduling, and conflict resolution to enhance workforce efficiency.",
      "Developed and maintained logistical systems for inter-facility coordination and resource management.",
      "Represented the foundation in key meetings with hospitals, city institutions, and partner care homes to align operational goals.",
      "Coordinated efforts and resources across multiple eldercare facilities throughout Poland, improving service delivery.",
    ],
    skills: {
      label: "Key Skills",
      items: ["Leadership", "Logistics Management", "HR Operations", "Institutional Coordination", "Conflict Resolution"],
    },
  },
  {
    title: "ETL & Data Engineering Intern",
    company: "BelBiGroup",
    details: "Warsaw, Mazowieckie, Poland · Internship · Remote",
    date: "May 2024 - Sep 2024 · 5 mos",
    responsibilities: [
      "Designed and developed automated ETL pipelines using Apache Airflow and Python, significantly reducing manual data processing efforts.",
      "Engineered and maintained backend services for data ingestion and processing, focusing on reliability and scalability.",
      "Utilized Docker for containerizing applications and PostgreSQL for data storage, ensuring consistent and reproducible environments.",
    ],
    skills: {
      label: "Technologies & Skills",
      items: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "ETL", "Scalability", "Data Pipelines"],
    },
  },
  {
    title: "Java Software Developer Intern",
    company: "IT OVERONE",
    details: "Minsk, Belarus · Internship · Remote",
    date: "Sep 2023 - Dec 2023 · 4 mos",
    responsibilities: [
      "Developed and maintained REST APIs for a commercial application using Java and Spring Boot within a microservices architecture.",
      "Implemented comprehensive unit and integration tests to ensure code quality and system reliability.",
      "Contributed to troubleshooting and resolving production issues, enhancing system stability and performance.",
    ],
    skills: {
      label: "Technologies Used",
      items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Unit & Integration Testing", "Git"],
    },
  },
]

const educationData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "Polish-Japanese Academy of Information Technology",
    location: "Warsaw, Poland",
    date: "Expected Start: Oct 2025",
    description: null,
  },
  {
    title: "Algorithms Specialization",
    institution: "Stanford University (Coursera)",
    location: "",
    date: "Issued: Sep 2023",
    description:
      "Demonstrated proficiency in advanced data structures, graph algorithms, and algorithm design and analysis.",
  },
  {
    title: "EF SET English Certificate (C1 Advanced)",
    institution: "EF Standard English Test",
    location: "",
    date: "Issued: Oct 2024",
    description: null,
  },
]

export default function ExperiencePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h1>
          <p className="text-xl text-muted-foreground">
            A timeline of my professional roles, key contributions, and educational background.
          </p>
        </div>

        {/* --- Experience Timeline (Rendered from blended data) --- */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} · {exp.details}
                    </CardDescription>
                  </div>
                  <Badge className="w-fit shrink-0">{exp.date}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Achievements & Responsibilities:</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 mt-4">{exp.skills.label}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.items.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- Education & Certifications Section --- */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                    <div>
                      <CardTitle className="text-xl">{edu.title}</CardTitle>
                      <CardDescription>
                        {edu.institution} {edu.location && `| ${edu.location}`}
                      </CardDescription>
                    </div>
                    <Badge className="w-fit">{edu.date}</Badge>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}