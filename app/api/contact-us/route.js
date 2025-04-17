import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const req = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      //   to: ['delivered@resend.dev'],
      to: ["aryanyadagiri15@gmail.com"],
      subject: req.subject,
      html: `<p>from: ${req.email}<p><br><p>message: ${req.message}</p>`,
    });

    return NextResponse.json({
      message: "Email sent successfully",
      id: data.data?.id,
      status: 200,
    });
  } catch (error) {
    console.error("Error in sendind email:", error.message || "Unknown error");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
