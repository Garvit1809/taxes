import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/content";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  transactions?: string;
  source?: string;
  message?: string;
  services?: string[];
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * SMTP comes from the environment so no credentials live in the repo. Until
 * SMTP_HOST and friends are set the enquiry is logged rather than silently
 * dropped, so nothing is lost while the mailbox is being configured.
 */
function transport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a name and a valid email address." }, { status: 400 });
  }

  if (!body.business || !body.transactions) {
    return NextResponse.json(
      { error: "Please tell us your business type and rough monthly transaction volume." },
      { status: 400 },
    );
  }

  const fields: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", body.phone?.trim() || "—"],
    ["Business type", body.business],
    ["Transactions a month", body.transactions],
    ["Services wanted", body.services?.length ? body.services.join(", ") : "—"],
    ["Heard about us via", body.source || "—"],
    ["Message", body.message?.trim() || "—"],
  ];

  const mailer = transport();

  if (!mailer) {
    console.warn(
      "[next-step] SMTP not configured — enquiry logged instead of emailed.",
      Object.fromEntries(fields),
    );
    return NextResponse.json({ ok: true });
  }

  try {
    await mailer.sendMail({
      // The envelope sender must be the authenticated mailbox or the message
      // will be rejected; the enquirer goes in Reply-To instead.
      from: `"${site.name} website" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO ?? site.email,
      replyTo: `"${name}" <${email}>`,
      subject: `Website enquiry — ${name} (${body.business})`,
      text: fields.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2 style="font:600 18px system-ui">New website enquiry</h2><table cellpadding="6" style="font:14px system-ui;border-collapse:collapse">${fields
        .map(
          ([label, value]) =>
            `<tr><td style="color:#667;vertical-align:top">${escapeHtml(label)}</td><td><strong>${escapeHtml(
              value,
            )}</strong></td></tr>`,
        )
        .join("")}</table>`,
    });
  } catch (error) {
    // Log the enquiry so a mail outage never loses a lead.
    console.error("[next-step] enquiry email failed", error, Object.fromEntries(fields));
    return NextResponse.json(
      { error: "We couldn't send that just now. Please email us directly and we'll pick it up." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
