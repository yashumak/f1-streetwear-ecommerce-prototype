// ✅ IMPROVEMENT: Unified products page with integrated search
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ProductGrid from "@/components/product/product-grid"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products
    return products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  }, [searchQuery])

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with integrated search */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-8 tracking-tight">
            RACING <span className="text-red-500">COLLECTION</span>
          </h1>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-900 border-gray-700 text-white h-12 text-lg"
            />
          </div>
        </div>

        {/* Results */}
        <ProductGrid products={filteredProducts} emptyMessage={`No products found for "${searchQuery}"`} />
      </div>
    </div>
  )
}
