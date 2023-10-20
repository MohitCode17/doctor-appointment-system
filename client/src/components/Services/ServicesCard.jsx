import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ item }) => {
  const { name, desc } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5 shadow rounded-md group hover:bg-primaryColor cursor-default">
      <h2 className="text-[26px] text-headingColor group-hover:text-white font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-6 font-[400] text-textColor mt-4 group-hover:text-white">
        {desc}
      </p>
      <Link to={"/doctors"}>
        <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center mt-5 border border-solid border-[#181A1E] cursor-pointer group-hover:border-white group-hover:text-white">
          <BsArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
