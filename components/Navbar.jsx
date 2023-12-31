import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 flex justify-center p-5 backdrop-blur">
      <Image
        className="flex lg:hidden"
        src="/logo.svg"
        alt="Nova Motors logo"
        width={40}
        height={50}
      />
      <Image
        className="hidden lg:flex"
        src="/logo-full.svg"
        alt="Nova Motors logo"
        width={500}
        height={50}
      />
    </nav>
  );
};

export default Navbar;
