import DeleteButton from "./DeleteButton";

export default function Dashboard() {
  return (
    <div className="p-5">
      <div className="min-w-full overflow-x-auto rounded-sm">
        <table className="min-w-full align-middle text-sm">
          <thead>
            <tr className="border-b-2 border-neutral-100">
              <th className="min-w-[140px] px-3 py-2 text-start text-sm font-semibold tracking-wider text-neutral-700 uppercase">
                ID
              </th>
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
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4585
              </td>
              <td className="p-3 text-start text-neutral-600">2023-11-15 09:30</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Alex Johnson
                </a>
              </td>
              <td className="p-3 text-start">
                Unable to Connect to Wi-Fi on Laptop
              </td>
              <td className="p-3 font-medium text-green-500">
                10000
              </td>
              <td className="p-3 text-end font-medium">
                <DeleteButton/>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4584
              </td>
              <td className="p-3 text-start text-neutral-600">2023-11-10 14:15</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Jordan Smith
                </a>
              </td>
              <td className="p-3 text-start">
                Email Campaign Software Crashing Frequently
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-blue-800">
                  Awaiting Response
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4583
              </td>
              <td className="p-3 text-start text-neutral-600">2023-11-05 17:45</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Samantha Davis
                </a>
              </td>
              <td className="p-3 text-start">
                Issues Syncing Calendar Across Devices
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-blue-800">
                  Awaiting Response
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4582
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-30 08:00</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Mindy O'Connell
                </a>
              </td>
              <td className="p-3 text-start">
                Graphics Tablet Not Responding in Design Software
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-purple-800">
                  New
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4581
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-25 20:20</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Dave Rodriguez
                </a>
              </td>
              <td className="p-3 text-start">
                Server Timeout Errors During Development
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-orange-800">
                  Under Investigation
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4580
              </td>
              <td className="p-3 text-start text-neutral-600">2023-11-10 14:15</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Helen Thompson
                </a>
              </td>
              <td className="p-3 text-start">Payroll System Access Denied Error</td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-orange-800">
                  Under Investigation
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4579
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-15 09:15</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Peter Williams
                </a>
              </td>
              <td className="p-3 text-start">CRM Tool Lagging and Freezing</td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-emerald-800">
                  Closed
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4578
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-10 16:30</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Fiona Martinez
                </a>
              </td>
              <td className="p-3 text-start">
                VPN Disconnections When Working Remotely
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-emerald-800">
                  Closed
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4577
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-05 14:00</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Danny Kim
                </a>
              </td>
              <td className="p-3 text-start">
                Database Query Execution Taking Too Long
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-emerald-800">
                  Closed
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-3 text-start font-semibold text-neutral-600">
                RN#4576
              </td>
              <td className="p-3 text-start text-neutral-600">2023-10-01 11:45</td>
              <td className="p-3 font-medium text-neutral-600">
                <a
                  href="javascript:void(0)"
                  className="underline decoration-neutral-200 decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-300"
                >
                  Mike Brown
                </a>
              </td>
              <td className="p-3 text-start">
                Video Conferencing Tool Audio Issues
              </td>
              <td className="p-3 font-medium">
                <div className="inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs leading-4 font-semibold whitespace-nowrap text-emerald-800">
                  Closed
                </div>
              </td>
              <td className="p-3 text-end font-medium">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  <span>View</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
