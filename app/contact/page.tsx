"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from 'emailjs-com'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

    // Browser validation
    if (!form.checkValidity()) {
      form.reportValidity()
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Email error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="cosmic-pattern min-h-screen py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="content-above-pattern mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Me</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch for collaboration, opportunities, or just to say hello
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:karl.sobolewski@outlook.com" className="text-sm text-muted-foreground hover:text-teal-500 transition-colors">
                        karl.sobolewski@outlook.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+48666869697" className="text-sm text-muted-foreground hover:text-teal-500 transition-colors">
                        +48 666 869 697
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="mr-3 h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a href="https://linkedin.com/in/karol-s-802755258" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-teal-500 transition-colors">
                        linkedin.com/in/karol-s-802755258
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="mr-3 h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a href="https://github.com/CharlesSBL" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-teal-500 transition-colors">
                        github.com/CharlesSBL
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work, contract positions, and full-time opportunities.
                  </p>
                  <p className="mt-2 text-muted-foreground">Response time: Usually within 24-48 hours</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="text-teal-600 dark:text-teal-400">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
