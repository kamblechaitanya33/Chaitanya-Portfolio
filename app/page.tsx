import { Navigation } from '@/components/layout/Navigation'
import { Sidebar } from '@/components/layout/Sidebar'
import { EmailSidebar } from '@/components/layout/EmailSidebar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      {/* Layout Components */}
      <Navigation />
      <Sidebar />
      <EmailSidebar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 text-center text-sm text-slate-400">
        <p>
          © 2024 Chaitanya Kamble. Crafted with care using Next.js & Framer
          Motion.
        </p>
      </footer>
    </main>
  )
}
