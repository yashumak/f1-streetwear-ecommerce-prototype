export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "VELOCITY Racing Tee",
    price: 65,
    image: "/placeholder.svg?height=500&width=500&text=VELOCITY+Racing+Tee",
    description:
      "Premium cotton racing tee with aerodynamic design elements. Features moisture-wicking technology and bold VELOCITY branding inspired by F1 cockpit aesthetics.",
    category: "tees",
  },
  {
    id: "2",
    name: "GRID POSITION Tee",
    price: 58,
    image: "/placeholder.svg?height=500&width=500&text=GRID+POSITION+Tee",
    description:
      "Minimalist design featuring starting grid graphics. Crafted from sustainable materials with racing-inspired cut and premium finish.",
    category: "tees",
  },
  {
    id: "3",
    name: "PODIUM FINISH Tee",
    price: 72,
    image: "/placeholder.svg?height=500&width=500&text=PODIUM+FINISH+Tee",
    description:
      "Victory-inspired design with champagne spray graphics. Limited edition tee celebrating the pinnacle of racing achievement.",
    category: "tees",
  },
  {
    id: "4",
    name: "VELOCITY  CORNER Tee",
    price: 62,
    image: "/placeholder.svg?height=500&width=500&text=VELOCITY +CORNER+Tee",
    description:
      "Technical racing tee with corner trajectory graphics. Features performance fabric blend and ergonomic racing fit.",
    category: "tees",
  },
  {
    id: "5",
    name: "TURBO BOOST Tee",
    price: 68,
    image: "/placeholder.svg?height=500&width=500&text=TURBO+BOOST+Tee",
    description:
      "High-performance tee with turbocharger-inspired design. Premium construction with racing team quality standards.",
    category: "tees",
  },
  {
    id: "6",
    name: "CIRCUIT MASTER Tee",
    price: 75,
    image: "/placeholder.svg?height=500&width=500&text=CIRCUIT+MASTER+Tee",
    description:
      "Professional racing tee featuring iconic circuit layouts. Designed for racing enthusiasts who demand excellence.",
    category: "tees",
  },
  {
    id: "7",
    name: "SPEED DEMON Tee",
    price: 55,
    image: "/placeholder.svg?height=500&width=500&text=SPEED+DEMON+Tee",
    description:
      "Bold streetwear design with velocity graphics. Combines urban style with racing heritage for the modern enthusiast.",
    category: "tees",
  },
  {
    id: "8",
    name: "CHAMPIONSHIP Tee",
    price: 85,
    image: "/placeholder.svg?height=500&width=500&text=CHAMPIONSHIP+Tee",
    description:
      "Premium championship edition tee with gold accents. Celebrates racing excellence with luxury materials and craftsmanship.",
    category: "tees",
  },
]

export const categories = [
  { name: "Tees", slug: "tees", active: true },
  { name: "Jackets", slug: "jackets", active: false },
  { name: "Caps", slug: "caps", active: false },
  { name: "Accessories", slug: "accessories", active: false },
  { name: "Limited", slug: "limited", active: false },
]
