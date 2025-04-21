import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { Resend } from "resend";
import crypto from "crypto";

const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
  const keySecret = process.env.RAYZORPAY_SECRET_ID;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export const POST = auth(async function POST(request) {
  try {
    if (request.auth.user && request.auth.user.user_type == "regular") {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpaySignature,
        business_email,
        user_email,
      } = await request.json();

      if (!orderCreationId || !razorpayPaymentId || !razorpaySignature) {
        console.log("its missing");
        return NextResponse.json(
          { message: "Missing required fields", isOk: false },
          { status: 400 }
        );
      }

      const signature = generatedSignature(orderCreationId, razorpayPaymentId);
      if (signature !== razorpaySignature) {
        return NextResponse.json(
          { message: "payment verification failed", isOk: false },
          { status: 400 }
        );
      }
      console.log("seee :", business_email);

      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["aryanyadagiri15@gmail.com"], // User data here please note
        subject: "🎉 Payment Confirmation – You're All Set!",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 2rem;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1);">
              
              <h1 style="font-size: 1.5rem; color: #10b981; text-align: center; margin-bottom: 1rem;">
                ✅ Payment Verified Successfully
              </h1>
      
              <p style="font-size: 1rem; color: #374151; line-height: 1.6;">
                Hi <strong>${user_email}</strong>,
              </p>
      
              <p style="font-size: 1rem; color: #374151; line-height: 1.6; margin-top: 1rem;">
                We're excited to let you know that your payment was successfully processed. 🎉
                Our service providers have been notified and will be in touch with you shortly to coordinate further details about your event.
              </p>
      
              <p style="font-size: 1rem; color: #374151; line-height: 1.6; margin-top: 1rem;">
                If you have any questions, feedback, or special requirements, feel free to reach out via our 
                <a href="https://yourwebsite.com/contact-us" style="color: #3b82f6; text-decoration: underline;">Contact Us</a> page. We're here to help!
              </p>
      
              <div style="margin-top: 2rem; text-align: center;">
                <a href="https://yourwebsite.com" style="display: inline-block; background-color: #10b981; color: white; padding: 0.75rem 1.5rem; border-radius: 0.375rem; text-decoration: none; font-weight: 600;">
                  View Our Website
                </a>
              </div>
      
              <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;" />
      
              <p style="font-size: 0.875rem; color: #9ca3af; text-align: center;">
                Thank you for choosing Eventify – making events easy, memorable, and stress-free.
              </p>
            </div>
          </div>
        `,
      });

      // buiness email
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [business_email],
        subject: "📢 New Service Booking Received!",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; padding: 2rem;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 5px 10px rgba(0,0,0,0.05);">
              <h2 style="color: #1f2937; font-size: 1.25rem; text-align: center; margin-bottom: 1rem;">
                📥 You've Got a New Booking!
              </h2>
      
              <p style="color: #4b5563; font-size: 1rem; line-height: 1.6;">
                Hello,
              </p>
      
              <p style="color: #4b5563; font-size: 1rem; line-height: 1.6; margin-top: 0.5rem;">
                You have received a new service booking from: <strong>${user_email}</strong>
              </p>
      
              <p style="color: #4b5563; font-size: 1rem; line-height: 1.6; margin-top: 1rem;">
                Please log in to your vendor dashboard to view full details and manage this booking.
              </p>
      
              <div style="text-align: center; margin-top: 2rem;">
                <a href="https://yourwebsite.com/dashboard" style="background-color: #3b82f6; color: #ffffff; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 0.375rem; font-weight: 600;">
                  Go to Dashboard
                </a>
              </div>
      
              <hr style="margin: 2rem 0; border-top: 1px solid #e5e7eb;" />
      
              <p style="color: #9ca3af; font-size: 0.875rem; text-align: center;">
                This is an automated message from Eventify. For support, contact us via our website.
              </p>
            </div>
          </div>
        `,
      });
      
      console.log(data);
      return NextResponse.json(
        { message: "payment verified successfully", isOk: true },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(
      "Error in verifying    order:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
