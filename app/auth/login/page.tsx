"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", formData)
    // Handle login logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-gray-900 via-black to-red-950">
      {/* F1 Racing Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-orange-500 to-silver-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-silver-400 via-orange-500 to-red-600"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>

      <div className="max-w-md w-full mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-red-600/30 rounded-xl p-8 shadow-2xl shadow-red-600/20">
          {/* F1-Inspired Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30">
                <span className="text-white font-black text-2xl">V</span>
              </div>
            </div>
            <h1 className="text-4xl font-black mb-4 tracking-tight bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">
              WELCOME BACK
            </h1>
            <p className="text-gray-300 text-lg font-medium">Sign in to your racing account</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-white font-bold text-lg mb-3 block tracking-wide">
                EMAIL ADDRESS
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black/50 border-2 border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white h-12 text-lg font-medium rounded-lg transition-all duration-300"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white font-bold text-lg mb-3 block tracking-wide">
                PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-black/50 border-2 border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white h-12 text-lg font-medium rounded-lg transition-all duration-300"
                required
              />
            </div>

            {/* F1-Inspired Racing Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-500 hover:via-red-400 hover:to-orange-400 text-white text-lg py-4 font-black tracking-wide rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/30 border-2 border-red-500/30"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>SIGN IN</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
            </Button>
          </form>

          <div className="mt-8 text-center space-y-6">
            <Link
              href="/auth/forgot-password"
              className="text-orange-400 hover:text-orange-300 transition-colors font-bold text-lg hover:underline decoration-orange-400"
            >
              Forgot your password?
            </Link>

            <div className="border-t border-gray-700/50 pt-6">
              <p className="text-gray-400 font-medium text-lg">
                Don't have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-red-400 hover:text-red-300 transition-colors font-bold hover:underline decoration-red-400"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* F1 Racing Accent Lines */}
          <div className="absolute -top-1 left-8 right-8 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full"></div>
          <div className="absolute -bottom-1 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 rounded-full"></div>
        </div>

        {/* Racing Grid Pattern */}
        <div className="absolute -z-10 inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="bg-red-500 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
