import React from 'react'

export const Hero = () => {
  return (
    <section id="inicio" className="bg-slate-100 py-20 lg:py-32 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Bienvenido a Optica Aguilas
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-8">
          Esta es la sección de presentación. Maquetación básica para colocar el título principal, subtítulo y llamadas a la acción (CTA).
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
            Botón Primario
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition">
            Botón Secundario
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
