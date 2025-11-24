"use client";

import { motion } from "framer-motion";
import { GridPattern } from "./ui/grid-pattern";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Johuniq built our MVP in just 6 weeks. The quality exceeded our expectations and we secured seed funding shortly after launch.",
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow",
    image: "/user.png",
  },
  {
    quote:
      "Their technical expertise is outstanding. They suggested architectural improvements that saved us months of refactoring down the line.",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "DataSync",
    image: "/user.png",
  },
  {
    quote:
      "Best development partner we've worked with. Communication was transparent, and they delivered on every milestone.",
    name: "Emily Watson",
    role: "Product Manager",
    company: "CloudNest",
    image: "/user.png",
  },
  {
    quote:
      "The custom CRM they built has transformed our sales process. ROI was positive within 3 months.",
    name: "David Kim",
    role: "VP of Sales",
    company: "SalesHub",
    image: "/user.png",
  },
  {
    quote:
      "They didn't just code - they became true partners in our product vision. Highly recommend for any serious software project.",
    name: "Jessica Martinez",
    role: "Co-Founder",
    company: "HealthTech Pro",
    image: "/user.png",
  },
  {
    quote:
      "Scalability was our biggest concern. Johuniq designed a system that handles 10x our initial traffic without breaking a sweat.",
    name: "Alex Thompson",
    role: "Engineering Lead",
    company: "StreamLine",
    image: "/user.png",
  },
  {
    quote:
      "The post-launch support has been incredible. They're always available and proactive about potential issues.",
    name: "Rachel Green",
    role: "Operations Director",
    company: "LogiTrack",
    image: "/user.png",
  },
  {
    quote:
      "Clean code, excellent documentation, and seamless handoff. This is how software development should be done.",
    name: "James Wilson",
    role: "Tech Lead",
    company: "FinanceFlow",
    image: "/user.png",
  },
  {
    quote:
      "They integrated with our legacy systems flawlessly. What we thought would take 6 months took 8 weeks.",
    name: "Linda Park",
    role: "IT Director",
    company: "RetailMax",
    image: "/user.png",
  },
  {
    quote:
      "The UI/UX design is stunning. Our user engagement increased by 40% after the redesign.",
    name: "Tom Anderson",
    role: "Head of Product",
    company: "SocialHub",
    image: "/user.png",
  },
  {
    quote:
      "Security was paramount for our fintech app. Johuniq implemented best practices and passed our audit with flying colors.",
    name: "Priya Sharma",
    role: "Compliance Officer",
    company: "SecurePay",
    image: "/user.png",
  },
  {
    quote:
      "From concept to deployment, they guided us every step. Our platform now serves 50k+ users daily.",
    name: "Marcus Johnson",
    role: "Founder",
    company: "EduConnect",
    image: "/user.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full pt-10 pb-10 px-4">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Trusted by startups and enterprises to build exceptional software.
          </motion.p>
        </div>
        <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, company, quote, image }, index) => (
            <motion.div
              initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
              whileInView={{
                filter: "blur(0px)",
                translateY: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
              key={index}
              className="border-foreground/25 relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed p-4"
            >
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                  <GridPattern
                    width={25}
                    height={25}
                    x={-12}
                    y={4}
                    strokeDasharray="3"
                    className="stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay"
                  />
                </div>
              </div>
              <img
                alt={name}
                src={image}
                loading="lazy"
                className="size-9 rounded-full"
              />
              <div>
                <div className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm md:text-base">{name}</p>
                  <span className="text-muted-foreground block text-[11px] font-light tracking-tight">
                    {role} at {company}
                  </span>
                </div>
                <blockquote className="mt-3">
                  <p className="text-foreground text-sm font-light tracking-wide">
                    {quote}
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}