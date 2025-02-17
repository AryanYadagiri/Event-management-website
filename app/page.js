import axios from "axios";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  const res = axios.get("/api/services");
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
        {}
        <Card />
      </div>
      <Footer />
    </>
  );
}
