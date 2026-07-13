import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Catalog from './components/sections/Catalog'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App