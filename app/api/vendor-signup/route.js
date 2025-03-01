import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const req = await request.json();
    const checker = prisma.event_Vendor.findUnique({
      where: { business_email: req.business_email },
    });

    if (checker) {
      return NextResponse.json(
        { message: "Email already used." },
        { status: 409 }
      );
    }

    const hashed_password = await bcrypt.hash(req.password);

    prisma.event_Vendor.create({
      data: {
        first_name: req.first_name,
        last_name: req.last_name,
        business_number: req.business_number,
        business_email: req.business_email,
        hashed_password: hashed_password,
        GST_number: req.GST_number,
        business_address: req.business_address,
        district: req.district,
        city: req.city,
        state: req.state,
        pincode: req.pincode,
      },
    });
    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      console.log(error),
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
