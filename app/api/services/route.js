import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const whereClause = category === "all" ? {} : { categories: category };
    const cursor = searchParams.get("cursor");

    const queryResults = await prisma.service.findMany({
      take: 8,
      where: whereClause,
      orderBy: {
        id: "asc",
      },
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });
    if (queryResults.length === 8) {
      const myCursor = queryResults[7].id;
      return NextResponse.json(
        { items: queryResults, cursor: myCursor },
        { status: 200 }
      );
    } else if (queryResults.length < 8 && queryResults.length > 0) {
      return NextResponse.json(
        { items: queryResults, cursor: cursor },
        { status: 200 }
      );
    } else if (queryResults.length === 0) {
      return NextResponse.json({ items: [], cursor: null }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
