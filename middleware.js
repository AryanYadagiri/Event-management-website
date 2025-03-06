export { auth as middleware } from "@/auth";
// import { NextResponse } from "next/server";
// import { getSession } from "next-auth/react";

// export function middleware(request) {
//   const isAuthenticated = getSession();

//   if (isAuthenticated) {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: "/dashboard/:path*",
// };

