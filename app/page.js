import DeleteButton from "./components/DeleteButton";
import { Card } from "./components/Card";
import AddButton from "./components/AddButton";
import UpdateButton from "./components/UpdateButton";
import SignIn from "./components/SignIn";

export default function Home() {
  return (
    <>
      <SignIn />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
        <Card />
      </div>
      <DeleteButton />
      <AddButton />
      <UpdateButton />
    </>
  );
}
