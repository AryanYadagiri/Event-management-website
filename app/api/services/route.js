import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // const req = request.json()
    // console.log("services api: ", req)
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const cursor = searchParams.get("cursor");
    const button = searchParams.get("button");

    if (button === "next") {
      // console.log("####");
      const queryResults = await prisma.service.findMany({
        take: 8,
        select: {
          service_id: true,
          service_name: true,
          charges: true,
          service_description: true,
          image_url: true,
        },
        ...(search ? {
          where: {
            OR: [
              {
                service_name: {
                  contains: search,
                  mode: "insensitive"
                }
              },
              {
                service_description: {
                  contains: search,
                  mode: "insensitive"
                },
              },
              {
                categories: {
                  has: search
                }
              }
            ]
          }
        } : {}),
        orderBy: {
          service_id: "asc",
        },
        ...(cursor ? { cursor: { service_id: parseInt(cursor) } } : {}),
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
        select: {
          service_name: true,
          charges: true,
          service_description: true,
          image_url: true,
        },
        orderBy: {
          service_id: "asc",
        },
        ...(cursor ? { cursor: { service_id: parseInt(cursor) } } : {}),
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
