import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Panasonic Avionics Corporation",
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
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 section-title">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.location}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
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
