import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">Karol Sobolewski</h3>
            <p className="text-muted-foreground">
              Multidisciplinary developer with experience in software development, data engineering, and frontend
              technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/CharlesSBL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/karol-s-802755258"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:karl.sobolewski@outlook.com"
                className="text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Karol Sobolewski. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
