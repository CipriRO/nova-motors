import { TestimonialsList } from "@/constants";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center px-5 lg:px-20">
      <div className="mb-12">
        <h2 className="text-center text-3xl font-bold lg:text-5xl">
          Not convinced yet?
        </h2>
        <h2 className="text-center text-3xl font-bold lg:text-5xl">
          Take a look at what other people said.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-4 lg:gap-10">
        {TestimonialsList.map((person, index) => (
          <div
            key={index}
            className="flex-1 rounded-xl bg-gray-300 max-w-lg p-3 shadow-lg lg:p-5 relative"
          >

            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full lg:w-14 shadow-md"
                  src={`/images/picture-${person.name.toLowerCase()}.jpg`}
                  alt={person.name + " picture"}
                  width={50}
                  height={50}
                />
                <div>
                  <h3 className="font-semibold lg:text-lg">{person.name}</h3>
                  <p className="text-sm lg:text-base font-medium text-gray-500">
                    {person.car}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {Array(person.stars).fill(1).map((_, index) => (
                  <StarIcon key={index} className="w-7 lg:w-8 fill-yellow-400 drop-shadow" />
                ))}
              </div>
            </div>

            <p>{person.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
