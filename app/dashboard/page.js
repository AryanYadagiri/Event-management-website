"use client";

import VendorNavbar from "../components/VendorNavbar";
import AddButton from "../components/AddButton";
import Dashboard from "../components/Dashboard";

export default function Page() {
  // const { data: session } = useSession();
  // console.log("user ", session?.user?.user_type); // fix here it should be vendor
  // if (!session || !session?.user?.user_type === "regular") {
  //   return redirect("/login");
  // }
  return (
    <>
      <VendorNavbar />
      <AddButton />
      <Dashboard />
    </>
  );
}
