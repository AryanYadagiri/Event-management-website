import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    prisma.user.create({
      data: {
        first_name: request.first_name,
        last_name: request.last_name,
        phone_number: request.phone_number,
        email: request.email,
        hashed_password: "",
        address: request.address,
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
