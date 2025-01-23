import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" },
      },
      authorize: async (credentials) => {
        try {
          console.log('Hello');
          let user;
          if (credentials.userType === "regular") {
            user = await prisma.user.findUnique({
              where: {
                email: credentials.email,
              },
            });
          } else if (credentials.userType === "vendor") {
            const user = await prisma.event_Vendor.findUnique({
              where: {
                email: credentials.email,
              },
            });
          }

          if (!user) {
            console.log('user this is',user);
            return NextResponse.json(
              { message: "Invalid email." },
              { status: 401 }
            );
          }

          const check = await bcrypt.compare(
            credentials.password,
            user.hashed_password
          );

          if (!check) {
            return NextResponse.json(
              { message: "Invalid password." },
              { status: 401 }
            );
          }
          delete user.hashed_password;
          return user;
        } catch (error) {
          return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
          );
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
});
