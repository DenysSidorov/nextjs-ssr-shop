import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import '@/app/styles/globals.css'

const font = Merriweather({ subsets: ['latin'], weight: ["300", "400", "700"] })

export const metadata: Metadata = {
  title: 'Landing',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={font.className}>
          <div>Landing Layout</div>
          <div>
              {children}
          </div>
      </div>
  )
}
