import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Panasonic Avionics Corporation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ixDBsBMM3fz48ZmnAAkW0E5uhBglE.png",
    location: "Irvine, CA",
    period: "Jun. 2025 – Sep. 2025",
    achievements: [
      "Designed and Docker-containerized a Python-based satellite-modem simulator (Flask REST API, OpenAMIP, MQTT) and deployed it via GitLab CI/CD to AWS Vrack, replacing $500k physical modems per test rack, slashing capital spend, and enabling fully automated integration testing across multiple aircraft-connectivity platforms.",
      "Implemented a full, secure, scalable REST interface—auth, configuration, and live-status endpoints—powering one-click CI automation and shrinking test-environment setup from hours to minutes.",
      "Added OpenAMIP and MQTT messaging layers with a realistic initialization state machine that streams heartbeats, location, and status updates, boosting test fidelity and cutting flaky failures by 70%.",
      "Partnered closely with cross-functional hardware, network, and QA teams to seamlessly embed the virtual modem in inflight-connectivity pipelines, doubling concurrent integration-test throughput across the entire lab environment.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "SuperIntro",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c7bAAR6nQAxMQF4Sld2pSYMyDfTgGS.png",
    location: "San Francisco, CA",
    period: "Feb. 2025 – Apr. 2025",
    achievements: [
      "Developed features using Figma, TypeScript, React, Express, and MongoDB; optimized user matching with MongoDB filters to cut OpenAI API costs by 20% and improve match quality by 15%.",
      "Engineered user onboarding and the first monetized feature in close collaboration with the founder.",
      "Implemented AI-driven persona-matching with LangGraph and LangChain, enhancing decision-making accuracy.",
      "Designed and implemented scalable RESTful APIs and built a responsive, component-driven UI using React, TypeScript, and Tailwind CSS, significantly optimizing user interactions and cross-device interface responsiveness.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 section-title">Experience</h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 border-l-2 border-blue-600/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white"></div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-5 flex-1">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 font-medium bg-blue-50 px-4 py-2 rounded-lg lg:self-start">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 text-gray-700 leading-relaxed">
                      <span className="text-blue-600 mt-1.5 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
