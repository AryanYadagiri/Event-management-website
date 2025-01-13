import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const checker = prisma.event_Vendor.findUnique({
      where: { business_email: request.body.business_email },
    });

    if (checker) {
      return NextResponse.json(
        { message: "Email already used." },
        { status: 409 }
      );
    }

    const hashed_password = await bcrypt.hash(request.body.password);

    prisma.event_Vendor.create({
      data: {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        business_number: request.body.business_number,
        business_email: request.body.business_email,
        hashed_password: hashed_password,
        GST_number: request.body.GST_number,
        business_address: request.body.business_address,
        district: request.body.district,
        city: request.body.city,
        state: request.body.state,
        pincode: request.body.pincode,
      },
    });
    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
