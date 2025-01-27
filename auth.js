import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import prisma from "@/utils";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" },
      },
      authorize: async (credentials) => {
        let user;
        if (credentials.userType === "regular") {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
        } else if (credentials.userType === "vendor") {
          user = await prisma.event_Vendor.findUnique({
            where: {
              email: credentials.email,
            },
          });
        }

        if (!user) {
          return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const check = await bcrypt.compare(
          credentials.password,
          user.hashed_password
        );

        if (!check) {
          return null;
        }

        delete user.hashed_password;
        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
