import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  console.log("In middleware: ", request.auth);
  if (!request.auth || request.auth.user.user_type !== "vendor") {
    if (request.nextUrl.pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (
    request.auth &&
    request.auth.user.user_type === "vendor" &&
    request.nextUrl.pathname === "/ "
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
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
  matcher: ["/dashboard", "/", "/login", "/signup", "/vendor-signup"],
};
