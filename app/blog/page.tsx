import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "rust-memory-management",
    title: "Understanding Rust's Memory Management",
    excerpt:
      "A deep dive into Rust's ownership model, borrowing, and lifetimes, and how they ensure memory safety without a garbage collector.",
    date: "2024-04-15",
    readTime: "8 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Rust", "Programming", "Memory Management"],
  },
  {
    id: "data-engineering-pipelines",
    title: "Building Robust ETL Pipelines with Python and Airflow",
    excerpt:
      "Learn how to design and implement reliable data pipelines using Python, Apache Airflow, and modern data engineering practices.",
    date: "2024-03-22",
    readTime: "10 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Data Engineering", "Apache Airflow", "ETL"],
  },
  {
    id: "linux-customization",
    title: "Customizing Your Linux Desktop for Maximum Productivity",
    excerpt:
      "A guide to configuring window managers, shell environments, and productivity tools to create an efficient Linux workspace.",
    date: "2024-02-18",
    readTime: "12 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Linux", "Productivity", "Customization"],
  },
  {
    id: "react-performance",
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Practical techniques for improving the performance of React applications, from code splitting to memoization and beyond.",
    date: "2024-01-30",
    readTime: "9 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "JavaScript", "Performance", "Web Development"],
  },
  {
    id: "music-production-tips",
    title: "Electronic Music Production: From Concept to Finished Track",
    excerpt:
      "A walkthrough of my process for creating electronic music, from initial ideas to arrangement, mixing, and mastering.",
    date: "2023-12-12",
    readTime: "15 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Music Production", "Electronic Music", "Mixing", "Sound Design"],
  },
  {
    id: "docker-compose-guide",
    title: "Docker Compose: A Comprehensive Guide for Developers",
    excerpt:
      "Learn how to use Docker Compose to define and run multi-container applications for development and deployment.",
    date: "2023-11-05",
    readTime: "11 min read",
    author: "Karol Sobolewski",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Docker", "DevOps", "Containerization"],
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, tutorials, and insights on technology, development, and more
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
