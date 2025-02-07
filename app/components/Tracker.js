export default function Tracker() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Service
            </th>
            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
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
            <td class="px-6 py-4">RN#4585</td>
            <td class="px-6 py-4">12.50 pm</td>
            <td class="px-6 py-4">14/4/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
