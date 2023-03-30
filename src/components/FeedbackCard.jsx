import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-8 rounded-[20px] max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[32px] object-contain"
      />
      <p className="font-poppins font-normal text-[12px] leading-[20px] text-white my-8">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt="name" className="w-[40px] h-[40px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semi text-[15px] leading-[20px] text-white">{name}</h4>
          <p className="font-poppins font-normal text-[12px] leading-[19px] text-dimWhite ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
