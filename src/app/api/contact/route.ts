import { NextResponse } from "next/server";

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

  // Delivery is intentionally pluggable — wire this to your mail provider or CRM.
  // Until then the enquiry is logged so nothing is silently dropped in development.
  console.info("[next-step] new enquiry", {
    name,
    email,
    phone: body.phone ?? null,
    business: body.business,
    transactions: body.transactions,
    source: body.source ?? null,
    services: body.services ?? [],
    message: body.message ?? null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
