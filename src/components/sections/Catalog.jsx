import React from 'react'

export const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Catálogo
          </h2>
          <p className="text-lg text-slate-600">
            Explora nuestra colección. Maquetación básica de catálogo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-slate-200 aspect-[4/3] flex items-center justify-center">
                <span className="text-slate-400 font-medium">Imagen del Producto {item}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Producto {item}</h3>
                <p className="text-slate-500 text-sm mb-3">Categoría de producto</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-950">$0.00</span>
                  <button className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
