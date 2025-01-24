import prisma from "@/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const req = await request.json();
    const check1 = await prisma.user.findUnique({
      where: { email: req.email },
    });
    const check2 = await prisma.user.findUnique({
      where: { phone_number: req.phone_number },
    });
    
    if (check1) {
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

    await prisma.user.create({
      data: {
        first_name: req.first_name,
        last_name: req.last_name,
        phone_number: req.phone_number,
        email: req.email,
        hashed_password: hashed_password,
        address: req.address,
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
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
