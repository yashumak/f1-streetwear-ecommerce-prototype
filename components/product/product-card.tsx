// ✅ IMPROVEMENT: Cleaner product card with better visual hierarchy
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-red-500 font-black text-xl">${product.price}</p>
        </div>
      </div>
    </Link>
  )
}
