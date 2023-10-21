import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faqs = ({ item }) => {
  const { question, content } = item;
  const [isOpen, setIsOpen] = useState(false);

  // toggle accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-9 text-headingColor">
          {question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } w-7 h-7 border border-solid border-[#141f21] rounded flex items-center justify-center `}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-textColor text-[14px] leading-6 lg:text-[16px] lg:leading-7">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Faqs;
