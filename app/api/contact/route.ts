import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const { name, email, phone, level, goal, budget, timeline } =
    await req.json();

  const html = `
    <h2>Elite Track Inquiry</h2>
    <table cellpadding="6">
      <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${esc(phone)}</td></tr>` : ""}
      <tr><td><strong>Athlete level</strong></td><td>${esc(level)}</td></tr>
      <tr><td><strong>Timeline</strong></td><td>${esc(timeline)}</td></tr>
      ${budget ? `<tr><td><strong>Budget</strong></td><td>${esc(budget)}</td></tr>` : ""}
    </table>
    <h3>Training goal</h3>
    <p>${esc(goal).replace(/\n/g, "<br>")}</p>
    <hr>
    <p style="color:#888;font-size:12px">Sent from wesjbasketball.com elite inquiry form</p>
  `;

  const { error } = await resend.emails.send({
    from: "Wes Johnson Basketball <noreply@wesjbasketball.com>",
    to: "wes@wesjbasketball.com",
    replyTo: email,
    subject: `Elite Inquiry · ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
