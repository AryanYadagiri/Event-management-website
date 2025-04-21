import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const req = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aryanyadagiri15@gmail.com"],
      subject: req.subject || "📬 New Message from Website Contact Form",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f3f4f6; padding: 2rem;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            
            <h2 style="font-size: 1.25rem; color: #111827; margin-bottom: 1rem;">
              📩 New Message Received
            </h2>
    
            <p style="font-size: 1rem; color: #4b5563; margin-bottom: 0.5rem;">
              <strong>From:</strong> ${req.email}
            </p>
    
            <p style="font-size: 1rem; color: #4b5563; margin-bottom: 1rem;">
              <strong>Subject:</strong> ${req.subject}
            </p>
    
            <div style="margin-top: 1rem; padding: 1rem; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 0.375rem;">
              <p style="font-size: 1rem; color: #374151; white-space: pre-line;">
                ${req.message}
              </p>
            </div>
    
            <p style="font-size: 0.875rem; color: #9ca3af; margin-top: 2rem;">
              This message was submitted via your website's contact form.
            </p>
          </div>
        </div>
      `,
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
