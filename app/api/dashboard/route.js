import prisma from "@/utils";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export  const POST = auth( async function POST(request) {
  try {
    const req = await request.json();
    // const session = await auth();
    console.log(request);
    await prisma.service.create({
      data: {
        event_vendor_id: request.auth.user.id,
        service_name: req.service_name,
        service_description: req.service_description,
        charges: req.charges,
      },
    });

    return NextResponse.json(
      { message: "New service created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in creating service:", error.message || "Unknown error");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
})

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
