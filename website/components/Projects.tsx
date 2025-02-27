import Image from "next/image"

const projects = [
  {
    title: "Highlander Health",
    description:
      "Generates personalized meal plans for UCR students using dining hall data and personal metrics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UCR-bear-3hDzhuNrqcrqXKindNIoeQAK9x3prU.png",
    link: "https://github.com/androodo/HighlanderHealth",
  },
  {
    title: "Soccer Score Predictor",
    description:
      "Analyzes historical match data to predict soccer game outcomes with machine learning algorithm.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soccer%20ball.jpg-qOnpJGqIpW9fDtnPhVIii4OjCiyqrF.jpeg",
    link: "https://github.com/androodo/Soccer-Score-Predictor",
  },
  {
    title: "LocaInsight",
    description:
      "LocaInsight redefines navigation by blending Google Maps with GPT-3.5 to create personalized itineraries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/globe.jpg-QOELU7buQpXR6AMdZG6xcphL0HX8CA.jpeg",
    link: "https://github.com/androodo/LocaInsight",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center glow">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 tech-border group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-teal-300">{project.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-300 hover:text-teal-100 transition-colors duration-200 font-medium group-hover:translate-x-1 transform transition-transform"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

