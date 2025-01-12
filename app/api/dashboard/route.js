import prisma from "@/utils";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(request) {
  try {
    const session = await auth();
    await prisma.service.create({
      data: {
        event_vendor_id: session.user.id,
        service_name: request.body.service_name,
        service_description: request.body.service_description,
        charges: request.body.charges,
      },
    });

    return NextResponse.json(
      { message: "New service created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    if (request.body.new_service_name) {
      await prisma.service.update({
        where: { service_id: request.body.service_id },
        data: { service_name: request.body.new_service_name },
      });
    } else if (request.body.new_service_description) {
      await prisma.service.update({
        where: { service_id: request.body.service_id },
        data: { service_description: request.body.new_service_description },
      });
    } else if (request.body.new_charges) {
      await prisma.service.update({
        where: { service_id: request.body.service_id },
        data: { charges: request.body.new_charges },
      });
      return NextResponse.json({ message: "Service updated" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await prisma.service.delete({
      where: { service_id: request.body.service_id },
    });
    return NextResponse.json({ message: "Service deleted" }, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
