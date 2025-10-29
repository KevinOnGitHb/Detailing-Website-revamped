"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 229, 148, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 229, 148, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            GET IN{" "}
            <span
              className="bg-gradient-to-r from-[#00e594] to-[#00bfa5] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(0, 229, 148, 0.3)",
              }}
            >
              TOUCH
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance">
            Ready to transform your vehicle? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/80 border border-gray-800"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
              <p className="text-gray-400">Fill out the form and we'll get back to you within 48 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00e594] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00e594] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00e594] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your vehicle and what services you're interested in..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00e594] transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full font-bold text-lg py-6 rounded-xl text-black hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: "#00e594",
                  boxShadow: "0 0 20px rgba(0, 229, 148, 0.4)",
                }}
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div
              className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/80 border border-gray-800"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(0, 229, 148, 0.1)",
                      boxShadow: "0 0 20px rgba(0, 229, 148, 0.2)",
                    }}
                  >
                    <Phone className="h-6 w-6" style={{ color: "#00e594" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <p className="text-gray-400">(317) 674-3843</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(0, 229, 148, 0.1)",
                      boxShadow: "0 0 20px rgba(0, 229, 148, 0.2)",
                    }}
                  >
                    <Mail className="h-6 w-6" style={{ color: "#00e594" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p className="text-gray-400">Kevin@freshlabsdetailing.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(0, 229, 148, 0.1)",
                      boxShadow: "0 0 20px rgba(0, 229, 148, 0.2)",
                    }}
                  >
                    <MapPin className="h-6 w-6" style={{ color: "#00e594" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Location</p>
                    <p className="text-gray-400">
                      Indianapolis, IN
                      <br />
                      Mobile Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/80 border border-gray-800"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(0, 229, 148, 0.1)",
                    boxShadow: "0 0 20px rgba(0, 229, 148, 0.2)",
                  }}
                >
                  <Clock className="h-6 w-6" style={{ color: "#00e594" }} />
                </div>
                <h4 className="text-xl font-bold text-white">Business Hours</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
