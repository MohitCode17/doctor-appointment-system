import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonials from "../../components/Testimonials/Testimonials";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="bg-[#0066ff2c] max-w-[570px] mx-auto mt-[30px] rounded-md flex items-center justify-between ">
            <input
              type="text"
              placeholder="Search doctor..."
              className="bg-transparent w-full py-4 pl-4 placeholder:text-textColor focus:outline-none font-[600]"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md ">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[580px] mx-auto">
            <h2 className="heading text-center">
              What our patients say about us..
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Doctors;
