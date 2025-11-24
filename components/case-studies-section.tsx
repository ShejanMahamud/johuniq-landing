"use client"

import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "SecurePay",
      project: "Fintech Payment Platform",
      metric: "500k+ transactions/day",
      description: "Built a secure, scalable payment processing platform with real-time fraud detection and compliance features.",
      image: "/case-study-fintech.png",
    },
    {
      client: "ShopFlow",
      project: "E-commerce Marketplace",
      metric: "3x revenue growth in 6 months",
      description: "Developed a multi-vendor marketplace with advanced inventory management, AI-powered recommendations, and seamless checkout.",
      image: "/case-study-ecommerce.png",
    },
    {
      client: "HealthConnect",
      project: "Telemedicine Platform",
      metric: "100k+ patients served",
      description: "Created a HIPAA-compliant telemedicine platform with video consultations, prescription management, and EHR integration.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "DataInsight",
      project: "Analytics SaaS Platform",
      metric: "50+ enterprise clients",
      description: "Built a powerful analytics platform with real-time data processing, custom dashboards, and white-label capabilities.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real results from clients who trusted us to build their software solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
