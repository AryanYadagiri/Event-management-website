import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const pwHash = bcrypt.hashSync(credentials.password);

        user = await prisma.user.findMany({
          where: {
            email: credentials.email,
            hashed_password: pwHash,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        delete user.hashed_password;
        return user;
      },
    }),
  ],
});
