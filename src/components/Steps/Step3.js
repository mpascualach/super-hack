import React from "react";

const Step3 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <div className="w-[778px] h-[212px] bg-[#f8f8f8] p-[16px] rounded-[8px]">
        <p className="text-[24px] mb-[24px]">Pick categories</p>
        <div className="flex flex-wrap gap-[12px] cursor-pointer">
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            All
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Music
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px] border border-black">
            Art
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Sports
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Media
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Movies
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            AI
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Entertainment
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Generative
          </span>
          <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
            Collectible
          </span>
        </div>
      </div>
    </div>
  );
};

export default Step3;
