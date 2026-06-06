"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Loader2, RefreshCw, Moon, AlertCircle, X } from "lucide-react"

interface AminaChatProps {
  accessCode: string
  isWidget?: boolean
}

export function AminaChat({ accessCode, isWidget = false }: AminaChatProps) {
  const [input, setInput] = useState("")
  const [errorDismissed, setErrorDismissed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status, error, setMessages } = useChat({
    id: "amina-companion",
    transport: new DefaultChatTransport({
      api: "/api/companion/chat",
      headers: {
        "x-access-code": accessCode,
      },
    }),
  })

  const isLoading = status === "streaming" || status === "submitted"
  const hasError = status === "error" && !errorDismissed

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  // Focus input on mount (full chat only)
  useEffect(() => {
    if (!isWidget) inputRef.current?.focus()
  }, [isWidget])

  // Reset error dismissed state when a new message is sent
  useEffect(() => {
    if (status === "submitted") setErrorDismissed(false)
  }, [status])

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
    setErrorDismissed(false)
  }

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

  // Show typing indicator when loading — regardless of last message role
  const showTypingIndicator = isLoading

  return (
    <div
      className={`flex flex-col ${
        isWidget ? "h-full" : "h-[600px]"
      } bg-[#F7F2EB] rounded-xl border border-border overflow-hidden shadow-sm`}
    >
      {/* Header */}
      {!isWidget && (
        <div className="flex items-center justify-between p-4 border-b border-border bg-[#F2ECE4]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D7BA82]/20">
                <Moon className="h-5 w-5 text-[#D7BA82]" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-[#F2ECE4]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#2C2926]">Amina</h3>
              <p className="text-xs text-[#2C2926]/60">Your trusted companion</p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleNewChat}
              aria-label="Start a new conversation"
              className="flex items-center gap-1.5 text-xs text-[#2C2926]/60 hover:text-[#2C2926] transition-colors px-3 py-1.5 rounded-full hover:bg-[#F7F2EB]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              New chat
            </button>
          )}
        </div>
      )}

      {/* Error banner */}
      {hasError && (
        <div
          role="alert"
          className="flex items-center justify-between gap-3 px-4 py-3 bg-red-50 border-b border-red-100 text-sm text-red-700"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>
              {error?.message?.includes("401")
                ? "Your access code was not accepted. Please sign out and try again."
                : "Something went wrong. Please try sending your message again."}
            </span>
          </div>
          <button
            onClick={() => setErrorDismissed(true)}
            aria-label="Dismiss error"
            className="flex-shrink-0 hover:text-red-900 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Empty state */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="relative mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D7BA82]/20">
                <Moon className="h-10 w-10 text-[#D7BA82]" />
              </div>
            </div>
            <h4 className="font-serif text-2xl text-[#2C2926] mb-3">Assalamu Alaikum, Sister</h4>
            <p className="text-sm text-[#2C2926]/70 max-w-sm leading-relaxed">
              I&apos;m Amina, your companion on this beautiful journey.
              Ask me about prayer, daily reflections, or just share what&apos;s on your heart.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-md">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                  className="text-xs px-4 py-2.5 rounded-full bg-[#F2ECE4] text-[#2C2926]/80 hover:bg-[#8E9878]/20 hover:text-[#2C2926] transition-all duration-200 border border-[#8E9878]/20"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message thread */}
        {messages.map((message, index) => {
          const text = getMessageText(message)
          const isUser = message.role === "user"

          return (
            <div
              key={message.id}
              className={`flex ${
                isUser ? "justify-end" : "justify-start"
              } animate-in slide-in-from-bottom-2 duration-300`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {!isUser && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D7BA82]/20 mr-2 flex-shrink-0 mt-1">
                  <Moon className="h-4 w-4 text-[#D7BA82]" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  isUser
                    ? "bg-[#C9796A] text-white rounded-br-sm shadow-md"
                    : "bg-[#F2ECE4] text-[#2C2926] rounded-bl-sm"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{text}</p>
              </div>
            </div>
          )
        })}

        {/* Typing indicator */}
        {showTypingIndicator && (
          <div className="flex justify-start animate-in fade-in duration-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D7BA82]/20 mr-2 flex-shrink-0">
              <Moon className="h-4 w-4 text-[#D7BA82]" />
            </div>
            <div className="bg-[#F2ECE4] rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full bg-[#C9796A] animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="h-2 w-2 rounded-full bg-[#C9796A] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="h-2 w-2 rounded-full bg-[#C9796A] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border bg-[#F2ECE4]"
      >
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share what\u2019s on your heart\u2026"
            aria-label="Message Amina"
            disabled={isLoading}
            className="flex-1 rounded-full border border-[#8E9878]/30 bg-[#F7F2EB] px-5 py-3 text-sm text-[#2C2926] placeholder:text-[#2C2926]/40 focus:outline-none focus:ring-2 focus:ring-[#C9796A]/30 focus:border-[#C9796A]/50 transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9796A] hover:bg-[#b86a5c] text-white transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
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
