import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.webp";

const Footer = () => {
  const socialLinks = [
    {
      path: "/",
      icon: <AiFillYoutube />,
    },
    {
      path: "/",
      icon: <AiFillInstagram />,
    },
    {
      path: "/",
      icon: <AiFillGithub />,
    },
    {
      path: "/",
      icon: <AiFillFacebook />,
    },
  ];

  const quickLinks = [
    {
      path: "/",
      lable: "Home",
    },
    {
      path: "/about",
      lable: "About us",
    },
    {
      path: "/services",
      lable: "Services",
    },
    {
      path: "/blog",
      lable: "Latest Blog",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer className="pt-10 pb-16 ">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={Logo} alt="logo" width={150} />
            <p className="text-[17px] leading-7 text-textColor font-[400] mt-4">
              Developed by Mohit Gupta &copy; {year} All Right Reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="border border-solid border-[#181a1e] rounded-full w-9 h-9 flex items-center justify-center text-[18px] group hover:bg-primaryColor hover:border-none hover:text-white"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h2 className="text-[20px] leading-[30px] text-headingColor font-[700]">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
