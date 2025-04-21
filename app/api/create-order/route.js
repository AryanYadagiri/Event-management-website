import Razorpay from "razorpay";
import prisma from "@/utils";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAYZORPAY_KEY_ID,
  key_secret: process.env.RAYZORPAY_SECRET_ID,
});

export const POST = auth(async function POST(request) {
  try {
    if (request.auth.user && request.auth.user.user_type == "regular") {
      const req = await request.json();
      console.log("huhuhuhuhhu", req.service_id);
      // if (req.service_id) {
        const service = await prisma.service.findUnique({
          where: { service_id: parseInt(req.service_id) },
        });

        var options = {
          amount: service.charges * 100,
          currency: "INR",
          receipt: "rcp1",
        };
        const order = await razorpay.orders.create(options);
        // console.log("congrats ",order);
        return NextResponse.json({ orderId: order.id }, { status: 200 });
      // }
      // return NextResponse.json(
      //   { message: "Service id not received" },
      //   { status: 200 }
      // );
    }
  } catch (error) {
    console.error(
      "Error in creating order id:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
