import './globals.css'
import {Inter, Roboto, Poppins} from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Tejas Kamble - Full Stack Developer',
  description: 'Portfolio of Tejas Kamble - MERN Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
