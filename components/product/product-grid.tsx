// ✅ IMPROVEMENT: Dedicated product grid component for reusability
import ProductCard from "./product-card"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
  title?: string
  emptyMessage?: string
}

export default function ProductGrid({ products, title, emptyMessage = "No products found" }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-xl">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div>
      {title && <h2 className="text-3xl font-black mb-12 tracking-tight text-center">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
