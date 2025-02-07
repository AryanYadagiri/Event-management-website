import DeleteButton from "./DeleteButton";

export default function Cart() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Service Id
            </th>
            <th scope="col" class="px-6 py-3">
              Service Name
            </th>
            <th scope="col" class="px-6 py-3">
              Charges
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3488
            </th>
            <td class="px-6 py-4">Food and Beverages</td>
            <td class="px-6 py-4">Rs 21345</td>
            <td class="px-6 py-4">
              <DeleteButton label={"remove"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
