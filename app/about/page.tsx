import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- Data for dynamic rendering, ensuring consistency across the site ---

const professionalJourneyData = [
    {
        title: "Coordinator & Foundation Representative",
        company: "Private Nursing Home / Medicinae Pro Omnibus Foundation",
        date: "Oct 2024 - Feb 2025",
        description: [
            "Managed core HR operations, including hiring, staff scheduling, and conflict resolution.",
            "Developed and maintained logistical systems for inter-facility coordination.",
            "Represented the foundation in key meetings with hospitals and city institutions."
        ]
    },
    {
        title: "ETL & Data Engineering Intern",
        company: "BelBiGroup",
        date: "May 2024 - Sep 2024",
        description: [
            "Designed and developed automated ETL pipelines using Apache Airflow and Python.",
            "Engineered and maintained backend services for data ingestion and processing.",
            "Utilized Docker for containerizing applications and PostgreSQL for data storage."
        ]
    },
    {
        title: "Java Software Developer Intern",
        company: "IT OVERONE",
        date: "Sep 2023 - Dec 2023",
        description: [
            "Developed and maintained REST APIs using Java and Spring Boot in a microservices architecture.",
            "Implemented comprehensive unit and integration tests to ensure code quality.",
            "Contributed to troubleshooting and resolving production issues."
        ]
    }
];

const educationData = [
    {
        title: "Bachelor of Engineering in Computer Science",
        institution: "Polish-Japanese Academy of Information Technology",
        date: "Starts Oct 2025",
    },
    {
        title: "Algorithms Specialization",
        institution: "Stanford University (Coursera)",
        date: "Issued Sep 2023",
    },
    {
        title: "EF SET English Certificate (C1 Advanced)",
        institution: "EF Standard English Test",
        date: "Issued Oct 2024",
    },
];

const languagesData = [
    { name: "Polish", level: "Native" },
    { name: "English", level: "C1 Advanced" },
    { name: "Russian", level: "C2 Proficient" },
    { name: "Ukrainian", level: "C2 Proficient" },
];


export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">Software Engineer with a passion for building robust systems and a unique perspective on problem-solving.</p>
        </div>

        {/* Profile Section */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">My Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am a Software Engineer focused on backend systems, data engineering, and developer platforms. My journey is driven by a passion for creating efficient, scalable solutions and a love for deep-diving into technology, from systems programming with Rust to orchestrating complex data pipelines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My background in coordination and management has provided me with a unique perspective on teamwork, logistics, and clear communication. I believe that the best technology is built by people who understand not just the code, but the people and processes it serves.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/professional-photo.jpg" 
              alt="Karol Sobolewski"
              width={400}
              height={400}
              className="rounded-xl object-cover aspect-square shadow-lg"
            />
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="hero-pattern rounded-xl p-8 relative">
          <div className="content-above-pattern space-y-6">
            <h2 className="text-2xl font-bold text-primary">Professional Journey</h2>
            <div className="space-y-8">
              {professionalJourneyData.map((exp) => (
                <div key={exp.title} className="relative border-l border-primary/50 pl-8 pb-4 last:pb-0">
                  <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                    <ul className="list-disc pl-5 pt-1 text-muted-foreground space-y-1">
                      {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Education & Certifications</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {educationData.map(edu => (
                    <div key={edu.title} className="rounded-lg border bg-background p-4 shadow-sm">
                        <h3 className="font-semibold">{edu.title}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.date}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Languages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Languages</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {languagesData.map(lang => (
                <div key={lang.name} className="rounded-lg border bg-background p-4 shadow-sm text-center">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}