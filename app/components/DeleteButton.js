"use client";

export default function DeleteButton(prop) {
  return (
    <button
    className="rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs uppercase text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
    {prop.label}
  </button>
  );
}
