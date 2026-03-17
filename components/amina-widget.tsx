"use client"

import { useState, useEffect, useRef } from "react"
import { AminaChat } from "./amina-chat"
import { Sparkles, X, Lock, ArrowRight, GripVertical } from "lucide-react"

const ACCESS_CODE_KEY = "amina-access-code"

export function AminaWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [inputCode, setInputCode] = useState("")
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  
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
        setError("Invalid code")
      } else {
        localStorage.setItem(ACCESS_CODE_KEY, inputCode.trim())
        setAccessCode(inputCode.trim())
      }
    } catch {
      setError("Try again")
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E5F8A] text-white shadow-lg transition-all hover:bg-[#1E5F8A]/90 hover:scale-105 ${isOpen ? "hidden" : ""}`}
        aria-label="Open Amina companion"
      >
        <Sparkles className="h-6 w-6" />
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed z-50 w-[380px] h-[550px] bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
          style={{
            bottom: `${24 - position.y}px`,
            right: `${24 - position.x}px`,
          }}
        >
          {/* Draggable header */}
          <div
            className={`flex items-center justify-between p-3 border-b border-border bg-secondary/50 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-blue/20">
                <Sparkles className="h-4 w-4 text-[#38BDF8]" />
              </div>
              <span className="font-serif text-sm text-foreground">Amina</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Content area */}
          <div className="h-[calc(100%-52px)]">
            {accessCode ? (
              <AminaChat accessCode={accessCode} isWidget />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary mb-4">
                  <Lock className="h-7 w-7 text-muted-foreground" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">Circle Members Only</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Enter your access code to chat with Amina
                </p>
                
                <form onSubmit={handleVerify} className="w-full max-w-xs space-y-3">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                    placeholder="Access code"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-center text-sm tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50"
                  />
                  {error && <p className="text-xs text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={!inputCode.trim() || isVerifying}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#1E5F8A] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E5F8A]/90 disabled:opacity-50 rounded-lg"
                  >
                    {isVerifying ? "Verifying..." : (
                      <>
                        Access
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <a 
                  href="/circle" 
                  className="mt-4 text-xs text-[#38BDF8] hover:underline"
                >
                  Join The Circle
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
