"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

export interface ProductFeature {
  title: string
  items: string[]
  icon?: React.ReactNode
}

export interface ProductDetails {
  title: string
  subtitle: string
  badge?: string
  description: string
  features: ProductFeature[]
  image?: string
  color?: string // e.g. "bg-orange-500" or hex
}

interface ProductCardProps {
  product: ProductDetails
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className={cn(
        "relative w-full h-full overflow-hidden rounded-[2rem] p-8 flex flex-col text-white shadow-2xl group",
        product.color || "bg-gray-900"
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Gradient Blob for depth */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />

      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="flex justify-between items-start mb-4">
            <Badge variant="secondary" className="bg-black/20 hover:bg-black/30 text-white border-none backdrop-blur-md px-4 py-1.5 text-sm font-medium rounded-full">
              {product.badge || "New"}
            </Badge>
            <motion.div
                whileHover={{ rotate: 45 }}
                className="p-2 bg-white/10 rounded-full backdrop-blur-sm cursor-pointer"
            >
                <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>
        </div>

        <h3 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-2 leading-[0.9]">
          {product.title}
        </h3>
        <p className="text-lg text-white/80 font-light leading-snug max-w-[90%]">
          {product.subtitle}
        </p>
      </div>

      {/* Features Masonry/Grid */}
      <ScrollArea className="flex-grow -mr-6 pr-6 relative z-10">
        <div className="grid grid-cols-2 gap-3 pb-4">
          {product.features.map((feature, idx) => {
            const isFullWidth = idx === 0 || (product.features.length % 2 === 0 && idx === product.features.length - 1)
            
            return (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={cn(
                    "p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors",
                    isFullWidth ? "col-span-2" : "col-span-1"
                )}
            >
              <div className="flex items-center gap-2 mb-2">
                 <div className="p-1.5 bg-white/20 rounded-lg">
                    {feature.icon || <Sparkles className="w-3.5 h-3.5" />}
                 </div>
                 <span className="font-semibold text-sm">{feature.title}</span>
              </div>
              <ul className="space-y-1">
                  {feature.items.slice(0, isFullWidth ? 3 : 2).map((item, i) => (
                      <li key={i} className="text-xs text-white/70 flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 shrink-0" />
                          <span className="leading-tight">{item}</span>
                      </li>
                  ))}
              </ul>
            </motion.div>
          )})}
        </div>
        <div className="mt-2 pt-4 border-t border-white/10">
            <p className="text-sm text-white/60 italic">
                "{product.description}"
            </p>
        </div>
      </ScrollArea>
    </motion.div>
  )
}
