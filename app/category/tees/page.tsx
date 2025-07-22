import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function TeesPage() {
  const teeProducts = products.filter((product) => product.category === "tees")

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            RACING <span className="text-racing">TEES</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Premium cotton tees engineered with racing DNA. Each design captures the essence of Formula 1 precision and
            urban streetwear innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
