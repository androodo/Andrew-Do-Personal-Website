import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Andrew Do. All rights reserved.</p>
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            Built using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
