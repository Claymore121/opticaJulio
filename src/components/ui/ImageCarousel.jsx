import React, { useState, useEffect, useCallback } from 'react'

export const ImageCarousel = ({ images = [], autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    if (images.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = () => {
    if (images.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (images.length === 0 || isHovered) return

    const slideTimer = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(slideTimer)
  }, [nextSlide, autoPlayInterval, images.length, isHovered])

  if (images.length === 0) {
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
        Sin imágenes
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide de Óptica ${idx + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
                idx === currentIndex ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Subtle Overlay to make text more readable */}
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/20 backdrop-blur-xs text-white flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Diapositiva anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/20 backdrop-blur-xs text-white flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Diapositiva siguiente"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
              idx === currentIndex
                ? 'bg-white w-6 shadow-sm'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
