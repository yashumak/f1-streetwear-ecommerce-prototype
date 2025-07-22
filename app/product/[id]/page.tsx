// ✅ IMPROVEMENT: Focused product page without feature bloat
"use client"

import { useState } from "react"
import Image from "next/image"
import { RacingButton } from "@/components/ui/racing-button"
import { products } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart, Check } from "lucide-react"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-black mb-4 tracking-tight">{product.name}</h1>
              <p className="text-3xl font-black text-red-500 mb-6">${product.price}</p>
              <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>

            <RacingButton
              size="lg"
              onClick={handleAddToCart}
              className={`flex items-center space-x-3 w-fit ${isAdded ? "bg-green-600 hover:bg-green-700" : ""}`}
            >
              {isAdded ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
              <span>{isAdded ? "ADDED!" : "ADD TO CART"}</span>
            </RacingButton>
          </div>
        </div>
      </div>
    </div>
  )
}
