import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camilla Vieira',
  description: 'Camilla Vieira é artista visual, fotógrafa e mentora, apaixonada por transformar emoções em imagens.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
