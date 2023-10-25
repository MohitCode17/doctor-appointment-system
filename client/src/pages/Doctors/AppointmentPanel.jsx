const AppointmentPanel = () => {
  return (
    <div className="shadow-lg rounded-md p-3 lg:p-5">
      <div className="flex items-center justify-between">
        <p className="text_para font-semibold mt-0">Appointment Fees</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold ">
          500 INR
        </span>
      </div>
      <div className="mt-7">
        <p className="text_para font-semibold mt-0 text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 5:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              6:00 PM - 7:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Wednesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              6:00 PM - 7:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default AppointmentPanel;
