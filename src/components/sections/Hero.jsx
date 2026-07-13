import React from 'react'
import ImageCarousel from '../ui/ImageCarousel'

// Import all local assets
import img1 from '../../assets/pexels-ariel-white-221095637-11954922.jpg'
import img2 from '../../assets/pexels-glassesshop-gs-1317359316-27237494.jpg'
import img3 from '../../assets/pexels-kseniachernaya-5715885.jpg'
import img4 from '../../assets/pexels-kseniachernaya-5752304.jpg'
import img5 from '../../assets/pexels-shamin-1043330.jpg'

const OPTICA_IMAGES = [img1, img2, img3, img4, img5]

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel images={OPTICA_IMAGES} autoPlayInterval={6000} />
      </div>

      {/* Content overlay with Glassmorphism */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-950/25 hover:bg-slate-950/30 border border-white/20 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-2xl transition-all duration-300">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 font-playfair">
            Tu Visión, Nuestra Pasión
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-100 mb-8 font-sans">
            Descubre la combinación perfecta de salud visual y estilo. Explora nuestro catálogo de lentes y encuentra el par ideal para ti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#catalogo"
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition shadow-md"
            >
              Ver Catálogo
            </a>
            <a
              href="#contacto"
              className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition shadow-md backdrop-blur-xs"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
