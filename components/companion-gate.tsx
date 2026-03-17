"use client"

import { useState, useEffect } from "react"
import { AminaChat } from "./amina-chat"
import { Lock, ArrowRight, Sparkles, Shield, Heart } from "lucide-react"

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
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm text-muted-foreground">Connected to Amina</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary"
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
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-[#38BDF8]/10 via-transparent to-[#1E5F8A]/10 p-10 text-center">
        <div className="relative inline-flex mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/50 shadow-inner">
            <Lock className="h-9 w-9 text-muted-foreground" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-border shadow-sm">
            <Sparkles className="h-4 w-4 text-[#38BDF8]" />
          </div>
        </div>
        
        <h3 className="font-serif text-3xl text-foreground mb-3">
          Circle Members Only
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Amina is an exclusive AI companion for members of The Circle. 
          Enter your access code to begin your conversation.
        </p>
      </div>

      {/* Form section */}
      <div className="p-8 bg-gradient-to-b from-transparent to-secondary/10">
        <form onSubmit={handleVerify} className="max-w-sm mx-auto space-y-5">
          <div>
            <label htmlFor="access-code" className="sr-only">Access Code</label>
            <input
              id="access-code"
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              placeholder="Enter your access code"
              className="w-full rounded-xl border border-border bg-background px-5 py-4 text-center text-sm tracking-[0.25em] text-foreground placeholder:text-muted-foreground placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 focus:border-[#38BDF8]/50 transition-all"
            />
            {error && (
              <p className="mt-3 text-sm text-red-500 text-center animate-in fade-in slide-in-from-top-1 duration-200">
                {error}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={!inputCode.trim() || isVerifying}
            className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-br from-[#1E5F8A] to-[#1E5F8A]/80 px-6 py-4 text-sm font-medium text-white transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none rounded-xl"
          >
            {isVerifying ? (
              <>
                <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Access Amina
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-10 flex items-center justify-center gap-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-[#38BDF8]" />
            <span>Private & Secure</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5 text-[#38BDF8]" />
            <span>Made with Care</span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not a member yet?{" "}
          <a href="/circle" className="text-[#38BDF8] hover:underline font-medium inline-flex items-center gap-1">
            Join The Circle
            <ArrowRight className="h-3 w-3" />
          </a>
        </p>
      </div>
    </div>
  )
}
