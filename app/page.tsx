
import Image from "next/image"
import Link from "next/link"
import { RacingButton } from "@/components/ui/racing-button"

export default function HomePage() {
  const categories = [
    { name: "Tees", href: "/products", active: true },
    { name: "Jackets", active: false },
    { name: "Caps", active: false },
    { name: "Accessories", active: false },
    { name: "Limited", active: false },
  ]

  return (
    <div>
      {/* Hero - Streamlined messaging */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=F1+Racing+Hero"
            alt="F1 Racing"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="text-white">RACE</span>
            <br />
            <span className="text-red-500">READY</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            F1-inspired streetwear engineered for speed and style
          </p>
          <Link href="/products">
            <RacingButton size="lg">SHOP NOW</RacingButton>
          </Link>
        </div>
      </section>

      {/* Categories - Simplified grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">
            SHOP <span className="text-red-500">CATEGORIES</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.name}>
                {category.active ? (
                  <Link href={category.href!}>
                    <div className="bg-black border-2 border-gray-700 hover:border-red-500 rounded-lg p-8 text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-red-500 text-sm font-bold">SHOP NOW</p>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-8 text-center opacity-60">
                    <h3 className="text-xl font-bold text-gray-400 mb-2">{category.name}</h3>
                    <p className="text-gray-500 text-sm">COMING SOON</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
