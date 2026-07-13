import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuButton from './MenuButton'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="w-full bg-white shadow-xs fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-slate-900">Óptica Aguilas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu isOpen={isOpen} links={NAV_LINKS} onClose={closeMenu} />
    </header>
  )
}

export default Navbar
