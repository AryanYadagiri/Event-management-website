import Image from "next/image";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  async function getData() {
    const API = "http://localhost:3000/api/dashboard";
    const services = await fetch(API);
    const response = await services.json();
    console.log("services = ", response);
    setData(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-5">
      <div className="min-w-full overflow-x-auto rounded-sm">
        <table className="min-w-full align-middle text-sm">
          <thead>
            <tr className="border-b-2 border-neutral-100">
              <th className="min-w-[140px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                ID
              </th>
              <th className="min-w-[140px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase"></th>
              <th className="min-w-[180px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                Service Name
              </th>
              <th className="min-w-[180px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                Description
              </th>
              <th className="min-w-[180px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                Categories
              </th>
              <th className="px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                Charges (INR)
              </th>
              <th className="min-w-[100px] p-3 py-2 text-end text-sm font-semibold tracking-wider text-neutral-700 uppercase"></th>
              <th className="min-w-[100px] p-3 py-2 text-end text-sm font-semibold tracking-wider text-neutral-700 uppercase"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((elem) => (
                <tr
                  key={elem.service_id}
                  className="border-b border-neutral-100 hover:bg-neutral-50"
                >
                  <td className="p-3 text-start font-semibold text-neutral-600">
                    {elem.service_id}
                  </td>
                  <td>
                    {" "}
                    <Image
                      className="h-16 w-16"
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                      alt="Product Image"
                      width={500}
                      height={500}
                    />
                  </td>
                  <td className="p-3 text-start">{elem.service_name}</td>
                  <td className="p-3 text-start">{elem.service_description}</td>
                  <td className="p-3 text-start">
                    {elem.categories.includes("catering") ? (
                      <div className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-purple-800">
                        Catering
                      </div>
                    ) : null}
                    {elem.categories.includes("renting") ? (
                      <div className="inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-emerald-800">
                        Renting
                      </div>
                    ) : null}
                    {elem.categories.includes("bar") ? (
                      <div className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-orange-800">
                        Bar
                      </div>
                    ) : null}
                    {elem.categories.includes("decorators") ? (
                      <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-blue-800">
                        Decorators
                      </div>
                    ) : null}
                  </td>
                  <td className="p-3 font-medium text-green-500">
                    {elem.charges}
                  </td>
                  <td className="p-3 text-end font-medium">
                    <UpdateButton data={elem} />
                  </td>
                  <td className="p-3 text-end font-medium">
                    <DeleteButton data={elem} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
