import React, { useEffect, useRef, useState } from 'react'

export const ScrollReveal = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px 0px -80px 0px', // Compensación para que la animación empiece dentro de la pantalla
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 filter blur-none'
          : 'opacity-0 -translate-y-10 scale-[0.98] filter blur-xs'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
