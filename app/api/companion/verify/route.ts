import { NextRequest, NextResponse } from 'next/server'

// Lightweight access code verification — does NOT call Groq.
// Keeps the chat route clean and avoids wasting AI quota on auth checks.
export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json()

    if (!code || typeof code !== 'string') {
      return NextResponse.json({ valid: false, error: 'No code provided' }, { status: 400 })
    }

    const validCodes = (process.env.AMINA_ACCESS_CODES || '').split(',').map((c) => c.trim()).filter(Boolean)

    if (validCodes.length === 0) {
      // No codes configured — deny all
      return NextResponse.json({ valid: false, error: 'Access codes not configured' }, { status: 503 })
    }

    const valid = validCodes.includes(code.trim())

    return NextResponse.json({ valid }, { status: valid ? 200 : 401 })
  } catch {
    return NextResponse.json({ valid: false, error: 'Verification failed' }, { status: 500 })
  }
}
