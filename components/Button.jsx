import Image from "next/image";

const Button = ({ label, icon, variant }) => {
  return (
    <button className={`rounded-full p-3 font-semibold shadow-md ${variant}`}>
      {icon && <Image src={icon} alt={label} width={50} height={50} />}
      {label}
    </button>
  );
};

export default Button;
