"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Send } from "lucide-react"

interface ContactFormProps {
  children: React.ReactNode
}

export function ContactForm({ children }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent("Demande d'information - Wallection")
    const body = encodeURIComponent(
      `Bonjour,

Je souhaite obtenir plus d'informations sur Wallection.

Nom: ${formData.name}
Email: ${formData.email}
Organisation: ${formData.organization}

Message:
${formData.message}

Cordialement,
${formData.name}`,
    )

    window.location.href = `mailto:paul.bugeon@jobpass.com?subject=${subject}&body=${body}`
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Contactez-nous
          </DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour nous contacter. Nous vous répondrons rapidement.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre.email@exemple.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organisation</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Nom de votre organisme de formation"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez vos besoins ou posez vos questions..."
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Envoyer le message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
