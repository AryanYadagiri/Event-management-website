"user client";

export default function AddButton() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <button className="relative">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-7 py-1 text-base font-bold text-black uppercase transition duration-100 hover:brightness-50 hover:text-gray-900">
          add
        </span>
      </button>
    </div>
  );
}
