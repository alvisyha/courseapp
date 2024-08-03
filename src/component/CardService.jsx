import { FaCheckCircle } from "react-icons/fa";
const CardService = ({ icon, title, desc }) => {
  return (
    <>
      <div className="w-full lg:w-[300px] shadow-md border rounded hover:-translate-y-4 transition-all duration-300">
        <div className="p-5">
          <div className="text-indigo-600 text-4xl flex justify-center">
            {icon}
          </div>
          <h3 className="text-center font-bold text-lg py-5">{title}</h3>
          <p className="text-left text-sm leading-normal">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default CardService;
