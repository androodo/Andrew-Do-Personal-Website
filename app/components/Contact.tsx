import { Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
            <p className="text-gray-700 text-center mb-10 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-5 py-3.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
