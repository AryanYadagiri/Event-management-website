import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const whereClause = category === "all" ? {} : { categories: category };
    const cursor = searchParams.get("cursor");
    const button = searchParams.get("button");

    if (button === "next") {
      const queryResults = await prisma.service.findMany({
        take: 8,
        where: whereClause,
        select: { service_name: true, charges: true },
        orderBy: {
          service_id: "asc",
        },
        ...(cursor ? { cursor: { service_id: parseInt(cursor) }, skip: 1 } : {}),
      });
      if (queryResults.length === 8) {
        const myCursor = queryResults[7].id;
        return NextResponse.json(
          { items: queryResults, cursor: myCursor },
          { status: 200 }
        );
      } else if (queryResults.length < 8) {
        return NextResponse.json(
          { items: queryResults, cursor: cursor },
          { status: 200 }
        );
      }
    } else if (button === "previous") {
      const queryResults = await prisma.service.findMany({
        take: -8,
        where: whereClause,
        select: { service_name: true, charges: true },
        orderBy: {
          id: "asc",
        },
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      });
      if (queryResults.length === 8) {
        const myCursor = queryResults[0].id;
        return NextResponse.json(
          { items: queryResults, cursor: myCursor },
          { status: 200 }
        );
      } else if (queryResults.length < 8) {
        return NextResponse.json(
          { items: queryResults, cursor: cursor },
          { status: 200 }
        );
      }
    }
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
