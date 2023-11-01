import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { useState } from "react";
import uploadImageToCloundinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "",
    photo: selectedFile,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloundinary(file);
    setSelectedFile(data.url);
    setPreviewPhotoUrl(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 p-3 sm:p-0">
        <div className="mb-5 p-2">
          <img src={logo} alt="logo" className="w-[120px] sm:w-[150px]" />
        </div>
        <h3 className="text-headingColor text-[18px] sm:text-[22px] font-bold mb-2 sm:mb-10">
          Create your <span className="text-primaryColor">account</span>
        </h3>
        <form
          className="py-4 md:py-0 flex flex-col gap-5"
          onSubmit={submitHandler}
        >
          <div>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-textColor"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <label className="text-headingColor font-bold text-[16px]">
              Are you a:
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
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
                value={formData.gender}
                onChange={handleInputChange}
                className="text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="flex items-center gap-3 mb-2">
            {selectedFile && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                  src={previewPhotoUrl}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </figure>
            )}
            <div className="w-[130px] h-[50px] relative">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
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
            disabled={loading && true}
            type="submit"
            className="btn mt-2 rounded-md hover:opacity-95 flex items-center justify-center"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : "Sign Up"}
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
