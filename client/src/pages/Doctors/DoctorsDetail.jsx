import { useState } from "react";
import doctorImg from "../../assets/images/doctor-1.webp";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorFeedback from "./DoctorFeedback";
import AppointmentPanel from "./AppointmentPanel";

const DoctorsDetail = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-5 ">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
              <figure className=" max-w-[250px] max-h-[250px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded ">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[18px] md:text-[22px] leading-5 md:leading-7 mt-4 font-bold">
                  Dr. James Peter
                </h3>
                <div className="flex items-center gap-[2px] mt-2">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img
                      src={starIcon}
                      alt=""
                      className="w-3 h-3 md:w-4 md:h-4 "
                    />
                    4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    (272)
                  </span>
                </div>
                <p className="text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] ">
                  Specialty containing breast, colorectal, transplant of kidney,
                  liver.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setActiveTab("about")}
                className={` ${
                  activeTab === "about" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={` ${
                  activeTab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-12">
              {activeTab === "about" && <DoctorAbout />}
              {activeTab === "feedback" && <DoctorFeedback />}
            </div>
          </div>
          <div>
            <AppointmentPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetail;
