import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "badreddine.malek@enis.tn";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (limits.get(ip) ?? []).filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= 4) return true;
  limits.set(ip, [...recent, now]);
  return false;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return NextResponse.json({ message: "Please try again later." }, { status: 429 });

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") throw new Error("invalid");
    const values = body as Record<string, unknown>;
    const name = clean(values.name, 100);
    const email = clean(values.email, 254).toLowerCase();
    const subject = clean(values.subject, 160);
    const message = clean(values.message, 5000);
    const honeypot = clean(values.website, 200);

    if (honeypot) return NextResponse.json({ ok: true });
    if (!name || !emailPattern.test(email) || !subject || message.length < 10) {
      return NextResponse.json({ message: "Please complete all fields with a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      console.error("Contact email provider is not configured.");
      return NextResponse.json({ message: "Unable to send message at this time." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact email provider request failed.", response.status);
      return NextResponse.json({ message: "Unable to send message at this time." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Unable to send message at this time." }, { status: 400 });
  }
}
