import { FaInstagram } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between py-20">
            <div className="mx-auto">
              <h1 className="text-white text-2xl font-bold italic pb-5">
                Courseapp.
              </h1>
              <div className="flex gap-5 py-2">
                <div className="flex items-center text-primary text-xl">
                  <MdLocationOn />
                </div>
                <p className="text-sm text-white">
                  Jalan Dr. Soetomo, Jakarta Pusat,
                  <br />
                  Indonesia
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <div className="flex items-center text-xl text-primary">
                  <MdEmail />
                </div>
                <p className="text-sm text-white">courseapp@mail.com</p>
              </div>
              <div className="flex gap-5 py-2">
                <div className="flex items-center text-primary">
                  <BsFillTelephoneFill />
                </div>
                <p className="text-sm text-white">+628 123 123</p>
              </div>
            </div>
            <div className="mb-16 mt-16 lg:mt-0">
              <h3 className="text-white font-normal text-xl text-center ">
                Our socila media
              </h3>
              <div className="flex gap-5 justify-center mt-8 text-primary text-xl">
                <a className="hover:text-white" href="/">
                  <FaInstagram />
                </a>
                <a className="hover:text-white" href="/">
                  <FaFacebook />
                </a>
                <a className="hover:text-white" href="/">
                  <FaXTwitter />
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <h3 className="text-white text-xl font-normal lg:text-left text-center ">
                Join a newsletter
              </h3>
              <input
                className="mt-8 rounded px-2 py-2"
                placeholder="Enter your email..."
                type="text"
              />
              <div className="mt-4 flex justify-center lg:justify-start">
                <a
                  className=" flex gap-3 items-center bg-primary text-white text-sm rounded-sm font-semibold px-4 py-2 hover:bg-blue-900 trasition duration-300"
                  href="/"
                >
                  Send <FaRegPaperPlane />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
