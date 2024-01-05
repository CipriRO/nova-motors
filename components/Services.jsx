import { ServicesList } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section className="flex flex-col">
      <h2 className="mb-4 ml-5 text-3xl font-bold lg:ml-20 lg:text-5xl">
        Services
      </h2>

      <div className="hide-scrollbar flex h-[340px] snap-x snap-mandatory gap-5 overflow-auto lg:h-[400px] xl:h-[640px]">
        {ServicesList.map((service, index) => (
          <div
            key={index}
            className={`aspect-video h-full w-full snap-center p-5 lg:px-20 lg:py-10 ${service.bg} bg-cover bg-center`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gray-300 p-3 shadow-lg">
                <Image
                  src={"/icons/" + service.icon}
                  width={35}
                  height={35}
                  alt={service.name}
                />
              </div>

              <p className="text-shadow text-balance text-xl font-bold">
                {service.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <MessageBox />
    </section>
  );
};

const MessageBox = () => {
  return (
    <div className="z-10 mx-4 -mt-24 max-w-[32rem] self-center rounded-xl bg-gray-300 px-4 py-3 shadow-2xl md:rounded-2xl lg:-mt-36 lg:mr-20 lg:self-end lg:px-7 lg:py-6">
      <h4 className="mb-2 text-lg font-bold md:text-2xl">
        Exceptional Service
      </h4>
      <p>
        Nova Motors ensures your vehicle remains in top condition. Our certified
        technicians offer premium, tailored services—ranging from routine
        maintenance to major repairs—to meet your car&apos;s specific needs.
        Experience expert care that keeps your vehicle running smoothly.
      </p>
    </div>
  );
}

export default Services;
