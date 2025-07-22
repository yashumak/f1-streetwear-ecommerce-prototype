// ✅ IMPROVEMENT: Reusable button component with consistent styling
import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RacingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function RacingButton({ variant = "primary", size = "md", className, children, ...props }: RacingButtonProps) {
  const baseStyles = "font-bold tracking-wide transition-all duration-300 hover:scale-105"

  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/25",
    secondary: "border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Button>
  )
}
