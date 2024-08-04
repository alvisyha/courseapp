import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 border-b p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-base flex container mx-auto justify-between">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-base italic font-bold items-center flex space-x-3 text-primary"
            >
              Courseapp.
            </a>

            {/* Nav Items */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  spy={true}
                  smooth={true}
                  key={link}
                  to={path}
                  className="block hover:text-gray-400 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Language and btn sign-up */}
          <div className="space-x-12 hidden md:flex items-center">
            <GrLanguage />
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              Languange
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-primary text-white hove:bg-indigo-300">
              Sign Up
            </button>
          </div>

          {/* Toogle btn on mobile display */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Navitem Mobile */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link key={link} to={path} className="block hover:text-gray-300">
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
