import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const cursor = searchParams.get("cursor");
    let lastServiceInResults;
    let myCursor;
    if (!cursor) {
      const firstQueryResults = await prisma.service.findMany({
        take: 8,
        where: {
          categories: category,
        },
        orderBy: {
          id: "asc",
        },
      });
      if (firstQueryResults.length > 0) {
        lastServiceInResults = firstQueryResults[firstQueryResults.length - 1];
        myCursor = lastServiceInResults.id;
      }
      return NextResponse.json(
        { items: firstQueryResults, cursor: myCursor },
        { status: 200 }
      );
    }

    const secondQueryResults = await prisma.service.findMany({
      take: 8,
      skip: 1,
      cursor: {
        id: cursor,
      },
      where: {
        categories: category,
      },
      orderBy: {
        id: "asc",
      },
    });

    if (secondQueryResults.length > 0) {
      lastServiceInResults = secondQueryResults[secondQueryResults.length - 1];
      myCursor = lastServiceInResults.id;
    }
    return NextResponse.json(
      { items: secondQueryResults, cursor: myCursor },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
