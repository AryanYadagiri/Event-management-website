import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    prisma.event_Vendor.create({
      data: {
        first_name: request.first_name,
        last_name: request.last_name,
        business_number: request.business_number,
        business_email: request.business_email,
        hashed_password: "",
        GST_number: request.GST_number,
        business_address: request.business_address,
        district: request.district,
        city: request.city,
        state: request.state,
        pincode: request.pincode,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: "Registration successful" },
    { status: 201 }
  );
}
