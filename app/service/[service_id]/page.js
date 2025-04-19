import axios from "axios";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Payment from "@/app/components/Payment";

export default async function Page({ params }) {
  const { service_id } = await params;
  const API = "http://localhost:3000/api/service";

  const response = await axios.get(API, { params: { service_id: service_id } });
  const data = response.data.data;
  // console.log(data.data.image_url)
  return (
    <>
      <Navbar />
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-7xl">
              {data.service_name}
            </div>
          </div>
        </header>
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                {data.service_description}
              </h1>
              <p className="mt-10 font-bold text-sm sm:text-2xl text-blue-700 dark:text-white">
                Rs {data.charges}
              </p>
              <div className="flex mt-8">
                <Payment service={data.service_id} />

                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-700 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md"
                >
                  Business Info
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <Image
                src={data.image_url}
                fill
                alt="Watch Display"
                className="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
