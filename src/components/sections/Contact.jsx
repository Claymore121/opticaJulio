import React from 'react'

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-slate-600">
            ¿Tienes alguna duda o quieres agendar una cita? Escríbenos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Información</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-slate-700">📍 Dirección:</span>
                <span className="text-slate-600">Calle Ejemplo #123, Ciudad, País</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-slate-700">📞 Teléfono:</span>
                <span className="text-slate-600">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-slate-700">✉️ Correo:</span>
                <span className="text-slate-600">contacto@optica.com</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-4 bg-white p-8 rounded-xl border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-950 focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-950 focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-950 focus:border-transparent outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-950 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
