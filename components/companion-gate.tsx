"use client"

import { useState, useEffect } from "react"
import { AminaChat } from "./amina-chat"
import { Lock, ArrowRight, Shield, Heart, Moon } from "lucide-react"

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
      // Use lightweight verify endpoint — does not call Groq
      const response = await fetch("/api/companion/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: inputCode.trim() }),
      })

      const data = await response.json()

      if (!data.valid) {
        setError("Invalid access code. Please check your Circle membership for the correct code.")
      } else {
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

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-[#F7F2EB] p-10 text-center">
        <div className="relative inline-flex mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F2ECE4] shadow-inner">
            <Lock className="h-9 w-9 text-[#8E9878]" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-border shadow-sm">
            <Moon className="h-4 w-4 text-[#D7BA82]" />
          </div>
        </div>

        <h3 className="font-serif text-3xl text-[#2C2926] mb-3">
          Circle Members Only
        </h3>
        <p className="text-[#2C2926]/70 max-w-md mx-auto leading-relaxed">
          Amina is an exclusive companion for members of The Circle.
          Enter your access code to begin your conversation.
        </p>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleVerify} className="max-w-sm mx-auto space-y-5">
          <div>
            <label htmlFor="access-code" className="sr-only">Access Code</label>
            <input
              id="access-code"
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.toUpperCase())}
              placeholder="Enter your access code"
              autoComplete="off"
              className="w-full rounded-xl border border-border bg-[#F7F2EB] px-5 py-4 text-center text-sm tracking-[0.25em] text-[#2C2926] placeholder:text-[#2C2926]/40 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#C9796A]/30 focus:border-[#C9796A]/50 transition-all"
            />
            {error && (
              <p role="alert" className="mt-3 text-sm text-red-500 text-center">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!inputCode.trim() || isVerifying}
            className="inline-flex w-full items-center justify-center gap-2 bg-[#C9796A] hover:bg-[#b86a5c] px-6 py-4 text-sm font-medium text-white transition-all hover:shadow-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
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

        <div className="mt-10 flex items-center justify-center gap-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-[#8E9878]" />
            <span>Private &amp; Secure</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5 text-[#C9796A]" />
            <span>Made with Care</span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not a member yet?{" "}
          <a href="/circle" className="text-[#C9796A] hover:underline font-medium inline-flex items-center gap-1">
            Join The Circle
            <ArrowRight className="h-3 w-3" />
          </a>
        </p>
      </div>
    </div>
  )
}
