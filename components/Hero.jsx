import { HeroMinimalCars, HeroExtendCars } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 px-5 selection:bg-black selection:text-white lg:flex-row lg:gap-9 lg:px-20">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-5xl font-bold md:max-w-[31.625rem] lg:text-7xl">
          Ignite Your Journey with Nova Motors
        </h1>
        <p className="text-gray-500 md:max-w-[40.625rem]">
          Welcome to Nova Motors, where every car embodies excellence. Discover
          a world of unparalleled performance, elegance, and innovation. Begin
          your adventure with us today and experience driving redefined.
        </p>
        <Button
          label="Discover Your Dream Ride"
          variant="lg:block bg-gray-300 lg:hover:scale-105 transition-transform hidden"
        />
      </div>

      <div>
        <div className="relative z-10 -mb-24 h-28 w-full bg-gradient-to-b from-white to-transparent" />

        <div className="grid grid-cols-2 gap-2 md:hidden">
          {HeroMinimalCars.map((car, index) => (
            <div
              key={index}
              className={`row-span-3 inline-block rounded-xl bg-gray-200 p-6 shadow-sm ${
                index === 1 && "col-start-2 row-start-2"
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

        <div className="hidden grid-cols-3 gap-2 md:grid lg:grid-cols-2">
          {HeroExtendCars.map((car, index) => (
            <div
              key={index}
              className={`row-span-3 inline-block rounded-xl bg-gray-200 p-6 shadow-sm ${
                index === 1 && "col-start-2 row-start-2"
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

        <div className="relative z-10 -mt-24 flex h-28 w-full justify-center bg-gradient-to-t from-white to-transparent">
          <Button
            label="Discover Your Dream Ride"
            variant="bg-gray-300 absolute bottom-0 lg:hover:scale-105 transition-transform lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
