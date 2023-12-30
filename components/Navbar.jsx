import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="z-30 sticky top-0 flex justify-center p-5 backdrop-blur">
      <Image
        className="flex lg:hidden"
        src="/logo.svg"
        alt="Nova Motors logo"
        width={40}
        height={50}
      />
      <Image
        className="lg:flex hidden"
        src="/logo-full.svg"
        alt="Nova Motors logo"
        width={500}
        height={50}
      />
    </nav>
  );
};

export default Navbar;
