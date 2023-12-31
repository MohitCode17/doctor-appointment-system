import { BsArrowRight } from "react-icons/bs";
import starImg from "../../assets/images/star.png";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    photo,
    specialty,
    totalPatients,
    totalRating,
    avgRating,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="doctor" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between ">
        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
          {specialty}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
            <img src={starImg} alt="" /> {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[18px] lg:mt-5">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
        </div>
        <Link to={"/doctors"}>
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center border border-solid border-[#181A1E] hover:border-primaryColor hover:bg-primaryColor hover:text-white">
            <BsArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
