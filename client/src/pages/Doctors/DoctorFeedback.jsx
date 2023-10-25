import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DoctorFeedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-headingColor text-[20px] font-bold mb-4">
          All reviews (1940)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px] ">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="avatar" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] text-primaryColor font-bold">
                Rohan Sharma
              </h5>
              <p className="text-[14px] leading-5 text-textColor">
                {formatDate("01-02-2022")}
              </p>
              <p className="text_para font-medium text-[15px]">
                Good services, highly recomnded
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default DoctorFeedback;
