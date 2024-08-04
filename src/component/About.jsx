import about from "../assets/about.png";

const About = () => {
  return (
    <>
      <div>
        <div
          className="container max-w-screen-xl mt-24 mx-auto text-center"
          id="about"
        >
          <h1 className="mt-5 font-semibold text-xl tracking-widest text-center">
            ABOUT US
          </h1>
          <div className="lg:flex md:flex justify-around mt-10">
            <p className="font-light text-xl text-primary p-3 w-full md:w-1/4 lg:w-/14 flex mx-auto mt-5">
              {`"Since 2010, many graduates have successfully worked in large
              companies"`}
            </p>
            <div className="border"></div>
            <p className="font-light text-xl text-primary p-3 w-full md:w-1/4 lg:w-/14 flex mx-auto mt-5">
              {`"Creating the best graduates ready to enter the world of work is
              our vision"`}
            </p>
            <div className="border"></div>
            <p className="font-light text-xl text-primary p-3 w-full md:w-1/4 lg:w-/14 flex mx-auto mt-5">
              {`"Best class service is a quality that we have upheld for a long
              time"`}
            </p>
          </div>
          <img className="w-[600px] flex mx-auto mt-6" src={about} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
