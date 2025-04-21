"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "./Card";
import axios from "axios";

export default function Slider() {
  const [services, setServices] = useState([]);
  const [nav, setNav] = useState("next");
  const [cursor, setCursor] = useState(1);
  const searchParams = useSearchParams();
  var search = searchParams.get("search");
  const getServices = async () => {
    const API = "http://localhost:3000/api/services";
    const response = await axios.get(API, {
      params: {
        search: search,
        cursor: cursor,
        button: nav,
      },
    });
    setServices(response?.data?.items);
    setCursor(response?.data?.cursor);
  };
  useEffect(() => {
    getServices();
  }, [search]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
        {services.map((service, service_id) => {
          return <Card prop={service} key={service_id} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <div className="justify-items-center flex flex-1 max-w-lg px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
          {/* <div className="flex justify-between flex-1 sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 opacity-50 cursor-not-allowed"
              data-id="pagination-prev"
              disabled
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="w-5 h-5"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                />
              </svg>
              Previous
            </button>
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50"
              data-id="pagination-next"
            >
              Next
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="w-5 h-5"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                />
              </svg>
            </button>
          </div> */}

          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div
              className="relative z-0 flex justify-between w-full -space-x-px rounded-md"
              aria-label="Pagination"
            >
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md"
                data-id="pagination-prev"
                onClick={() => {
                  setNav("previous");
                  getServices();
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  />
                </svg>
                Previous
              </button>
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md"
                data-id="pagination-next"
                onClick={() => {
                  setNav("next");
                  getServices();
                }}
              >
                Next
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(query)} */}
    </>
  );
}
