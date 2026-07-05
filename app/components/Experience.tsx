import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Panasonic Avionics Corporation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ixDBsBMM3fz48ZmnAAkW0E5uhBglE.png",
    location: "Irvine, CA",
    period: "Jun. 2026 – Sep. 2026",
    achievements: [
      "Owned a first-of-its-kind hybrid virtual rack CI workflow extending physical Intel NUC-based rack testing with AWS/Kubernetes-backed virtual servers, reducing repeated environment setup time by an estimated 60%.",
      "Engineered GitLab CI/CD automation using Python, Bash, YAML, Docker, and pytest to generate rack configurations, deploy builds, run smoke/regression suites, and gate promotion through a 3-stage virtual-to-physical validation hierarchy.",
      "Built an AI-assisted CI failure triage layer using LangChain, OpenAI LLMs, embeddings/RAG, JUnit/log parsing, and JIRA APIs to retrieve similar failures, classify root causes, summarize logs, and create actionable tickets, reducing manual debugging effort by an estimated 70%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Panasonic Avionics Corporation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ixDBsBMM3fz48ZmnAAkW0E5uhBglE.png",
    location: "Irvine, CA",
    period: "Jun. 2025 – Sep. 2025",
    achievements: [
      "Designed and Dockerized a Python-based satellite modem simulator for distributed integration testing, exposing REST APIs, MQTT pub/sub, and programmable device states to reduce dependence on physical hardware.",
      "Deployed simulator services through GitLab CI/CD on AWS with structured logs, telemetry, and repeatable initialization workflows, cutting manual test environment setup from hours to minutes.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "SuperIntro",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c7bAAR6nQAxMQF4Sld2pSYMyDfTgGS.png",
    location: "San Francisco, CA",
    period: "Feb. 2025 – Apr. 2025",
    achievements: [
      "Built a production LLM agent matching service with LangGraph, LangChain, Azure OpenAI, tool calling, memory, embeddings, eval harnesses, and guardrails, improving match quality by 15%.",
      "Owned backend and frontend systems for onboarding and paid subscriptions using React, TypeScript, Express, and PostgreSQL; reduced median LLM response latency by 35% through caching, batching, and streaming.",
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
