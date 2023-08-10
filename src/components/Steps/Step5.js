import React from "react";

const Step5 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <img className="w-[51px]" src="/loader.svg" alt="" />
      <p className="w-[373px] text-[24px] text-center">
        Minting of NFT was successful
      </p>
      <a className="text-[#1A64BC] underline" href="">
        View on block explorer
      </a>
    </div>
  );
};

export default Step5;
