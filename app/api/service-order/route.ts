import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, budget, deadline, message, service } = body

    // Validate required fields
    if (!name || !email || !phone || !budget || !deadline || !message || !service) {
      return NextResponse.json(
        { success: false, error: 'Barcha maydonlar to\'ldirilishi kerak' },
        { status: 400 }
      )
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { success: false, error: 'Server konfiguratsiyasi xatosi' },
        { status: 500 }
      )
    }

    // Format budget and deadline for display
    const budgetDisplay: Record<string, string> = {
      '100-300': '$100 - $300',
      '300-500': '$300 - $500',
      '500-1000': '$500 - $1,000',
      '1000-2000': '$1,000 - $2,000',
      '2000+': '$2,000+',
    }

    const deadlineDisplay: Record<string, string> = {
      '1-2-hafta': '1-2 hafta',
      '2-4-hafta': '2-4 hafta',
      '1-2-oy': '1-2 oy',
      '2-3-oy': '2-3 oy',
      'shoshilinch-emas': 'Shoshilinch emas',
    }

    // Create formatted message for Telegram
    const telegramMessage = `
🛒 *YANGI BUYURTMA*

━━━━━━━━━━━━━━━━━━━━
📦 *Xizmat:* ${service}
━━━━━━━━━━━━━━━━━━━━

👤 *Mijoz ma'lumotlari:*
• Ism: ${name}
• Email: ${email}
• Telefon: ${phone}

💰 *Loyiha tafsilotlari:*
• Byudjet: ${budgetDisplay[budget] || budget}
• Muddat: ${deadlineDisplay[deadline] || deadline}

📝 *Xabar:*
${message}

━━━━━━━━━━━━━━━━━━━━
🕐 _${new Date().toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })}_
`

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    )

    const telegramResult = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error('Telegram API error:', telegramResult)
      return NextResponse.json(
        { success: false, error: 'Xabar yuborishda xatolik' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Service order error:', error)
    return NextResponse.json(
      { success: false, error: 'Server xatosi' },
      { status: 500 }
    )
  }
}
