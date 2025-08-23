import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, newPassword } = body

    
    const webhookUrl = "YOUR_MAKE_WEBHOOK_URL_HERE"

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        newPassword,
        timestamp: new Date().toISOString(),
        type: "password_reset",
      }),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Failed to save data" }, { status: 500 })
    }
  } catch (error) {
    console.error("Password reset API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
