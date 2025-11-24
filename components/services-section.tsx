"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Cloud, CodeXml, GitBranch, Palette } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      icon: <CodeXml className="w-12 h-12 text-white" />,
      color: "bg-[#E0B0FF]", // Light Purple
    },
    {
      title: "Open Source Tools",
      icon: <GitBranch className="w-12 h-12 text-white" />,
      color: "bg-[#00D2D3]", // Teal
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-12 h-12 text-white" />,
      color: "bg-[#FF4757]", // Pink/Red
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-12 h-12 text-white" />,
      color: "bg-[#3742fa]", // Blue
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Everything your agency needs to deliver exceptional results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className={cn(
                "relative overflow-hidden rounded-[2rem] p-8 flex flex-col h-[320px] shadow-xl group",
                service.color
              )}
            >
              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              />

              {/* Gradient Blob for depth */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />

              {/* Centered Icon */}
              <div className="flex-grow flex items-center justify-center relative z-10">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="relative z-10 font-serif text-3xl font-medium text-white mt-auto leading-tight">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
