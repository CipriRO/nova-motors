import Image from "next/image";

const Services = () => {
  return (
    <section className="">
      <h2 className="mb-4 ml-5 text-3xl font-bold lg:ml-20 lg:text-5xl">
        Services
      </h2>
      <div className="w-11/12 aspect-video rounded-e-2xl bg-[url('/images/services-1.jpg')] bg-cover bg-center" />
      <div className="mx-auto -mt-12 py-3 px-4 w-96 rounded-lg bg-gray-300 shadow-2xl">
        <h4 className="mb-2 font-semibold text-lg">Exceptional Service</h4>
        <p>
          From routine maintenance to major repairs, our team of certified
          technicians ensures your vehicle stays in top condition. Experience
          premium service tailored to your car&apos;s needs.
        </p>
      </div>
    </section>
  );
};

export default Services;
