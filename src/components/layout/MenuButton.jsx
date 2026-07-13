import React from 'react'

export const MenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-50 text-slate-600 hover:text-slate-900 md:hidden"
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      <div className="relative w-6 h-5">
        {/* Top Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 top-2' : 'top-0'
          }`}
        />
        {/* Middle Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-2 ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100'
          }`}
        />
        {/* Bottom Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 top-2' : 'top-4'
          }`}
        />
      </div>
    </button>
  )
}

export default MenuButton
