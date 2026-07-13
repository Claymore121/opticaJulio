import React from 'react'

export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Maquetación básica para la sección de historia, misión o valores. Puedes colocar la descripción de la marca o empresa aquí.
            </p>
            <p className="text-slate-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="border-l-4 border-slate-900 pl-4 py-2 italic text-slate-500">
              "Frase destacada o lema de la marca para conectar con el usuario."
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-slate-200">
            <span className="text-slate-400 font-medium">Espacio para Imagen corporativa/equipo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
