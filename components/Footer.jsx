import { ContactInfo } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row lg:text-start">
        <div>
          <h3 className="font-semibold">Contact Information</h3>
          <p>Address: {ContactInfo.address}</p>
          <p>
            Email: {ContactInfo.email} | Phone: {ContactInfo.phone}
          </p>
        </div>

        <div className="order-first text-center lg:order-[0]">
          <h3 className="text-lg font-semibold">Nova Motors</h3>
          <p>
            <span className="cursor-pointer lg:hover:underline">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="cursor-pointer lg:hover:underline">
              Terms of Service
            </span>{" "}
            | <span className="cursor-pointer lg:hover:underline">FAQ</span>
          </p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold">Connect with Us</h3>
          <div className="flex justify-center gap-2">
            <Image
              src="/images/facebook-logo.png"
              alt="Facebook Logo"
              width={35}
              height={35}
            />
            <Image
              src="/images/instagram-logo.png"
              alt="Instagram Logo"
              width={35}
              height={35}
            />
            <Image
              src="/images/x-logo.png"
              alt="X Logo"
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 text-center lg:mt-10">
        <h3 className="mb-1 text-lg font-semibold">Disclaimer</h3>
        <p className="mx-auto max-w-3xl hyphens-auto text-balance">
          This website is for demonstration purposes only and does not represent
          an actual car dealership. The vehicles, services, and information
          displayed here are purely fictional and intended solely for testing
          and illustrative purposes. Any resemblance to real dealerships, cars,
          or services is coincidental. For genuine car purchasing, please visit
          authorized dealerships and consult with industry professionals for
          accurate information and services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
