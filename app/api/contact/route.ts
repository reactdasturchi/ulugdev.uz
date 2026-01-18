import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendToTelegram(data: z.infer<typeof contactSchema>) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const message = `
🆕 <b>Yangi xabar!</b>

👤 <b>Ism:</b> ${escapeHtml(data.name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
📱 <b>Telefon:</b> ${data.phone ? escapeHtml(data.phone) : "Ko'rsatilmagan"}

📌 <b>Mavzu:</b> ${escapeHtml(data.subject)}

💬 <b>Xabar:</b>
${escapeHtml(data.message)}

━━━━━━━━━━━━━━━━━━
🌐 ulugdev.uz dan yuborildi
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error("Telegram API error:", error);
    return false;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Noto'g'ri ma'lumotlar", details: validatedData.error.issues },
        { status: 400 }
      );
    }

    // Send to Telegram
    const sent = await sendToTelegram(validatedData.data);

    if (sent) {
      return NextResponse.json(
        { success: true, message: "Xabar yuborildi" },
        { status: 200 }
      );
    } else {
      console.error("Failed to send to Telegram");
      return NextResponse.json(
        { success: false, error: "Xabar yuborishda xatolik. Telegram orqali yozing." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}
