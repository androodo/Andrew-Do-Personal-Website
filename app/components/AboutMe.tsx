import Image from "next/image"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-shrink-0">
          <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden rounded-full border-4 border-blue-600 shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20Picture.png-ZFEkT9RD5e4tllfSawGW272qer3U1C.jpeg"
              alt="Profile picture of Andrew Do"
              fill
              sizes="(max-width: 768px) 250px, 250px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Andrew Do</h1>
            <p className="text-xl text-blue-600 font-medium">Computer Science Student at UC Riverside</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+16573529910"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(657) 352-9910</span>
            </a>
            <a
              href="mailto:doandrew21@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>doandrew21@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/andrew-do-93b14b17a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/androodo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              I'm currently pursuing an <strong>Accelerated B.S. + M.S. in Computer Science</strong> at the University
              of California, Riverside, expected to graduate in June 2027. I'm passionate about software engineering,
              machine learning, and building scalable solutions.
            </p>
            <p className="text-lg leading-relaxed">
              As <strong>Head of Technical Projects</strong> at the Quant Club and a <strong>2nd place winner</strong>{" "}
              at the UC Riverside Programming Challenge (UCRPC), I thrive on tackling complex problems and collaborating
              with talented teams.
            </p>
            <p className="text-lg leading-relaxed">
              I've had the privilege of working as a Software Engineer Intern at{" "}
              <strong>Panasonic Avionics Corporation</strong> and <strong>SuperIntro</strong>, where I developed
              containerized solutions, optimized APIs, and built full-stack applications that deliver real impact.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me at the gym, playing soccer, or practicing piano.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
