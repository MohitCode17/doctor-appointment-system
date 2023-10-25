import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            const starIndex = index + 1;
            return (
              <button
                key={starIndex}
                type="button"
                className={`${
                  starIndex <= (rating || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(0)}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-7">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            Share you feedback or suggestion.
          </h3>
          <textarea
            className="w-full border border-solid border-[#0066ff34] px-3 py-3 rounded-md focus:outline-primaryColor"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
