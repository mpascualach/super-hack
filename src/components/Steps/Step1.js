import React from "react";
import Loader from "../Custom/Loader";

const Step1 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <Loader />
      <p className="w-[505px] text-[24px] text-center">
        Okay understood, what categories of NFT do you want to buy?
      </p>
    </div>
  );
};

export default Step1;
