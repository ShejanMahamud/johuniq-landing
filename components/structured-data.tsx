export default function StructuredData() {
  // Enhanced Organization Schema with LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Johuniq",
    url: "https://johuniq.com",
    logo: "https://johuniq.com/logo.png",
    image: "https://johuniq.com/og-image.png",
    description: "Custom software development agency specializing in MVP development, enterprise solutions, and open-source tools.",
    foundingDate: "2020",
    slogan: "Transform your ideas into impactful software",
    priceRange: "$$$",
    telephone: "+1-XXX-XXX-XXXX",
    email: "hello@johuniq.com",
    sameAs: [
      "https://twitter.com/johuniq",
      "https://linkedin.com/company/johuniq",
      "https://github.com/johuniq",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@johuniq.com",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "Remote",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060",
      },
      geoRadius: "Worldwide",
    },
  }

  // Website Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Johuniq",
    url: "https://johuniq.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://johuniq.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://johuniq.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://johuniq.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: "https://johuniq.com/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pricing",
        item: "https://johuniq.com/#pricing",
      },
    ],
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: {
      "@type": "Organization",
      name: "Johuniq",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Web & Mobile Apps, Enterprise Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP Development",
            description: "Rapid prototyping and validation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Modern, Accessible, User-Centric Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud & DevOps",
            description: "Scalable Infrastructure, CI/CD, Performance",
          },
        },
      ],
    },
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is your typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical MVPs take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide a detailed roadmap during our initial discovery phase so you always know what to expect.",
        },
      },
      {
        "@type": "Question",
        name: "What technology stack do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in modern, scalable stacks including React, Next.js, Node.js, and Python. We also have extensive experience with cloud infrastructure on AWS and Google Cloud.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the code after the project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. You own 100% of the code and intellectual property. Upon project completion and final payment, we transfer all assets and repositories directly to you.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of post-launch support do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive maintenance packages including security updates, performance monitoring, and feature enhancements to keep your software running smoothly and securely.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle communication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We believe in radical transparency. You'll have direct access to the development team via Slack or Discord, along with regular video updates and demos to track progress.",
        },
      },
      {
        "@type": "Question",
        name: "What is your stance on Open Source?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are active contributors to the open-source community. While your custom code remains private, we leverage and contribute to open-source tools to build better, more reliable software.",
        },
      },
    ],
  }

  // Individual Review Schemas
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Johuniq",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Chen",
        },
        datePublished: "2024-01-15",
        reviewBody: "Johuniq built our MVP in just 6 weeks. The quality exceeded our expectations and we secured seed funding shortly after launch.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Rodriguez",
        },
        datePublished: "2024-02-20",
        reviewBody: "Their technical expertise is outstanding. They suggested architectural improvements that saved us months of refactoring down the line.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Emily Watson",
        },
        datePublished: "2024-03-10",
        reviewBody: "Best development partner we've worked with. Communication was transparent, and they delivered on every milestone.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
    </>
  )
}
