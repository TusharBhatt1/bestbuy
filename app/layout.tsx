import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Cart from './Components/cart/Cart'
import Navbar from './Components/Navbar'
import ToasterProvider from './Others/providers/ToasterProvider'
import WishlistModal from './Components/modal/WishListModal'
import PWA from './Components/PWA/PWA'
import AddToWishlistModal from './Components/modal/AddToWishlistModal'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Buy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ToasterProvider/>
    <AddToWishlistModal/>
      <WishlistModal/>
      <Cart/>
      <Navbar/>
      <PWA/>
      <div
      className='py-20'>
        {children}
        </div>
        </body>
    </html>
  )
}