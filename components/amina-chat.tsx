"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Loader2, Sparkles, RefreshCw } from "lucide-react"

interface AminaChatProps {
  accessCode: string
  isWidget?: boolean
}

export function AminaChat({ accessCode, isWidget = false }: AminaChatProps) {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const { messages, sendMessage, status, setMessages } = useChat({
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

  // Focus input on mount
  useEffect(() => {
    if (!isWidget) {
      inputRef.current?.focus()
    }
  }, [isWidget])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    
    sendMessage({ text: input })
    setInput("")
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }

  const handleNewChat = () => {
    setMessages([])
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

  const suggestions = [
    "How do I perform wudu?",
    "Give me a reflection prompt",
    "I need encouragement today",
    "Explain the five pillars",
  ]

  return (
    <div className={`flex flex-col ${isWidget ? "h-full" : "h-[600px]"} bg-card rounded-xl border border-border overflow-hidden shadow-sm`}>
      {/* Header */}
      {!isWidget && (
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-[#38BDF8]/5 to-[#1E5F8A]/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20">
                <Sparkles className="h-5 w-5 text-[#38BDF8]" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">Amina</h3>
              <p className="text-xs text-muted-foreground">Your trusted companion</p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleNewChat}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              New chat
            </button>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in duration-500">
            <div className="relative mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20">
                <Sparkles className="h-10 w-10 text-[#38BDF8]" />
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-border">
                <span className="text-lg">💫</span>
              </div>
            </div>
            <h4 className="font-serif text-2xl text-foreground mb-3">Assalamu Alaikum, Sister</h4>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              I&apos;m Amina, your companion on this beautiful journey. 
              Ask me about prayer, daily reflections, or just share what&apos;s on your heart.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-md">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                  className="text-xs px-4 py-2.5 rounded-full bg-secondary/80 text-foreground/80 hover:bg-secondary hover:text-foreground transition-all duration-200 hover:shadow-sm border border-transparent hover:border-border"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => {
          const text = getMessageText(message)
          const isUser = message.role === "user"
          
          return (
            <div
              key={message.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {!isUser && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20 mr-2 flex-shrink-0 mt-1">
                  <Sparkles className="h-4 w-4 text-[#38BDF8]" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  isUser
                    ? "bg-gradient-to-br from-[#1E5F8A] to-[#1E5F8A]/90 text-white rounded-br-sm shadow-md"
                    : "bg-secondary/80 text-foreground rounded-bl-sm"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          )
        })}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start animate-in fade-in duration-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20 mr-2 flex-shrink-0">
              <Sparkles className="h-4 w-4 text-[#38BDF8]" />
            </div>
            <div className="bg-secondary/80 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-gradient-to-r from-[#38BDF8]/5 to-transparent">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share what's on your heart..."
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 focus:border-[#38BDF8]/50 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5F8A] to-[#1E5F8A]/80 text-white transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
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
