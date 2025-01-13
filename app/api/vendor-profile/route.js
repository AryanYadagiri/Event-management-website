import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const vendorId = searchParams.get("id");

    const vendor_info = await prisma.event_Vendor.findUnique({
      where: { event_vendor_id: vendorId },
      omit: { hashed_password: true },
    });
    return NextResponse.json({ data: vendor_info }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
