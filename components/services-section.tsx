import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const services = [
  {
    title: "Caminho Criativo: Desperte Seu Olhar Fotográfico",
    description: "Participe do meu grupo gratuito no WhatsApp e explore minhas perspectivas na fotografia.",
    ctaText: "Acessar",
    ctaLink: "https://chat.whatsapp.com/FMQFDbNPgZOGDP7i0EFZ4J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cami_foto-kIpL0QcP38dHoO9QfP1WnxUUBytY2r.png",
  },
  {
    title: "Conecte-se Comigo",
    description:
      "Acesses meus serviços, Tire dúvidas, compartilhe ideias e receba orientações diretamente pelo WhatsApp.",
    ctaText: "Acessar",
    ctaLink: "https://typebot.co/camilla-vieira-chat-q4iucqh",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Conecte-se%20comigo-m2nuzvVyvIiRmrnn8j9frXZMwkSvux.jpeg",
  },
  {
    title: "Grupo VIP: Caminho Criativo",
    description: "Aprofunde seu aprendizado e faça parte de uma comunidade exclusiva por apenas R$ 17,90/mês.",
    ctaText: "Acessar",
    ctaLink: "https://pay.kiwify.com.br/MPYGi8C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grupo%20VIP-0fNbfy49NANSpcP39adXV6efYSI1yt.jpeg",
  },
  {
    title: "eBook: Processo Criativo",
    description: "Transforme sua criatividade em arte com meu guia essencial por R$ 49,00.",
    ctaText: "Acessar",
    ctaLink: "https://pay.kiwify.com.br/8meoumN",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full py-10 md:py-16 bg-[#b68c66]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 text-white">
          Links e Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              {service.image && (
                <div className="relative w-full overflow-hidden rounded-t-lg">
                  <AspectRatio ratio={1}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </AspectRatio>
                </div>
              )}
              <CardHeader className="flex-1 pb-2">
                <CardTitle className="text-lg md:text-xl leading-tight">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-sm md:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button asChild className="w-full bg-[#d9a441] hover:bg-[#c69438] border-[#d9a441] text-white">
                  <a href={service.ctaLink} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base">
                    {service.ctaText}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

