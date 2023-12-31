import Image from "next/image";

const About = () => {
  return (
    <section className="flex items-center justify-between gap-10 px-5 lg:px-20">
      <Image
        className="hidden lg:inline-block"
        src="/logo-rows.svg"
        alt="logo"
        width={500}
        height={200}
      />

      <div>
        <h2 className="mb-5 text-3xl font-bold lg:text-5xl">About Us</h2>
        <p className="md:max-w-[35.625rem]">
          At Nova Motors, we&apos;ve been redefining the car-buying experience
          since our inception. With a passion for quality and a commitment to
          unparalleled service, we strive to match you with the perfect vehicle.
          Our dedication extends beyond the sale; it&apos;s about building
          lasting relationships with our customers.
        </p>
      </div>
    </section>
  );
};

export default About;
