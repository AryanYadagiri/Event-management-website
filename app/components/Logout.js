import { signOut } from "@/auth";

export default function Logout() {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
