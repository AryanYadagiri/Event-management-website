"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchService = ()=>{
    router.push(`/?search=${encodeURIComponent(search)}`)
  }
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchService();
            }
          }}
      />
      {/* {JSON.stringify(search)} */}
    </>
  );
}
