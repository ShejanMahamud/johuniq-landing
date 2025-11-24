"use client"

export function ClientLogos() {
  const logos = [
    { name: "TechFlow", src: "/techflow.svg" },
    { name: "DataPulse", src: "/datapulse.svg" },
    { name: "CloudNest", src: "/cloudnest.svg" },
    { name: "AppForge", src: "/appforge.svg" },
    { name: "CodeCraft", src: "/codecraft.svg" },
  ]

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-foreground/60">Trusted By</h2>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-40 grayscale hover:opacity-60 transition-opacity">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-10">
              <img 
                src={logo.src || "/placeholder.svg"} 
                alt={`${logo.name} logo`} 
                className="h-full w-auto object-contain" 
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-text')) {
                    const span = document.createElement('span');
                    span.className = 'logo-text text-2xl font-bold text-foreground/60';
                    span.textContent = logo.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
