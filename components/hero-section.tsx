"use client"
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import RotatingText from "./RotatingText"

export default function HeroSection() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="h-[40rem] flex flex-col items-center justify-center bg-white w-full gap-4 mx-auto px-8 relative">
      <div className="text-center relative z-20 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
          <RotatingText
            texts={["Camilla Vieira", "Artista Visual", "Fotógrafa", "Mentora"]}
            mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Camilla Vieira é artista visual, fotógrafa e mentora, apaixonada por transformar emoções em imagens.
          Especialista em retratos femininos e no poder da imagem como expressão e identidade, também guia artistas e
          profissionais em processos criativos, ajudando-os a construir uma narrativa visual autêntica e impactante.
        </p>
        <button
          onClick={scrollToServices}
          className="relative z-50 inline-flex items-center justify-center rounded-md bg-[#9b3d3d] px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all hover:bg-[#8a3636] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b3d3d]/50 border border-[#9b3d3d]/20"
        >
          Acessar Serviços
        </button>
      </div>

      {/* Botão de voltar ao topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-xl border border-white/20 hover:bg-black/80 transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

