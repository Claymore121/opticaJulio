import React from 'react'

export const MobileMenu = ({ isOpen, links, onClose }) => {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/20 backdrop-blur-xs transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-over menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 max-w-xs bg-white border-l border-slate-100 shadow-2xl flex flex-col p-6 z-45 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Spacer to align content nicely under header */}
        <div className="h-16 flex-shrink-0" />

        {/* Navigation links */}
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-slate-700 hover:text-slate-900 text-lg font-medium py-2 border-b border-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
