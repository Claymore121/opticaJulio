import React from 'react'

export const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-slate-600">
            Maquetación básica para la sección de servicios o características principales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-slate-900 font-bold">{item}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-2">Servicio {item}</h3>
              <p className="text-slate-600 text-sm">
                Descripción básica del servicio ofrecido. Espacio para detalles del servicio {item}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
