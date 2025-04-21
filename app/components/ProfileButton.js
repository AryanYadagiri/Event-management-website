"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <Link
          href="/profile"
          className="ml-4 bg-green-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Profile
        </Link>
      ) : null}
    </>
  );
}
