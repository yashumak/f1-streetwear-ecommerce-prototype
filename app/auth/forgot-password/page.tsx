"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "otp" | "reset">("email")
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sending OTP to:", formData.email)
    setStep("otp")
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.otp === "123456") {
      setStep("reset")
    } else {
      alert('Invalid OTP. Try "123456" for demo.')
    }
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const response = await fetch("/api/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          newPassword: formData.newPassword,
        }),
      })

      if (response.ok) {
        alert("Password reset successfully!")
      } else {
        alert("Error resetting password")
      }
    } catch (error) {
      console.error("Password reset error:", error)
      alert("Error resetting password")
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
              RESET <span className="text-racing">PASSWORD</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium">
              {step === "email" && "Enter your email to receive OTP"}
              {step === "otp" && "Enter the OTP sent to your email"}
              {step === "reset" && "Create your new password"}
            </p>
          </div>

          {step === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white font-bold text-lg mb-3 block">
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

              <Button type="submit" className="w-full btn-racing text-lg py-4 font-black tracking-wide">
                SEND OTP
              </Button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <Label htmlFor="otp" className="text-white font-bold text-lg mb-3 block">
                  ENTER OTP
                </Label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleChange}
                  className="bg-black border-gray-600 text-white h-12 text-lg font-medium text-center tracking-widest"
                  placeholder="123456"
                  required
                />
                <p className="text-gray-500 text-sm mt-2 text-center">Demo OTP: 123456</p>
              </div>

              <Button type="submit" className="w-full btn-racing text-lg py-4 font-black tracking-wide">
                VERIFY OTP
              </Button>
            </form>
          )}

          {step === "reset" && (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <Label htmlFor="newPassword" className="text-white font-bold text-lg mb-3 block">
                  NEW PASSWORD
                </Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="bg-black border-gray-600 text-white h-12 text-lg font-medium"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-white font-bold text-lg mb-3 block">
                  CONFIRM NEW PASSWORD
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
                RESET PASSWORD
              </Button>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link href="/auth/login" className="text-racing hover:text-red-400 transition-colors font-bold">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
