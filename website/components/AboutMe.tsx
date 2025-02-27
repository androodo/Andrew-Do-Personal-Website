import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center glow">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden rounded-full tech-border p-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WIN_20240517_17_38_11_Pro.jpg-Ld8jye2pmf4EFWy3Htb7aAOADa9wqQ.jpeg"
              alt="Profile picture of Andrew Do"
              fill
              sizes="(max-width: 768px) 250px, 250px"
              className="object-cover object-[50%_35%] rounded-full"
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8 space-y-4">
          <p className="text-lg">
            Hello! My name is Andrew Do and I'm a Computer Science student at the University of California, Riverside.
            I'm passionate about software development, machine learning, and solving complex problems.
          </p>
          <p className="text-lg">
            Currently, I'm concentrating on enhancing user experiences through innovative software solutions in web and
            app development, while also advancing my expertise in machine learning and artificial intelligence to
            address real-world problems. I'm passionate about exploring and applying cutting-edge technologies and
            techniques in these rapidly evolving fields.
          </p>
          <p className="text-lg">
            When I'm not coding, you'll usually find me at the gym, kicking a soccer ball around, or playing my favorite
            songs on the piano.
          </p>
        </div>
      </div>
    </section>
  )
}

