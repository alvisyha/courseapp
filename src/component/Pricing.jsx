import { useState } from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      montlyPrice: "300",
      yearlyPrice: "3.000",
      desc: "Lorem1biuabifuiu aeufbaiebf ehabi",
      path: "/start",
    },
    {
      name: "Middle",
      montlyPrice: "500",
      yearlyPrice: "4.800",
      desc: "Lorem1biuabifuiu aeufbaiebf ehabi",
      path: "/middle",
    },
    {
      name: "Advance",
      montlyPrice: "700",
      yearlyPrice: "6.500",
      desc: "Lorem1biuabifuiu aeufbaiebf ehabi",
      path: "/advance",
    },
  ];
  return (
    <>
      <div className="container mx-auto justify-center mt-10 mb-20">
        <div className="flex justify-center">
          <h1 className="text-4xl text-center font-bold w-1/2 text-primary">
            Take this <span className="text-tartiary">best opportunity</span>,
            choose according to your needs!
          </h1>
        </div>
        <div className="mt-2 flex justify-center">
          <p className="text-sm">
            Payment is easy and available monthly or annually, take it according
            to your needs.
          </p>
        </div>
        <div className="flex mt-16 justify-center">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text=2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text=2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => {
              setIsYearly(!isYearly);
            }}
          />
        </div>

        {/* Card Pricing */}
        <div className="grid lg:grid-cols-3 gap-3 mt-12">
          {packages.map((packg, index) => (
            <div
              key={index}
              className="border py-10 md:px-6 px-4 rounded-lg shadow-xl"
            >
              <h3 className="font-3xl py-3 font-bold text-center text-primary">
                {packg.name}
              </h3>
              <p className="text-tartiary text-center">{packg.desc}</p>
              <p className="text-center mt-5 text-secondary text-4xl font-bold">
                <span className="text-tartiary text-base">Rp</span>
                {isYearly ? packg.yearlyPrice : packg.montlyPrice}
                <span className="text-tartiary text-base">
                  {isYearly ? " K / year" : "K / month"}
                </span>
              </p>
              <div className="ml-2">
                <div className="flex items-center mt-8">
                  <div className="text-green-500 ml-10 mr-7">
                    <FaRegCheckCircle />
                  </div>
                  <p className="text-sm text-tartiary">Videos of lesson</p>
                </div>
                <div className="flex items-center mt-3">
                  <div className="text-green-500 ml-10 mr-7">
                    <FaRegCheckCircle />
                  </div>
                  <p className="text-sm text-tartiary">Homework check</p>
                </div>
                <div className="flex items-center mt-3">
                  <div className="text-green-500 ml-10 mr-7">
                    <FaRegCheckCircle />
                  </div>
                  <p className="text-sm text-tartiary">Monthly conference</p>
                </div>
                <div className="flex items-center mt-3">
                  {packg.name != "Start" ? (
                    <div className="text-green-500 ml-10 mr-7">
                      <FaRegCheckCircle />
                    </div>
                  ) : (
                    <div className="text-red-500 ml-10 mr-7">
                      <FaRegTimesCircle />
                    </div>
                  )}
                  <p className="text-sm text-tartiary">
                    Personal advice from mentor
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  {packg.name != "Start" && packg.name != "Middle" ? (
                    <div className="text-green-500 ml-10 mr-7">
                      <FaRegCheckCircle />
                    </div>
                  ) : (
                    <div className="text-red-500 ml-10 mr-7">
                      <FaRegTimesCircle />
                    </div>
                  )}
                  <p className="text-sm text-tartiary">
                    Additional Practical Class
                  </p>
                </div>
                <div className="flex mx-auto mt-10">
                  <a
                    className=" flex gap-3 items-center bg-secondary text-white text-sm rounded-sm font-semibold px-4 py-2  mx-auto mt-18  hover:bg-blue-900 trasition duration-300"
                    href="/"
                  >
                    <SlBasket /> Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
