"use client"

import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Typical MVPs take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide a detailed roadmap during our initial discovery phase so you always know what to expect.",
    },
    {
      question: "What technology stack do you use?",
      answer:
        "We specialize in modern, scalable stacks including React, Next.js, Node.js, and Python. We also have extensive experience with cloud infrastructure on AWS and Google Cloud.",
    },
    {
      question: "Do I own the code after the project?",
      answer:
        "Yes, absolutely. You own 100% of the code and intellectual property. Upon project completion and final payment, we transfer all assets and repositories directly to you.",
    },
    {
      question: "What kind of post-launch support do you offer?",
      answer:
        "We offer comprehensive maintenance packages including security updates, performance monitoring, and feature enhancements to keep your software running smoothly and securely.",
    },
    {
      question: "How do you handle communication?",
      answer:
        "We believe in radical transparency. You'll have direct access to the development team via Slack or Discord, along with regular video updates and demos to track progress.",
    },
    {
      question: "What is your stance on Open Source?",
      answer:
        "We are active contributors to the open-source community. While your custom code remains private, we leverage and contribute to open-source tools to build better, more reliable software.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about working with Johuniq.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <IconChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
