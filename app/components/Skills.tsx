const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "Java", "R", "HTML/CSS", "Bash"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "Flask", "scikit-learn", "Pandas", "Beautiful Soup"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Docker", "GitLab CI/CD", "AWS Vrack", "MongoDB", "REST APIs", "Git", "Jira", "Jupyter Notebook"],
  },
  {
    category: "Concepts & Protocols",
    skills: ["Containerization", "CI/CD Pipelines", "MQTT", "OpenAMIP", "TCP/IP", "UDP", "Agile Methodologies"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
