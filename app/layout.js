import './globals.css'
import { Inter } from 'next/font/google'
import Fav from "../public/sinti-logo-zip-file/svg/logo-black.svg"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Godwin',
  description: 'godwin is a developer that offers web development, UI/UX design to people or clients all over the world.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
