import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    const cart = await prisma.service_Cart.findUnique({
      where: { card_id: id },
      select: { services: true },
    });

    return NextResponse.json({ data: cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
