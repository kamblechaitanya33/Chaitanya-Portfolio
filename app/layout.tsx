import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chaitanya Kamble - Mobile App Developer',
  description: 'Premium portfolio of Chaitanya Kamble, a skilled Mobile Application Developer specializing in Android and Flutter development. Showcasing expertise in ERP, CRM, Fintech, and custom app solutions.',
  generator: 'v0.app',
  keywords: ['Mobile Developer', 'Android', 'Flutter', 'App Development', 'Fintech'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans antialiased bg-slate-950 text-slate-50 overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
