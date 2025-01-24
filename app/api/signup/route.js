import prisma from "@/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const checker = await prisma.user.findUnique({
      where: { email: request.body.email },
    });
    console.log(checker)
    if (checker) {
      return NextResponse.json(
        { message: "Email already used." },
        { status: 409 }
      );
    }

    const hashed_password = await bcrypt.hash(request.body.password);

    await prisma.user.create({
      data: {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone_number: request.body.phone_number,
        email: request.body.email,
        hashed_password: hashed_password,
        address: request.body.address,
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
