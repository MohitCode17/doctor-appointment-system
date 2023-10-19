import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About img */}
          <div className="w-3/4 lg:1/2 xl:w-[780px] z-10 self-center md:self-start">
            <img src={aboutImg} alt="" />
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl-w-[670px]">
            <h2 className="heading">Our Commitment to Your Health</h2>
            <p className="text_para">
              At <span className="font-[800] text-primaryColor">Pharma+</span>,
              we are dedicated to revolutionizing the way you access healthcare.
              We understand that your health is your precious asset, and our
              mission is to make quality medical care accessible, convenient,
              and patient-centric.
            </p>
            <p className="text_para mt-[30px]">
              With a team of dedicated professionals, cutting edge technology,
              and a passion for wellness. We are here to empower you on your
              journey to better health. Learn more about our story of wellness.
            </p>
            <Link to={"/"}>
              <button className="btn">Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
