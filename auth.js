import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
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
          return null;
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
