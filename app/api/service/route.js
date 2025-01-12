import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const serviceId = searchParams.get("id");
    const service = await prisma.service.findUnique({
      where: { service_id: serviceId },
    });

    const business_info = await prisma.event_Vendor.findUnique({
      where: { event_vendor_id: service.event_vendor_id },
      omit: { hashed_password: true },
    });
    return NextResponse.json(
      { data: service, business_info: business_info },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
