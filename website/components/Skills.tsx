const skills = [
    "C++",
    "HTML CSS",
    "JavaScript",
    "Typescript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "R",
    "Git",
    "Machine Learning",
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center glow">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:bg-gray-600 animate-pulse-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  