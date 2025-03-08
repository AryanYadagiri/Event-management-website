"use client";
import { redirect } from "next/navigation";
import Dashboard from "../components/Dashboard";
// import { getSession } from "next-auth/react";
// import {useSession} from "@auth"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  console.log("user ", session?.user?.user_type); // fix here it should be vendor
  if (!session || !session?.user?.user_type === "regular") {
    return redirect("/login");
  }
  return (
    <>
      <Dashboard />
    </>
  );
}
