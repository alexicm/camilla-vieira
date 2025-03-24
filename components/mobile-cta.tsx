"use client"
import { useEffect, useState } from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão quando o usuário rolar além de 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToServices = () => {
    const servicosSection = document.getElementById("servicos")
    if (servicosSection) {
      servicosSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToServices}
      className="sticky-cta fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl border-2 border-primary-foreground/10 text-base font-medium md:hidden"
    >
      Acessar Serviços
    </button>
  )
}

