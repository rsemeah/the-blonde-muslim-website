"use client"

import { useState, useEffect, useRef } from "react"
import { AminaChat } from "./amina-chat"
import { Sparkles, X, Lock, ArrowRight, GripVertical, MessageCircle } from "lucide-react"

const ACCESS_CODE_KEY = "amina-access-code"

export function AminaWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [inputCode, setInputCode] = useState("")
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  
  // Draggable state
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Check for stored access code on mount
  useEffect(() => {
    const stored = localStorage.getItem(ACCESS_CODE_KEY)
    if (stored) {
      setAccessCode(stored)
    }
    // Check if user has interacted with widget before
    const interacted = localStorage.getItem("amina-interacted")
    if (interacted) {
      setHasInteracted(true)
    }
  }, [])

  // Handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!widgetRef.current) return
    setIsDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragRef.current) return
      
      const deltaX = e.clientX - dragRef.current.startX
      const deltaY = e.clientY - dragRef.current.startY
      
      setPosition({
        x: dragRef.current.startPosX + deltaX,
        y: dragRef.current.startPosY + deltaY,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      dragRef.current = null
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputCode.trim()) return

    setIsVerifying(true)
    setError("")

    try {
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
        setError("Invalid code - please try again")
      } else {
        localStorage.setItem(ACCESS_CODE_KEY, inputCode.trim())
        localStorage.setItem("amina-interacted", "true")
        setAccessCode(inputCode.trim())
        setHasInteracted(true)
      }
    } catch {
      setError("Connection error - try again")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
    localStorage.setItem("amina-interacted", "true")
    setHasInteracted(true)
  }

  return (
    <>
      {/* Floating button with pulse animation for new users */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5F8A] to-[#1E5F8A]/80 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 ${isOpen ? "hidden" : ""} ${!hasInteracted ? "animate-pulse" : ""}`}
        aria-label="Open Amina companion"
      >
        <Sparkles className="h-6 w-6" />
        {!hasInteracted && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#38BDF8]" />
          </span>
        )}
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed z-50 w-[400px] h-[580px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300"
          style={{
            bottom: `${24 - position.y}px`,
            right: `${24 - position.x}px`,
          }}
        >
          {/* Draggable header */}
          <div
            className={`flex items-center justify-between p-3 border-b border-border bg-gradient-to-r from-[#38BDF8]/10 to-[#1E5F8A]/10 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center gap-2.5">
              <GripVertical className="h-4 w-4 text-muted-foreground/50" />
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20">
                  <Sparkles className="h-4 w-4 text-[#38BDF8]" />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" />
              </div>
              <div>
                <span className="font-serif text-sm text-foreground">Amina</span>
                <p className="text-[10px] text-muted-foreground">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Content area */}
          <div className="h-[calc(100%-56px)]">
            {accessCode ? (
              <AminaChat accessCode={accessCode} isWidget />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-b from-transparent to-secondary/20">
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/50">
                    <Lock className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-card border-2 border-border">
                    <MessageCircle className="h-3.5 w-3.5 text-[#38BDF8]" />
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">Circle Members Only</h4>
                <p className="text-sm text-muted-foreground mb-8 max-w-xs leading-relaxed">
                  Enter your access code to chat with Amina, your trusted AI companion.
                </p>
                
                <form onSubmit={handleVerify} className="w-full max-w-xs space-y-4">
                  <div>
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                      placeholder="Enter access code"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-center text-sm tracking-[0.2em] text-foreground placeholder:text-muted-foreground placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 focus:border-[#38BDF8]/50 transition-all"
                    />
                    {error && (
                      <p className="mt-2 text-xs text-red-500 animate-in fade-in duration-200">{error}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!inputCode.trim() || isVerifying}
                    className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-br from-[#1E5F8A] to-[#1E5F8A]/80 px-4 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none rounded-xl"
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

                <a 
                  href="/circle" 
                  className="mt-6 inline-flex items-center gap-1 text-xs text-[#38BDF8] hover:underline transition-colors"
                >
                  Not a member? Join The Circle
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
