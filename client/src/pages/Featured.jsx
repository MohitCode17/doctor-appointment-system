import { Link } from "react-router-dom";
import appointmentImg from "../assets/images/appointment.png";

const Featured = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* left side featured section */}
          <div className="xl:w-[670px]">
            <p className="text_para text-primaryColor font-[500] uppercase">
              Discover features
            </p>
            <h2 className="heading">
              Get virtual treatment <br /> anytime.
            </h2>

            {/* List items */}
            <ul className="pl-4 pt-2">
              <li className="text_para">
                1. Access quality healthcare from the comfort of your home.
              </li>
              <li className="text_para">
                2. Connect with doctors through secure vide & phone call.
              </li>
              <li className="text_para">
                3. Schedule virtual follow-up appointments to monitor your
                health.
              </li>
            </ul>
            <Link to={"/"}>
              <button className="btn">Learn more</button>
            </Link>
          </div>
          {/* right side featured section */}
          <div className="drop-shadow-lg">
            <img
              src={appointmentImg}
              alt="virtual-appointment"
              className="w-full md:w-[550px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
