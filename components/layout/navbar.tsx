// ✅ IMPROVEMENT: Simplified navbar with better UX
"use client"

import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export default function Navbar() {
  const { itemCount } = useCart()

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Simplified and more memorable */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <span className="text-2xl font-black text-white">VELOCITY</span>
          </Link>

          {/* Actions - Streamlined */}
          <div className="flex items-center space-x-6">
            <Link href="/products" className="text-gray-300 hover:text-white font-semibold transition-colors">
              SHOP
            </Link>

            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link href="/auth/login" className="group">
              <User className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
