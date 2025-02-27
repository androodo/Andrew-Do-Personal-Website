"use client"

import Link from "next/link"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="bg-gray-800 text-gray-100 py-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold glow">
          Andrew Do
        </Link>
        <ul className="flex space-x-6">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

