import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

const fontSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontSerif = Nunito({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'ResumeCraft',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
