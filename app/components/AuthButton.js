"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session?.user?.email ? (
        <button
          // type="submit"
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          // type="submit"
          onClick={() => signIn()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      )}
    </>
  );
}
