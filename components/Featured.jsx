import { FeaturedCars } from "@/constants";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="px-5 lg:px-20">
      <h2 className="mb-4 text-3xl font-bold lg:text-5xl">Featured Cars</h2>
      <p className="mb-4 md:max-w-[50.625rem]">
        Explore our handpicked selection of automotive masterpieces. From the
        unparalleled elegance and performance of our{" "}
        <span className="font-medium">2023 NovaLux Series</span> to embracing
        the future with our{" "}
        <span className="font-medium">Revolutionary Electric Collection</span>,
        and the timeless charm of our{" "}
        <span className="font-medium">Classic Cars Showcase</span>, each vehicle
        at Nova Motors is a testament to craftsmanship and sophistication.
      </p>

      <div className="grid grid-cols-[repeat(4,_minmax(50px,_1750px))] justify-center gap-2 p-2 md:grid-cols-[repeat(6,_minmax(100px,_175px))] lg:gap-4">
        {FeaturedCars.map((car, index) => (
          <div
            className={`shaodw-md col-span-2 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-gray-300 p-3 transition-transform lg:hover:scale-105 ${
              index === 2 && "col-start-2 md:col-start-5"
            }`}
            key={index}
          >
            <Image
              src={`/images/${car.image}`}
              alt="Image of a car"
              width={150}
              height={70}
              className="w-full lg:w-3/5"
            />
            <p className="text-center font-semibold">{car.topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
