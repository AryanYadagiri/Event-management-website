import Image from "next/image";
import ExploreButton from "./ExploreButton";

export function Card(prop) {
  return (
    <div className="max-w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <Image
          className="w-full"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Image"
          width={500}
          height={500}
        />
        {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div> */}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{prop.service_name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {prop.service_description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">$19.99</span>
          <ExploreButton/>
        </div>
      </div>
    </div>
  );
}
