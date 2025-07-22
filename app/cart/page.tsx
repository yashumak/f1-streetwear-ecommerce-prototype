// ✅ IMPROVEMENT: Streamlined cart with better UX
"use client"

import Image from "next/image"
import Link from "next/link"
import { RacingButton } from "@/components/ui/racing-button"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-8" />
          <h1 className="text-4xl font-black mb-6">CART EMPTY</h1>
          <p className="text-gray-400 text-lg mb-8">Ready to gear up?</p>
          <Link href="/products">
            <RacingButton size="lg">START SHOPPING</RacingButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 tracking-tight">
          YOUR <span className="text-red-500">CART</span>
        </h1>

        <div className="space-y-6 mb-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex items-center space-x-6"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                <p className="text-red-500 font-bold text-xl">${item.price}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center text-white"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center text-white"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center text-white ml-4"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-black">TOTAL:</span>
            <span className="text-3xl font-black text-red-500">${total.toFixed(2)}</span>
          </div>
          <RacingButton size="lg" className="w-full">
            CHECKOUT
          </RacingButton>
        </div>
      </div>
    </div>
  )
}
