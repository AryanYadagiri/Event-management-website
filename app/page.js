import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import AddButton from "./components/AddButton";
import Dashboard from "./components/Dashboard";
import Tracker from "./components/Tracker";
import Cart from "./components/Cart";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
        <Card />
      </div>
      <AddButton />
      <Dashboard />
      <Tracker />
      <Cart />
    </>
  );
}
