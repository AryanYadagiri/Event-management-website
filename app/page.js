import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

export default async function Home({params}) {
  const { search } = await params;
  return (
    <>
      <Navbar />
      <Slider />
      <Footer />
    </>
  );
}
