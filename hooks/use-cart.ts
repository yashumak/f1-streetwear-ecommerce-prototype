// ✅ IMPROVEMENT: Simplified cart logic with better performance
"use client"

import { useState, useEffect, useCallback } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("velocity-cart")
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("velocity-cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  // Computed values
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    items,
    itemCount,
    total,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  }
}
