"use client"
import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? 20 : 200]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -20 : -200]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [isMobile ? 2 : 10, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [isMobile ? 2 : 10, 0]), springConfig)
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -100 : -300, isMobile ? 100 : 200]),
    springConfig,
  )

  return (
    <div
      ref={ref}
      className="w-full min-h-[150vh] md:min-h-[200vh] py-10 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-6 md:gap-10 px-4 md:px-6 mt-6 md:mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {products.slice(0, 2).map((product, i) => (
            <ProductCard
              key={`${product.title}-${i}`}
              product={product}
              translate={i % 2 === 0 ? translateX : translateXReverse}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <ProductCard product={products[2]} translate={translateX} featured />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {products.slice(3, 5).map((product, i) => (
            <ProductCard
              key={`${product.title}-${i}`}
              product={product}
              translate={i % 2 === 0 ? translateXReverse : translateX}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-6 md:py-10 px-4 w-full left-0 top-0 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white">{"Camilla Vieira"}</h1>
      <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-xl mt-3 md:mt-6 dark:text-neutral-200">
        {"Artista visual, fotografa e mentora apaixonada por transformar emocoes em imagens."}
      </p>
      <div className="relative z-50 mt-6 md:mt-8">
        <a
          href="#servicos"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border-2 border-primary-foreground/10"
          onClick={(e) => {
            e.preventDefault()
            const servicosSection = document.getElementById("servicos")
            if (servicosSection) {
              servicosSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Acessar Serviços
        </a>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
  featured = false,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
  featured?: boolean
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      key={product.title}
      className={`group/product w-full relative flex-shrink-0 ${featured ? "md:col-span-2" : ""}`}
    >
      <Link href={product.link} className="block group-hover/product:shadow-xl">
        <div
          className={`relative overflow-hidden rounded-lg ${featured ? "aspect-[16/9]" : "aspect-[4/5] md:aspect-[3/4]"}`}
        >
          <Image
            src={product.thumbnail || "/placeholder.svg"}
            fill
            className="object-cover object-center transform group-hover/product:scale-105 transition-transform duration-500"
            alt={product.title}
            sizes={
              featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
            <h2 className="text-white text-base md:text-lg font-medium">{product.title}</h2>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

