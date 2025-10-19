import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 card-hover group"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-semibold border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group/link"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
