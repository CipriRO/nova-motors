import { MinimalCars, ExtendCars } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row px-5 lg:px-20 gap-6 lg:gap-9">
      <div className="flex flex-col gap-6 items-start">
        <h1 className="font-bold text-5xl lg:text-7xl lg:max-w-[31.625rem]">
          Ignite Your Journey with Nova Motors
        </h1>
        <p className="text-gray-500 lg:max-w-[55.625rem]">
          Welcome to Nova Motors, where every car embodies excellence. Discover
          a world of unparalleled performance, elegance, and innovation. Begin
          your adventure with us today and experience driving redefined.
        </p>
        <Button
          label="Discover Your Dream Ride"
          variant="lg:block bg-gray-300 hover:scale-105 transition-transform hidden"
        />
      </div>

      <div>
        <div className="w-full h-28 -mb-24 relative z-10 bg-gradient-to-b from-white to-transparent" />

        <div className="grid grid-cols-2 gap-2 md:hidden">
          {MinimalCars.map((car, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-200 inline-block rounded-xl shadow-sm row-span-3 ${
                index === 1 && "row-start-2 col-start-2"
              }`}
            >
              <Image
                className="w-full"
                src={`/images/${car.image}`}
                alt="Image of a car"
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>

        <div className="md:grid grid-cols-3 lg:grid-cols-2 gap-2 hidden">
          {ExtendCars.map((car, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-200 inline-block rounded-xl shadow-sm row-span-3 ${
                index === 1 && "row-start-2 col-start-2"
              }`}
            >
              <Image
                className="w-full"
                src={`/images/${car.image}`}
                alt="Image of a car"
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>

        <div className="w-full h-28 relative flex justify-center z-10 bg-gradient-to-t from-white to-transparent -mt-24">
          <Button
            label="Discover Your Dream Ride"
            variant="bg-gray-300 absolute bottom-0 hover:scale-105 transition-transform lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
