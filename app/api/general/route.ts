import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const html = `
    <h2>${esc(subject)}</h2>
    <table cellpadding="6">
      <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${esc(message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p style="color:#888;font-size:12px">Sent from wesjbasketball.com general contact form</p>
  `;

  const { error } = await resend.emails.send({
    from: "Wes Johnson Basketball <noreply@wesjbasketball.com>",
    to: "wes@wesjbasketball.com",
    replyTo: email,
    subject: subject || `Message from ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
