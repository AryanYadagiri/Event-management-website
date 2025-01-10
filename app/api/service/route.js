import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const serviceId = searchParams.get("id");
    const service = prisma.service.findUnique({
      where: { service_id: serviceId },
    });
    return NextResponse.json({ data: service }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
