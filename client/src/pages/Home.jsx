import HeroImgOne from "../assets/images/hero-img01.png";
import HeroImgTwo from "../assets/images/hero-img02.png";
import HeroImgThree from "../assets/images/hero-img03.png";
import iconOne from "../assets/images/icon01.png";
import iconTwo from "../assets/images/icon02.png";
import iconThree from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "./About";
import ServicesList from "../components/Services/ServicesList";
import Featured from "./Featured";
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Your Journey to Wellness Starts Here.
                </h1>
                <p className="text_para">
                  Welcome to{" "}
                  <span className="font-[800] text-primaryColor">Pharma+</span>,
                  Begin your path to better health with our user-friendly Doctor
                  Appointment Booking App. Book Appointment with ease and take
                  charge of your well-being.
                </p>
                <button className="btn hover:opacity-90">
                  Book an Appointment
                </button>
              </div>
              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    5+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* hero banner image */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={HeroImgOne} alt="" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img src={HeroImgTwo} alt="" className="w-full mb-[30px]" />
                <img src={HeroImgThree} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================================================================================== */}
      {/* How it work section */}
      <section>
        <div className="container">
          <div className="lg:w-[580px] mx-auto">
            <h2 className="heading text-center">
              Your Journey to Better Health, Simplified
            </h2>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt[55px]">
            <div className="py-[30px] px-5 bg-slate-100 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={iconOne} alt="" />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find the Perfect Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  With our app, searching for the ideal healthcare provided in a
                  breeze. Filter by specialty, location and availability.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 bg-slate-100 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={iconTwo} alt="" />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Discover Convenient Locations
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  Explore healthcare facilities and clinics near you. Easily
                  identify and ensuring quality medical care is always within
                  reach.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 bg-slate-100 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={iconThree} alt="" />
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Effortless Appointment Booking
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                  Seheduling your next doctor's appointment has been easier now.
                  Choose the time that suits you best, and confirm your visit
                  with just a few clicks.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#101A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================================================================================== */}
      {/* Know about us section */}
      <About />
      {/* ====================================================================================== */}
      {/* Our services */}
      <section>
        <div className="container">
          <div className="lg:w-[580px] mx-auto">
            <p className="text-center text_para text-primaryColor font-[600] uppercase">
              Our Services
            </p>
            <h2 className="heading text-center">Offers for you</h2>
          </div>
          {/* Services list */}
          <ServicesList />
        </div>
      </section>
      {/* ====================================================================================== */}
      {/* Our featured Section */}
      <Featured />
      {/* ====================================================================================== */}
      {/* Our doctors list */}
      <section>
        <div className="container">
          <div className="lg:w-[580px] mx-auto">
            <p className="text-center text_para text-primaryColor font-[600] uppercase">
              Our Team
            </p>
            <h2 className="heading text-center">Our Experts Doctor</h2>
          </div>
          {/* Services list */}
          <DoctorsList />
        </div>
      </section>
      {/* ====================================================================================== */}
      {/* faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faq" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions (FAQ)</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
