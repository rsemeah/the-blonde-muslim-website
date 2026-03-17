"use client"

import { useState, useEffect } from "react"
import { AminaChat } from "./amina-chat"
import { Lock, ArrowRight } from "lucide-react"

const ACCESS_CODE_KEY = "amina-access-code"

export function CompanionGate() {
  const [accessCode, setAccessCode] = useState("")
  const [inputCode, setInputCode] = useState("")
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  // Check for stored access code on mount
  useEffect(() => {
    const stored = localStorage.getItem(ACCESS_CODE_KEY)
    if (stored) {
      setAccessCode(stored)
    }
  }, [])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputCode.trim()) return

    setIsVerifying(true)
    setError("")

    try {
      // Test the access code by making a simple request
      const response = await fetch("/api/companion/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-code": inputCode.trim(),
        },
        body: JSON.stringify({
          messages: [{ role: "user", parts: [{ type: "text", text: "test" }], id: "test" }],
        }),
      })

      if (response.status === 401) {
        setError("Invalid access code. Please check your Circle membership for the correct code.")
      } else {
        // Valid code - store it
        localStorage.setItem(ACCESS_CODE_KEY, inputCode.trim())
        setAccessCode(inputCode.trim())
      }
    } catch {
      setError("Unable to verify. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_CODE_KEY)
    setAccessCode("")
    setInputCode("")
  }

  // If we have a valid access code, show the chat
  if (accessCode) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Welcome to your companion session</p>
          <button
            onClick={handleLogout}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign out
          </button>
        </div>
        <AminaChat accessCode={accessCode} />
      </div>
    )
  }

  // Show access gate
  return (
    <div className="bg-card border border-border rounded-lg p-8 text-center">
      <div className="flex justify-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
      
      <h3 className="font-serif text-2xl text-foreground mb-2">
        Circle Members Only
      </h3>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Amina is an exclusive companion for members of The Circle. 
        Enter your access code to begin your conversation.
      </p>

      <form onSubmit={handleVerify} className="max-w-sm mx-auto space-y-4">
        <div>
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.toUpperCase())}
            placeholder="Enter your access code"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-center text-sm tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50"
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!inputCode.trim() || isVerifying}
          className="inline-flex w-full items-center justify-center gap-2 bg-[#1E5F8A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1E5F8A]/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
        >
          {isVerifying ? (
            "Verifying..."
          ) : (
            <>
              Access Amina
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-xs text-muted-foreground">
        Not a member yet?{" "}
        <a href="/circle" className="text-[#38BDF8] hover:underline">
          Join The Circle
        </a>
      </p>
    </div>
  )
}
