import prisma from "@/utils";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const POST = auth(async function POST(request) {
  try {
    const req = await request.json();

    // console.log("dashboard route: ",parseInt( request.auth.user.id));
    // const vendor = await prisma.eventVendor.findUnique({
    //   where: { id: parseInt( request.auth.user.id) }
    // });
    // if (!vendor) {
    //   console.log("EventVendor not found!");
    // } else {
    //   console.log("Found EventVendor:", vendor);
    // }

    await prisma.service.create({
      data: {
        service_name: req.service_name,
        service_description: req.service_description,
        categories: req.categories,
        charges: Number(req.charges),
        event_vendor: {
          connect: { id: parseInt(request.auth.user.id) },
        },
      },
    });

    return NextResponse.json(
      { message: "New service created" },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Error in creating service:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const GET = auth(async function GET(request) {
  try {
    const id = parseInt(request?.auth?.user?.id);
    // console.log(id)
    // console.log("dashboard route: ",parseInt( request.auth.user.id));
    // const vendor = await prisma.eventVendor.findUnique({
    //   where: { id: parseInt( request.auth.user.id) }
    // });
    // if (!vendor) {
    //   console.log("EventVendor not found!");
    // } else {
    //   console.log("Found EventVendor:", vendor);
    // }

    const services = await prisma.service.findMany({
      where: { event_vendor_id: id },
      orderBy: {
        service_id: "asc",
      },
    });
    // console.log("vendor services = ", services);
    return NextResponse.json(
      { data: services },
      { message: "Services retrived" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Error in retrieving services:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const PUT = auth(async function PUT(request) {
  try {
    const req = await request.json();
    console.log(req.categories);
    if (request.auth.user) {
      await prisma.service.update({
        where: {
          service_id: req.service_id,
        },
        data: {
          ...(req.service_name ? { service_name: req.service_name } : {}),
          ...(req.service_description
            ? { service_description: req.service_description }
            : {}),
          ...(req.categories ? { categories: { set: req.categories } } : {}),
          ...(req.charges ? { charges: parseFloat(req.charges) } : {}),
        },
      });
    }

    return NextResponse.json({ message: "Service updated" }, { status: 200 });
  } catch (error) {
    console.error(
      "Error in delete services:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const DELETE = auth(async function DELETE(request) {
  try {
    const req = await request.json();
    // console.log(request)
    if (request.auth.user) {
      await prisma.service.delete({
        where: {
          service_id: parseInt(req.service_id),
        },
      });
    }

    return NextResponse.json({ message: "Service updated" }, { status: 200 });
  } catch (error) {
    console.error(
      "Error in delete services:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
