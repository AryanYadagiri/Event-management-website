import { auth } from "@/auth";
import prisma from "@/utils";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const GET = auth(async function POST(request) {
  try {
    // console.log(request)
    if (request.auth.user) {
      const searchParams = request.nextUrl.searchParams;
      const id = searchParams.get("user_id");
      const type = searchParams.get("user_type");
      if (type == "regular") {
        const user = await prisma.user.findUnique({
          where: {
            id: parseInt(id),
          },
        });
        delete user.hashed_password;
        // console.log(user);
        return NextResponse.json(
          { data: user },
          { message: "user retrived" },
          { status: 200 }
        );
      } else if (type == "vendor") {
        const user = await prisma.eventVendor.findUnique({
          where: {
            id: parseInt(id),
          },
        });
        delete user.hashed_password;
        return NextResponse.json(
          { data: user },
          { message: "user retrived" },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    console.error("Error in fetching user:", error.message || "Unknown error");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const PUT = auth(async function PUT(request) {
  try {
    if (request.auth.user) {
      const req = await request.json();
      const hashed_password = req.password
        ? await bcrypt.hash(req.password, 10)
        : null;
      if (req.user_type === "regular") {
        // console.log("hey ", req);
        await prisma.user.update({
          where: {
            id: parseInt(req.id),
          },
          data: {
            ...(req.first_name ? { first_name: req.first_name } : {}),
            ...(req.last_name ? { last_name: req.last_name } : {}),
            ...(req.email ? { email: req.email } : {}),
            ...(req.phone ? { phone_number: { set: req.phone } } : {}),
            ...(req.address ? { address: req.address } : {}),
            ...(req.city ? { city: req.city } : {}),
            ...(req.state ? { state: req.state } : {}),
            ...(req.pincode ? { pincode: req.pincode } : {}),
            ...(hashed_password ? { hashed_password: hashed_password } : {}),
          },
        });
        return NextResponse.json({ message: "user updated" }, { status: 200 });
      } else if (req.user_type === "vendor") {
        await prisma.eventVendor.update({
          where: {
            id: parseInt(req.id),
          },
          data: {
            ...(req.first_name ? { first_name: req.first_name } : {}),
            ...(req.last_name ? { last_name: req.last_name } : {}),
            ...(req.email ? { business_email: req.email } : {}),
            ...(req.phone ? { business_number: { set: req.phone } } : {}),
            ...(req.address ? { business_address: req.address } : {}),
            ...(req.city ? { city: req.city } : {}),
            ...(req.state ? { state: req.state } : {}),
            ...(req.pincode ? { pincode: req.pincode } : {}),
            ...(hashed_password ? { hashed_password: hashed_password } : {}),
          },
        });
        return NextResponse.json({ message: "user updated" }, { status: 200 });
      }
    }
  } catch (error) {
    console.error("Error in updating user:", error.message || "Unknown error");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
