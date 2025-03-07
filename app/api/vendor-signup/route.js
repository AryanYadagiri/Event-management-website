import prisma from "@/utils";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const req = await request.json();
    console.log(req);
    if (!req) {
      throw new Error("Request body is empty");
    }
    const checker = await prisma.eventVendor.findUnique({
      where: { business_email: req.business_email },
    });
    console.log("checker", checker);
    const check2 = await prisma.eventVendor.findUnique({
      where: { business_number: req.business_number },
    });
    // console.log("done")
    console.log("done");
    if (checker) {
      return NextResponse.json(
        { message: "Email already used." },
        { status: 409 }
      );
    } else if (check2) {
      return NextResponse.json(
        { message: "Phone number already used." },
        { status: 409 }
      );
    }

    const hashed_password = await bcrypt.hash(req.password, 10);

    await prisma.eventVendor.create({
      data: {
        first_name: req.first_name,
        last_name: req.last_name,
        business_number: Number(req.business_number),
        business_email: req.business_email,
        hashed_password: hashed_password,
        GST_number: req.GST_number,
        business_address: req.business_address,
        city: req.city,
        state: req.state,
        pincode: Number(req.pincode),
      },
    });
    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in vendor signup:", error.message || "Unknown error");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
