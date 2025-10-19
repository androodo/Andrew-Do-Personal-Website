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
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
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
