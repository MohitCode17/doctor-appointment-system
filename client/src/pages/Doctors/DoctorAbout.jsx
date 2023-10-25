import { formatDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h1 className="text-[20px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[22px]">
            Dr. James Peter
          </span>
        </h1>
        <p className="text_para">
          Dr. James Peter is a highly experienced General Surgeon dedicated to
          providing comprehensive surgical care to patients in New Delhi. With
          over 10 years of practice, Dr. James Peter has honed their skills and
          knowledge to deliver the highest standard of surgical services.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7 ">
            <div>
              <span className="text-irisBlueColor text-[14px] font-semibold">
                {formatDate("06-10-2004")} - {formatDate("10-20-2008")}
              </span>
              <p className="text-[14px] font-medium text-textColor">
                PHD in Surgoen
              </p>
            </div>
            <p className="text-[14px] font-medium text-textColor">
              Apolo Medical Reserach, New York, USA
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7 ">
            <div>
              <span className="text-irisBlueColor text-[14px] font-semibold">
                {formatDate("07-02-2009")} - {formatDate("09-10-2013")}
              </span>
              <p className="text-[14px] font-medium text-textColor">
                PHD in Surgoen
              </p>
            </div>
            <p className="text-[14px] font-medium text-textColor">
              AIMS Hospital, New Delhi, India
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("06-10-2004")} - {formatDate("10-20-2008")}
            </span>
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              General Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Apolo Medical Reserach, New York, USA
            </p>
          </li>
          <li className="p-4 bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("06-10-2004")} - {formatDate("10-20-2008")}
            </span>
            <p className="text-[15px] leading-6 font-semibold text-textColor">
              General Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Apolo Medical Reserach, New York, USA
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
