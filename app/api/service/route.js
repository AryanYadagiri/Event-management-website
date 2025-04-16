import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const serviceId = searchParams.get("service_id");
    const service = await prisma.service.findUnique({
      where: { service_id: parseInt(serviceId) },
    });
    // console.log(service.event_vendor_id)
    const business_info = await prisma.eventVendor.findUnique({
      where: { id: service.event_vendor_id },
      omit: { hashed_password: true },
    });
    return NextResponse.json(
      { data: service, business_info: business_info },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Error in fetching services:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
