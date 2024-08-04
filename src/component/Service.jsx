import { FaStar } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { BiSolidNetworkChart } from "react-icons/bi";
import CardService from "./CardService";
import service from "../assets/service.png";

const Service = () => {
  return (
    <>
      <div className="container max-w-screen-xl mt-24 mx-auto" id="service">
        <div className="flex lg:justify-start lg:text-left justify-center text-center">
          <h1 className="font-extrabold lg:leading-tight text-4xl text-primary lg:text-6xl w-1/2">
            Our Various Services are{" "}
            <span className="text-tartiary">Very Profitable</span>
          </h1>
        </div>
        <div className="lg:flex justify-center mx-auto items-center">
          <div className="lg:w-[650px] sm:w-[350px] mx-auto">
            <img className="mt-5" src={service} alt="..." />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-4 justify-items-center mt-16">
            <CardService
              icon=<BsFillRocketTakeoffFill />
              title="200+ Professional and Experienced Mentors"
              desc="We are very selective in choosing mentors from various top tech
                companies by providing guidance, teaching training, and also
                evaluations after teaching periodically."
            />
            <CardService
              icon=<BiSolidNetworkChart />
              title="More than 10,000+ Quality Networking"
              desc="We are very selective in choosing mentors from various top tech
                companies by providing guidance, teaching training, and also
                evaluations after teaching periodically."
            />
            <CardService
              icon=<FaStar />
              title="Classy Study Materials According"
              desc="Classy learning materials to meet the world is needs in work and
                of course ready to serve needs, listen to complaints, and also
                help prepare students for learning both inside and outside the
                classroom."
            />
            <CardService
              icon=<MdHeadsetMic />
              title="Free Unlimited Career Consultation"
              desc="Free career consultation with our professional Consultant Team
                who will always be ready to serve Dibimbing.id students during
                the bootcamp and after graduation."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
