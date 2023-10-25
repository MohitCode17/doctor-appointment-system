import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import avatar from "../assets/images/avatar-icon.png";

const SignUp = () => {
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 p-3 sm:p-0">
        <div className="mb-5 p-2">
          <img src={logo} alt="logo" className="w-[120px] sm:w-[150px]" />
        </div>
        <h3 className="text-headingColor text-[18px] sm:text-[22px] font-bold mb-2 sm:mb-10">
          Create your account
        </h3>
        <form className="py-4 md:py-0 flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <label className="text-headingColor font-bold text-[16px]">
              Are you a:
              <select
                name="role"
                className="text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
            <label className="text-headingColor font-bold text-[16px]">
              Gender:
              <select
                name="gender"
                className="text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={avatar} alt="avatar" className="w-full rounded-full" />
            </figure>
            <div className="w-[130px] h-[50px] relative">
              <input
                type="file"
                name="photo"
                id="customFile"
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="customFile"
                className="bg-[#0066ff46] absolute top-0 left-0 w-full h-full flex items-center px-4 py-[0.375px] text-[15px] overflow-hidden text-headingColor font-semibold rounded-lg cursor-pointer truncate"
              >
                Upload Photo
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn mt-2 rounded-md hover:opacity-95"
          >
            Sign Up
          </button>
          <p className="mt-0 sm:mt-4 text-textColor text-center">
            Already have an account?{" "}
            <Link to={"/sign-in"} className="text-primaryColor">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
