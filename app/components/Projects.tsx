import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Highlander Health",
    description:
      "Built a full-stack nutrition website offering custom daily meal plans based on UCR Dining Hall menus. Developed a Python/Flask backend with OpenAI GPT API for real-time data analysis. Employed Beautiful Soup to scrape daily cafeteria menus and harnessed Pandas for thorough data cleaning, delivering personalized nutrition guidance to over 100 UCR students.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UCR-bear-3hDzhuNrqcrqXKindNIoeQAK9x3prU.png",
    link: "https://github.com/androodo/HighlanderHealth",
    tech: ["Python", "Flask", "OpenAI GPT", "Beautiful Soup", "Pandas"],
  },
  {
    title: "Soccer Score Predictor",
    description:
      "Developed a robust machine learning application to predict soccer match outcomes with a 15% improvement in prediction accuracy by leveraging comprehensive historical player statistics and detailed team performance data. Designed a user-friendly web interface for real-time prediction display with configurable visualization options.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soccer%20ball.jpg-qOnpJGqIpW9fDtnPhVIii4OjCiyqrF.jpeg",
    link: "https://github.com/androodo/Soccer-Score-Predictor",
    tech: ["Python", "scikit-learn", "Pandas", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "LocaInsight",
    description:
      "Built a full-stack travel application that generates personalized itineraries with comprehensive data validation, seamless third-party API integration, robust caching mechanisms, and optimized response times. Added robust error handling and response caching to improve reliability and reduce API response time by 20%.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/globe.jpg-QOELU7buQpXR6AMdZG6xcphL0HX8CA.jpeg",
    link: "https://github.com/androodo/LocaInsight",
    tech: ["React", "Node.js", "Express", "Google Maps API", "Axios", "OpenAI GPT"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
