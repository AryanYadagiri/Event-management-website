import DeleteButton from "./components/DeleteButton";
import { Card } from "./components/Card";
import AddButton from "./components/AddButton";
import UpdateButton from "./components/UpdateButton";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
        <Card />
      </div>
      <DeleteButton />
      <AddButton />
      <UpdateButton />
    </>
  );
}
