import React from "react";
import Loader from "../Custom/Loader";

const Step2 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <Loader />
      <p className="w-[322px] text-[24px] text-center">
        Thinking. Loading. Minting.
      </p>
    </div>
  );
};

export default Step2;
