"use client"

import Link from "next/link"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

export default function Navbar() {
  const { state } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 racing-gradient rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <span className="text-2xl font-black text-white tracking-tight">VELOCITY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white font-semibold transition-colors">
              HOME
            </Link>
            <Link href="/category/tees" className="text-gray-300 hover:text-white font-semibold transition-colors">
              PRODUCTS
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-300 hover:text-white transition-colors group">
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <Link href="/auth/login" className="p-2 text-gray-300 hover:text-white transition-colors group">
              <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/category/tees"
              className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTS
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
