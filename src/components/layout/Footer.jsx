import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white w-full py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-lg font-bold">Óptica</div>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#inicio" className="hover:text-white">Inicio</a>
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#catalogo" className="hover:text-white">Catálogo</a>
            <a href="#nosotros" className="hover:text-white">Nosotros</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
          <div className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Óptica. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
