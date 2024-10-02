import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-3 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="leading-[1.8]">
              At Delicious Food, we believe that food is not just nourishment,
              it's an experience. Our chefs use the finest ingredients to craft
              dishes that not only satisfy your taste buds but also create
              unforgettable memories. Whether it's a cozy dinner or a special
              event, we are here to serve you with passion and creativity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">The Restaurant</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Chefs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex gap-8 text-accent text-2xl">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <BsTwitter />
              </a>
              <a href="#" aria-label="Pinterest">
                <BsPinterest />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="text-accent text-sm">
            &copy; {new Date().getFullYear()} Delicious Food. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
