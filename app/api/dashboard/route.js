import prisma from "@/utils";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const POST = auth(async function POST(request) {
  try {
    const req = await request.json();
    // const session = await auth();
    // console.log("dashboard route: ",parseInt( request.auth.user.id));

    // const vendor = await prisma.eventVendor.findUnique({
    //   where: { event_vendor_id: parseInt( request.auth.user.id) }
    // });

    // if (!vendor) {
    //   console.log("EventVendor not found!");
    // } else {
    //   console.log("Found EventVendor:", vendor);
    // }

    await prisma.service.create({
      data: {
        // event_vendor_id: Number(request.auth.user.id),
        service_name: req.service_name,
        service_description: req.service_description,
        charges: Number(req.charges),
        event_vendor: {
          connect: { event_vendor_id: parseInt(request.auth.user.id) },
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
    // // console.log("service route: ", parseInt(request.auth.user.id))
    // const id = parseInt(request.auth.user.id)
    // console.log(id)
    
    const services = await prisma.service.findMany({
      where: { event_vendor_id: 1 },
    });
    console.log("vendor services = ", services)
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

// export async function PUT(request) {
//   try {
//     const req = await request.json();
//     if (req.new_service_name) {
//       await prisma.service.update({
//         where: { service_id: req.service_id },
//         data: { service_name: req.new_service_name },
//       });
//     } else if (req.new_service_description) {
//       await prisma.service.update({
//         where: { service_id: req.service_id },
//         data: { service_description: req.new_service_description },
//       });
//     } else if (req.new_charges) {
//       await prisma.service.update({
//         where: { service_id: req.service_id },
//         data: { charges: req.new_charges },
//       });
//       return NextResponse.json({ message: "Service updated" }, { status: 200 });
//     }
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request) {
//   try {
//     const req = await request.json();
//     await prisma.service.delete({
//       where: { service_id: req.service_id },
//     });
//     return NextResponse.json({ message: "Service deleted" }, { status: 204 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
