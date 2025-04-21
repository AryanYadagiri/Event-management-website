import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  // console.log("In middleware: ", parseInt(request?.auth?.user?.id));
  if (!request.auth || request.auth.user.user_type !== "vendor") {
    if (request.nextUrl.pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!request.auth && request.nextUrl.pathname.startsWith("/service")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.auth && request.auth.user.user_type === "vendor") {
    if (
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname.startsWith("/service")
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!request?.auth?.user && request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    request.auth &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup" ||
      request.nextUrl.pathname === "/vendor-signup")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: [
    "/dashboard",
    "/",
    "/login",
    "/signup",
    "/vendor-signup",
    "/service/:path*",
    "/profile",
  ],
};
