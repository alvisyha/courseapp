const Banner = ({ banner, heading, subHeading, btn1, btn2 }) => {
  return (
    <>
      <div className="gradientBg rounded-md p-12 py-18 md:rounded-tr-[120px] rounded-bl-[10px]">
        <div className="flex flex-col lg:flex-row-reverse lg justify-between items-center gap-6">
          <img
            src={banner}
            alt="banner"
            className="md:h-[356px] sm:h-[250px]"
          />
          <div>
            <h1 className="font-bold text-4xl text-white lg:text-left text-center">
              {heading}
            </h1>
            <p className="font-regular py-2 mt-5 leading-6 text-white text-center lg:text-left">
              {subHeading}
            </p>
            <div className="mt-5 lg:justify-normal justify-center flex gap-3">
              <button className="bg-secondary text-white rounded p-2 hover:bg-indigo-700 hover:text-gray-800">
                {btn1}
              </button>
              <button className="border text-white rounded p-2 hover:bg-indigo-700 hover:text-gray-800">
                {btn2}
              </button>
            </div>
            <div className="mt-10 flex lg:justify-normal justify-center gap-5">
              <div className="">
                <h3 className="text-center font-bold text-2xl text-white">
                  1K+
                </h3>
                <p className="text-center font-semibold text-sm text-white mt-3">
                  Graduate Students
                </p>
              </div>
              <div>
                <h3 className="text-center font-bold text-2xl text-white">
                  96%
                </h3>
                <p className="text-center font-semibold text-sm text-white mt-3">
                  Job Guarantee
                </p>
              </div>
              <div>
                <h3 className="text-center font-bold text-2xl text-white">
                  200+
                </h3>
                <p className="text-center font-semibold text-sm text-white mt-3">
                  Learning Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
