import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <ul className="md:flex hidden gap-4 items-center font-semibold text-[14px]">
          <li className="hover:text-accent">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-accent">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-accent">
            <Link href="/food">Food</Link>
          </li>
          <li className="hover:text-accent">
            <Link href="/dish">Dish</Link>
          </li>
          <li className="hover:text-accent">
            <Link href="/contact">Contact</Link>
          </li>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>
        <AiOutlineMenu className="md:hidden text-accent size={30}" />
      </div>
    </div>
  );
};

export default Navbar;

