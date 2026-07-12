import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Andrew Do | Software Engineer",
  description: "Andrew Do is a Computer Science student at UC Riverside building AI, infrastructure, and full-stack products.",
  generator: "v0.app",
}

export const viewport: Viewport = { themeColor: "#08101f", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
