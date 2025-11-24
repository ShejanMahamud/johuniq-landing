"use client"

import { ProductCard, type ProductDetails } from "@/components/product-card"
import { BarChart, Check, Lock, Package, ShoppingCart, Sparkles } from "lucide-react"

type PortfolioItem = { image: string } | { product: ProductDetails }

export function PortfolioShowcase() {
  const medixPosData: ProductDetails = {
    title: "MedixPOS",
    subtitle: "Comprehensive Pharmacy Management System",
    badge: "First Alpha Release",
    description: "A complete solution designed for modern pharmacies, featuring inventory tracking, POS, and financial management.",
    features: [
      {
        title: "Inventory Management",
        icon: <Package className="w-4 h-4" />,
        items: ["Real-time stock tracking", "Batch & expiry management", "Low stock alerts", "Barcode support"],
      },
      {
        title: "Point of Sale (POS)",
        icon: <ShoppingCart className="w-4 h-4" />,
        items: ["Fast sales interface", "Barcode scanning", "Multi-payment support", "Receipt printing"],
      },
      {
        title: "Financial & Reports",
        icon: <BarChart className="w-4 h-4" />,
        items: ["Sales & purchase accounting", "Profit/loss analysis", "Daily/monthly reports", "Supplier ledgers"],
      },
      {
        title: "Security & Admin",
        icon: <Lock className="w-4 h-4" />,
        items: ["Role-based access", "Secure authentication", "Activity audit logs", "License activation"],
      },
    ],
    color: "bg-[#E0B0FF]", // Light purple from image
  }

  const erazorData: ProductDetails = {
    title: "Erazor",
    subtitle: "Erase backgrounds, edit instantly — all in one free tool.",
    badge: "Free Tool",
    description: "Erazor AI makes image cleanup effortless. Just upload a photo, and our smart AI removes the background instantly — no sign-up, no fuss.",
    features: [
      {
        title: "Instant Removal",
        icon: <Sparkles className="w-4 h-4" />,
        items: ["One-click background removal", "High-precision AI cutout"],
      },
      {
        title: "No Sign-up Required",
        icon: <Check className="w-4 h-4" />,
        items: ["Start editing immediately", "No account needed", "100% Free"],
      },
    ],
    color: "bg-[#FF4757]", // Vibrant Pink/Red
  }

  const jolyUiData: ProductDetails = {
    title: "Joly UI",
    subtitle: "Modern Open Source UI Component Library",
    badge: "Shadcn Registry",
    description: "A collection of beautiful, accessible, and customizable React components built for the Shadcn ecosystem.",
    features: [
      {
        title: "Accessible",
        icon: <Check className="w-4 h-4" />,
        items: ["WAI-ARIA compliant", "Keyboard navigation support"],
      },
      {
        title: "Customizable",
        icon: <Sparkles className="w-4 h-4" />,
        items: ["Tailwind CSS based", "Easy to theme and extend"],
      },
    ],
    color: "bg-[#00D2D3]", // Teal/Cyan
  }

  const portfolioItems: PortfolioItem[] = [
    {
      product: medixPosData,
    },
    {
      product: erazorData,
    },
    {
      product: jolyUiData,
    }
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative flex">
        {/* First set of items */}
        <div className="flex gap-6 pr-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px] h-[450px]">
              {"product" in item ? (
                <ProductCard product={item.product} />
              ) : (
                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg bg-muted">
                  <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-6 pr-6 animate-scroll-seamless" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[600px] h-[450px]">
              {"product" in item ? (
                <ProductCard product={item.product} />
              ) : (
                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg bg-muted">
                  <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
