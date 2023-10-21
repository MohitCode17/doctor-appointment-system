import { faqs } from "../../assets/data/faqs";
import Faqs from "./Faqs";

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <Faqs item={item} index={index} key={index} />
      ))}
    </ul>
  );
};

export default FaqList;
