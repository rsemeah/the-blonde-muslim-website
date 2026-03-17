"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Loader2, Sparkles } from "lucide-react"

interface AminaChatProps {
  accessCode: string
  isWidget?: boolean
}

export function AminaChat({ accessCode, isWidget = false }: AminaChatProps) {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status } = useChat({
    id: "amina-companion",
    transport: new DefaultChatTransport({
      api: "/api/companion/chat",
      headers: {
        "x-access-code": accessCode,
      },
    }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    
    sendMessage({ text: input })
    setInput("")
  }

  // Extract text from message parts
  const getMessageText = (message: typeof messages[0]) => {
    if (!message.parts || !Array.isArray(message.parts)) return ""
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("")
  }

  return (
    <div className={`flex flex-col ${isWidget ? "h-full" : "h-[600px]"} bg-card rounded-lg border border-border overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border bg-secondary/30">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-blue/20">
          <Sparkles className="h-5 w-5 text-[#38BDF8]" />
        </div>
        <div>
          <h3 className="font-serif text-lg text-foreground">Amina</h3>
          <p className="text-xs text-muted-foreground">Your trusted companion</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-blue/10 mb-4">
              <Sparkles className="h-8 w-8 text-[#38BDF8]" />
            </div>
            <h4 className="font-serif text-xl text-foreground mb-2">Assalamu Alaikum, Sister</h4>
            <p className="text-sm text-muted-foreground max-w-sm">
              I&apos;m Amina, your companion on this beautiful journey. 
              Ask me about prayer, daily reflections, or just share what&apos;s on your heart.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {[
                "How do I perform wudu?",
                "Give me a reflection prompt",
                "I need encouragement today",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="text-xs px-3 py-2 rounded-full bg-secondary text-foreground/70 hover:bg-secondary/80 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-[#1E5F8A] text-white rounded-br-md"
                  : "bg-secondary text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap leading-relaxed">
                {getMessageText(message)}
              </p>
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share what's on your heart..."
            className="flex-1 rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E5F8A] text-white transition-colors hover:bg-[#1E5F8A]/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
