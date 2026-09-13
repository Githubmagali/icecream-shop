// app/api/subscribe/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const required = ["email", "nombre", "apellido", "provincia", "ciudad"];
  const missing = required.filter((k) => !data?.[k]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Faltan campos: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // TODO: acá guardás en tu DB o lo mandás a tu proveedor de email
  // (Mailchimp, Resend, tu propia tabla en Postgres, etc.)
  console.log("Nueva suscripción:", data);

  return NextResponse.json({ ok: true });
}