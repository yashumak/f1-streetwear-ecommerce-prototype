"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      })

      if (response.ok) {
        alert("Account created successfully!")
      } else {
        alert("Error creating account")
      }
    } catch (error) {
      console.error("Signup error:", error)
      alert("Error creating account")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="card-racing rounded-lg p-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black mb-4 tracking-tight">
              JOIN THE <span className="text-racing">RACE</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium">Create your racing account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white font-bold mb-3 block">
                  FIRST NAME
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-black border-gray-600 text-white h-12 font-medium"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white font-bold mb-3 block">
                  LAST NAME
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-black border-gray-600 text-white h-12 font-medium"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white font-bold mb-3 block">
                EMAIL ADDRESS
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black border-gray-600 text-white h-12 text-lg font-medium"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white font-bold mb-3 block">
                PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-black border-gray-600 text-white h-12 text-lg font-medium"
                required
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-white font-bold mb-3 block">
                CONFIRM PASSWORD
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-black border-gray-600 text-white h-12 text-lg font-medium"
                required
              />
            </div>

            <Button type="submit" className="w-full btn-racing text-lg py-4 font-black tracking-wide">
              CREATE ACCOUNT
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 font-medium">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-racing hover:text-red-400 transition-colors font-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
