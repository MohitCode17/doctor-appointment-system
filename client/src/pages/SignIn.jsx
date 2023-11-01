import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 p-3 sm:p-0">
        <h3 className="text-headingColor text-[18px] sm:text-[22px] font-bold mb-2 sm:mb-10">
          <span className="text-primaryColor">Hello!</span> Welcome Back 🎉
        </h3>
        <form className="py-4 md:py-0 flex flex-col gap-5">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
            />
          </div>
          <button
            type="submit"
            className="btn mt-2 rounded-md hover:opacity-95"
          >
            Sign In
          </button>
          <p className="mt-0 sm:mt-4 text-textColor text-center">
            Don't have an account?{" "}
            <Link to={"/sign-up"} className="text-primaryColor">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
